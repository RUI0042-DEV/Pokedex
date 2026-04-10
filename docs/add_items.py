import re, sys

with open(r'c:\Users\cfgm2smxa11\Documents\E\pokedex_v8.html', 'r', encoding='utf-8') as f:
    content = f.read()

# ─── 1. Replace the old items CSS block ──────────────────────────────────────
old_css_marker = '/* ── ITEMS VIEW ──'
old_css_end    = '@media (max-width: 600px) {\n      .items-grid { grid-template-columns: 1fr; }\n    }\n\n'

start_css = content.find(old_css_marker)
end_css   = content.find(old_css_end, start_css)
if start_css >= 0 and end_css >= 0:
    content = content[:start_css] + content[end_css + len(old_css_end):]
    print("Old CSS removed")
else:
    print(f"CSS block not found: marker={start_css}, end={end_css}")

NEW_CSS = '''
    /* ── ITEMS VIEW ── */
    #items-view h2 {
      font-family: var(--font-display);
      font-size: clamp(0.7rem, 2vw, 1rem);
      color: var(--yellow);
      text-shadow: 2px 2px 0 var(--red);
      margin-bottom: 0.5rem;
    }
    .items-filters {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }
    .items-search-wrap { max-width: 440px; }
    #items-search {
      width: 100%;
      background: var(--card);
      border: 1.5px solid var(--border);
      border-radius: 50px;
      color: var(--text);
      font-family: var(--font-body);
      font-size: 0.9rem;
      font-weight: 700;
      padding: 0.6rem 1.25rem;
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    #items-search:focus {
      border-color: var(--yellow);
      box-shadow: 0 0 0 3px rgba(255,215,0,0.15);
    }
    #items-search::placeholder { color: var(--muted); }
    .items-category-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .item-cat-pill {
      font-family: var(--font-display);
      font-size: 0.38rem;
      padding: 0.32rem 0.75rem;
      border-radius: 50px;
      border: 1.5px solid var(--border);
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.04em;
    }
    .item-cat-pill:hover { border-color: rgba(255,255,255,0.25); color: var(--text); }
    .item-cat-pill.active {
      background: var(--card2);
      border-color: var(--yellow);
      color: var(--yellow);
      box-shadow: 0 0 10px rgba(255,215,0,0.18);
    }
    .items-count {
      font-family: var(--font-display);
      font-size: 0.4rem;
      color: var(--muted);
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
    }
    .items-count span { color: var(--yellow); }
    .items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      gap: 0.85rem;
    }
    .item-card {
      background: var(--card);
      border-radius: 16px;
      padding: 1rem 1.1rem 0.9rem;
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
      border: 1.5px solid var(--border);
      transition: transform 0.25s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.25s, border-color 0.2s, background 0.2s;
      animation: cardIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
      animation-delay: calc(var(--i,0) * 0.025s);
      position: relative;
      overflow: hidden;
    }
    .item-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 10% 0%, rgba(255,215,0,0.04) 0%, transparent 60%);
      pointer-events: none;
    }
    .item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(0,0,0,0.45);
      border-color: rgba(255,215,0,0.25);
      background: var(--card2);
    }
    .item-icon-wrap {
      flex-shrink: 0;
      width: 52px;
      height: 52px;
      background: rgba(255,255,255,0.04);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--border);
      position: relative;
    }
    .item-icon-wrap img {
      width: 38px;
      height: 38px;
      image-rendering: pixelated;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
    }
    .item-info { flex: 1; min-width: 0; }
    .item-name {
      font-weight: 900;
      font-size: 0.9rem;
      text-transform: capitalize;
      margin-bottom: 0.2rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--text);
    }
    .item-category {
      display: inline-block;
      font-family: var(--font-display);
      font-size: 0.3rem;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      padding: 2px 7px;
      border-radius: 50px;
      margin-bottom: 0.45rem;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      color: var(--muted);
    }
    .item-effect {
      font-size: 0.75rem;
      color: rgba(232,232,240,0.72);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .item-cost {
      font-family: var(--font-display);
      font-size: 0.35rem;
      color: var(--yellow);
      margin-top: 0.5rem;
      letter-spacing: 0.04em;
      opacity: 0.85;
    }
    .item-no-sell {
      font-family: var(--font-display);
      font-size: 0.32rem;
      color: var(--muted);
      margin-top: 0.5rem;
      letter-spacing: 0.04em;
    }
    @media (max-width: 600px) {
      .items-grid { grid-template-columns: 1fr; }
    }

'''

