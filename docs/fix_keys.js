const fs = require('fs');
const f = 'c:\\Users\\cfgm2smxa11\\Documents\\E\\pokedex_v8.html';
let txt = fs.readFileSync(f, 'utf8');

const badBlock = `const STORAGE_KEYS = {
  LANG: STORAGE_KEYS.LANG,
  THEME: STORAGE_KEYS.THEME,
  SOUND: STORAGE_KEYS.SOUND,
  FAVS: STORAGE_KEYS.FAVS,
  RECENT: STORAGE_KEYS.RECENT,
  NOTE_PREFIX: STORAGE_KEYS.NOTE_PREFIX,
  COLLECTION: STORAGE_KEYS.COLLECTION,
  XP: STORAGE_KEYS.XP,
  ACHIEVEMENTS: STORAGE_KEYS.ACHIEVEMENTS,
  WINS: STORAGE_KEYS.WINS,
  MODAL_OPENS: STORAGE_KEYS.MODAL_OPENS,
  TRAINER_NAME: STORAGE_KEYS.TRAINER_NAME,
  MISSIONS: STORAGE_KEYS.MISSIONS,
  TEAM: STORAGE_KEYS.TEAM,
  NUZLOCKE: STORAGE_KEYS.NUZLOCKE,
  DAILY_SEEN: STORAGE_KEYS.DAILY_SEEN
};`;

const goodBlock = `const STORAGE_KEYS = {
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
};`;

if (txt.includes(badBlock)) {
  txt = txt.replace(badBlock, goodBlock);
  fs.writeFileSync(f, txt);
  console.log("Fixed initialization bug!");
} else {
  console.log("Bad block not found. Checking if it's slightly different...");
  // Try regex replace for safety
  let fixed = txt.replace(/STORAGE_KEYS\.LANG/g, "'pokedexLang'")
                 .replace(/STORAGE_KEYS\.THEME/g, "'pokedexTheme'")
                 .replace(/STORAGE_KEYS\.SOUND/g, "'pokedexSound'")
                 .replace(/STORAGE_KEYS\.FAVS/g, "'pokedexFavs'")
                 .replace(/STORAGE_KEYS\.RECENT/g, "'pokedexRecent'")
                 .replace(/STORAGE_KEYS\.NOTE_PREFIX/g, "'pokedexNote_'")
                 .replace(/STORAGE_KEYS\.COLLECTION/g, "'pokedexCollection'")
                 .replace(/STORAGE_KEYS\.XP/g, "'trainerXP'")
                 .replace(/STORAGE_KEYS\.ACHIEVEMENTS/g, "'achievements'")
                 .replace(/STORAGE_KEYS\.WINS/g, "'battleWins'")
                 .replace(/STORAGE_KEYS\.MODAL_OPENS/g, "'modalOpenCount'")
                 .replace(/STORAGE_KEYS\.TRAINER_NAME/g, "'trainerName'")
                 .replace(/STORAGE_KEYS\.MISSIONS/g, "'dailyMissions'")
                 .replace(/STORAGE_KEYS\.TEAM/g, "'teamBuilderV6'")
                 .replace(/STORAGE_KEYS\.NUZLOCKE/g, "'nuzlockeV6'")
                 .replace(/STORAGE_KEYS\.DAILY_SEEN/g, "'dailyBannerSeen'");
  
  // Wait, if I do all those replaces, it will replace ALL occurrences across the file!
  // That undoes my v9 centralization entirely!
  console.log("Use strict match to avert regression.");
}
