import { rollRange } from '../core/rng.js';
import {
  COUNTRY_LOOT,
  CRAFT_AND_VEHICLE_REPAIR_TABLE,
  DANGER_HIGH_TIER_TABLE,
  DANGER_MID_TIER_TABLE,
} from './countryLoot.js';
import { LOOT_TABLES } from './lootTables.js';
import { COUNTRY_POI_LANDMARKS } from './poiLandmarks.js';
import { COUNTRY_EXCLUSIVE_LOOT } from './countryExclusiveItems.js';

export function getPoiDisplayName(poi, country, genericName = '') {
  if (!poi) return genericName || '';
  const landmark = country ? COUNTRY_POI_LANDMARKS[country]?.[poi.id] : null;
  if (landmark && genericName) return `${landmark} · ${genericName}`;
  return landmark || genericName || '';
}

const poiLootEntry = (itemId, weight, qty = 1) => ({ itemId, weight, qty });

export const SCAVENGE_POIS = {
  pharmacy: {
    id: 'pharmacy',
    glyph: '💊',
    nameKey: 'loot.poi.pharmacy.name',
    tagKey: 'loot.poi.pharmacy.tag',
    descKey: 'loot.poi.pharmacy.desc',
    telemetryKey: 'loot.poi.pharmacy.telemetry',
    lootTable: [
      poiLootEntry('bandage', 10, [1, 3]),
      poiLootEntry('antiseptic', 8, [1, 2]),
      poiLootEntry('painkillers', 8, [1, 3]),
      poiLootEntry('antibiotics', 7, [1, 2]),
      poiLootEntry('gauze_roll_sterile', 8, [1, 3]),
      poiLootEntry('first_aid_kit', 5, 1),
      poiLootEntry('sam_splint_roll', 6, 1),
      poiLootEntry('quikclot_hemostatic_gauze', 5, 1),
      poiLootEntry('rubbing_alcohol_bottle', 6, 1),
      poiLootEntry('povidone_iodine_bottle', 6, 1),
      poiLootEntry('burn_hydrogel_dressing', 5, 1),
      poiLootEntry('combat_tourniquet_cat', 4, 1),
      poiLootEntry('chest_seal_twin_pack', 3, 1),
    ],
  },

  supermarket: {
    id: 'supermarket',
    glyph: '🥫',
    nameKey: 'loot.poi.supermarket.name',
    tagKey: 'loot.poi.supermarket.tag',
    descKey: 'loot.poi.supermarket.desc',
    telemetryKey: 'loot.poi.supermarket.telemetry',
    lootTable: [
      poiLootEntry('canned_beans', 12, [1, 3]),
      poiLootEntry('bottled_water', 12, [1, 3]),
      poiLootEntry('canned_sardines', 9, [1, 2]),
      poiLootEntry('jerky', 8, [1, 2]),
      poiLootEntry('energy_bar', 8, [1, 3]),
      poiLootEntry('instant_coffee', 6, [1, 2]),
      poiLootEntry('black_tea_bags_box', 6, [1, 2]),
      poiLootEntry('mre', 5, 1),
      poiLootEntry('purified_water_canteen', 5, 1),
      poiLootEntry('wooden_strike_matches', 7, [1, 2]),
    ],
  },

  police_military: {
    id: 'police_military',
    glyph: '🪖',
    nameKey: 'loot.poi.police_military.name',
    tagKey: 'loot.poi.police_military.tag',
    descKey: 'loot.poi.police_military.desc',
    telemetryKey: 'loot.poi.police_military.telemetry',
    lootTable: [
      poiLootEntry('ammo_9mm_parabellum_box', 12, [15, 35]),
      poiLootEntry('ammo_556_nato_box', 8, [10, 25]),
      poiLootEntry('ammo_762x39_soviet_box', 8, [10, 25]),
      poiLootEntry('rifle_rounds', 9, [6, 16]),
      poiLootEntry('glock_19_9mm_pistol', 4, 1),
      poiLootEntry('beretta_92fs_pistol', 4, 1),
      poiLootEntry('folding_tactical_knife', 6, 1),
      poiLootEntry('combat_tourniquet_cat', 6, 1),
      poiLootEntry('riot_vest', 4, 1),
      poiLootEntry('tactical_plate_carrier_level4', 3, 1),
      poiLootEntry('military_rucksack', 3, 1),
      poiLootEntry('hunting_rifle', 3, 1),
      poiLootEntry('scrap_metal', 8, [2, 5]),
      poiLootEntry('scrap_iron_plates', 7, [1, 3]),
      poiLootEntry('duct_tape', 7, [1, 3]),
    ],
  },

  gas_station: {
    id: 'gas_station',
    glyph: '⛽',
    nameKey: 'loot.poi.gas_station.name',
    tagKey: 'loot.poi.gas_station.tag',
    descKey: 'loot.poi.gas_station.desc',
    telemetryKey: 'loot.poi.gas_station.telemetry',
    lootTable: [
      poiLootEntry('motor_oil_10w40_bottle', 16, [1, 3]),
      poiLootEntry('motor_oil_synthetic_10w40', 10, [1, 2]),
      poiLootEntry('car_battery_lead_acid', 12, 1),
      poiLootEntry('car_battery_12v_lead_acid', 8, 1),
      poiLootEntry('spark_plug_set', 14, [1, 2]),
      poiLootEntry('gasoline_fuel_canister_5l', 16, [1, 2]),
      poiLootEntry('diesel_fuel_canister_5l', 15, [1, 2]),
      poiLootEntry('diesel_fuel_canister_10l', 8, 1),
      poiLootEntry('scrap_metal', 18, [3, 7]),
      poiLootEntry('scrap_iron_plates', 14, [2, 4]),
      poiLootEntry('duct_tape', 15, [2, 4]),
      poiLootEntry('rubber_tire_patch_vulcanizing_kit', 12, [1, 2]),
      poiLootEntry('wd40_penetrating_oil', 12, [1, 2]),
      poiLootEntry('fuel_siphon_hose', 10, 1),
      poiLootEntry('tire_iron_cross_wrench', 10, 1),
    ],
  },

  hardware_industrial: {
    id: 'hardware_industrial',
    glyph: '⚙️',
    nameKey: 'loot.poi.hardware_industrial.name',
    tagKey: 'loot.poi.hardware_industrial.tag',
    descKey: 'loot.poi.hardware_industrial.desc',
    telemetryKey: 'loot.poi.hardware_industrial.telemetry',
    lootTable: [
      poiLootEntry('scrap_metal', 22, [4, 9]),
      poiLootEntry('scrap_iron_plates', 16, [2, 5]),
      poiLootEntry('copper_wire', 18, [3, 7]),
      poiLootEntry('electronics', 16, [2, 5]),
      poiLootEntry('duct_tape', 16, [2, 4]),
      poiLootEntry('cloth_rags', 15, [3, 7]),
      poiLootEntry('battery_9v_transistor', 12, [2, 4]),
      poiLootEntry('sheet_metal_corrugated', 8, [1, 2]),
      poiLootEntry('crowbar', 7, 1),
      poiLootEntry('fire_axe', 5, 1),
    ],
  },

  residential: {
    id: 'residential',
    glyph: '🏢',
    nameKey: 'loot.poi.residential.name',
    tagKey: 'loot.poi.residential.tag',
    descKey: 'loot.poi.residential.desc',
    telemetryKey: 'loot.poi.residential.telemetry',
    lootTable: [
      poiLootEntry('cloth_rags', 16, [3, 7]),
      poiLootEntry('duct_tape', 12, [2, 4]),
      poiLootEntry('scrap_metal', 11, [2, 5]),
      poiLootEntry('copper_wire', 10, [2, 4]),
      poiLootEntry('flashlight', 8, 1),
      poiLootEntry('wooden_strike_matches', 10, [1, 3]),
      poiLootEntry('leather_jacket', 6, 1),
      poiLootEntry('duffel_bag', 6, 1),
      poiLootEntry('hiking_pack', 5, 1),
      poiLootEntry('kitchen_knife', 6, 1),
      poiLootEntry('canned_beans', 7, [1, 2]),
      poiLootEntry('bottled_water', 8, [1, 2]),
    ],
  },

  port_dock: {
    id: 'port_dock',
    glyph: '⚓',
    nameKey: 'loot.poi.port_dock.name',
    tagKey: 'loot.poi.port_dock.tag',
    descKey: 'loot.poi.port_dock.desc',
    telemetryKey: 'loot.poi.port_dock.telemetry',
    lootTable: [
      poiLootEntry('canned_sardines', 12, [1, 3]),
      poiLootEntry('bottled_water', 9, [1, 2]),
      poiLootEntry('hemp_rope_coil', 9, 1),
      poiLootEntry('thick_plastic_tarpaulin', 8, 1),
      poiLootEntry('single_shot_flare_gun', 5, 1),
      poiLootEntry('ammo_red_signal_flare', 6, [2, 4]),
      poiLootEntry('compass', 6, 1),
      poiLootEntry('diesel_fuel_canister_5l', 7, 1),
      poiLootEntry('scrap_metal', 8, [1, 3]),
    ],
  },

  bunker_lab: {
    id: 'bunker_lab',
    glyph: '🔬',
    nameKey: 'loot.poi.bunker_lab.name',
    tagKey: 'loot.poi.bunker_lab.tag',
    descKey: 'loot.poi.bunker_lab.desc',
    telemetryKey: 'loot.poi.bunker_lab.telemetry',
    lootTable: [
      poiLootEntry('first_aid_kit', 8, 1),
      poiLootEntry('antibiotics', 8, [1, 2]),
      poiLootEntry('quikclot_hemostatic_gauze', 7, [1, 2]),
      poiLootEntry('chest_seal_twin_pack', 7, 1),
      poiLootEntry('gp5_gas_mask_civilian', 5, 1),
      poiLootEntry('sawyer_gravity_water_filter_4l', 5, 1),
      poiLootEntry('tactical_plate_carrier_level4', 4, 1),
      poiLootEntry('portable_waterproof_solar_panel_28w', 4, 1),
      poiLootEntry('mre', 7, [1, 2]),
    ],
  },
};

