const fs = require('fs');
const file = 'c:\\Users\\cfgm2smxa11\\Documents\\E\\pokedex_v8.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Centralize localStorage
const storageObj = `const STORAGE_KEYS = {
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
};\n\nlet currentLang = `;
if (!content.includes('const STORAGE_KEYS')) {
  content = content.replace(/let currentLang = /g, storageObj);
  content = content.replace(/'pokedexLang'/g, 'STORAGE_KEYS.LANG');
  content = content.replace(/'pokedexTheme'/g, 'STORAGE_KEYS.THEME');
  content = content.replace(/'pokedexSound'/g, 'STORAGE_KEYS.SOUND');
  content = content.replace(/'pokedexFavs'/g, 'STORAGE_KEYS.FAVS');
  content = content.replace(/'pokedexRecent'/g, 'STORAGE_KEYS.RECENT');
  content = content.replace(/'pokedexNote_'/g, 'STORAGE_KEYS.NOTE_PREFIX');
  content = content.replace(/'pokedexCollection'/g, 'STORAGE_KEYS.COLLECTION');
  content = content.replace(/'trainerXP'/g, 'STORAGE_KEYS.XP');
  content = content.replace(/'achievements'/g, 'STORAGE_KEYS.ACHIEVEMENTS');
  content = content.replace(/'battleWins'/g, 'STORAGE_KEYS.WINS');
  content = content.replace(/'modalOpenCount'/g, 'STORAGE_KEYS.MODAL_OPENS');
  content = content.replace(/'trainerName'/g, 'STORAGE_KEYS.TRAINER_NAME');
  content = content.replace(/'dailyMissions'/g, 'STORAGE_KEYS.MISSIONS');
  content = content.replace(/'teamBuilderV6'/g, 'STORAGE_KEYS.TEAM');
  content = content.replace(/'nuzlockeV6'/g, 'STORAGE_KEYS.NUZLOCKE');
  content = content.replace(/'dailyBannerSeen'/g, 'STORAGE_KEYS.DAILY_SEEN');
}

