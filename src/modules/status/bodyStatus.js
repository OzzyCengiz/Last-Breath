/**
 * Last Breath // Targeted Body Trauma & Anatomical Status Engine
 * Zero-dependency Vanilla JS module replacing flat hit points
 * with realistic multi-part trauma, arterial hemodynamics, and targeted treatments.
 */

export const BODY_PARTS = ['head', 'torso', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];

export const BLEED_LEVELS = {
  NONE: 'none',
  MINOR: 'minor',
  ARTERIAL: 'arterial',
};

// EventBus event channel names
export const EVENT_BODY_UPDATED = 'body:updated';
export const EVENT_BLEEDING_ALERT = 'body:bleeding_alert';
export const EVENT_FRACTURE_ALERT = 'body:fracture_alert';
export const EVENT_PNEUMOTHORAX_ALERT = 'body:pneumothorax_alert';
export const EVENT_INFECTION_ALERT = 'body:infection_alert';

// Hourly blood loss rates in absolute HP
export const BLEED_RATES_PER_HOUR = {
  none: 0,
  minor: 3.5,
  arterial: 22.0, // High-speed pulsatile loss leading to rapid shock
};

// Anatomical hit probability distribution when target part is unspecified
export const DEFAULT_HIT_WEIGHTS = {
  torso: 0.38,
  leftLeg: 0.16,
  rightLeg: 0.16,
  leftArm: 0.12,
  rightArm: 0.12,
  head: 0.06,
};

// Weight of each part in computing overall body integrity (0..100)
export const VITAL_PART_WEIGHTS = {
  head: 0.25,
  torso: 0.35,
  leftArm: 0.10,
  rightArm: 0.10,
  leftLeg: 0.10,
  rightLeg: 0.10,
};

/**
 * Creates default state for a single anatomical part.
 */
export function createDefaultBodyPart() {
  return {
    health: 100,
    bleeding: BLEED_LEVELS.NONE,
    fractures: false,
    burns: false,
    infectionRisk: 0, // 0 to 100
    punctured: false, // Tension pneumothorax flag for torso / deep puncture
  };
}

/**
 * Creates default complete body trauma state.
 */
export function createDefaultBodyState() {
  return {
    head: createDefaultBodyPart(),
    torso: createDefaultBodyPart(),
    leftArm: createDefaultBodyPart(),
    rightArm: createDefaultBodyPart(),
    leftLeg: createDefaultBodyPart(),
    rightLeg: createDefaultBodyPart(),
  };
}

/**
 * Checks if a body part is a limb (compatible with windlass tourniquets and splints).
 */
export function isLimb(partName) {
  return ['leftArm', 'rightArm', 'leftLeg', 'rightLeg'].includes(partName);
}

/**
 * Applies targeted physical trauma to a specific or weighted body part.
 * Emits specific EventBus alerts when arterial bleeds, fractures, or pneumothorax occur.
 */
