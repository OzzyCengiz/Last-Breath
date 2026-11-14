import { BALANCE } from '../../data/balance.js';
import { getItem } from '../../data/items.js';
import { skillLevel } from '../skills/skillSelectors.js';
import { SKILLS } from '../../data/skills.js';
import { getUnlockedPerkBonus } from '../../data/skillTree.js';
import {
  capacity, carriedWeight, countItem, groundAt, hasEquippedFlag, matchingStacks, passiveTotal,
} from './inventoryModel.js';

const UNARMED_POWER = 1;

export function loadSummary(state) {
  const { inventory, player } = state;
  const perkExtraKg = getUnlockedPerkBonus(state, 'extraKg') || 0;
  const perkExtraSlots = getUnlockedPerkBonus(state, 'extraSlots') || 0;
  const extraKg = (player?.trait === 'hoarder' ? 2.5 : 0) + perkExtraKg;
  const limits = capacity(inventory);
  const totalKg = limits.kg + extraKg;
  const weight = carriedWeight(inventory);
  return {
    weight,
    capacityKg: totalKg,
    hardLimitKg: totalKg * BALANCE.inventory.hardLimitRatio,
    slotsUsed: inventory.stacks.length,
    slotsTotal: limits.slots + perkExtraSlots,
    overloaded: weight > totalKg,
  };
}

export const isOverloaded = (state) => loadSummary(state).overloaded;

export function getItemUpgradeLevel(state, itemId) {
  if (!itemId) return 0;
  return state?.inventory?.upgrades?.[itemId] ?? 0;
}

export function weaponProfile(state) {
  const weaponId = state.inventory.equipment.weapon;
  if (!weaponId) return { itemId: null, power: UNARMED_POWER, ammoId: null, loaded: true, upgradeLevel: 0 };
  const { power, ammo, unloadedPower } = getItem(weaponId).equip;
  const loaded = !ammo || countItem(state.inventory, ammo) > 0;
  const upgradeLevel = getItemUpgradeLevel(state, weaponId);
  const rawPower = loaded ? power : unloadedPower;
  return {
    itemId: weaponId,
    power: Math.round(rawPower * (1 + upgradeLevel * 0.15) * 10) / 10,
    ammoId: ammo ?? null,
    loaded,
    upgradeLevel,
  };
}

export function combatRating(state) {
  const dmgBonus = getUnlockedPerkBonus(state, 'combatDamage') || 0;
  const basePwr = weaponProfile(state).power * (1 + dmgBonus);
  return basePwr + skillLevel(state, 'marksmanship') * SKILLS.marksmanship.bonusPerLevel;
}

export function armorValue(state) {
  const bodyId = state.inventory.equipment.body;
  if (!bodyId) return 0;
  const baseArmor = getItem(bodyId).equip.armor ?? 0;
  const upgradeLevel = getItemUpgradeLevel(state, bodyId);
  return baseArmor + upgradeLevel * 2;
}

export function incomingDamageMultiplier(state) {
  const perkRed = getUnlockedPerkBonus(state, 'damageReduction') || 0;
  const armorRed = armorValue(state) * BALANCE.inventory.armorDamageReduction;
  return Math.max(0.2, (1 - armorRed) * (1 - perkRed));
}

export const passiveBonus = (state, key) => {
  const fromInv = passiveTotal(state.inventory, key);
  const fromPerks = getUnlockedPerkBonus(state, key) || 0;
  return fromInv + fromPerks;
};

export const hasGearFlag = (state, flag) => hasEquippedFlag(state.inventory, flag);
export const groundHere = (state) => groundAt(state.inventory, state.world.currentNodeId);

export function meetsRequirement(state, requires) {
  if (!requires) return true;
  return matchingStacks(state.inventory, requires).length > 0;
}
