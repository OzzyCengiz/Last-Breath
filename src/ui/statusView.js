import { AILMENTS } from '../data/ailments.js';
import { SKILLS } from '../data/skills.js';
import { RECIPES } from '../data/recipes.js';
import { getSeason, readClock } from '../core/clock.js';
import { t, i18n } from '../i18n/i18n.js';
import { armorValue, combatRating, passiveBonus, weaponProfile } from '../modules/inventory/inventorySelectors.js';
import {
  SKILL_IDS,
  SKILL_PERKS,
  SKILL_BRANCHES,
  skillProgress,
  playerLevelInfo,
  canUnlockPerk,
  isPerkUnlocked,
} from '../modules/skills/skillSelectors.js';
import { VITALS, ailmentIntensity, vitalBand } from '../modules/status/statusSelectors.js';
import { BODY_PARTS } from '../modules/status/bodyStatus.js';
import { WeatherEngine, WEATHER_PROFILES } from '../modules/environment/weatherEngine.js';
import { el } from './dom.js';

export class StatusView {
  #root;
  #engine;
  #activeTab = 'vitals';
  #activeSkillBranch = 'all';
  #lastState = null;

  constructor(root, engine = null) {
    this.#root = root;
    this.#engine = engine;
  }

  render(state) {
    this.#lastState = state;
    const { player } = state;

    const nav = el(
      'div',
      { class: 'status-page-nav' },
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeTab === 'vitals' && 'is-active'],
          onClick: () => {
            this.#activeTab = 'vitals';
            this.render(this.#lastState);
          },
        },
        t('status.tabs.vitals'),
      ),
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeTab === 'body' && 'is-active'],
          onClick: () => {
            this.#activeTab = 'body';
            this.render(this.#lastState);
          },
        },
        t('status.tabs.body'),
      ),
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeTab === 'skills' && 'is-active'],
          onClick: () => {
            this.#activeTab = 'skills';
            this.render(this.#lastState);
          },
        },
        t('status.tabs.skills'),
      ),
      el(
        'button',
        {
          type: 'button',
          class: ['status-page-btn', this.#activeTab === 'stats' && 'is-active'],
          onClick: () => {
            this.#activeTab = 'stats';
            if (this.#lastState) {
              this.render(this.#lastState);
              this.#root.scrollTop = 0;
            }
          },
        },
        t('status.tabs.stats'),
      ),
    );

    let content = [];
    if (this.#activeTab === 'vitals') {
      content = [
        this.#renderDossier(player),
        this.#renderVitals(player),
        this.#renderEnvironmentCard(state),
        this.#renderReadout(state),
      ];
    } else if (this.#activeTab === 'body') {
      content = [
        this.#renderBodyTrauma(player, state),
        this.#renderAilments(player),
      ];
    } else if (this.#activeTab === 'skills') {
      content = [
        this.#renderSkills(state),
      ];
    } else {
      content = [
        this.#renderStats(state),
      ];
    }

    this.#root.replaceChildren(...[nav, ...content].filter(Boolean));
  }

  #findBestTreatment(partId, part, stacks = []) {
    if (!stacks || stacks.length === 0) return null;
    const hasItem = (predicate) => stacks.find((s) => predicate(s.itemId))?.itemId || null;

    if (part.bleeding === 'arterial') {
      return hasItem((id) => id.includes('tourniquet')) ||
        hasItem((id) => id.includes('quikclot') || id.includes('hemostatic') || id.includes('israeli') || id.includes('stapler') || id.includes('suture'));
    }
    if (part.bleeding === 'minor') {
      return hasItem((id) => id.includes('quikclot') || id.includes('bandage') || id.includes('gauze') || id.includes('plaster') || id.includes('suture') || id.includes('stapler') || id.includes('adhesive'));
    }
    if (part.punctured) {
      return hasItem((id) => id.includes('chest_seal') || id.includes('decompression_needle') || id.includes('airway'));
    }
    if (part.fractures) {
      return hasItem((id) => id.includes('splint') || id.includes('sling') || id.includes('collar') || id.includes('vet_wrap'));
    }
    if (part.burns) {
      return hasItem((id) => id.includes('burn') || id.includes('sulfadiazine') || id.includes('calamine') || id.includes('hydrocortisone'));
    }
    if (part.infectionRisk >= 25) {
      return hasItem((id) => id.includes('antiseptic') || id.includes('iodine') || id.includes('chlorhexidine') || id.includes('antibiotic') || id.includes('amoxicillin') || id.includes('ciprofloxacin') || id.includes('alcohol') || id.includes('peroxide'));
    }
    if (part.health < 80) {
      return hasItem((id) => id.includes('first_aid') || id.includes('ifak') || id.includes('bandage') || id.includes('gauze') || id.includes('saline'));
    }
    return null;
  }

  #renderBodyTrauma(player, state) {
    const body = player.body;
    if (!body) return el('div');
    const stacks = state?.inventory?.stacks || [];

    const cards = BODY_PARTS.map((partId) => {
      const part = body[partId];
      if (!part) return el('div');
      const hp = Math.round(part.health);
      const isDamaged = hp < 100 || part.bleeding !== 'none' || part.fractures || part.burns || part.punctured || part.infectionRisk > 20;

      const badges = [];
      if (part.bleeding === 'arterial') {
        badges.push(el('span', { class: 'status-tag tone-bad pulse-alert' }, `▲ ${t('status.body.condition.arterial_bleed')}`));
      } else if (part.bleeding === 'minor') {
        badges.push(el('span', { class: 'status-tag tone-bad' }, `● ${t('status.body.condition.minor_bleed')}`));
      }
      if (part.fractures) {
        badges.push(el('span', { class: 'status-tag tone-warn' }, `✖ ${t('status.body.condition.fracture')}`));
      }
      if (part.punctured) {
        badges.push(el('span', { class: 'status-tag tone-bad' }, `☣ ${t('status.body.condition.pneumothorax')}`));
      }
      if (part.burns) {
        badges.push(el('span', { class: 'status-tag tone-warn' }, `♨ ${t('status.body.condition.burn')}`));
      }
      if (part.infectionRisk >= 25) {
        badges.push(el('span', { class: 'status-tag tone-warn' }, `☣ ${t('status.body.condition.infection')} ${Math.round(part.infectionRisk)}%`));
      }
      if (badges.length === 0) {
        badges.push(el('span', { class: 'status-tag tone-good' }, t('status.body.condition.intact')));
      }

      const meterTone = hp > 65 ? 'good' : (hp > 30 ? 'warn' : 'bad');

      // Direct treatment action if damaged
      let actionEl = null;
      if (isDamaged && this.#engine) {
        const bestItem = this.#findBestTreatment(partId, part, stacks);
        if (bestItem) {
          actionEl = el(
            'button',
            {
              type: 'button',
              class: 'btn btn-accent btn-xs body-part-treat-btn',
              style: 'margin-top: 6px; width: 100%; font-size: 0.72rem; padding: 4px 6px;',
              onClick: () => {
                this.#engine.dispatch('inventory/use', { itemId: bestItem });
              },
            },
            `💊 ${t('inventory.action.treat') || 'TEDAVİ ET'} (${t(`item.${bestItem}.name`) || bestItem})`
          );
        } else {
          actionEl = el(
            'span',
            { class: 'muted-note', style: 'font-size: 0.68rem; margin-top: 4px; display: block; opacity: 0.75;' },
            `⚠️ ${t('status.body.no_supplies') || 'Gereken tıbbi malzeme yok'}`
          );
        }
      }

      return el(
        'div',
        { class: ['body-part-card', isDamaged ? 'part-damaged' : 'part-healthy'] },
        el(
          'div',
          { class: 'body-part-head' },
          el('span', { class: 'body-part-name' }, t(`status.body.part.${partId}`)),
          el('strong', { class: ['body-part-hp', `tone-${meterTone}`] }, `${hp}%`),
        ),
        el(
          'div',
          { class: 'meter-track meter-thin' },
          el('div', { class: ['meter-fill', `fill-${meterTone}`], style: `width: ${Math.max(0, Math.min(100, hp))}%` }),
        ),
        el('div', { class: 'body-part-badges' }, badges),
        actionEl,
      );
    });

    return el(
      'section',
      { class: 'panel-block body-trauma-section' },
      el('h3', { class: 'block-title' }, t('status.section.body')),
      el('div', { class: 'body-parts-grid' }, cards),
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
          el(
            'div',
            { class: 'vital-meta' },
            el('span', { class: 'vital-band-tag' }, t(`status.band.${band}`)),
            el('span', { class: 'vital-value' }, `${value}%`),
          ),
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
    if (id === 'pain') return `${t('status.label.severity') || 'Şiddet'}: ${Math.round(data.severity || 1)}`;
    if (id === 'poison') return `${Math.round(data.severity || 10)}%`;
    return '';
  }

  #renderReadout(state) {
    const weapon = weaponProfile(state);
    const weaponLabel = weapon.itemId ? t(`item.${weapon.itemId}.name`) : t('inventory.unarmed');
    const scavengeBonus = Math.round(passiveBonus(state, 'scavengeBonus') * 100);
    const travelBonus = Math.round(passiveBonus(state, 'travelSpeed') * 100);
    const season = getSeason(state.time?.minutes ?? 0);
    const contract = state.factions?.activeContract;
    const blueprintTotal = Object.values(RECIPES).filter((r) => r.requiresBlueprint).length;
    const blueprintUnlocked = Object.keys(RECIPES).filter(
      (id) => RECIPES[id].requiresBlueprint && state.crafting?.unlockedRecipes?.includes(id),
    ).length;

    const stats = [
      [t('status.readout.weapon'), weapon.loaded ? weaponLabel : `${weaponLabel} (${t('inventory.no_ammo')})`],
      [t('status.readout.combat_rating'), i18n.formatNumber(combatRating(state), 1)],
      [t('status.readout.armor'), String(armorValue(state))],
      [t('status.readout.scavenge_bonus'), `+${scavengeBonus}%`],
      [t('status.readout.travel_bonus'), `+${travelBonus}%`],
      [t('status.readout.season_effect'), t(`status.season_effect.${season}`)],
      [t('status.readout.blueprints'), `${blueprintUnlocked}/${blueprintTotal}`],
      [
        t('status.readout.contract'),
        contract
          ? (contract.type === 'scout'
            ? t('faction.contract.scout', { target: t(`location.${contract.targetNodeId}`) })
            : t(`faction.contract.${contract.type}`, { current: contract.progress, total: contract.targetCount }))
          : '—',
      ],
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
    const lvlInfo = playerLevelInfo(state);
    const sp = state.player?.skillPoints ?? 0;
    const isMax = lvlInfo.isMax;
    const pct = Math.round(lvlInfo.ratio * 100);

    // 1. Hero Card: Survivor Level, XP Progress Bar, and Available Skill Points
    const heroCard = el(
      'div',
      { class: 'skill-tree-hero' },
      el(
        'div',
        { class: 'hero-header-row' },
        el(
          'div',
          { class: 'hero-level-badge' },
          el('span', { class: 'level-tag' }, 'LVL'),
          el('span', { class: 'level-num' }, String(lvlInfo.level)),
        ),
        el(
          'div',
          { class: 'hero-title-block' },
          el('h4', { class: 'hero-title' }, t('skill_tree.title')),
          el('span', { class: 'hero-total-xp' }, t('skill_tree.total_xp', { xp: lvlInfo.xp })),
        ),
        el(
          'div',
          { class: ['hero-sp-pill', sp > 0 && 'has-sp'] },
          el('span', { class: 'sp-icon' }, '⚡'),
          el(
            'span',
            { class: 'sp-text' },
            sp > 0 ? t('skill_tree.available_points', { points: sp }) : t('skill_tree.no_points'),
          ),
        ),
      ),
      el(
        'div',
        { class: 'hero-xp-section' },
        el(
          'div',
          { class: 'hero-xp-labels' },
          el('span', { class: 'xp-label' }, 'XP GELİŞİMİ'),
          el(
            'span',
            { class: 'xp-val' },
            isMax
              ? t('skill_tree.xp_max')
              : `${t('skill_tree.xp_progress', { current: lvlInfo.currentLvlXp, needed: lvlInfo.neededForNext })} (%${pct})`,
          ),
        ),
        el(
          'div',
          { class: 'meter-track meter-hero' },
          el('div', { class: 'meter-fill meter-fill-hero', style: `width: ${pct}%` }),
        ),
      ),
    );

    // 2. Branch Filter Bar
    const branches = Object.values(SKILL_BRANCHES);
    const branchTabs = [
      el(
        'button',
        {
          type: 'button',
          class: ['branch-tab-btn', this.#activeSkillBranch === 'all' && 'is-active'],
          onClick: () => {
            this.#activeSkillBranch = 'all';
            this.render(this.#lastState);
          },
        },
        i18n.locale === 'tr' ? 'TÜM DALLAR' : i18n.locale === 'th' ? 'ทุกสายทักษะ' : 'ALL BRANCHES',
      ),
      ...branches.map((b) =>
        el(
          'button',
          {
            type: 'button',
            class: ['branch-tab-btn', this.#activeSkillBranch === b.id && 'is-active'],
            onClick: () => {
              this.#activeSkillBranch = b.id;
              this.render(this.#lastState);
            },
          },
          `${b.glyph} ${t(b.nameKey)}`,
        ),
      ),
    ];

    const branchNav = el('div', { class: 'branch-tabs-bar' }, ...branchTabs);

    // 3. Branches & Perks Layout
    const visibleBranches =
      this.#activeSkillBranch === 'all'
        ? branches
        : branches.filter((b) => b.id === this.#activeSkillBranch);

    const allPerks = Object.values(SKILL_PERKS);

    const branchSections = visibleBranches.map((branch) => {
      const branchPerks = allPerks
        .filter((p) => p.branch === branch.id)
        .sort((a, b) => a.tier - b.tier);

      const perkCards = branchPerks.map((perk, index) => {
        const unlocked = isPerkUnlocked(state, perk.id);
        const check = canUnlockPerk(state, perk.id);
        const canUnlock = check.canUnlock;

        let statusElement;
        let cardStateClass = 'is-locked';

        if (unlocked) {
          cardStateClass = 'is-unlocked';
          statusElement = el(
            'span',
            { class: 'perk-status-badge perk-badge-acquired' },
            t('skill_tree.status_unlocked'),
          );
        } else if (canUnlock) {
          cardStateClass = 'is-ready';
          statusElement = el(
            'button',
            {
              type: 'button',
              class: 'btn btn-accent btn-xs perk-unlock-action-btn',
              onClick: (e) => {
                e.stopPropagation();
                if (this.#engine) {
                  this.#engine.dispatch('skills/unlockPerk', { perkId: perk.id });
                  this.render(this.#lastState);
                }
              },
            },
            t('skill_tree.unlock_btn'),
          );
        } else {
          cardStateClass = 'is-locked';
          let lockReason = '';
          if (lvlInfo.level < perk.minLevel) {
            lockReason = t('skill_tree.req_level', { level: perk.minLevel });
          } else if (perk.requires && !isPerkUnlocked(state, perk.requires)) {
            const reqPerk = SKILL_PERKS[perk.requires];
            lockReason = t('skill_tree.req_prereq', { name: t(reqPerk.nameKey) });
          } else if (sp < perk.cost) {
            lockReason = i18n.locale === 'tr' ? '1 Yetenek Puanı Gerekli' : i18n.locale === 'th' ? 'ต้องการ 1 แต้มทักษะ' : '1 Skill Point Needed';
          }
          statusElement = el(
            'span',
            { class: 'perk-status-badge perk-badge-locked' },
            lockReason || t('skill_tree.status_locked'),
          );
        }

        const card = el(
          'div',
          { class: ['perk-card', cardStateClass] },
          el(
            'div',
            { class: 'perk-card-header' },
            el('span', { class: 'perk-glyph' }, perk.glyph),
            el(
              'div',
              { class: 'perk-title-wrap' },
              el('span', { class: 'perk-name' }, t(perk.nameKey)),
              el('span', { class: 'perk-tier' }, t('skill_tree.tier', { tier: perk.tier })),
            ),
          ),
          el('p', { class: 'perk-desc' }, t(perk.descKey)),
          el('div', { class: 'perk-card-footer' }, statusElement),
        );

        if (index < branchPerks.length - 1) {
          return el(
            'div',
            { class: 'perk-node-chain' },
            card,
            el('div', { class: 'perk-chain-arrow' }, '▼'),
          );
        }
        return el('div', { class: 'perk-node-chain' }, card);
      });

      return el(
        'div',
        { class: 'skill-branch-column', style: `--branch-color: ${branch.color}` },
        el(
          'div',
          { class: 'branch-header' },
          el('span', { class: 'branch-glyph' }, branch.glyph),
          el('h4', { class: 'branch-title' }, t(branch.nameKey)),
        ),
        el('div', { class: 'branch-perks-list' }, ...perkCards),
      );
    });

    const treeContainer = el('div', { class: 'skill-tree-grid' }, ...branchSections);

    // 4. Practice Skills Section (Field Proficiencies)
    const practiceRows = SKILL_IDS.map((skillId) => {
      const def = SKILLS[skillId];
      const progress = skillProgress(state, skillId);
      const prPct = Math.round(progress.ratio * 100);
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
          el('div', { class: 'meter-fill', style: `width: ${prPct}%` }),
        ),
        el('p', { class: 'skill-desc' }, t(`skill.${skillId}.desc`)),
      );
    });

    const practiceSection = el(
      'section',
      { class: 'panel-block practice-skills-block' },
      el('h4', { class: 'block-title' }, t('skill_tree.practice_skills_title')),
      el('p', { class: 'block-sub' }, t('skill_tree.practice_skills_subtitle')),
      el('div', { class: 'skills-list' }, practiceRows),
    );

    return el(
      'section',
      { class: 'panel-block skill-tree-root-panel' },
      heroCard,
      branchNav,
      treeContainer,
      practiceSection,
    );
  }

  #renderStats(state) {
    const { day } = readClock(state.time?.minutes ?? 0);
    const { level } = playerLevelInfo(state);
    const nodes = Object.values(state.world?.nodes ?? {});
    const nodesVisited = nodes.filter((n) => n.visited).length;
    const totalNodes = Math.max(1, nodes.length);
    const nodeScavenges = nodes.reduce((sum, n) => sum + (Number(n.scavenges) || 0), 0);
    const scavenges = Math.max(state.stats?.scavenges ?? 0, nodeScavenges);
    const distanceKm = state.stats?.distanceKm ?? 0;
    const victories = state.combat?.victories ?? 0;
    const crafted = state.crafting?.craftedCount ?? 0;
    const contracts = state.stats?.contractsCompleted ?? 0;
    const buildingLevels = Object.values(state.base?.buildings ?? {}).reduce(
      (sum, v) => sum + (Number(v) || 0),
      0,
    );
    const vehiclesClaimed = (state.vehicles?.fleet ?? []).filter((v) => v.claimed).length;

    const statItems = [
      { glyph: '📅', label: t('status.stats.days_survived'), value: String(day) },
      { glyph: '⭐', label: t('status.stats.level'), value: String(level) },
      { glyph: '🧭', label: t('status.stats.nodes_visited'), value: `${nodesVisited} / ${totalNodes}` },
      { glyph: '🛣️', label: t('status.stats.distance_km'), value: `${distanceKm} km` },
      { glyph: '⚔️', label: t('status.stats.enemies_defeated'), value: String(victories) },
      { glyph: '🎒', label: t('status.stats.scavenges'), value: String(scavenges) },
      { glyph: '⚒️', label: t('status.stats.items_crafted'), value: String(crafted) },
      { glyph: '📜', label: t('status.stats.contracts'), value: String(contracts) },
      { glyph: '🏕️', label: t('status.stats.base_upgrades'), value: String(buildingLevels) },
      { glyph: '🚙', label: t('status.stats.vehicles'), value: String(vehiclesClaimed) },
    ];

    const statsBlock = el(
      'section',
      { class: 'panel-block run-stats-block' },
      el('h4', { class: 'block-title' }, t('status.stats.title')),
      el(
        'div',
        { class: 'run-stats-grid' },
        ...statItems.map((item) =>
          el(
            'div',
            { class: 'run-stat-card' },
            el('span', { class: 'run-stat-glyph' }, item.glyph),
            el(
              'div',
              { class: 'run-stat-meta' },
              el('span', { class: 'run-stat-label' }, item.label),
              el('strong', { class: 'run-stat-value' }, item.value),
            ),
          ),
        ),
      ),
    );

    const milestones = [
      { id: 'explorer', glyph: '🧭', current: nodesVisited, target: 5 },
      { id: 'road_warrior', glyph: '🛣️', current: distanceKm, target: 100 },
      { id: 'veteran_fighter', glyph: '⚔️', current: victories, target: 10 },
      { id: 'scavenger', glyph: '🎒', current: scavenges, target: 10 },
      { id: 'master_crafter', glyph: '⚒️', current: crafted, target: 10 },
      { id: 'survivor_week', glyph: '⏳', current: day, target: 7 },
    ];

    const milestoneRows = milestones.map((m) => {
      const done = m.current >= m.target;
      const clamped = Math.min(m.current, m.target);
      const pct = Math.round((clamped / m.target) * 100);
      return el(
        'div',
        { class: ['milestone-row', done && 'is-unlocked'] },
        el(
          'div',
          { class: 'milestone-head' },
          el('span', { class: 'milestone-glyph' }, m.glyph),
          el('span', { class: 'milestone-name' }, t(`status.milestones.${m.id}.title`)),
          el(
            'span',
            { class: ['milestone-badge', done && 'is-done'] },
            done ? t('status.milestones.unlocked') : `${clamped} / ${m.target}`,
          ),
        ),
        el(
          'div',
          { class: 'meter-track meter-thin' },
          el('div', { class: ['meter-fill', done && 'is-good'], style: `width: ${pct}%` }),
        ),
        el('p', { class: 'milestone-desc' }, t(`status.milestones.${m.id}.desc`)),
      );
    });

    const milestonesBlock = el(
      'section',
      { class: 'panel-block milestones-block' },
      el('h4', { class: 'block-title' }, t('status.milestones.title')),
      el('div', { class: 'milestones-list' }, ...milestoneRows),
    );

    return el('div', { class: 'status-stats-container' }, statsBlock, milestonesBlock);
  }

  #renderEnvironmentCard(state) {
    const weather = state.environment?.weather ?? 'clear_sky';
    const profile = WEATHER_PROFILES[weather] || WEATHER_PROFILES.clear_sky;
    const ambientTemp = state.environment?.ambientTempC ?? state.environment?.temperatureC ?? 18;
    const insulation = WeatherEngine.getThermalInsulation(state);
    const acidProt = WeatherEngine.hasAcidProtection(state);
    const ashProt = WeatherEngine.hasAshProtection(state);

    return el(
      'section',
      { class: 'panel-block env-telemetry-block' },
      el('h4', { class: 'block-title' }, t('status.env.title')),
      el(
        'div',
        { class: 'env-telemetry-grid' },
        el(
          'div',
          { class: 'env-chip' },
          el('span', { class: 'env-chip-label' }, t('status.env.weather')),
          el('strong', { class: 'env-chip-val' }, `${profile?.icon || '🌤️'} ${t(`environment.weather.${weather}`)}`),
        ),
        el(
          'div',
          { class: 'env-chip' },
          el('span', { class: 'env-chip-label' }, t('status.env.temp')),
          el('strong', { class: 'env-chip-val' }, `${ambientTemp}°C (+${insulation}°C)`),
        ),
        el(
          'div',
          { class: ['env-chip', acidProt ? 'is-protected' : ''] },
          el('span', { class: 'env-chip-label' }, t('status.env.acid')),
          el('strong', { class: 'env-chip-val' }, acidProt ? `✓ ${t('status.env.protected')}` : `✕ ${t('status.env.exposed')}`),
        ),
        el(
          'div',
          { class: ['env-chip', ashProt ? 'is-protected' : ''] },
          el('span', { class: 'env-chip-label' }, t('status.env.ash')),
          el('strong', { class: 'env-chip-val' }, ashProt ? `✓ ${t('status.env.protected')}` : `✕ ${t('status.env.exposed')}`),
        ),
      ),
    );
  }
}

