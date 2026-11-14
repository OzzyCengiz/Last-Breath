import { EventBus } from './core/eventBus.js';
import { Store } from './core/store.js';
import { Rng, randomSeed } from './core/rng.js';
import { EffectRegistry } from './core/effects.js';
import { Engine } from './core/engine.js';
import { createBaseState, coreModule } from './core/coreModule.js';
import { SaveManager } from './core/saveManager.js';
import { daysElapsed, formatClock, getSeasonInfo, isNight, readClock } from './core/clock.js';
import { i18n, ref, t } from './i18n/i18n.js';
import { LOCALES, readPreferredLocale, storePreferredLocale } from './i18n/locales.js';
import { skillsModule } from './modules/skills/index.js';
import { inventoryModule } from './modules/inventory/index.js';
import { addItem } from './modules/inventory/inventoryModel.js';
import { statusModule } from './modules/status/index.js';
import { mapModule } from './modules/map/index.js';
import { ALL_NODES, getNode, neighborsOf } from './modules/map/mapGraph.js';
import { combatModule } from './modules/combat/index.js';
import { craftingModule } from './modules/crafting/index.js';
import { baseModule } from './modules/base/index.js';
import { factionModule, FactionManager } from './modules/factions/index.js';
import { environmentModule, WeatherEngine } from './modules/environment/index.js';
import { economyModule } from './modules/economy/index.js';
import { vehiclesModule, VehicleEngine } from './modules/vehicles/index.js';
import { radioModule } from './modules/radio/index.js';
import { RadioEngine } from './modules/radio/radioEngine.js';
import { ARCHETYPES } from './data/archetypes.js';
import { ARCHETYPE_HOOKS } from './data/narratives.js';
import { VITALS, vitalBand } from './modules/status/statusSelectors.js';
import { MapView } from './ui/mapView.js';
import { InventoryView } from './ui/inventoryView.js';
import { CraftBaseView } from './ui/craftBaseView.js';
import { StatusView } from './ui/statusView.js';
import { LogView } from './ui/logView.js';
import { MenuView } from './ui/menuView.js';
import { LootModalView } from './ui/modals/lootModalView.js';
import { BarterModalView } from './ui/modals/barterModalView.js';
import { VehicleModalView } from './ui/modals/vehicleModalView.js';
import { VehicleDiscoveryModalView } from './ui/modals/vehicleDiscoveryModalView.js';
import { CodexModalView } from './ui/modals/codexModalView.js';
import { RadioModalView } from './ui/modals/radioModalView.js';
import { TravelModalView } from './ui/modals/travelModalView.js';
import { initPanelResizers } from './ui/panelResizer.js';
import { codexManager } from './core/codexManager.js';
import { adManager } from './core/adManager.js';
import { pwaManager } from './pwa.js';
import { audioEngine } from './core/audioEngine.js';

function createNewRunState({
  engine,
  seed,
  name = 'Mara',
  age = 28,
  bloodType = 'A+',
  trait = 'stoic',
  archetypeId = 'scavenger',
  locationId = 'istanbul',
}) {
  const fresh = engine.createInitialState(createBaseState(seed));
  const locId = getNode(locationId) ? locationId : 'istanbul';

  fresh.world.currentNodeId = locId;
  fresh.world.selectedNodeId = locId;
  fresh.world.nodes = {};
  fresh.world.nodes[locId] = { visited: true, known: true, depletion: 0, scavenges: 0 };
  for (const edge of neighborsOf(locId)) {
    fresh.world.nodes[edge.to] = { visited: false, known: true, depletion: 0, scavenges: 0 };
  }

  // Survivor identity & traits
  fresh.player.name = name;
  fresh.player.age = age;
  fresh.player.bloodType = bloodType;
  fresh.player.trait = trait;
  fresh.player.archetype = archetypeId;

  const arch = ARCHETYPES[archetypeId] || ARCHETYPES.scavenger;
  fresh.inventory.equipment = {
    weapon: arch.equipment?.weapon || null,
    body: arch.equipment?.body || null,
    pack: arch.equipment?.pack || null,
  };
  fresh.inventory.stacks = [];
  fresh.inventory.ground = fresh.inventory.ground || {};
  for (const { itemId, qty } of arch.kit || []) {
    const res = addItem(fresh.inventory, itemId, qty);
    fresh.inventory = res.inventory;
  }
  if (arch.skills) {
    for (const [skillId, xp] of Object.entries(arch.skills)) {
      if (fresh.skills && fresh.skills[skillId]) {
        fresh.skills[skillId].xp = xp;
      }
    }
  }

  fresh.factions = FactionManager.getInitialState();
  fresh.environment = WeatherEngine.getInitialState();
  fresh.economy = { activeSession: null };
  fresh.vehicles = VehicleEngine.getInitialState();
  fresh.radio = RadioEngine.getInitialState();

  return fresh;
}

