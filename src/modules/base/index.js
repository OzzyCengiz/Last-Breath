import { STRUCTURES, getStructure } from '../../data/structures.js';
import { getItem } from '../../data/items.js';
import { countItem } from '../inventory/inventoryModel.js';
import { grantItems } from '../inventory/index.js';
import { codexManager } from '../../core/codexManager.js';
import { ref } from '../../i18n/i18n.js';
import { audioEngine } from '../../core/audioEngine.js';
import { getSeason, isNight } from '../../core/clock.js';
import { getUnlockedPerkBonus } from '../../data/skillTree.js';

const baseLocName = (nodeId) => ref(`location.${nodeId}`);
const baseItemName = (itemId) => ref(`item.${itemId}.name`);

export const FUEL_ITEM_IDS = [
  'gasoline_fuel_canister_5l',
  'diesel_fuel_canister_5l',
  'kerosene_fuel_canister',
  'kerosene_fuel_plastic_jug',
  'butane_gas_canister_camping',
];

export function isAtOutpost(state) {
  return Boolean(state.base.outpostNodeId && state.base.outpostNodeId === state.world.currentNodeId);
}

export function activeWorkbenchTier(state) {
  if (!isAtOutpost(state)) return 0;
  return state.base.structures.workbench ?? 0;
}

export function getEffectiveStructureCost(state, costs) {
  const discount = getUnlockedPerkBonus(state, 'baseStructureDiscount') || 0;
  if (discount <= 0) return costs;
  return costs.map(({ itemId, qty }) => ({
    itemId,
    qty: Math.max(1, Math.floor(qty * (1 - discount))),
  }));
}

export function countBaseItem(state, itemId) {
  const entry = state.base?.storage?.find((e) => e.itemId === itemId);
  return entry?.qty ?? 0;
}

export function countAvailableMaterial(state, itemId) {
  const inPack = countItem(state.inventory, itemId);
  return inPack + (isAtOutpost(state) ? countBaseItem(state, itemId) : 0);
}

export function consumeAvailableMaterial(store, itemId, qty) {
  const removedFromPack = store.commit('inventory/remove', { itemId, qty }) || 0;
  const remaining = qty - removedFromPack;
  if (remaining > 0 && isAtOutpost(store.state)) {
    store.commit('base/withdrawItem', { itemId, qty: remaining });
  }
}

export function canAffordCost(state, costs) {
  const effective = getEffectiveStructureCost(state, costs);
  return effective.every(({ itemId, qty }) => countAvailableMaterial(state, itemId) >= qty);
}

export function getOutpostTier(state) {
  const structures = state.base?.structures ?? {};
  const totalLevels = Object.values(structures).reduce((sum, lvl) => sum + (lvl || 0), 0);
  if (totalLevels >= 12) return { level: 4, totalLevels, key: 'tier_4' };
  if (totalLevels >= 7) return { level: 3, totalLevels, key: 'tier_3' };
  if (totalLevels >= 3) return { level: 2, totalLevels, key: 'tier_2' };
  return { level: 1, totalLevels, key: 'tier_1' };
}

export function calculateDefensePower(state) {
  if (!state.base?.outpostNodeId) return 0;
  const barricadeLvl = state.base.structures?.barricade ?? 0;
  const watchtowerLvl = state.base.structures?.watchtower ?? 0;
  const integrity = state.base.integrity ?? 100;
  const isPowered = Boolean(state.base.generatorActive);
  const watchtowerBonus = watchtowerLvl > 0 ? (STRUCTURES.watchtower?.defenseBonus?.[watchtowerLvl - 1] ?? watchtowerLvl * 30) : 0;
  let power = barricadeLvl * 35 + watchtowerBonus + Math.round(integrity * 0.35) + (isPowered ? 25 : 0);
  const posture = state.base.defensePosture || 'fortify';
  if (posture === 'fortify') power = Math.round(power * 1.25);
  else if (posture === 'ambush') power = Math.round(power * 1.1);
  else if (posture === 'stealth') power = Math.round(power * 0.9);
  return power;
}

