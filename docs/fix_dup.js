const fs = require('fs');
const f = 'c:\\Users\\cfgm2smxa11\\Documents\\E\\pokedex_v8.html';
let txt = fs.readFileSync(f, 'utf8');

const key = "const HISTORICAL_TEAMS = [";
const firstIndex = txt.indexOf(key);
const lastIndex = txt.lastIndexOf(key);

if (firstIndex !== -1 && firstIndex !== lastIndex) {
  // Find where this second block ends.
  // We look for 'renderTeamsView(); });\n  });\n};'
  const searchStr = "renderTeamsView(); });";
  const eIdx = txt.indexOf(searchStr, lastIndex);
  
  if (eIdx !== -1) {
    const endBlock = txt.indexOf("};", eIdx) + 2;
    
    // The duplicate block actually starts at '/* ════════' just before lastIndex
    const cutStart = txt.lastIndexOf('/* ════════', lastIndex);
    
    txt = txt.slice(0, cutStart) + txt.slice(endBlock);
    fs.writeFileSync(f, txt);
    console.log("Fixed duplicate!");
  } else {
    console.log("Could not find end string.");
  }
} else {
  console.log("No duplicate found or only one exists.");
}