async function bootstrap() {
  if (globalThis.__LAST_BREATH_EN__) {
    i18n.register('en', globalThis.__LAST_BREATH_EN__);
  }
  if (globalThis.__LAST_BREATH_TR__) {
    i18n.register('tr', globalThis.__LAST_BREATH_TR__);
  }
  if (globalThis.__LAST_BREATH_TH__) {
    i18n.register('th', globalThis.__LAST_BREATH_TH__);
  }
  const preferredLocale = readPreferredLocale();
  await i18n.setLocale(preferredLocale);

  const bus = new EventBus();
  const seed = randomSeed();
  const rng = new Rng(seed);
  const effects = new EffectRegistry();
  const store = new Store({}, bus);
  const engine = new Engine({ bus, store, rng, effects });
  codexManager.setBus(bus);

  engine
    .register(coreModule)
    .register(skillsModule)
    .register(inventoryModule)
    .register(statusModule)
    .register(mapModule)
    .register(combatModule)
    .register(craftingModule)
    .register(baseModule)
    .register(factionModule)
    .register(environmentModule)
    .register(economyModule)
    .register(vehiclesModule)
    .register(radioModule);

  const saveManager = new SaveManager({ store, rng });
  adManager.init({ saveManager, bus });
  const defaultState = createNewRunState({ engine, seed, archetypeId: 'scavenger', locationId: 'istanbul' });
  const saved = saveManager.load();
  let hasValidSave = false;

  if (saved && saved.state) {
    rng.reseed(saved.rng);
    const hydrated = engine.hydrateState(defaultState, saved.state);
    store.replace(hydrated);
    hasValidSave = Boolean(hydrated.player?.alive);
  } else {
    store.replace(defaultState);
  }
  saveManager.watch(bus);

  const mapView = new MapView({
    viewportEl: document.getElementById('map-viewport'),
    dossierEl: document.getElementById('map-dossier'),
    encounterHostEl: document.getElementById('encounter-host'),
    engine,
  });
  await mapView.mount(globalThis.__LAST_BREATH_WORLD_SVG__ ?? null);

  const inventoryView = new InventoryView(document.getElementById('inventory-root'), engine);
  const craftBaseView = new CraftBaseView(
    document.getElementById('craft-root'),
    document.getElementById('base-root'),
    engine,
  );
  const statusView = new StatusView(document.getElementById('status-root'), engine);
  const logView = new LogView({
    listEl: document.getElementById('log-list'),
    toastEl: document.getElementById('toast-banner'),
  });
  const lootModalView = new LootModalView(document.getElementById('action-modal'), engine);
  const barterModalView = new BarterModalView(document.getElementById('barter-modal'), engine);
  const vehicleModalView = new VehicleModalView(document.getElementById('vehicle-modal'), engine);
  const vehicleDiscoveryModalView = new VehicleDiscoveryModalView(document.getElementById('vehicle-discovery-modal'), engine);
  const codexModalView = new CodexModalView(document.getElementById('codex-modal'), engine);
  const radioModalView = new RadioModalView(document.getElementById('radio-modal'), engine);
  const travelModalView = new TravelModalView(document.getElementById('travel-modal'), engine);

  const btnOpenRadio = document.getElementById('btn-open-radio');
  if (btnOpenRadio) {
    btnOpenRadio.addEventListener('click', () => {
      barterModalView.close();
      vehicleModalView.close();
      codexModalView.close();
      radioModalView.open();
    });
  }

  engine.registerAction('radio/openModal', () => {
    barterModalView.close();
    vehicleModalView.close();
    codexModalView.close();
    radioModalView.open();
    return { ok: true };
  });

  engine.registerAction('radio/closeModal', () => {
    radioModalView.close();
    return { ok: true };
  });

  const menuView = new MenuView({
    root: document.getElementById('main-menu'),
    saveManager,
    pwaManager,
    onOpenCodex: () => codexModalView.open(),
    onContinue: () => {
      menuView.close();
      barterModalView.close();
      vehicleModalView.close();
      vehicleDiscoveryModalView.close();
      codexModalView.close();
      radioModalView.close();
      travelModalView.close();
      mapView.centerOnNode(store.state.world.currentNodeId, 3.2);
    },
    onStartNew: ({ name, age, bloodType, trait, archetypeId, locationId }) => {
      try {
        menuView.close();
        lootModalView.close();
        barterModalView.close();
        vehicleModalView.close();
        vehicleDiscoveryModalView.close();
        codexModalView.close();
        radioModalView.close();
        travelModalView.close();

        const newSeed = randomSeed();
        rng.reseed(newSeed);
        saveManager.clear();
        const fresh = createNewRunState({
          engine,
          seed: newSeed,
          name,
          age,
          bloodType,
          trait,
          archetypeId,
          locationId,
        });
        store.replace(fresh);
        try { audioEngine.playTerminalBoot(); } catch {}
        engine.log('log.boot.telemetry');
        engine.log('log.boot.beacon');
        const hook = ARCHETYPE_HOOKS[archetypeId] || ARCHETYPE_HOOKS.scavenger;
        const hookText = i18n.locale === 'tr' ? hook.hook_tr : hook.hook_en;
        if (hookText) engine.log(hookText);
        engine.log('log.boot.awakened', {
          location: ref(`location.${store.state.world.currentNodeId}`),
        });
        saveManager.save();
        mapView.centerOnNode(store.state.world.currentNodeId, 3.2);
      } catch (err) {
        console.error('[deploy] Failed to deploy into sector:', err);
        const toast = document.getElementById('toast-banner');
        if (toast) {
          toast.textContent = `HATA: ${err.message || err}`;
          toast.classList.add('is-visible');
        }
      }
    },
    onLoadSlot: (slotNumber) => {
      const loaded = saveManager.loadSlot(slotNumber);
      if (loaded && loaded.state) {
        rng.reseed(loaded.rng);
        const hydrated = engine.hydrateState(defaultState, loaded.state);
        store.replace(hydrated);
        lootModalView.close();
        barterModalView.close();
        vehicleModalView.close();
        vehicleDiscoveryModalView.close();
        codexModalView.close();
        radioModalView.close();
        travelModalView.close();
        menuView.close();
        engine.log('log.boot.awakened', {
          location: ref(`location.${store.state.world.currentNodeId}`),
        });
        mapView.centerOnNode(store.state.world.currentNodeId, 3.2);
      }
    },
    onSaveSlot: (slotNumber) => {
      saveManager.saveSlot(slotNumber);
    },
    onDeleteSlot: (slotNumber) => {
      saveManager.deleteSlot(slotNumber);
    },
    onResetAll: () => {
      saveManager.clearAllData();
      const fresh = createNewRunState({
        engine,
        seed: randomSeed(),
        archetypeId: 'scavenger',
        locationId: 'istanbul',
      });
      store.replace(fresh);
    },
    onLocaleChange: async (nextCode) => {
      storePreferredLocale(nextCode);
      await i18n.setLocale(nextCode);
      const indicator = document.getElementById('locale-indicator');
      if (indicator) indicator.textContent = nextCode.toUpperCase();
    },
  });

  bindTopControls({ engine, store, rng, saveManager, mapView, menuView, codexModalView });
  bindSaveIndicator();
  bindMapControls(mapView, store);
  bindNavigationTabs();
  bindKeyboardShortcuts({
    engine,
    store,
    mapView,
    modals: {
      travelModalView,
      lootModalView,
      barterModalView,
      vehicleModalView,
      vehicleDiscoveryModalView,
      radioModalView,
      codexModalView,
      menuView,
    },
  });
  initPanelResizers();
  pwaManager.init();

  // Global tactile mechanical switch click on interactive UI elements
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, .nav-tab, .slot-action-btn, .menu-archetype-chip, .node-marker, .action-btn')) {
      audioEngine.playTerminalClick();
    }
  }, { passive: true });

  const renderAll = () => {
    const { state } = store;
    i18n.translateTree(document);
    renderHudHeader(state);
    mapView.render(state);
    inventoryView.render(state);
    craftBaseView.render(state);
    statusView.render(state);
    logView.render(state);
    radioModalView.updateHeaderBadge(state);
    renderDeathModal(state, menuView);
    const indicator = document.getElementById('locale-indicator');
    if (indicator) indicator.textContent = (i18n.locale || 'en').toUpperCase();

    // Critical heartbeat audio monitor
    const isCritical = state.player.alive && state.player.health <= 20;
    audioEngine.setCriticalHeartbeat(isCritical, Math.max(70, Math.round(115 - state.player.health * 2)));

    if (menuView.isOpen) {
      menuView.render();
    }
    if (lootModalView.isOpen) {
      lootModalView.render();
    }
    if (barterModalView.isOpen) {
      barterModalView.render();
    }
    if (vehicleModalView.isOpen) {
      vehicleModalView.render(state);
    }
    if (radioModalView.isOpen) {
      radioModalView.render(state);
    }
    if (travelModalView.isOpen) {
      travelModalView.render();
    }
  };

  bus.on('vehicles:modal', ({ vehicleId }) => {
    if (vehicleId) {
      barterModalView.close();
      codexModalView.close();
      radioModalView.close();
      lootModalView.close();
      vehicleDiscoveryModalView.close();
      travelModalView.close();
    }
  });
  bus.on('loot:modal', (payload) => lootModalView.open(payload));
  bus.on('game:victory', ({ days, nodes }) => {
    const modal = document.getElementById('victory-modal');
    const summary = document.getElementById('victory-summary');
    if (summary) summary.textContent = t('endgame.victory_summary', { days, nodes });
    if (modal) modal.hidden = false;
  });
  bus.on('state:changed', renderAll);
  bus.on('action:rejected', ({ reason, params }) => logView.flashRejection(reason, params));
  bus.on('state:committed', ({ type, payload }) => {
    if (type === 'world/visitNode') mapView.centerOnNode(payload, 3.2);
  });
  i18n.onChange(renderAll);

  renderAll();
  mapView.centerOnNode(store.state.world.currentNodeId, 3.2);

  // Open the main menu on initial boot so survivor can choose to continue or customize a new run
  menuView.open({ hasSave: hasValidSave, state: store.state });
}

