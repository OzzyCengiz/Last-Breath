import { STRUCTURES, getStructure } from '../../data/structures.js';
import { countItem } from '../inventory/inventoryModel.js';
import { grantItems } from '../inventory/index.js';
import { ref } from '../../i18n/i18n.js';

const baseLocName = (nodeId) => ref(`location.${nodeId}`);
const baseItemName = (itemId) => ref(`item.${itemId}.name`);

export function isAtOutpost(state) {
  return Boolean(state.base.outpostNodeId && state.base.outpostNodeId === state.world.currentNodeId);
}

export function activeWorkbenchTier(state) {
  if (!isAtOutpost(state)) return 0;
  return state.base.structures.workbench ?? 0;
}

export function canAffordCost(state, costs) {
  return costs.every(({ itemId, qty }) => countItem(state.inventory, itemId) >= qty);
}

export const baseModule = {
  id: 'base',

  createState() {
    return {
      outpostNodeId: null,
      structures: { workbench: 0, rain_catcher: 0, barricade: 0, med_cot: 0 },
      integrity: 100,
      storage: [],
      waterHoursAccum: 0,
    };
  },

  install(ctx) {
    const { store, engine, bus, effects } = ctx;

    store.registerMutations('base', {
      establishOutpost(state, nodeId) {
        state.base.outpostNodeId = nodeId;
        state.base.integrity = 100;
        state.base.structures = { workbench: 0, rain_catcher: 0, barricade: 0, med_cot: 0 };
      },
      upgradeStructure(state, structureId) {
        state.base.structures[structureId] = (state.base.structures[structureId] ?? 0) + 1;
      },
      changeIntegrity(state, delta) {
        state.base.integrity = Math.max(0, Math.min(100, (state.base.integrity ?? 100) + delta));
      },
      storeItem(state, { itemId, qty }) {
        state.base.storage ??= [];
        const existing = state.base.storage.find((entry) => entry.itemId === itemId);
        if (existing) existing.qty += qty;
        else state.base.storage.push({ itemId, qty });
      },
      withdrawItem(state, { itemId, qty }) {
        state.base.storage ??= [];
        const existing = state.base.storage.find((entry) => entry.itemId === itemId);
        const taken = Math.min(existing?.qty ?? 0, qty);
        if (existing) existing.qty -= taken;
        state.base.storage = state.base.storage.filter((entry) => entry.qty > 0);
        return taken;
      },
      tickCollector(state, hours) {
        const level = state.base.structures?.rain_catcher ?? 0;
        if (!state.base.outpostNodeId || level <= 0) return 0;
        const interval = STRUCTURES.rain_catcher.waterEveryHours[level - 1];
        state.base.waterHoursAccum = (state.base.waterHoursAccum ?? 0) + hours;
        const bottles = Math.floor(state.base.waterHoursAccum / interval);
        if (bottles > 0) state.base.waterHoursAccum -= bottles * interval;
        return bottles;
      },
    });

    engine.registerAction('base/establish', () => {
      const nodeId = store.state.world.currentNodeId;
      if (store.state.base.outpostNodeId === nodeId) {
        return { ok: false, reason: 'reject.already_outpost' };
      }
      store.commit('base/establishOutpost', nodeId);
      engine.log('log.base.established', { location: baseLocName(nodeId) }, 'good');
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/upgrade', ({ structureId }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const def = getStructure(structureId);
      const currentLevel = store.state.base.structures?.[structureId] ?? 0;
      if (currentLevel >= def.maxLevel) return { ok: false, reason: 'reject.max_level' };

      const cost = def.costs[currentLevel];
      if (!canAffordCost(store.state, cost)) return { ok: false, reason: 'reject.missing_materials' };

      for (const { itemId, qty } of cost) {
        store.commit('inventory/remove', { itemId, qty });
      }
      store.commit('base/upgradeStructure', structureId);
      const nextLevel = currentLevel + 1;
      engine.log('log.base.upgraded', {
        structure: ref(`structure.${structureId}.name`),
        level: nextLevel,
      }, 'good');
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 15 * nextLevel }], ctx);
      engine.advanceTime(def.minutes, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/repair', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      if ((store.state.base.integrity ?? 100) >= 100) return { ok: false, reason: 'reject.integrity_full' };
      if (countItem(store.state.inventory, 'scrap_metal') < 1) {
        return { ok: false, reason: 'reject.missing_materials' };
      }
      store.commit('inventory/remove', { itemId: 'scrap_metal', qty: 1 });
      store.commit('base/changeIntegrity', 25);
      engine.log('log.base.repaired', {}, 'good');
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 8 }], ctx);
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/store', ({ itemId, qty = 1 }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const removed = store.commit('inventory/remove', { itemId, qty });
      if (removed === 0) return { ok: false, reason: 'reject.missing_item' };
      store.commit('base/storeItem', { itemId, qty: removed });
      engine.log('log.base.stored', { item: baseItemName(itemId), count: removed });
      return { ok: true };
    });

    engine.registerAction('base/withdraw', ({ itemId, qty = 1 }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const taken = store.commit('base/withdrawItem', { itemId, qty });
      if (taken === 0) return { ok: false, reason: 'reject.missing_item' };
      grantItems(ctx, itemId, taken);
      return { ok: true };
    });

    bus.on('time:tick', ({ hours, activity }) => {
      const bottles = store.commit('base/tickCollector', hours);
      if (bottles > 0) {
        store.commit('base/storeItem', { itemId: 'bottled_water', qty: bottles });
        engine.log('log.base.water_collected', { count: bottles }, 'good');
      }
      if (activity === 'rest' && isAtOutpost(store.state) && (store.state.base.structures?.med_cot ?? 0) > 0) {
        store.commit('player/changeVital', {
          vital: 'health',
          delta: STRUCTURES.med_cot.restHealBonus * hours,
        });
      }
    });
  },
};