export function applyBodyDamage(bodyState, {
  part = null,
  amount = 10,
  damageType = 'blunt', // 'blunt', 'ballistic', 'slashing', 'puncture', 'burn', 'blast'
  puncture = false,
  fractureChance = 0,
  arterialChance = 0,
  rng = null,
  bus = null,
} = {}) {
  const current = bodyState || createDefaultBodyState();

  // Select target part
  let targetPart = part;
  if (!targetPart || !BODY_PARTS.includes(targetPart)) {
    if (rng && typeof rng.weighted === 'function') {
      const pool = Object.entries(DEFAULT_HIT_WEIGHTS).map(([k, w]) => ({ part: k, weight: w }));
      targetPart = rng.weighted(pool, (entry) => entry.weight).part;
    } else {
      targetPart = 'torso';
    }
  }

  const p = current[targetPart] || (current[targetPart] = createDefaultBodyPart());
  const beforeHealth = p.health;
  p.health = Math.max(0, Math.min(100, p.health - amount));

  const alerts = [];

  // Ballistic, slashing, or puncture wounds trigger bleeding
  const isPenetrating = ['ballistic', 'slashing', 'puncture', 'blast'].includes(damageType);
  if (isPenetrating && amount > 4) {
    const defaultArterial = damageType === 'ballistic' ? 0.25 : (damageType === 'puncture' ? 0.20 : 0.12);
    const calcArterialChance = arterialChance || defaultArterial;
    const isArterial = rng ? rng.chance(calcArterialChance) : (Math.random() < calcArterialChance);

    if (isArterial && p.bleeding !== BLEED_LEVELS.ARTERIAL) {
      p.bleeding = BLEED_LEVELS.ARTERIAL;
      alerts.push({ type: EVENT_BLEEDING_ALERT, part: targetPart, level: BLEED_LEVELS.ARTERIAL });
      if (bus) bus.emit(EVENT_BLEEDING_ALERT, { part: targetPart, level: BLEED_LEVELS.ARTERIAL });
    } else if (p.bleeding === BLEED_LEVELS.NONE) {
      p.bleeding = BLEED_LEVELS.MINOR;
      alerts.push({ type: EVENT_BLEEDING_ALERT, part: targetPart, level: BLEED_LEVELS.MINOR });
      if (bus) bus.emit(EVENT_BLEEDING_ALERT, { part: targetPart, level: BLEED_LEVELS.MINOR });
    }

    // Dirt/particulate in wound raises infection risk
    p.infectionRisk = Math.min(100, p.infectionRisk + Math.round(amount * 0.6));
  }

  // Torso tension pneumothorax risk
  if (targetPart === 'torso' && (puncture || damageType === 'puncture' || (damageType === 'ballistic' && amount >= 18))) {
    if (!p.punctured) {
      p.punctured = true;
      alerts.push({ type: EVENT_PNEUMOTHORAX_ALERT, part: 'torso' });
      if (bus) bus.emit(EVENT_PNEUMOTHORAX_ALERT, { part: 'torso' });
    }
  }

  // Fracture check on limbs/head
  const isBluntOrBlast = ['blunt', 'blast'].includes(damageType);
  const calcFractureChance = fractureChance || (isBluntOrBlast && amount >= 15 ? 0.45 : (amount >= 28 ? 0.35 : 0));
  if (!p.fractures && calcFractureChance > 0) {
    const fractured = rng ? rng.chance(calcFractureChance) : (Math.random() < calcFractureChance);
    if (fractured) {
      p.fractures = true;
      alerts.push({ type: EVENT_FRACTURE_ALERT, part: targetPart });
      if (bus) bus.emit(EVENT_FRACTURE_ALERT, { part: targetPart });
    }
  }

  // Thermal burns
  if (damageType === 'burn') {
    p.burns = true;
    p.infectionRisk = Math.min(100, p.infectionRisk + 30);
  }

  if (bus) {
    bus.emit(EVENT_BODY_UPDATED, { part: targetPart, bodyState: current, alerts });
  }

  return {
    targetPart,
    damageDealt: beforeHealth - p.health,
    partState: { ...p },
    alerts,
  };
}

/**
 * Resolves medical item application to a specific body part.
 * Returns { success: boolean, reasonKey: string, effectDesc: string }
 */