let lastRenderedSeason = null;

function renderHudHeader(state) {
  const { day } = readClock(state.time.minutes);
  const season = getSeasonInfo(state.time.minutes);
  const nameEl = document.getElementById('hud-name');
  const clockEl = document.getElementById('hud-clock');
  const dayEl = document.getElementById('hud-day');
  const phaseEl = document.getElementById('hud-phase');
  const seasonEl = document.getElementById('hud-season');
  const locEl = document.getElementById('hud-location');

  if (document.documentElement.dataset.season !== season.id) {
    document.documentElement.dataset.season = season.id;
  }
  lastRenderedSeason = season.id;

  if (nameEl) {
    nameEl.textContent = (state.player.name || t('character.default_name')).toUpperCase();
  }
  dayEl.textContent = t('hud.day', { day });
  clockEl.textContent = formatClock(state.time.minutes);
  const night = isNight(state.time.minutes);
  phaseEl.textContent = night ? t('hud.night') : t('hud.daylight');
  phaseEl.classList.toggle('is-night', night);
  if (seasonEl) {
    seasonEl.textContent = `${season.glyph} ${t(`hud.season.${season.id}`)}`;
  }
  locEl.textContent = t(`location.${state.world.currentNodeId}`);

  const stripEl = document.getElementById('hud-vitals-strip');
  for (const vital of VITALS) {
    const val = Math.round(state.player[vital]);
    const pill = stripEl.querySelector(`[data-vital="${vital}"]`);
    if (!pill) continue;
    pill.className = `hud-vital-pill band-${vitalBand(val)}`;
    pill.querySelector('.pill-val').textContent = `${val}%`;
  }
}