/**
 * Returns 3-4 POIs customized to the node's biome, danger, and geographic context.
 */
export function getPoisForNode(node, rng) {
  const biome = node?.biome || 'urban';
  const danger = node?.danger || 2;
  const poiKeys = [];

  // Primary POIs by biome
  if (biome === 'coastal') {
    poiKeys.push('supermarket', 'pharmacy', 'gas_station', 'port_dock');
  } else if (biome === 'military') {
    poiKeys.push('police_military', 'pharmacy', 'hardware_industrial', 'bunker_lab');
  } else if (biome === 'industrial') {
    poiKeys.push('hardware_industrial', 'gas_station', 'supermarket', 'pharmacy');
  } else if (biome === 'rural') {
    poiKeys.push('residential', 'gas_station', 'supermarket', 'hardware_industrial');
  } else if (biome === 'wasteland') {
    poiKeys.push('gas_station', 'hardware_industrial', 'residential', 'police_military');
  } else if (biome === 'arctic') {
    poiKeys.push('bunker_lab', 'supermarket', 'pharmacy', 'residential');
  } else if (biome === 'forest') {
    poiKeys.push('residential', 'pharmacy', 'supermarket', 'police_military');
  } else {
    // urban or suburban
    if (danger >= 4) {
      poiKeys.push('supermarket', 'pharmacy', 'police_military', 'bunker_lab');
    } else {
      poiKeys.push('supermarket', 'pharmacy', 'gas_station', 'residential');
    }
  }

  // Deduplicate and map to POI objects
  const uniqueKeys = Array.from(new Set(poiKeys));
  return uniqueKeys.map((k) => SCAVENGE_POIS[k]).filter(Boolean);
}

