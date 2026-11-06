/**
 * Item registry. Display text lives in the locale under `item.<id>.name` and
 * `item.<id>.desc`.
 *
 *   category  supplies | medical | weapons | scrap | gear
 *   stack     max quantity per inventory slot
 *   use       { minutes, effects[] } — consumed on use
 *   equip     { slot, power?, armor?, capacityKg?, slots?, flags?, ammo? }
 *   passive   bonuses granted while carried (not stacked per unit)
 */
export const CATEGORIES = ['supplies', 'medical', 'weapons', 'scrap', 'gear'];
export const EQUIPMENT_SLOTS = ['weapon', 'body', 'pack'];

export const ITEMS = {
  canned_beans: {
    category: 'supplies', weight: 0.45, stack: 6, tags: ['food'], glyph: '▤',
    use: { minutes: 10, effects: [{ type: 'vital', vital: 'satiety', amount: 28 }] },
  },
  jerky: {
    category: 'supplies', weight: 0.15, stack: 10, tags: ['food'], glyph: '≋',
    use: { minutes: 5, effects: [
      { type: 'vital', vital: 'satiety', amount: 16 },
      { type: 'vital', vital: 'hydration', amount: -4 },
    ] },
  },
  mre: {
    category: 'supplies', weight: 0.7, stack: 3, tags: ['food'], glyph: '▣',
    use: { minutes: 15, effects: [
      { type: 'vital', vital: 'satiety', amount: 45 },
      { type: 'vital', vital: 'hydration', amount: 6 },
    ] },
  },
  energy_bar: {
    category: 'supplies', weight: 0.08, stack: 10, tags: ['food'], glyph: '▬',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'satiety', amount: 10 },
      { type: 'vital', vital: 'energy', amount: 6 },
    ] },
  },
  bottled_water: {
    category: 'supplies', weight: 0.55, stack: 6, tags: ['drink'], glyph: '◊',
    use: { minutes: 2, effects: [{ type: 'vital', vital: 'hydration', amount: 32 }] },
  },
  dirty_water: {
    category: 'supplies', weight: 0.55, stack: 6, tags: ['drink'], glyph: '◇',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'hydration', amount: 24 },
      { type: 'ailment', id: 'infection', chance: 0.25 },
    ] },
  },
  instant_coffee: {
    category: 'supplies', weight: 0.05, stack: 10, tags: ['drink'], glyph: '◘',
    use: { minutes: 5, effects: [
      { type: 'vital', vital: 'energy', amount: 14 },
      { type: 'vital', vital: 'hydration', amount: -3 },
    ] },
  },

  bandage: {
    category: 'medical', weight: 0.04, stack: 10, glyph: '+',
    use: { minutes: 5, effects: [
      { type: 'cure', id: 'bleeding' },
      { type: 'xp', skill: 'medical', amount: 4 },
    ] },
  },
  antiseptic: {
    category: 'medical', weight: 0.25, stack: 4, glyph: '¤',
    use: { minutes: 5, effects: [
      { type: 'cure', id: 'infection', amount: 35 },
      { type: 'xp', skill: 'medical', amount: 6 },
    ] },
  },
  antibiotics: {
    category: 'medical', weight: 0.03, stack: 10, glyph: '∘',
    use: { minutes: 2, effects: [
      { type: 'cure', id: 'infection' },
      { type: 'xp', skill: 'medical', amount: 8 },
    ] },
  },
  painkillers: {
    category: 'medical', weight: 0.03, stack: 12, glyph: '·',
    use: { minutes: 2, effects: [
      { type: 'vital', vital: 'energy', amount: 8 },
      { type: 'cure', id: 'sprain', amount: 12 },
      { type: 'xp', skill: 'medical', amount: 3 },
    ] },
  },
  first_aid_kit: {
    category: 'medical', weight: 0.9, stack: 2, glyph: '⊞',
    use: { minutes: 20, effects: [
      { type: 'heal', amount: 30 },
      { type: 'cure', id: 'bleeding' },
      { type: 'xp', skill: 'medical', amount: 10 },
    ] },
  },

  kitchen_knife: { category: 'weapons', weight: 0.3, stack: 1, glyph: '/', equip: { slot: 'weapon', power: 2 } },
  crowbar: {
    category: 'weapons', weight: 1.9, stack: 1, glyph: '⌐',
    equip: { slot: 'weapon', power: 3 }, passive: { scavengeBonus: 0.12 },
  },
  machete: { category: 'weapons', weight: 0.9, stack: 1, glyph: '⟋', equip: { slot: 'weapon', power: 4 } },
  fire_axe: {
    category: 'weapons', weight: 2.6, stack: 1, glyph: '¶',
    equip: { slot: 'weapon', power: 5 }, passive: { scavengeBonus: 0.08 },
  },
  hunting_rifle: {
    category: 'weapons', weight: 4.1, stack: 1, glyph: '╾',
    equip: { slot: 'weapon', power: 7, ammo: 'rifle_rounds', unloadedPower: 1 },
  },
  rifle_rounds: { category: 'weapons', weight: 0.02, stack: 30, glyph: '⁝' },

  scrap_metal: { category: 'scrap', weight: 1.0, stack: 10, glyph: '#' },
  copper_wire: { category: 'scrap', weight: 0.2, stack: 15, glyph: '~' },
  electronics: { category: 'scrap', weight: 0.3, stack: 10, glyph: '≡' },
  cloth_rags: { category: 'scrap', weight: 0.1, stack: 20, glyph: '%' },
  duct_tape: { category: 'scrap', weight: 0.15, stack: 5, glyph: 'o' },

  duffel_bag: { category: 'gear', weight: 1.0, stack: 1, glyph: 'U', equip: { slot: 'pack', capacityKg: 6, slots: 3 } },
  hiking_pack: { category: 'gear', weight: 1.4, stack: 1, glyph: 'Ů', equip: { slot: 'pack', capacityKg: 12, slots: 5 } },
  military_rucksack: { category: 'gear', weight: 2.2, stack: 1, glyph: 'Ŵ', equip: { slot: 'pack', capacityKg: 18, slots: 8 } },
  leather_jacket: { category: 'gear', weight: 1.6, stack: 1, glyph: 'Ʌ', equip: { slot: 'body', armor: 1 } },
  hazmat_poncho: { category: 'gear', weight: 0.8, stack: 1, glyph: 'Δ', equip: { slot: 'body', armor: 0, flags: ['acidProof'] } },
  riot_vest: { category: 'gear', weight: 3.4, stack: 1, glyph: 'Ш', equip: { slot: 'body', armor: 3 } },
  flashlight: { category: 'gear', weight: 0.3, stack: 1, glyph: '¡', passive: { scavengeBonus: 0.04, nightVision: 1 } },
  compass: { category: 'gear', weight: 0.1, stack: 1, glyph: '⊕', passive: { travelSpeed: 0.08 } },
};

export function getItem(itemId) {
  const item = ITEMS[itemId];
  if (!item) throw new Error(`Unknown item "${itemId}"`);
  return item;
}

