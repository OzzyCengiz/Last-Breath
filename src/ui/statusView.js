import { AILMENTS } from '../data/ailments.js';
import { SKILLS } from '../data/skills.js';
import { t, i18n } from '../i18n/i18n.js';
import { armorValue, combatRating, passiveBonus, weaponProfile } from '../modules/inventory/inventorySelectors.js';
import { SKILL_IDS, skillProgress } from '../modules/skills/skillSelectors.js';
import { VITALS, ailmentIntensity, vitalBand } from '../modules/status/statusSelectors.js';
import { el } from './dom.js';

export class StatusView {
  #root;

  constructor(root) {
    this.#root = root;
  }

  render(state) {
    const { player } = state;
    this.#root.replaceChildren(
      this.#renderDossier(player),
      this.#renderVitals(player),
      this.#renderAilments(player),
      this.#renderReadout(state),
      this.#renderSkills(state),
    );
  }

  #renderDossier(player) {
    const name = player.name || t('character.default_name');
    const age = player.age ?? 28;
    const blood = player.bloodType ?? 'A+';
    const traitKey = player.trait ?? 'stoic';
    const archetypeKey = player.archetype ?? 'scavenger';

    return el(
      'section',
      { class: 'panel-block dossier-block' },
      el(
        'div',
        { class: 'dossier-id-row' },
        el(
          'div',
          { class: 'dossier-callsign-wrap' },
          el('span', { class: 'dossier-callsign-kicker' }, t('character.callsign_kicker')),
          el('strong', { class: 'dossier-callsign' }, name.toUpperCase()),
        ),
        el('span', { class: 'dossier-badge' }, t(`menu.archetype.${archetypeKey}.name`)),
      ),
      el(
        'div',
        { class: 'dossier-stats-strip' },
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.age')),
          el('strong', { class: 'dossier-stat-value' }, String(age)),
        ),
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.blood')),
          el('strong', { class: 'dossier-stat-value' }, blood),
        ),
        el(
          'div',
          { class: 'dossier-stat' },
          el('span', { class: 'dossier-stat-label' }, t('character.label.trait')),
          el('strong', { class: 'dossier-stat-value' }, t(`trait.${traitKey}.name`)),
        ),
      ),
    );
  }

  #renderVitals(player) {
    const rows = VITALS.map((vital) => {
      const value = Math.round(player[vital]);
      const band = vitalBand(value);
      return el(
        'div',
        { class: ['vital-row', `band-${band}`] },
        el(
          'div',
          { class: 'vital-head' },
          el('span', { class: 'vital-label' }, t(`status.vital.${vital}`)),
          el('span', { class: 'vital-band-tag' }, t(`status.band.${band}`)),
          el('span', { class: 'vital-value' }, `${value}%`),
        ),
        el(
          'div',
          { class: 'meter-track' },
          el('div', { class: 'meter-fill', style: `width: ${Math.max(0, Math.min(100, value))}%` }),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.vitals')),
      el('div', { class: 'vitals-list' }, rows),
    );
  }

  #renderAilments(player) {
    const entries = Object.entries(player.ailments);
    const body = entries.length === 0
      ? el('p', { class: 'muted-note' }, t('status.no_ailments'))
      : el(
        'ul',
        { class: 'ailment-list' },
        entries.map(([id, data]) => {
          const def = AILMENTS[id];
          const pct = Math.round(ailmentIntensity(id, data) * 100);
          const detail = this.#describeAilment(id, data);
          return el(
            'li',
            { class: ['ailment-item', `tone-${def.tone}`] },
            el(
              'div',
              { class: 'ailment-head' },
              el('span', { class: 'ailment-glyph' }, def.glyph),
              el('span', { class: 'ailment-name' }, t(`ailment.${id}.name`)),
              el('span', { class: 'ailment-detail' }, detail),
            ),
            el(
              'div',
              { class: 'meter-track meter-thin' },
              el('div', { class: 'meter-fill', style: `width: ${pct}%` }),
            ),
            el('p', { class: 'ailment-desc' }, t(`ailment.${id}.desc`)),
          );
        }),
      );

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.conditions')),
      body,
    );
  }

  #describeAilment(id, data) {
    if (id === 'bleeding') return t('ailment.bleeding.severity', { severity: data.severity });
    if (id === 'infection') return `${Math.round(data.progress)}%`;
    if (id === 'sprain') return t('ailment.sprain.remaining', { hours: Math.ceil(data.hours) });
    return '';
  }

  #renderReadout(state) {
    const weapon = weaponProfile(state);
    const weaponLabel = weapon.itemId ? t(`item.${weapon.itemId}.name`) : t('inventory.unarmed');
    const scavengeBonus = Math.round(passiveBonus(state, 'scavengeBonus') * 100);
    const travelBonus = Math.round(passiveBonus(state, 'travelSpeed') * 100);

    const stats = [
      [t('status.readout.weapon'), weapon.loaded ? weaponLabel : `${weaponLabel} (${t('inventory.no_ammo')})`],
      [t('status.readout.combat_rating'), i18n.formatNumber(combatRating(state), 1)],
      [t('status.readout.armor'), String(armorValue(state))],
      [t('status.readout.scavenge_bonus'), `+${scavengeBonus}%`],
      [t('status.readout.travel_bonus'), `+${travelBonus}%`],
    ];

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.readout')),
      el(
        'dl',
        { class: 'kv-grid' },
        stats.flatMap(([label, val]) => [
          el('dt', {}, label),
          el('dd', {}, val),
        ]),
      ),
    );
  }

  #renderSkills(state) {
    const rows = SKILL_IDS.map((skillId) => {
      const def = SKILLS[skillId];
      const progress = skillProgress(state, skillId);
      const pct = Math.round(progress.ratio * 100);
      const xpNote = progress.next
        ? `${progress.xp} / ${progress.next} XP`
        : t('skill.max_level');

      return el(
        'div',
        { class: 'skill-row' },
        el(
          'div',
          { class: 'skill-head' },
          el('span', { class: 'skill-glyph' }, def.glyph),
          el('span', { class: 'skill-name' }, t(`skill.${skillId}.name`)),
          el('span', { class: 'skill-level' }, t('skill.level_short', { level: progress.level })),
          el('span', { class: 'skill-xp' }, xpNote),
        ),
        el(
          'div',
          { class: 'meter-track meter-thin' },
          el('div', { class: 'meter-fill', style: `width: ${pct}%` }),
        ),
        el('p', { class: 'skill-desc' }, t(`skill.${skillId}.desc`)),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('status.section.skills')),
      el('div', { class: 'skills-list' }, rows),
    );
  }
}

