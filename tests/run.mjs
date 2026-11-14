import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getEnemyLevelBounds, scaleEnemyForLevel } from '../src/modules/combat/index.js';
import { getEnemy } from '../src/data/enemies.js';
import { calculateDefensePower, getOutpostTier, countAvailableMaterial, consumeAvailableMaterial } from '../src/modules/base/index.js';
import { isRecipeUnlocked } from '../src/modules/crafting/index.js';
import { armorValue, weaponProfile } from '../src/modules/inventory/inventorySelectors.js';
import { addItem } from '../src/modules/inventory/inventoryModel.js';
import { grantItems } from '../src/modules/inventory/index.js';
import { SaveManager } from '../src/core/saveManager.js';
import { createBaseState, coreModule } from '../src/core/coreModule.js';
import { EventBus } from '../src/core/eventBus.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function run(name, fn) {
  try {
    fn();
    console.log(`PASS: ${name}`);
  } catch (err) {
    console.error(`FAIL: ${name}`);
    console.error(err);
    process.exitCode = 1;
  }
}

run('Locales JSON validity and new feature keys', () => {
  for (const lang of ['en', 'tr', 'th']) {
    const raw = fs.readFileSync(path.join(ROOT, 'locales', `${lang}.json`), 'utf8');
    const data = JSON.parse(raw);
    assert.ok(data.enemy?.alpha_beast?.name, `${lang} missing enemy.alpha_beast`);
    assert.ok(data.enemy?.armored_warlord?.name, `${lang} missing enemy.armored_warlord`);
    assert.ok(data.enemy?.rogue_exo_commander?.name, `${lang} missing enemy.rogue_exo_commander`);
    assert.ok(data.faction?.contract?.accept, `${lang} missing faction.contract.accept`);
    assert.ok(data.base?.posture?.fortify, `${lang} missing base.posture.fortify`);
    assert.ok(data.log?.crafting?.blueprint_unlocked, `${lang} missing log.crafting.blueprint_unlocked`);
    assert.ok(data.reject?.blueprint_locked, `${lang} missing reject.blueprint_locked`);
    assert.ok(data.endgame?.victory_title, `${lang} missing endgame.victory_title`);
    assert.ok(data.inventory?.action?.salvage, `${lang} missing inventory.action.salvage`);
    assert.ok(data.radio?.ui?.scan_intel, `${lang} missing radio.ui.scan_intel`);
    assert.ok(data.status?.readout?.season_effect, `${lang} missing status.readout.season_effect`);
    assert.ok(data.codex?.ach?.boss_slayer?.title, `${lang} missing codex.ach.boss_slayer`);
    assert.ok(data.codex?.ach?.contract_runner?.title, `${lang} missing codex.ach.contract_runner`);
    assert.ok(data.codex?.ach?.sector_09_evacuee?.title, `${lang} missing codex.ach.sector_09_evacuee`);
  }
});

run('Enemy level bounds: days 1-2 strictly [playerLevel, playerLevel+1], day 20+ max +15', () => {
  const day1 = getEnemyLevelBounds({ time: { minutes: 360 }, player: { xp: 0 } }, 'moscow');
  assert.deepEqual(day1, { minLevel: 1, maxLevel: 2 });

  const day2 = getEnemyLevelBounds({ time: { minutes: 1440 + 360 }, player: { xp: 0 } }, 'istanbul');
  assert.deepEqual(day2, { minLevel: 1, maxLevel: 2 });

  const day25 = getEnemyLevelBounds({ time: { minutes: 24 * 1440 + 360 }, player: { xp: 0 } }, 'moscow');
  assert.equal(day25.maxLevel, 16);
  assert.ok(day25.minLevel >= 1 && day25.minLevel <= day25.maxLevel);

  const base = getEnemy('feral_hound');
  const lv1 = scaleEnemyForLevel(base, 1);
  const lv10 = scaleEnemyForLevel(base, 10);
  assert.ok(lv10.hp > lv1.hp && lv10.xp > lv1.xp && lv10.damage[0] > lv1.damage[0]);
});

run('Base defense posture and outpost tier calculation', () => {
  const mkState = (posture) => ({
    base: {
      outpostNodeId: 'istanbul',
      integrity: 100,
      generatorActive: false,
      defensePosture: posture,
      structures: { barricade: 2, watchtower: 1 },
    },
  });
  const fortify = calculateDefensePower(mkState('fortify'));
  const ambush = calculateDefensePower(mkState('ambush'));
  const stealth = calculateDefensePower(mkState('stealth'));
  assert.ok(fortify > ambush && ambush > stealth);

  const tier = getOutpostTier(mkState('fortify'));
  assert.equal(tier.level, 2);
});

