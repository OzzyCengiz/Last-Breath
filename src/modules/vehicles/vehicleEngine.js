/**
 * Last Breath // Vehicles & Overland Travel Simulation Engine
 * Zero-dependency Vanilla JS simulation governing abandoned vehicle restoration,
 * component salvage, field siphoning, fuel telemetry, cargo trunk management,
 * and high-speed overland transit mechanics.
 */

import { getItem } from '../../data/items.js';
import { countItem, removeItem, addItem } from '../inventory/inventoryModel.js';

export const VEHICLE_CATALOG = {
  enduro_recon_bike: {
    id: 'enduro_recon_bike',
    nameKey: 'vehicle.enduro.name',
    descKey: 'vehicle.enduro.desc',
    glyph: '🏍️',
    fuelType: 'gasoline',
    fuelCapacity: 15, // Liters
    fuelLitersPer100Km: 1.8,
    trunkCapacityKg: 45, // kg
    speedMultiplier: 0.30, // 3.3x speed (cuts travel time by 70%)
    noiseRiskMultiplier: 1.6, // +60% encounter hazard
    cabinShelter: false, // exposed rider
    armorReduction: 0.0,
    startNodeId: 'ankara',
    partsRequired: [
      { itemId: 'car_battery_lead_acid', qty: 1, alternates: ['car_battery_12v_lead_acid'] },
      { itemId: 'spark_plug_set', qty: 1, alternates: ['scrap_metal'] },
      { itemId: 'motor_oil_10w40_bottle', qty: 1, alternates: ['motor_oil_synthetic_10w40'] },
      { itemId: 'gasoline_fuel_canister_5l', qty: 1, initialFuel: 5 },
    ],
  },

  uaz_469_jeep: {
    id: 'uaz_469_jeep',
    nameKey: 'vehicle.uaz.name',
    descKey: 'vehicle.uaz.desc',
    glyph: '🚙',
    fuelType: 'gasoline',
    fuelCapacity: 55, // Liters
    fuelLitersPer100Km: 3.8,
    trunkCapacityKg: 220, // kg
    speedMultiplier: 0.22, // 4.5x speed (cuts travel time by 78%)
    noiseRiskMultiplier: 2.2, // +120% encounter hazard
    cabinShelter: true, // Sealed cabin protects from acid rain, cold front & ash fog
    armorReduction: 0.15, // 15% ambush defense
    startNodeId: 'istanbul',
    partsRequired: [
      { itemId: 'car_battery_lead_acid', qty: 1, alternates: ['car_battery_12v_lead_acid'] },
      { itemId: 'motor_oil_10w40_bottle', qty: 2, alternates: ['motor_oil_synthetic_10w40'] },
      { itemId: 'spark_plug_set', qty: 1, alternates: ['scrap_metal'] },
      { itemId: 'copper_wire', qty: 3, alternates: ['steel_wire_galvanized'] },
      { itemId: 'gasoline_fuel_canister_5l', qty: 1, initialFuel: 5 },
    ],
  },

  ural_4320_caravan: {
    id: 'ural_4320_caravan',
    nameKey: 'vehicle.ural.name',
    descKey: 'vehicle.ural.desc',
    glyph: '🚛',
    fuelType: 'diesel',
    fuelCapacity: 160, // Liters
    fuelLitersPer100Km: 7.2,
    trunkCapacityKg: 650, // kg
    speedMultiplier: 0.35, // 2.8x speed
    noiseRiskMultiplier: 2.8, // +180% raider ambush attraction
    cabinShelter: true, // Heavy mobile fortress
    armorReduction: 0.40, // 40% ballistic damage reduction
    startNodeId: 'kyiv',
    partsRequired: [
      { itemId: 'car_battery_12v_lead_acid', qty: 2, alternates: ['car_battery_lead_acid'] },
      { itemId: 'diesel_fuel_canister_10l', qty: 1, alternates: ['diesel_fuel_canister_5l'], initialFuel: 10 },
      { itemId: 'motor_oil_10w40_bottle', qty: 3, alternates: ['motor_oil_synthetic_10w40'] },
      { itemId: 'scrap_iron_plates', qty: 4, alternates: ['scrap_metal'] },
      { itemId: 'copper_wire', qty: 4, alternates: ['steel_wire_galvanized'] },
    ],
  },
};

