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
      abilities: ["Anti-Charge(+1 Rend)"],
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

function weaponDamage(numberOfModels, champion, weapon) {
  let atk = parseDiceString(weapon.atk) * numberOfModels + champion;
  let hit = (7 - Number(weapon.hit.replace("+", ""))) / 6;
  let wnd = (7 - Number(weapon.wnd.replace("+", ""))) / 6;
  let rnd = Number(weapon.rnd);
  let dmg = parseDiceString(weapon.dmg);

  let fisk = [];
  let t = atk * hit * wnd;
  fisk[0] = ["Normal", ...calc(t, rnd, dmg)];

  hit = (7 - Number(weapon.hit.replace("+", "")) + 1) / 6;
  t = atk * hit * wnd;
  clamp(hit);
  fisk[1] = ["+1 To-hit", ...calc(t, rnd, dmg)];

  hit = (7 - Number(weapon.hit.replace("+", "")) - 1) / 6;
  t = atk * hit * wnd;
  clamp(hit);
  fisk[2] = ["-1 To-hit", ...calc(t, rnd, dmg)];

  hit = (7 - Number(weapon.hit.replace("+", ""))) / 6;

  wnd = (7 - Number(weapon.wnd.replace("+", "")) + 1) / 6;
  t = atk * hit * wnd;
  clamp(wnd);
  fisk[3] = ["+1 To-wnd", ...calc(t, rnd, dmg)];

  wnd = (7 - Number(weapon.wnd.replace("+", "")) - 1) / 6;
  t = atk * hit * wnd;
  clamp(wnd);
  fisk[4] = ["-1 To-wnd", ...calc(t, rnd, dmg)];

  return fisk;
}

function transposeArray(array) {
  return array[0].map((_, colIndex) => array.map((row) => row[colIndex]));
}

let champion = 0;
if (unit.primaryKeywords.includes("Champion")) champion++;
let results = weaponDamage(unit.numberOfModels, champion, unit.meleeWeapons[0]);

console.log(transposeArray(results));
