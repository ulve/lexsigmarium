// read json form disk
let fs = require("fs");
let weaponDamage = require("../mathhammer.js");
let transposeArray = require("../mathhammer.js");

function getArmy(path) {
  let warScrollStrings = fs.readFileSync(path, "utf8");

  return JSON.parse(warScrollStrings);
}

function printTitle(unit) {
  let str = `### ${unit.name}\n\n`;

  return str;
}

function printWarscroll(unit, color, icon) {
  const u = JSON.stringify(unit);

  let str = `<Warscroll color={"${color}"} icon={"${icon}"} unit={${u}} />\n\n`;

  return str;
}

function printFrontmatter(army) {
  let str = "---\n";
  str += `title: ${army.title}\n`;
  str += `grandFaction: ${army.grandFaction}\n`;
  str += "---\n\n";
  str += `import Warscroll from '@site/src/components/Warscroll';\n`;
  str += `import WarscrollAbility from '@site/src/components/WarscrollAbility';\n\n`;

  return str;
}

function printWarscrolls(army) {
  let str = "## Warscrolls\n\n";
  army.warscrolls.forEach((unit) => {
    str += printTitle(unit);
    str += printWarscroll(unit, army.color, army.icon);
  });

  return str;
}

function printBattleTraits(army) {
  let str = "";
  if (army.battleTraits) {
    str += `## Battle Traits\n\n`;
    army.battleTraits.forEach((trait) => {
      const a = JSON.stringify(trait);
      str += `### ${trait.name}\n\n`;
      str += `<WarscrollAbility ability={${a}} />\n\n`;
    });
    str += `\n\n`;
  }

  return str;
}

function printBattleFormations(army) {
  let str = "";

  if (army.battleFormations) {
    str += `## Battle Formations\n\n`;
    army.battleFormations.forEach((formation) => {
      str += `### ${formation.name}\n\n`;
      formation.abilities.forEach((ability) => {
        const a = JSON.stringify(ability);
        str += `<WarscrollAbility ability={${a}} />\n\n`;
      });
    });
    str += `\n\n`;
  }

  return str;
}

function printArcana(army) {
  let str = "";

  if (
    (army.spellLores && army.spellLores.length > 0) ||
    (army.prayerLores && army.prayerLores.length > 0)
  ) {
    str += `## Arcana and Incatations\n\n`;
  }

  if (army.spellLores && army.spellLores.length > 0) {
    str += "### Spell Lores\n";
    army.spellLores.forEach((lore) => {
      str += `#### ${lore.name}\n\n`;
      lore.spells.forEach((spell) => {
        const s = JSON.stringify(spell);
        str += `<WarscrollAbility ability={${s}} />\n\n`;
      });
      str += "\n\n";
    });
    str += `\n\n`;
  }

  if (army.prayerLores && army.prayerLores.length > 0) {
    str += "### Prayers\n\n";
    army.prayerLores.forEach((prayer) => {
      str += `#### ${prayer.name}\n\n`;
      prayer.prayers.forEach((prayer) => {
        const p = JSON.stringify(prayer);
        str += `<WarscrollAbility ability={${p}} />\n\n`;
      });
      str += "\n\n";
    });
    str += `\n\n`;
  }

  return str;
}

function printArtefacts(army) {
  let str = "";

  if (army.artefactLores && army.artefactLores.length > 0) {
    str += `## Artefacts\n\n`;

    army.artefactLores.forEach((artefactLore) => {
      str += `### ${artefactLore.name}\n\n`;

      artefactLore.artefacts.forEach((artefact) => {
        const a = JSON.stringify(artefact);
        str += `#### ${artefact.name}\n\n`;
        str += `<WarscrollAbility ability={${a}} />\n\n`;
      });
      str += "\n\n";
    });
    str += `\n\n`;
  }

  return str;
}

function printArmy(army) {
  let str = printFrontmatter(army);
  str += printBattleTraits(army);
  str += printBattleFormations(army);
  str += printArcana(army);
  str += printArtefacts(army);
  str += printWarscrolls(army);

  return str;
}

fs.readdirSync("./static/unitData").forEach((file) => {
  console.log(`./static/unitData/${file}`);
  let army = getArmy(`./static/unitData/${file}`);
  console.log(army.title);
  let str = printArmy(army);

  // write str to disk
  fs.writeFileSync(
    `./docs/${army.grandFaction.toLowerCase()}/${army.title.toLowerCase().replaceAll(" ", "-")}.mdx`,
    str,
  );
});