// 2. CSS Deduplication
content = content.replace(/\.poke-stat-bar-wrap\s*\{[^}]*display:\s*none;[^}]*\}/, '');
content = content.replace(/(\.poke-stat-bar-wrap\s*\{[^\n]*margin-top:\s*0\.6rem;\s*)display:\s*flex;/g, '$1display: none;');
content = content.replace(/\.modal-header\s*\{\s*position:\s*relative;\s*overflow:\s*hidden;\s*\}/, '');

// 3. Accessibility Attributes
content = content.replace(/id="modal" class="modal"/g, 'id="modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-name"');
content = content.replace(/id="modal-capture-btn" class="modal-feature-btn" title="Atrapar"/g, 'id="modal-capture-btn" class="modal-feature-btn" title="Atrapar" aria-label="Atrapar Pokémon"');
content = content.replace(/id="modal-shiny-collect-btn" class="modal-feature-btn shiny" title="Registrar Shiny"/g, 'id="modal-shiny-collect-btn" class="modal-feature-btn shiny" title="Registrar Shiny" aria-label="Registrar Shiny"');
content = content.replace(/id="modal-close">✕<\/button>/g, 'id="modal-close" aria-label="Cerrar modal">✕</button>');
content = content.replace(/id="settings-close" class="settings-close">✕<\/button>/g, 'id="settings-close" class="settings-close" aria-label="Cerrar ajustes">✕</button>');
content = content.replace(/id="shiny-toggle" class="shiny-toggle">/g, 'id="shiny-toggle" class="shiny-toggle" aria-label="Alternar versión variocolor">');
content = content.replace(/id="sound-toggle" class="sound-toggle on" title="Toggle Sound">/g, 'id="sound-toggle" class="sound-toggle on" title="Toggle Sound" aria-label="Alternar sonido">');
content = content.replace(/id="view-grid" class="view-btn active" title="Grid View">/g, 'id="view-grid" class="view-btn active" title="Grid View" aria-label="Vista cuadrícula">');
content = content.replace(/id="view-list" class="view-btn" title="List View">/g, 'id="view-list" class="view-btn" title="List View" aria-label="Vista lista">');

if (!content.includes('mc.focus()')) {
  content = content.replace(/    document\.querySelector\('\.mtab\[data-tab="info"\]'\)\.classList\.add\('active'\);\s*document\.getElementById\('tab-info'\)\.classList\.add\('active'\);/g, 
  `    document.querySelector('.mtab[data-tab="info"]').classList.add('active');
      document.getElementById('tab-info').classList.add('active');
      setTimeout(() => { const mc = document.getElementById('modal-close'); if(mc) mc.focus(); }, 150);`);
}

// 4. Responsive Header & Sub-menu Teams Tab
if (!content.includes('id="mobile-menu-btn"')) {
  const hamburgerHTML = `<button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Abrir menú">☰</button>\n      <nav class="header-nav" id="main-nav">`;
  content = content.replace(/<nav class="header-nav" id="main-nav">/g, hamburgerHTML);
}

if (!content.includes('data-view="teams"')) {
  content = content.replace(/(<button class="tab-btn dropdown-item" data-view="team">[^<]*<\/button>)/, '$1\n            <button class="tab-btn dropdown-item" data-view="teams">🏆 Builds Meta</button>');
}

if (!content.includes('.mobile-menu-btn {')) {
  const hamburgerCSS = `
    .mobile-menu-btn { display: none; background: none; border: none; font-size: 1.6rem; color: var(--text); cursor: pointer; padding: 0.5rem; }
    @media (max-width: 768px) {
      .mobile-menu-btn { display: block; margin-right: 0.5rem; }
      .header-nav {
        display: none;
        position: absolute;
        top: 60px;
        left: 0; right: 0;
        background: var(--dark);
        flex-direction: column;
        padding: 1rem;
        z-index: 1000;
        border-bottom: 2px solid var(--border);
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
      .header-nav.open { display: flex !important; }
      .header-nav .tab-btn, .header-nav .nav-group-btn { margin: 0; border-radius: 6px; width: 100%; text-align: left; }
    }
/* Custom Scrollbar`;
  content = content.replace(/\/\* Custom Scrollbar/g, hamburgerCSS);
}

if (!content.includes('mobile-menu-btn')?.addEventListener) {
  const hamburgerJS = `initNavigation();\n\ndocument.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  document.getElementById('main-nav')?.classList.toggle('open');
});
document.querySelectorAll('#main-nav .tab-btn, #main-nav .dropdown-item').forEach(b => {
  b.addEventListener('click', () => {
    if(!b.classList.contains('nav-group-btn')) document.getElementById('main-nav')?.classList.remove('open');
  });
});\n`;
  content = content.replace(/initNavigation\(\);\n/g, hamburgerJS);
}

// 5. Dynamic Daily Pokemon
if (!content.includes('fetchWithRetry(`${API}/pokemon-species/${dayIndex}`)')) {
  content = content.replace(/const DAILY_FACTS = \[\s*\{ id:[^]*?\];/m, '');
  
  const newInitDailyBanner = `async function initDailyBanner() {
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
    const specRes = await fetchWithRetry(\`\${API}/pokemon-species/\${dayIndex}\`);
    const spec = await specRes.json();
    const pokeRes = await fetchWithRetry(\`\${API}/pokemon/\${dayIndex}\`);
    const pokeData = await pokeRes.json();
    
    let flavorText = '¡Un Pokémon misterioso!';
    if (spec.flavor_text_entries) {
      const flavor = spec.flavor_text_entries.find(e=>e.language.name==='es') || spec.flavor_text_entries.find(e=>e.language.name==='en');
      if (flavor) flavorText = flavor.flavor_text.replace(/\\f/g,' ').replace(/\\n/g,' ');
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
    if (oldClose) {
      const newClose = oldClose.cloneNode(true);
      oldClose.parentNode.replaceChild(newClose, oldClose);
      newClose.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem(STORAGE_KEYS.DAILY_SEEN, today);
        playClick();
      });
    }
  } catch (e) {
    console.error("Daily banner err:", e);
  }
}`;
  content = content.replace(/function initDailyBanner\(\) \{[\s\S]*?banner\.style\.display = 'none';\s*localStorage\.setItem\(STORAGE_KEYS\.DAILY_SEEN, today\);\s*playClick\(\);\s*\}\);\s*\}/, newInitDailyBanner);
}


