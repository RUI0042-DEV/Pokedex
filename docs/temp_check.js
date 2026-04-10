
const API = 'https://pokeapi.co/api/v2';
const IMG       = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
const IMG_SHINY = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;
const IMG_SPRITE= id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const TYPE_COLORS = {
  normal:'#A8A878', fire:'#F08030', water:'#6890F0', electric:'#F8D030',
  grass:'#78C850', ice:'#98D8D8', fighting:'#C03028', poison:'#A040A0',
  ground:'#E0C068', flying:'#A890F0', psychic:'#F85888', bug:'#A8B820',
  rock:'#B8A038', ghost:'#705898', dragon:'#7038F8', dark:'#705848',
  steel:'#B8B8D0', fairy:'#EE99AC'
};
const STAT_COLORS = {
  hp:'#ff5959', attack:'#f5ac78', defense:'#fae078',
  'special-attack':'#9db7f5', 'special-defense':'#a7db8d', speed:'#fa92b2'
};
const STAT_NAMES = {
  hp:'HP', attack:'ATK', defense:'DEF',
  'special-attack':'SPA', 'special-defense':'SPD', speed:'SPE'
};

const I18N = {
  es: {
    appTitle: 'POKÉDEX — Enciclopedia Completa',
    strings: {
      'header.logo': 'POKÉDEX',
      'header.search': 'Buscar Pokémon...',
      'header.tab.dex': 'POKÉDEX',
      'header.tab.types': 'TIPOS',
      'header.tab.trivia': 'TRIVIA',
      'dex.loadMore': 'CARGAR MÁS',
      'types.title': 'TABLA DE TIPOS',
      'types.subtitle': 'Ventajas y desventajas de cada tipo en combate.',
      'types.weak': 'Débil a',
      'types.resist': 'Resiste',
      'types.immune': 'Inmune',
      'trivia.title': 'TRIVIA POKÉMON',
      'trivia.subtitle': '¿Cuánto sabes del mundo Pokémon? ¡Pon a prueba tus conocimientos!',
      'trivia.loading': 'Cargando pregunta...',
      'trivia.scoreLabel': 'Puntuación',
      'trivia.streakLabel': 'Racha',
      'trivia.next': 'SIGUIENTE ▶',
      'trivia.correct': '✅ ¡Correcto! +1 punto',
      'trivia.wrong': '❌ Incorrecto. Era: {answer}',
      'errors.noResults': 'No se encontraron Pokémon.',
      'errors.modal': 'Error al cargar datos.',
      'errors.fetch': 'No se pudo conectar a la PokéAPI. Comprueba tu conexión.',
      'moves.none': 'Sin datos de movimientos.',
      'evo.none': 'Este Pokémon no evoluciona.',
      'info.height': 'Altura',
      'info.weight': 'Peso',
      'info.abilities': 'Habilidades',
      'info.baseExp': 'Exp. Base',
      'info.generation': 'Generación',
      'info.capture': 'Captura',
      'info.happiness': 'Felicidad base',
      'info.eggGroups': 'Grupo huevo',
      'info.legendary': 'Legendario',
      'info.mythical': 'Mítico',
      'generic.yes': 'Sí',
      'generic.no': 'No',
      'tabs.info': 'INFO',
      'tabs.stats': 'STATS',
      'tabs.evo': 'EVOLUCIÓN',
      'tabs.moves': 'MOVIMIENTOS',
      'stats.totalLabel': 'TOTAL',
      'settings.title': 'AJUSTES',
      'settings.language': 'Idioma',
      'settings.theme': 'Tema',
      'settings.sound': 'Sonido',
      'settings.soundDesc': 'Click tipo Gameboy (mudo por defecto).',
      'themes.kanto': 'Kanto',
      'themes.silph': 'Silph',
      'themes.neo': 'Neo',
      'themes.lavender': 'Lavender',
      'themes.emerald': 'Emerald',
      'themes.gameboy': 'DMG'
    },
    stats: {
      hp:'PS', attack:'ATQ', defense:'DEF',
      'special-attack':'SPA', 'special-defense':'SPD', speed:'VEL'
    },
    types: {
      normal:'Normal', fire:'Fuego', water:'Agua', electric:'Eléctrico',
      grass:'Planta', ice:'Hielo', fighting:'Lucha', poison:'Veneno',
      ground:'Tierra', flying:'Volador', psychic:'Psíquico', bug:'Bicho',
      rock:'Roca', ghost:'Fantasma', dragon:'Dragón', dark:'Siniestro',
      steel:'Acero', fairy:'Hada'
    }
  },
  en: {
    appTitle: 'POKÉDEX — Complete Encyclopedia',
    strings: {
      'header.logo': 'POKÉDEX',
      'header.search': 'Search Pokémon...',
      'header.tab.dex': 'POKÉDEX',
      'header.tab.types': 'TYPES',
      'header.tab.trivia': 'TRIVIA',
      'dex.loadMore': 'LOAD MORE',
      'types.title': 'TYPE CHART',
      'types.subtitle': 'Advantages and disadvantages of each type in battle.',
      'types.weak': 'Weak to',
      'types.resist': 'Resists',
      'types.immune': 'Immune',
      'trivia.title': 'POKÉMON TRIVIA',
      'trivia.subtitle': 'How much do you know about the Pokémon world? Test yourself!',
      'trivia.loading': 'Loading question...',
      'trivia.scoreLabel': 'Score',
      'trivia.streakLabel': 'Streak',
      'trivia.next': 'NEXT ▶',
      'trivia.correct': '✅ Correct! +1 point',
      'trivia.wrong': '❌ Wrong. It was: {answer}',
      'errors.noResults': 'No Pokémon found.',
      'errors.modal': 'Error loading data.',
      'errors.fetch': 'Could not connect to PokéAPI. Check your connection.',
      'moves.none': 'No move data available.',
      'evo.none': 'This Pokémon does not evolve.',
      'info.height': 'Height',
      'info.weight': 'Weight',
      'info.abilities': 'Abilities',
      'info.baseExp': 'Base Exp.',
      'info.generation': 'Generation',
      'info.capture': 'Catch rate',
      'info.happiness': 'Base happiness',
      'info.eggGroups': 'Egg group',
      'info.legendary': 'Legendary',
      'info.mythical': 'Mythical',
      'generic.yes': 'Yes',
      'generic.no': 'No',
      'tabs.info': 'INFO',
      'tabs.stats': 'STATS',
      'tabs.evo': 'EVOLUTION',
      'tabs.moves': 'MOVES',
      'stats.totalLabel': 'TOTAL',
      'settings.title': 'SETTINGS',
      'settings.language': 'Language',
      'settings.theme': 'Theme',
      'settings.sound': 'Sound',
      'settings.soundDesc': 'Gameboy-style click (off by default).',
      'themes.kanto': 'Kanto',
      'themes.silph': 'Silph',
      'themes.neo': 'Neo',
      'themes.lavender': 'Lavender',
      'themes.emerald': 'Emerald',
      'themes.gameboy': 'DMG'
    },
    stats: {
      hp:'HP', attack:'ATK', defense:'DEF',
      'special-attack':'SPA', 'special-defense':'SPD', speed:'SPE'
    },
    types: {
      normal:'Normal', fire:'Fire', water:'Water', electric:'Electric',
      grass:'Grass', ice:'Ice', fighting:'Fighting', poison:'Poison',
      ground:'Ground', flying:'Flying', psychic:'Psychic', bug:'Bug',
      rock:'Rock', ghost:'Ghost', dragon:'Dragon', dark:'Dark',
      steel:'Steel', fairy:'Fairy'
    }
  },
  ca: {
    appTitle: 'POKÉDEX — Enciclopèdia Completa',
    strings: {
      'header.logo': 'POKÉDEX',
      'header.search': 'Cerca Pokémon...',
      'header.tab.dex': 'POKÉDEX',
      'header.tab.types': 'TIPUS',
      'header.tab.trivia': 'TRIVIA',
      'dex.loadMore': 'CARREGA MÉS',
      'types.title': 'TAULA DE TIPUS',
      'types.subtitle': 'Avantatges i desavantatges de cada tipus en combat.',
      'types.weak': 'Feble a',
      'types.resist': 'Resisteix',
      'types.immune': 'Immun',
      'trivia.title': 'TRIVIA POKÉMON',
      'trivia.subtitle': 'Quant saps del món Pokémon? Posa a prova els teus coneixements!',
      'trivia.loading': 'Carregant pregunta...',
      'trivia.scoreLabel': 'Puntuació',
      'trivia.streakLabel': 'Ràtxa',
      'trivia.next': 'SEGÜENT ▶',
      'trivia.correct': '✅ Correcte! +1 punt',
      'trivia.wrong': '❌ Incorrecte. Era: {answer}',
      'errors.noResults': 'No s\'han trobat Pokémon.',
      'errors.modal': 'Error en carregar dades.',
      'errors.fetch': 'No s\'ha pogut connectar amb la PokéAPI. Comprova la connexió.',
      'moves.none': 'Sense dades de moviments.',
      'evo.none': 'Aquest Pokémon no evoluciona.',
      'info.height': 'Alçada',
      'info.weight': 'Pes',
      'info.abilities': 'Habilitats',
      'info.baseExp': 'Exp. Base',
      'info.generation': 'Generació',
      'info.capture': 'Captura',
      'info.happiness': 'Felicitat base',
      'info.eggGroups': 'Grup ou',
      'info.legendary': 'Llegendari',
      'info.mythical': 'Mític',
      'generic.yes': 'Sí',
      'generic.no': 'No',
      'tabs.info': 'INFO',
      'tabs.stats': 'ESTATS',
      'tabs.evo': 'EVOLUCIÓ',
      'tabs.moves': 'MOVIMENTS',
      'stats.totalLabel': 'TOTAL',
      'settings.title': 'AJUSTOS',
      'settings.language': 'Idioma',
      'settings.theme': 'Tema',
      'settings.sound': 'So',
      'settings.soundDesc': 'Click tipus Gameboy (mut per defecte).',
      'themes.kanto': 'Kanto',
      'themes.silph': 'Silph',
      'themes.neo': 'Neo',
      'themes.lavender': 'Lavender',
      'themes.emerald': 'Emerald',
      'themes.gameboy': 'DMG'
    },
    stats: {
      hp:'PS', attack:'ATQ', defense:'DEF',
      'special-attack':'ATQ ESP', 'special-defense':'DEF ESP', speed:'VEL'
    },
    types: {
      normal:'Normal', fire:'Foc', water:'Aigua', electric:'Elèctric',
      grass:'Planta', ice:'Gel', fighting:'Lluita', poison:'Verí',
      ground:'Terra', flying:'Volador', psychic:'Psíquic', bug:'Insecte',
      rock:'Roca', ghost:'Fantasma', dragon:'Drac', dark:'Siniestre',
      steel:'Acer', fairy:'Fada'
    }
  }
};

const TRIVIA_QUESTIONS = {
  es: [
    { q:'¿Cuál es el Pokémon inicial de tipo fuego en la región de Kanto?', a:'Charmander', opts:['Bulbasaur','Squirtle','Charmander','Pikachu'] },
    { q:'¿Qué número en la Pokédex tiene Mewtwo?', a:'150', opts:['149','150','151','152'] },
    { q:'¿Cuántas regiones existen hasta la 8ª generación?', a:'8', opts:['6','7','8','9'] },
    { q:'¿Qué tipo tiene Snorlax?', a:'Normal', opts:['Normal','Psíquico','Agua','Lucha'] },
    { q:'¿Cuál es la evolución final de Bulbasaur?', a:'Venusaur', opts:['Ivysaur','Venusaur','Bayleef','Meganium'] },
    { q:'¿Qué movimiento nunca falla pero requiere recarga?', a:'Guillotina', opts:['Hiperrayo','Guillotina','Autodestrucción','Salpicadura'] },
    { q:'¿Qué tipo es efectivo x4 contra Flygon?', a:'Hielo', opts:['Fuego','Hielo','Dragón','Roca'] },
    { q:'¿Cuál es el Pokémon más pesado del juego?', a:'Cosmoem', opts:['Snorlax','Groudon','Cosmoem','Steelix'] },
    { q:'¿En qué generación se introdujeron las batallas dobles?', a:'3ª', opts:['2ª','3ª','4ª','5ª'] },
    { q:'¿Cuál es el ataque especial más potente del juego (base)?', a:'Explosión', opts:['Hiperrayo','Explosión','Erupción','V-Create'] }
  ],
  en: [
    { q:'Which is the fire-type starter in Kanto?', a:'Charmander', opts:['Bulbasaur','Squirtle','Charmander','Pikachu'] },
    { q:'What Pokédex number is Mewtwo?', a:'150', opts:['149','150','151','152'] },
    { q:'How many regions exist up to Gen 8?', a:'8', opts:['6','7','8','9'] },
    { q:'What type is Snorlax?', a:'Normal', opts:['Normal','Psychic','Water','Fighting'] },
    { q:'What is Bulbasaur’s final evolution?', a:'Venusaur', opts:['Ivysaur','Venusaur','Bayleef','Meganium'] },
    { q:'Which move never misses but needs recharge?', a:'Guillotine', opts:['Hyper Beam','Guillotine','Self-Destruct','Splash'] },
    { q:'Which type is 4x effective against Flygon?', a:'Ice', opts:['Fire','Ice','Dragon','Rock'] },
    { q:'Which is the heaviest Pokémon in the games?', a:'Cosmoem', opts:['Snorlax','Groudon','Cosmoem','Steelix'] },
    { q:'In which generation were double battles introduced?', a:'3rd', opts:['2nd','3rd','4th','5th'] },
    { q:'Which special move has the highest base power?', a:'Explosion', opts:['Hyper Beam','Explosion','Eruption','V-Create'] }
  ],
  ca: [
    { q:'Quin és l’inicial de foc a Kanto?', a:'Charmander', opts:['Bulbasaur','Squirtle','Charmander','Pikachu'] },
    { q:'Quin número de Pokédex té Mewtwo?', a:'150', opts:['149','150','151','152'] },
    { q:'Quantes regions hi ha fins a la 8a generació?', a:'8', opts:['6','7','8','9'] },
    { q:'De quin tipus és Snorlax?', a:'Normal', opts:['Normal','Psíquic','Aigua','Lluita'] },
    { q:'Quina és l’evolució final de Bulbasaur?', a:'Venusaur', opts:['Ivysaur','Venusaur','Bayleef','Meganium'] },
    { q:'Quin moviment no falla mai però requereix recàrrega?', a:'Guillotina', opts:['Hyper Beam','Guillotina','Self-Destruct','Splash'] },
    { q:'Quin tipus és x4 efectiu contra Flygon?', a:'Gel', opts:['Foc','Gel','Drac','Roca'] },
    { q:'Quin és el Pokémon més pesant del joc?', a:'Cosmoem', opts:['Snorlax','Groudon','Cosmoem','Steelix'] },
    { q:'En quina generació es van introduir els combats dobles?', a:'3a', opts:['2a','3a','4a','5a'] },
    { q:'Quin atac especial té la potència base més alta?', a:'Explosió', opts:['Hyper Beam','Explosió','Eruption','V-Create'] }
  ]
};

const STORAGE_KEYS = {
  LANG: 'pokedexLang',
  THEME: 'pokedexTheme',
  SOUND: 'pokedexSound',
  FAVS: 'pokedexFavs',
  RECENT: 'pokedexRecent',
  NOTE_PREFIX: 'pokedexNote_',
  COLLECTION: 'pokedexCollection',
  XP: 'trainerXP',
  ACHIEVEMENTS: 'achievements',
  WINS: 'battleWins',
  MODAL_OPENS: 'modalOpenCount',
  TRAINER_NAME: 'trainerName',
  MISSIONS: 'dailyMissions',
  TEAM: 'teamBuilderV6',
  NUZLOCKE: 'nuzlockeV6',
  DAILY_SEEN: 'dailyBannerSeen'
};

let currentLang = localStorage.getItem(STORAGE_KEYS.LANG) || 'es';
if (!I18N[currentLang]) currentLang = 'es';
let currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'kanto';
let soundEnabled = localStorage.getItem(STORAGE_KEYS.SOUND) === 'on';

function getString(key) {
  const table = I18N[currentLang] || I18N.es;
  const fallbackTable = I18N.es;
  return (table.strings && table.strings[key]) || (fallbackTable.strings && fallbackTable.strings[key]) || key;
}
function getStatLabel(key) {
  const table = I18N[currentLang] || I18N.es;
  return (table.stats && table.stats[key]) || STAT_NAMES[key] || key.toUpperCase();
}
function getTypeLabel(type) {
  const table = I18N[currentLang] || I18N.es;
  return (table.types && table.types[type]) || type;
}

function applyTranslations() {
  const table = I18N[currentLang] || I18N.es;
  document.documentElement.lang = currentLang;
  document.title = table.appTitle || 'POKÉDEX';
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    const val = getString(key);
    if (!val) return;
    const attr = el.dataset.i18nAttr;
    if (attr) {
      el.setAttribute(attr, val);
    } else {
      el.textContent = val;
    }
  });
  const scoreWrap = document.getElementById('trivia-score-wrap');
  if (scoreWrap) {
    scoreWrap.innerHTML = `
      <span data-key="trivia.scoreLabel">${getString('trivia.scoreLabel')}</span>: <span id="trivia-score-val">${triviaScore}</span> &nbsp;|&nbsp;
      <span data-key="trivia.streakLabel">${getString('trivia.streakLabel')}</span>: <span id="trivia-streak">${triviaStreak}</span> 🔥
    `;
  }
  document.querySelectorAll('.type-pill').forEach(btn => {
    const type = btn.dataset.type;
    if (!type) {
      btn.textContent = getString('filter.all') || 'Todos';
    } else {
      btn.textContent = getTypeLabel(type);
    }
  });
  document.querySelectorAll('.type-card-name span.type-name').forEach(span => {
    const type = span.dataset.type;
    span.textContent = getTypeLabel(type).toUpperCase();
  });
}

function setTheme(themeKey) {
  const body = document.body;
  body.classList.remove('theme-kanto','theme-silph','theme-neo','theme-lavender','theme-emerald','theme-gameboy');
  let cls = 'theme-kanto';
  if (themeKey === 'silph') cls = 'theme-silph';
  else if (themeKey === 'neo') cls = 'theme-neo';
  else if (themeKey === 'lavender') cls = 'theme-lavender';
  else if (themeKey === 'emerald') cls = 'theme-emerald';
  else if (themeKey === 'gameboy') cls = 'theme-gameboy';
  body.classList.add(cls);
  currentTheme = themeKey;
  localStorage.setItem(STORAGE_KEYS.THEME, themeKey);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === themeKey);
  });
}

function syncSettingsUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  setTheme(currentTheme);
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.classList.toggle('on', soundEnabled);
  soundToggle.setAttribute('aria-pressed', soundEnabled ? 'true' : 'false');
}

let audioCtx = null;
function playClick() {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  } catch {}
}

document.getElementById('sound-toggle').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem(STORAGE_KEYS.SOUND, soundEnabled ? 'on' : 'off');
  syncSettingsUI();
  playClick();
});

document.getElementById('settings-toggle').addEventListener('click', () => {
  document.getElementById('settings-overlay').classList.add('open');
  document.getElementById('settings-panel').classList.add('open');
  playClick();
});
document.getElementById('settings-close').addEventListener('click', () => {
  document.getElementById('settings-overlay').classList.remove('open');
  document.getElementById('settings-panel').classList.remove('open');
  playClick();
});
document.getElementById('settings-overlay').addEventListener('click', () => {
  document.getElementById('settings-overlay').classList.remove('open');
  document.getElementById('settings-panel').classList.remove('open');
});

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
    triviaIdx = [];
    triviaPos = 0;
    triviaActive = false;
    syncSettingsUI();
    applyTranslations();
    if (document.getElementById('trivia-view').classList.contains('active')) {
      initTrivia();
    }
    playClick();
  });
});

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    setTheme(theme);
    playClick();
  });
});

// Tab buttons initialized below after all views are set up

const pokeCache = new Map();
let allPokemon = [];
let displayed  = 0;
const PAGE     = 40;
const BATCH    = 10;
let filterType = '';
let searchQ    = '';
let shinyMode  = false;
let currentModalId = null;

function buildTypeFilter() {
  const wrap = document.getElementById('type-filter');
  const allBtn  = document.createElement('button');
  allBtn.className = 'type-pill active';
  allBtn.textContent = getString('filter.all') || 'Todos';
  allBtn.style.setProperty('--tc', '#888');
  allBtn.dataset.type = '';
  allBtn.addEventListener('click', () => {
    filterType = '';
    wrap.querySelectorAll('.type-pill').forEach(p => p.classList.remove('active'));
    allBtn.classList.add('active');
    applyFilters();
    playClick();
  });
  wrap.appendChild(allBtn);

  Object.entries(TYPE_COLORS).forEach(([type, color]) => {
    const btn = document.createElement('button');
    btn.className = 'type-pill t-' + type;
    btn.dataset.type = type;
    btn.textContent = getTypeLabel(type);
    btn.style.setProperty('--tc', color);
    btn.addEventListener('click', () => {
      filterType = filterType === type ? '' : type;
      wrap.querySelectorAll('.type-pill').forEach(p => p.classList.remove('active'));
      if (filterType) btn.classList.add('active'); else allBtn.classList.add('active');
      applyFilters();
      playClick();
    });
    wrap.appendChild(btn);
  });
}

function showSkeletonCards(count = PAGE) {
  const grid = document.getElementById('pokemon-grid');
  grid.innerHTML = '';
  const skeletonCount = Math.min(count, 24);
  for (let i = 0; i < skeletonCount; i++) {
    const card = document.createElement('div');
    card.className = 'poke-card skeleton';
    card.innerHTML = `
      <div class="skeleton-num skeleton-pulse"></div>
      <div class="poke-img-wrap">
        <div class="skeleton-circle skeleton-pulse"></div>
      </div>
      <div class="skeleton-name skeleton-pulse"></div>
      <div class="skeleton-types">
        <div class="skeleton-pill skeleton-pulse"></div>
        <div class="skeleton-pill skeleton-pulse"></div>
      </div>
    `;
    grid.appendChild(card);
  }
}

function renderCards(dataList, reset) {
  const grid = document.getElementById('pokemon-grid');
  if (reset) grid.innerHTML = '';

  if (dataList.length === 0) {
    grid.innerHTML = `<div class="error-msg">${getString('errors.noResults')}</div>`;
    return;
  }

  dataList.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'poke-card';
    card.style.setProperty('--i', idx % PAGE);
    card.style.setProperty('--tc', p.color);

    const typeBadges = p.types.map(t =>
      `<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'}">${getTypeLabel(t)}</span>`
    ).join('');

    card.innerHTML = `
      <div class="poke-num">#${String(p.id).padStart(4,'0')}</div>
      <div class="poke-img-wrap">
        <img class="poke-img"
          src="${IMG_SPRITE(p.id)}"
          data-hires="${IMG(p.id)}"
          loading="lazy"
          alt="${p.name}"
          style="image-rendering:pixelated"/>
      </div>
      <div class="poke-name">${p.name}</div>
      <div class="poke-types">${typeBadges}</div>
    `;
    const img = card.querySelector('img');
    const hi  = new Image();
    hi.onload = () => { img.src = hi.src; img.style.imageRendering = 'auto'; };
    hi.onerror = () => {};
    hi.src = IMG(p.id);
    card.addEventListener('click', () => {
      playClick();
      openModal(p.id);
    });
    grid.appendChild(card);
  });
}

function renderInstantSearch() {
  if (window.renderInstantSearch && window.renderInstantSearch !== renderInstantSearch) {
    window.renderInstantSearch();
    return;
  }
  const list = filteredList();
  const slice = list.slice(0, PAGE);
  const data = slice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, true);
  displayed = slice.length;
}

document.getElementById('search-input').addEventListener('input', e => {
  searchQ = e.target.value.trim().toLowerCase();
  renderInstantSearch();
});

document.getElementById('load-more').addEventListener('click', async () => {
  const list = filteredList();
  const nextSlice = list.slice(displayed, displayed + PAGE);
  if (nextSlice.length === 0) return;

  const uncached = nextSlice.filter(p => !pokeCache.has(p.id)).map(p => p.id);
  if (uncached.length) await fetchBatch(uncached);

  const data = nextSlice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, false);
  displayed += PAGE;
  playClick();
});

let radarAnimId = null;
function animateRadar(stats, primaryColor) {
  const svg = document.querySelector('#modal-stats .radar-svg');
  if (!svg) return;
  const poly = svg.querySelector('.radar-shape');
  const vertices = Array.from(svg.querySelectorAll('.radar-vertex'));
  if (!poly) return;
  const size = parseFloat(svg.getAttribute('data-size')) || 260;
  const center = size / 2;
  const radius = parseFloat(svg.getAttribute('data-radius')) || 90;
  const maxStat = parseFloat(svg.getAttribute('data-max')) || 180;
  const len = stats.length;
  const angleStep = (Math.PI * 2) / len;
  const start = performance.now();
  const duration = 550;
  if (radarAnimId) cancelAnimationFrame(radarAnimId);

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
    const pts = [];
    stats.forEach((s, i) => {
      const angle = -Math.PI / 2 + angleStep * i;
      const r = radius * Math.max(0, Math.min(1, s.value / maxStat)) * eased;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      const v = vertices[i];
      if (v) {
        v.setAttribute('cx', x.toFixed(1));
        v.setAttribute('cy', y.toFixed(1));
      }
    });
    poly.setAttribute('points', pts.join(' '));
    if (t < 1) {
      radarAnimId = requestAnimationFrame(frame);
    }
  }
  radarAnimId = requestAnimationFrame(frame);
}

