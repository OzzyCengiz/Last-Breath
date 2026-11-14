/**
 * Loot tables: `[itemId, weight, qty]` where qty is a number or `[min, max]`.
 * Biome tables feed scavenging; the rest are referenced by encounter effects.
 */
const entry = (itemId, weight, qty = 1) => ({ itemId, weight, qty });

export const LOOT_TABLES = {
  urban: [
    entry('canned_beans', 5), entry('bottled_water', 5), entry('energy_bar', 4, [1, 2]),
    entry('instant_coffee', 2), entry('bandage', 4), entry('painkillers', 3, [1, 3]),
    entry('electronics', 5, [1, 2]), entry('copper_wire', 5, [2, 4]), entry('duct_tape', 5, [1, 3]),
    entry('cloth_rags', 6, [2, 5]), entry('scrap_metal', 6, [2, 5]), entry('duffel_bag', 1),
    entry('flashlight', 1), entry('kitchen_knife', 1), entry('dirty_water', 3),
    entry('motor_oil_10w40_bottle', 2, 1), entry('gasoline_fuel_canister_5l', 2, 1),
  ],
  suburban: [
    entry('canned_beans', 5), entry('bottled_water', 5), entry('jerky', 3, [1, 2]),
    entry('dirty_water', 3), entry('bandage', 4), entry('antiseptic', 2),
    entry('cloth_rags', 6, [2, 5]), entry('duct_tape', 5, [1, 3]), entry('scrap_metal', 5, [2, 4]),
    entry('copper_wire', 4, [2, 4]), entry('hiking_pack', 1), entry('leather_jacket', 1),
    entry('crowbar', 1), entry('flashlight', 1), entry('motor_oil_10w40_bottle', 2, 1),
    entry('spark_plug_set', 2, 1),
  ],
  industrial: [
    entry('scrap_metal', 12, [3, 7]), entry('scrap_iron_plates', 7, [1, 3]),
    entry('copper_wire', 9, [2, 5]), entry('electronics', 6, [1, 3]),
    entry('duct_tape', 6, [2, 4]), entry('cloth_rags', 5, [2, 4]), entry('dirty_water', 3),
    entry('crowbar', 2), entry('fire_axe', 1), entry('car_battery_lead_acid', 3, 1),
    entry('motor_oil_10w40_bottle', 4, 1), entry('diesel_fuel_canister_5l', 3, 1),
    entry('hazmat_poncho', 1), entry('energy_bar', 2), entry('instant_coffee', 2),
  ],
  rural: [
    entry('jerky', 5, [1, 2]), entry('canned_beans', 4), entry('dirty_water', 4),
    entry('cloth_rags', 6, [2, 4]), entry('scrap_metal', 5, [2, 4]), entry('duct_tape', 4, [1, 3]),
    entry('motor_oil_10w40_bottle', 2, 1), entry('machete', 1), entry('hunting_rifle', 1),
    entry('rifle_rounds', 2, [3, 8]), entry('bandage', 2), entry('compass', 1),
  ],
  coastal: [
    entry('dirty_water', 4), entry('bottled_water', 4), entry('jerky', 4, [1, 2]),
    entry('canned_beans', 3), entry('cloth_rags', 5, [2, 4]), entry('duct_tape', 4, [1, 3]),
    entry('scrap_metal', 6, [2, 4]), entry('copper_wire', 4, [2, 3]), entry('diesel_fuel_canister_5l', 2, 1),
    entry('compass', 1), entry('antiseptic', 1),
  ],
  forest: [
    entry('dirty_water', 6), entry('jerky', 4), entry('cloth_rags', 4, [2, 3]),
    entry('scrap_metal', 3, [1, 3]), entry('machete', 1), entry('rifle_rounds', 2, [2, 6]),
    entry('bandage', 3), entry('compass', 1),
  ],
  wasteland: [
    entry('dirty_water', 4), entry('scrap_metal', 10, [2, 6]), entry('scrap_iron_plates', 5, [1, 3]),
    entry('copper_wire', 6, [2, 4]), entry('duct_tape', 4, [1, 2]), entry('car_battery_lead_acid', 2, 1),
    entry('gasoline_fuel_canister_5l', 2, 1), entry('energy_bar', 2), entry('hazmat_poncho', 1),
    entry('painkillers', 2),
  ],
  arctic: [
    entry('mre', 3), entry('bottled_water', 3), entry('instant_coffee', 3),
    entry('leather_jacket', 1), entry('scrap_metal', 5, [2, 4]), entry('copper_wire', 3, [1, 3]),
    entry('rifle_rounds', 2, [2, 6]),
  ],
  military: [
    entry('mre', 6), entry('bottled_water', 4), entry('rifle_rounds', 5, [6, 16]),
    entry('first_aid_kit', 3), entry('antibiotics', 3), entry('riot_vest', 1),
    entry('military_rucksack', 1), entry('hunting_rifle', 1), entry('electronics', 4, [1, 3]),
    entry('scrap_metal', 5, [2, 4]), entry('scrap_iron_plates', 4, [1, 3]),
  ],

  roadside: [
    entry('bottled_water', 4), entry('energy_bar', 3, [1, 2]), entry('duct_tape', 6, [2, 4]),
    entry('scrap_metal', 7, [2, 5]), entry('copper_wire', 5, [2, 4]), entry('motor_oil_10w40_bottle', 4, 1),
    entry('gasoline_fuel_canister_5l', 3, 1), entry('spark_plug_set', 3, 1),
    entry('car_battery_lead_acid', 2, 1), entry('rubber_tire_patch_vulcanizing_kit', 4, 1),
    entry('flashlight', 1), entry('painkillers', 2, [1, 2]),
  ],
  cache: [
    entry('mre', 3), entry('bottled_water', 4, [1, 2]), entry('antibiotics', 2),
    entry('first_aid_kit', 1), entry('rifle_rounds', 2, [4, 10]), entry('hiking_pack', 1),
    entry('canned_beans', 3, [1, 2]),
  ],
  raider: [
    entry('rifle_rounds', 4, [3, 8]), entry('jerky', 3, [1, 3]), entry('machete', 1),
    entry('painkillers', 2, [1, 2]), entry('bottled_water', 3), entry('leather_jacket', 1),
  ],
  survivor_gift: [
    entry('antibiotics', 2), entry('bandage', 4, [1, 2]), entry('antiseptic', 2),
    entry('compass', 1),
  ],
};