export function applyMedicalTreatment(bodyState, itemId, targetPart = 'torso', { bus = null } = {}) {
  if (!bodyState || !bodyState[targetPart]) {
    return { success: false, reasonKey: 'invalid_part' };
  }

  const part = bodyState[targetPart];
  let treated = false;
  let actionDesc = '';

  // 1. CAT Tourniquet / Tactical Tourniquets
  if (itemId === 'combat_tourniquet_cat' || itemId === 'softt_wide_tourniquet') {
    if (!isLimb(targetPart)) {
      return { success: false, reasonKey: 'tourniquet_requires_limb' };
    }
    if (part.bleeding === BLEED_LEVELS.NONE) {
      return { success: false, reasonKey: 'no_active_bleed' };
    }
    part.bleeding = BLEED_LEVELS.NONE;
    treated = true;
    actionDesc = 'Arterial windlass applied. Hemorrhage halted immediately.';
  }

  // 2. Hemostatic Combat Gauze / QuikClot
  else if (itemId === 'quikclot_hemostatic_gauze' || itemId === 'hemostatic_gauze_z_fold' || itemId === 'gauze_roll_sterile') {
    if (part.bleeding === BLEED_LEVELS.NONE && part.health >= 100) {
      return { success: false, reasonKey: 'no_bleeding_wound' };
    }
    if (part.bleeding === BLEED_LEVELS.ARTERIAL) {
      part.bleeding = BLEED_LEVELS.MINOR; // Demotes arterial to manageable minor bleed
      actionDesc = 'Wound cavity packed with hemostatic kaolin. Arterial jet stemmed to oozing.';
    } else {
      part.bleeding = BLEED_LEVELS.NONE;
      actionDesc = 'Laceration packed and dressed. Bleeding stopped.';
    }
    part.health = Math.min(100, part.health + 8);
    part.infectionRisk = Math.max(0, part.infectionRisk - 15);
    treated = true;
  }

  // 3. Vented Chest Seal / Decompression Needle (Tension Pneumothorax / Torso Puncture)
  else if (itemId === 'chest_seal_vented' || itemId === 'chest_seal_twin_pack' || itemId === 'decompression_needle_14g') {
    if (targetPart !== 'torso') {
      return { success: false, reasonKey: 'chest_seal_requires_torso' };
    }
    if (!part.punctured && part.bleeding === BLEED_LEVELS.NONE) {
      return { success: false, reasonKey: 'no_chest_puncture' };
    }
    part.punctured = false;
    if (part.bleeding === BLEED_LEVELS.MINOR) part.bleeding = BLEED_LEVELS.NONE;
    part.health = Math.min(100, part.health + 12);
    treated = true;
    actionDesc = itemId.includes('needle')
      ? '14G cannula driven into 2nd intercostal space. Pleural cavity decompressed.'
      : 'Vented flutter hydrogel adhered over sucking chest wound. Airway re-established.';
  }

  // 4. SAM Splint Universal (Fractures)
  else if (itemId === 'sam_splint_roll' || itemId === 'sam_splint_36inch') {
    if (!isLimb(targetPart)) {
      return { success: false, reasonKey: 'splint_requires_limb' };
    }
    if (!part.fractures) {
      return { success: false, reasonKey: 'no_fracture' };
    }
    part.fractures = false;
    part.health = Math.min(100, part.health + 10);
    treated = true;
    actionDesc = 'Malleable aluminum-foam splint shaped and taped around fracture. Mobility restored.';
  }

  // 5. Broad-Spectrum Antibiotics (Ciprofloxacin)
  else if (itemId === 'ciprofloxacin_antibiotic' || itemId === 'ciprofloxacin_500mg_box' || itemId === 'antibiotics') {
    let hadInfection = false;
    for (const p of Object.values(bodyState)) {
      if (p.infectionRisk > 0) {
        p.infectionRisk = Math.max(0, p.infectionRisk - 60);
        hadInfection = true;
      }
    }
    treated = true;
    actionDesc = hadInfection
      ? '500mg Ciprofloxacin administered. Systemic bacterial proliferation suppressed.'
      : 'Prophylactic antibiotic dose ingested.';
  }

  // 6. Basic Bandage
  else if (itemId === 'bandage') {
    if (part.bleeding === BLEED_LEVELS.NONE && part.health >= 100) {
      return { success: false, reasonKey: 'no_wounds' };
    }
    if (part.bleeding === BLEED_LEVELS.MINOR) {
      part.bleeding = BLEED_LEVELS.NONE;
      actionDesc = 'Bandage wrapped securely over laceration. Bleeding ceased.';
    } else if (part.bleeding === BLEED_LEVELS.ARTERIAL) {
      return { success: false, reasonKey: 'bandage_insufficient_for_arterial' };
    } else {
      actionDesc = 'Clean dressing applied.';
    }
    part.health = Math.min(100, part.health + 6);
    treated = true;
  }

  if (treated && bus) {
    bus.emit(EVENT_BODY_UPDATED, { part: targetPart, bodyState, actionDesc });
  }

  return { success: treated, actionDesc };
}

/**
 * Hourly biological degradation, infection proliferation, and hemodynamic blood loss tick.
 */