function renderDeathModal(state) {
  const modal = document.getElementById('death-modal');
  if (state.player.alive) {
    modal.hidden = true;
    return;
  }
  modal.hidden = false;

  // Record fallen hero to permanent memorial graveyard
  if (!state.player._recordedToMemorial) {
    state.player._recordedToMemorial = true;
    codexManager.recordFallenSurvivor(state);
    adManager.showInterstitial({ name: 'survivor_perished' });
  }

  const causeEl = document.getElementById('death-cause');
  const summaryEl = document.getElementById('death-summary');
  const days = i18n.formatNumber(daysElapsed(state.player.diedAt ?? state.time.minutes), 1);
  const visitedCount = Object.values(state.world.nodes).filter((node) => node.visited).length;
  const survivorName = (state.player.name || t('character.default_name')).toUpperCase();

  causeEl.textContent = t(`death.cause.${state.player.causeOfDeath ?? 'wounds'}`);
  summaryEl.textContent = `${survivorName} · ${t('death.summary', {
    days,
    nodes: visitedCount,
    location: t(`location.${state.world.currentNodeId}`),
  })}`;
}

function bindTopControls({ engine, store, rng, saveManager, mapView, menuView, codexModalView }) {
  const toggleBtn = document.getElementById('btn-locale-toggle');
  const indicator = document.getElementById('locale-indicator');

  const updateLocaleUi = () => {
    if (indicator) {
      indicator.textContent = (i18n.locale || 'en').toUpperCase();
    }
    if (toggleBtn) {
      const idx = LOCALES.findIndex((l) => l.code === i18n.locale);
      const nextLoc = LOCALES[(idx + 1) % LOCALES.length];
      toggleBtn.title = `${nextLoc.label} (${nextLoc.code.toUpperCase()})`;
      toggleBtn.setAttribute('aria-label', toggleBtn.title);
    }
  };

  updateLocaleUi();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', async () => {
      const idx = LOCALES.findIndex((l) => l.code === i18n.locale);
      const nextCode = LOCALES[(idx + 1) % LOCALES.length].code;
      storePreferredLocale(nextCode);
      await i18n.setLocale(nextCode);
      updateLocaleUi();
    });
  }

  const openCodexBtn = document.getElementById('btn-open-codex');
  if (openCodexBtn) {
    openCodexBtn.addEventListener('click', () => {
      codexModalView.open();
    });
  }

  const deathMemorialBtn = document.getElementById('btn-death-memorial');
  if (deathMemorialBtn) {
    deathMemorialBtn.addEventListener('click', () => {
      codexModalView.open('memorial');
    });
  }

  const openBtn = document.getElementById('btn-open-menu');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      menuView.open({ hasSave: store.state.player?.alive, state: store.state });
    });
  }

  const newRunBtn = document.getElementById('btn-new-run');
  if (newRunBtn) {
    newRunBtn.addEventListener('click', () => {
      menuView.open({ hasSave: false, state: store.state, mode: 'create' });
    });
  }

  const deathRestartBtn = document.getElementById('btn-death-restart');
  if (deathRestartBtn) {
    deathRestartBtn.addEventListener('click', () => {
      document.getElementById('death-modal').hidden = true;
      menuView.open({ hasSave: false, state: store.state, mode: 'create' });
    });
  }

  const victoryEndlessBtn = document.getElementById('btn-victory-endless');
  if (victoryEndlessBtn) {
    victoryEndlessBtn.addEventListener('click', () => {
      document.getElementById('victory-modal').hidden = true;
      engine.dispatch('map/continueEndless');
    });
  }

  const victoryRestartBtn = document.getElementById('btn-victory-restart');
  if (victoryRestartBtn) {
    victoryRestartBtn.addEventListener('click', () => {
      document.getElementById('victory-modal').hidden = true;
      menuView.open({ hasSave: false, state: store.state, mode: 'create' });
    });
  }
}