# Insert the new CSS before closing </style>
closing_style = '  </style>'
if closing_style in content:
    content = content.replace(closing_style, NEW_CSS + closing_style, 1)
    print("New CSS added")
else:
    print("Could not find </style>")

# ─── 2. Replace the old Items JS block ───────────────────────────────────────
old_js_marker = '// ═══════════════════════════════════════\n  // ITEMS VIEW\n  // ═══════════════════════════════════════'
old_js_end    = '    if (document.readyState === \'loading\') {\n      document.addEventListener(\'DOMContentLoaded\', hookItemsView);\n    } else {\n      hookItemsView();\n    }\n  })();'

start_js = content.find(old_js_marker)
end_js   = content.find(old_js_end, start_js)
if start_js >= 0 and end_js >= 0:
    content = content[:start_js] + content[end_js + len(old_js_end):]
    print("Old JS removed")
else:
    print(f"JS block not found: marker={start_js}, end={end_js}")

NEW_JS = r"""
  // ═══════════════════════════════════════════════════════════
  // ITEMS VIEW  (v2 – i18n + Spanish descriptions + better UI)
  // ═══════════════════════════════════════════════════════════
  (function() {
    'use strict';
    const ITEMS_PER_PAGE = 40;
    let itemsOffset = 0;
    let allItemIds  = [];
    let filteredIds = [];
    let activeCategory = '';
    let itemsSearchQuery = '';
    let isLoadingItems = false;
    let itemsCache = {};        // id -> parsed item object
    let allCategoryData = [];   // [{name, slug}]
    let itemsInitialized = false;

    // ── Category labels (ES / EN) ──────────────────────────
    const CAT_LABELS = {
      es: {
        'all':              '🌐 Todos',
        'stat-boosts':      '📈 Mejora estadísticas',
        'effort-drop':      '⬇️ Reducción esfuerzo',
        'medicine':         '💊 Medicina',
        'other':            '📦 Otros',
        'in-a-pinch':       '⚡ En apuros',
        'picky-healing':    '🍃 Curación selectiva',
        'type-protection':  '🛡️ Protección tipo',
        'baking-only':      '🍰 Mezclas',
        'collectibles':     '🏆 Coleccionables',
        'evolution':        '✨ Evolución',
        'spelunking':       '⛏️ Espeleología',
        'held-items':       '🤝 Objeto sostenido',
        'choice':           '🔒 Objeto elección',
        'effort-training':  '🏋️ Entrenamiento',
        'bad-held-items':   '💀 Objetos trampa',
        'training':         '📋 Entrenamiento',
        'plates':           '🎨 Placas',
        'species-specific': '🧬 Específico especie',
        'type-enhancement': '💎 Potenciador tipo',
        'event-items':      '🎉 Eventos',
        'gameplay':         '🎮 Juego',
        'flutes':           '🎵 Flautas',
        'all-mail':         '✉️ Correo',
        'vitamins':         '💉 Vitaminas',
        'healing':          '💊 Curación',
        'pp-recovery':      '🔵 Recuperar PP',
        'revival':          '🌟 Revivir',
        'status-cures':     '✅ Curar estado',
        'mulch':            '🌱 Abono',
        'dex-completion':   '📖 Pokédex',
        'loot':             '💰 Botín',
        'mega-stones':      '💎 Mega Piedras',
        'memories':         '🧠 Memorias',
        'z-crystals':       '💠 Cristales Z',
        'dynamax-crystals': '🔴 Dynamax',
        'nature-mints':     '🌿 Mentas',
        'poke-balls':       '🔴 Poké Balls',
        'all-machines':     '💿 MT/MO',
        'apricorn-balls':   '🌰 Bolas bellota',
        'apricorn-box':     '📦 Caja bellota',
        'data-cards':       '📉 Tarjetas datos',
        'jewels':           '💎 Joyas',
        'miracle-shooter':  '🎯 Inyección',
        'species-candies':  '🍬 Caramelos',
        'curry-ingredients':'🍛 Ingredientes',
        'sandwiches':       '🥪 Sándwiches',
        'tera-shards':      '💠 Astillas Tera',
        'tm-materials':     '📀 Materiales MT',
      },
      en: {
        'all':              '🌐 All',
        'stat-boosts':      '📈 Stat Boosts',
        'effort-drop':      '⬇️ Effort Drop',
        'medicine':         '💊 Medicine',
        'other':            '📦 Other',
        'in-a-pinch':       '⚡ In a Pinch',
        'picky-healing':    '🍃 Picky Healing',
        'type-protection':  '🛡️ Type Protection',
        'baking-only':      '🍰 Baking',
        'collectibles':     '🏆 Collectibles',
        'evolution':        '✨ Evolution',
        'spelunking':       '⛏️ Spelunking',
        'held-items':       '🤝 Held Items',
        'choice':           '🔒 Choice',
        'effort-training':  '🏋️ Effort Training',
        'bad-held-items':   '💀 Bad Held Items',
        'training':         '📋 Training',
        'plates':           '🎨 Plates',
        'species-specific': '🧬 Species Specific',
        'type-enhancement': '💎 Type Enhancement',
        'event-items':      '🎉 Event Items',
        'gameplay':         '🎮 Gameplay',
        'flutes':           '🎵 Flutes',
        'all-mail':         '✉️ Mail',
        'vitamins':         '💉 Vitamins',
        'healing':          '💊 Healing',
        'pp-recovery':      '🔵 PP Recovery',
        'revival':          '🌟 Revival',
        'status-cures':     '✅ Status Cures',
        'mulch':            '🌱 Mulch',
        'dex-completion':   '📖 Pokédex',
        'loot':             '💰 Loot',
        'mega-stones':      '💎 Mega Stones',
        'memories':         '🧠 Memories',
        'z-crystals':       '💠 Z-Crystals',
        'dynamax-crystals': '🔴 Dynamax',
        'nature-mints':     '🌿 Mints',
        'poke-balls':       '🔴 Poké Balls',
        'all-machines':     '💿 TM/HM',
        'apricorn-balls':   '🌰 Apricorn Balls',
        'apricorn-box':     '📦 Apricorn Box',
        'data-cards':       '📉 Data Cards',
        'jewels':           '💎 Jewels',
        'miracle-shooter':  '🎯 Miracle Shooter',
        'species-candies':  '🍬 Species Candies',
        'curry-ingredients':'🍛 Curry Ingredients',
        'sandwiches':       '🥪 Sandwiches',
        'tera-shards':      '💠 Tera Shards',
        'tm-materials':     '📀 TM Materials',
      }
    };

    // ── UI string helpers (hook into app i18n) ─────────────
    function getLang() {
      return (typeof currentLang !== 'undefined' ? currentLang : null) || 'es';
    }

    function getCatLabel(slug) {
      const lang = getLang();
      const tbl = CAT_LABELS[lang] || CAT_LABELS['es'];
      return tbl[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }

    // i18n strings for items section
    const ITEMS_I18N = {
      es: {
        title: '🎒 OBJETOS POKÉMON',
        subtitle: 'Explora la base de datos completa de objetos y descubre qué hace cada uno.',
        searchPlaceholder: '🔍 Buscar objeto...',
        showingLabel: 'Mostrando',
        objectsLabel: 'objetos',
        noResults: 'No se encontraron objetos.',
        loadMore: '↓ CARGAR MÁS',
        errorLoading: 'Error cargando objetos. Comprueba tu conexión.',
        noSell: 'No vendible',
        pokeDollars: 'PokéDólares',
        noDesc: 'Sin descripción disponible.',
      },
      en: {
        title: '🎒 POKÉMON ITEMS',
        subtitle: 'Browse the complete item database and discover what each one does.',
        searchPlaceholder: '🔍 Search item...',
        showingLabel: 'Showing',
        objectsLabel: 'items',
        noResults: 'No items found.',
        loadMore: '↓ LOAD MORE',
        errorLoading: 'Error loading items. Check your connection.',
        noSell: 'Not for sale',
        pokeDollars: 'PokéDollars',
        noDesc: 'No description available.',
      }
    };
    function t(key) {
      const lang = getLang();
      return (ITEMS_I18N[lang] || ITEMS_I18N['es'])[key] || ITEMS_I18N['es'][key] || key;
    }

    // ── Fetch with simple cache ────────────────────────────
    async function apiFetch(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    }

    async function fetchItem(id) {
      if (itemsCache[id]) return itemsCache[id];
      try {
        const d = await apiFetch(`https://pokeapi.co/api/v2/item/${id}`);
        const lang = getLang();
        const langCodes = lang === 'es' ? ['es', 'en'] : ['en', 'es'];

        // Name (localised)
        let localName = d.name;
        for (const lc of langCodes) {
          const entry = d.names?.find(n => n.language.name === lc);
          if (entry) { localName = entry.name; break; }
        }

        // Effect text (prefer lang, fall back to other lang, then short)
        let effect = '';
        for (const lc of langCodes) {
          const entry = d.effect_entries?.find(e => e.language.name === lc);
          if (entry && entry.effect) { effect = entry.effect; break; }
        }
        // Fallback: flavor text
        if (!effect) {
          for (const lc of langCodes) {
            const entry = d.flavor_text_entries?.find(e => e.language.name === lc);
            if (entry && entry.text) { effect = entry.text; break; }
          }
        }
        // Clean markdown-ish refs  
        effect = effect
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/\{\{[^}]+\}\}/g, '')
          .replace(/\s+/g, ' ')
          .trim();

        const item = {
          id,
          name: d.name,          // slug (for search)
          localName,
          sprite: d.sprites?.default,
          category: d.category?.name || '',
          cost: d.cost || 0,
          effect: effect || t('noDesc'),
        };
        itemsCache[id] = item;
        return item;
      } catch(e) {
        return null;
      }
    }

    // ── Render helpers ─────────────────────────────────────
    function renderSkeletons(n) {
      let html = '';
      for (let i = 0; i < n; i++) {
        html += `<div class="item-card" style="pointer-events:none;opacity:0.5">
          <div class="item-icon-wrap"><div style="width:38px;height:38px;border-radius:8px;background:rgba(255,255,255,0.06)"></div></div>
          <div class="item-info">
            <div class="skeleton-pulse" style="height:12px;width:60%;border-radius:6px;margin-bottom:6px;background:#111827"></div>
            <div class="skeleton-pulse" style="height:8px;width:35%;border-radius:6px;margin-bottom:8px;background:#111827"></div>
            <div class="skeleton-pulse" style="height:8px;width:90%;border-radius:6px;background:#111827"></div>
          </div>
        </div>`;
      }
      return html;
    }

    async function renderItems(reset = false) {
      if (isLoadingItems) return;
      isLoadingItems = true;

      const grid      = document.getElementById('items-grid');
      const loadWrap  = document.getElementById('items-load-more-wrap');
      const countEl   = document.getElementById('items-count');
      const countVal  = document.getElementById('items-count-val');
      const lang      = getLang();

      const page = filteredIds.slice(itemsOffset, itemsOffset + ITEMS_PER_PAGE);
      if (page.length === 0) {
        if (reset) grid.innerHTML = `<p style="color:var(--muted);text-align:center;padding:3rem;grid-column:1/-1">${t('noResults')}</p>`;
        loadWrap.style.display = 'none';
        isLoadingItems = false;
        return;
      }

      if (reset) grid.innerHTML = renderSkeletons(Math.min(page.length, 12));

      const items = await Promise.all(page.map(id => fetchItem(id)));
      const q = itemsSearchQuery.toLowerCase();

      // Re-fetch localised name for cached items when lang changes
      if (reset) grid.innerHTML = '';

      let added = 0;
      items.forEach((item, idx) => {
        if (!item) return;
        // Client-side search filter
        if (q) {
          const haystack = (item.localName + ' ' + item.name + ' ' + item.effect).toLowerCase();
          if (!haystack.includes(q)) return;
        }

        const card = document.createElement('div');
        card.className = 'item-card';
        card.style.setProperty('--i', added);

        const iconUrl = item.sprite ||
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
        const catLabel = getCatLabel(item.category);
        const costStr  = item.cost > 0
          ? `<div class="item-cost">💰 ${item.cost.toLocaleString()} ${t('pokeDollars')}</div>`
          : `<div class="item-no-sell">${t('noSell')}</div>`;

        card.innerHTML = `
          <div class="item-icon-wrap">
            <img src="${iconUrl}" alt="${item.localName}"
                 loading="lazy"
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
          </div>
          <div class="item-info">
            <div class="item-name">${item.localName}</div>
            ${item.category ? `<span class="item-category">${catLabel}</span>` : ''}
            <div class="item-effect">${item.effect}</div>
            ${costStr}
          </div>`;
        grid.appendChild(card);
        added++;
      });

      if (added === 0 && reset) {
        grid.innerHTML = `<p style="color:var(--muted);text-align:center;padding:3rem;grid-column:1/-1">${t('noResults')}</p>`;
      }

      // Update counter
      if (countEl) {
        countEl.style.display = 'block';
        if (countVal) countVal.textContent = filteredIds.length;
      }

      itemsOffset += ITEMS_PER_PAGE;
      loadWrap.style.display = itemsOffset < filteredIds.length ? 'block' : 'none';
      isLoadingItems = false;
    }

    // ── Category filter logic ──────────────────────────────
    async function applyCategory(slug) {
      activeCategory = slug;
      itemsOffset = 0;
      const grid = document.getElementById('items-grid');
      grid.innerHTML = renderSkeletons(12);

      if (slug === '' || slug === 'all') {
        filteredIds = [...allItemIds];
      } else {
        try {
          const d = await apiFetch(`https://pokeapi.co/api/v2/item-category/${slug}`);
          filteredIds = d.items.map(i => i.url.split('/').filter(Boolean).pop());
        } catch {
          filteredIds = [...allItemIds];
        }
      }
      await renderItems(true);
    }

    // ── Build category bar ─────────────────────────────────
    function buildCategoryBar() {
      const bar = document.getElementById('items-category-bar');
      if (!bar) return;
      bar.innerHTML = '';
      const cats = [
        { slug: '',                label: getCatLabel('all') },
        { slug: 'healing',         label: getCatLabel('healing') },
        { slug: 'medicine',        label: getCatLabel('medicine') },
        { slug: 'poke-balls',      label: getCatLabel('poke-balls') },
        { slug: 'held-items',      label: getCatLabel('held-items') },
        { slug: 'vitamins',        label: getCatLabel('vitamins') },
        { slug: 'evolution',       label: getCatLabel('evolution') },
        { slug: 'stat-boosts',     label: getCatLabel('stat-boosts') },
        { slug: 'type-enhancement',label: getCatLabel('type-enhancement') },
        { slug: 'mega-stones',     label: getCatLabel('mega-stones') },
        { slug: 'all-machines',    label: getCatLabel('all-machines') },
        { slug: 'berries',         label: '🫐 Bayas' },
        { slug: 'loot',            label: getCatLabel('loot') },
        { slug: 'collectibles',    label: getCatLabel('collectibles') },
        { slug: 'other',           label: getCatLabel('other') },
      ];

      cats.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = 'item-cat-pill' + (cat.slug === activeCategory ? ' active' : '');
        pill.textContent = cat.label;
        pill.dataset.cat = cat.slug;
        pill.addEventListener('click', () => {
          bar.querySelectorAll('.item-cat-pill').forEach(b => b.classList.remove('active'));
          pill.classList.add('active');
          applyCategory(cat.slug);
        });
        bar.appendChild(pill);
      });
    }

    // ── Update static UI text (for lang switch) ────────────
    function updateItemsUI() {
      const h2    = document.querySelector('#items-view h2');
      const sub   = document.querySelector('#items-view > p');
      const inp   = document.getElementById('items-search');
      const lmBtn = document.getElementById('items-load-more');
      if (h2)    h2.textContent = t('title');
      if (sub)   sub.textContent = t('subtitle');
      if (inp)   inp.placeholder = t('searchPlaceholder');
      if (lmBtn) lmBtn.textContent = t('loadMore');
      buildCategoryBar();
    }

    // ── Initial load ───────────────────────────────────────
    async function loadItemsView() {
      const grid = document.getElementById('items-grid');
      if (!grid) return;
      updateItemsUI();
      grid.innerHTML = renderSkeletons(12);
      try {
        const d = await apiFetch('https://pokeapi.co/api/v2/item?limit=2000&offset=0');
        allItemIds  = d.results.map(r => r.url.split('/').filter(Boolean).pop());
        filteredIds = [...allItemIds];
        await renderItems(true);
      } catch(e) {
        grid.innerHTML = `<p style="color:var(--red2);text-align:center;padding:3rem;grid-column:1/-1">${t('errorLoading')}</p>`;
      }
    }

    // ── Search ─────────────────────────────────────────────
    function initItemsSearch() {
      const inp = document.getElementById('items-search');
      if (!inp) return;
      let debounce;
      inp.addEventListener('input', () => {
        clearTimeout(debounce);
        debounce = setTimeout(async () => {
          itemsSearchQuery = inp.value.trim();
          itemsOffset = 0;
          await renderItems(true);
        }, 380);
      });
    }

    function initLoadMoreBtn() {
      const btn = document.getElementById('items-load-more');
      if (btn) btn.addEventListener('click', () => renderItems(false));
    }

    // ── Hook into the tab system ───────────────────────────
    function onItemsViewOpen() {
      if (!itemsInitialized) {
        itemsInitialized = true;
        initItemsSearch();
        initLoadMoreBtn();
        loadItemsView();
      }
    }

    // ── Intercept language changes ─────────────────────────
    // Monkey-patch the lang button clicks to also update items strings
    const _hookLangBtns = () => {
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          // Wait a tick for the app to update currentLang
          setTimeout(() => {
            if (document.getElementById('items-view')?.classList.contains('active')) {
              // Re-render with new language (clear cache so names update)
              itemsCache = {};
              itemsOffset = 0;
              filteredIds = [...allItemIds];
              activeCategory = '';
              updateItemsUI();
              renderItems(true);
            } else {
              // Just update static strings; render will happen on open
              updateItemsUI();
            }
          }, 80);
        });
      });
    };

    // ── Observe items-view activation (MutationObserver) ──
    function hookItemsView() {
      const btn = document.querySelector('.tab-btn[data-view="items"]');
      if (btn) btn.addEventListener('click', () => setTimeout(onItemsViewOpen, 80));

      const view = document.getElementById('items-view');
      if (view) {
        new MutationObserver(mutations => {
          mutations.forEach(m => {
            if (m.attributeName === 'class' && view.classList.contains('active')) {
              onItemsViewOpen();
            }
          });
        }).observe(view, { attributes: true });
      }
      _hookLangBtns();
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', hookItemsView);
    } else {
      hookItemsView();
    }
  })();
"""

# Insert before </script>
last_script_close = content.rfind('</script>')
if last_script_close >= 0:
    content = content[:last_script_close] + NEW_JS + content[last_script_close:]
    print("New JS added")
else:
    print("</script> not found!")

# ─── 3. Update static HTML text elements ──────────────────────────────────────
# Update the h2 and p in items-view to use JS-managed text (keep minimal, JS will overwrite)
# Already correct in HTML, JS updateItemsUI() will handle it.

with open(r'c:\Users\cfgm2smxa11\Documents\E\pokedex_v8.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("\nAll done! File saved.")