export function calculateThreatLevel(state) {
  if (!state.base?.outpostNodeId) return 0;
  let threat = 10;
  const storage = state.base.storage || [];
  for (const entry of storage) {
    if (entry.itemId === 'bottled_water') threat += entry.qty * 0.5;
    else if (entry.itemId === 'canned_beans') threat += entry.qty * 1.0;
    else threat += entry.qty * 0.1;
  }

  // Vehicle noise / high value target
  const mountedId = state.vehicles?.mountedVehicleId;
  const vehicle = mountedId ? state.vehicles?.fleet?.[mountedId] : null;
  if (vehicle && (vehicle.nodeId === state.base.outpostNodeId || isAtOutpost(state))) {
    threat += 15;
  }

  // Defenses and power lighting reduce threat
  const barricadeLvl = state.base.structures?.barricade ?? 0;
  threat -= barricadeLvl * 10;

  const watchtowerLvl = state.base.structures?.watchtower ?? 0;
  if (watchtowerLvl > 0) {
    threat -= STRUCTURES.watchtower?.threatReduction?.[watchtowerLvl - 1] ?? watchtowerLvl * 10;
  }

  if (state.base.generatorActive) {
    threat -= 15; // floodlights and generator perimeter deterrent
  }

  if ((state.base.patrolFortifyUntil ?? 0) > (state.time?.minutes ?? 0)) {
    threat -= 15;
  }

  return Math.max(5, Math.min(100, Math.round(threat)));
}