function buildRadarSVG(stats, primaryColor) {
  const size = 260;
  const center = size / 2;
  const radius = 90;
  const levels = 3;
  const len = stats.length;
  const angleStep = (Math.PI * 2) / len;
  const maxStat = 180;

  function pointAtFull(index, scaleFactor = 1) {
    const angle = -Math.PI / 2 + angleStep * index;
    const r = radius * scaleFactor;
    return [
      center + r * Math.cos(angle),
      center + r * Math.sin(angle)
    ];
  }
  const grids = [];
  for (let l = 1; l <= levels; l++) {
    const sc = l / levels;
    const pts = [];
    for (let i = 0; i < len; i++) {
      const [x,y] = pointAtFull(i, sc);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    grids.push(`<polygon points="${pts.join(' ')}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`);
  }
  const axes = [];
  for (let i = 0; i < len; i++) {
    const [x,y] = pointAtFull(i, 1);
    axes.push(`<line x1="${center}" y1="${center}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>`);
  }
  const labels = [];
  for (let i = 0; i < len; i++) {
    const angle = -Math.PI / 2 + angleStep * i;
    const r = radius + 18;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    labels.push(`<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" fill="rgba(232,232,240,0.9)" font-size="9" text-anchor="middle" dominant-baseline="middle">${stats[i].label}</text>`);
  }
  const centerPoints = Array.from({length: len}, () => `${center},${center}`).join(' ');
  const vertices = stats.map((s,i) =>
    `<circle class="radar-vertex" data-index="${i}" data-value="${s.value}" r="3" cx="${center}" cy="${center}" fill="${STAT_COLORS[s.key] || primaryColor}">
      <title>${s.label}: ${s.value}</title>
    </circle>`
  ).join('');
  return `
<svg class="radar-svg" viewBox="0 0 ${size} ${size}" data-size="${size}" data-radius="${radius}" data-max="${maxStat}" role="img" aria-label="Distribución de estadísticas base">
  <g opacity="0.97">
    ${grids.join('')}
    ${axes.join('')}
    <polygon class="radar-shape" points="${centerPoints}" fill="${primaryColor}33" stroke="${primaryColor}" stroke-width="2"/>
    ${vertices}
    ${labels.join('')}
  </g>
</svg>`;
}

async function openModal(id) {
  currentModalId = id;
  shinyMode = false;
  document.getElementById('shiny-toggle').classList.remove('on');
  document.getElementById('modal-img').classList.remove('shiny-anim');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-img').src = IMG(id);
  document.getElementById('modal-num').textContent = '#' + String(id).padStart(4,'0');
  document.getElementById('modal-name').textContent = '...';
  document.getElementById('modal-types').innerHTML = '';
  document.getElementById('modal-info-grid').innerHTML = `<div class="loader">${getString('trivia.loading')}</div>`;
  document.getElementById('modal-stats').innerHTML = '';
  document.getElementById('evo-chain').innerHTML = '';
  document.getElementById('modal-moves').innerHTML = '';
  document.getElementById('modal-flavor').textContent = '';

  document.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.mtab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelector('.mtab[data-tab="info"]').classList.add('active');
  document.getElementById('tab-info').classList.add('active');

  try {
    const cached = pokeCache.get(id);
    const poke = (cached && cached.raw) ? cached.raw : await fetch(`${API}/pokemon/${id}`).then(r=>r.json());
    if (cached && !cached.raw) cached.raw = poke;
    const spec = await fetch(`${API}/pokemon-species/${id}`).then(r=>r.json()).catch(()=>null);

    const primary = poke.types[0].type.name;
    const col = TYPE_COLORS[primary] || '#888';

    document.getElementById('modal-header').style.background =
      `linear-gradient(135deg, ${col}22, ${col}08)`;
    document.getElementById('modal-bg-circle').style.background = col;
    document.getElementById('modal-name').textContent = poke.name;
    document.getElementById('modal-types').innerHTML = poke.types.map(t =>
      `<span class="type-badge t-${t.type.name}" style="--tc:${TYPE_COLORS[t.type.name]||'#888'}">${getTypeLabel(t.type.name)}</span>`
    ).join('');

    if (spec) {
      const flavor =
        spec.flavor_text_entries.find(e=>e.language.name===currentLang) ||
        spec.flavor_text_entries.find(e=>e.language.name==='es') ||
        spec.flavor_text_entries.find(e=>e.language.name==='en');
      if (flavor) {
        document.getElementById('modal-flavor').textContent =
          flavor.flavor_text.replace(/\f/g,' ').replace(/\n/g,' ');
      }
    }

    document.getElementById('modal-info-grid').innerHTML = `
      <div class="info-item"><div class="info-label">${getString('info.height')}</div><div class="info-val">${(poke.height/10).toFixed(1)} m</div></div>
      <div class="info-item"><div class="info-label">${getString('info.weight')}</div><div class="info-val">${(poke.weight/10).toFixed(1)} kg</div></div>
      <div class="info-item"><div class="info-label">${getString('info.abilities')}</div><div class="info-val" style="font-size:0.8rem">${poke.abilities.map(a=>a.ability.name).join(', ')}</div></div>
      <div class="info-item"><div class="info-label">${getString('info.baseExp')}</div><div class="info-val">${poke.base_experience || '?'}</div></div>
      ${spec ? `
        <div class="info-item"><div class="info-label">${getString('info.generation')}</div><div class="info-val">${spec.generation.name.replace('generation-','Gen ').toUpperCase()}</div></div>
        <div class="info-item"><div class="info-label">${getString('info.capture')}</div><div class="info-val">${spec.capture_rate} / 255</div></div>
        <div class="info-item"><div class="info-label">${getString('info.happiness')}</div><div class="info-val">${spec.base_happiness ?? '?'}</div></div>
        <div class="info-item"><div class="info-label">${getString('info.eggGroups')}</div><div class="info-val" style="font-size:0.8rem">${spec.egg_groups.map(e=>e.name).join(', ')}</div></div>
        <div class="info-item"><div class="info-label">${getString('info.legendary')}</div><div class="info-val">${spec.is_legendary?`⭐ ${getString('generic.yes')}`:getString('generic.no')}</div></div>
        <div class="info-item"><div class="info-label">${getString('info.mythical')}</div><div class="info-val">${spec.is_mythical?`🌟 ${getString('generic.yes')}`:getString('generic.no')}</div></div>
        <div class="info-item"><div class="info-label">🏠 Hábitat</div><div class="info-val">${spec.habitat ? spec.habitat.name.replace(/-/g,' ') : 'Desconocido'}</div></div>
        <div class="info-item"><div class="info-label">🎨 Color</div><div class="info-val" style="text-transform:capitalize">${spec.color ? spec.color.name : '?'}</div></div>
        <div class="info-item"><div class="info-label">📐 Forma</div><div class="info-val" style="text-transform:capitalize">${spec.shape ? spec.shape.name : '?'}</div></div>
        <div class="info-item"><div class="info-label">♀♂ Ratio Género</div><div class="info-val">${spec.gender_rate === -1 ? 'Sin género' : spec.gender_rate === 0 ? '100% ♂' : spec.gender_rate === 8 ? '100% ♀' : `${((8 - spec.gender_rate)/8*100).toFixed(0)}% ♂ / ${(spec.gender_rate/8*100).toFixed(0)}% ♀`}</div></div>
        <div class="info-item"><div class="info-label">🌍 Tasa Crecimiento</div><div class="info-val" style="font-size:0.75rem;text-transform:capitalize">${spec.growth_rate ? spec.growth_rate.name.replace(/-/g,' ') : '?'}</div></div>
      ` : ''}
    `;

    const orderedKeys = ['hp','attack','defense','special-attack','special-defense','speed'];
    const statsOrdered = orderedKeys.map(key => {
      const found = poke.stats.find(s => s.stat.name === key);
      return {
        key,
        label: getStatLabel(key),
        value: found ? found.base_stat : 0
      };
    });
    const total = statsOrdered.reduce((s,x)=>s+x.value,0);
    const radarSvg = buildRadarSVG(statsOrdered, col);

    document.getElementById('modal-stats').innerHTML = `
      <div class="stats-layout">
        <div class="radar-wrap">
          ${radarSvg}
        </div>
        <div class="stats-legend">
          ${statsOrdered.map(s => {
            const c = STAT_COLORS[s.key] || col;
            return `
              <div class="stat-legend-item">
                <div class="stat-legend-left">
                  <span class="stat-dot" style="background:${c}"></span>
                  <span>${s.label}</span>
                </div>
                <span class="stat-legend-val">${s.value}</span>
              </div>
            `;
          }).join('')}
          <div class="stat-total">${getString('stats.totalLabel')}: <span>${total}</span></div>
        </div>
      </div>
    `;
    animateRadar(statsOrdered, col);

    // --- MOVES: fetch detailed data from API with Spanish names ---
    const movesGrid = document.getElementById('modal-moves');
    movesGrid.innerHTML = `
      <div class="moves-filter-bar" id="moves-filter-bar">
        <button class="moves-filter-btn active" data-mf="all">Todos</button>
        <button class="moves-filter-btn" data-mf="physical">⚔️ Físico</button>
        <button class="moves-filter-btn" data-mf="special">🔮 Especial</button>
        <button class="moves-filter-btn" data-mf="status">⚡ Estado</button>
      </div>
      <div id="moves-list">${Array(6).fill('<div class="move-skeleton"></div>').join('')}</div>
    `;

    // Filter event listeners
    movesGrid.querySelectorAll('.moves-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        movesGrid.querySelectorAll('.moves-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.mf;
        movesGrid.querySelectorAll('.move-card').forEach(card => {
          card.style.display = (filter === 'all' || card.dataset.dclass === filter) ? '' : 'none';
        });
        playClick();
      });
    });

    const levelMoves = poke.moves
      .filter(m => m.version_group_details.some(v => v.move_learn_method.name === 'level-up'))
      .slice(0, 20);

    if (!levelMoves.length) {
      document.getElementById('moves-list').innerHTML = `<p style="color:var(--muted);padding:1rem">${getString('moves.none')}</p>`;
    } else {
      const CLASS_LABEL = { physical: '⚔️ Físico', special: '🔮 Especial', status: '⚡ Estado' };
      const movePromises = levelMoves.map(m =>
        fetch(`${API}/move/${m.move.name}`).then(r => r.json()).catch(() => null)
      );
      Promise.all(movePromises).then(moveDataArr => {
        const movesList = document.getElementById('moves-list');
        if (!movesList) return;
        movesList.innerHTML = '';
        moveDataArr.forEach(md => {
          if (!md) return;
          const esName = md.names?.find(n => n.language.name === 'es')?.name || md.name.replace(/-/g,' ');
          let esDesc = md.flavor_text_entries?.find(f => f.language.name === 'es')?.flavor_text || '';
          if (!esDesc) {
            const esEffect = md.effect_entries?.find(e => e.language.name === 'es');
            if (esEffect) esDesc = esEffect.short_effect || esEffect.effect || '';
          }
          if (!esDesc) {
            const enEffect = md.effect_entries?.find(e => e.language.name === 'en');
            if (enEffect?.short_effect) {
              esDesc = enEffect.short_effect
                .replace(/\$effect_chance%/g, (md.effect_chance || '?') + '%')
                .replace(/Inflicts/gi, 'Inflige')
                .replace(/regular damage/gi, 'daño normal')
                .replace(/Has a /gi, 'Tiene un ')
                .replace(/Has an /gi, 'Tiene un ')
                .replace(/ chance /gi, ' probabilidad ')
                .replace(/ of /gi, ' de ')
                .replace(/the target/gi, 'al objetivo')
                .replace(/the user/gi, 'el usuario')
                .replace(/User /gi, 'El usuario ')
                .replace(/ faints/gi, ' se debilita')
                .replace(/ restores/gi, ' restaura')
                .replace(/ raises/gi, ' sube')
                .replace(/ lowers/gi, ' baja')
                .replace(/ attack/gi, ' ataque')
                .replace(/ defense/gi, ' defensa')
                .replace(/ speed/gi, ' velocidad')
                .replace(/by one stage/gi, 'en 1 nivel')
                .replace(/by two stages/gi, 'en 2 niveles')
                .replace(/ hits /gi, ' golpea ')
                .replace(/ times/gi, ' veces')
                .replace(/in one turn/gi, 'en un turno')
                .replace(/ HP/g, ' PS');
            }
          }
          if (!esDesc) {
            esDesc = md.flavor_text_entries?.find(f => f.language.name === 'en')?.flavor_text || '';
          }
          const moveType = md.type?.name || 'normal';
          const moveColor = TYPE_COLORS[moveType] || '#888';
          const dclass = md.damage_class?.name || 'status';
          const power = md.power || '—';
          const accuracy = md.accuracy || '—';
          const pp = md.pp || '—';
          const minHits = md.meta?.min_hits;
          const maxHits = md.meta?.max_hits;
          let hitsLabel = '';
          if (minHits && maxHits && maxHits > 1) {
            hitsLabel = minHits === maxHits
              ? ` &nbsp; 🔁 Golpes: <span>${minHits}x</span>`
              : ` &nbsp; 🔁 Golpes: <span>${minHits}-${maxHits}x</span>`;
          }
          const priority = md.priority;
          let prioLabel = '';
          if (priority > 0) prioLabel = ` &nbsp; ⚡ Prioridad: <span>+${priority}</span>`;
          else if (priority < 0) prioLabel = ` &nbsp; 🐢 Prioridad: <span>${priority}</span>`;

          const card = document.createElement('div');
          card.className = 'move-card';
          card.dataset.dclass = dclass;
          card.style.setProperty('--move-tc', moveColor);
          card.innerHTML = `
            <div class="move-card-header">
              <span class="move-card-name">${esName}</span>
              <span class="type-badge" style="--tc:${moveColor};font-size:0.55rem;padding:2px 6px">${getTypeLabel(moveType)}</span>
              <span class="move-card-class ${dclass}">${CLASS_LABEL[dclass] || dclass}</span>
            </div>
            <div class="move-card-stats">
              💥 Potencia: <span>${power}</span> &nbsp;
              🎯 Precisión: <span>${accuracy === '—' ? '—' : accuracy + '%'}</span> &nbsp;
              🔄 PP: <span>${pp}</span>${hitsLabel}${prioLabel}
            </div>
            ${esDesc ? `<div class="move-card-desc">${esDesc.replace(/\n/g,' ')}</div>` : ''}
          `;
          movesList.appendChild(card);
        });
        if (!movesList.children.length) {
          movesList.innerHTML = `<p style="color:var(--muted);padding:1rem">${getString('moves.none')}</p>`;
        }
      });
    }

    if (spec?.evolution_chain?.url) {
      fetch(spec.evolution_chain.url).then(r=>r.json()).then(evo => {
        renderEvoChain(evo.chain, id);
      }).catch(()=>{});
    }

  } catch(e) {
    document.getElementById('modal-info-grid').innerHTML =
      `<div class="error-msg">${getString('errors.modal')}</div>`;
  }
}

function renderEvoChain(chain, currentId) {
  const wrap = document.getElementById('evo-chain');
  wrap.innerHTML = '';

  // Flatten ALL evolution branches (supports Eevee etc.)
  function extractAllBranches(node) {
    const id = parseInt(node.species.url.split('/').slice(-2)[0]);
    const current = { id, name: node.species.name, details: node.evolution_details[0] || null };
    if (!node.evolves_to.length) return [[current]];
    const branches = [];
    node.evolves_to.forEach(child => {
      const childBranches = extractAllBranches(child);
      childBranches.forEach(branch => branches.push([current, ...branch]));
    });
    return branches;
  }

  const allBranches = extractAllBranches(chain);

  // De-duplicate: if all branches share the same linear path, show once
  const uniqueStepIds = new Set();
  const allSteps = [];
  allBranches.forEach(branch => branch.forEach(s => {
    if (!uniqueStepIds.has(s.id)) { uniqueStepIds.add(s.id); allSteps.push(s); }
  }));

  // If linear (3 or fewer), render normally. If branched, render base + arrows to all evos
  const isLinear = allBranches.length <= 1;
  const stepsToRender = isLinear ? (allBranches[0] || []) : allSteps;

  if (isLinear) {
    stepsToRender.forEach((step, i) => {
      if (i > 0) {
        const arr = document.createElement('div');
        arr.className = 'evo-arrow';
        const det = step.details;
        let label = '';
        if (det) {
          if (det.min_level) label = `Nv.${det.min_level}`;
          else if (det.item) label = det.item.name;
          else if (det.min_happiness) label = `❤️ ${det.min_happiness}`;
          else if (det.trigger?.name) label = det.trigger.name;
        }
        arr.innerHTML = `<span>→</span>${label?`<small>${label}</small>`:''}`;
        wrap.appendChild(arr);
      }
      wrap.appendChild(makeEvoStepEl(step, currentId));
    });
  } else {
    // Branched: show base, then arrow, then all evolutions grouped
    const base = allBranches[0][0];
    wrap.appendChild(makeEvoStepEl(base, currentId));
    const arrow = document.createElement('div');
    arrow.className = 'evo-arrow';
    arrow.innerHTML = `<span>→</span>`;
    wrap.appendChild(arrow);
    // Collect unique evolutions (skip base)
    const evoSet = new Set();
    allBranches.forEach(branch => {
      branch.slice(1).forEach(step => {
        if (!evoSet.has(step.id)) {
          evoSet.add(step.id);
          wrap.appendChild(makeEvoStepEl(step, currentId));
        }
      });
    });
  }

  if (uniqueStepIds.size < 2) {
    wrap.innerHTML = `<p style="color:var(--muted);text-align:center;padding:1rem">${getString('evo.none')}</p>`;
  }
}

function makeEvoStepEl(step, currentId) {
  const div = document.createElement('div');
  div.className = 'evo-step' + (step.id === currentId ? ' current' : '');
  div.innerHTML = `
    <img src="${IMG(step.id)}" alt="${step.name}"
      onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${step.id}.png'"/>
    <span>${step.name}</span>
    <span style="font-size:0.6rem;color:var(--muted)">#${String(step.id).padStart(4,'0')}</span>
  `;
  div.addEventListener('click', () => { closeModal(); playClick(); openModal(step.id); });
  return div;
}

document.querySelectorAll('.mtab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mtab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.mtab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    playClick();
  });
});

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', () => { closeModal(); playClick(); });
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) { closeModal(); }
});

async function fetchWithRetry(url, retries = 2, delay = 1000) {
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response;
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, delay * (i + 1)));
    }
  }
}

async function fetchPoke(id) {
  if (pokeCache.has(id)) return pokeCache.get(id);
  try {
    const res  = await fetch(`${API}/pokemon/${id}`);
    if (!res.ok) throw new Error('not ok');
    const data = await res.json();
    const primary = data.types[0].type.name;
    const entry = {
      id: data.id,
      name: data.name,
      types: data.types.map(t => t.type.name),
      color: TYPE_COLORS[primary] || '#888',
      raw: data
    };
    pokeCache.set(id, entry);
    return entry;
  } catch {
    return null;
  }
}

async function fetchBatch(ids) {
  const results = [];
  for (let i = 0; i < ids.length; i += BATCH) {
    const chunk = ids.slice(i, i + BATCH);
    const batch = await Promise.all(chunk.map(id => fetchPoke(id)));
    results.push(...batch);
  }
  return results.filter(Boolean);
}

async function fetchList() {
  const res  = await fetch(`${API}/pokemon?limit=1025`);
  const data = await res.json();
  allPokemon = data.results.map((p, i) => ({ name: p.name, id: i + 1 }));

  buildTypeFilter();

  const firstIds = allPokemon.slice(0, PAGE).map(p => p.id);
  const firstData = await fetchBatch(firstIds);

  renderCards(firstData, true);
  displayed = PAGE;
  if (typeof updateDexCount === 'function') updateDexCount();

  prefetchRest(PAGE);
}

async function prefetchRest(from) {
  const ids = allPokemon.slice(from).map(p => p.id);
  for (let i = 0; i < ids.length; i += BATCH) {
    const chunk = ids.slice(i, i + BATCH);
    await Promise.all(chunk.map(id => fetchPoke(id)));
    await new Promise(r => setTimeout(r, 60));
  }
}

function filteredList() {
  let list = allPokemon;
  if (searchQ) {
    const q = searchQ.toLowerCase();
    list = list.filter(p => p.name.includes(q) || String(p.id).includes(q));
  }
  if (filterType) {
    list = list.filter(p => {
      const cached = pokeCache.get(p.id);
      return cached && cached.types.includes(filterType);
    });
  }
  return list;
}

async function applyFilters() {
  displayed = 0;
  showSkeletonCards();
  if (filterType) {
    const uncached = allPokemon.filter(p => !pokeCache.has(p.id)).map(p => p.id);
    if (uncached.length > 0) {
      for (let i = 0; i < uncached.length; i += BATCH) {
        await Promise.all(uncached.slice(i, i + BATCH).map(id => fetchPoke(id)));
        await new Promise(r => setTimeout(r, 10));
      }
    }
  }
  const list  = filteredList();
  const slice = list.slice(0, PAGE);
  const data  = slice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, true);
  displayed = PAGE;
}

const TYPE_RELATIONS = {
  normal:   { weak:['fighting'], immune:['ghost'] },
  fire:     { weak:['water','ground','rock'], resist:['fire','grass','ice','bug','steel','fairy'] },
  water:    { weak:['electric','grass'], resist:['fire','water','ice','steel'] },
  electric: { weak:['ground'], resist:['electric','flying','steel'] },
  grass:    { weak:['fire','ice','poison','flying','bug'], resist:['water','electric','grass','ground'] },
  ice:      { weak:['fire','fighting','rock','steel'], resist:['ice'] },
  fighting: { weak:['flying','psychic','fairy'], resist:['rock','bug','dark'] },
  poison:   { weak:['ground','psychic'], resist:['grass','fighting','poison','bug','fairy'] },
  ground:   { weak:['water','grass','ice'], resist:['poison','rock'], immune:['electric'] },
  flying:   { weak:['electric','ice','rock'], resist:['grass','fighting','bug'], immune:['ground'] },
  psychic:  { weak:['bug','ghost','dark'], resist:['fighting','psychic'] },
  bug:      { weak:['fire','flying','rock'], resist:['grass','fighting','ground'] },
  rock:     { weak:['water','grass','fighting','ground','steel'], resist:['normal','fire','poison','flying'] },
  ghost:    { weak:['ghost','dark'], immune:['normal','fighting'] },
  dragon:   { weak:['ice','dragon','fairy'], resist:['fire','water','electric','grass'] },
  dark:     { weak:['fighting','bug','fairy'], resist:['ghost','dark'], immune:['psychic'] },
  steel:    { weak:['fire','fighting','ground'], resist:['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'] },
  fairy:    { weak:['poison','steel'], resist:['fighting','bug','dark'], immune:['dragon'] }
};

let typeChartRendered = false;
let tcViewMode = 'matrix';
let tcSelectedType = '';

function renderTypeChart() {
  if (typeChartRendered) return;
  typeChartRendered = true;

  // Build type selector pills
  const selector = document.getElementById('tc-type-selector');
  if (selector) {
    const ALL_TYPES = Object.keys(TYPE_RELATIONS);
    selector.innerHTML = `<button class="tc-type-pill active" data-tctype="" style="--tc:var(--muted)">TODOS</button>` +
      ALL_TYPES.map(t => `<button class="tc-type-pill" data-tctype="${t}" style="--tc:${TYPE_COLORS[t]||'#888'}">${getTypeLabel(t)}</button>`).join('');
    selector.querySelectorAll('.tc-type-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        selector.querySelectorAll('.tc-type-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        tcSelectedType = pill.dataset.tctype;
        updateTypeChartHighlight();
        playClick();
      });
    });
  }

  // View toggle
  document.querySelectorAll('.tc-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tc-view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tcViewMode = btn.dataset.tcview;
      renderTypeChartContent();
      playClick();
    });
  });

  renderTypeChartContent();
}

function renderTypeChartContent() {
  const wrap = document.getElementById('type-chart');
  if (!wrap) return;
  if (tcViewMode === 'matrix') renderTypeMatrix(wrap);
  else renderTypeCards(wrap);
}

function getTypeEffectiveness(atkType, defType) {
  const rel = TYPE_RELATIONS[defType];
  if (!rel) return 1;
  if (rel.immune?.includes(atkType)) return 0;
  if (rel.weak?.includes(atkType)) return 2;
  if (rel.resist?.includes(atkType)) return 0.5;
  return 1;
}

