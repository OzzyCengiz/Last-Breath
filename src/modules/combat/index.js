import { ENEMIES, getEnemy } from '../../data/enemies.js';
import { ref } from '../../i18n/i18n.js';
import { rollRange } from '../../core/rng.js';
import { combatRating, weaponProfile } from '../inventory/inventorySelectors.js';
import { grantItems } from '../inventory/index.js';
import { rollLoot } from '../inventory/loot.js';
import { getNode } from '../map/mapGraph.js';
import { skillLevel } from '../skills/skillSelectors.js';

const enemyName = (enemyId) => ref(`enemy.${enemyId}.name`);

export function pickEnemyForNode(rng, nodeId) {
  const node = getNode(nodeId);
  const pool = Object.entries(ENEMIES)
    .filter(([, def]) => {
      if (def.minDanger && node.danger < def.minDanger) return false;
      if (def.biomes && !def.biomes.includes(node.biome)) return false;
      return true;
    })
    .map(([id, def]) => ({ id, ...def }));

  if (pool.length === 0) return { id: 'feral_hound', ...ENEMIES.feral_hound };
  return rng.pick(pool);
}

function resolveEnemyTurn(ctx, enemyId) {
  const { store, rng, effects, engine } = ctx;
  const enemy = getEnemy(enemyId);
  const dodgeBonus = skillLevel(store.state, 'foraging') * 0.02;
  const hitChance = Math.max(0.25, enemy.accuracy - dodgeBonus);

  if (!rng.chance(hitChance)) {
    engine.log('combat.enemy_missed', { name: enemyName(enemyId) }, 'good');
    return;
  }

  const dmg = rollRange(rng, enemy.damage);
  engine.log('combat.enemy_hit', { name: enemyName(enemyId), dmg }, 'bad');
  const combatEffects = [{ type: 'damage', amount: dmg, cause: 'wounds' }];
  if (enemy.bleedChance && rng.chance(enemy.bleedChance)) {
    combatEffects.push({ type: 'ailment', id: 'bleeding' });
  }
  if (enemy.infectChance && rng.chance(enemy.infectChance)) {
    combatEffects.push({ type: 'ailment', id: 'infection' });
  }
  effects.apply(combatEffects, ctx, { kind: 'combat', enemyId });
}

