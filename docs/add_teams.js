const fs = require('fs');
const f = 'c:\\Users\\cfgm2smxa11\\Documents\\E\\pokedex_v8.html';
let txt = fs.readFileSync(f, 'utf8');

const newTeams = `const HISTORICAL_TEAMS = [
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
];`;

const startKey = 'const HISTORICAL_TEAMS = [';
const startIdx = txt.indexOf(startKey);
if (startIdx !== -1) {
  // Find the end of the previous array
  const searchSlice = txt.slice(startIdx);
  const endMarker = '];';
  const endOffset = searchSlice.indexOf(endMarker);
  
  if (endOffset !== -1) {
    const endIdx = startIdx + endOffset + 2;
    // Replace the block
    txt = txt.slice(0, startIdx) + newTeams + txt.slice(endIdx);
    fs.writeFileSync(f, txt);
    console.log("30 Teams expanded successfully!");
  } else {
    console.log("Could not find array end bracket.");
  }
} else {
  console.log("Could not find HISTORICAL_TEAMS array! Start Key missing.");
}