function renderTypeMatrix(wrap) {
  const ALL_TYPES = Object.keys(TYPE_RELATIONS);

  let html = `
    <div class="tc-matrix-labels">
      <span>← ATACANTE (filas)</span>
      <span>DEFENSOR (columnas) ↓</span>
    </div>
    <div class="tc-matrix-wrap">
    <table class="tc-matrix" id="tc-matrix-table">
    <thead><tr>
      <th class="tc-corner">⚔️ ATK →<br>🛡️ DEF ↓</th>
      ${ALL_TYPES.map(t => {
        const col = TYPE_COLORS[t] || '#888';
        return `<th class="tc-col-head" data-type="${t}" style="background:${col}22;color:${col}">${getTypeLabel(t).slice(0,3).toUpperCase()}</th>`;
      }).join('')}
    </tr></thead>
    <tbody>`;

  ALL_TYPES.forEach(atkType => {
    const col = TYPE_COLORS[atkType] || '#888';
    html += `<tr data-atktype="${atkType}">`;
    html += `<th class="tc-row-head" data-type="${atkType}" style="background:${col}22;color:${col}">${getTypeLabel(atkType).toUpperCase()}</th>`;
    ALL_TYPES.forEach(defType => {
      const eff = getTypeEffectiveness(atkType, defType);
      let cls, label;
      if (eff === 0)    { cls = 'tc-eff-0';  label = '0'; }
      else if (eff === 0.25) { cls = 'tc-eff-025'; label = '¼'; }
      else if (eff === 0.5)  { cls = 'tc-eff-05';  label = '½'; }
      else if (eff === 1)    { cls = 'tc-eff-1';   label = ''; }
      else if (eff === 2)    { cls = 'tc-eff-2';   label = '2'; }
      else if (eff >= 4)     { cls = 'tc-eff-4';   label = '4'; }
      else                   { cls = 'tc-eff-1';   label = ''; }
      html += `<td class="${cls}" data-atktype="${atkType}" data-deftype="${defType}" title="${getTypeLabel(atkType)} → ${getTypeLabel(defType)}: ×${eff}">${label}</td>`;
    });
    html += `</tr>`;
  });

  html += `</tbody></table></div>
    <div class="tc-legend">
      <span style="font-size:0.68rem;color:var(--text)">LEYENDA:</span>
      <div class="tc-legend-item"><span class="tc-legend-swatch" style="background:#4caf50"></span> ×2 Super efectivo</div>
      <div class="tc-legend-item"><span class="tc-legend-swatch" style="background:#c62828"></span> ×½ No muy efectivo</div>
      <div class="tc-legend-item"><span class="tc-legend-swatch" style="background:#111;border:1px solid #333"></span> ×0 Inmune</div>
      <div class="tc-legend-item"><span class="tc-legend-swatch" style="background:var(--card)"></span> ×1 Normal</div>
    </div>`;

  wrap.innerHTML = html;
  updateTypeChartHighlight();
}

function updateTypeChartHighlight() {
  const table = document.getElementById('tc-matrix-table');
  if (!table) return;

  if (!tcSelectedType) {
    table.classList.remove('filtered');
    table.querySelectorAll('tr').forEach(r => r.classList.remove('tc-highlight-row'));
    table.querySelectorAll('td, th').forEach(c => c.classList.remove('tc-highlight-col'));
    return;
  }

  table.classList.add('filtered');
  // Highlight the attacker row
  table.querySelectorAll('tr').forEach(r => {
    r.classList.toggle('tc-highlight-row', r.dataset.atktype === tcSelectedType);
  });
  // Highlight the defender column
  table.querySelectorAll('td, th').forEach(el => {
    el.classList.toggle('tc-highlight-col', el.dataset.deftype === tcSelectedType || el.dataset.type === tcSelectedType);
  });
  // Also highlight the header row for selected type
  table.querySelectorAll('thead th').forEach(th => {
    th.classList.toggle('tc-highlight-col', th.dataset.type === tcSelectedType);
  });
}

function renderTypeCards(wrap) {
  const ALL_TYPES = Object.keys(TYPE_RELATIONS);
  const filterType = tcSelectedType;
  const typesToShow = filterType ? [filterType] : ALL_TYPES;

  let html = '<div class="tc-cards-grid">';
  typesToShow.forEach(type => {
    const rel = TYPE_RELATIONS[type];
    const col = TYPE_COLORS[type] || '#888';

    // Offensive: what does this type hit super effectively / not effectively?
    const offSuper = ALL_TYPES.filter(def => getTypeEffectiveness(type, def) >= 2);
    const offWeak  = ALL_TYPES.filter(def => getTypeEffectiveness(type, def) === 0.5);
    const offNone  = ALL_TYPES.filter(def => getTypeEffectiveness(type, def) === 0);

    html += `
    <div class="type-card" style="--tc:${col}">
      <div class="type-card-name"><div class="dot"></div><span>${getTypeLabel(type).toUpperCase()}</span></div>
      <div class="type-card-sections">
        <div class="type-card-col">
          <h4>🛡️ DEFENSA (recibe)</h4>
          <div class="type-relations">
            ${rel.weak?.length ? `<div class="type-rel-row">
              <span class="rel-label">Débil a:</span>
              ${rel.weak.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'}">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#4caf50;color:#fff">×2</span></span>`).join('')}
            </div>` : ''}
            ${rel.resist?.length ? `<div class="type-rel-row">
              <span class="rel-label">Resiste:</span>
              ${rel.resist.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};opacity:0.8">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#c62828;color:#fff">×½</span></span>`).join('')}
            </div>` : ''}
            ${rel.immune?.length ? `<div class="type-rel-row">
              <span class="rel-label">Inmune a:</span>
              ${rel.immune.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};opacity:0.6">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#333;color:#888">×0</span></span>`).join('')}
            </div>` : ''}
          </div>
        </div>
        <div class="type-card-col">
          <h4>⚔️ ATAQUE (inflige)</h4>
          <div class="type-relations">
            ${offSuper.length ? `<div class="type-rel-row">
              <span class="rel-label">Super vs:</span>
              ${offSuper.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'}">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#4caf50;color:#fff">×2</span></span>`).join('')}
            </div>` : ''}
            ${offWeak.length ? `<div class="type-rel-row">
              <span class="rel-label">Débil vs:</span>
              ${offWeak.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};opacity:0.8">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#c62828;color:#fff">×½</span></span>`).join('')}
            </div>` : ''}
            ${offNone.length ? `<div class="type-rel-row">
              <span class="rel-label">Sin efecto:</span>
              ${offNone.map(t=>`<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};opacity:0.6">${getTypeLabel(t)}<span class="tc-mult-badge" style="background:#333;color:#888">×0</span></span>`).join('')}
            </div>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });
  html += '</div>';
  wrap.innerHTML = html;
}

let triviaIdx = [];
let triviaPos = 0;
let triviaScore = 0;
let triviaStreak = 0;
let triviaActive = false;

function initTrivia() {
  const list = TRIVIA_QUESTIONS[currentLang] || TRIVIA_QUESTIONS.es;
  if (!list.length) return;
  if (triviaIdx.length && triviaPos < triviaIdx.length) return;
  triviaIdx = [...list.keys()].sort(()=>Math.random()-0.5);
  triviaPos = 0;
  loadTrivia();
}

function loadTrivia() {
  const list = TRIVIA_QUESTIONS[currentLang] || TRIVIA_QUESTIONS.es;
  triviaActive = true;
  const qData = list[triviaIdx[triviaPos % triviaIdx.length]];
  document.getElementById('trivia-q').textContent = qData.q;
  document.getElementById('trivia-result').textContent = '';
  const opts = [...qData.opts].sort(()=>Math.random()-0.5);
  const wrap = document.getElementById('trivia-opts');
  wrap.innerHTML = opts.map(o => `<button class="trivia-opt">${o}</button>`).join('');
  wrap.querySelectorAll('.trivia-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!triviaActive) return;
      triviaActive = false;
      const correct = btn.textContent === qData.a;
      wrap.querySelectorAll('.trivia-opt').forEach(b => {
        b.disabled = true;
        if (b.textContent === qData.a) b.classList.add('correct');
        else if (b === btn && !correct) b.classList.add('wrong');
      });
      if (correct) {
        triviaScore++;
        triviaStreak++;
        document.getElementById('trivia-result').textContent = getString('trivia.correct');
        document.getElementById('trivia-result').style.color = '#78c850';
      } else {
        triviaStreak = 0;
        const msg = getString('trivia.wrong').replace('{answer}', qData.a);
        document.getElementById('trivia-result').textContent = msg;
        document.getElementById('trivia-result').style.color = 'var(--red2)';
      }
      const scoreVal = document.getElementById('trivia-score-val');
      const streakVal = document.getElementById('trivia-streak');
      if (scoreVal) scoreVal.textContent = triviaScore;
      if (streakVal) streakVal.textContent = triviaStreak;
      playClick();
    });
  });
}

document.getElementById('next-q-btn').addEventListener('click', () => {
  const list = TRIVIA_QUESTIONS[currentLang] || TRIVIA_QUESTIONS.es;
  triviaPos++;
  if (triviaPos >= list.length) { triviaPos = 0; triviaIdx.sort(()=>Math.random()-0.5); }
  loadTrivia();
  playClick();
});

syncSettingsUI();
applyTranslations();
showSkeletonCards();
fetchList().catch(() => {
  document.getElementById('pokemon-grid').innerHTML =
    `<div class="error-msg">${getString('errors.fetch')}</div>`;
});

/* ========== PARTICLES ========== */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function randFloat(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: randFloat(1, 3),
      vx: randFloat(-0.3, 0.3),
      vy: randFloat(-0.4, -0.1),
      alpha: randFloat(0.1, 0.5)
    };
  }
  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const computedStyle = getComputedStyle(document.body);
    const red = computedStyle.getPropertyValue('--red').trim() || '#e3350d';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = red;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ========== SORT ========== */
let currentSort = 'num';
document.getElementById('sort-select').addEventListener('change', e => {
  currentSort = e.target.value;
  renderInstantSearch();
  playClick();
});

function getSortValue(p) {
  if (currentSort === 'num') return p.id;
  if (currentSort === 'name') return p.name;
  const cached = pokeCache.get(p.id);
  if (!cached || !cached.raw) return 0;
  if (currentSort === 'hp') return -(cached.raw.stats.find(s=>s.stat.name==='hp')?.base_stat||0);
  if (currentSort === 'attack') return -(cached.raw.stats.find(s=>s.stat.name==='attack')?.base_stat||0);
  if (currentSort === 'total') return -(cached.raw.stats.reduce((acc,s)=>acc+s.base_stat,0));
  return p.id;
}

const origFilteredList = filteredList;
// Override filteredList to also sort
window.filteredListSorted = function() {
  const list = filteredList();
  if (currentSort === 'num') return list;
  return [...list].sort((a, b) => {
    const va = getSortValue(a), vb = getSortValue(b);
    if (typeof va === 'string') return va.localeCompare(vb);
    return va - vb;
  });
};

/* ========== VIEW TOGGLE (grid/list) ========== */
let isListView = false;
document.getElementById('grid-view-btn').addEventListener('click', () => {
  isListView = false;
  document.getElementById('pokemon-grid').classList.remove('list-view');
  document.getElementById('grid-view-btn').classList.add('active');
  document.getElementById('list-view-btn').classList.remove('active');
  playClick();
});
document.getElementById('list-view-btn').addEventListener('click', () => {
  isListView = true;
  document.getElementById('pokemon-grid').classList.add('list-view');
  document.getElementById('list-view-btn').classList.add('active');
  document.getElementById('grid-view-btn').classList.remove('active');
  playClick();
});

/* ========== FAVORITES ========== */
let favorites = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVS) || '[]');

function saveFavs() {
  localStorage.setItem(STORAGE_KEYS.FAVS, JSON.stringify(favorites));
  updateFavBadge();
}
function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  if (favorites.length > 0) {
    badge.style.display = '';
    badge.textContent = favorites.length;
  } else {
    badge.style.display = 'none';
  }
}
updateFavBadge();

function toggleFav(id, btn) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    btn.textContent = '⭐';
    btn.classList.add('fav-active');
    showToast('⭐ Añadido a favoritos');
  } else {
    favorites.splice(idx, 1);
    btn.textContent = '☆';
    btn.classList.remove('fav-active');
    showToast('Eliminado de favoritos');
  }
  btn.classList.add('capturing');
  btn.addEventListener('animationend', () => btn.classList.remove('capturing'), { once: true });
  saveFavs();
  if (document.getElementById('favs-view').classList.contains('active')) {
    renderFavsView();
  }
}

function renderFavsView() {
  const grid = document.getElementById('favs-grid');
  if (favorites.length === 0) {
    grid.innerHTML = `<div class="favs-empty"><span>⭐</span>No tienes Pokémon favoritos aún.<br><small style="font-size:0.8rem;margin-top:0.5rem;display:block;color:var(--muted)">Haz click en ☆ en cualquier carta para añadir.</small></div>`;
    return;
  }
  const data = favorites.map(id => pokeCache.get(id)).filter(Boolean);
  if (data.length === 0) {
    grid.innerHTML = `<div class="loader"></div>`;
    // Try to fetch
    Promise.all(favorites.map(id => fetchPoke(id))).then(() => renderFavsView());
    return;
  }
  grid.innerHTML = '';
  const tempGrid = document.createElement('div');
  tempGrid.id = 'pokemon-grid-temp';
  tempGrid.style.cssText = document.getElementById('pokemon-grid').style.cssText;
  tempGrid.className = document.getElementById('pokemon-grid').className;
  data.forEach((p, idx) => {
    const card = makePokeCard(p, idx);
    tempGrid.appendChild(card);
  });
  grid.appendChild(tempGrid);
  tempGrid.style.display = 'grid';
  tempGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(165px, 1fr))';
  tempGrid.style.gap = '1.25rem';
}

/* ========== TOAST ========== */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ========== INFINITE SCROLL ========== */
const sentinel = document.getElementById('scroll-sentinel');
const observer = new IntersectionObserver(async (entries) => {
  if (!entries[0].isIntersecting) return;
  const list = (window.filteredListSorted || filteredList)();
  const nextSlice = list.slice(displayed, displayed + PAGE);
  if (nextSlice.length === 0) return;
  const uncached = nextSlice.filter(p => !pokeCache.has(p.id)).map(p => p.id);
  if (uncached.length) await fetchBatch(uncached);
  const data = nextSlice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, false);
  displayed += PAGE;
}, { rootMargin: '200px' });
observer.observe(sentinel);

/* ========== PATCH renderCards to add fav button + mini stats ========== */
const _origRenderCards = renderCards;
function makePokeCard(p, idx) {
  const card = document.createElement('div');
  card.className = 'poke-card';
  card.style.animationDelay = (idx % PAGE * 0.025) + 's';
  card.style.setProperty('--tc', p.color);

  const isFav = favorites.includes(p.id);
  const typeBadges = p.types.map(t =>
    `<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'}">${getTypeLabel(t)}</span>`
  ).join('');

  // Mini stat bars (HP, ATK, SPE) from cached raw
  let miniStats = '';
  if (p.raw) {
    const statKeys = ['hp','attack','speed'];
    const statLabels = { hp:'HP', attack:'ATK', speed:'VEL' };
    const statColors = { hp:'#ff5959', attack:'#f5ac78', speed:'#fa92b2' };
    miniStats = `<div class="poke-stat-bar-wrap">` +
      statKeys.map(key => {
        const st = p.raw.stats.find(s=>s.stat.name===key);
        const val = st ? st.base_stat : 0;
        const pct = Math.min(100, (val / 180) * 100).toFixed(1);
        return `<div class="poke-stat-row">
          <span class="poke-stat-label">${statLabels[key]}</span>
          <div class="poke-stat-bar-bg"><div class="poke-stat-bar-fill" style="width:${pct}%;background:${statColors[key]}"></div></div>
        </div>`;
      }).join('') + `</div>`;
  }

  card.innerHTML = `
    <button class="fav-btn ${isFav ? 'fav-active' : ''}" title="Favorito">${isFav ? '⭐' : '☆'}</button>
    <div class="poke-num">#${String(p.id).padStart(4,'0')}</div>
    <div class="poke-img-wrap">
      <img class="poke-img"
        src="${IMG_SPRITE(p.id)}"
        data-hires="${IMG(p.id)}"
        loading="lazy"
        alt="${p.name}"
        style="image-rendering:pixelated"/>
    </div>
    <div class="poke-name">${p.name}</div>
    <div class="poke-types">${typeBadges}</div>
    ${miniStats}
  `;

  const img = card.querySelector('img');
  const hi = new Image();
  hi.onload = () => { img.src = hi.src; img.style.imageRendering = 'auto'; };
  hi.src = IMG(p.id);

  card.querySelector('.fav-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleFav(p.id, e.currentTarget);
  });
  card.addEventListener('click', () => {
    playClick();
    card.classList.add('clicked');
    card.addEventListener('animationend', () => card.classList.remove('clicked'), { once: true });
    openModal(p.id);
  });
  return card;
}

// Override renderCards to use makePokeCard
window.renderCards = function(dataList, reset) {
  const grid = document.getElementById('pokemon-grid');
  if (reset) grid.innerHTML = '';
  if (dataList.length === 0) {
    grid.innerHTML = `<div class="error-msg">${getString('errors.noResults')}</div>`;
    updateDexCount();
    return;
  }
  dataList.forEach((p, idx) => {
    grid.appendChild(makePokeCard(p, idx));
  });
  updateDexCount();
};

function updateDexCount() {
  const list = (window.filteredListSorted || filteredList)();
  const el = document.getElementById('dex-count-val');
  if (el) el.textContent = list.length.toLocaleString();
}

/* ========== PATCH renderInstantSearch to use sorted list ========== */
window.renderInstantSearch = function() {
  const list = (window.filteredListSorted ? window.filteredListSorted() : filteredList());
  const slice = list.slice(0, PAGE);
  const data = slice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, true);
  displayed = slice.length;
};

/* ========== TAB BUTTONS ========== */
// Handlers de navegación gestionados por initNavigation() al final del script.
// Este bloque queda vacío para evitar duplicados de listeners.

/* ========== COMPARE VIEW ========== */
const compareState = { a: null, b: null };

function setupCompareSearch(slot, inputId, suggId, clearId, pokemonContainerId, placeholderId) {
  const input = document.getElementById(inputId);
  const sugg = document.getElementById(suggId);
  const clearBtn = document.getElementById(clearId);

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { sugg.classList.remove('open'); sugg.innerHTML = ''; return; }
    const matches = allPokemon.filter(p => p.name.includes(q) || String(p.id).includes(q)).slice(0, 8);
    if (matches.length === 0) { sugg.classList.remove('open'); return; }
    sugg.innerHTML = matches.map(p =>
      `<div class="compare-suggestion-item" data-id="${p.id}">
        <img src="${IMG_SPRITE(p.id)}" width="28" height="28" style="image-rendering:pixelated">
        <span>#${String(p.id).padStart(4,'0')} ${p.name}</span>
      </div>`
    ).join('');
    sugg.classList.add('open');
    sugg.querySelectorAll('.compare-suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.dataset.id);
        sugg.classList.remove('open');
        input.value = '';
        loadCompareSlot(slot, id, pokemonContainerId, placeholderId, clearId);
        playClick();
      });
    });
  });

  document.addEventListener('click', e => {
    if (!sugg.contains(e.target) && e.target !== input) sugg.classList.remove('open');
  });

  clearBtn.addEventListener('click', () => {
    compareState[slot] = null;
    document.getElementById(pokemonContainerId).style.display = 'none';
    document.getElementById(pokemonContainerId).innerHTML = '';
    document.getElementById(placeholderId).style.display = '';
    clearBtn.style.display = 'none';
    document.getElementById('compare-slot-' + slot).classList.remove('filled');
    renderCompareWinner();
    playClick();
  });
}

async function loadCompareSlot(slot, id, containerId, placeholderId, clearId) {
  const container = document.getElementById(containerId);
  const placeholder = document.getElementById(placeholderId);
  container.style.display = 'none';
  container.innerHTML = `<div class="pokeball-loader"></div>`;
  container.style.display = 'block';
  placeholder.style.display = 'none';
  document.getElementById('compare-slot-' + slot).classList.add('filled');

  const p = await fetchPoke(id);
  if (!p) return;
  if (!p.raw) {
    const res = await fetch(`${API}/pokemon/${id}`);
    p.raw = await res.json();
    pokeCache.set(id, p);
  }
  compareState[slot] = p;

  const orderedKeys = ['hp','attack','defense','special-attack','special-defense','speed'];
  const statsHtml = orderedKeys.map(key => {
    const st = p.raw.stats.find(s=>s.stat.name===key);
    const val = st ? st.base_stat : 0;
    const pct = Math.min(100, (val/180)*100).toFixed(1);
    const c = STAT_COLORS[key] || p.color;
    const abbr = getStatLabel(key);
    return `<div class="compare-stat-row" data-key="${key}" data-val="${val}">
      <span class="compare-stat-key">${abbr}</span>
      <div class="compare-stat-bar-bg"><div class="compare-stat-bar-fill" style="width:${pct}%;background:${c}"></div></div>
      <span class="compare-stat-val">${val}</span>
    </div>`;
  }).join('');

  const typeBadges = p.types.map(t =>
    `<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};margin-right:4px">${getTypeLabel(t)}</span>`
  ).join('');

  container.innerHTML = `
    <div class="compare-slot-pokemon">
      <img class="compare-slot-img" src="${IMG(p.id)}" alt="${p.name}" onerror="this.src='${IMG_SPRITE(p.id)}'"/>
      <div class="compare-slot-name">${p.name}</div>
      <div class="compare-slot-num">#${String(p.id).padStart(4,'0')}</div>
      <div style="margin-bottom:0.5rem">${typeBadges}</div>
      <div class="compare-stat-bars">${statsHtml}</div>
    </div>
  `;
  document.getElementById(clearId).style.display = '';
  renderCompareWinner();
}

function renderCompareWinner() {
  const badge = document.getElementById('compare-winner-badge');
  if (!compareState.a || !compareState.b) { badge.style.display = 'none'; return; }
  const totalA = compareState.a.raw.stats.reduce((acc,s)=>acc+s.base_stat,0);
  const totalB = compareState.b.raw.stats.reduce((acc,s)=>acc+s.base_stat,0);

  // Highlight winning stats
  const containerA = document.getElementById('compare-pokemon-a');
  const containerB = document.getElementById('compare-pokemon-b');
  const statsA = containerA.querySelectorAll('.compare-stat-row');
  const statsB = containerB.querySelectorAll('.compare-stat-row');
  statsA.forEach((rowA, i) => {
    const rowB = statsB[i];
    if (!rowB) return;
    const valA = parseInt(rowA.dataset.val);
    const valB = parseInt(rowB.dataset.val);
    const valElA = rowA.querySelector('.compare-stat-val');
    const valElB = rowB.querySelector('.compare-stat-val');
    if (valA > valB) { valElA.className = 'compare-stat-val compare-stat-winner'; valElB.className = 'compare-stat-val compare-stat-loser'; }
    else if (valB > valA) { valElB.className = 'compare-stat-val compare-stat-winner'; valElA.className = 'compare-stat-val compare-stat-loser'; }
    else { valElA.className = 'compare-stat-val'; valElB.className = 'compare-stat-val'; }
  });

  badge.style.display = '';
  if (totalA > totalB) {
    badge.innerHTML = `🏆 ${compareState.a.name.toUpperCase()} GANA<br><small style="color:var(--muted)">${totalA} vs ${totalB} total</small>`;
  } else if (totalB > totalA) {
    badge.innerHTML = `🏆 ${compareState.b.name.toUpperCase()} GANA<br><small style="color:var(--muted)">${totalB} vs ${totalA} total</small>`;
  } else {
    badge.innerHTML = `🤝 ¡EMPATE!<br><small style="color:var(--muted)">${totalA} total</small>`;
  }
}

setupCompareSearch('a', 'compare-search-a', 'compare-sugg-a', 'compare-clear-a', 'compare-pokemon-a', 'compare-placeholder-a');
setupCompareSearch('b', 'compare-search-b', 'compare-sugg-b', 'compare-clear-b', 'compare-pokemon-b', 'compare-placeholder-b');

/* ═══════════════════════════════════════════════
   SHINY TOGGLE — robusto y compatible cross-browser
   
   Flujo ON:  limpiar → reflow → shiny-reveal (flash 0.5s)
              → animationend → shiny-anim (halo permanente)
   Flujo OFF: limpiar → img normal
   
   Fallback: si animationend no dispara en 600ms
   (imagen aún cargando), se aplica shiny-anim igualmente.
═══════════════════════════════════════════════ */
document.getElementById('shiny-toggle').addEventListener('click', () => {
  if (!currentModalId) return;
  shinyMode = !shinyMode;
  const btn = document.getElementById('shiny-toggle');
  const img = document.getElementById('modal-img');

  btn.classList.toggle('on', shinyMode);

  // Limpiar SIEMPRE primero
  img.classList.remove('shiny-anim', 'shiny-reveal');
  img.style.filter = '';
  void img.offsetWidth; // reflow para reiniciar la animación

  if (shinyMode) {
    img.src = IMG_SHINY(currentModalId);
    img.classList.add('shiny-reveal');

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      img.classList.remove('shiny-reveal');
      img.classList.add('shiny-anim');
    };
    img.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 600); // fallback: si animationend no llega
  } else {
    img.src = IMG(currentModalId);
    // Estado normal: CSS base, sin clases extra
  }
  playClick();
});

/* ========== CURSOR: sistema estándar (Pokéball eliminada) ========== */
// initCursor desactivado — se usa cursor del sistema operativo