function bindSaveIndicator() {
  const badge = document.getElementById('hud-save-badge');
  if (!badge) return;
  let timer = null;
  window.addEventListener('lastbreath:saved', () => {
    badge.hidden = false;
    badge.classList.add('is-visible');
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      badge.classList.remove('is-visible');
      badge.hidden = true;
    }, 1800);
  });
}

function bindMapControls(mapView, store) {
  document.getElementById('map-zoom-in').addEventListener('click', () => mapView.zoomBy(1.35));
  document.getElementById('map-zoom-out').addEventListener('click', () => mapView.zoomBy(1 / 1.35));
  document.getElementById('map-center').addEventListener('click', () =>
    mapView.centerOnNode(store.state.world.currentNodeId, 3.2),
  );
  document.getElementById('map-world').addEventListener('click', () => mapView.resetZoom());
}

function bindNavigationTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const panels = document.querySelectorAll('[data-tab-panel]');
  const rightButtons = document.querySelectorAll('[data-right-tab]');

  const activateRightPane = (target) => {
    for (const btn of rightButtons) {
      btn.classList.toggle('is-active', btn.dataset.rightTab === target);
    }
    const invPane = document.querySelector('[data-tab-panel="inventory"]');
    const craftPane = document.querySelector('[data-tab-panel="craft"]');
    const basePane = document.querySelector('[data-tab-panel="base"]');
    if (invPane) invPane.classList.toggle('is-desktop-right-hidden', target !== 'inventory');
    if (craftPane) craftPane.classList.toggle('is-desktop-right-hidden', target !== 'craft');
    if (basePane) basePane.classList.toggle('is-desktop-right-hidden', target !== 'base');

    if (window.innerWidth < 900) {
      for (const btn of tabButtons) {
        btn.classList.toggle('is-active', btn.dataset.tabTarget === target);
      }
      for (const panel of panels) {
        panel.classList.toggle('is-active-panel', panel.dataset.tabPanel === target);
      }
    }
  };

  for (const button of rightButtons) {
    button.addEventListener('click', () => activateRightPane(button.dataset.rightTab));
  }

  for (const button of tabButtons) {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      for (const btn of tabButtons) btn.classList.toggle('is-active', btn === button);
      for (const panel of panels) {
        panel.classList.toggle('is-active-panel', panel.dataset.tabPanel === target);
      }
      if (target === 'inventory' || target === 'craft' || target === 'base') {
        activateRightPane(target);
      }
    });
  }
}