// 6. Fetch Retry Mechanism
if (!content.includes('fetchWithRetry(url, retries')) {
  const retryScript = `async function fetchWithRetry(url, retries = 2, delay = 1000) {
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      return response;
    } catch (err) {
      if (i === retries) throw err;
      await new Promise(r => setTimeout(r, delay * (i + 1)));
    }
  }
}

async function fetchPoke(id) {`;
  content = content.replace(/async function fetchPoke\(id\) \{/g, retryScript);

  const loadPokemonsStart = `async function loadPokemons(offset = 0) {
  if (isLoading) return;
  isLoading = true;
  showSkeletonCards();
  document.getElementById('error-retry-msg')?.remove();

  try {
    const res = await fetchWithRetry(\`\${API}/pokemon?limit=\${PAGE}&offset=\${offset}\`);
    const data = await res.json();
    
    const promises = data.results.map(async p => {`;
  content = content.replace(/async function loadPokemons\(offset = 0\) \{\s*if \(isLoading\) return;\s*isLoading = true;\s*showSkeletonCards\(\);\s*const res = await fetch\(`\$\{API\}\/pokemon\?limit=\$\{PAGE\}&offset=\$\{offset\}`\);\s*const data = await res\.json\(\);\s*const promises = data\.results\.map\(async p => \{/g, loadPokemonsStart);

  const loadPokemonsEnd = `    renderCards(pageData);
    displayed += pageData.length;
    document.getElementById('load-more').style.display = (data.next && !searchQ) ? 'block' : 'none';
  } catch (err) {
    console.error("API Error loading Pokemons:", err);
    document.getElementById('pokemon-grid').innerHTML = 
      \`<div id="error-retry-msg" class="error-msg" style="flex-direction:column;gap:1rem;padding:2rem;">
        <div>❌ Error de red al cargar Pokémon</div>
        <button class="modal-feature-btn" style="width:200px;margin:0 auto" onclick="isLoading=false; loadPokemons(\${offset})">Reintentar</button>
      </div>\`;
  } finally {
    isLoading = false;
  }
}`;
  content = content.replace(/    renderCards\(pageData\);\s*displayed \+= pageData\.length;\s*document\.getElementById\('load-more'\)\.style\.display = \(data\.next && !searchQ\) \? 'block' : 'none';\s*isLoading = false;\s*\}/g, loadPokemonsEnd);
}

// 7. Competitive Teams HTML Inject
if (!content.includes('id="teams-view"')) {
  const teamsHTML = `
    <!-- TEAMS VIEW -->
    <div id="teams-view" class="view">
      <div class="search-bar" style="max-width:800px;margin:1rem auto 0;text-align:center;background:transparent;border:none">
        <h2 style="color:var(--text)">🏆 Equipos Meta</h2>
        <p style="color:var(--muted);font-size:0.9rem">Los equipos más letales del competitivo. ¡Añádelos a tu Teambuilder con un clic!</p>
      </div>
      <div id="teams-list" style="max-width:800px;margin: 0 auto;padding:1rem;display:flex;flex-direction:column;gap:1.5rem"></div>
    </div>
`;
  content = content.replace(/(<!-- BATTLE VIEW -->\s*<div id="battle-view" class="view">)/, teamsHTML + '\n    $1');
  
  const teamsJS = `
/* ════════════════════════════════════════════
   15. COMPETITIVE TEAMS
   ════════════════════════════════════════════ */
const HISTORICAL_TEAMS = [
  {
    name: "Sandstorm Gen IV",
    author: "Meta Clásico OU",
    desc: "Tormenta Arena que dominó la cuarta generación, combinando atacantes poderosos y defensores impenetrables.",
    pokemons: [248, 445, 227, 448, 485, 121] // Tyranitar, Garchomp, Skarmory, Lucario, Heatran, Starmie
  },
  {
    name: "Drizzle Rain Gen V",
    author: "Guerra de Climas",
    desc: "El clima dominante de Teselia impulsado por la habilidad Llovizna de Politoed.",
    pokemons: [186, 230, 598, 641, 199, 593] // Politoed, Kingdra, Ferrothorn, Tornadus, Slowking, Jellicent
  },
  {
    name: "VGC 2014 World Champion",
    author: "Se Jun Park",
    desc: "El equipo campeón del mundo que popularizó a Pachirisu para redirección de atraques.",
    pokemons: [417, 282, 115, 445, 681, 448] // Pachirisu, Gardevoir, Kangaskhan, Garchomp, Aegislash, Lucario
  },
  {
    name: "Gen III Advanced Stall",
    author: "SkarmBliss",
    desc: "El dúo defensivo Skarmory + Blissey que detuvo a los atacantes en el meta de GBA.",
    pokemons: [227, 242, 260, 344, 110, 94] // Skarmory, Blissey, Swampert, Claydol, Weezing, Gengar
  }
];

async function renderTeamsView() {
  const container = document.getElementById('teams-list');
  if (!container) return;
  container.innerHTML = HISTORICAL_TEAMS.map((team, idx) => \`
    <div class="mission-card" style="flex-direction:column;align-items:flex-start;gap:1.5rem;background:var(--card);padding:1.5rem;border-radius:16px;">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center;">
        <div style="flex:1">
          <h3 style="margin:0;color:var(--text);font-size:1.2rem;font-weight:900"><span style="font-size:1.4rem">🏆</span> \${team.name}</h3>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.4rem;line-height:1.4;margin-right:1rem">\${team.author} — \${team.desc}</div>
        </div>
        <button class="team-add-btn load-team-btn" data-idx="\${idx}" style="font-size:0.85rem;padding:0.6rem 1rem;border-radius:20px;white-space:nowrap;display:flex;align-items:center;gap:0.4rem;margin:0">
          📥 Importar
        </button>
      </div>
      <div style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.5rem;width:100%;" class="custom-scroll">
        \${team.pokemons.map(id => \`
          <div style="min-width:64px;height:64px;background:var(--card2);border:2px solid var(--border);border-radius:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform 0.2s, background 0.2s" onmouseover="this.style.transform='translateY(-4px)';this.style.background='var(--dark)'" onmouseout="this.style.transform='';this.style.background='var(--card2)'" onclick="openModal(\${id})">
            <img src="\${IMG_SPRITE(id)}" width="48" style="image-rendering:pixelated">
          </div>
        \`).join('')}
      </div>
    </div>
  \`).join('');

  container.querySelectorAll('.load-team-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const team = HISTORICAL_TEAMS[parseInt(btn.dataset.idx)];
      teamSlots = [null,null,null,null,null,null];
      
      showToast('📥 Descargando e importando... (\${team.pokemons.length})');
      btn.disabled = true;
      btn.style.opacity = '0.5';
      
      try {
        for (let i=0; i < team.pokemons.length; i++) {
          let id = team.pokemons[i];
          let p = pokeCache.get(id);
          if (!p || !p.raw) {
            const res = await fetchWithRetry(\`\${API}/pokemon/\${id}\`);
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

const _origInitNavSetup = initNavigation;
window.initNavigation = function() {
  if (_origInitNavSetup) _origInitNavSetup();
  document.querySelectorAll('.tab-btn[data-view="teams"]').forEach(b => {
    b.addEventListener('click', () => { renderTeamsView(); });
  });
};
`;
  content = content.replace(/(document\.getElementById\('import-data-input'\)\?\.addEventListener\('change', e => {[\s\S]*?\}\);)/, '$1\n' + teamsJS);
}

fs.writeFileSync(file, content);
console.log('Script updated successfully.');
