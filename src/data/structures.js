/**
 * Outpost / settlement structures.
 *   maxLevel     maximum upgrade tier
 *   minutes      construction time per level
 *   costs        cost per level (index 0 = level 1, index 1 = level 2)
 */
export const STRUCTURES = {
  workbench: {
    glyph: '⚙',
    maxLevel: 2,
    minutes: 60,
    costs: [
      [
        { itemId: 'scrap_metal', qty: 2 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 3 },
        { itemId: 'electronics', qty: 2 },
        { itemId: 'copper_wire', qty: 2 },
      ],
    ],
    grantsStationTier: [1, 2],
  },
  rain_catcher: {
    glyph: '◊',
    maxLevel: 2,
    minutes: 45,
    costs: [
      [
        { itemId: 'cloth_rags', qty: 3 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 2 },
        { itemId: 'cloth_rags', qty: 3 },
      ],
    ],
    waterEveryHours: [12, 6],
  },
  barricade: {
    glyph: '▤',
    maxLevel: 3,
    minutes: 45,
    costs: [
      [{ itemId: 'scrap_metal', qty: 2 }],
      [
        { itemId: 'scrap_metal', qty: 3 },
        { itemId: 'duct_tape', qty: 1 },
      ],
      [
        { itemId: 'scrap_metal', qty: 4 },
        { itemId: 'copper_wire', qty: 2 },
      ],
    ],
    defenseBonus: [1, 2, 3],
  },
  med_cot: {
    glyph: '✚',
    maxLevel: 1,
    minutes: 45,
    costs: [
      [
        { itemId: 'cloth_rags', qty: 4 },
        { itemId: 'bandage', qty: 2 },
      ],
    ],
    restHealBonus: 2.0,
  },
};

export function getStructure(structureId) {
  const structure = STRUCTURES[structureId];
  if (!structure) throw new Error(`Unknown structure "${structureId}"`);
  return structure;
}

