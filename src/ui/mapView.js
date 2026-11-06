import { BALANCE } from '../data/balance.js';
import { getItem } from '../data/items.js';
import { t } from '../i18n/i18n.js';
import { weaponProfile } from '../modules/inventory/inventorySelectors.js';
import { describeEncounter } from '../modules/map/encounters.js';
import {
  ALL_NODES, EDGES, chartedCountries, estimateJourney, findRoute, getNode,
  neighborsOf, nodeVisibility, scavengeProfile,
} from '../modules/map/mapGraph.js';
import { MAP_VIEWBOX } from '../modules/map/projection.js';
import { el, svgEl } from './dom.js';

export class MapView {
  #viewportEl;
  #dossierEl;
  #encounterHostEl;
  #engine;
  #svgEl = null;
  #routesLayer = null;
  #nodesLayer = null;
  #countryPaths = new Map();
  #camera = { x: 0, y: 0, width: MAP_VIEWBOX.width, height: MAP_VIEWBOX.height };
  #drag = null;
  #lastState = null;

  constructor({ viewportEl, dossierEl, encounterHostEl, engine }) {
    this.#viewportEl = viewportEl;
    this.#dossierEl = dossierEl;
    this.#encounterHostEl = encounterHostEl;
    this.#engine = engine;
  }