/* ========== BARRA DE PROGRESO DE CARGA ========== */
(function initLoadProgress() {
  const bar = document.getElementById('load-progress');
  if (!bar) return;
  const origFetch = window.fetch;
  let pending = 0, done = 0;
  window._progressFetch = function(url, opts) {
    pending++;
    bar.style.width = Math.min(95, (done / Math.max(1, pending)) * 100) + '%';
    return origFetch(url, opts).then(r => {
      done++;
      const pct = Math.min(98, (done / Math.max(1, pending)) * 100);
      bar.style.width = pct + '%';
      if (done >= pending) {
        bar.style.width = '100%';
        setTimeout(() => bar.classList.add('done'), 400);
      }
      return r;
    });
  };
})();

/* ========== FILTRO DE GENERACIÓN ========== */
const GEN_RANGES = {
  '1': [1,151], '2': [152,251], '3': [252,386], '4': [387,493],
  '5': [494,649], '6': [650,721], '7': [722,809], '8': [810,905], '9': [906, 1025]
};
let filterGen = '';

document.querySelectorAll('.gen-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    filterGen = pill.dataset.gen;
    document.querySelectorAll('.gen-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    applyFilters();
    playClick();
  });
});

// Patch filteredList to also filter by gen
const _origFilteredList2 = window.filteredListSorted || filteredList;
window.filteredListSorted = function() {
  let list = filteredList();
  if (filterGen && GEN_RANGES[filterGen]) {
    const [lo, hi] = GEN_RANGES[filterGen];
    list = list.filter(p => p.id >= lo && p.id <= hi);
  }
  if (currentSort === 'num') return list;
  return [...list].sort((a, b) => {
    const va = getSortValue(a), vb = getSortValue(b);
    if (typeof va === 'string') return va.localeCompare(vb);
    return va - vb;
  });
};

/* ========== HISTORIAL DE POKÉMON VISTOS ========== */
let recentHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT) || '[]');

function addToRecent(id) {
  recentHistory = [id, ...recentHistory.filter(x => x !== id)].slice(0, 12);
  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentHistory));
  renderRecentBar();
}

function renderRecentBar() {
  const bar = document.getElementById('recent-bar');
  const list = document.getElementById('recent-list');
  if (!list) return;
  if (recentHistory.length === 0) { bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  list.innerHTML = recentHistory.map(id => {
    const p = pokeCache.get(id);
    const name = p ? p.name : '#' + id;
    return `<div class="recent-item" data-id="${id}" title="${name}">
      <img src="${IMG_SPRITE(id)}" alt="${name}">
      <span>${name}</span>
    </div>`;
  }).join('');
  list.querySelectorAll('.recent-item').forEach(item => {
    item.addEventListener('click', () => { openModal(parseInt(item.dataset.id)); playClick(); });
  });
}
renderRecentBar();

// Patch openModal to track history
const _origOpenModal = openModal;
window.openModal = async function(id) {
  // Capture animation
  const modal = document.getElementById('modal');
  modal.classList.remove('capture-anim');
  void modal.offsetWidth;
  modal.classList.add('capture-anim');
  modal.addEventListener('animationend', () => modal.classList.remove('capture-anim'), { once: true });

  // Dynamic overlay bg
  const p = pokeCache.get(id);
  if (p && p.color) {
    document.getElementById('modal-overlay').style.background = `rgba(0,0,0,0.75)`;
  }

  addToRecent(id);
  updateModalNav(id);
  return _origOpenModal(id);
};

/* ========== NAVEGACIÓN PREV/NEXT EN MODAL ========== */
function updateModalNav(id) {
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  const navId   = document.getElementById('modal-nav-id');
  if (!prevBtn || !nextBtn) return;
  const maxId = allPokemon.length ? Math.max(...allPokemon.map(p=>p.id)) : 1025;
  prevBtn.disabled = id <= 1;
  nextBtn.disabled = id >= maxId;
  if (navId) navId.textContent = '#' + String(id).padStart(4,'0');
}

document.getElementById('modal-prev')?.addEventListener('click', () => {
  if (currentModalId > 1) { openModal(currentModalId - 1); playClick(); }
});
document.getElementById('modal-next')?.addEventListener('click', () => {
  if (currentModalId < 1025) { openModal(currentModalId + 1); playClick(); }
});

// Keyboard navigation in modal
document.addEventListener('keydown', e => {
  if (!document.getElementById('modal-overlay').classList.contains('open')) return;
  if (e.key === 'ArrowLeft'  && currentModalId > 1)    { openModal(currentModalId - 1); playClick(); }
  if (e.key === 'ArrowRight' && currentModalId < 1025) { openModal(currentModalId + 1); playClick(); }
  if (e.key === 'Escape') {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
    currentModalId = null;
  }
});

/* ========== BOTÓN ALEATORIO ========== */
document.getElementById('random-btn')?.addEventListener('click', () => {
  if (allPokemon.length === 0) return;
  const pool = allPokemon;
  const rand = pool[Math.floor(Math.random() * pool.length)];
  openModal(rand.id);
  playClick();
  showToast('🎲 ¡Pokémon aleatorio!');
});

/* ========== RANKING VIEW ========== */
let rankingStatKey = 'total';
let rankingRendered = false;

function getRankingValue(p, stat) {
  if (!p || !p.raw) return 0;
  if (stat === 'total') return p.raw.stats.reduce((acc, s) => acc + s.base_stat, 0);
  const found = p.raw.stats.find(s => s.stat.name === stat);
  return found ? found.base_stat : 0;
}

function renderRanking(stat) {
  const list = document.getElementById('ranking-list');
  if (!list) return;

  // Get all cached pokemon with raw data
  const cached = [];
  pokeCache.forEach((p) => { if (p && p.raw) cached.push(p); });

  if (cached.length < 10) {
    list.innerHTML = `<div style="color:var(--muted);padding:2rem;text-align:center;font-size:0.85rem">
      Cargando más datos... (${cached.length} Pokémon disponibles)<br>
      <small>Ve a la Pokédex y carga más Pokémon primero.</small>
    </div>`;
    return;
  }

  const maxVal = stat === 'total' ? 780 : 255;
  const statColor = stat === 'total' ? 'var(--yellow)' : (STAT_COLORS[stat] || 'var(--yellow)');

  const sorted = [...cached].sort((a, b) => getRankingValue(b, stat) - getRankingValue(a, stat)).slice(0, 20);

  list.innerHTML = sorted.map((p, i) => {
    const val = getRankingValue(p, stat);
    const pct = Math.min(100, (val / maxVal) * 100).toFixed(1);
    const posClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
    const posIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
    const typeBadges = p.types.map(t =>
      `<span class="type-badge t-${t}" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.5rem">${getTypeLabel(t)}</span>`
    ).join('');
    return `<div class="ranking-item" data-id="${p.id}">
      <div class="ranking-pos ${posClass}">${posIcon}</div>
      <img src="${IMG_SPRITE(p.id)}" alt="${p.name}" onerror="this.src='${IMG(p.id)}'">
      <div class="ranking-info">
        <div class="ranking-name">${p.name}</div>
        <div class="ranking-types">${typeBadges}</div>
      </div>
      <div class="ranking-stat-wrap">
        <div class="ranking-bar-bg">
          <div class="ranking-bar-fill" style="width:0%;background:${statColor}" data-pct="${pct}"></div>
        </div>
        <div class="ranking-val">${val}</div>
      </div>
    </div>`;
  }).join('');

  // Animate bars
  requestAnimationFrame(() => {
    list.querySelectorAll('.ranking-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  });

  list.querySelectorAll('.ranking-item').forEach(item => {
    item.addEventListener('click', () => {
      openModal(parseInt(item.dataset.id));
      playClick();
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.querySelector('.tab-btn[data-view="dex"]').classList.add('active');
      document.getElementById('dex-view').classList.add('active');
    });
  });
}

document.querySelectorAll('.ranking-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ranking-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    rankingStatKey = tab.dataset.stat;
    renderRanking(rankingStatKey);
    playClick();
  });
});

// initNavigation() llama a renderRanking() al activar la pestaña ranking — no necesita patch extra.

/* ========== SCROLL TO TOP ========== */
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn?.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); playClick(); });