export function tickBodyState(bodyState, hours = 1, { rng = null, bus = null } = {}) {
  if (!bodyState) return { totalBleedLoss: 0, alerts: [] };

  let totalBleedLoss = 0;
  const alerts = [];

  for (const partName of BODY_PARTS) {
    const part = bodyState[partName];
    if (!part) continue;

    // Blood loss calculation
    const bleedRate = BLEED_RATES_PER_HOUR[part.bleeding] || 0;
    if (bleedRate > 0) {
      const bleedLoss = bleedRate * hours;
      totalBleedLoss += bleedLoss;
      part.health = Math.max(0, part.health - bleedLoss * 0.4);

      if (part.bleeding === BLEED_LEVELS.ARTERIAL) {
        alerts.push({
          type: EVENT_BLEEDING_ALERT,
          part: partName,
          text: `Severe pulsatile arterial bleed on ${partName}! Immediate tourniquet required.`,
        });
      }
    }

    // Infection progression if wound is open
    if (part.bleeding !== BLEED_LEVELS.NONE || part.burns || part.punctured) {
      part.infectionRisk = Math.min(100, part.infectionRisk + 2.5 * hours);
      if (part.infectionRisk >= 75) {
        alerts.push({
          type: EVENT_INFECTION_ALERT,
          part: partName,
          text: `Purulent bacterial infection developing on ${partName} (${Math.round(part.infectionRisk)}%).`,
        });
        part.health = Math.max(0, part.health - 2.0 * hours);
      }
    }

    // Natural recovery of healthy closed tissue
    if (part.bleeding === BLEED_LEVELS.NONE && !part.fractures && !part.punctured && part.infectionRisk < 20) {
      part.health = Math.min(100, part.health + 0.8 * hours);
    }
  }

  if (bus && alerts.length > 0) {
    bus.emit(EVENT_BODY_UPDATED, { bodyState, alerts });
  }

  return {
    totalBleedLoss,
    alerts,
  };
}

/**
 * Aggregates all active physiological debuffs produced by the current body trauma state.
 */
export function getBodyDebuffs(bodyState) {
  if (!bodyState) {
    return {
      travelTimeMultiplier: 1.0,
      travelCalorieMultiplier: 1.0,
      travelStaminaMultiplier: 1.0,
      weaponAccuracyPenalty: 0.0,
      scavengeSpeedMultiplier: 1.0,
      hasTensionPneumothorax: false,
      maxStaminaCap: 100,
      hasArterialBleed: false,
      totalBleedRate: 0,
      isImmobilized: false,
    };
  }

  let travelTimeMult = 1.0;
  let travelCalorieMult = 1.0;
  let travelStaminaMult = 1.0;
  let accuracyPenalty = 0.0;
  let scavengeMult = 1.0;
  let hasPneumothorax = Boolean(bodyState.torso?.punctured);
  let maxStaminaCap = hasPneumothorax ? 40 : 100;
  let hasArterial = false;
  let totalBleedRate = 0;

  // Leg Damage & Fractures:
  // Leg damage or fracture doubles sector travel time, increases stamina/calorie cost
  const leftLeg = bodyState.leftLeg;
  const rightLeg = bodyState.rightLeg;
  const leftLegCompromised = leftLeg && (leftLeg.fractures || leftLeg.health < 40);
  const rightLegCompromised = rightLeg && (rightLeg.fractures || rightLeg.health < 40);

  if (leftLegCompromised || rightLegCompromised) {
    travelTimeMult *= 2.0; // Doubles sector travel time
    travelCalorieMult *= 1.45; // Increases calorie cost
    travelStaminaMult *= 1.60; // Increases stamina expenditure
  }
  if (leftLegCompromised && rightLegCompromised) {
    travelTimeMult *= 1.5; // Additional compounding penalty if both legs wrecked
  }

  // Arm Damage:
  // Lowers weapon accuracy and scavenging speed
  const leftArm = bodyState.leftArm;
  const rightArm = bodyState.rightArm;
  if (rightArm && (rightArm.fractures || rightArm.health < 50)) {
    accuracyPenalty += 0.25; // Dominant arm penalty
    scavengeMult *= 1.40;
  }
  if (leftArm && (leftArm.fractures || leftArm.health < 50)) {
    accuracyPenalty += 0.12; // Support arm penalty
    scavengeMult *= 1.25;
  }

  // Check Arterial Bleeds across all parts
  for (const p of Object.values(bodyState)) {
    if (p.bleeding === BLEED_LEVELS.ARTERIAL) {
      hasArterial = true;
    }
    totalBleedRate += BLEED_RATES_PER_HOUR[p.bleeding] || 0;
  }

  return {
    travelTimeMultiplier: travelTimeMult,
    travelCalorieMultiplier: travelCalorieMult,
    travelStaminaMultiplier: travelStaminaMult,
    weaponAccuracyPenalty: Math.min(0.60, accuracyPenalty),
    scavengeSpeedMultiplier: scavengeMult,
    hasTensionPneumothorax: hasPneumothorax,
    maxStaminaCap,
    hasArterialBleed: hasArterial,
    totalBleedRate,
    isImmobilized: Boolean(leftLeg?.health === 0 && rightLeg?.health === 0),
  };
}