export class VehicleEngine {
  /**
   * Generates initial reactive state for the vehicles module.
   */
  static getInitialState() {
    const fleet = {};
    for (const [vId, def] of Object.entries(VEHICLE_CATALOG)) {
      const installedParts = {};
      for (const req of def.partsRequired) {
        installedParts[req.itemId] = 0;
      }
      fleet[vId] = {
        id: vId,
        nodeId: def.startNodeId,
        restored: false,
        condition: vId === 'enduro_recon_bike' ? 30 : (vId === 'uaz_469_jeep' ? 20 : 15),
        fuelLiters: 0,
        maxFuel: def.fuelCapacity,
        installedParts,
        cargo: [], // [{ itemId, qty }]
      };
    }

    return {
      mountedVehicleId: null,
      activeModalVehicleId: null,
      fleet,
    };
  }

  /**
   * Retrieves definition from catalog.
   */
  static getDef(vehicleId) {
    return VEHICLE_CATALOG[vehicleId] || null;
  }

  /**
   * Retrieves active vehicle instance in fleet.
   */
  static getVehicle(state, vehicleId) {
    return state?.vehicles?.fleet?.[vehicleId] || null;
  }

  /**
   * Returns the vehicle currently mounted by player, if any.
   */
  static getMountedVehicle(state) {
    const vId = state?.vehicles?.mountedVehicleId;
    if (!vId) return null;
    const vehicle = state?.vehicles?.fleet?.[vId];
    if (!vehicle) return null;
    return {
      vehicle,
      def: VEHICLE_CATALOG[vId],
    };
  }

  /**
   * Returns list of vehicles parked in a given sector.
   */
  static getVehiclesInSector(state, nodeId) {
    if (!state?.vehicles?.fleet) return [];
    return Object.values(state.vehicles.fleet).filter((v) => v.nodeId === nodeId);
  }

  /**
   * Checks if all required parts have been installed.
   */
  static checkRestoration(vehicle, def) {
    if (vehicle.restored) return true;
    for (const req of def.partsRequired) {
      const installed = vehicle.installedParts?.[req.itemId] || 0;
      if (installed < req.qty) return false;
    }
    return true;
  }

  /**
   * Checks if player has any compatible item for a specific vehicle part requirement.
   */
  static findAvailablePartInInventory(inventory, req) {
    if (!inventory || !Array.isArray(inventory.stacks)) return null;
    if (countItem(inventory, req.itemId) >= 1) {
      return req.itemId;
    }
    if (Array.isArray(req.alternates)) {
      for (const altId of req.alternates) {
        if (countItem(inventory, altId) >= 1) {
          return altId;
        }
      }
    }
    return null;
  }

  /**
   * Calculates total weight of all cargo stored in vehicle trunk.
   */
  static getCargoWeight(vehicle) {
    if (!vehicle?.cargo || !Array.isArray(vehicle.cargo)) return 0;
    let total = 0;
    for (const { itemId, qty } of vehicle.cargo) {
      const item = getItem(itemId);
      if (item && item.weight) {
        total += item.weight * qty;
      }
    }
    return Math.round(total * 100) / 100;
  }

  /**
   * Calculates fuel requirement for a journey of given distance in km.
   */
  static calculateJourneyFuel(def, km) {
    if (!def) return 0;
    const liters = (km / 100) * def.fuelLitersPer100Km;
    return Math.max(0.5, Math.round(liters * 10) / 10);
  }

  /**
   * Checks whether vehicle can make a journey over the specified km.
   */
  static canMakeJourney(vehicle, def, km) {
    if (!vehicle || !def || !vehicle.restored) {
      return { canTravel: false, reason: 'vehicle_not_operational' };
    }
    if (vehicle.condition <= 0) {
      return { canTravel: false, reason: 'engine_broken_down' };
    }
    const needed = this.calculateJourneyFuel(def, km);
    if (vehicle.fuelLiters < needed) {
      return { canTravel: false, reason: 'insufficient_fuel', needed, current: vehicle.fuelLiters };
    }
    return { canTravel: true, needed, current: vehicle.fuelLiters };
  }