/* ========== POKÉMON CRY (sonidos oficiales) ========== */
const CRY_URL = id => `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
let cryAudio = null;
document.getElementById('cry-btn')?.addEventListener('click', () => {
  const id = currentModalId;
  if (!id) return;
  if (cryAudio) { cryAudio.pause(); cryAudio = null; }
  const btn = document.getElementById('cry-btn');
  btn.classList.add('playing');
  cryAudio = new Audio(CRY_URL(id));
  cryAudio.play().catch(() => {
    btn.classList.remove('playing');
    showToast('🔇 No se pudo reproducir el cry');
  });
  cryAudio.onended = () => { btn.classList.remove('playing'); cryAudio = null; };
  playClick();
});

/* ========== COLOR PALETTE EXTRACTOR ========== */
function extractPalette(imgEl, paletteEl) {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgEl, 0, 0, 64, 64);
    const data = ctx.getImageData(0, 0, 64, 64).data;
    const colorMap = {};
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i+3];
      if (a < 100) continue; // skip transparent
      const r = Math.round(data[i] / 32) * 32;
      const g = Math.round(data[i+1] / 32) * 32;
      const b = Math.round(data[i+2] / 32) * 32;
      if (r === 0 && g === 0 && b === 0) continue;
      if (r > 220 && g > 220 && b > 220) continue; // skip white
      const key = `${r},${g},${b}`;
      colorMap[key] = (colorMap[key] || 0) + 1;
    }
    const sorted = Object.entries(colorMap).sort((a,b) => b[1] - a[1]).slice(0, 6);
    const swatches = sorted.map(([key]) => {
      const [r,g,b] = key.split(',').map(Number);
      const hex = '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
      return `<div class="palette-swatch" style="background:${hex}" data-hex="${hex}" title="${hex}"></div>`;
    }).join('');
    paletteEl.innerHTML = `<span class="palette-label">PALETA</span>${swatches}`;
    paletteEl.querySelectorAll('.palette-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        navigator.clipboard?.writeText(sw.dataset.hex).then(() => showToast('📋 ' + sw.dataset.hex));
      });
    });
  } catch (e) {
    // CORS may block – silent fail
  }
}

// Patch openModal to extract palette when image loads
const _origOpenModal2 = window.openModal;
window.openModal = async function(id) {
  const result = await _origOpenModal2(id);
  // Extract palette from sprite (not official artwork due to CORS)
  const spriteImg = new Image();
  spriteImg.crossOrigin = 'anonymous';
  spriteImg.onload = () => {
    const paletteEl = document.getElementById('modal-palette');
    if (paletteEl) extractPalette(spriteImg, paletteEl);
  };
  spriteImg.src = IMG_SPRITE(id) + '?';
  return result;
};

/* ========== PARALLAX HOVER en modal img ========== */
document.getElementById('modal-header')?.addEventListener('mousemove', e => {
  const img = document.getElementById('modal-img');
  if (!img) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (e.clientX - cx) / rect.width;
  const dy = (e.clientY - cy) / rect.height;
  img.style.transform = `perspective(600px) rotateX(${(-dy * 12).toFixed(1)}deg) rotateY(${(dx * 12).toFixed(1)}deg) translateZ(20px)`;
});
document.getElementById('modal-header')?.addEventListener('mouseleave', () => {
  const img = document.getElementById('modal-img');
  if (img) img.style.transform = '';
});

/* ========== STAT GRADES en modal ========== */
function getStatGrade(val) {
  if (val >= 150) return '<span class="stat-grade grade-S">S</span>';
  if (val >= 110) return '<span class="stat-grade grade-A">A</span>';
  if (val >= 80)  return '<span class="stat-grade grade-B">B</span>';
  if (val >= 55)  return '<span class="stat-grade grade-C">C</span>';
  return '<span class="stat-grade grade-D">D</span>';
}

// Patch the stats legend to include grades
const _origOpenModal3 = window.openModal;
window.openModal = async function(id) {
  const result = await _origOpenModal3(id);
  // After a short delay, patch stat legend with grades
  setTimeout(() => {
    document.querySelectorAll('.stat-legend-item').forEach(item => {
      const valEl = item.querySelector('.stat-legend-val');
      if (!valEl || valEl.querySelector('.stat-grade')) return;
      const val = parseInt(valEl.textContent);
      if (!isNaN(val)) valEl.innerHTML = val + getStatGrade(val);
    });
  }, 400);
  return result;
};

/* ========== BATTLE SYSTEM ========== */
const battleState = {
  player: null, enemy: null,
  playerHpMax: 0, enemyHpMax: 0,
  playerHp: 0, enemyHp: 0,
  turn: 'player', running: false
};

function setupBattleSearch(inputId, suggId, slot) {
  const input = document.getElementById(inputId);
  const sugg  = document.getElementById(suggId);
  if (!input || !sugg) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { sugg.classList.remove('open'); return; }
    const matches = allPokemon.filter(p => p.name.includes(q) || String(p.id).includes(q)).slice(0, 8);
    sugg.innerHTML = matches.map(p =>
      `<div class="battle-sugg-item" data-id="${p.id}">
        <img src="${IMG_SPRITE(p.id)}" width="28" height="28" style="image-rendering:pixelated">
        <span>#${String(p.id).padStart(4,'0')} ${p.name}</span>
      </div>`
    ).join('');
    sugg.classList.toggle('open', matches.length > 0);
    sugg.querySelectorAll('.battle-sugg-item').forEach(item => {
      item.addEventListener('click', async () => {
        sugg.classList.remove('open');
        input.value = item.querySelector('span').textContent.split(' ').slice(1).join(' ');
        await setBattlePokemon(slot, parseInt(item.dataset.id));
        playClick();
      });
    });
  });
  document.addEventListener('click', e => {
    if (!sugg.contains(e.target) && e.target !== input) sugg.classList.remove('open');
  });
}

async function setBattlePokemon(slot, id) {
  let p = pokeCache.get(id);
  if (!p) p = await fetchPoke(id);
  if (!p) return;
  if (!p.raw) {
    const res = await fetch(`${API}/pokemon/${id}`);
    p.raw = await res.json();
    pokeCache.set(id, p);
  }
  const hp = p.raw.stats.find(s => s.stat.name === 'hp')?.base_stat || 50;
  const hpMax = Math.floor((2 * hp + 31 + 63) * 50 / 100) + 50 + 10; // lv50 formula approx

  if (slot === 'player') {
    battleState.player = p;
    battleState.playerHpMax = battleState.playerHp = hpMax;
    const img = document.getElementById('battle-player-img');
    img.src = IMG(id); img.alt = p.name; img.style.display = '';
    document.getElementById('battle-player-name').textContent = p.name.toUpperCase();
    updateBattleHP('player');
  } else {
    battleState.enemy = p;
    battleState.enemyHpMax = battleState.enemyHp = hpMax;
    const img = document.getElementById('battle-enemy-img');
    img.src = IMG(id); img.alt = p.name; img.style.display = '';
    document.getElementById('battle-enemy-name').textContent = p.name.toUpperCase();
    updateBattleHP('enemy');
  }
  document.getElementById('battle-fight-btn').disabled = !(battleState.player && battleState.enemy);
  drawBattleBg();
}

function updateBattleHP(side) {
  const hp    = side === 'player' ? battleState.playerHp    : battleState.enemyHp;
  const hpMax = side === 'player' ? battleState.playerHpMax : battleState.enemyHpMax;
  const fill  = document.getElementById(side === 'player' ? 'player-hp-fill' : 'enemy-hp-fill');
  const text  = document.getElementById(side === 'player' ? 'player-hp-text' : 'enemy-hp-text');
  const pct   = Math.max(0, (hp / hpMax) * 100);
  fill.style.width = pct + '%';
  fill.className = 'battle-hp-fill' + (pct > 50 ? '' : pct > 20 ? ' mid' : ' low');
  if (text) text.textContent = `${Math.max(0, hp)} / ${hpMax}`;
}

function addBattleLog(msg, color) {
  const log = document.getElementById('battle-log');
  const line = document.createElement('div');
  line.className = 'battle-log-line';
  line.style.color = color || 'var(--text)';
  line.innerHTML = msg;
  if (log.children.length > 6) log.removeChild(log.firstChild);
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function calcDamage(attacker, defender) {
  // Simplified Gen V damage formula at level 50
  const atk   = attacker.raw.stats.find(s => s.stat.name === 'attack')?.base_stat || 50;
  const spAtk = attacker.raw.stats.find(s => s.stat.name === 'special-attack')?.base_stat || 50;
  const def   = defender.raw.stats.find(s => s.stat.name === 'defense')?.base_stat || 50;
  const spDef = defender.raw.stats.find(s => s.stat.name === 'special-defense')?.base_stat || 50;
  const useAtk = Math.max(atk, spAtk);
  const useDef = useAtk === atk ? def : spDef;
  const basePower = 80 + Math.floor(Math.random() * 40); // 80-120
  const crit = Math.random() < 0.0625;
  const rand = 0.85 + Math.random() * 0.15;
  // Type effectiveness: check attacker's primary type vs defender's types
  let typeEff = 1;
  const atkType = attacker.types?.[0];
  if (atkType && defender.types) {
    defender.types.forEach(defType => {
      const tr = TYPE_RELATIONS[defType];
      if (tr?.immune?.includes(atkType)) typeEff *= 0;
      else if (tr?.weak?.includes(atkType)) typeEff *= 2;
      else if (tr?.resist?.includes(atkType)) typeEff *= 0.5;
    });
  }
  let dmg = Math.floor(((2 * 50 / 5 + 2) * basePower * useAtk / useDef / 50 + 2) * rand * typeEff);
  if (crit) dmg = Math.floor(dmg * 1.5);
  return { dmg: Math.max(1, dmg), crit, typeEff };
}

function showDamageFloat(side, dmg, crit) {
  const arena = document.getElementById('battle-arena');
  const wrap = side === 'enemy'
    ? document.getElementById('battle-enemy-wrap')
    : document.getElementById('battle-player-wrap');
  const rect = wrap.getBoundingClientRect();
  const aRect = arena.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'damage-float' + (crit ? ' critical' : '');
  el.textContent = (crit ? '✦ ' : '') + dmg + (crit ? ' CRÍTICO!' : '');
  el.style.left = (rect.left - aRect.left + rect.width / 2 - 30) + 'px';
  el.style.top  = (rect.top  - aRect.top  + 30) + 'px';
  arena.style.position = 'relative';
  arena.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function animateBattlePokemon(side, type) {
  const wrap = document.getElementById(side === 'player' ? 'battle-player-wrap' : 'battle-enemy-wrap');
  wrap.classList.remove('shaking', 'attacking');
  void wrap.offsetWidth;
  wrap.classList.add(type);
  wrap.addEventListener('animationend', () => wrap.classList.remove(type), { once: true });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runBattleTurn() {
  if (battleState.running) return;
  battleState.running = true;
  const fightBtn = document.getElementById('battle-fight-btn');
  fightBtn.disabled = true;

  const player = battleState.player;
  const enemy  = battleState.enemy;

  // Determine order by speed
  const pSpeed = player.raw.stats.find(s => s.stat.name === 'speed')?.base_stat || 50;
  const eSpeed = enemy.raw.stats.find(s => s.stat.name === 'speed')?.base_stat || 50;
  const playerFirst = pSpeed >= eSpeed;

  const firstAttacker  = playerFirst ? player  : enemy;
  const secondAttacker = playerFirst ? enemy   : player;
  const firstSide      = playerFirst ? 'player' : 'enemy';
  const secondSide     = playerFirst ? 'enemy'  : 'player';

  // Turn: first attacker
  addBattleLog(`⚡ ${firstAttacker.name.toUpperCase()} ataca!`, 'var(--yellow)');
  animateBattlePokemon(firstSide, 'attacking');
  await sleep(300);

  const { dmg: d1, crit: c1, typeEff: eff1 } = calcDamage(firstAttacker, secondAttacker);
  if (firstSide === 'player') {
    battleState.enemyHp = Math.max(0, battleState.enemyHp - d1);
  } else {
    battleState.playerHp = Math.max(0, battleState.playerHp - d1);
  }
  animateBattlePokemon(secondSide, 'shaking');
  showDamageFloat(secondSide, d1, c1);
  updateBattleHP('player');
  updateBattleHP('enemy');
  if (c1) addBattleLog('✦ ¡Golpe crítico!', 'var(--yellow)');
  if (eff1 > 1) addBattleLog('💥 ¡Es super efectivo!', '#78c850');
  else if (eff1 > 0 && eff1 < 1) addBattleLog('🛡️ No es muy efectivo...', '#6890f0');
  else if (eff1 === 0) addBattleLog('🚫 No afecta al Pokémon...', '#705898');
  addBattleLog(`💥 -${d1} HP a ${secondAttacker.name.toUpperCase()}`, secondSide === 'enemy' ? '#78c850' : '#f85888');
  await sleep(800);

  // Check KO
  const firstKO = firstSide === 'player' ? battleState.enemyHp <= 0 : battleState.playerHp <= 0;
  if (firstKO) {
    endBattle(firstSide);
    return;
  }

  // Turn: second attacker
  addBattleLog(`⚡ ${secondAttacker.name.toUpperCase()} ataca!`, 'var(--muted)');
  animateBattlePokemon(secondSide, 'attacking');
  await sleep(300);

  const { dmg: d2, crit: c2, typeEff: eff2 } = calcDamage(secondAttacker, firstAttacker);
  // Second attacker hits the first attacker
  if (firstSide === 'player') {
    battleState.playerHp = Math.max(0, battleState.playerHp - d2);
  } else {
    battleState.enemyHp = Math.max(0, battleState.enemyHp - d2);
  }
  animateBattlePokemon(firstSide, 'shaking');
  showDamageFloat(firstSide, d2, c2);
  updateBattleHP('player');
  updateBattleHP('enemy');
  if (c2) addBattleLog('✦ ¡Golpe crítico!', 'var(--yellow)');
  if (eff2 > 1) addBattleLog('💥 ¡Es super efectivo!', '#78c850');
  else if (eff2 > 0 && eff2 < 1) addBattleLog('🛡️ No es muy efectivo...', '#6890f0');
  else if (eff2 === 0) addBattleLog('🚫 No afecta al Pokémon...', '#705898');
  addBattleLog(`💥 -${d2} HP a ${firstAttacker.name.toUpperCase()}`, firstSide === 'enemy' ? '#78c850' : '#f85888');
  await sleep(600);

  const secondKO = secondSide === 'player' ? battleState.enemyHp <= 0 : battleState.playerHp <= 0;
  if (secondKO) {
    endBattle(secondSide);
    return;
  }

  battleState.running = false;
  fightBtn.disabled = false;
  addBattleLog('— Turno terminado. Pulsa ⚡ LUCHAR para continuar —', 'var(--muted)');
}

function endBattle(winnerSide) {
  const winner = winnerSide === 'player' ? battleState.player : battleState.enemy;
  const loser  = winnerSide === 'player' ? battleState.enemy  : battleState.player;
  const banner = document.getElementById('battle-result-banner');
  const text   = document.getElementById('battle-result-text');
  const isPlayerWin = winnerSide === 'player';
  text.innerHTML = isPlayerWin
    ? `🏆 ¡${winner.name.toUpperCase()} GANA!<br><small style="font-size:0.5em;color:var(--muted)">${loser.name.toUpperCase()} se rindió</small>`
    : `💀 ¡${winner.name.toUpperCase()} GANA!<br><small style="font-size:0.5em;color:var(--muted)">${loser.name.toUpperCase()} venció</small>`;
  addBattleLog(`🏆 ¡${winner.name.toUpperCase()} ha ganado!`, 'var(--yellow)');
  banner.classList.add('show');
  battleState.running = false;
}

document.getElementById('battle-fight-btn')?.addEventListener('click', () => {
  document.getElementById('battle-result-banner').classList.remove('show');
  runBattleTurn();
  playClick();
});

document.getElementById('battle-rematch-btn')?.addEventListener('click', () => {
  if (!battleState.player || !battleState.enemy) return;
  battleState.playerHp = battleState.playerHpMax;
  battleState.enemyHp  = battleState.enemyHpMax;
  updateBattleHP('player'); updateBattleHP('enemy');
  document.getElementById('battle-result-banner').classList.remove('show');
  document.getElementById('battle-log').innerHTML = '<div style="color:var(--muted)">¡Nueva batalla! Pulsa ⚡ LUCHAR para empezar.</div>';
  document.getElementById('battle-fight-btn').disabled = false;
  battleState.running = false;
  playClick();
});

document.getElementById('battle-random-player')?.addEventListener('click', async () => {
  if (!allPokemon.length) return;
  const r = allPokemon[Math.floor(Math.random() * allPokemon.length)];
  document.getElementById('battle-search-player').value = r.name;
  await setBattlePokemon('player', r.id);
  playClick();
});
document.getElementById('battle-random-enemy')?.addEventListener('click', async () => {
  if (!allPokemon.length) return;
  const r = allPokemon[Math.floor(Math.random() * allPokemon.length)];
  document.getElementById('battle-search-enemy').value = r.name;
  await setBattlePokemon('enemy', r.id);
  playClick();
});

setupBattleSearch('battle-search-player', 'battle-sugg-player', 'player');
setupBattleSearch('battle-search-enemy', 'battle-sugg-enemy', 'enemy');

// Draw type-colored bg on battle canvas
function drawBattleBg() {
  const canvas = document.getElementById('battle-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth || 600;
  canvas.height = canvas.offsetHeight || 520;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const pType = battleState.player?.types?.[0];
  const eType = battleState.enemy?.types?.[0];
  if (pType) {
    const col = TYPE_COLORS[pType] || '#888';
    const grad = ctx.createRadialGradient(canvas.width*0.75, canvas.height*0.75, 0, canvas.width*0.75, canvas.height*0.75, canvas.width*0.6);
    grad.addColorStop(0, col); grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad; ctx.fillRect(0,0,canvas.width,canvas.height);
  }
  if (eType) {
    const col = TYPE_COLORS[eType] || '#888';
    const grad = ctx.createRadialGradient(canvas.width*0.25, canvas.height*0.25, 0, canvas.width*0.25, canvas.height*0.25, canvas.width*0.6);
    grad.addColorStop(0, col); grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad; ctx.fillRect(0,0,canvas.width,canvas.height);
  }
}

/* ========== REGIONS / MAP VIEW ========== */
const REGIONS = [
  { name:'KANTO',   gen:'Gen I',   color:'#e3350d', emoji:'🌋', desc:'La región original. Hogar de los 151 primeros Pokémon.', starters:[1,4,7], legendaries:[144,145,146,150] },
  { name:'JOHTO',   gen:'Gen II',  color:'#f0a030', emoji:'⛩️', desc:'Tierra antigua llena de tradición y misterio.', starters:[152,155,158], legendaries:[243,244,245,249,250] },
  { name:'HOENN',   gen:'Gen III', color:'#6890f0', emoji:'🌊', desc:'Archipiélago tropical con tierra y agua en equilibrio.', starters:[252,255,258], legendaries:[380,381,382,383,384] },
  { name:'SINNOH',  gen:'Gen IV',  color:'#7038f8', emoji:'🏔️', desc:'Región del norte. El Monte Corona toca el cielo.', starters:[387,390,393], legendaries:[480,481,482,483,484,487] },
  { name:'UNOVA',   gen:'Gen V',   color:'#78c850', emoji:'🏙️', desc:'Región lejana e industrializada con gran diversidad.', starters:[495,498,501], legendaries:[643,644,646] },
  { name:'KALOS',   gen:'Gen VI',  color:'#f85888', emoji:'🗼', desc:'Región inspirada en Francia. Cuna de la Megaevolución.', starters:[650,653,656], legendaries:[716,717,718] },
  { name:'ALOLA',   gen:'Gen VII', color:'#ffd700', emoji:'🌺', desc:'Paraíso tropical con Pokémon de Formas Regionales.', starters:[722,725,728], legendaries:[785,786,787,788,791,792,800] },
  { name:'GALAR',   gen:'Gen VIII',color:'#48d0b0', emoji:'🏰', desc:'Región inspirada en el Reino Unido. Fenómeno Dynamax.', starters:[810,813,816], legendaries:[888,889,890,894,895,896,897,898] },
  { name:'PALDEA',  gen:'Gen IX',  color:'#c084fc', emoji:'🌿', desc:'Región libre y vasta con aventura sin caminos definidos.', starters:[906,909,912], legendaries:[1001,1007,1008,1009,1010] },
];

function buildRegionGrid() {
  const grid = document.getElementById('region-grid');
  if (!grid || grid.children.length > 0) return;
  REGIONS.forEach(r => {
    const card = document.createElement('div');
    card.className = 'region-card';
    const startersHtml = r.starters.map(id =>
      `<img src="${IMG_SPRITE(id)}" alt="${id}" title="#${id}" data-id="${id}">`
    ).join('');
    card.innerHTML = `
      <div class="region-banner" style="background:linear-gradient(135deg,${r.color}33,${r.color}11)">
        <span style="font-size:3.5rem;position:relative;z-index:1">${r.emoji}</span>
      </div>
      <div class="region-gen-badge">${r.gen}</div>
      <div class="region-info">
        <div class="region-name">${r.name}</div>
        <div class="region-desc">${r.desc}</div>
        <div class="region-starters">${startersHtml}</div>
      </div>
    `;
    card.querySelectorAll('.region-starters img').forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        const hi = new Image(); hi.src = IMG(parseInt(img.dataset.id));
        openModal(parseInt(img.dataset.id));
        playClick();
      });
    });
    card.addEventListener('click', () => {
      // Switch to dex and filter by gen
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.querySelector('.tab-btn[data-view="dex"]').classList.add('active');
      document.getElementById('dex-view').classList.add('active');
      const genNum = r.gen.replace('Gen ','').replace('I','1').replace('II','2').replace('III','3').replace('IV','4').replace('V','5').replace('VI','6').replace('VII','7').replace('VIII','8').replace('IX','9');
      // Map roman to arabic
      const genMap = {'Gen I':'1','Gen II':'2','Gen III':'3','Gen IV':'4','Gen V':'5','Gen VI':'6','Gen VII':'7','Gen VIII':'8','Gen IX':'9'};
      const genKey = genMap[r.gen] || '';
      filterGen = genKey;
      document.querySelectorAll('.gen-pill').forEach(p => {
        p.classList.toggle('active', p.dataset.gen === genKey);
      });
      applyFilters();
      playClick();
    });
    grid.appendChild(card);
  });
}

// Patch tab buttons to render regions
const _regionTabBtn = document.querySelector('.tab-btn[data-view="map"]');
_regionTabBtn?.addEventListener('click', () => setTimeout(buildRegionGrid, 50));

/* ========== IV CALCULATOR ========== */
const IV_STAT_KEYS = ['hp','attack','defense','special-attack','special-defense','speed'];
const IV_STAT_LABELS = { hp:'HP', attack:'ATK', defense:'DEF', 'special-attack':'SPA', 'special-defense':'SPD', speed:'VEL' };
let ivPokemon = null;

function buildIVInputs() {
  const grid = document.getElementById('iv-inputs-grid');
  if (!grid) return;
  grid.innerHTML = IV_STAT_KEYS.map(key => {
    const col = STAT_COLORS[key] || '#888';
    return `<div class="iv-stat-row" data-key="${key}">
      <div class="iv-stat-header">
        <span class="iv-stat-name" style="color:${col}">${IV_STAT_LABELS[key]}</span>
        <span class="iv-stat-result" id="iv-result-${key.replace('-','_')}">IV: ?</span>
      </div>
      <div class="iv-input-group">
        <span class="iv-input-label">Stat</span>
        <input type="number" class="iv-input" id="iv-stat-${key.replace('-','_')}" placeholder="0" min="1" max="600">
      </div>
      <div class="iv-input-group">
        <span class="iv-input-label">EV</span>
        <input type="number" class="iv-input" id="iv-ev-${key.replace('-','_')}" placeholder="0" min="0" max="252" value="0">
      </div>
      <div style="display:flex;gap:2px;margin-top:4px" id="iv-stars-${key.replace('-','_')}">
        ${[0,1,2,3,4,5].map(i => `<span class="iv-star ${i < 3 ? '' : 'empty'}">★</span>`).join('')}
      </div>
    </div>`;
  }).join('');

  // Bind inputs
  IV_STAT_KEYS.forEach(key => {
    const safeKey = key.replace('-','_');
    const statInput = document.getElementById(`iv-stat-${safeKey}`);
    const evInput   = document.getElementById(`iv-ev-${safeKey}`);
    [statInput, evInput].forEach(el => {
      if (el) el.addEventListener('input', calcIVs);
    });
  });
}
buildIVInputs();

document.getElementById('iv-level')?.addEventListener('input', e => {
  document.getElementById('iv-level-val').textContent = e.target.value;
  calcIVs();
});
document.getElementById('iv-nature')?.addEventListener('change', calcIVs);

function calcIVs() {
  if (!ivPokemon || !ivPokemon.raw) return;
  const level = parseInt(document.getElementById('iv-level').value) || 50;
  const nature = document.getElementById('iv-nature').value;

  IV_STAT_KEYS.forEach(key => {
    const safeKey = key.replace('-','_');
    const statInput = document.getElementById(`iv-stat-${safeKey}`);
    const evInput   = document.getElementById(`iv-ev-${safeKey}`);
    const resultEl  = document.getElementById(`iv-result-${safeKey}`);
    const starsEl   = document.getElementById(`iv-stars-${safeKey}`);
    if (!statInput || !resultEl) return;

    const statVal = parseInt(statInput.value);
    const ev = parseInt(evInput?.value) || 0;
    if (isNaN(statVal) || statVal <= 0) { resultEl.textContent = 'IV: ?'; return; }

    const baseStat = ivPokemon.raw.stats.find(s => s.stat.name === key)?.base_stat || 50;
    let natureMultiplier = 1.0;
    if (nature.includes('+')) {
      const boosted = nature.replace('+','').replace('-','');
      if (key.startsWith(boosted)) natureMultiplier = 1.1;
    }
    if (nature.includes('-')) {
      const reduced = nature.replace('+','').replace('-','');
      if (key.startsWith(reduced)) natureMultiplier = 0.9;
    }

    let iv;
    if (key === 'hp') {
      // HP formula: floor((2*base + iv + floor(ev/4)) * level / 100) + level + 10
      // Solve for iv: iv = ceil((stat - level - 10) * 100 / level) - 2*base - floor(ev/4)
      iv = Math.round((statVal - level - 10) * 100 / level) - 2 * baseStat - Math.floor(ev / 4);
    } else {
      // Other stats: floor((floor((2*base + iv + floor(ev/4)) * level / 100) + 5) * nature)
      // Solve: iv = ceil((stat / nature - 5) * 100 / level) - 2*base - floor(ev/4)
      iv = Math.round((statVal / natureMultiplier - 5) * 100 / level) - 2 * baseStat - Math.floor(ev / 4);
    }
    iv = Math.max(0, Math.min(31, iv));
    resultEl.textContent = `IV: ${iv}`;

    // Stars
    if (starsEl) {
      const starCount = Math.round((iv / 31) * 6);
      starsEl.querySelectorAll('.iv-star').forEach((star, i) => {
        star.classList.toggle('empty', i >= starCount);
      });
    }
  });
}

// IV Pokemon search
setupBattleSearch('iv-search', 'iv-sugg', 'iv');
function setupIVSearch() {
  const input = document.getElementById('iv-search');
  const sugg  = document.getElementById('iv-sugg');
  if (!input || !sugg) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { sugg.classList.remove('open'); return; }
    const matches = allPokemon.filter(p => p.name.includes(q) || String(p.id).includes(q)).slice(0, 8);
    sugg.innerHTML = matches.map(p =>
      `<div class="battle-sugg-item" data-id="${p.id}">
        <img src="${IMG_SPRITE(p.id)}" width="28" height="28" style="image-rendering:pixelated">
        <span>#${String(p.id).padStart(4,'0')} ${p.name}</span>
      </div>`
    ).join('');
    sugg.classList.toggle('open', matches.length > 0);
    sugg.querySelectorAll('.battle-sugg-item').forEach(item => {
      item.addEventListener('click', async () => {
        sugg.classList.remove('open');
        const id = parseInt(item.dataset.id);
        let p = pokeCache.get(id);
        if (!p) p = await fetchPoke(id);
        if (!p || !p.raw) {
          const res = await fetch(`${API}/pokemon/${id}`);
          p = pokeCache.get(id) || {};
          p.raw = await res.json();
          pokeCache.set(id, p);
        }
        ivPokemon = p;
        const imgEl = document.getElementById('iv-pokemon-img');
        imgEl.src = IMG_SPRITE(id); imgEl.style.opacity = '1';
        document.getElementById('iv-pokemon-name').textContent = p.name;
        input.value = p.name;
        calcIVs();
        playClick();
      });
    });
  });
  document.addEventListener('click', e => {
    if (!sugg.contains(e.target) && e.target !== input) sugg.classList.remove('open');
  });
}
setupIVSearch();

/* ========== PATCH TAB HANDLER for new views ========== */
// Override the existing tab handler to also cover new views
document.querySelectorAll('.tab-btn').forEach(btn => {
  // Remove old listeners by cloning (safe approach)
  const fresh = btn.cloneNode(true);
  btn.parentNode.replaceChild(fresh, btn);
  fresh.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    fresh.classList.add('active');
    const viewId = fresh.dataset.view + '-view';
    const view = document.getElementById(viewId);
    if (view) view.classList.add('active');
    const v = fresh.dataset.view;
    if (v === 'types')   renderTypeChart();
    if (v === 'trivia')  initTrivia();
    if (v === 'favs')    renderFavsView();
    if (v === 'ranking') { setTimeout(() => renderRanking(rankingStatKey), 100); }
    if (v === 'map')     setTimeout(buildRegionGrid, 50);
    playClick();
  });
});

/* ========== AMBIENT FLOATING POKEBALLS ========== */
document.querySelectorAll('.ambient-ball').forEach(ball => {
  ball.style.animationDuration = (12 + Math.random() * 16) + 's';
  ball.style.animationDelay    = -(Math.random() * 20) + 's';
});

/* ====================================================
   NUEVAS MEJORAS v5
==================================================== */

/* ── DEBILIDADES TAB ── */
function calcTypeWeaknesses(types) {
  // Returns map of attacking type → multiplier
  const mult = {};
  Object.keys(TYPE_COLORS).forEach(t => { mult[t] = 1; });
  types.forEach(defType => {
    const rel = TYPE_RELATIONS[defType] || {};
    (rel.weak  || []).forEach(t => { mult[t] = (mult[t] || 1) * 2; });
    (rel.resist|| []).forEach(t => { mult[t] = (mult[t] || 1) * 0.5; });
    (rel.immune|| []).forEach(t => { mult[t] = 0; });
  });
  return mult;
}

function renderWeaknessTab(types) {
  const wrap = document.getElementById('modal-weaknesses');
  if (!wrap) return;
  const mult = calcTypeWeaknesses(types);

  const groups = { 4: [], 2: [], 0.5: [], 0.25: [], 0: [] };
  Object.entries(mult).forEach(([t, m]) => {
    if (groups[m]) groups[m].push(t);
    else if (m > 2) groups[4].push(t);
  });

  const labels = { 4:'🔥 x4 SUPER EFECTIVO', 2:'⚠️ x2 Efectivo', 0.5:'🛡️ x½ Resiste', 0.25:'🛡️🛡️ x¼ Muy resistente', 0:'🚫 Inmune (x0)' };
  const colors = { 4:'#ffd700', 2:'#78c850', 0.5:'#6890f0', 0.25:'#a890f0', 0:'#705898' };

  wrap.innerHTML = Object.entries(groups)
    .filter(([,arr]) => arr.length > 0)
    .map(([m, arr]) => `
      <div class="weakness-section">
        <div class="weakness-section-title">${labels[m]}</div>
        <div class="weakness-grid">
          ${arr.map(t => `
            <div class="weakness-chip" style="background:${TYPE_COLORS[t]}22;color:${TYPE_COLORS[t]};border:1.5px solid ${TYPE_COLORS[t]}66">
              <span>${getTypeLabel(t)}</span>
              <span class="mult">${m}×</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('') || '<p style="color:var(--muted);padding:1rem">Sin datos de tipos disponibles.</p>';
}

// Patch openModal to also populate weakness tab
const _om_weak = openModal;
window.openModal = async function(id) {
  const result = await _om_weak(id);
  // After loading, render weaknesses from cached types
  setTimeout(() => {
    const p = pokeCache.get(id);
    if (p && p.types) renderWeaknessTab(p.types);
  }, 200);
  return result;
};

/* ── NOTAS POR POKÉMON ── */
function getNote(id) { return localStorage.getItem(STORAGE_KEYS.NOTE_PREFIX + id) || ''; }
function setNote(id, text) {
  if (text.trim()) localStorage.setItem(STORAGE_KEYS.NOTE_PREFIX + id, text);
  else localStorage.removeItem(STORAGE_KEYS.NOTE_PREFIX + id);
}
function hasNote(id) { return !!localStorage.getItem(STORAGE_KEYS.NOTE_PREFIX + id); }

// Patch openModal to load/save notes
const _om_notes = window.openModal;
window.openModal = async function(id) {
  const result = await _om_notes(id);
  setTimeout(() => {
    const ta = document.getElementById('modal-notes-input');
    const saved = document.getElementById('modal-notes-saved');
    const clearBtn = document.getElementById('modal-notes-clear');
    if (!ta) return;
    const note = getNote(id);
    ta.value = note;
    saved.textContent = note ? '💾 Notas guardadas' : 'Sin notas guardadas';
    saved.style.color = note ? 'var(--yellow)' : 'var(--muted)';

    ta.oninput = () => {
      setNote(id, ta.value);
      saved.textContent = ta.value.trim() ? '💾 Guardado' : 'Sin notas guardadas';
      saved.style.color = ta.value.trim() ? 'var(--yellow)' : 'var(--muted)';
    };
    if (clearBtn) clearBtn.onclick = () => {
      ta.value = '';
      setNote(id, '');
      saved.textContent = 'Notas borradas';
      saved.style.color = 'var(--muted)';
      playClick();
    };
  }, 150);
  return result;
};

/* ── PAGE-LEVEL TYPE AURA (fondo de página cambia según último Pokémon abierto) ── */
(function initPageAura() {
  const canvas = document.getElementById('page-type-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let targetColor = null, animReq = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (targetColor) drawAura(targetColor, 1);
  }
  window.addEventListener('resize', resize);
  resize();

  function drawAura(hex, alpha) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Top-left radial glow
    const g1 = ctx.createRadialGradient(0, 0, 0, 0, 0, canvas.width * 0.6);
    g1.addColorStop(0, hex + '28');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1;
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Bottom-right
    const g2 = ctx.createRadialGradient(canvas.width, canvas.height, 0, canvas.width, canvas.height, canvas.width * 0.5);
    g2.addColorStop(0, hex + '18');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
  }

  window._setPageAura = function(hexColor) {
    targetColor = hexColor;
    canvas.style.opacity = '1';
    drawAura(hexColor, 1);
    // Fade out after 8s
    clearTimeout(window._auraFadeTimer);
    window._auraFadeTimer = setTimeout(() => { canvas.style.opacity = '0'; }, 8000);
  };
})();

// Patch openModal to trigger page aura
const _om_aura = window.openModal;
window.openModal = async function(id) {
  const result = await _om_aura(id);
  setTimeout(() => {
    const p = pokeCache.get(id);
    if (p && p.color && window._setPageAura) window._setPageAura(p.color);
  }, 100);
  return result;
};

/* ── ¿QUIÉN ES ESE POKÉMON? SILHOUETTE QUIZ ── */
let silState = {
  pokemon: null, options: [], attempts: 0, maxAttempts: 3,
  correct: 0, wrong: 0, streak: 0, answered: false
};

function startSilhouette() {
  if (allPokemon.length < 4) {
    document.getElementById('silhouette-options').innerHTML = '<p style="color:var(--muted)">Cargando Pokémon...</p>';
    return;
  }
  silState.answered = false;
  silState.attempts = 0;

  // Pick random pokemon (prefer those already cached for speed)
  const pool = allPokemon.filter(p => pokeCache.has(p.id));
  const use = pool.length >= 4 ? pool : allPokemon;
  const correct = use[Math.floor(Math.random() * use.length)];

  // 3 random wrong options
  const wrongPool = use.filter(p => p.id !== correct.id);
  const shuffled = [...wrongPool].sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [...shuffled, correct].sort(() => Math.random() - 0.5);

  silState.pokemon = correct;
  silState.options = options;

  // Difficulty based on ID
  const gen = correct.id <= 151 ? 'Gen I' : correct.id <= 251 ? 'Gen II' : correct.id <= 386 ? 'Gen III' : `#${correct.id}`;
  document.getElementById('silhouette-diff').textContent = gen;

  // Image
  const img = document.getElementById('silhouette-img');
  img.src = IMG(correct.id);
  img.className = 'silhouette-img hidden-pokemon';
  document.getElementById('silhouette-overlay').textContent = '???';

  // Attempts
  updateAttemptDots();

  // Options
  const optsWrap = document.getElementById('silhouette-options');
  optsWrap.innerHTML = options.map(p => `
    <button class="sil-opt" data-id="${p.id}">
      <img src="${IMG_SPRITE(p.id)}" alt="${p.name}" style="opacity:0">
      <span>${p.name}</span>
    </button>
  `).join('');

  optsWrap.querySelectorAll('.sil-opt').forEach(btn => {
    btn.addEventListener('click', () => handleSilAnswer(btn, parseInt(btn.dataset.id)), { once: true });
  });

  document.getElementById('silhouette-result').textContent = '';
  document.getElementById('silhouette-result').style.color = '';
}

function updateAttemptDots() {
  document.querySelectorAll('.attempt-dot').forEach((dot, i) => {
    dot.textContent = i < (silState.maxAttempts - silState.attempts) ? '❤️' : '🖤';
  });
}

function handleSilAnswer(btn, chosenId) {
  if (silState.answered) return;
  const correctId = silState.pokemon.id;
  const isCorrect = chosenId === correctId;

  if (isCorrect) {
    silState.answered = true;
    silState.correct++;
    silState.streak++;
    btn.classList.add('correct');
    btn.querySelector('img').style.opacity = '1';
    document.getElementById('silhouette-result').textContent = `✅ ¡Es ${silState.pokemon.name.toUpperCase()}!`;
    document.getElementById('silhouette-result').style.color = '#78c850';
    revealSilhouette();
    disableSilOptions();
    updateSilScore();
  } else {
    silState.attempts++;
    btn.classList.add('wrong');
    btn.disabled = true;
    updateAttemptDots();

    if (silState.attempts >= silState.maxAttempts) {
      // Game over
      silState.answered = true;
      silState.wrong++;
      silState.streak = 0;
      const correctBtn = document.querySelector(`.sil-opt[data-id="${correctId}"]`);
      if (correctBtn) { correctBtn.classList.add('correct'); correctBtn.querySelector('img').style.opacity = '1'; }
      document.getElementById('silhouette-result').textContent = `❌ Era ${silState.pokemon.name.toUpperCase()}`;
      document.getElementById('silhouette-result').style.color = '#f85888';
      revealSilhouette();
      disableSilOptions();
      updateSilScore();
    } else {
      // Hint: show partial silhouette reveal
      const remaining = silState.maxAttempts - silState.attempts;
      document.getElementById('silhouette-result').textContent = `❌ Incorrecto. ${remaining} intento${remaining>1?'s':''} restante${remaining>1?'s':''}`;
      document.getElementById('silhouette-result').style.color = 'var(--red2)';
      // Brighten slightly as hint
      const img = document.getElementById('silhouette-img');
      img.style.filter = `brightness(${silState.attempts * 0.2}) drop-shadow(0 6px 16px rgba(0,0,0,0.6))`;
    }
  }
  playClick();
}

function revealSilhouette() {
  const img = document.getElementById('silhouette-img');
  img.className = 'silhouette-img revealed';
  img.style.filter = '';
  document.getElementById('silhouette-overlay').textContent = '';
  // Make options show sprites
  document.querySelectorAll('.sil-opt img').forEach(i => { i.style.opacity = '1'; });
}

function disableSilOptions() {
  document.querySelectorAll('.sil-opt').forEach(btn => { btn.disabled = true; });
}

function updateSilScore() {
  document.getElementById('sil-correct-val').textContent = silState.correct;
  document.getElementById('sil-wrong-val').textContent   = silState.wrong;
  document.getElementById('sil-streak-val').textContent  = silState.streak;
}

document.getElementById('silhouette-next')?.addEventListener('click', () => {
  startSilhouette();
  playClick();
});

// Auto-start silhouette when tab opens
document.querySelectorAll('.tab-btn').forEach(btn => {
  if (btn.dataset.view === 'silhouette') {
    btn.addEventListener('click', () => setTimeout(startSilhouette, 80));
  }
});

/* ── FIX: patch filteredList inside applyFilters to use gen filter too ── */
const _applyFiltersOrig = applyFilters;
window.applyFilters = async function() {
  displayed = 0;
  showSkeletonCards();
  if (filterType || filterGen) {
    const uncached = allPokemon.filter(p => !pokeCache.has(p.id)).map(p => p.id);
    if (uncached.length > 0) {
      for (let i = 0; i < uncached.length; i += 10) {
        await Promise.all(uncached.slice(i, i + 10).map(id => fetchPoke(id)));
        await new Promise(r => setTimeout(r, 10));
      }
    }
  }
  const list  = (window.filteredListSorted || filteredList)();
  const slice = list.slice(0, 40);
  const data  = slice.map(p => pokeCache.get(p.id)).filter(Boolean);
  renderCards(data, true);
  displayed = 40;
};

/* ── IMPROVED SEARCH: also search by type name ── */
const _origFilteredListV5 = filteredList;
window.filteredList = function() {
  let list = allPokemon;
  if (searchQ) {
    const q = searchQ.toLowerCase();
    list = list.filter(p => {
      if (p.name.includes(q) || String(p.id).includes(q)) return true;
      const cached = pokeCache.get(p.id);
      if (cached && cached.types.some(t => t.includes(q) || getTypeLabel(t).toLowerCase().includes(q))) return true;
      return false;
    });
  }
  if (filterType) {
    list = list.filter(p => {
      const cached = pokeCache.get(p.id);
      return cached && cached.types.includes(filterType);
    });
  }
  return list;
};

/* ── FINAL: patch global filteredListSorted to use new filteredList + gen filter ── */
window.filteredListSorted = function() {
  let list = window.filteredList();
  if (filterGen && GEN_RANGES[filterGen]) {
    const [lo, hi] = GEN_RANGES[filterGen];
    list = list.filter(p => p.id >= lo && p.id <= hi);
  }
  if (currentSort === 'num') return list;
  return [...list].sort((a, b) => {
    const va = getSortValue(a), vb = getSortValue(b);
    if (typeof va === 'string') return va.localeCompare(vb);
    return va - vb;
  });
};

/* ── NOTES INDICATOR on cards (badge) ── */
const _origMakePokeCard = typeof makePokeCard !== 'undefined' ? makePokeCard : null;
if (_origMakePokeCard) {
  window.makePokeCard = function(p, idx) {
    const card = _origMakePokeCard(p, idx);
    if (hasNote(p.id)) {
      const badge = document.createElement('div');
      badge.className = 'notes-indicator';
      badge.title = 'Tiene notas';
      card.appendChild(badge);
    }
    return card;
  };
}

/* ── SEARCH AUTOCOMPLETE SUGGESTIONS dropdown ── */
(function initSearchSuggestions() {
  const input = document.getElementById('search-input');
  if (!input) return;
  const wrap = input.parentElement;
  wrap.style.position = 'relative';
  const dropdown = document.createElement('div');
  dropdown.style.cssText = `
    position:absolute; top:calc(100% + 4px); left:0; right:0;
    background:var(--dark); border:1.5px solid var(--border); border-radius:12px;
    max-height:220px; overflow-y:auto; z-index:300; display:none;
    box-shadow:0 12px 32px rgba(0,0,0,0.6);
  `;
  wrap.appendChild(dropdown);

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2 || allPokemon.length === 0) { dropdown.style.display = 'none'; return; }
      const matches = allPokemon.filter(p => p.name.startsWith(q) || String(p.id) === q).slice(0, 8);
      if (matches.length === 0) { dropdown.style.display = 'none'; return; }
      dropdown.innerHTML = matches.map(p => `
        <div style="display:flex;align-items:center;gap:0.6rem;padding:0.4rem 0.85rem;cursor:pointer;font-size:0.82rem;font-weight:700;text-transform:capitalize;transition:background 0.12s" 
             class="search-suggestion" data-id="${p.id}" data-name="${p.name}">
          <img src="${IMG_SPRITE(p.id)}" width="28" height="28" style="image-rendering:pixelated">
          <span>${p.name}</span>
          <span style="margin-left:auto;font-family:var(--font-display);font-size:0.32rem;color:var(--muted)">#${String(p.id).padStart(4,'0')}</span>
        </div>
      `).join('');
      dropdown.style.display = 'block';
      dropdown.querySelectorAll('.search-suggestion').forEach(item => {
        item.addEventListener('mouseover', () => { item.style.background = 'var(--card2)'; });
        item.addEventListener('mouseout',  () => { item.style.background = ''; });
        item.addEventListener('click', () => {
          input.value = item.dataset.name;
          searchQ = item.dataset.name.toLowerCase();
          renderInstantSearch();
          dropdown.style.display = 'none';
          openModal(parseInt(item.dataset.id));
          playClick();
        });
      });
    }, 120);
  });

  document.addEventListener('click', e => {
    if (!dropdown.contains(e.target) && e.target !== input) dropdown.style.display = 'none';
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') dropdown.style.display = 'none';
  });
})();

