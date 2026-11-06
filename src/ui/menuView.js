import { formatClock, readClock } from '../core/clock.js';
import { ARCHETYPES, STARTING_LOCATIONS } from '../data/archetypes.js';
import { BLOOD_TYPES, TRAITS, getAgeBracket, getRandomName } from '../data/traits.js';
import { i18n, t } from '../i18n/i18n.js';
import { LOCALES } from '../i18n/locales.js';
import { getNode } from '../modules/map/mapGraph.js';
import { el } from './dom.js';

export class MenuView {
  #root;
  #onContinue;
  #onStartNew;
  #onLocaleChange;
  #name = 'Mara';
  #age = 28;
  #bloodType = 'A+';
  #selectedTrait = 'stoic';
  #selectedArchetype = 'scavenger';
  #selectedLocation = 'istanbul';
  #hasSave = false;
  #savedState = null;
  #mode = 'menu'; // 'menu' | 'create'
  #currentStep = 1; // 1: Identity, 2: Archetype, 3: Sector, 4: Summary

  constructor({ root, onContinue, onStartNew, onLocaleChange }) {
    this.#root = root;
    this.#onContinue = onContinue;
    this.#onStartNew = onStartNew;
    this.#onLocaleChange = onLocaleChange;
  }

  get isOpen() {
    return !this.#root.hidden;
  }

  open({ hasSave, state, mode } = {}) {
    this.#hasSave = Boolean(hasSave && state?.player?.alive);
    this.#savedState = state;
    this.#mode = mode || 'menu';
    this.#currentStep = 1;
    this.#root.hidden = false;
    document.body?.classList.add('is-menu-open');
    this.render();
  }

  close() {
    this.#root.hidden = true;
    document.body?.classList.remove('is-menu-open');
  }

  render() {
    if (this.#root.hidden) return;

    const localeBtn = el(
      'button',
      {
        type: 'button',
        class: 'menu-locale-toggle-btn',
        title: i18n.locale === 'tr' ? 'Switch to English' : 'Türkçe Dilini Seç',
        onClick: () => {
          const nextLocale = i18n.locale === 'tr' ? 'en' : 'tr';
          this.#onLocaleChange(nextLocale);
        },
      },
      el('span', { class: 'menu-locale-icon' }, '🌐'),
      el('span', { class: 'menu-locale-code' }, (i18n.locale || 'en').toUpperCase()),
    );

    const isCreate = this.#mode === 'create';

    const header = el(
      'header',
      { class: 'menu-header' },
      el(
        'div',
        { class: 'menu-top-line' },
        el(
          'div',
          { class: 'menu-signal-line' },
          el('span', { class: 'signal-dot' }),
          el('span', { class: 'menu-signal-label' }, isCreate ? t('character.create_title') : t('menu.kicker')),
        ),
        localeBtn,
      ),
      el('h1', { class: 'menu-title' }, t('app.title')),
      el(
        'p',
        { class: 'menu-lore' },
        isCreate ? t(`character.step_subtitle.${this.#currentStep}`) : t('menu.lore'),
      ),
    );

    let frame;
    if (isCreate) {
      const stepTabs = [
        { step: 1, key: 'character.steps.identity', glyph: '🆔' },
        { step: 2, key: 'character.steps.archetype', glyph: '🎒' },
        { step: 3, key: 'character.steps.sector', glyph: '📍' },
        { step: 4, key: 'character.steps.summary', glyph: '📋' },
      ].map(({ step, key, glyph }) => {
        const isActive = this.#currentStep === step;
        return el(
          'button',
          {
            type: 'button',
            class: ['menu-stepper-tab', isActive && 'is-active'],
            onClick: () => {
              this.#currentStep = step;
              this.render();
            },
          },
          el('span', { class: 'stepper-tab-glyph' }, glyph),
          el('span', { class: 'stepper-tab-label' }, t(key)),
        );
      });

      const stepperBar = el('div', { class: 'menu-stepper-bar' }, stepTabs);
      const stepBody = this.#renderActiveStep();
      const navBar = this.#renderStepNavBar();

      frame = el(
        'div',
        { class: 'menu-frame' },
        header,
        stepperBar,
        el('div', { class: 'menu-body' }, stepBody),
        navBar,
      );
    } else {
      const bodyContent = this.#renderMainMenuScreen();
      frame = el(
        'div',
        { class: 'menu-frame' },
        header,
        el('div', { class: 'menu-body' }, bodyContent),
        el(
          'footer',
          { class: 'menu-footer' },
          el('span', { class: 'menu-footer-sub' }, t('app.subtitle')),
          el('span', { class: 'menu-footer-hint' }, t('menu.footer_hint')),
        ),
      );
    }

    this.#root.replaceChildren(frame);
  }

  #renderActiveStep() {
    switch (this.#currentStep) {
      case 1:
        return this.#renderStepIdentity();
      case 2:
        return this.#renderStepArchetype();
      case 3:
        return this.#renderStepSector();
      case 4:
      default:
        return this.#renderStepSummary();
    }
  }