/**
 * Calculates weighted composite overall body health percentage (0..100).
 */
export function getOverallBodyHealth(bodyState) {
  if (!bodyState) return 100;
  let total = 0;
  for (const [part, weight] of Object.entries(VITAL_PART_WEIGHTS)) {
    const hp = bodyState[part]?.health ?? 100;
    total += hp * weight;
  }
  return Math.round(Math.max(0, Math.min(100, total)));
}

/**
 * Automatically selects the most medically urgent target part for a given item.
 */
export function getRecommendedTargetPart(bodyState, itemId) {
  if (!bodyState) return 'torso';

  // Tourniquets must go on bleeding limbs (arterial prioritized)
  if (itemId === 'combat_tourniquet_cat' || itemId === 'softt_wide_tourniquet') {
    const arterialLimb = ['leftLeg', 'rightLeg', 'leftArm', 'rightArm'].find(
      (part) => bodyState[part]?.bleeding === BLEED_LEVELS.ARTERIAL
    );
    if (arterialLimb) return arterialLimb;
    const bleedingLimb = ['leftLeg', 'rightLeg', 'leftArm', 'rightArm'].find(
      (part) => bodyState[part]?.bleeding !== BLEED_LEVELS.NONE
    );
    if (bleedingLimb) return bleedingLimb;
    return 'leftArm';
  }

  // Splints target fractured limbs
  if (itemId === 'sam_splint_roll' || itemId === 'sam_splint_36inch') {
    const fracturedLimb = ['leftLeg', 'rightLeg', 'leftArm', 'rightArm'].find(
      (part) => bodyState[part]?.fractures
    );
    if (fracturedLimb) return fracturedLimb;
    return 'leftLeg';
  }

  // Chest seal / Decompression needle always targets torso
  if (itemId === 'chest_seal_vented' || itemId === 'chest_seal_twin_pack' || itemId === 'decompression_needle_14g') {
    return 'torso';
  }

  // Hemostatic gauze / bandages target the part with most severe bleeding or lowest HP
  let worstBleedPart = null;
  for (const partName of BODY_PARTS) {
    if (bodyState[partName]?.bleeding === BLEED_LEVELS.ARTERIAL) {
      worstBleedPart = partName;
      break;
    }
  }
  if (!worstBleedPart) {
    worstBleedPart = BODY_PARTS.find((p) => bodyState[p]?.bleeding === BLEED_LEVELS.MINOR);
  }
  if (worstBleedPart) return worstBleedPart;

  // Otherwise target lowest health part
  let lowestHpPart = 'torso';
  let minHp = 100;
  for (const partName of BODY_PARTS) {
    const hp = bodyState[partName]?.health ?? 100;
    if (hp < minHp) {
      minHp = hp;
      lowestHpPart = partName;
    }
  }
  return lowestHpPart;
}

/**
 * Checks for instantly fatal conditions (e.g. brain death from head collapse or heart rupture).
 */
export function isBodyConditionFatal(bodyState) {
  if (!bodyState) return false;
  if ((bodyState.head?.health ?? 100) <= 0) return true;
  if ((bodyState.torso?.health ?? 100) <= 0) return true;
  return false;
}
