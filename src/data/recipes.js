/**
 * Crafting recipes.
 *   tier         0 = handcraft anywhere, 1 = Field Workbench, 2 = Machinist Bench
 *   minutes      time spent crafting
 *   ingredients  [{ itemId, qty }]
 *   output       { itemId, qty }
 *   xp           { skill, amount }
 */
export const RECIPES = {
  makeshift_bandage: {
    tier: 0,
    minutes: 15,
    ingredients: [{ itemId: 'cloth_rags', qty: 2 }],
    output: { itemId: 'bandage', qty: 1 },
    xp: { skill: 'medical', amount: 5 },
  },
  clean_water: {
    tier: 0,
    minutes: 20,
    ingredients: [
      { itemId: 'dirty_water', qty: 1 },
      { itemId: 'cloth_rags', qty: 1 },
    ],
    output: { itemId: 'bottled_water', qty: 1 },
    xp: { skill: 'foraging', amount: 5 },
  },
  antiseptic_compress: {
    tier: 0,
    minutes: 20,
    ingredients: [
      { itemId: 'bandage', qty: 1 },
      { itemId: 'antiseptic', qty: 1 },
    ],
    output: { itemId: 'first_aid_kit', qty: 1 },
    xp: { skill: 'medical', amount: 12 },
  },
  salvaged_blade: {
    tier: 1,
    minutes: 45,
    ingredients: [
      { itemId: 'scrap_metal', qty: 2 },
      { itemId: 'duct_tape', qty: 1 },
      { itemId: 'cloth_rags', qty: 1 },
    ],
    output: { itemId: 'machete', qty: 1 },
    xp: { skill: 'engineering', amount: 14 },
  },
  patched_leathers: {
    tier: 1,
    minutes: 60,
    ingredients: [
      { itemId: 'cloth_rags', qty: 4 },
      { itemId: 'duct_tape', qty: 2 },
      { itemId: 'scrap_metal', qty: 1 },
    ],
    output: { itemId: 'leather_jacket', qty: 1 },
    xp: { skill: 'engineering', amount: 16 },
  },
  dynamo_lamp: {
    tier: 1,
    minutes: 45,
    ingredients: [
      { itemId: 'electronics', qty: 1 },
      { itemId: 'copper_wire', qty: 2 },
      { itemId: 'duct_tape', qty: 1 },
    ],
    output: { itemId: 'flashlight', qty: 1 },
    xp: { skill: 'engineering', amount: 15 },
  },
  reloaded_ammo: {
    tier: 2,
    minutes: 45,
    ingredients: [
      { itemId: 'scrap_metal', qty: 1 },
      { itemId: 'copper_wire', qty: 2 },
    ],
    output: { itemId: 'rifle_rounds', qty: 6 },
    xp: { skill: 'engineering', amount: 18 },
  },
  plated_rig: {
    tier: 2,
    minutes: 90,
    ingredients: [
      { itemId: 'scrap_metal', qty: 3 },
      { itemId: 'duct_tape', qty: 2 },
      { itemId: 'cloth_rags', qty: 3 },
    ],
    output: { itemId: 'riot_vest', qty: 1 },
    xp: { skill: 'engineering', amount: 25 },
  },
};

export function getRecipe(recipeId) {
  const recipe = RECIPES[recipeId];
  if (!recipe) throw new Error(`Unknown recipe "${recipeId}"`);
  return recipe;
}