  #renderMainMenuScreen() {
    if (this.#hasSave && this.#savedState) {
      const continueSection = this.#renderContinueCard(this.#savedState);

      const newExpeditionPrompt = el(
        'section',
        { class: 'menu-section menu-prompt-card' },
        el(
          'div',
          { class: 'menu-prompt-copy' },
          el('h2', { class: 'block-title' }, t('menu.new_expedition_title')),
          el('p', { class: 'muted-note' }, t('character.create_subtitle')),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-cta-btn',
            onClick: () => {
              this.#mode = 'create';
              this.#currentStep = 1;
              this.render();
            },
          },
          t('menu.action.create_character'),
        ),
      );

      return [continueSection, newExpeditionPrompt];
    }

    // No save: Present prominent New Game landing card
    const newGameCard = el(
      'section',
      { class: 'menu-section menu-welcome-card' },
      el(
        'div',
        { class: 'menu-welcome-header' },
        el('span', { class: 'meta-label' }, t('menu.no_save_title')),
        el('h2', { class: 'menu-welcome-title' }, t('menu.new_expedition_title')),
      ),
      el('p', { class: 'menu-welcome-lore' }, t('menu.no_save_desc')),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent menu-cta-btn menu-cta-large',
          onClick: () => {
            this.#mode = 'create';
            this.#currentStep = 1;
            this.render();
          },
        },
        t('menu.action.new_game'),
      ),
    );

    return [newGameCard];
  }

  #renderContinueCard(state) {
    const { day } = readClock(state.time.minutes);
    const clock = formatClock(state.time.minutes);
    const location = t(`location.${state.world.currentNodeId}`);
    const hp = Math.round(state.player.health);
    const charted = Object.values(state.world.nodes).filter((n) => n.visited).length;
    const name = state.player?.name || t('character.default_name');
    const archetypeKey = state.player?.archetype || 'scavenger';

    return el(
      'section',
      { class: 'menu-section menu-continue-card' },
      el(
        'div',
        { class: 'menu-continue-info' },
        el(
          'div',
          { class: 'menu-continue-header-line' },
          el('span', { class: 'meta-label' }, t('menu.active_transmission')),
          el('span', { class: 'menu-continue-tag' }, `${name.toUpperCase()} // ${t(`menu.archetype.${archetypeKey}.name`)}`),
        ),
        el('h2', { class: 'menu-continue-title' }, `${location} — ${t('hud.day', { day })} · ${clock}`),
        el(
          'div',
          { class: 'route-meta menu-continue-stats' },
          el('span', {}, `${t('status.vital.health')}: ${hp}%`),
          el('span', {}, `·`),
          el('span', {}, `${t('menu.charted_sectors', { count: charted })}`),
        ),
      ),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-accent menu-cta-btn',
          onClick: () => this.#onContinue(),
        },
        t('menu.action.continue'),
      ),
    );
  }

  #renderStepIdentity() {
    // Name & Randomize
    const nameInput = el('input', {
      type: 'text',
      class: 'menu-text-input',
      maxlength: '24',
      value: this.#name,
      placeholder: t('character.placeholder.name'),
      onInput: (e) => {
        this.#name = e.target.value;
      },
    });

    const randomNameBtn = el(
      'button',
      {
        type: 'button',
        class: 'btn btn-ghost menu-random-btn',
        onClick: () => {
          this.#name = getRandomName(this.#name);
          nameInput.value = this.#name;
        },
      },
      t('character.action.random_name'),
    );

    // Age & Bracket
    const ageBracket = getAgeBracket(this.#age);
    const ageValueBadge = el('strong', { class: 'menu-badge-val' }, `${this.#age}`);
    const ageBracketDesc = el('span', { class: 'menu-sub-note' }, t(`character.age_bracket.${ageBracket}`));

    const ageSlider = el('input', {
      type: 'range',
      class: 'menu-range-slider',
      min: '18',
      max: '65',
      value: String(this.#age),
      onInput: (e) => {
        this.#age = Number(e.target.value);
        ageValueBadge.textContent = `${this.#age}`;
        const nextBracket = getAgeBracket(this.#age);
        ageBracketDesc.textContent = t(`character.age_bracket.${nextBracket}`);
      },
    });

    // Blood Type
    const bloodChips = BLOOD_TYPES.map((type) => {
      const isSelected = this.#bloodType === type;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-blood-chip', isSelected && 'is-selected'],
          onClick: () => {
            this.#bloodType = type;
            this.render();
          },
        },
        type,
      );
    });

    // Traits
    const traitCards = Object.entries(TRAITS).map(([id, def]) => {
      const isSelected = this.#selectedTrait === id;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-trait-card', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedTrait = id;
            this.render();
          },
        },
        el(
          'div',
          { class: 'menu-option-head' },
          el('span', { class: 'item-glyph' }, def.glyph),
          el('strong', { class: 'menu-option-name' }, t(`trait.${id}.name`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el('p', { class: 'menu-option-desc' }, t(`trait.${id}.desc`)),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.identity')),
      el(
        'div',
        { class: 'menu-form-row' },
        el(
          'div',
          { class: 'menu-form-col' },
          el('label', { class: 'meta-label' }, t('character.label.name')),
          el('div', { class: 'menu-input-cluster' }, nameInput, randomNameBtn),
        ),
        el(
          'div',
          { class: 'menu-form-col' },
          el(
            'div',
            { class: 'menu-label-spread' },
            el('label', { class: 'meta-label' }, t('character.label.age')),
            ageValueBadge,
          ),
          ageSlider,
          ageBracketDesc,
        ),
      ),
      el('div', { class: 'menu-label-row' }, el('label', { class: 'meta-label' }, t('character.label.blood'))),
      el('div', { class: 'menu-blood-grid' }, bloodChips),
      el('div', { class: 'menu-label-row' }, el('label', { class: 'meta-label' }, t('character.label.trait'))),
      el('div', { class: 'menu-trait-grid' }, traitCards),
    );
  }

  #renderStepArchetype() {
    const archetypeCards = Object.entries(ARCHETYPES).map(([id, def]) => {
      const isSelected = this.#selectedArchetype === id;
      const itemLabels = def.kit
        .map(({ itemId, qty }) => `${t(`item.${itemId}.name`)}${qty > 1 ? ` ×${qty}` : ''}`)
        .join(' · ');

      return el(
        'button',
        {
          type: 'button',
          class: ['menu-option-card', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedArchetype = id;
            this.render();
          },
        },
        el(
          'div',
          { class: 'menu-option-head' },
          el('span', { class: 'item-glyph' }, def.glyph),
          el('strong', { class: 'menu-option-name' }, t(`menu.archetype.${id}.name`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el('p', { class: 'menu-option-desc' }, t(`menu.archetype.${id}.desc`)),
        el('span', { class: 'menu-option-kit' }, `📦 ${itemLabels}`),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.archetype')),
      el('div', { class: 'menu-archetype-grid' }, archetypeCards),
    );
  }

  #renderStepSector() {
    const locationChips = STARTING_LOCATIONS.map((nodeId) => {
      const node = getNode(nodeId);
      const isSelected = this.#selectedLocation === nodeId;
      return el(
        'button',
        {
          type: 'button',
          class: ['menu-sector-chip', isSelected && 'is-selected'],
          onClick: () => {
            this.#selectedLocation = nodeId;
            this.render();
          },
        },
        el(
          'div',
          { class: 'sector-chip-top' },
          el('span', { class: 'sector-chip-name' }, t(`location.${nodeId}`)),
          isSelected && el('span', { class: 'menu-check-badge' }, '✓'),
        ),
        el(
          'span',
          { class: 'sector-chip-meta' },
          `${t(`biome.${node.biome}`)} · ${'▲'.repeat(node.danger)}`,
        ),
      );
    });

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.sector')),
      el('div', { class: 'menu-sector-grid' }, locationChips),
    );
  }

  #renderStepSummary() {
    const finalName = (this.#name.trim() || t('character.default_name')).toUpperCase();
    const archetype = ARCHETYPES[this.#selectedArchetype] || ARCHETYPES.scavenger;
    const node = getNode(this.#selectedLocation);

    const kitSummary = archetype.kit
      .map(({ itemId, qty }) => `${t(`item.${itemId}.name`)}${qty > 1 ? ` ×${qty}` : ''}`)
      .join(', ');

    const dossierCard = el(
      'div',
      { class: 'menu-live-dossier' },
      el(
        'div',
        { class: 'live-dossier-header' },
        el('span', { class: 'live-dossier-kicker' }, t('character.label.dossier_preview')),
        el(
          'strong',
          { class: 'live-dossier-callsign' },
          `${finalName} // ${t(`menu.archetype.${this.#selectedArchetype}.name`)}`,
        ),
      ),
      el(
        'div',
        { class: 'live-dossier-meta' },
        el('span', {}, `${t('character.label.age')}: ${this.#age}`),
        el('span', {}, `·`),
        el('span', {}, `${t('character.label.blood')}: ${this.#bloodType}`),
        el('span', {}, `·`),
        el('span', {}, `${t('character.label.trait')}: ${t(`trait.${this.#selectedTrait}.name`)}`),
        el('span', {}, `·`),
        el(
          'span',
          {},
          `${t('character.label.sector')}: ${t(`location.${this.#selectedLocation}`)} (${t(`biome.${node.biome}`)})`,
        ),
      ),
      el('div', { class: 'live-dossier-kit' }, `📦 ${t('character.label.archetype')}: ${kitSummary}`),
    );

    return el(
      'section',
      { class: 'menu-section menu-step-section' },
      el('h2', { class: 'block-title' }, t('character.label.dossier_preview')),
      dossierCard,
    );
  }

  #renderStepNavBar() {
    const isFirstStep = this.#currentStep === 1;
    const isLastStep = this.#currentStep === 4;

    const leftBtn = isFirstStep
      ? el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-nav-btn',
            onClick: () => {
              this.#mode = 'menu';
              this.render();
            },
          },
          t('character.action.back_to_menu'),
        )
      : el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost menu-nav-btn',
            onClick: () => {
              this.#currentStep = Math.max(1, this.#currentStep - 1);
              this.render();
            },
          },
          t('character.action.prev'),
        );

    const rightBtn = isLastStep
      ? el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent menu-nav-btn menu-deploy-btn',
            onClick: () => {
              const finalName = this.#name.trim() || t('character.default_name');
              this.#onStartNew({
                name: finalName,
                age: this.#age,
                bloodType: this.#bloodType,
                trait: this.#selectedTrait,
                archetypeId: this.#selectedArchetype,
                locationId: this.#selectedLocation,
              });
            },
          },
          t('character.action.deploy'),
        )
      : el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent menu-nav-btn',
            onClick: () => {
              this.#currentStep = Math.min(4, this.#currentStep + 1);
              this.render();
            },
          },
          t('character.action.next'),
        );

    return el('div', { class: 'menu-step-nav-bar' }, leftBtn, rightBtn);
  }
}