  /**
   * Installs a part from player inventory into the vehicle.
   */
  static installPart(state, vehicleId, reqItemId) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    const def = VEHICLE_CATALOG[vehicleId];
    if (!vehicle || !def) return { ok: false, reason: 'invalid_vehicle' };

    const req = def.partsRequired.find((r) => r.itemId === reqItemId);
    if (!req) return { ok: false, reason: 'invalid_requirement' };

    const currentInstalled = vehicle.installedParts?.[req.itemId] || 0;
    if (currentInstalled >= req.qty) {
      return { ok: false, reason: 'requirement_already_fulfilled' };
    }

    const availablePartId = this.findAvailablePartInInventory(state.inventory, req);
    if (!availablePartId) {
      return { ok: false, reason: 'part_not_in_inventory' };
    }

    // Consume from inventory
    const remResult = removeItem(state.inventory, availablePartId, 1);
    if (!remResult.removed) return { ok: false, reason: 'failed_to_consume' };
    state.inventory = remResult.inventory;

    // Record installation
    vehicle.installedParts[req.itemId] = currentInstalled + 1;
    vehicle.condition = Math.min(100, vehicle.condition + 15);

    // Initial fuel if part was a fuel canister
    if (req.initialFuel) {
      vehicle.fuelLiters = Math.min(vehicle.maxFuel, vehicle.fuelLiters + req.initialFuel);
    }

    // Check full restoration
    const restoredNow = this.checkRestoration(vehicle, def);
    if (restoredNow && !vehicle.restored) {
      vehicle.restored = true;
      vehicle.condition = 100;
      if (vehicle.fuelLiters <= 0) vehicle.fuelLiters = 5;
    }

