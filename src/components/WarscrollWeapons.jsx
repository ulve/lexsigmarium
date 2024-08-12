import "./WarscrollWeapons.css";

function parseDiceString(diceString) {
  const pattern = /^(\d*?)([Dd]?)(\d+)([+-]\d+)?$/;
  const match = diceString.match(pattern);

  if (!match) {
    throw new Error("Invalid dice string format");
  }

  let [count, hasDice, sides, modifier] = match;

  // Convert strings to numbers, use default values if not provided
  count = count ? parseInt(count) : hasDice ? 1 : 0;
  sides = parseInt(sides);
  modifier = modifier ? parseInt(modifier) : 0;

  if (hasDice) {
    // Calculate average for dice roll: (min + max) / 2
    const averageRoll = (1 + sides) / 2;
    return count * averageRoll + modifier;
  } else {
    // If no dice (just a number), return the number plus modifier
    return sides + modifier;
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
  champion,
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
  let rnd = 0;
  if (weapon.rnd === "-") {
    rnd = 0;
  } else {
    rnd = Number(weapon.rnd);
  }
  rnd = rnd + rendBonus;
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
function fisk(unit, weapon) {
  let champion = 0;

  if (unit.primaryKeywords.includes("Champion")) champion++;

  let critMortal = false;
  let critAutoWound = false;
  let critTwoHits = false;

  weapon.abilities &&
    weapon.abilities.some((w) => {
      if (w.toLowerCase().includes("crit")) {
        if (w.toLowerCase().includes("auto-wound")) critAutoWound = true;
        if (w.toLowerCase().includes("mortal")) critMortal = true;
        if (w.toLowerCase().includes("hit")) critTwoHits = true;
      }
    });

  let results = [[weapon.name, "2+", "3+", "4+", "5+", "6+"]];

  results.push([
    "Normal",
    ...weaponDamage2(
      1,
      champion,
      weapon,
      critMortal,
      critAutoWound,
      critTwoHits,
      0,
      0,
    ),
  ]);

  weapon.abilities &&
    weapon.abilities.forEach((w) => {
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
            1,
            champion,
            weapon,
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
            1,
            champion,
            weapon,
            critMortal,
            critAutoWound,
            critTwoHits,
            rend,
            damage,
          ),
        ]);
      }
    });

  results = transposeArray(results);

  return (
    <table className="fl-table">
      <thead>
        <tr>
          {results[0].map((a) => {
            return <td>{a}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {results.slice(1).map((a) => {
          return (
            <tr>
              {a.map((b) => {
                return <td>{b}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function WarscrollWeapons({ unit, color }) {
  console.log(unit);
  return (
    <div className="warscroll-weapons">
      {unit.rangedWeapons && (
        <table className="fl-table">
          <thead>
            <tr>
              <th className="weapon-left">Ranged</th>
              <th className="weapon-center">Rng</th>
              <th className="weapon-center">Atk</th>
              <th className="weapon-center">Hit</th>
              <th className="weapon-center">Wnd</th>
              <th className="weapon-center">Rnd</th>
              <th className="weapon-center">Dmg</th>
              <th className="weapon-center">Ability</th>
            </tr>
          </thead>
          <tbody>
            {unit.rangedWeapons.map((weapon, i) => (
              <tr key={i}>
                <td className="weapon-left">{weapon.name}</td>
                <td className="weapon-center">{weapon.rng}</td>
                <td className="weapon-center">{weapon.atk}</td>
                <td className="weapon-center">{weapon.hit}</td>
                <td className="weapon-center">{weapon.wnd}</td>
                <td className="weapon-center">{weapon.rnd}</td>
                <td className="weapon-center">{weapon.dmg}</td>
                <td className="weapon-center">
                  {weapon.abilities ? weapon.abilities.join(", ") : " - "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {unit.meleeWeapons && (
        <table className="fl-table">
          <thead>
            <tr>
              <th className="weapon-left">Melee</th>
              <th className="weapon-center">Atk</th>
              <th className="weapon-center">Hit</th>
              <th className="weapon-center">Wnd</th>
              <th className="weapon-center">Rnd</th>
              <th className="weapon-center">Dmg</th>
              <th className="weapon-center">Ability</th>
            </tr>
          </thead>
          <tbody>
            {unit.meleeWeapons.map((weapon, i) => (
              <tr key={i}>
                <td className="weapon-left">{weapon.name}</td>
                <td className="weapon-center">{weapon.atk}</td>
                <td className="weapon-center">{weapon.hit}</td>
                <td className="weapon-center">{weapon.wnd}</td>
                <td className="weapon-center">{weapon.rnd}</td>
                <td className="weapon-center">{weapon.dmg}</td>
                <td className="weapon-center">
                  {weapon.abilities ? weapon.abilities.join(", ") : " - "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default WarscrollWeapons;