/* ── KEYBOARD SHORTCUT: press / to focus search ── */
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    const searchInput = document.getElementById('search-input');
    searchInput?.focus();
    // Switch to dex tab if not already
    if (!document.getElementById('dex-view')?.classList.contains('active')) {
      document.querySelector('.tab-btn[data-view="dex"]')?.click();
    }
  }
});

/* ── TOOLTIP: keyboard shortcut hint ── */

/* ============================================================
   POKÉDEX v6 — NEW FEATURES
   ============================================================ */

/* ══════════════════════════════════════════════════════
   POKÉDEX v7 — NAV GROUPS: implementación única y limpia
   
   El cloneNode() de tab-btn se hace UNA sola vez aquí.
   Los nav-group-btn NO son clonados (se skipean).
   Los dropdown se abren/cierran con un único handler.
   ══════════════════════════════════════════════════════ */

function initNavigation() {
  // 1. Clone solo los tab-btn que NO son nav-group-btn (fix para limpiar listeners previos)
  document.querySelectorAll('.tab-btn:not(.nav-group-btn)').forEach(btn => {
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener('click', (e) => {
      e.stopPropagation();
      // Cerrar todos los dropdowns
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
      // Activar vista
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      fresh.classList.add('active');
      const viewEl = document.getElementById((fresh.dataset.view || '') + '-view');
      if (viewEl) viewEl.classList.add('active');
      // Callbacks de inicialización
      const v = fresh.dataset.view;
      if (v === 'types')        renderTypeChart();
      if (v === 'trivia')       initTrivia();
      if (v === 'favs')         renderFavsView();
      if (v === 'ranking')      setTimeout(() => renderRanking(rankingStatKey), 100);
      if (v === 'map')          setTimeout(buildRegionGrid, 50);
      if (v === 'silhouette')   setTimeout(startSilhouette, 80);
      if (v === 'team')         renderTeamSlots();
      if (v === 'collection')   renderCollectionView();
      if (v === STORAGE_KEYS.ACHIEVEMENTS)  renderAchievementsView();
      if (v === 'missions')     renderMissionsView();
      if (v === 'nuzlocke')     renderNuzlockeView();
      if (v === 'quiz')         initQuiz();
      if (v === 'profile') {
        // Vista perfil unificada
        const ptab = fresh.dataset.profileTab || 'logros';
        openProfileView(ptab);
      }
      playClick();
    });
  });

  // 2. Nav-group-btn: abrir/cerrar su dropdown (handler único, sin cloneNode)
  document.querySelectorAll('.nav-group-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const group = btn.dataset.group;
      const dd = document.getElementById('dropdown-' + group);
      if (!dd) return;
      const wasOpen = dd.classList.contains('open');
      document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
      if (!wasOpen) dd.classList.add('open');
      playClick();
    });
  });

  // 3. Click fuera cierra todos los dropdowns
  document.addEventListener('click', () => {
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  });

  // 4. Tabs internos del perfil
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchProfileTab(btn.dataset.ptab);
      playClick();
    });
  });
}

/* ── Perfil: abrir vista y activar pestaña interna ── */
function openProfileView(tabId) {
  updateTrainerCard();
  switchProfileTab(tabId || 'logros');
  if (tabId === 'logros' || !tabId) renderAchievementsView();
  if (tabId === 'misiones') renderMissionsView();
}

function switchProfileTab(tabId) {
  document.querySelectorAll('.profile-tab-btn').forEach(b => b.classList.toggle('active', b.dataset.ptab === tabId));
  document.querySelectorAll('.profile-panel').forEach(p => p.classList.toggle('active', p.id === 'ppanel-' + tabId));
  if (tabId === 'logros')   renderAchievementsView();
  if (tabId === 'misiones') renderMissionsView();
}

initNavigation();



/* ════════════════════════════════════════════
   1. COLLECTION / POKÉDEX PROGRESS TRACKER
   ════════════════════════════════════════════ */
let collectionData = JSON.parse(localStorage.getItem(STORAGE_KEYS.COLLECTION) || '{}');
// collectionData = { "25": {captured:true, shiny:false}, ... }

function saveCollection() {
  localStorage.setItem(STORAGE_KEYS.COLLECTION, JSON.stringify(collectionData));
}

function isCaptured(id) { return !!(collectionData[id]?.captured); }
function isShinyOwned(id) { return !!(collectionData[id]?.shiny); }

function toggleCapture(id) {
  if (!collectionData[id]) collectionData[id] = {};
  collectionData[id].captured = !collectionData[id].captured;
  saveCollection();
  updateModalCollectionBtns(id);
  if (collectionData[id].captured) {
    showToast('✅ ¡Pokémon capturado!');
    spawnConfetti();
    trackAchievement('first_capture');
    const count = Object.values(collectionData).filter(v=>v.captured).length;
    grantXP(5);
    if (count >= 50) trackAchievement('catch_50');
    if (count >= 151) trackAchievement('catch_151');
    if (count >= 251) trackAchievement('catch_251');
    if (count >= 500) trackAchievement('catch_500');
  }
}

function toggleShinyOwned(id) {
  if (!collectionData[id]) collectionData[id] = { captured: true };
  collectionData[id].shiny = !collectionData[id].shiny;
  saveCollection();
  updateModalCollectionBtns(id);
  if (collectionData[id].shiny) {
    showToast('✨ ¡Shiny registrado!');
    grantXP(20);
    trackAchievement('first_shiny');
  }
}

function updateModalCollectionBtns(id) {
  const capBtn = document.getElementById('modal-capture-btn');
  const shinyBtn = document.getElementById('modal-shiny-collect-btn');
  if (capBtn) capBtn.classList.toggle('captured', isCaptured(id));
  if (shinyBtn) shinyBtn.classList.toggle('shiny-owned', isShinyOwned(id));
}

document.getElementById('modal-capture-btn')?.addEventListener('click', () => {
  if (currentModalId) { toggleCapture(currentModalId); playClick(); }
});
document.getElementById('modal-shiny-collect-btn')?.addEventListener('click', () => {
  if (currentModalId) { toggleShinyOwned(currentModalId); playClick(); }
});

// Patch openModal to update collection buttons
const _origOpenModalV6 = window.openModal;
window.openModal = async function(id) {
  const r = await _origOpenModalV6(id);
  updateModalCollectionBtns(id);
  // load counters and build lazily
  loadCountersTab(id);
  loadBuildTab(id);
  return r;
};

function renderCollectionView() {
  renderCollectionProgress();
  renderCollectionAlbum('all');
  document.querySelectorAll('.collection-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.collection-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCollectionAlbum(btn.dataset.filter);
      playClick();
    });
  });
}

function renderCollectionProgress() {
  const wrap = document.getElementById('collection-progress-bars');
  if (!wrap) return;
  const genNames = ['ALL','Gen I','Gen II','Gen III','Gen IV','Gen V','Gen VI','Gen VII','Gen VIII','Gen IX'];
  const ranges = [[1,1025],[1,151],[152,251],[252,386],[387,493],[494,649],[650,721],[722,809],[810,905],[906,1025]];
  const totals = [1025,151,100,135,107,156,72,88,96,120];
  wrap.innerHTML = ranges.map((r, i) => {
    const total = totals[i];
    const count = Object.entries(collectionData).filter(([id,v]) => {
      const n = parseInt(id);
      return v.captured && n >= r[0] && n <= r[1];
    }).length;
    const pct = Math.min(100,(count/total)*100).toFixed(1);
    const hue = pct >= 100 ? '#ffd700' : pct >= 50 ? '#78c850' : '#6890f0';
    return `<div class="collection-prog-row">
      <span class="collection-prog-label">${genNames[i]}</span>
      <div class="collection-prog-bar-bg"><div class="collection-prog-bar-fill" style="width:${pct}%;background:${hue}"></div></div>
      <span class="collection-prog-count">${count}/${total}</span>
    </div>`;
  }).join('');
}

function renderCollectionAlbum(filter) {
  const album = document.getElementById('collection-album');
  if (!album || !allPokemon.length) return;
  album.innerHTML = '';
  // Show ALL generations, not just Gen I
  const list = allPokemon;
  let count = 0;
  list.forEach(p => {
    const cap = isCaptured(p.id);
    const shy = isShinyOwned(p.id);
    if (filter === 'captured' && !cap) return;
    if (filter === 'missing' && cap) return;
    if (filter === 'shiny' && !shy) return;
    // Apply gen filter if active
    if (filterGen && GEN_RANGES[filterGen]) {
      const [lo, hi] = GEN_RANGES[filterGen];
      if (p.id < lo || p.id > hi) return;
    }
    count++;
    const cell = document.createElement('div');
    cell.className = `album-cell${cap?' captured':' missing'}${shy?' shiny':''}`;
    cell.title = `#${p.id} ${p.name}`;
    cell.innerHTML = `
      <img src="${IMG_SPRITE(p.id)}" alt="${p.name}" loading="lazy">
      ${shy?'<span class="album-shiny-badge">✨</span>':''}
      <div class="album-capture-btn">
        <span class="capture-toggle" title="${cap?'Quitar':'Capturar'}">${cap?'✅':'➕'}</span>
        <span class="shiny-toggle-album" title="Shiny">${shy?'💛':'✨'}</span>
      </div>`;
    cell.querySelector('.capture-toggle').addEventListener('click', (e) => { e.stopPropagation(); toggleCapture(p.id); cell.classList.toggle('captured', isCaptured(p.id)); cell.classList.toggle('missing', !isCaptured(p.id)); });
    cell.querySelector('.shiny-toggle-album').addEventListener('click', (e) => { e.stopPropagation(); toggleShinyOwned(p.id); cell.classList.toggle('shiny', isShinyOwned(p.id)); });
    cell.addEventListener('click', () => { openModal(p.id); playClick(); });
    album.appendChild(cell);
  });
  if (!count) album.innerHTML = '<div style="color:var(--muted);padding:2rem;text-align:center">No hay Pokémon en esta categoría.</div>';
}

/* ════════════════════════════════════════════
   2. TRAINER XP + ACHIEVEMENTS
   ════════════════════════════════════════════ */
let trainerXP = parseInt(localStorage.getItem(STORAGE_KEYS.XP) || '0');
const XP_PER_LEVEL = [0,100,220,380,600,900,1300,1800,2500,3300,4500];

function getTrainerLevel() {
  for (let i = XP_PER_LEVEL.length - 1; i >= 0; i--) {
    if (trainerXP >= XP_PER_LEVEL[i]) return i + 1;
  }
  return 1;
}

function grantXP(amount) {
  const oldLevel = getTrainerLevel();
  trainerXP += amount;
  localStorage.setItem(STORAGE_KEYS.XP, trainerXP);
  const newLevel = getTrainerLevel();
  if (newLevel > oldLevel) {
    showToast(`🎉 ¡Subiste al Nivel ${newLevel} de Entrenador!`);
    spawnConfetti();
  }
}

let unlockedAchievements = JSON.parse(localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS) || '[]');

function trackAchievement(id) {
  if (unlockedAchievements.includes(id)) return;
  unlockedAchievements.push(id);
  localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(unlockedAchievements));
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (ach) {
    showToast(`🏅 Logro: ${ach.name}`);
    grantXP(ach.xp || 50);
  }
}

const ACHIEVEMENTS = [
  { id:'first_open',    icon:'🔍', name:'Primer Vistazo',       desc:'Abre tu primer Pokémon.',                    xp:10  },
  { id:'first_fav',     icon:'⭐', name:'¡Me gusta!',           desc:'Añade tu primer favorito.',                  xp:10  },
  { id:'first_capture', icon:'🎯', name:'¡Atrápalos Ya!',       desc:'Registra tu primera captura.',               xp:20  },
  { id:'first_shiny',   icon:'✨', name:'¡Es Brillante!',       desc:'Registra tu primer Pokémon shiny.',          xp:50  },
  { id:'catch_50',      icon:'📒', name:'Coleccionista',         desc:'Captura 50 Pokémon diferentes.',             xp:100 },
  { id:'catch_151',     icon:'📕', name:'Maestro de Kanto',     desc:'Completa la Pokédex de Kanto (Gen I).',      xp:500 },
  { id:'catch_251',     icon:'📗', name:'Campeón de Johto',     desc:'Captura 251 Pokémon.',                       xp:500 },
  { id:'catch_500',     icon:'📘', name:'Medio Millar',         desc:'Captura 500 Pokémon diferentes.',            xp:1000},
  { id:'trivia_10',     icon:'🧠', name:'Sabio Pokémon',        desc:'Consigue racha de 10 en Trivia.',            xp:80  },
  { id:'battle_3',      icon:'⚔️', name:'Combatiente',          desc:'Gana 3 batallas.',                           xp:60  },
  { id:'team_full',     icon:'🛡️', name:'Equipo Completo',      desc:'Construye un equipo de 6 Pokémon.',          xp:80  },
  { id:'quiz_done',     icon:'🔮', name:'Alma Pokémon',         desc:'Completa el quiz de personalidad.',          xp:40  },
  { id:'nuzlocke_start',icon:'☠️', name:'Modo Difícil',         desc:'Inicia un Nuzlocke.',                        xp:30  },
  { id:'modal_100',     icon:'📚', name:'Enciclopedista',       desc:'Abre 100 fichas de Pokémon.',                xp:150 },
  { id:'all_types',     icon:'🌈', name:'Maestro de Tipos',     desc:'Consulta la tabla de todos los tipos.',      xp:60  },
];

function renderAchievementsView() {
  updateTrainerCard(); // Siempre refrescar datos al abrir
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = unlockedAchievements.includes(a.id);
    return `<div class="achievement-card ${unlocked?'unlocked':'locked'}">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-info">
        <div class="achievement-name">${a.name}</div>
        <div class="achievement-desc">${a.desc}</div>
        ${unlocked ? `<div class="achievement-unlock">✅ Desbloqueado · +${a.xp} XP</div>` : `<div class="achievement-unlock" style="color:var(--muted)">🔒 Bloqueado</div>`}
      </div>
    </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   TRAINER CARD: nombre, nivel, XP, stats
═══════════════════════════════════════════ */

// Títulos por nivel
const TRAINER_TITLES = [
  'Entrenador Novato', 'Explorador Pokémon', 'Rival en Ascenso',
  'Maestro de Gimnasio', 'Alto Mando', 'Campeón Regional',
  'Maestro Pokémon', 'Leyenda Viviente', 'Guardián de Pokémon', 'Maestro Supremo', 'CAMPEÓN ETERNO'
];

function updateTrainerCard() {
  const level = getTrainerLevel();
  const xpFloor = XP_PER_LEVEL[level - 1] || 0;
  const xpCeil  = XP_PER_LEVEL[level]     || XP_PER_LEVEL[XP_PER_LEVEL.length - 1];
  const currentXP = trainerXP - xpFloor;
  const nextXP    = xpCeil - xpFloor;
  const pct = Math.min(100, (currentXP / nextXP) * 100).toFixed(1);

  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  const setW = (id, w) => { const el = document.getElementById(id); if (el) el.style.width = w; };

  set('trainer-level-val', level);
  set('trainer-xp-val',    currentXP);
  set('trainer-xp-next',   nextXP);
  setW('trainer-xp-bar',   pct + '%');

  const titleEl = document.getElementById('trainer-badge-title');
  if (titleEl) titleEl.textContent = TRAINER_TITLES[Math.min(level - 1, TRAINER_TITLES.length - 1)];

  // Stats en vivo
  const captures  = Object.values(collectionData || {}).filter(v => v.captured).length;
  const shinies   = Object.values(collectionData || {}).filter(v => v.shiny).length;
  const favsCount = favorites.length;
  set('stat-captures',    captures);
  set('stat-shinies',     shinies);
  set('stat-favs',        favsCount);
  set('stat-achievements', unlockedAchievements.length);
  set('stat-battles',      localStorage.getItem(STORAGE_KEYS.WINS) || '0');
  set('stat-opens',        localStorage.getItem(STORAGE_KEYS.MODAL_OPENS) || '0');
}
updateTrainerCard();

// Nombre del entrenador: persistencia
(function initTrainerName() {
  const input = document.getElementById('trainer-name-input');
  if (!input) return;
  input.value = localStorage.getItem(STORAGE_KEYS.TRAINER_NAME) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEYS.TRAINER_NAME, input.value.trim() || '');
  });
})();

// Track openModal for achievements
let modalOpenCount = parseInt(localStorage.getItem(STORAGE_KEYS.MODAL_OPENS) || '0');
const _origOpenModalAch = window.openModal;
window.openModal = async function(id) {
  modalOpenCount++;
  localStorage.setItem(STORAGE_KEYS.MODAL_OPENS, modalOpenCount);
  if (modalOpenCount === 1) trackAchievement('first_open');
  if (modalOpenCount >= 100) trackAchievement('modal_100');
  return _origOpenModalAch(id);
};

/* ════════════════════════════════════════════
   3. DAILY MISSIONS
   ════════════════════════════════════════════ */
function getDailyMissionSeed() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}
function hashStr(s) {
  let h = 0; for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const MISSION_TEMPLATES = [
  { id:'m_trivia5',  icon:'🧠', name:'Trivia Expert',       desc:'Responde 5 preguntas de trivia.',        type:'trivia',   target:5,  xp:30 },
  { id:'m_open10',   icon:'🔍', name:'Investigador',        desc:'Abre la ficha de 10 Pokémon.',           type:'opens',    target:10, xp:25 },
  { id:'m_fav3',     icon:'⭐', name:'Fan Declarado',       desc:'Añade 3 Pokémon a favoritos.',           type:'favs',     target:3,  xp:20 },
  { id:'m_capture5', icon:'🎯', name:'Cazador',             desc:'Registra 5 capturas nuevas.',            type:'captures', target:5,  xp:40 },
  { id:'m_battle3',  icon:'⚔️', name:'Combatiente',        desc:'Juega 3 batallas en modo batalla.',      type:'battles',  target:3,  xp:35 },
  { id:'m_sil3',     icon:'👤', name:'¡Quién es ese?',     desc:'Identifica correctamente 3 siluetas.',   type:'silouettes',target:3, xp:30 },
  { id:'m_types',    icon:'⚡', name:'Teórico',             desc:'Visita la tabla de tipos.',              type:'types_view',target:1, xp:15 },
  { id:'m_random5',  icon:'🎲', name:'A la Aventura',       desc:'Usa el botón Random 5 veces.',          type:'randoms',  target:5,  xp:20 },
];

let missionState = JSON.parse(localStorage.getItem(STORAGE_KEYS.MISSIONS) || '{}');
if (missionState.date !== getDailyMissionSeed()) {
  missionState = { date: getDailyMissionSeed(), progress: {} };
  localStorage.setItem(STORAGE_KEYS.MISSIONS, JSON.stringify(missionState));
}

function getMissionsForToday() {
  const seed = hashStr(getDailyMissionSeed());
  const shuffled = [...MISSION_TEMPLATES].sort((a,b) => hashStr(a.id+seed) - hashStr(b.id+seed));
  return shuffled.slice(0, 3);
}

function incrementMissionProgress(type, amount = 1) {
  const missions = getMissionsForToday();
  let anyCompleted = false;
  missions.forEach(m => {
    if (m.type !== type) return;
    const prev = missionState.progress[m.id] || 0;
    if (prev >= m.target) return;
    missionState.progress[m.id] = Math.min(m.target, prev + amount);
    if (missionState.progress[m.id] >= m.target && prev < m.target) {
      anyCompleted = true;
      grantXP(m.xp);
      setTimeout(() => { showToast(`🎯 Misión completada: ${m.name}!`); spawnConfetti(); }, 200);
    }
  });
  localStorage.setItem(STORAGE_KEYS.MISSIONS, JSON.stringify(missionState));
  if (anyCompleted) {
    const allDone = missions.every(m => (missionState.progress[m.id]||0) >= m.target);
    if (allDone) { trackAchievement('all_missions_done'); grantXP(50); }
  }
}

function renderMissionsView() {
  const dateEl = document.getElementById('missions-date');
  if (dateEl) dateEl.textContent = '📅 ' + new Date().toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long' }).toUpperCase();

  const list = document.getElementById('missions-list');
  if (!list) return;
  const missions = getMissionsForToday();
  list.innerHTML = missions.map(m => {
    const prog = missionState.progress[m.id] || 0;
    const done = prog >= m.target;
    const pct = Math.min(100, (prog / m.target) * 100).toFixed(0);
    return `<div class="mission-card ${done?'completed':''}">
      <div class="mission-icon">${m.icon}</div>
      <div class="mission-info">
        <div class="mission-name">${m.name}</div>
        <div class="mission-desc">${m.desc}</div>
        <div class="mission-reward">+${m.xp} XP</div>
        <div class="mission-progress-wrap">
          <div class="mission-progress-bg"><div class="mission-progress-fill" style="width:${pct}%"></div></div>
        </div>
        <div style="font-size:0.65rem;color:var(--muted);margin-top:0.2rem">${prog} / ${m.target}</div>
      </div>
      <div class="mission-status">${done ? '✅' : '⏳'}</div>
    </div>`;
  }).join('');

  // Challenges
  const challenges = document.getElementById('challenges-list');
  if (challenges) {
    const specials = [
      { icon:'🏆', name:'Racha Perfecta', desc:'Consigue racha de 10 en Trivia sin fallar.', xp:100, done: triviaStreak >= 10 },
      { icon:'📦', name:'Team Completo', desc:'Construye un equipo de 6 Pokémon.', xp:80, done: teamSlots.filter(Boolean).length === 6 },
      { icon:'🎯', name:'Coleccionista Kanto', desc:'Captura todos los Pokémon de Gen I.', xp:500, done: Object.entries(collectionData).filter(([id,v]) => v.captured && parseInt(id)>=1 && parseInt(id)<=151).length >= 151 },
    ];
    challenges.innerHTML = specials.map(c => `
      <div class="mission-card ${c.done?'completed':''}">
        <div class="mission-icon">${c.icon}</div>
        <div class="mission-info">
          <div class="mission-name">${c.name}</div>
          <div class="mission-desc">${c.desc}</div>
          <div class="mission-reward">+${c.xp} XP</div>
        </div>
        <div class="mission-status">${c.done ? '✅' : '🔒'}</div>
      </div>`).join('');
  }
}

// Hook mission tracking to existing functions
const _origToggleFav = toggleFav;
window.toggleFav = function(id, btn) {
  _origToggleFav(id, btn);
  incrementMissionProgress('favs');
  trackAchievement('first_fav');
};

const _origToggleCapture = toggleCapture;
window.toggleCapture = function(id) {
  _origToggleCapture(id);
  incrementMissionProgress('captures');
};

// Track random button
document.getElementById('random-btn')?.addEventListener('click', () => { incrementMissionProgress('randoms'); });

// Track types view
document.querySelectorAll('.tab-btn').forEach(b => {
  if (b.dataset.view === 'types') b.addEventListener('click', () => { incrementMissionProgress('types_view'); trackAchievement('all_types'); });
});

/* ════════════════════════════════════════════
   4. TEAM BUILDER WITH SYNERGY ANALYSIS
   ════════════════════════════════════════════ */
let teamSlots = [null,null,null,null,null,null];
let savedTeam = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEAM) || '[]');
if (savedTeam.length) teamSlots = [...savedTeam, ...Array(6).fill(null)].slice(0, 6);

function saveTeam() { localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(teamSlots)); }

function renderTeamSlots() {
  const wrap = document.getElementById('team-slots');
  if (!wrap) return;
  wrap.innerHTML = '';
  teamSlots.forEach((p, i) => {
    const slot = document.createElement('div');
    slot.className = `team-slot ${p ? 'filled' : 'empty'}`;
    if (p) {
      const typeBadges = p.types.map(t => `<span class="type-badge" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.45rem">${getTypeLabel(t)}</span>`).join('');
      slot.innerHTML = `
        <button class="team-slot-remove" data-i="${i}" title="Quitar">✕</button>
        <img src="${IMG_SPRITE(p.id)}" alt="${p.name}">
        <div class="team-slot-name">${p.name}</div>
        <div class="team-slot-types">${typeBadges}</div>`;
      slot.querySelector('.team-slot-remove').addEventListener('click', (e) => { e.stopPropagation(); teamSlots[i] = null; saveTeam(); renderTeamSlots(); updateTeamAnalysis(); playClick(); });
    } else {
      slot.innerHTML = `<span style="font-size:1.8rem;opacity:0.3">🎯</span>`;
      slot.addEventListener('click', () => { document.getElementById('team-search-wrap').style.display = ''; document.getElementById('team-search-input').focus(); document.getElementById('team-search-input').dataset.slot = i; playClick(); });
    }
    wrap.appendChild(slot);
  });

  if (teamSlots.filter(Boolean).length === 6) trackAchievement('team_full');
  updateTeamAnalysis();
  setupTeamSearch();
}