export const combatModule = {
  id: 'combat',

  createState() {
    return { activeEngagement: null, victories: 0 };
  },

  install(ctx) {
    const { store, rng, effects, engine } = ctx;

    store.registerMutations('combat', {
      start(state, { enemyId, hp }) {
        state.combat.activeEngagement = {
          enemyId,
          hp,
          maxHp: hp,
          round: 1,
          scavenged: false,
        };
      },
      damageEnemy(state, amount) {
        const active = state.combat.activeEngagement;
        if (!active) return 0;
        active.hp = Math.max(0, active.hp - amount);
        active.round += 1;
        return active.hp;
      },
      markScavenged(state) {
        if (state.combat.activeEngagement) {
          state.combat.activeEngagement.scavenged = true;
          state.combat.activeEngagement.round += 1;
        }
      },
      nextRound(state) {
        if (state.combat.activeEngagement) state.combat.activeEngagement.round += 1;
      },
      end(state, { won = false } = {}) {
        state.combat.activeEngagement = null;
        if (won) state.combat.victories = (state.combat.victories ?? 0) + 1;
      },
    });

    engine.addGuard((type, options, state) => {
      if (state.combat.activeEngagement && !options.allowDuringCombat && !options.allowDuringEncounter) {
        return 'reject.in_combat';
      }
      return null;
    });

    engine.registerAction('combat/patrol', () => {
      const nodeId = store.state.world.currentNodeId;
      const picked = pickEnemyForNode(rng, nodeId);
      store.commit('combat/start', { enemyId: picked.id, hp: picked.hp });
      engine.log('combat.enemy_appeared', { name: enemyName(picked.id) }, 'warn');
      engine.advanceTime(15, 'scavenge');
      return { ok: true };
    });

    engine.registerAction('combat/action', ({ move }) => {
      const active = store.state.combat.activeEngagement;
      if (!active) return { ok: false, reason: 'reject.no_combat' };
      const enemy = getEnemy(active.enemyId);
      const rating = combatRating(store.state);
      const weapon = weaponProfile(store.state);

      if (move === 'flee') {
        const escapeChance = Math.min(0.9, 0.55 + skillLevel(store.state, 'foraging') * 0.05);
        effects.apply([{ type: 'vital', vital: 'energy', amount: -6 }], ctx);
        if (rng.chance(escapeChance)) {
          store.commit('combat/end', { won: false });
          engine.log('combat.fled_success', { name: enemyName(active.enemyId) }, 'warn');
          return { ok: true };
        }
        engine.log('combat.fled_failed', { name: enemyName(active.enemyId) }, 'bad');
        store.commit('combat/nextRound');
        resolveEnemyTurn(ctx, active.enemyId);
        return { ok: true };
      }

      if (move === 'scavenge') {
        if (active.scavenged) return { ok: false, reason: 'reject.already_scavenged' };
        store.commit('combat/markScavenged');
        const loot = rollLoot(rng, enemy.lootTable, 1);
        effects.apply([
          { type: 'xp', skill: 'foraging', amount: 6 },
          { type: 'vital', vital: 'energy', amount: -4 },
        ], ctx);
        const nodeId = store.state.world.currentNodeId;
        engine.bus.emit('loot:modal', {
          type: 'combat_scavenge',
          titleKey: 'loot.title.combat_scavenge',
          descKey: 'loot.desc.combat_scavenge',
          descParams: {},
          items: loot,
          nodeId,
          onConfirm: (taken, left) => {
            for (const { itemId, qty } of taken) grantItems(ctx, itemId, qty);
            for (const { itemId, qty } of left) {
              store.commit('inventory/toGround', { nodeId, itemId, qty });
            }
          },
        });
        resolveEnemyTurn(ctx, active.enemyId);
        return { ok: true };
      }

      const isAimed = move === 'aimed';
      if (isAimed && weapon.ammoId && weapon.loaded) {
        store.commit('inventory/remove', { itemId: weapon.ammoId, qty: 1 });
      }

      const hitChance = Math.min(
        0.95,
        (isAimed ? 0.75 : 0.84) + skillLevel(store.state, 'marksmanship') * 0.02 - enemy.evasion,
      );
      effects.apply([{ type: 'vital', vital: 'energy', amount: isAimed ? -5 : -3 }], ctx);

      if (rng.chance(hitChance)) {
        const baseDmg = Math.round(rating * (isAimed ? 3.4 : 2.4)) + rng.int(2, 6);
        const remainingHp = store.commit('combat/damageEnemy', baseDmg);
        engine.log('combat.player_hit', { name: enemyName(active.enemyId), dmg: baseDmg }, 'good');

        if (remainingHp <= 0) {
          store.commit('combat/end', { won: true });
          engine.log('combat.victory', { name: enemyName(active.enemyId) }, 'good');
          const drops = rollLoot(rng, enemy.lootTable, rng.int(1, 2));
          effects.apply([{ type: 'xp', skill: 'marksmanship', amount: enemy.xp }], ctx);
          const nodeId = store.state.world.currentNodeId;
          engine.bus.emit('loot:modal', {
            type: 'combat_victory',
            titleKey: 'loot.title.combat_victory',
            descKey: 'loot.desc.combat_victory',
            descParams: { enemy: enemyName(active.enemyId), xp: enemy.xp },
            items: drops,
            nodeId,
            onConfirm: (taken, left) => {
              for (const { itemId, qty } of taken) grantItems(ctx, itemId, qty);
              for (const { itemId, qty } of left) {
                store.commit('inventory/toGround', { nodeId, itemId, qty });
              }
            },
          });
          return { ok: true };
        }
      } else {
        store.commit('combat/nextRound');
        engine.log('combat.player_missed', { name: enemyName(active.enemyId) }, 'warn');
      }

      resolveEnemyTurn(ctx, active.enemyId);
      return { ok: true };
    }, { allowDuringCombat: true });
  },
};