    return {
      ok: true,
      restored: vehicle.restored,
      installedItem: availablePartId,
      remainingNeed: Math.max(0, req.qty - vehicle.installedParts[req.itemId]),
    };
  }

  /**
   * Refuels the vehicle using a compatible canister in inventory.
   */
  static refuel(state, vehicleId, canisterItemId) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    const def = VEHICLE_CATALOG[vehicleId];
    if (!vehicle || !def) return { ok: false, reason: 'invalid_vehicle' };

    const fuelVolumes = {
      gasoline_fuel_canister_5l: { type: 'gasoline', liters: 5 },
      diesel_fuel_canister_5l: { type: 'diesel', liters: 5 },
      diesel_fuel_canister_10l: { type: 'diesel', liters: 10 },
      kerosene_fuel_canister: { type: 'gasoline', liters: 3 }, // Emergency low-efficiency blend
    };

    const fuelSpec = fuelVolumes[canisterItemId];
    if (!fuelSpec) return { ok: false, reason: 'unrecognized_fuel_item' };
    if (fuelSpec.type !== def.fuelType) {
      return { ok: false, reason: 'fuel_type_mismatch', required: def.fuelType };
    }

    if (countItem(state.inventory, canisterItemId) < 1) {
      return { ok: false, reason: 'canister_not_owned' };
    }

    if (vehicle.fuelLiters >= vehicle.maxFuel) {
      return { ok: false, reason: 'tank_already_full' };
    }

    const remResult = removeItem(state.inventory, canisterItemId, 1);
    if (!remResult.removed) return { ok: false, reason: 'failed_to_consume' };
    state.inventory = remResult.inventory;

    const added = Math.min(vehicle.maxFuel - vehicle.fuelLiters, fuelSpec.liters);
    vehicle.fuelLiters = Math.round((vehicle.fuelLiters + added) * 10) / 10;

    return { ok: true, addedLiters: added, currentFuel: vehicle.fuelLiters };
  }

  /**
   * Repairs vehicle engine condition using scrap metal, tools, or motor oil.
   */
  static repairCondition(state, vehicleId, repairItemId) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    if (!vehicle) return { ok: false, reason: 'invalid_vehicle' };
    if (vehicle.condition >= 100) return { ok: false, reason: 'already_pristine' };

    const repairValues = {
      scrap_metal: 10,
      scrap_iron_plates: 20,
      motor_oil_10w40_bottle: 25,
      motor_oil_synthetic_10w40: 35,
      duct_tape: 8,
    };

    const gain = repairValues[repairItemId];
    if (!gain) return { ok: false, reason: 'not_a_repair_item' };

    if (countItem(state.inventory, repairItemId) < 1) {
      return { ok: false, reason: 'item_not_owned' };
    }

    const rem = removeItem(state.inventory, repairItemId, 1);
    if (!rem.removed) return { ok: false, reason: 'failed_to_consume' };
    state.inventory = rem.inventory;

    vehicle.condition = Math.min(100, vehicle.condition + gain);
    return { ok: true, gain, condition: vehicle.condition };
  }

  /**
   * Transfers an item from player's pack into vehicle's trunk.
   */
  static transferToCargo(state, vehicleId, itemId, qty = 1) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    const def = VEHICLE_CATALOG[vehicleId];
    if (!vehicle || !def) return { ok: false, reason: 'invalid_vehicle' };

    const owned = countItem(state.inventory, itemId);
    if (owned < qty) return { ok: false, reason: 'insufficient_quantity' };

    const item = getItem(itemId);
    const weightPerItem = item?.weight || 0.1;
    const currentWeight = this.getCargoWeight(vehicle);
    if (currentWeight + (weightPerItem * qty) > def.trunkCapacityKg) {
      return { ok: false, reason: 'trunk_full', max: def.trunkCapacityKg, current: currentWeight };
    }

    const rem = removeItem(state.inventory, itemId, qty);
    if (!rem.removed) return { ok: false, reason: 'failed_to_remove' };
    state.inventory = rem.inventory;

    // Add to vehicle cargo stacks
    const existing = vehicle.cargo.find((s) => s.itemId === itemId);
    if (existing) {
      existing.qty += qty;
    } else {
      vehicle.cargo.push({ itemId, qty });
    }

    return { ok: true, itemId, qty };
  }

  /**
   * Transfers an item from vehicle's trunk into player's pack.
   */
  static transferToPack(state, vehicleId, itemId, qty = 1) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    if (!vehicle) return { ok: false, reason: 'invalid_vehicle' };

    const cargoStack = vehicle.cargo.find((s) => s.itemId === itemId);
    if (!cargoStack || cargoStack.qty < qty) {
      return { ok: false, reason: 'insufficient_cargo_quantity' };
    }

    const addRes = addItem(state.inventory, itemId, qty);
    state.inventory = addRes.inventory;

    cargoStack.qty -= qty;
    if (cargoStack.qty <= 0) {
      vehicle.cargo = vehicle.cargo.filter((s) => s.itemId !== itemId);
    }

    return { ok: true, itemId, qty };
  }

  /**
   * Siphons fuel from abandoned roadside wrecks into a canister or directly to vehicle.
   */
  static siphonFuel(state, vehicleId) {
    const vehicle = state?.vehicles?.fleet?.[vehicleId];
    const def = VEHICLE_CATALOG[vehicleId];
    if (!vehicle || !def) return { ok: false, reason: 'invalid_vehicle' };

    const hasHose = countItem(state.inventory, 'fuel_siphon_hose') > 0;
    if (!hasHose) return { ok: false, reason: 'no_siphon_hose' };

    if (vehicle.fuelLiters >= vehicle.maxFuel) {
      return { ok: false, reason: 'tank_full' };
    }

    // Siphon 2.5 to 5.0 liters
    const siphoned = Math.min(vehicle.maxFuel - vehicle.fuelLiters, 3.5);
    vehicle.fuelLiters = Math.round((vehicle.fuelLiters + siphoned) * 10) / 10;

    return { ok: true, siphonedLiters: siphoned, currentFuel: vehicle.fuelLiters };
  }
}