function setupTeamSearch() {
  const input = document.getElementById('team-search-input');
  const sugg = document.getElementById('team-sugg');
  if (!input || !sugg) return;
  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { sugg.innerHTML=''; sugg.classList.remove('open'); return; }
    const matches = allPokemon.filter(p => p.name.includes(q) || String(p.id).includes(q)).slice(0, 6);
    if (!matches.length) { sugg.classList.remove('open'); return; }
    sugg.innerHTML = matches.map(p => `<div class="compare-suggestion-item" data-id="${p.id}"><img src="${IMG_SPRITE(p.id)}" width="24"><span>${p.name}</span></div>`).join('');
    sugg.classList.add('open');
    sugg.querySelectorAll('.compare-suggestion-item').forEach(item => {
      item.addEventListener('click', async () => {
        const id = parseInt(item.dataset.id);
        let pData = pokeCache.get(id) || await fetchPoke(id);
        const slotIdx = parseInt(input.dataset.slot);
        if (!isNaN(slotIdx) && pData) {
          teamSlots[slotIdx] = pData;
          saveTeam();
          renderTeamSlots();
          document.getElementById('team-search-wrap').style.display = 'none';
          input.value = '';
          sugg.innerHTML = '';
          sugg.classList.remove('open');
          playClick();
        }
      });
    });
  };
}

document.getElementById('team-add-btn')?.addEventListener('click', () => {
  const freeSlot = teamSlots.indexOf(null);
  if (freeSlot === -1) { showToast('¡Equipo lleno! Quita un Pokémon primero.'); return; }
  const wrap = document.getElementById('team-search-wrap');
  wrap.style.display = '';
  document.getElementById('team-search-input').dataset.slot = freeSlot;
  document.getElementById('team-search-input').focus();
  playClick();
});

document.getElementById('team-clear-btn')?.addEventListener('click', () => {
  teamSlots = [null,null,null,null,null,null];
  saveTeam(); renderTeamSlots(); playClick();
});

function updateTeamAnalysis() {
  const members = teamSlots.filter(Boolean);
  const scoreEl = document.getElementById('synergy-score-val');
  const ring = document.getElementById('synergy-ring-fill');
  const weakEl = document.getElementById('team-weakness-chart');
  const alertsEl = document.getElementById('team-alerts');

  if (members.length === 0) {
    if (scoreEl) scoreEl.textContent = '—';
    if (ring) ring.style.strokeDashoffset = '213.6';
    if (weakEl) weakEl.innerHTML = '';
    if (alertsEl) alertsEl.innerHTML = '<div style="color:var(--muted);font-size:0.8rem">Añade Pokémon para ver el análisis.</div>';
    return;
  }

  // Count type weaknesses across team
  const weaknessCounts = {};
  members.forEach(p => {
    Object.entries(TYPE_RELATIONS).forEach(([attType, rel]) => {
      let mult = 1;
      p.types.forEach(defType => {
        const tr = TYPE_RELATIONS[defType];
        if (tr?.immune?.includes(attType)) mult *= 0;
        else if (tr?.weak?.includes(attType)) mult *= 2;
        else if (tr?.resist?.includes(attType)) mult *= 0.5;
      });
      if (mult >= 2) {
        weaknessCounts[attType] = (weaknessCounts[attType] || 0) + 1;
      }
    });
  });

  // Synergy score (100 = perfect coverage, penalize for >2 shared weaknesses)
  let penalty = 0;
  Object.values(weaknessCounts).forEach(c => { if (c >= 3) penalty += 15; else if (c >= 2) penalty += 5; });
  const typesCovered = new Set(members.flatMap(p => p.types)).size;
  const coverageBonus = Math.min(40, typesCovered * 6);
  const score = Math.max(0, Math.min(100, 60 + coverageBonus - penalty));

  if (scoreEl) scoreEl.textContent = score;
  if (ring) {
    const offset = 213.6 - (213.6 * score / 100);
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = score >= 75 ? '#78c850' : score >= 50 ? 'var(--yellow)' : '#f85888';
  }

  // Weakness chart
  if (weakEl) {
    const sorted = Object.entries(weaknessCounts).sort((a,b)=>b[1]-a[1]).slice(0,6);
    weakEl.innerHTML = '<h4>DEBILIDADES COMPARTIDAS</h4>' + (sorted.length ? sorted.map(([t,c]) =>
      `<div class="weakness-type-row">
        <span class="type-badge" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.45rem">${getTypeLabel(t)}</span>
        <div style="flex:1;height:6px;background:rgba(255,255,255,0.07);border-radius:50px;overflow:hidden"><div style="width:${(c/members.length)*100}%;height:100%;background:${c>=3?'#f85888':c>=2?'#f5ac78':'#a8a878'};border-radius:50px"></div></div>
        <span class="weakness-type-count" style="color:${c>=3?'#f85888':c>=2?'#f5ac78':'var(--muted)'}">${c}/${members.length}</span>
      </div>`).join('') : '<div style="color:var(--muted);font-size:0.75rem">Sin debilidades compartidas 🎉</div>');
  }

  // Alerts
  if (alertsEl) {
    const alerts = [];
    Object.entries(weaknessCounts).forEach(([t, c]) => {
      if (c >= 4) alerts.push({ type:'warn', msg:`⚠️ ${c}/${members.length} Pokémon son débiles a ${getTypeLabel(t)}. Considera un tipo ${getTypeLabel(t)}-resistente.` });
    });
    const types = new Set(members.flatMap(p => p.types));
    if (!types.has('steel') && !types.has('rock') && !types.has('ground')) alerts.push({ type:'info', msg:'💡 Sin Acero/Roca/Tierra. Considera cubrir los tipos físicos.' });
    if (members.length >= 4 && new Set(members.map(p=>p.types[0])).size < 3) alerts.push({ type:'warn', msg:'⚠️ Poca diversidad de tipos en el equipo.' });
    if (score >= 80) alerts.push({ type:'good', msg:'✅ ¡Excelente sinergia! El equipo tiene buena cobertura.' });
    alertsEl.innerHTML = alerts.map(a => `<div class="team-alert ${a.type}">${a.msg}</div>`).join('') || '<div style="color:var(--muted);font-size:0.75rem">Añade más Pokémon para ver alertas.</div>';
  }
}

/* ════════════════════════════════════════════
   5. COUNTERS TAB IN MODAL
   ════════════════════════════════════════════ */
function loadCountersTab(id) {
  const panel = document.getElementById('modal-counters-content');
  if (!panel) return;
  panel.innerHTML = '<div style="color:var(--muted);padding:1rem;text-align:center">Calculando...</div>';

  const target = pokeCache.get(id);
  if (!target) { panel.innerHTML = '<p style="color:var(--muted);padding:1rem">Datos no disponibles.</p>'; return; }

  // Find what beats this pokemon (types that are super effective against it)
  const effectiveAgainst = [];
  Object.entries(TYPE_RELATIONS).forEach(([attType, rel]) => {
    let mult = 1;
    target.types.forEach(defType => {
      const tr = TYPE_RELATIONS[defType];
      if (tr?.immune?.includes(attType)) mult *= 0;
      else if (tr?.weak?.includes(attType)) mult *= 2;
      else if (tr?.resist?.includes(attType)) mult *= 0.5;
    });
    if (mult >= 2) effectiveAgainst.push({ type: attType, mult });
  });

  // Find what this pokemon beats
  const pokemonBeats = [];
  Object.entries(TYPE_RELATIONS).forEach(([defType, rel]) => {
    let mult = 1;
    target.types.forEach(attType => {
      const tr = TYPE_RELATIONS[defType];
      if (tr?.immune?.includes(attType)) mult *= 0;
      else if (tr?.weak?.includes(attType)) mult *= 2;
      else if (tr?.resist?.includes(attType)) mult *= 0.5;
    });
    if (mult >= 2) pokemonBeats.push(defType);
  });

  // Find top counters from cached pokemon
  const allCached = [];
  pokeCache.forEach(p => { if (p && p.raw) allCached.push(p); });

  const counters = allCached.filter(p => {
    // Must have a type that is super effective against target
    return p.types.some(t => effectiveAgainst.some(e => e.type === t));
  }).sort((a,b) => {
    const bst_a = a.raw.stats.reduce((s,x)=>s+x.base_stat, 0);
    const bst_b = b.raw.stats.reduce((s,x)=>s+x.base_stat, 0);
    return bst_b - bst_a;
  }).slice(0, 6);

  const threatened = allCached.filter(p => {
    return pokemonBeats.some(bt => p.types.includes(bt));
  }).sort((a,b) => {
    const bst_a = a.raw.stats.reduce((s,x)=>s+x.base_stat, 0);
    const bst_b = b.raw.stats.reduce((s,x)=>s+x.base_stat, 0);
    return bst_a - bst_b;
  }).slice(0, 6);

  const effList = effectiveAgainst.map(e => `<span class="type-badge" style="--tc:${TYPE_COLORS[e.type]||'#888'};font-size:0.5rem">${getTypeLabel(e.type)} ×${e.mult}</span>`).join(' ');
  const threatensList = pokemonBeats.map(t => `<span class="type-badge" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.5rem">${getTypeLabel(t)}</span>`).join(' ');

  panel.innerHTML = `
    <div style="margin-bottom:1rem;font-size:0.8rem;color:var(--muted)">
      <strong style="color:var(--text)">Débil a:</strong> ${effList || '—'}<br>
      <strong style="color:var(--text)">Amenaza a:</strong> ${threatensList || '—'}
    </div>
    <div class="counters-grid">
      <div>
        <div class="counters-col-title">☠️ LO CONTRARESTAN</div>
        ${counters.length ? counters.map(p => `
          <div class="counter-item" data-id="${p.id}">
            <img src="${IMG_SPRITE(p.id)}" alt="${p.name}">
            <div><div class="counter-item-name">${p.name}</div>
            <div class="counter-item-reason">${p.types.map(t=>`<span class="type-badge" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.42rem">${getTypeLabel(t)}</span>`).join(' ')}</div></div>
          </div>`).join('') : '<div style="color:var(--muted);font-size:0.8rem;padding:0.5rem">Sin datos suficientes.</div>'}
      </div>
      <div>
        <div class="counters-col-title">🎯 ÉL LOS AMENAZA</div>
        ${threatened.length ? threatened.map(p => `
          <div class="counter-item" data-id="${p.id}">
            <img src="${IMG_SPRITE(p.id)}" alt="${p.name}">
            <div><div class="counter-item-name">${p.name}</div>
            <div class="counter-item-reason">${p.types.map(t=>`<span class="type-badge" style="--tc:${TYPE_COLORS[t]||'#888'};font-size:0.42rem">${getTypeLabel(t)}</span>`).join(' ')}</div></div>
          </div>`).join('') : '<div style="color:var(--muted);font-size:0.8rem;padding:0.5rem">Sin datos suficientes.</div>'}
      </div>
    </div>`;
  panel.querySelectorAll('.counter-item[data-id]').forEach(item => {
    item.addEventListener('click', () => { openModal(parseInt(item.dataset.id)); playClick(); });
  });
}

/* ════════════════════════════════════════════
   6. COMPETITIVE BUILD TAB
   ════════════════════════════════════════════ */
const COMP_SETS = {
  6:    [{ name:'Charizard Mixed', moves:['Flamethrower','Air Slash','Dragon Pulse','Roost'], nature:'Timid', evs:'252 SpA / 4 SpD / 252 Spe', item:'Choice Specs', desc:'Sweeper especial de alta velocidad.' }],
  149:  [{ name:'Dragonite Bulky', moves:['Dragon Dance','Extreme Speed','Earthquake','Fire Punch'], nature:'Adamant', evs:'252 Atk / 4 HP / 252 Spe', item:'Lum Berry', desc:'Setup físico con cobertura completa.' }],
  248:  [{ name:'Tyranitar Sand', moves:['Stone Edge','Crunch','Earthquake','Dragon Dance'], nature:'Jolly', evs:'252 Atk / 4 HP / 252 Spe', item:'Lum Berry', desc:'Amenaza física con tormenta de arena.' }],
  445:  [{ name:'Garchomp Sweeper', moves:['Earthquake','Scale Shot','Fire Fang','Swords Dance'], nature:'Jolly', evs:'252 Atk / 4 HP / 252 Spe', item:'Rocky Helmet', desc:'El sweeper físico más temido de OU.' }],
  658:  [{ name:'Greninja Specs', moves:['Hydro Pump','Dark Pulse','Ice Beam','U-turn'], nature:'Timid', evs:'252 SpA / 4 SpD / 252 Spe', item:'Choice Specs', desc:'Sweeper especial ultrarrápido.' }],
  800:  [{ name:'Necrozma Ultra', moves:['Sunsteel Strike','Moongeist Beam','Heat Wave','Morning Sun'], nature:'Modest', evs:'252 SpA / 4 SpD / 252 Spe', item:'Ultranecrozium Z', desc:'Mega-amenaza de Ubers.' }],
};
const DEFAULT_SETS = (name, types) => [{
  name: `${name} Standard`,
  moves: ['Movimiento STAB 1', 'Movimiento STAB 2', 'Cobertura', 'Movimiento de utilidad'],
  nature: types.includes('speed') ? 'Jolly/Timid' : 'Adamant/Modest',
  evs: '252 Atk/SpA · 252 Spe · 4 HP',
  item: 'Choice Band / Choice Specs',
  desc: 'Set estándar basado en tipos y rol.'
}];

function loadBuildTab(id) {
  const panel = document.getElementById('modal-build-content');
  if (!panel) return;
  const p = pokeCache.get(id);
  if (!p) { panel.innerHTML = '<p style="color:var(--muted);padding:1rem">Carga el Pokémon primero.</p>'; return; }

  const sets = COMP_SETS[id] || DEFAULT_SETS(p.name, p.types);

  panel.innerHTML = `
    <p style="font-size:0.78rem;color:var(--muted);margin-bottom:1rem">Sets competitivos sugeridos. Copia el formato Showdown con el botón 📋.</p>
    <div class="build-carousel">
      ${sets.map(s => `
        <div class="build-set-card">
          <div class="build-set-name">🏆 ${s.name}</div>
          <div class="build-set-row"><strong>Naturaleza:</strong> ${s.nature}</div>
          <div class="build-set-row"><strong>EVs:</strong> ${s.evs}</div>
          <div class="build-set-row"><strong>Objeto:</strong> ${s.item}</div>
          <div class="build-set-row"><strong>Movimientos:</strong><br>${s.moves.map(m=>`• ${m}`).join('<br>')}</div>
          <div style="font-size:0.7rem;color:var(--muted);margin-top:0.5rem;font-style:italic">${s.desc}</div>
          <button class="build-copy-btn" data-set='${JSON.stringify(s)}' data-name="${p.name}">📋 Copiar para Showdown</button>
        </div>`).join('')}
    </div>`;
  panel.querySelectorAll('.build-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = JSON.parse(btn.dataset.set);
      const name = btn.dataset.name;
      const text = `${name} @ ${s.item}\nAbility: —\nEVs: ${s.evs}\n${s.nature} Nature\n${s.moves.map(m=>`- ${m}`).join('\n')}`;
      navigator.clipboard?.writeText(text).then(() => showToast('📋 ¡Set copiado para Showdown!'));
      playClick();
    });
  });
}

/* ════════════════════════════════════════════
   7. POKÉMON PERSONALITY QUIZ
   ════════════════════════════════════════════ */
const QUIZ_QUESTIONS = [
  { q:'¿Cómo prefieres enfrentarte a los problemas?', opts:[{t:'Con fuerza directa',w:{fighting:2,fire:1}},{t:'Con astucia e inteligencia',w:{psychic:2,dark:1}},{t:'Con calma y paciencia',w:{water:2,grass:1}},{t:'Con velocidad y agilidad',w:{electric:2,flying:1}}] },
  { q:'¿Qué entorno te hace sentir más cómodo/a?', opts:[{t:'Las montañas y cuevas',w:{rock:2,ground:1}},{t:'El océano o los ríos',w:{water:2,ice:1}},{t:'Los bosques y praderas',w:{grass:2,bug:1}},{t:'Las ciudades y lugares concurridos',w:{steel:2,normal:1}}] },
  { q:'¿Cuál es tu mayor virtud?', opts:[{t:'La lealtad',w:{normal:2,fairy:1}},{t:'La inteligencia',w:{psychic:2,ghost:1}},{t:'La valentía',w:{fighting:2,fire:1}},{t:'La creatividad',w:{dragon:2,flying:1}}] },
  { q:'En batalla, eres...', opts:[{t:'El atacante agresivo',w:{fire:2,fighting:1}},{t:'El defensor indestructible',w:{steel:2,rock:1}},{t:'El estratega de apoyo',w:{psychic:2,fairy:1}},{t:'El que golpea y huye',w:{ghost:2,dark:1}}] },
  { q:'¿Qué te motiva más?', opts:[{t:'Proteger a los demás',w:{fairy:2,water:1}},{t:'Ser el más fuerte',w:{dragon:2,fighting:1}},{t:'Explorar lo desconocido',w:{flying:2,ghost:1}},{t:'El conocimiento y la sabiduría',w:{psychic:2,ice:1}}] },
  { q:'Tu hora favorita del día es...', opts:[{t:'El amanecer',w:{fire:2,flying:1}},{t:'La noche',w:{dark:2,ghost:1}},{t:'La tarde soleada',w:{electric:2,grass:1}},{t:'La madrugada fría',w:{ice:2,water:1}}] },
  { q:'¿Qué tipo de amigo/a eres?', opts:[{t:'El que siempre tiene un plan',w:{steel:2,dark:1}},{t:'El que te cuida y apoya',w:{fairy:2,normal:1}},{t:'El que te hace reír siempre',w:{electric:2,bug:1}},{t:'El misterioso e impredecible',w:{ghost:2,poison:1}}] },
  { q:'Si pudieras tener un superpoder, sería...', opts:[{t:'Telepatía y control mental',w:{psychic:3}},{t:'Control de elementos (agua, tierra, fuego)',w:{fire:2,water:2}},{t:'Invisibilidad y sigilo',w:{ghost:2,dark:1}},{t:'Velocidad sobrenatural',w:{electric:2,flying:1}}] },
];

const TYPE_TO_POKEMON = {
  fire:[6,157,257,390,667], water:[7,158,259,393,501], grass:[1,152,253,387,495],
  electric:[25,135,181,466,479], psychic:[65,196,280,475,517], fighting:[56,106,107,448,447],
  ghost:[94,200,354,425,487], dark:[197,215,359,461,492], dragon:[147,148,149,445,635],
  ice:[124,144,378,471,478], steel:[208,227,233,436,462], rock:[111,112,142,248,388],
  flying:[16,17,18,227,277], ground:[28,50,51,105,232], bug:[12,15,123,214,291],
  normal:[143,137,234,242,350], fairy:[35,36,176,182,303], poison:[23,24,29,30,48],
};

let quizAnswers = {};
let quizStep = 0;

function initQuiz() {
  quizStep = 0;
  quizAnswers = {};
  const result = document.getElementById('quiz-result');
  const opts = document.getElementById('quiz-options');
  const startBtn = document.getElementById('quiz-start-btn');
  if (result) result.style.display = 'none';
  if (opts) opts.style.display = '';
  if (startBtn) startBtn.style.display = '';
  updateQuizDisplay();
}

function updateQuizDisplay() {
  const qText = document.getElementById('quiz-q-text');
  const qNum = document.getElementById('quiz-q-num');
  const opts = document.getElementById('quiz-options');
  const fill = document.getElementById('quiz-progress-fill');

  if (quizStep >= QUIZ_QUESTIONS.length) {
    finishQuiz();
    return;
  }
  const q = QUIZ_QUESTIONS[quizStep];
  if (qText) qText.textContent = q.q;
  if (qNum) qNum.textContent = `Pregunta ${quizStep+1} / ${QUIZ_QUESTIONS.length}`;
  if (fill) fill.style.width = ((quizStep / QUIZ_QUESTIONS.length) * 100) + '%';
  if (opts) {
    opts.innerHTML = q.opts.map((o, i) => `<button class="quiz-opt" data-i="${i}">${o.t}</button>`).join('');
    opts.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const opt = q.opts[parseInt(btn.dataset.i)];
        Object.entries(opt.w).forEach(([type, pts]) => {
          quizAnswers[type] = (quizAnswers[type] || 0) + pts;
        });
        quizStep++;
        updateQuizDisplay();
        playClick();
      });
    });
  }
}

