let unit = {
  name: "Vindictors",
  numberOfModels: 5,
  faction: "Stormcast Eternals",
  stats: {
    movement: '5"',
    save: "3+",
    control: "1",
    health: "2",
  },
  meleeWeapons: [
    {
      name: "Stormspear",
      atk: "2",
      hit: "3+",
      wnd: "3+",
      rnd: "1",
      dmg: "1",
      abilities: ["Charge (+1 damage)"],
    },
  ],
  abilities: [
    {
      name: "Hold the Shieldwall",
      header: {
        icon: "offensive",
        color: "red",
        text: "Any Combat Phase",
      },
      effect:
        "If this unit did not charge this turn and is in combat with an enemy unit that charged this turn, roll a dice. On a 4+, this unit has **STRIKE-FIRST** for the rest of the turn.",
    },
  ],
  primaryKeywords: ["Infantry", "Champion", "Standard Bearer(1/5)"],
  secondaryKeywords: ["Order", "Stormcast Eternals", "Warrior Chamber"],
};

function parseDiceString(diceString) {
  console.log(diceString);
  // Regular expression to match various dice notations
  const pattern = /^(\d*)[Dd]?(\d+)([+-]\d+)?$/;
  const match = diceString.match(pattern);

  if (match) {
    const numDice = match[1] ? parseInt(match[1]) : 1; // Default to 1 if not specified
    const numSides = parseInt(match[2]);
    const modifier = parseInt(match[3] || 0); // If no modifier, default to 0

    // Check if it's a constant value (no 'D' or 'd' in the string)
    if (diceString.toLowerCase().indexOf("d") === -1) {
      return numSides + modifier;
    }

    // Calculate average
    const singleDieAverage = (1 + numSides) / 2;
    const totalAverage = numDice * singleDieAverage + modifier;

    return totalAverage;
  } else {
    return null; // Invalid dice string
  }
}
function clamp(value, min = 1 / 6, max = 1) {
  return Math.min(Math.max(value, min), max);
}
function calc(t, rnd, dmg) {
  let normal = [];
  for (let i = 1; i < 6; i++) {
    let failedSave = (i + rnd) / 6;
    if (failedSave > 1) failedSave = 1;
    let total = t * failedSave * dmg;
    normal.push(total.toFixed(2));
  }

  return normal;
}

function insertSpaceBeforeParenthesis(str) {
  return str.replace(/(\S)\(/g, "$1 (").toLowerCase();
}

function weaponDamage2(
  numberOfModels,
  champions,
  weapon,
  critMortal,
  critAutoWound,
  critTwoHits,
  rendBonus,
  dmgBonus,
) {
  let atk = parseDiceString(weapon.atk) * numberOfModels + champion;
  let hit = 7 - Number(weapon.hit.replace("+", "")) - 1;
  hit = hit / 6;
  let crit = 1 / 6;
  let rnd = Number(weapon.rnd) + rendBonus;
  let wnd = (7 - Number(weapon.wnd.replace("+", ""))) / 6;
  let dmg = parseDiceString(weapon.dmg);
  dmg += dmgBonus;

  let normal = [];
  for (let i = 1; i < 6; i++) {
    let failedSave = (i + rnd) / 6;
    if (failedSave > 1) failedSave = 1;

    let critDmg = crit * wnd * failedSave;
    if (critMortal) {
      critDmg = crit;
    } else if (critAutoWound) {
      critDmg = crit * failedSave;
    } else if (critTwoHits) {
      critDmg = crit * 2 * wnd * failedSave;
    }
    let total = atk * (hit * wnd * failedSave + critDmg) * dmg;
    normal.push(total.toFixed(2));
  }

  return normal;
}

function transposeArray(array) {
  return array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
}

let champion = 0;

if (unit.primaryKeywords.includes("Champion")) champion++;

let critMortal = false;
let critAutoWound = false;
let critTwoHits = false;

unit.meleeWeapons[0].abilities.some((w) => {
  if (w.toLowerCase().includes("crit")) {
    if (w.toLowerCase().includes("auto-wound")) critAutoWound = true;
    if (w.toLowerCase().includes("mortal")) critMortal = true;
    if (w.toLowerCase().includes("hit")) critTwoHits = true;
  }
});

let results = [];
results.push([
  "Normal",
  ...weaponDamage2(
    unit.numberOfModels,
    champion,
    unit.meleeWeapons[0],
    critMortal,
    critAutoWound,
    critTwoHits,
    0,
    0,
  ),
]);

unit.meleeWeapons[0].abilities.forEach((w) => {
  let ability = insertSpaceBeforeParenthesis(w);

  if (ability.includes("anti")) {
    let [key, mod, stat] = ability.split(" ");
    mod = mod.replace("(", "");
    stat = stat.replace(")", "");
    let rend = 0;
    let damage = 0;

    if (stat === "rend") rend = Number(mod);
    if (stat === "damage") damage = Number(mod);
    results.push([
      key,
      ...weaponDamage2(
        unit.numberOfModels,
        champion,
        unit.meleeWeapons[0],
        critMortal,
        critAutoWound,
        critTwoHits,
        rend,
        damage,
      ),
    ]);
  }

  if (ability.startsWith("charge")) {
    let [key, mod, stat] = ability.split(" ");
    mod = mod.replace("(", "");
    stat = stat.replace(")", "");
    let rend = 0;
    let damage = 0;

    if (stat === "rend") rend = Number(mod);
    if (stat === "damage") damage = Number(mod);
    results.push([
      key,
      ...weaponDamage2(
        unit.numberOfModels,
        champion,
        unit.meleeWeapons[0],
        critMortal,
        critAutoWound,
        critTwoHits,
        rend,
        damage,
      ),
    ]);
  }
});

console.log(transposeArray(results));