/**
 * Rolls specialized loot biased toward the chosen POI.
 */
export function rollScavengePoiLoot(rng, {
  node,
  poiId,
  depletion = 0,
  foragingBonus = 1,
  scavengeBonus = 0,
  envEfficiency = 1,
}) {
  const poi = SCAVENGE_POIS[poiId] || SCAVENGE_POIS.supermarket;
  const country = node?.country || 'Turkey';
  const biome = node?.biome || 'urban';
  const danger = node?.danger || 1;

  const countryTable = COUNTRY_LOOT[country] || COUNTRY_LOOT['Turkey'];
  const biomeTable = LOOT_TABLES[biome] || LOOT_TABLES['urban'];
  const poiTable = poi.lootTable;

  // Base rolls scaled with danger - generously increased to 3-6 items
  const minRolls = danger >= 4 ? 4 : 3;
  const maxRolls = danger >= 4 ? 6 : 5;
  const rawBase = rng.int ? rng.int(minRolls, maxRolls) : 3;

  const totalMult = foragingBonus * (1 + scavengeBonus) * envEfficiency * Math.max(0.4, 1 - depletion * 0.4);
  const totalRolls = Math.max(3, Math.round(rawBase * totalMult));

  const found = new Map();

  // Always guarantee at least 1-2 primary drops directly from the chosen POI!
  const guaranteedPoiDrop1 = rng.weighted(poiTable);
  if (guaranteedPoiDrop1?.itemId) {
    const qty = rollRange(rng, guaranteedPoiDrop1.qty || 1);
    found.set(guaranteedPoiDrop1.itemId, (found.get(guaranteedPoiDrop1.itemId) ?? 0) + qty);
  }

  const guaranteedPoiDrop2 = rng.weighted(poiTable);
  if (guaranteedPoiDrop2?.itemId) {
    const qty = rollRange(rng, guaranteedPoiDrop2.qty || 1);
    found.set(guaranteedPoiDrop2.itemId, (found.get(guaranteedPoiDrop2.itemId) ?? 0) + qty);
  }

  // Country-exclusive regional item drop (strictly scoped to current node's country)
  const exclusivePool = COUNTRY_EXCLUSIVE_LOOT[country];
  if (exclusivePool?.length && rng.chance(0.75)) {
    const exclusiveDrop = rng.weighted(exclusivePool);
    if (exclusiveDrop?.itemId) {
      const qty = rollRange(rng, exclusiveDrop.qty || 1);
      found.set(exclusiveDrop.itemId, (found.get(exclusiveDrop.itemId) ?? 0) + qty);
    }
  }

  for (let i = 2; i < totalRolls; i++) {
    let chosenTable;
    const rollType = rng.float ? rng.float(0, 1) : Math.random();

    // 60% POI Specialization, 20% Craft & Vehicle Repair, 15% Country/Biome, 5% High-Tier
    if (rollType < 0.60) {
      chosenTable = poiTable;
    } else if (rollType < 0.80) {
      chosenTable = CRAFT_AND_VEHICLE_REPAIR_TABLE;
    } else if (rollType < 0.95) {
      chosenTable = countryTable || biomeTable;
    } else {
      chosenTable = danger >= 4 ? DANGER_HIGH_TIER_TABLE : DANGER_MID_TIER_TABLE;
    }

    const itemEntry = rng.weighted(chosenTable);
    if (itemEntry?.itemId) {
      const qty = rollRange(rng, itemEntry.qty || 1);
      found.set(itemEntry.itemId, (found.get(itemEntry.itemId) ?? 0) + qty);
    }
  }

  // Special high danger bonus
  if (danger >= 4 && rng.chance(0.40 + danger * 0.08)) {
    const specialEntry = rng.weighted(poiId === 'police_military' || poiId === 'bunker_lab' ? DANGER_HIGH_TIER_TABLE : DANGER_MID_TIER_TABLE);
    if (specialEntry?.itemId) {
      const qty = rollRange(rng, specialEntry.qty || 1);
      found.set(specialEntry.itemId, (found.get(specialEntry.itemId) ?? 0) + qty);
    }
  }

  return [...found].map(([itemId, qty]) => ({ itemId, qty }));
}