function finishQuiz() {
  const fill = document.getElementById('quiz-progress-fill');
  if (fill) fill.style.width = '100%';
  const opts = document.getElementById('quiz-options');
  const startBtn = document.getElementById('quiz-start-btn');
  if (opts) opts.style.display = 'none';
  if (startBtn) startBtn.textContent = '🔄 REPETIR QUIZ';

  // Find dominant type
  const sorted = Object.entries(quizAnswers).sort((a,b) => b[1]-a[1]);
  const topType = sorted[0]?.[0] || 'normal';
  const pool = TYPE_TO_POKEMON[topType] || [25];
  const resultId = pool[Math.floor(Math.random() * pool.length)];
  const resultPoke = pokeCache.get(resultId);
  const resultName = resultPoke ? resultPoke.name : `#${resultId}`;

  const typeDescs = {
    fire:'Eres apasionado/a, intenso/a y siempre vas al frente. Tu energía es contagiosa y no te rinde nada fácilmente.',
    water:'Eres adaptable, empático/a y siempre encuentras el camino. Fluyes con calma ante los obstáculos.',
    grass:'Eres paciente, protector/a y te conectas profundamente con la naturaleza y los demás.',
    electric:'Eres veloz, entusiasta y lleno/a de energía. ¡Nunca hay un momento aburrido contigo!',
    psychic:'Eres intuitivo/a, analítico/a y tu mente va siempre un paso por delante de los demás.',
    ghost:'Eres misterioso/a, profundo/a y ves el mundo de una manera que pocos comprenden.',
    dark:'Eres astuto/a, independiente y no te dejas llevar por las apariencias. Tu lealtad es absoluta.',
    dragon:'Eres ambicioso/a, poderoso/a y naciste para destacar. Nada te parece imposible.',
    ice:'Eres tranquilo/a, reservado/a y tu calma oculta una fuerza interior formidable.',
    fighting:'Eres directo/a, valiente y te levantas ante cualquier reto. Eres el alma del equipo.',
    steel:'Eres resistente, confiable y siempre cumples lo que prometes. La roca sobre la que todos se apoyan.',
    fairy:'Eres encantador/a, compasivo/a y defiendes a quienes más lo necesitan.',
  };

  const resultDiv = document.getElementById('quiz-result');
  if (resultDiv) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div class="quiz-result-pokemon pod-reveal">¡Tu Pokémon es ${resultName.toUpperCase()}!</div>
      <img class="quiz-result-img pod-reveal" src="${IMG(resultId)}" alt="${resultName}" style="animation-delay:0.2s">
      <div class="quiz-result-desc">${typeDescs[topType] || 'Un Pokémon único, como tú.'}</div>
      <div style="margin-top:1rem">
        <button class="team-add-btn" style="font-size:0.4rem" id="quiz-open-pokemon">📖 Ver Ficha</button>
      </div>`;
    resultDiv.querySelector('#quiz-open-pokemon')?.addEventListener('click', () => { openModal(resultId); playClick(); });
  }
  trackAchievement('quiz_done');
  spawnConfetti();
  document.getElementById('quiz-start-btn')?.addEventListener('click', initQuiz);
}

document.getElementById('quiz-start-btn')?.addEventListener('click', () => { quizStep = 0; quizAnswers = {}; updateQuizDisplay(); document.getElementById('quiz-result').style.display = 'none'; document.getElementById('quiz-start-btn').style.display = 'none'; playClick(); });

/* ════════════════════════════════════════════
   8. NUZLOCKE ASSISTANT
   ════════════════════════════════════════════ */
let nuzlockeData = JSON.parse(localStorage.getItem(STORAGE_KEYS.NUZLOCKE) || '{"team":[],"box":[],"memorial":[]}');

function saveNuzlocke() { localStorage.setItem(STORAGE_KEYS.NUZLOCKE, JSON.stringify(nuzlockeData)); }

function renderNuzlockeView() {
  trackAchievement('nuzlocke_start');
  renderNuzlockeSection('nuzlocke-team', nuzlockeData.team, true);
  renderNuzlockeSection('nuzlocke-box', nuzlockeData.box, false);
  renderNuzlockeMemorial();
  setupNuzlockeSearch();
}

function renderNuzlockeSection(gridId, list, isTeam) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = list.length ? list.map((entry, i) => `
    <div class="nuzlocke-pokemon-card" data-i="${i}" data-section="${isTeam?'team':'box'}">
      ${isTeam ? `<button class="nuzlocke-kill-btn" data-i="${i}">☠️</button>` : ''}
      ${isTeam ? `<button class="nuzlocke-box-btn" data-i="${i}">📦</button>` : `<button class="nuzlocke-kill-btn" data-i="${i}" style="left:auto;right:3px">☠️</button>`}
      <img src="${IMG_SPRITE(entry.id)}" alt="${entry.name}">
      <div class="nuzlocke-pokemon-name">${entry.name}</div>
      ${entry.nickname ? `<div class="nuzlocke-pokemon-nickname">"${entry.nickname}"</div>` : ''}
    </div>`).join('') :
    `<div style="color:var(--muted);font-size:0.8rem;padding:1rem;text-align:center">${isTeam?'Añade Pokémon al equipo.':'La caja está vacía.'}</div>`;

  grid.querySelectorAll('.nuzlocke-kill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i);
      const section = isTeam ? 'team' : 'box';
      const entry = nuzlockeData[section].splice(i, 1)[0];
      entry.diedAt = new Date().toLocaleDateString('es-ES');
      nuzlockeData.memorial.push(entry);
      saveNuzlocke();
      renderNuzlockeView();
      showToast(`💀 ${entry.name} ha caído en batalla...`);
      playClick();
    });
  });

  if (isTeam) {
    grid.querySelectorAll('.nuzlocke-box-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.i);
        const entry = nuzlockeData.team.splice(i, 1)[0];
        nuzlockeData.box.push(entry);
        saveNuzlocke();
        renderNuzlockeView();
        playClick();
      });
    });
  }
}

function renderNuzlockeMemorial() {
  const grid = document.getElementById('nuzlocke-memorial');
  if (!grid) return;
  grid.innerHTML = nuzlockeData.memorial.length ? nuzlockeData.memorial.map(e => `
    <div class="nuzlocke-memorial-item">
      <img src="${IMG_SPRITE(e.id)}" alt="${e.name}">
      <div>
        <div class="nuzlocke-memorial-name">🪦 ${e.nickname || e.name}</div>
        <div class="nuzlocke-memorial-date">Caído el ${e.diedAt || '—'}</div>
      </div>
    </div>`).join('') : '<div style="color:var(--muted);font-size:0.8rem">Ningún caído aún. ¡Cuídalos!</div>';
}

function setupNuzlockeSearch() {
  const input = document.getElementById('nuzlocke-search');
  const sugg = document.getElementById('nuzlocke-sugg');
  if (!input || !sugg) return;
  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { sugg.innerHTML = ''; return; }
    const matches = allPokemon.filter(p => p.name.includes(q)).slice(0, 5);
    sugg.innerHTML = matches.map(p => `<div class="compare-suggestion-item" data-id="${p.id}"><img src="${IMG_SPRITE(p.id)}" width="24"><span>${p.name}</span></div>`).join('');
    sugg.querySelectorAll('.compare-suggestion-item').forEach(item => {
      item.addEventListener('click', async () => {
        const id = parseInt(item.dataset.id);
        let p = pokeCache.get(id) || await fetchPoke(id);
        if (!p) return;
        const nickname = prompt(`Apodo para ${p.name} (opcional, Enter para saltar):`);
        nuzlockeData.team.push({ id: p.id, name: p.name, nickname: nickname || '' });
        saveNuzlocke();
        renderNuzlockeView();
        input.value = '';
        sugg.innerHTML = '';
        playClick();
      });
    });
  };
}

/* ════════════════════════════════════════════
   9. POKÉMON DEL DÍA
   ════════════════════════════════════════════ */


async function initDailyBanner() {
  const seen = localStorage.getItem(STORAGE_KEYS.DAILY_SEEN);
  const today = new Date().toDateString();
  if (seen === today) return; 

  const dayIndex = Math.floor(Date.now() / 86400000) % 151 + 1;
  const banner = document.getElementById('daily-banner');
  const img = document.getElementById('daily-banner-img');
  const name = document.getElementById('daily-banner-name');
  const fact = document.getElementById('daily-banner-fact');

  if (!banner) return;
  try {
    const specRes = await fetchWithRetry(`${API}/pokemon-species/${dayIndex}`);
    const spec = await specRes.json();
    const pokeRes = await fetchWithRetry(`${API}/pokemon/${dayIndex}`);
    const pokeData = await pokeRes.json();
    
    let flavorText = '¡Un Pokémon misterioso!';
    if (spec.flavor_text_entries) {
      const flavor = spec.flavor_text_entries.find(e=>e.language.name==='es') || spec.flavor_text_entries.find(e=>e.language.name==='en');
      if (flavor) flavorText = flavor.flavor_text.replace(/\f/g,' ').replace(/\n/g,' ');
    }
    
    img.src = IMG(dayIndex);
    img.alt = pokeData.name;
    const newImg = img.cloneNode(true);
    img.parentNode.replaceChild(newImg, img);
    newImg.addEventListener('click', () => { openModal(dayIndex); playClick(); });
    
    name.textContent = pokeData.name.toUpperCase();
    fact.textContent = flavorText;
    banner.style.display = 'flex';

    const oldClose = document.getElementById('daily-banner-close');
    const newClose = oldClose.cloneNode(true);
    oldClose.parentNode.replaceChild(newClose, oldClose);
    newClose.addEventListener('click', () => {
      banner.style.display = 'none';
      localStorage.setItem(STORAGE_KEYS.DAILY_SEEN, today);
      playClick();
    });
  } catch (e) {
    console.error("Daily banner err:", e);
  }
}

document.getElementById('daily-btn')?.addEventListener('click', () => {
  localStorage.removeItem(STORAGE_KEYS.DAILY_SEEN);
  initDailyBanner();
  document.querySelector('.tab-btn[data-view="dex"]')?.click();
  playClick();
});

// Init after data loads
setTimeout(initDailyBanner, 1500);

/* ════════════════════════════════════════════
   10. CONFETTI EFFECT
   ════════════════════════════════════════════ */
function spawnConfetti() {
  const colors = ['#ffd700','#f85888','#78c850','#6890f0','#f5ac78','#98d8d8'];
  for (let i = 0; i < 30; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.cssText = `left:${Math.random()*100}vw;top:${Math.random()*30}vh;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*0.5}s;animation-duration:${1+Math.random()}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
}

/* ════════════════════════════════════════════
   11. TRIVIA ACHIEVEMENT TRACKING
   ════════════════════════════════════════════ */
const _origLoadTrivia = loadTrivia;
window.loadTrivia = function() {
  if (triviaStreak >= 10) trackAchievement('trivia_10');
  incrementMissionProgress('trivia');
  return _origLoadTrivia();
};

/* ════════════════════════════════════════════
   12. BATTLE ACHIEVEMENT TRACKING
   ════════════════════════════════════════════ */
let battleWins = parseInt(localStorage.getItem(STORAGE_KEYS.WINS) || '0');
const _origEndBattle = endBattle;
window.endBattle = function(winnerSide) {
  if (winnerSide === 'player') {
    battleWins++;
    localStorage.setItem(STORAGE_KEYS.WINS, battleWins);
    incrementMissionProgress('battles');
    if (battleWins >= 3) trackAchievement('battle_3');
  }
  return _origEndBattle(winnerSide);
};

/* ════════════════════════════════════════════
   13. SILHOUETTE MISSION TRACKING  
   ════════════════════════════════════════════ */
const _origCheckSilAnswer = typeof checkSilAnswer !== 'undefined' ? checkSilAnswer : null;
// Track via silhouette correct answers
const _silObserver = new MutationObserver(() => {
  const score = document.getElementById('sil-correct-val');
  if (score && parseInt(score.textContent) > 0) {
    incrementMissionProgress('silouettes', 1); // properly increment by 1
  }
});
const silCorrect = document.getElementById('sil-correct-val');
if (silCorrect) _silObserver.observe(silCorrect, { childList:true, characterData:true, subtree:true });

/* ════════════════════════════════════════════
   14. EXPORT/IMPORT TRAINER DATA
   ════════════════════════════════════════════ */
document.getElementById('export-data-btn')?.addEventListener('click', () => {
  const data = {
    _pokedex_version: 'v9',
    _exported_at: new Date().toISOString(),
    collection: JSON.parse(localStorage.getItem(STORAGE_KEYS.COLLECTION) || '{}'),
    favorites: JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVS) || '[]'),
    team: JSON.parse(localStorage.getItem(STORAGE_KEYS.TEAM) || '[]'),
    achievements: JSON.parse(localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS) || '[]'),
    trainerXP: parseInt(localStorage.getItem(STORAGE_KEYS.XP) || '0'),
    trainerName: localStorage.getItem(STORAGE_KEYS.TRAINER_NAME) || '',
    nuzlocke: JSON.parse(localStorage.getItem(STORAGE_KEYS.NUZLOCKE) || '{"team":[],"box":[],"memorial":[]}'),
    battleWins: parseInt(localStorage.getItem(STORAGE_KEYS.WINS) || '0'),
    modalOpenCount: parseInt(localStorage.getItem(STORAGE_KEYS.MODAL_OPENS) || '0'),
    recentHistory: JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT) || '[]'),
    dailyMissions: JSON.parse(localStorage.getItem(STORAGE_KEYS.MISSIONS) || '{}'),
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'kanto',
    language: localStorage.getItem(STORAGE_KEYS.LANG) || 'es',
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `pokedex_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📤 ¡Datos exportados correctamente!');
  playClick();
});

document.getElementById('import-data-input')?.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = evt => {
    try {
      const data = JSON.parse(evt.target.result);
      if (!data._pokedex_version) throw new Error('Invalid format');
      // Restore all data
      if (data.collection) { localStorage.setItem(STORAGE_KEYS.COLLECTION, JSON.stringify(data.collection)); collectionData = data.collection; }
      if (data.favorites) { localStorage.setItem(STORAGE_KEYS.FAVS, JSON.stringify(data.favorites)); favorites.length = 0; favorites.push(...data.favorites); updateFavBadge(); }
      if (data.team) { localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(data.team)); }
      if (data.achievements) { localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(data.achievements)); unlockedAchievements.length = 0; unlockedAchievements.push(...data.achievements); }
      if (data.trainerXP !== undefined) { localStorage.setItem(STORAGE_KEYS.XP, data.trainerXP); trainerXP = data.trainerXP; }
      if (data.trainerName) { localStorage.setItem(STORAGE_KEYS.TRAINER_NAME, data.trainerName); const ni = document.getElementById('trainer-name-input'); if (ni) ni.value = data.trainerName; }
      if (data.nuzlocke) { localStorage.setItem(STORAGE_KEYS.NUZLOCKE, JSON.stringify(data.nuzlocke)); nuzlockeData = data.nuzlocke; }
      if (data.battleWins !== undefined) { localStorage.setItem(STORAGE_KEYS.WINS, data.battleWins); battleWins = data.battleWins; }
      if (data.modalOpenCount !== undefined) { localStorage.setItem(STORAGE_KEYS.MODAL_OPENS, data.modalOpenCount); modalOpenCount = data.modalOpenCount; }
      if (data.recentHistory) { localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(data.recentHistory)); recentHistory = data.recentHistory; renderRecentBar(); }
      if (data.dailyMissions) { localStorage.setItem(STORAGE_KEYS.MISSIONS, JSON.stringify(data.dailyMissions)); missionState = data.dailyMissions; }
      if (data.theme) { localStorage.setItem(STORAGE_KEYS.THEME, data.theme); setTheme(data.theme); }
      if (data.language) { localStorage.setItem(STORAGE_KEYS.LANG, data.language); currentLang = data.language; applyTranslations(); }
      updateTrainerCard();
      showToast('📥 ¡Datos importados! Tu progreso ha sido restaurado.');
      spawnConfetti();
      playClick();
    } catch (err) {
      showToast('❌ Error: archivo inválido. Asegúrate de que es un JSON exportado desde la Pokédex.');
    }
    e.target.value = ''; // reset file input
  };
  reader.readAsText(file);
});

/* ════════════════════════════════════════════
   15. COMPETITIVE TEAMS
   ════════════════════════════════════════════ */
const HISTORICAL_TEAMS = [
  {
    name: "Sandstorm Gen IV",
    author: "Meta Clásico OU",
    desc: "Tormenta Arena que dominó la cuarta generación, combinando atacantes poderosos y defensores impenetrables.",
    pokemons: [248, 445, 227, 448, 485, 121]
  },
  {
    name: "Drizzle Rain Gen V",
    author: "Guerra de Climas",
    desc: "El clima dominante de Teselia impulsado por la habilidad Llovizna de Politoed.",
    pokemons: [186, 230, 598, 641, 199, 593]
  },
  {
    name: "Gen III Advanced Stall",
    author: "SkarmBliss Core",
    desc: "El dúo defensivo Skarmory + Blissey que detuvo a los atacantes rápidos en el meta de GBA.",
    pokemons: [227, 242, 260, 344, 110, 94]
  },
  {
    name: "Gen I RBY Big Three",
    author: "Formatos Clásicos",
    desc: "El infame trío de la primera generación: Tauros rápido, Snorlax tanque y Alakazam destructor.",
    pokemons: [128, 143, 65, 113, 103, 121]
  },
  {
    name: "Gen II GSC CursemLax",
    author: "RestTalk Stall",
    desc: "Equipos centrados en agotar al rival usando a Snorlax inamovible con Maldición, Descanso y Sonámbulo.",
    pokemons: [143, 243, 227, 91, 248, 242]
  },
  {
    name: "VGC 2014 World Champion",
    author: "Se Jun Park",
    desc: "El equipo campeón del mundo que popularizó a Pachirisu para redirección de ataques sorprendiendo al mundo.",
    pokemons: [417, 282, 115, 445, 681, 448]
  },
  {
    name: "VGC 2015 CHALK",
    author: "Meta Estándar VGC",
    desc: "Cresselia, Heatran, Amoonguss, Landorus, Kangaskhan. La core más sólida y consistente campeona de 2015.",
    pokemons: [488, 485, 591, 645, 115, 642]
  },
  {
    name: "VGC 2016 Big Six",
    author: "Meta Primal",
    desc: "El infame 'Big Six', el equipo core dominante en el brutal formato VGC 2016 de legendarios desatados.",
    pokemons: [383, 716, 115, 437, 73, 169]
  },
  {
    name: "VGC 2017 AFK Core",
    author: "Región de Alola",
    desc: "Arcanine, Fini y Kartana. El core triple de Alola que balanceaba intimidación, terreno místico y daño de acero.",
    pokemons: [59, 788, 798, 233, 526, 445]
  },
  {
    name: "Gen VII Toxapex Stall",
    author: "Smogon OU",
    desc: "Regenerator Spam. La barrera defensiva más alta de Alola, con curación pasiva y envenenamiento duro.",
    pokemons: [748, 797, 113, 472, 302, 594]
  },
  {
    name: "Gen VIII VGC Sun Room",
    author: "Torkoal TR",
    desc: "Equipo híbrido de Sol y Espacio Raro usando la combinación letal de Torkoal y Venusaur Gigamax.",
    pokemons: [324, 3, 448, 892, 197, 479]
  },
  {
    name: "Gen VI Hyper Offense",
    author: "Bird Spam",
    desc: "El terror de Kalos: Talonflame con Alas Vendaval y Greninja Mutatipo obligando a respuestas rápidas.",
    pokemons: [663, 658, 115, 445, 479, 700]
  },
  {
    name: "VGC 2023 Paradox Balance",
    author: "Paldea Meta",
    desc: "La dominancia de Flutter Mane y Iron Hands dictando el metajuego regional de torneos en Switch.",
    pokemons: [987, 992, 591, 59, 964, 1002]
  },
  {
    name: "Gen 5 DragMag",
    author: "Estrategia Dragón/Acero",
    desc: "Magnezone atrapando checks de acero pesados mientras múltiples dragones destrozan en el mid/late game.",
    pokemons: [462, 381, 149, 373, 445, 612]
  },
  {
    name: "Gen 4 Azelf Lead HO",
    author: "Hyper Offense DP",
    desc: "El clásico inicio suicida con Azelf asegurando Trampa Rocas y Explosión para barrer velozmente con Lucario.",
    pokemons: [482, 448, 248, 94, 130, 212]
  },
  {
    name: "VGC 2018 RayOgre",
    author: "Ultra Series",
    desc: "La brutal ofensiva clima-control con Mega-Rayquaza y Primal-Kyogre respaldados por control terrénico.",
    pokemons: [384, 382, 716, 727, 786, 797]
  },
  {
    name: "Gen 8 OU Clefable Balance",
    author: "Smogon OU Galar",
    desc: "Clefable teleport Pivot. Control de partida sistemático basado en regeneración y la invulnerabilidad de Toxapex.",
    pokemons: [36, 748, 823, 887, 530, 537]
  },
  {
    name: "Gen 3 Baton Pass Chain",
    author: "Relevo Táctico",
    desc: "Estrategia de nicho encadenando aumentos de estadísticas inquebrantables con Smeargle, Ninjask y Vaporeon.",
    pokemons: [291, 235, 134, 212, 197, 135]
  },
  {
    name: "Gen 6 Mega Venusaur Bal",
    author: "Bulky Offense",
    desc: "El indiscutible tanque inmortal Mega-Venusaur protegiendo al equipo mientras prepara la victoria táctica.",
    pokemons: [3, 485, 645, 479, 36, 212]
  },
  {
    name: "VGC 2011 TerraCott",
    author: "Beat Up Combo",
    desc: "El dúo Terrakion/Whimsicott abusando de Paliza sobre Justiciero para aniquilar cualquier defensa enemiga.",
    pokemons: [639, 547, 641, 642, 591, 593]
  },
  {
    name: "VGC 2020 Cinderace FWG",
    author: "Fuego/Agua/Planta Core",
    desc: "El equilibrio moderno Gigamax con Cinderace, Rillaboom apoyando redirecciones de Togekiss inesquivables.",
    pokemons: [815, 812, 468, 887, 233, 727]
  },
  {
    name: "VGC 2024 DozoGiri",
    author: "Comandante Tóxico",
    desc: "Dondozo absorbiendo a Tatsugiri comandando un boost omnipotente mientras el resto bloquea resistencias.",
    pokemons: [977, 978, 1000, 149, 591, 992]
  },
  {
    name: "Gen 2 GSC ZapLax",
    author: "Dúo Eléctrico/Normal",
    desc: "Zapdos creando aberturas eléctricas masivas para Snorlax y Marowak portador de Hueso Grueso letal.",
    pokemons: [145, 143, 34, 103, 197, 105]
  },
  {
    name: "Gen 7 Hawlucha Terrain Seed",
    author: "Hyper Offense Alola",
    desc: "Tapu Koko activando el campo eléctrico detonando la Semilla Electro y habilidad Liviano de Hawlucha al instante.",
    pokemons: [785, 701, 645, 485, 658, 801]
  },
  {
    name: "Gen 8 Ubers Zacian Core",
    author: "Legendarios Galar",
    desc: "La infame reina suprema Zacian apoyada por el control oscuro psíquico de Calyrex domina Ubers a placer.",
    pokemons: [888, 898, 717, 890, 800, 382]
  },
  {
    name: "VGC 2012 Rain Room",
    author: "Lluvia/Espacio Raro",
    desc: "Doble amenaza de Politoed con Lluvia veloz o Ludicolo + Cresselia anulando y ganando la guerra de velocidades.",
    pokemons: [186, 272, 488, 376, 642, 237]
  },
  {
    name: "Gen 3 Tyranitar TSS",
    author: "Toxic Sandstorm Spikes",
    desc: "El daño pasivo definitivo. Púas, veneno y tormenta de arena erosionan al equipo rival garantizando Jaque Mate.",
    pokemons: [248, 227, 242, 260, 94, 142]
  },
  {
    name: "Gen 9 VGC Calyrex-Ice TR",
    author: "Trick Room Devastation",
    desc: "Calyrex Jinete Glacial imponiendo un reinado de Lanza Glacial aterradora e ineludible bajo el Espacio Raro.",
    pokemons: [898, 1017, 901, 233, 324, 1021]
  },
  {
    name: "Gen 6 VGC Dual Primal",
    author: "Guerra de Meteoros",
    desc: "Groudon y Kyogre Primigenios coexistiendo violentamente, dictando el flujo destructivo del clima y los OHKOs.",
    pokemons: [383, 382, 384, 115, 94, 488]
  },
  {
    name: "Gen 4 Metagross Anti-Lead",
    author: "Wallbreakers DP",
    desc: "Metagross deteniendo Trampa Rocas y barriendo focos para preparar un sweep masivo de Empoleon agilidad o Heatran.",
    pokemons: [376, 485, 479, 212, 248, 395]
  }
];

async function renderTeamsView() {
  const container = document.getElementById('teams-list');
  if (!container) return;
  container.innerHTML = HISTORICAL_TEAMS.map((team, idx) => `
    <div class="mission-card" style="flex-direction:column;align-items:flex-start;gap:1.5rem;background:var(--card);padding:1.5rem;border-radius:16px;">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center;">
        <div style="flex:1">
          <h3 style="margin:0;color:var(--text);font-size:1.2rem;font-weight:900"><span style="font-size:1.4rem">🏆</span> ${team.name}</h3>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.4rem;line-height:1.4;margin-right:1rem">${team.author} — ${team.desc}</div>
        </div>
        <button class="team-add-btn load-team-btn" data-idx="${idx}" style="font-size:0.85rem;padding:0.6rem 1rem;border-radius:20px;white-space:nowrap;display:flex;align-items:center;gap:0.4rem;margin:0">
          📥 Importar
        </button>
      </div>
      <div style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.5rem;width:100%;" class="custom-scroll">
        ${team.pokemons.map(id => `
          <div style="min-width:64px;height:64px;background:var(--card2);border:2px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform 0.2s, background 0.2s" onmouseover="this.style.transform='translateY(-4px)';this.style.background='var(--dark)'" onmouseout="this.style.transform='';this.style.background='var(--card2)'" onclick="openModal(${id})">
            <img src="${IMG_SPRITE(id)}" width="48" style="image-rendering:pixelated">
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.load-team-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const team = HISTORICAL_TEAMS[parseInt(btn.dataset.idx)];
      teamSlots = [null,null,null,null,null,null];
      
      showToast('📥 Descargando e importando... (${team.pokemons.length})');
      btn.disabled = true;
      btn.style.opacity = '0.5';
      
      try {
        for (let i=0; i < team.pokemons.length; i++) {
          let id = team.pokemons[i];
          let p = pokeCache.get(id);
          if (!p || !p.raw) {
            const res = await fetchWithRetry(`${API}/pokemon/${id}`);
            p = pokeCache.get(id) || {};
            p.raw = await res.json();
            pokeCache.set(id, p);
          }
          if (p && !p.name && p.raw) { p.name = p.raw.name; p.id = p.raw.id; p.types = p.raw.types.map(t=>t.type.name); }
          teamSlots[i] = p;
        }
        saveTeam();
        renderTeamSlots();
        showToast('✅ ¡Equipo configurado en tu Teambuilder!');
        spawnConfetti();
        playClick();
        
        setTimeout(() => {
          document.querySelector('.tab-btn[data-view="team"]')?.click();
        }, 1200);
      } catch (e) {
        showToast('❌ Error de red importando a los Pokémon.');
      } finally {
        btn.disabled = false;
        btn.style.opacity = '1';
      }
    });
  });
}

document.querySelectorAll('.tab-btn[data-view="teams"]').forEach(b => {
  b.addEventListener('click', () => { renderTeamsView(); });
});
// Pre-render teams list once so it's ready
renderTeamsView();





/* ════════════════════════════════════════════
   FINAL INIT
   ════════════════════════════════════════════ */
// initNavigation() ya fue llamado arriba — no repetir handlers aquí