export const baseModule = {
  id: 'base',

  createState() {
    return {
      outpostNodeId: null,
      structures: {
        workbench: 0,
        rain_catcher: 0,
        greenhouse: 0,
        barricade: 0,
        med_cot: 0,
        radio_relay: 0,
        vehicle_depot: 0,
        generator: 0,
        solar_panel: 0,
        watchtower: 0,
      },
      integrity: 100,
      storage: [],
      waterHoursAccum: 0,
      foodHoursAccum: 0,
      vehicleRepairHoursAccum: 0,
      generatorFuelMinutes: 0,
      generatorActive: false,
      patrolFortifyUntil: 0,
      defensePosture: 'fortify',
      defenseLogs: [],
    };
  },

  install(ctx) {
    const { store, engine, bus, effects, rng } = ctx;

    store.registerMutations('base', {
      establishOutpost(state, nodeId) {
        state.base.outpostNodeId = nodeId;
        state.base.integrity = 100;
        state.base.structures = {
          workbench: 0,
          rain_catcher: 0,
          greenhouse: 0,
          barricade: 0,
          med_cot: 0,
          radio_relay: 0,
          vehicle_depot: 0,
          generator: 0,
          solar_panel: 0,
          watchtower: 0,
        };
        state.base.waterHoursAccum = 0;
        state.base.foodHoursAccum = 0;
        state.base.vehicleRepairHoursAccum = 0;
        state.base.generatorFuelMinutes = 0;
        state.base.generatorActive = false;
        state.base.patrolFortifyUntil = 0;
        state.base.defenseLogs = [];
      },
      upgradeStructure(state, structureId) {
        state.base.structures[structureId] = (state.base.structures[structureId] ?? 0) + 1;
      },
      changeIntegrity(state, delta) {
        state.base.integrity = Math.max(0, Math.min(100, (state.base.integrity ?? 100) + delta));
      },
      toggleGenerator(state) {
        if (!state.base.generatorActive && (state.base.generatorFuelMinutes ?? 0) <= 0) {
          state.base.generatorActive = false;
          return;
        }
        state.base.generatorActive = !state.base.generatorActive;
      },
      addGeneratorFuel(state, minutes) {
        const level = Math.max(1, state.base.structures?.generator ?? 1);
        const maxCapMinutes = (STRUCTURES.generator?.fuelCapacityHours?.[level - 1] ?? 24) * 60;
        state.base.generatorFuelMinutes = Math.min(maxCapMinutes, (state.base.generatorFuelMinutes ?? 0) + minutes);
      },
      tickGenerator(state, hours) {
        // Daytime solar array trickle recharge
        const solarLvl = state.base.structures?.solar_panel ?? 0;
        if (solarLvl > 0 && !isNight(state.time?.minutes ?? 0)) {
          const solarRate = STRUCTURES.solar_panel?.solarMinutesPerHour?.[solarLvl - 1] ?? 20;
          const genLvl = Math.max(1, state.base.structures?.generator ?? 1);
          const maxCapMinutes = (STRUCTURES.generator?.fuelCapacityHours?.[genLvl - 1] ?? 24) * 60;
          state.base.generatorFuelMinutes = Math.min(
            maxCapMinutes,
            (state.base.generatorFuelMinutes ?? 0) + Math.round(solarRate * hours),
          );
        }

        if (!state.base.generatorActive) return { wasActive: false, burned: 0 };
        const effBonus = getUnlockedPerkBonus(state, 'generatorFuelEfficiency') || 0;
        const burnRate = Math.max(0.25, 1 - effBonus);
        const burnNeeded = Math.round(hours * 60 * burnRate);
        const available = state.base.generatorFuelMinutes ?? 0;
        const burned = Math.min(available, burnNeeded);
        state.base.generatorFuelMinutes = Math.max(0, available - burned);
        const exhausted = state.base.generatorFuelMinutes <= 0;
        if (exhausted) {
          state.base.generatorActive = false;
        }
        return { wasActive: true, burned, exhausted };
      },
      setPatrolFortify(state, untilMinutes) {
        state.base.patrolFortifyUntil = untilMinutes;
      },
      setPosture(state, posture) {
        if (['fortify', 'ambush', 'stealth'].includes(posture)) {
          state.base.defensePosture = posture;
        }
      },
      addDefenseLog(state, entry) {
        state.base.defenseLogs ??= [];
        state.base.defenseLogs.unshift(entry);
        if (state.base.defenseLogs.length > 8) {
          state.base.defenseLogs.pop();
        }
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
        if (!state.base.outpostNodeId) return { water: 0, food: 0, vehicleRepaired: 0 };
        const structures = state.base.structures ?? {};
        let water = 0;
        let food = 0;
        let vehicleRepaired = 0;

        // Rain Catcher
        const waterLevel = structures.rain_catcher ?? 0;
        if (waterLevel > 0) {
          const interval = STRUCTURES.rain_catcher.waterEveryHours[waterLevel - 1];
          state.base.waterHoursAccum = (state.base.waterHoursAccum ?? 0) + hours;
          water = Math.floor(state.base.waterHoursAccum / interval);
          if (water > 0) state.base.waterHoursAccum -= water * interval;
        }

        // Greenhouse (boosted by 1.3x if power grid is active, +25% in spring!)
        const foodLevel = structures.greenhouse ?? 0;
        if (foodLevel > 0) {
          const interval = STRUCTURES.greenhouse.foodEveryHours[foodLevel - 1];
          const season = getSeason(state.time?.minutes ?? 0);
          let effectiveHours = state.base.generatorActive ? hours * 1.3 : hours;
          if (season === 'spring') effectiveHours *= 1.25;
          state.base.foodHoursAccum = (state.base.foodHoursAccum ?? 0) + effectiveHours;
          food = Math.floor(state.base.foodHoursAccum / interval);
          if (food > 0) state.base.foodHoursAccum -= food * interval;
        }

        // Vehicle Depot
        const depotLevel = structures.vehicle_depot ?? 0;
        if (depotLevel > 0 && state.vehicles) {
          const mountedId = state.vehicles.mountedVehicleId;
          const vehicle = state.vehicles.fleet?.[mountedId];
          if (vehicle && (vehicle.nodeId === state.base.outpostNodeId || isAtOutpost(state))) {
            const interval = STRUCTURES.vehicle_depot.repairEveryHours[depotLevel - 1];
            state.base.vehicleRepairHoursAccum = (state.base.vehicleRepairHoursAccum ?? 0) + hours;
            const ticks = Math.floor(state.base.vehicleRepairHoursAccum / interval);
            if (ticks > 0) {
              state.base.vehicleRepairHoursAccum -= ticks * interval;
              if (vehicle.condition < 100) {
                const repairAmount = Math.min(100 - vehicle.condition, ticks * 5);
                vehicle.condition = Math.min(100, Math.round(vehicle.condition + repairAmount));
                vehicleRepaired = repairAmount;
              }
            }
          }
        }

        return { water, food, vehicleRepaired };
      },
    });

    engine.registerAction('base/establish', () => {
      const nodeId = store.state.world.currentNodeId;
      if (store.state.base.outpostNodeId === nodeId) {
        return { ok: false, reason: 'reject.already_outpost' };
      }
      store.commit('base/establishOutpost', nodeId);
      codexManager.unlockAchievement('outpost_pioneer');
      engine.log('log.base.established', { location: baseLocName(nodeId) }, 'good');
      audioEngine?.playTerminalConfirm?.();
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/upgrade', ({ structureId }) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const def = getStructure(structureId);
      const currentLevel = store.state.base.structures?.[structureId] ?? 0;
      if (currentLevel >= def.maxLevel) return { ok: false, reason: 'reject.max_level' };

      const rawCost = def.costs[currentLevel];
      const cost = getEffectiveStructureCost(store.state, rawCost);
      if (!canAffordCost(store.state, rawCost)) return { ok: false, reason: 'reject.missing_materials' };

      for (const { itemId, qty } of cost) {
        consumeAvailableMaterial(store, itemId, qty);
      }
      store.commit('base/upgradeStructure', structureId);
      const nextLevel = currentLevel + 1;
      engine.log('log.base.upgraded', {
        structure: ref(`structure.${structureId}.name`),
        level: nextLevel,
      }, 'good');
      if (structureId === 'watchtower') {
        effects.apply([{ type: 'reveal', count: 2 }], ctx);
      }
      audioEngine?.playTerminalConfirm?.();
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 15 * nextLevel }], ctx);
      engine.advanceTime(def.minutes, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/patrolPerimeter', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      if ((store.state.player?.energy ?? 0) < 8) {
        return { ok: false, reason: 'reject.too_exhausted' };
      }
      store.commit('player/changeVital', { vital: 'energy', delta: -8 });
      const until = (store.state.time?.minutes ?? 0) + 24 * 60;
      store.commit('base/setPatrolFortify', until);
      let foundScrap = 0;
      if (rng && rng.chance(0.55)) {
        foundScrap = rng.int(1, 2);
        store.commit('base/storeItem', { itemId: 'scrap_metal', qty: foundScrap });
      }
      engine.log('log.base.patrol_done', { scrap: foundScrap }, 'good');
      audioEngine?.playTerminalConfirm?.();
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 10 }], ctx);
      engine.advanceTime(60, 'idle');
      return { ok: true, foundScrap };
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
      audioEngine?.playTerminalConfirm?.();
      effects.apply([{ type: 'xp', skill: 'engineering', amount: 8 }], ctx);
      engine.advanceTime(30, 'idle');
      return { ok: true };
    });

    engine.registerAction('base/toggleGenerator', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const level = store.state.base.structures?.generator ?? 0;
      if (level <= 0) return { ok: false, reason: 'reject.no_generator' };
      const fuel = store.state.base.generatorFuelMinutes ?? 0;
      if (!store.state.base.generatorActive && fuel <= 0) {
        return { ok: false, reason: 'reject.no_fuel' };
      }
      store.commit('base/toggleGenerator');
      audioEngine?.playTerminalClick?.();
      const isActive = store.state.base.generatorActive;
      engine.log(isActive ? 'log.base.generator_started' : 'log.base.generator_stopped', {}, isActive ? 'good' : 'warn');
      return { ok: true, active: isActive };
    });

    engine.registerAction('base/refuelGenerator', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const level = store.state.base.structures?.generator ?? 0;
      if (level <= 0) return { ok: false, reason: 'reject.no_generator' };

      // Find any fuel canister in inventory
      const fuelStack = store.state.inventory.stacks.find((s) => FUEL_ITEM_IDS.includes(s.itemId) && s.qty > 0);
      if (!fuelStack) {
        return { ok: false, reason: 'reject.missing_fuel' };
      }

      store.commit('inventory/remove', { itemId: fuelStack.itemId, qty: 1 });
      store.commit('base/addGeneratorFuel', 720); // 12 hours of generator power per canister
      audioEngine?.playTerminalConfirm?.();
      engine.log('log.base.generator_refueled', { hours: 12 }, 'good');
      return { ok: true, addedHours: 12 };
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

    engine.registerAction('base/stashMaterials', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const stacks = [...(store.state.inventory?.stacks ?? [])];
      let totalMoved = 0;
      for (const stack of stacks) {
        const item = getItem(stack.itemId);
        const isMaterial = item?.category === 'scrap' ||
          ['scrap_metal', 'copper_wire', 'electronics', 'duct_tape', 'cloth_rags'].includes(stack.itemId);
        if (isMaterial && stack.qty > 0) {
          const removed = store.commit('inventory/remove', { itemId: stack.itemId, qty: stack.qty });
          if (removed > 0) {
            store.commit('base/storeItem', { itemId: stack.itemId, qty: removed });
            totalMoved += removed;
          }
        }
      }
      if (totalMoved > 0) {
        engine.log('log.base.materials_stashed', { count: totalMoved }, 'good');
        audioEngine?.playTerminalConfirm?.();
      }
      return { ok: true, count: totalMoved };
    });

    engine.registerAction('base/withdrawAll', ({ itemId } = {}) => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const storage = store.state.base?.storage ?? [];
      if (itemId) {
        const entry = storage.find((s) => s.itemId === itemId);
        if (!entry || entry.qty <= 0) return { ok: false, reason: 'reject.missing_item' };
        const taken = store.commit('base/withdrawItem', { itemId, qty: entry.qty });
        grantItems(ctx, itemId, taken);
        return { ok: true, taken };
      }
      const toWithdraw = [...storage];
      let total = 0;
      for (const entry of toWithdraw) {
        const taken = store.commit('base/withdrawItem', { itemId: entry.itemId, qty: entry.qty });
        if (taken > 0) {
          grantItems(ctx, entry.itemId, taken);
          total += taken;
        }
      }
      if (total > 0) {
        audioEngine?.playTerminalConfirm?.();
      }
      return { ok: true, total };
    });

    engine.registerAction('base/collectAll', () => {
      if (!isAtOutpost(store.state)) return { ok: false, reason: 'reject.not_at_outpost' };
      const storage = store.state.base?.storage ?? [];
      const targets = ['bottled_water', 'canned_beans'];
      let totalCollected = 0;
      for (const targetId of targets) {
        const entry = storage.find((s) => s.itemId === targetId);
        if (entry && entry.qty > 0) {
          const taken = store.commit('base/withdrawItem', { itemId: targetId, qty: entry.qty });
          if (taken > 0) {
            grantItems(ctx, targetId, taken);
            totalCollected += taken;
          }
        }
      }
      if (totalCollected > 0) {
        audioEngine?.playTerminalConfirm?.();
      }
      return { ok: true, count: totalCollected };
    });

    engine.registerAction('base/setPosture', ({ posture }) => {
      if (!store.state.base.outpostNodeId) return { ok: false, reason: 'reject.not_at_outpost' };
      store.commit('base/setPosture', posture);
      audioEngine?.playTerminalClick?.(0.8, 0.5);
      return { ok: true, posture };
    });

    // Time Tick simulation: Generator burn, resource collection, and raid simulation
    bus.on('time:tick', ({ hours, activity }) => {
      if (!store.state.base.outpostNodeId) return;

      // 1. Generator burn
      const genResult = store.commit('base/tickGenerator', hours);
      if (genResult?.exhausted) {
        engine.log('log.base.generator_depleted', {}, 'warn');
      }

      // 2. Resource collection
      const { water = 0, food = 0, vehicleRepaired = 0 } = store.commit('base/tickCollector', hours) || {};
      if (water > 0) {
        store.commit('base/storeItem', { itemId: 'bottled_water', qty: water });
        engine.log('log.base.water_collected', { count: water }, 'good');
      }
      if (food > 0) {
        store.commit('base/storeItem', { itemId: 'canned_beans', qty: food });
        engine.log('log.base.food_collected', { count: food }, 'good');
      }
      if (vehicleRepaired > 0) {
        engine.log('log.base.vehicle_repaired', { amount: vehicleRepaired }, 'good');
      }

      // 3. Medical cot healing, Radio relay recharge & Outpost comfort bonus during rest
      if (activity === 'rest' && isAtOutpost(store.state)) {
        const tier = getOutpostTier(store.state);
        if (tier.level > 0) {
          store.commit('player/changeVital', {
            vital: 'morale',
            delta: 1.5 * tier.level * hours,
          });
          store.commit('player/changeVital', {
            vital: 'energy',
            delta: 2.0 * tier.level * hours,
          });
        }

        const cotLevel = store.state.base.structures?.med_cot ?? 0;
        if (cotLevel > 0) {
          const bonus = Array.isArray(STRUCTURES.med_cot.restHealBonus)
            ? STRUCTURES.med_cot.restHealBonus[cotLevel - 1]
            : STRUCTURES.med_cot.restHealBonus;
          store.commit('player/changeVital', {
            vital: 'health',
            delta: bonus * hours,
          });
        }

        const relayLevel = store.state.base.structures?.radio_relay ?? 0;
        if (relayLevel > 0 && store.state.radio) {
          const rechargeMins = relayLevel * 15 * hours;
          store.commit('radio/crank', rechargeMins);
        }
      }

      // 4. Night Raids & Threat simulation (occurs mainly during rest or long intervals)
      if (hours >= 1) {
        const threat = calculateThreatLevel(store.state);
        const posture = store.state.base.defensePosture || 'fortify';
        // Chance scales with threat (stealth reduces raid chance by 30%)
        const raidChance = (threat / 100) * 0.15 * (posture === 'stealth' ? 0.7 : 1);
        if (rng && rng.chance(raidChance)) {
          const defensePower = calculateDefensePower(store.state);
          const attackPower = rng.int(35, 80);

          if (defensePower >= attackPower) {
            // Repelled successfully!
            const scrapGained = rng.int(1, 2) * (posture === 'ambush' ? 2 : 1);
            store.commit('base/storeItem', { itemId: 'scrap_metal', qty: scrapGained });
            store.commit('base/addDefenseLog', {
              won: true,
              time: store.state.time?.minutes ?? 0,
              defensePower,
              attackPower,
              lootQty: scrapGained,
            });
            engine.log('log.base.raid_defended', { loot: scrapGained }, 'good');
          } else {
            // Breached!
            const integrityLost = rng.int(12, 22);
            store.commit('base/changeIntegrity', -integrityLost);
            // Prowlers loot 1 water or 1 food if present
            let stolenItem = null;
            if (store.state.base.storage?.some((s) => s.itemId === 'bottled_water' && s.qty > 0)) {
              store.commit('base/withdrawItem', { itemId: 'bottled_water', qty: 1 });
              stolenItem = 'bottled_water';
            } else if (store.state.base.storage?.some((s) => s.itemId === 'canned_beans' && s.qty > 0)) {
              store.commit('base/withdrawItem', { itemId: 'canned_beans', qty: 1 });
              stolenItem = 'canned_beans';
            }
            store.commit('base/addDefenseLog', {
              won: false,
              time: store.state.time?.minutes ?? 0,
              defensePower,
              attackPower,
              damage: integrityLost,
              stolen: stolenItem,
            });
            engine.log('log.base.raid_breached', { damage: integrityLost }, 'bad');
          }
        }
      }
    });
  },
};