  async mount(inlineSvgText = null) {
    let svgText = inlineSvgText;
    if (!svgText) {
      const response = await fetch('./world.svg');
      if (!response.ok) throw new Error(`Failed to load world.svg (${response.status})`);
      svgText = await response.text();
    }

    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
    const sourceSvg = doc.querySelector('svg');
    if (!sourceSvg) throw new Error('Invalid world.svg document');
    const parsedSvg = document.importNode(sourceSvg, true);

    parsedSvg.classList.add('world-svg');
    parsedSvg.removeAttribute('width');
    parsedSvg.removeAttribute('height');
    parsedSvg.setAttribute('viewBox', `0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`);

    for (const path of parsedSvg.querySelectorAll('path')) {
      const country = path.getAttribute('name') || path.getAttribute('class');
      path.classList.add('landmass');
      if (country) {
        if (!this.#countryPaths.has(country)) this.#countryPaths.set(country, []);
        this.#countryPaths.get(country).push(path);
        path.addEventListener('click', () => this.#onCountryClick(country));
      }
    }

    this.#routesLayer = svgEl('g', { class: 'map-routes-layer' });
    this.#nodesLayer = svgEl('g', { class: 'map-nodes-layer' });
    parsedSvg.append(this.#routesLayer, this.#nodesLayer);

    this.#svgEl = parsedSvg;
    this.#viewportEl.prepend(parsedSvg);
    this.#bindPanZoom();
  }

  #onCountryClick(country) {
    if (!this.#lastState) return;
    const candidates = ALL_NODES.filter(
      (node) => node.country === country && nodeVisibility(this.#lastState, node.id) !== 'fog',
    );
    if (candidates.length > 0) {
      this.#engine.dispatch('map/select', { nodeId: candidates[0].id });
    }
  }

  centerOnNode(nodeId, zoom = 3.2) {
    const node = getNode(nodeId);
    const width = MAP_VIEWBOX.width / zoom;
    const height = MAP_VIEWBOX.height / zoom;
    this.#setCamera({
      x: node.x - width / 2,
      y: node.y - height / 2,
      width,
      height,
    });
  }

  resetZoom() {
    this.#setCamera({ x: 0, y: 0, width: MAP_VIEWBOX.width, height: MAP_VIEWBOX.height });
  }

  zoomBy(factor) {
    const cx = this.#camera.x + this.#camera.width / 2;
    const cy = this.#camera.y + this.#camera.height / 2;
    const width = Math.max(220, Math.min(MAP_VIEWBOX.width, this.#camera.width / factor));
    const height = (width / MAP_VIEWBOX.width) * MAP_VIEWBOX.height;
    this.#setCamera({ x: cx - width / 2, y: cy - height / 2, width, height });
  }

  render(state) {
    this.#lastState = state;
    if (this.#svgEl) {
      this.#renderMapOverlay(state);
    }
    this.#renderDossier(state);
    this.#renderModalOverlay(state);
  }

  #renderMapOverlay(state) {
    const charted = chartedCountries(state);
    const selectedCountry = getNode(state.world.selectedNodeId).country;
    for (const [country, paths] of this.#countryPaths) {
      const isCharted = charted.has(country);
      const isSelectedCountry = country === selectedCountry;
      for (const path of paths) {
        path.classList.toggle('is-charted', isCharted);
        path.classList.toggle('is-selected-country', isSelectedCountry);
      }
    }

    const { currentNodeId, selectedNodeId } = state.world;
    const routeEls = [];
    for (const edge of EDGES) {
      const visA = nodeVisibility(state, edge.a);
      const visB = nodeVisibility(state, edge.b);
      if (visA === 'fog' && visB === 'fog') continue;
      if (visA !== 'visited' && visB !== 'visited') continue;

      const nodeA = getNode(edge.a);
      const nodeB = getNode(edge.b);
      const isActiveEdge =
        (edge.a === currentNodeId && edge.b === selectedNodeId) ||
        (edge.b === currentNodeId && edge.a === selectedNodeId);

      routeEls.push(
        svgEl('line', {
          x1: nodeA.x.toFixed(1),
          y1: nodeA.y.toFixed(1),
          x2: nodeB.x.toFixed(1),
          y2: nodeB.y.toFixed(1),
          class: [
            'map-route',
            edge.mode === 'sea' && 'is-sea',
            isActiveEdge && 'is-selected',
          ].filter(Boolean).join(' '),
        }),
      );
    }
    this.#routesLayer.replaceChildren(...routeEls);

    const nodeEls = [];
    for (const node of ALL_NODES) {
      const vis = nodeVisibility(state, node.id);
      if (vis === 'fog') continue;

      const isCurrent = node.id === currentNodeId;
      const isSelected = node.id === selectedNodeId;
      const isOutpost = state.base.outpostNodeId === node.id;

      const group = svgEl(
        'g',
        {
          class: [
            'map-node',
            `vis-${vis}`,
            isCurrent && 'is-current',
            isSelected && 'is-selected',
            isOutpost && 'is-outpost',
          ].filter(Boolean).join(' '),
          transform: `translate(${node.x.toFixed(1)}, ${node.y.toFixed(1)})`,
          'data-node-id': node.id,
        },
        svgEl('circle', { class: 'node-hit-area', r: 12 }),
        isCurrent && svgEl('circle', { class: 'node-pulse', r: 11 }),
        isSelected && svgEl('circle', { class: 'node-reticle', r: 8 }),
        svgEl('circle', { class: 'node-dot', r: isCurrent ? 4.8 : 3.8 }),
        svgEl(
          'text',
          { class: 'node-label', x: 6.5, y: 3 },
          isOutpost ? `⌂ ${t(`location.${node.id}`)}` : t(`location.${node.id}`),
        ),
      );

      group.addEventListener('click', (event) => {
        event.stopPropagation();
        this.#engine.dispatch('map/select', { nodeId: node.id });
      });
      group.addEventListener('dblclick', (event) => {
        event.stopPropagation();
        if (findRoute(currentNodeId, node.id)) {
          this.#engine.dispatch('map/travel', { toId: node.id });
        }
      });
      nodeEls.push(group);
    }
    this.#nodesLayer.replaceChildren(...nodeEls);
  }

  #renderDossier(state) {
    const { currentNodeId, selectedNodeId } = state.world;
    const current = getNode(currentNodeId);
    const selected = getNode(selectedNodeId);
    const scavenge = scavengeProfile(state, currentNodeId);
    const yieldPct = Math.round((1 - scavenge.depletion) * 100);

    const selectedTargetBanner = selected.id !== current.id && this.#renderSelectedBanner(state, current, selected);

    const localOps = el(
      'section',
      { class: 'panel-block' },
      el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('map.current_sector')),
          el('h3', { class: 'sector-title' }, t(`location.${current.id}`)),
        ),
        el('span', { class: ['biome-badge', `biome-${current.biome}`] }, t(`biome.${current.biome}`)),
      ),
      el(
        'dl',
        { class: 'kv-grid kv-compact' },
        el('dt', {}, t('map.coords')),
        el('dd', {}, this.#formatCoords(current)),
        el('dt', {}, t('map.threat_level')),
        el('dd', { class: `danger-${current.danger}` }, '▲'.repeat(current.danger)),
        el('dt', {}, t('map.scavenge_yield')),
        el('dd', {}, `${yieldPct}% (${Math.round(scavenge.chance * 100)}% ${t('map.find_chance')})`),
      ),
      el(
        'div',
        { class: 'ops-actions' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent',
            onClick: () => this.#engine.dispatch('map/scavenge'),
          },
          t('map.action.scavenge'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn',
            onClick: () => this.#engine.dispatch('combat/patrol'),
          },
          t('map.action.patrol'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn',
            onClick: () => this.#engine.dispatch('map/survey'),
          },
          t('map.action.survey'),
        ),
        ...BALANCE.rest.options.map((hours) =>
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-ghost',
              onClick: () => this.#engine.dispatch('map/rest', { hours }),
            },
            t('map.action.rest_hours', { hours }),
          ),
        ),
      ),
    );

    const routesSection = this.#renderRoutesList(state, current, selected);
    this.#dossierEl.replaceChildren(selectedTargetBanner, localOps, routesSection);
  }

  #renderSelectedBanner(state, current, selected) {
    const directPlan = estimateJourney(state, current.id, selected.id);
    return el(
      'section',
      { class: 'panel-block selected-target-block' },
      el(
        'div',
        { class: 'sector-header' },
        el(
          'div',
          {},
          el('span', { class: 'meta-label' }, t('map.selected_sector')),
          el('strong', { class: 'sector-title' }, t(`location.${selected.id}`)),
          el(
            'div',
            { class: 'route-meta' },
            el('span', {}, `${t(`biome.${selected.biome}`)} · ${this.#formatCoords(selected)}`),
            directPlan
              ? el('span', {}, `${directPlan.km} km · ~${(directPlan.minutes / 60).toFixed(1)}h`)
              : el('span', { class: 'tone-warn' }, t('map.no_direct_corridor')),
          ),
        ),
        directPlan && el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent',
            onClick: () => this.#engine.dispatch('map/travel', { toId: selected.id }),
          },
          `${t('map.action.travel')} → ${t(`location.${selected.id}`)}`,
        ),
      ),
    );
  }

  #renderRoutesList(state, current, selected) {
    const edges = neighborsOf(current.id);
    const items = edges.map((edge) => {
      const target = getNode(edge.to);
      const vis = nodeVisibility(state, edge.to);
      const plan = estimateJourney(state, current.id, edge.to);
      const hours = (plan.minutes / 60).toFixed(1);
      const riskPct = Math.round(plan.risk * 100);
      const isSelected = selected.id === edge.to;

      return el(
        'li',
        {
          class: ['route-card', isSelected && 'is-selected'],
          onClick: () => this.#engine.dispatch('map/select', { nodeId: edge.to }),
        },
        el(
          'div',
          { class: 'route-main' },
          el(
            'div',
            { class: 'route-title-line' },
            el('span', { class: 'route-name' }, t(`location.${target.id}`)),
            el('span', { class: 'route-mode-tag' }, t(`map.mode.${edge.mode}`)),
            vis === 'visited' && el('span', { class: 'route-visited-tag' }, t('map.visited_badge')),
          ),
          el(
            'div',
            { class: 'route-meta' },
            el('span', {}, `${t(`biome.${target.biome}`)} · ${plan.km} km`),
            el('span', {}, `~${hours}h`),
            el('span', { class: riskPct >= 45 ? 'tone-warn' : '' }, `${t('map.risk')} ${riskPct}%`),
          ),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent btn-xs',
            onClick: (event) => {
              event.stopPropagation();
              this.#engine.dispatch('map/travel', { toId: edge.to });
            },
          },
          t('map.action.travel'),
        ),
      );
    });

    return el(
      'section',
      { class: 'panel-block' },
      el('h3', { class: 'block-title' }, t('map.section.routes')),
      el('ul', { class: 'routes-list' }, items),
    );
  }

  #renderModalOverlay(state) {
    if (state.combat.activeEngagement) {
      this.#renderCombatCard(state, state.combat.activeEngagement);
      return;
    }
    const info = describeEncounter(state, state.world.encounter);
    if (info) {
      this.#renderEncounterCard(info);
      return;
    }
    this.#encounterHostEl.replaceChildren();
    this.#encounterHostEl.hidden = true;
  }

  #renderCombatCard(state, engagement) {
    this.#encounterHostEl.hidden = false;
    const hpPct = Math.max(0, Math.min(100, Math.round((engagement.hp / engagement.maxHp) * 100)));
    const weapon = weaponProfile(state);
    const weaponLabel = weapon.itemId ? t(`item.${weapon.itemId}.name`) : t('inventory.unarmed');

    const medStacks = state.inventory.stacks.filter(
      ({ itemId }) => getItem(itemId).category === 'medical' && getItem(itemId).use,
    );

    const card = el(
      'div',
      { class: 'encounter-card combat-card' },
      el(
        'div',
        { class: 'encounter-kicker' },
        `${t('combat.kicker')} // ${t('combat.round', { round: engagement.round })}`,
      ),
      el('h3', { class: 'encounter-title' }, t(`enemy.${engagement.enemyId}.name`)),
      el('p', { class: 'encounter-text' }, t(`enemy.${engagement.enemyId}.desc`)),
      el(
        'div',
        { class: 'vital-row band-critical' },
        el(
          'div',
          { class: 'vital-head' },
          el('span', { class: 'vital-label' }, t('combat.enemy_hp')),
          el('span', { class: 'vital-value' }, `${engagement.hp} / ${engagement.maxHp} HP`),
        ),
        el(
          'div',
          { class: 'meter-track' },
          el('div', { class: 'meter-fill', style: `width: ${hpPct}%` }),
        ),
      ),
      el(
        'div',
        { class: 'encounter-choices' },
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-accent encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'strike' }),
          },
          el('span', {}, `${t('combat.action.strike')} (${weaponLabel})`),
          el('span', { class: 'choice-odds' }, '-3 STAM'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'aimed' }),
          },
          el('span', {}, t('combat.action.aimed')),
          el('span', { class: 'choice-odds' }, '1.5× DMG · -5 STAM'),
        ),
        el(
          'button',
          {
            type: 'button',
            class: ['btn', 'encounter-choice-btn', engagement.scavenged && 'is-disabled'],
            disabled: engagement.scavenged,
            onClick: () => this.#engine.dispatch('combat/action', { move: 'scavenge' }),
          },
          el('span', {}, t('combat.action.scavenge')),
          el('span', { class: 'choice-odds' }, t('combat.scavenge_tag')),
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-ghost encounter-choice-btn',
            onClick: () => this.#engine.dispatch('combat/action', { move: 'flee' }),
          },
          el('span', {}, t('combat.action.flee')),
          el('span', { class: 'choice-odds' }, '-6 STAM'),
        ),
      ),
      medStacks.length > 0 && el(
        'div',
        { class: 'ops-actions' },
        ...medStacks.map(({ itemId, qty }) =>
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-xs',
              onClick: () => this.#engine.dispatch('inventory/use', { itemId }),
            },
            `+ ${t(`item.${itemId}.name`)} (${qty})`,
          ),
        ),
      ),
    );

    this.#encounterHostEl.replaceChildren(card);
  }

  #renderEncounterCard(info) {
    this.#encounterHostEl.hidden = false;
    const choiceBtns = info.choices.map((choice) => {
      const label = t(`encounter.${info.id}.choice.${choice.id}`);
      const badge = choice.check
        ? `${this.#checkLabel(choice.check)} ${Math.round(choice.check.chance * 100)}%`
        : null;

      return el(
        'button',
        {
          type: 'button',
          class: ['btn', 'encounter-choice-btn', !choice.available && 'is-disabled'],
          disabled: !choice.available,
          onClick: () => this.#engine.dispatch('encounter/choose', { choiceId: choice.id }),
        },
        el('span', { class: 'choice-label' }, label),
        badge && el('span', { class: 'choice-odds' }, badge),
      );
    });

    const card = el(
      'div',
      { class: 'encounter-card' },
      el(
        'div',
        { class: 'encounter-kicker' },
        `${t('encounter.kicker')} // ${t(`location.${info.nodeId}`)}`,
      ),
      el('h3', { class: 'encounter-title' }, t(`encounter.${info.id}.title`)),
      el('p', { class: 'encounter-text' }, t(`encounter.${info.id}.text`)),
      el('div', { class: 'encounter-choices' }, choiceBtns),
    );

    this.#encounterHostEl.replaceChildren(card);
  }

  #checkLabel(check) {
    if (check.kind === 'skill') return t(`skill.${check.skill}.name`);
    if (check.kind === 'combat') return t('encounter.check.combat');
    if (check.kind === 'gear') return t('encounter.check.gear');
    return '';
  }

  #formatCoords({ lat, lon }) {
    const ns = lat >= 0 ? 'N' : 'S';
    const ew = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(1)}°${ns} ${Math.abs(lon).toFixed(1)}°${ew}`;
  }

  #setCamera({ x, y, width, height }) {
    const clampedW = Math.max(200, Math.min(MAP_VIEWBOX.width, width));
    const clampedH = Math.max(85, Math.min(MAP_VIEWBOX.height, height));
    const clampedX = Math.max(0, Math.min(MAP_VIEWBOX.width - clampedW, x));
    const clampedY = Math.max(0, Math.min(MAP_VIEWBOX.height - clampedH, y));
    this.#camera = { x: clampedX, y: clampedY, width: clampedW, height: clampedH };
    if (this.#svgEl) {
      this.#svgEl.setAttribute(
        'viewBox',
        `${clampedX.toFixed(1)} ${clampedY.toFixed(1)} ${clampedW.toFixed(1)} ${clampedH.toFixed(1)}`,
      );
    }
  }

  #pointers = new Map();
  #pinchDist = null;

  #bindPanZoom() {
    this.#viewportEl.addEventListener(
      'wheel',
      (event) => {
        event.preventDefault();
        this.zoomBy(event.deltaY < 0 ? 1.2 : 1 / 1.2);
      },
      { passive: false },
    );

    this.#viewportEl.addEventListener('pointerdown', (event) => {
      if (event.target.closest('.map-node, .map-ctrl-btn')) return;
      this.#pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (this.#pointers.size === 1) {
        this.#drag = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          camX: this.#camera.x,
          camY: this.#camera.y,
        };
      } else if (this.#pointers.size === 2) {
        const [p1, p2] = Array.from(this.#pointers.values());
        this.#pinchDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      }
      try {
        this.#viewportEl.setPointerCapture?.(event.pointerId);
      } catch {}
    });

    this.#viewportEl.addEventListener('pointermove', (event) => {
      if (this.#pointers.has(event.pointerId)) {
        this.#pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
      }

      if (this.#pointers.size === 2 && this.#pinchDist) {
        const [p1, p2] = Array.from(this.#pointers.values());
        const newDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const factor = newDist / this.#pinchDist;
        if (Math.abs(factor - 1) > 0.03) {
          this.zoomBy(factor);
          this.#pinchDist = newDist;
        }
        return;
      }

      if (!this.#drag || event.pointerId !== this.#drag.pointerId) return;
      const rect = this.#viewportEl.getBoundingClientRect();
      const dx = ((event.clientX - this.#drag.startX) / rect.width) * this.#camera.width;
      const dy = ((event.clientY - this.#drag.startY) / rect.height) * this.#camera.height;
      this.#setCamera({
        x: this.#drag.camX - dx,
        y: this.#drag.camY - dy,
        width: this.#camera.width,
        height: this.#camera.height,
      });
    });

    const release = (event) => {
      this.#pointers.delete(event.pointerId);
      if (this.#pointers.size < 2) this.#pinchDist = null;
      if (this.#drag && event.pointerId === this.#drag.pointerId) {
        this.#drag = null;
      }
    };
    this.#viewportEl.addEventListener('pointerup', release);
    this.#viewportEl.addEventListener('pointercancel', release);
  }
}