run('Blueprint recipe locking & unlocking', () => {
  assert.equal(isRecipeUnlocked({ crafting: { unlockedRecipes: ['clean_water'] } }, 'clean_water'), true);
  assert.equal(isRecipeUnlocked({ crafting: { unlockedRecipes: ['clean_water'] } }, 'plated_rig'), false);
  assert.equal(isRecipeUnlocked({ crafting: { unlockedRecipes: ['plated_rig'] } }, 'plated_rig'), true);
});

run('Equipment upgrade scaling (+1..+3)', () => {
  const baseState = {
    inventory: {
      stacks: [],
      equipment: { weapon: 'crowbar', body: 'leather_jacket' },
      upgrades: {},
    },
  };
  const upgState = {
    inventory: {
      stacks: [],
      equipment: { weapon: 'crowbar', body: 'leather_jacket' },
      upgrades: { crowbar: 2, leather_jacket: 2 },
    },
  };
  assert.ok(weaponProfile(upgState).power > weaponProfile(baseState).power);
  assert.equal(armorValue(upgState), armorValue(baseState) + 4);
});

run('Craft/Upgrade from Base Storage when at outpost', () => {
  const state = {
    world: { currentNodeId: 'istanbul' },
    base: { outpostNodeId: 'istanbul', storage: [{ itemId: 'scrap_metal', qty: 4 }] },
    inventory: { stacks: [{ itemId: 'scrap_metal', qty: 2 }], equipment: {} },
  };
  assert.equal(countAvailableMaterial(state, 'scrap_metal'), 6);
  const away = { ...state, world: { currentNodeId: 'ankara' } };
  assert.equal(countAvailableMaterial(away, 'scrap_metal'), 2);

  let withdrawn = 0;
  const mockStore = {
    state,
    commit(type, payload) {
      if (type === 'inventory/remove') {
        const take = Math.min(2, payload.qty);
        return take;
      }
      if (type === 'base/withdrawItem') {
        withdrawn += payload.qty;
        return payload.qty;
      }
      return 0;
    },
  };
  consumeAvailableMaterial(mockStore, 'scrap_metal', 5);
  assert.equal(withdrawn, 3);
});

run('SaveManager export & import JSON backup', () => {
  const mem = new Map();
  const storage = {
    getItem: (k) => mem.get(k) ?? null,
    setItem: (k, v) => mem.set(k, v),
    removeItem: (k) => mem.delete(k),
  };
  const sm = new SaveManager({
    store: { state: { player: { alive: true }, world: { currentNodeId: 'istanbul' } } },
    rng: { state: () => ({ seed: 42 }) },
    storage,
  });
  const exp = sm.exportActiveSave();
  assert.equal(exp.ok, true);
  const imp = sm.importSaveJson(exp.json, 2);
  assert.equal(imp.ok, true);
  assert.equal(imp.slot, 2);
  assert.equal(sm.importSaveJson('{bad').ok, false);
});

run('CoreModule run stats tracking via EventBus', () => {
  const base = createBaseState(123);
  assert.deepEqual(base.stats, { distanceKm: 0, scavenges: 0, contractsCompleted: 0 });
  const bus = new EventBus();
  const mutations = {};
  const mockStore = {
    state: base,
    registerMutations(ns, map) {
      for (const [k, fn] of Object.entries(map)) mutations[`${ns}/${k}`] = fn;
    },
    commit(type, payload) {
      mutations[type]?.(base, payload);
    },
  };
  coreModule.install({
    store: mockStore,
    effects: { register() {} },
    engine: { bus, log() {}, advanceTime() {} },
    rng: { int: () => 0 },
  });
  bus.emit('travel:journey', { plan: { km: 42 } });
  bus.emit('map:scavenged', { nodeId: 'istanbul' });
  bus.emit('factions:contract_completed', {});
  assert.equal(base.stats.distanceKm, 42);
  assert.equal(base.stats.scavenges, 1);
  assert.equal(base.stats.contractsCompleted, 1);
});

run('Scavenge grantItems adds looted items into inventory stacks', () => {
  const state = {
    world: { currentNodeId: 'istanbul' },
    inventory: {
      stacks: [],
      equipment: { weapon: null, body: null, pack: null },
      ground: {},
      upgrades: {},
    },
  };
  const mockStore = {
    state,
    commit(type, { itemId, qty }) {
      if (type === 'inventory/add') {
        const res = addItem(state.inventory, itemId, qty);
        state.inventory = res.inventory;
        return res.accepted;
      }
      return 0;
    },
  };
  grantItems({ store: mockStore, engine: { log() {} } }, 'bottled_water', 2);
  grantItems({ store: mockStore, engine: { log() {} } }, 'scrap_metal', 3);
  assert.equal(state.inventory.stacks.length, 2);
  assert.equal(state.inventory.stacks[0].qty, 2);
  assert.equal(state.inventory.stacks[1].qty, 3);
});