function bindKeyboardShortcuts({ engine, store, mapView, modals }) {
  const activateTab = (target) => {
    const isDesktop = window.innerWidth >= 900;
    if (isDesktop && (target === 'inventory' || target === 'craft' || target === 'base')) {
      document.querySelector(`[data-right-tab="${target}"]`)?.click();
      return;
    }
    document.querySelector(`[data-tab-target="${target}"]`)?.click();
  };

  const hasAnyModalOpen = () =>
    Boolean(
      modals.travelModalView?.isOpen ||
      modals.lootModalView?.isOpen ||
      modals.barterModalView?.isOpen ||
      modals.vehicleModalView?.isOpen ||
      modals.vehicleDiscoveryModalView?.isOpen ||
      modals.radioModalView?.isOpen ||
      modals.menuView?.isOpen ||
      !document.getElementById('codex-modal')?.hidden,
    );

  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    const tag = e.target?.tagName;
    const isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;

    if (e.key === 'Escape') {
      if (isTyping) {
        e.target.blur?.();
        return;
      }
      if (modals.travelModalView?.isOpen) { modals.travelModalView.close(); return; }
      if (modals.lootModalView?.isOpen) { modals.lootModalView.close(); return; }
      if (modals.barterModalView?.isOpen) { modals.barterModalView.close(); return; }
      if (modals.vehicleModalView?.isOpen) { modals.vehicleModalView.close(); return; }
      if (modals.vehicleDiscoveryModalView?.isOpen) { modals.vehicleDiscoveryModalView.close(); return; }
      if (modals.radioModalView?.isOpen) { modals.radioModalView.close(); return; }
      const codexEl = document.getElementById('codex-modal');
      if (codexEl && !codexEl.hidden) { modals.codexModalView?.close(); return; }
      if (modals.menuView?.isOpen && store.state?.player?.alive) {
        modals.menuView.close();
      }
      return;
    }

    if (isTyping || hasAnyModalOpen()) return;

    const key = e.key.toLowerCase();
    if (key === '1' || key === 'm') {
      e.preventDefault();
      activateTab('map');
    } else if (key === '2' || key === 'i') {
      e.preventDefault();
      activateTab('inventory');
    } else if (key === '3' || key === 'c') {
      e.preventDefault();
      activateTab('craft');
    } else if (key === '4' || key === 'b') {
      e.preventDefault();
      activateTab('base');
    } else if (key === '5' || key === 's') {
      e.preventDefault();
      activateTab('status');
    } else if (key === '6' || key === 'l') {
      e.preventDefault();
      activateTab('log');
    } else if (key === 'r') {
      e.preventDefault();
      engine.dispatch('radio/openModal');
    } else if (key === '+' || key === '=') {
      e.preventDefault();
      mapView?.zoomBy(1.35);
    } else if (key === '-' || key === '_') {
      e.preventDefault();
      mapView?.zoomBy(1 / 1.35);
    } else if (key === '0') {
      e.preventDefault();
      mapView?.resetZoom();
    } else if (key === 'g') {
      e.preventDefault();
      const nodeId = store.state?.world?.currentNodeId;
      if (nodeId) mapView?.centerOnNode(nodeId, 3.2);
    }
  });
}

bootstrap().catch((error) => {
  console.error('[boot] failed to initialize Last Breath', error);
  const toastEl = document.getElementById('toast-banner');
  if (toastEl) {
    toastEl.textContent = `BOOT ERROR: ${error.message || error}`;
    toastEl.classList.add('is-visible');
  }
});
