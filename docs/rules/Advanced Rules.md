---
sidebar_position: 2
---
import WarscrollAbility from '@site/src/components/WarscrollAbility';

# Advanced Rules

Each Advanced Rules section is designed to be modular, allowing each battlepack to specify which Advanced Rules to use with that battlepack. This book contains the following **Advanced Rules** sections:

**COMMANDS** (pg 29-30)

These rules explain how you can earn **command points** to use powerful **commands** that allow you to react to abilities and interact in your opponent's turn. If you are not using the **Commands** rules, ignore any abilities that have the command point symbol in the corner.

**TERRAIN** (pg 31-32)

These rules go into more detail about how your models interact with terrain features, such as how they can take cover or even draw power from arcane nexuses.

**MAGIC** (pg 33-34)

If you'd like to wield unlimited mystical power by including **WIZARDS**, **PRIESTS** and **manifestations** in your battles, see **Magic**.

**ARMY COMPOSITION** (pg 35-38)

If you're ready to build your own **army roster** and customise your army with **regiments**, **battle formations** and **enhancements**, see **Army Composition**.

**COMMAND MODELS** (pg 39)

Here you will find rules for special models called **champions**, **standard bearers** and **musicians**, which are found in many Warhammer Age of Sigmar units.

**BATTLE TACTICS** (pg 40)

Add an additional tactical challenge to your games by including secondary objectives called **Battle Tactics**.

:::tip
**BUILD YOUR OWN BATTLEPACK**

There are many, many ways to play Warhammer Age of Sigmar, from **Path to Glory** battlepacks, which focus on narrative-driven battles linked in an ongoing campaign, to **Spearhead** and **Matched Play** battlepacks, in which the emphasis is on balance and competitive play.

In addition to using official battlepacks, we'd encourage you to use the rules in this section as a toolbox, mixing and matching the elements within to build your own battleplan or battlepack to play with your friends.

Are you excited to field your entire collection against your friends or to see which monster reigns supreme? Maybe you want to design your own battleplans and special rules, or perhaps you want to keep things simple in order to teach a younger sibling how to play. These rules provide an open framework that makes each of these things possible.

Here are some ideas to get you started:

- Instead of using the Advanced Rules for Army Composition, make an army based on your favourite Black Library story or based on a made-up scenario that sounds exciting to you.  
  For instance, how would 5 different Stormcast Eternals heroes fare against a pair of massive Chaos monsters?
- Design your own battleplan by dividing portions of the battlefield into a territory for each player, placing objectives and thinking up a fun twist for the battle. Have fun and experiment with different ideas - why not try alternating placing objectives instead of having fixed locations, or try having two smaller battlefields connected by realmgates?
- Learn the Advanced Rules by introducing each module into your battles one at a time

- for instance, start by experimenting with Commands, then try adding Magic into your battles, and finally put them all together to outwit your opponent and score Battle Tactics.

  :::

# COMMANDS

## 1.0 Commands

Some abilities, called commands, require that you spend one or more **command points** (⬡) to use that ability. Any ability that has a **command point cost** (indicated in the top right corner of the ability) is a command.

### 1.1 Earning Command Points

At the start of each battle round, after determining the **underdog**, each player gains **4 command points**. If there is an **underdog**, they gain 1 extra command point. At the end of the battle round, the players' **command points** are reset to 0 (any that have not been used are lost).

:::danger

- Any ability with a command point cost (⬡) is a command.
- Each player gains 4 command points at the start of each battle round.
- The underdog gains 1 extra command point.
- Each unit can only use 1 command in each phase.
- Each command can only be used 1 time by each army in each phase.
- You must pay the command point cost to use a command.

  :::

## 2.0 Hero Phase Commands

```ability
name: Rally
icon: rally
color: yellow
text: Any Hero Phase
declare: Pick a friendly unit that is **not in combat** to use this ability.
effect: |
  Make 6 **rally rolls** of D6. For each 4+, you receive 1 **rally point**. Rally points can be spent in the following ways:

  - ﻿﻿For each rally point spent, **Heal (1)** that unit.
  - ﻿﻿You can spend a number of rally points equal to the **Health** characteristic of that unit to **return** a slain model to that unit.

  You can spend the rally points in any combination of the above. Unspent rally points are then lost.
commandPoints: 1
```

```ability
name: Magical Intervention
icon: special
color: yellow
declare: Pick a friendly **WIZARD** or **PRIEST** to use this ability.
effect: That friendly unit can use a **SPELL** or **PRAYER** ability (as appropriate) as if it were your hero phase. If you do so, subtract 1 from **casting rolls** or **chanting rolls** made as part of that ability.
commandPoints: 1
```

### 3.0 Movement Commands

```ability
name: Redepoy
icon: movement
color: gray
text: Enemy Hero Phase
declare: Pick a friendly unit that is **not in combat** to use this ability.
effect: Each model in that unit can move up to D6. That move **cannot** pass through or end within the combat range of an enemy unit.
commandPoints: 1
keywords:
  - Move
  - Run
```

```ability
name: At the Double
icon: movement
color: gray
text: "Reaction: You declared a **RUN** ability"
usedBy: The unit using that **RUN** ability.
effect: Do not make a **run roll** as part of that **RUN** ability. Instead, add 6" to that unit's **Move** characteristic to determine the distance each model in that unit can move as part of that **RUN** ability.
commandPoints: 1
```

## 4.0 Shooting Phase Commands

```ability
name: Covering Fire
icon: shooting
color: teal
text: Enemy Shooting Phase
declare: Pick a friendly unit that is **not in combat** to use this ability.
effect: Resolve **shooting attacks** for that unit, but all of the attacks must target the **nearest visible enemy** unit and you must subtract 1 from the **hit rolls** for those attacks.
commandPoints: 1
```

## 5.0 Charge Phase Commands

```ability
name: Counter-charge
icon: movement
color: orange
text: Enemy Charge Phase
declare: Pick a friendly unit that is **not in combat** to use this ability.
effect: That unit can use a **CHARGE** ability as if it were your charge phase.
commandPoints: 2
```

```ability
name: Forward to Victory
icon: movement
color: orange
text: "Reaction: You declared a **CHARGE** ability"
usedBy: The unit using that **CHARGE** ability.
effect: You can re-roll the **charge roll**.
commandPoints: 1
```

## 6.0 Attacking (Shooting and Combat) Commands

```ability
name: All-out Attack
icon: offensive
color: red
text: "Reaction: You declared an **ATTACK** ability"
usedBy: The unit using that **ATTACK** ability**.**
effect: Add 1 to **hit rolls** for attacks made as part of that ATTACK ability. This also affects weapons that have the **Companion** weapon ability.
commandPoints: 1
```

## 7.0 Defensive Commands

```ability
name: All-out Defence
icon: defensive
color: green
text: "Reaction: Opponent declared an **ATTACK** ability"
usedBy: A unit targeted by that **ATTACK** ability.
effect: Add 1 to **save rolls** for that unit in this phase.
commandPoints: 1
```

## 8.0 End of Turn Commands

```ability
name: Power Through
icon: special
color: eggplant
text: End of Any Turn
declare: Pick a friendly unit that charged this turn to use this ability, then you must pick an enemy unit **in combat** with it to be the target. The target must have a lower **Health** characteristic than the unit using this ability.
effect: Inflict **D3 mortal damage** on the target. Then, the unit using this ability can move a distance up to its **Move** characteristic. It can pass through and end that move within the combat ranges of enemy units that were in combat with it at the start of the move, but not those of other enemy units. It does not have to end the move in combat.
commandPoints: 1
keywords:
  - Move
```

# Terrain

## 1.0 Terrain Overview

Terrain features add interest and tactical challenges to the battlefield. The battleplan or battlepack you are using will explain how to set up terrain.

### 1.1 Wholly on Terran and Behind Terrain

A model is **wholly on a terrain feature** if its base is on that terrain feature and no part of its base extends past the edge of that terrain feature. A unit is wholly on a terrain feature if every model in that unit is wholly on that terrain feature.

When a unit is targeted by an attack, the unit is considered to be **behind a terrain feature** if it is impossible to draw a straight line from a model in the attacking unit to a model in the target unit without that line passing across that terrain feature. Ignore parts of the terrain feature within the attacking unit’s combat range for the purposes of determining if the target is behind that terrain feature.

:::tip
The Citadel Terrain List (pg 65) includes a list of Warhammer Age of Sigmar terrain features and tells you which terrain abilities each of them has.
:::

### 1.2 Universa Terrain Abilities

| Ability                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cover**: Subtract 1 from **hit rolls** for attacks that target a unit that is behind or wholly on this terrain feature, unless that unit **charged** or has the **Fly** keyword. |
| **Impassable**: Models cannot move across, be set up on or end moves on any part of this terrain feature.                                                                          |
| **Obscuring**: A unit cannot be targeted by shooting attacks if it is behind or wholly on this terrain feature, unless it has the **Fly** keyword.                                 |
| **Place of Power**: Heroes within 3" of this terrain feature can use the ‘Activate Place of Power’ ability (see below).                                                            |
| **Unstable**: Models **can** move across but **cannot** be set up on or end any type of move on any part of this terrain feature that is more than 1" tall.                        |

```ability
name: Activate Place of Power
icon: special
color: black
text: Start of Any Turn
declare: Pick a friendly **Hero** within 3" of any **Places of Power** to use this ability.
effect: |
  Roll a dice. On a 1, inflict D3 mortal damage on that **Hero**. On a 2+:

  - If that **Hero** is a **Wizard** or **Priest**, add 1 to casting rolls or chanting rolls for that **Hero** this turn.
  - If that **Hero** is not a **Wizard** or **Priest**, they can use the ‘Unbind’ or ‘Banish Manifestation’ ability this turn as if they had Wizard (1).
keywords:
  - Core
```

### 1.3 Terrain Sizes

- Terrain that fits into an area no larger than 7" × 7" is **small**.
- Terrain that is not small and fits into an area no larger than 7" × 12" is **medium**.
- Terrain that is too big to fit into an area 7" × 12" is **large**.

### 1.4 Terrain Types

Each **terrain feature** in Warhammer Age of Sigmar is one of the following types:

- **Obstacle**
- **ObscuringTerrain**
- **Area Terrain**
- **Place of Power**
- **Faction Terrain**

Before the battle begins, players must agree on which type applies to each terrain feature.

#### 1.4.1 Obstacles

- **Examples**: Ruins, debris, statues, barricades
- **Terrain Abilities**: Cover, Unstable

#### 1.4.2 Obscuring Terrain

- **Examples**: Wyldwood, fortress wall
- **Terrain Abilities**: Cover, Obscuring, Unstable

#### 1.4.3 Area Terrain

- **Examples**: Hills, Stormvault
- **Terrain Abilities**: Cover

#### 1.4.4 Places if Power

- **Examples**: Realmgate, Cleansing Aqualith, Nexus Syphon
- **Terrain Abilities**: Cover, Place of Power, Unstable

### 1.5 Faction Terrain

Some factions have special terrain features called **faction terrain features**. Faction terrain features have their own warscrolls. They are not considered to be units, with the following exceptions:

- In the charge phase and the combat phase, they are treated as if they were units for the purposes of movement, combat range and being in combat. Units can finish a charge move within 1⁄2" of an enemy faction terrain feature as if it were a unit.
- They can be picked as targets of enemy abilities as if they were units. They are not affected by enemy abilities that do not involve picking targets.
- Damage points can be inflicted on them as if they were units and they can be destroyed.

:::tip
The Citadel Terrain List (pg 65) shows the number of scenery pieces each terrain feature can consist of. If you are using terrain features that are not included on that list, agree with your opponent before setting up the battlefield how many scenery pieces make up each terrain feature.
:::

### 1.6 Charging Units on Terrain

In some cases, it is not possible to reach an enemy unit using a **Charge** ability when they are wholly on a terrain feature (e.g. a unit on top of a tower) because the charging unit is unable to end their move mid-way up the terrain feature and there is not enough room for the models to be placed at the top. In these cases, the charging unit can end their charge within 1⁄2" **of that terrain feature instead** if this would result in the charging unit ending their move **in combat** with any enemy units wholly on a terrain feature.

### 1.7 Scenery Pieces

Some terrain features, such as wyldwoods or collections of smaller timeworn ruins, are made up of multiple **scenery pieces**. Each scenery piece that makes up a part of the same terrain feature must be set up so that all of the scenery pieces fit into the area that corresponds to the terrain feature’s size (see 1.3). The full collection of scenery pieces is considered to be a single terrain feature.

# Magic

## 1.0 Wizards and Priests

**Wizards** are special units that can cast **spells**, and **Priests** are special units that can chant **prayers**. Spells and prayers are powerful **abilities** that can have a dramatic impact on the battle

### 1.1 Power Level

Each **Wizard** and **Priest** has a **power level**, shown in brackets after the keyword, e.g. **Wizard (2).** A **Wizard** or **Priest**’s power level determines the number of **Spell**, **Prayer** or **Banish** abilities they can use per phase, in any combination. For example, a **Wizard (2)** unit could use 1 **Spell** and 1 **Banish** ability in their commander’s hero phase.

## 2.0 Spells

The declare step of each spell will tell you to make a **casting roll** of **2D6**. If the roll does not equal or exceed the spell’s **casting value** (at the top-right corner of the spell), the spell fails and its effect is not resolved.

If the unmodified casting roll includes **2 or more rolls of 1**, the spell is **miscast**: the spell fails, its effect is not resolved, **D3 mortal damage** is inflicted on the **Wizard** that used it, and that **Wizard** cannot use any more spells in that phase.

If the **casting roll** equals or exceeds the spell’s **casting value**, move on to the reaction step (Core Rules, 5.2). So long as the spell is not **unbound** (see 4.0), then it is **successfully cast**: resolve its **effect**.

## 3.0 Prayers

The declare step of each prayer will tell you to make a **chanting roll** of **D6**. On an unmodified chanting roll of 1, the prayer fails, its effect is not resolved and you must remove **D3 ritual points** from the **Priest** using the prayer.

On a **chanting roll** of **2 or more**, pick one of the following:

- Give a number of **ritual points** to the **Priest** equal to the chanting roll (ritual points can be accumulated over multiple turns).
- Add the **Priest**’s ritual points to the chanting roll. If the chanting roll equals or exceeds the prayer’s **chanting value** (at the top-right corner of the prayer), it is **answered**: resolve the **effect** of the prayer, then reset the **Priest**’s ritual points total to 0.

## 4.0 Unbinding Spells

Each **Wizard** can use the ‘Unbind’ reaction a number of times per phase equal to their **power level**. This is an exception to The Rules of One (Core Rules, 5.3).

```ability
name: Unbind
icon: special
color: yellow
text: "Reaction: Opponent declared a **SPELL** ability"
usedBy: A friendly **WIZARD** within 30" of the enemy **WIZARD** casting the spell.
effect: Make an **unbinding roll** of 2D6. If the roll exceeds the **casting roll** for the spell, then the spell is **unbound** and its effect is not resolved. This reaction cannot be used more than once per **casting roll**.
keywords:
  - Unbind
```

## 5.0 Jealous Mages and Fickle Gods

No more than 1 friendly **WIZARD** can cast the same spell per turn, unless that spell has the **UNLIMITED** keyword. Likewise, no more than 1 friendly **PRIEST** can chant the same prayer per turn, unless that prayer has the **UNLIMITED** keyword. Keep in mind that each unit can still only use any given spell or prayer ability once per phase (see The Rules of One, Core Rules, 5.3).

## 6.0 Known Spells and Prayers

**WIZARDS** and **PRIESTS** can only use spells or prayers that they **know**. Each **WIZARD** and **PRIEST** knows any spells or prayers on its warscroll, plus **all** of the spells and prayers in the **spell lores, manifestation lores** and **prayer lores** you take for your army, as appropriate (see the Army Composition module).

## 7.0 Manifestations

There are two types of **manifestation: endless spells**, which can be summoned by **WIZARDS**, and **invocations**, which can be summoned by **PRIESTS**. Each manifestation has its own **warscroll**, and the **spell** or **prayer** that allows that manifestation to be summoned will be found in the appropriate **manifestation lore**. No more than 1 friendly **WIZARD** or **PRIEST** can attempt to summon the same manifestation per turn. Manifestations are not considered to be units, with the following exceptions:

- They are treated as if they were units for the purposes of movement, combat range, being in combat and setting up other units. Units can finish a charge move within ½" of an enemy manifestation as if it were a unit.
- If they have any melee or ranged weapons, they can use the 'Fight' and 'Shoot' **CORE** abilities as if they were units.
- If they have a Move characteristic greater than 0" ('-'), they can use **CORE** **MOVE** abilities as if they were units.
- They can be picked as targets of enemy abilities as if they were units. They are not affected by enemy abilities that do not involve picking targets.
- Damage points can be inflicted on them as if they were units and they can be destroyed.
- Manifestations that have a Move characteristic of 0" ('-') cannot move. For the purposes of movement, combat range, being in combat and setting up other units, they are only treated as if they were units in the charge phase and the combat phase.
- Models can move through manifestations but cannot end a move on them.

:::tip
**But Khorne Hates Sorcery!**

Even though wizards and priests draw upon very different sources of power in the lore, the former harnessing the motes of magic that permeate the realms and the latter calling upon the divine might of the gods themselves, such nuances are lost on the average person in the realms! For rules purposes, the miraculous abilities of both wizards and priests are dealt with in the Magic module.
:::

### 7.1 Severed Connection

If the **WIZARD** or **PRIEST** that summoned a manifestation is slain, that manifestation is removed from the battlefield.

### 7.1 Banishing Manifestations

All **WIZARDS** and **PRIESTS** can use the 'Banish Manifestation' ability:

```ability
name: Banish Manifestation
icon: special
color: yellow
text: Your Hero Phase
declare: Pick a friendly **WIZARD** or **PRIEST** to use this ability, pick a manifestation within 30" of them to be the target, then make a **banishment roll** of 2D6.
effect: If the **banishment roll** equals or exceeds the **banishment value** listed on the manifestation's warscroll, it is **banished** and removed from play. You cannot pick the same manifestation as the target of this ability more than once per turn.
keywords:
  - Banish
```

# Army Composition

## 1.0 Getting Started

:::tip
The latest points values are available in the Warhammer Age of Sigmar app, and points updates are available at [warhammer-community.com](http://warhammer-community.com)
:::

:::tip
Battle profiles are regularly updated to improve balance. When we republish them, the new version takes precedence over versions with an earlier publication date or no publication date.
:::

### 1.1 Army Roster

These rules will explain how to create an **army roster** to prepare for a battle. You can go to [warhammer-community.com](http://warhammer-community.com) to download a printable copy.

### 1.2 Points Limit

Before you start filling your roster, you and your opponent must agree on a **points limit** for the battle. You can agree on any points limit, but most players use a limit of 1000 points, 2000 points or somewhere in between.

No more than half of your points can be spent on a single unit.

#### 1.2.1 Underspending

In many cases, the total points cost of the units in your army will not add up to the exact points limit, but you might not have enough points left to add another unit. If the points cost of your army is **50 or more points lower** than the points limit of the battle, you gain **1 extra command point at the start of the first battle round.**

### 1.3 Battle Profiles

The information you'll need when building your army roster is found in each unit's **battle profile**. The battle profile for a unit will be in the same publication as its warscroll (usually a **battletome**).

## 2.0 Factions

The first thing you need to do when building your army roster is to pick your **faction** (e.g. Stormcast Eternals or Skaven).

Each faction has its own warscrolls, battle profiles and faction rules. These can be found in various publications but most commonly in the faction's **battletome**.

### 2.1 Battle Formations

Many factions contain one or more **battle formations**. Each battle formation grants unique benefits to your army. The **faction rules** for your faction will explain any battle formation options.

### 2.2 Armies of Renown

Some factions have access to rules for themed armies called **Armies of Renown**. If you choose to use an Army of Renown, the rules for that Army of Renown replace the normal faction rules for that army.

## 3.0 Adding Units

:::danger

- Pick a points limit: 1000 points or 2000 points. If other points limit, agree with opponent.
- Pick your faction.
- Pick your battle formation (if any).
- Form regiments. Each regiment has 1 **HERO** and 0-3 non-**HERO** units (0-4 if your general's regiment).
- Add auxiliary units (if any). Auxiliary units are units that aren't part of a regiment. If your opponent has more auxiliary units than you, you receive 1 extra command point each battle round.
- Add faction terrain features (if any).
- Pick enhancements (1 from each enhancement table).
- Pick up to 1 spell lore, 1 prayer lore and 1 manifestation lore.

  :::

### 3.1 Regiments

Armies are made up of one or more **regiments**, each of which is led by a **HERO**. You must have **at least 1** regiment in your army, and you can include a **maximum of 5** regiments. To add a regiment, pick **1 HERO** from your faction, then pick up to 3 non-**HERO** units to accompany them.

Each **HERO**'s battle profile lists which units can be added to their regiment, and each non-**HERO** unit's battle profile lists any relevant keywords it has. The battle profiles of some **HEROES** (such as named characters) may say that they can be added to the regiment of another **HERO**.

### 3.2 The General

You must pick 1 **HERO** in your army to be your **general**. If any units in your army have the **WARMASTER** keyword, you must pick one of those units to be your general. Your general's **regiment** can include up to 4 non-**HERO** units in addition to your general.

### 3.3 Reinforced Units

When you add a unit to your army roster, you can add it as a **reinforced unit**. A reinforced unit has **twice as many models** as its minimum unit size and costs **twice as many points**. If a unit has a minimum unit size of 1, it cannot be reinforced.

### 3.4 Unique Units

You cannot include the same **UNIQUE** unit more than once in your army. **UNIQUE** units cannot be reinforced.

### 3.5 Regiments of Renown

In addition to creating your own regiments, you can also spend points to include 1 **Regiment of Renown**. Regiments of Renown are pre-built regiments, each with their own special abilities. The rules for each Regiment of Renown will specify which factions can include it. A unit in a Regiment of Renown cannot be your general even if it is a **WARMASTER**.

### 3.6 Auxiliary Units

**Auxiliary units** allow you to take any units from your faction without the constraints of regiments, at the cost of potentially giving your opponent an advantage. You can add any number of units to the auxiliary units section of your army roster. However, the player with the fewest auxiliary units on their roster gains **1 extra command point at the start of each battle round** (if the players have the same number of auxiliary units, neither player receives an extra command point). **HEROES** that have compulsory regiment options cannot be taken as auxiliary units.

### 3.7 Faction Terrain Features

If your faction has a **faction terrain feature**, or a set of faction terrain features, you can pick 1 to include on your army roster. Faction terrain features do not cost any points.

## 4.0 Finishing Touches

### 4.1 Enhancements

Each set of faction rules include a number of **enhancements** that can be given to units, e.g. **heroic traits**, **mount traits** and **artefacts of power**. You can take **1 enhancement** from **each** enhancement table in your **faction rules**. Each enhancement table lists which units are eligible to be given that enhancement. **UNIQUE** units cannot be given enhancements.

While some abilities allow you to take extra enhancements, the same unit can never have more than 1 enhancement of the same type, and you can never include the same enhancement in your army more than once.

### 4.2 Lores

You can pick 1 **spell lore** available to your faction. If you do, **all WIZARDS** in your army know **all** spells from that lore.

You can pick 1 **prayer lore** available to your faction. If you do, **all PRIESTS** in your army know **all** prayers from that lore.

You can pick 1 **manifestation lore** available to your faction. If you do, **all WIZARDS** in your army know **all** spells from that lore, and **all PRIESTS** know **all** prayers from that lore.

# Command Models

## 1.0 Champions

Units with the **CHAMPION** keyword have one or more **champion** models. If there is a number after the **CHAMPION** keyword, that number indicates the proportion of models in that unit that can be champions. In any other case, 1 model in the unit can be a champion. Units with the **CHAMPION** keyword have the following passive ability:

```ability
name: Champion
icon: offensive
color: red
text: Passive
effect: Add 1 to the **Attacks** characteristic of weapons used by champions in this unit.
```

:::tip
If a unit had **CHAMPION (1/10)** on its keywords bar, then 1 model in that unit could be a champion for every 10 models in the unit.
:::

:::tip
Let your opponent know which models in a unit are champions, musicians and standard bearers if it's not already clear from the miniatures.
:::

## 2.0 Musicians

Units with the **MUSICIAN** keyword have one or more **musician** models. The number after the **MUSICIAN** keyword indicates the proportion of models in that unit that can be musicians. Units with the **MUSICIAN** keyword have the following passive ability:

```ability
name: Musician
icon: rally
color: yellow
text: Passive
effect: While this unit contains any musicians, if it uses the 'Rally' command, you can make one additional **rally roll** of D6.
```

## 3.0 Standard Bearers

Units with the **STANDARD BEARER** keyword have one or more **standard bearer** models. The number after the **STANDARD BEARER** keyword indicates the proportion of models in that unit that can be standard bearers. Units with the **STANDARD BEARER** keyword have the following passive ability:

```ability
name: Standard Bearer
icon: control
color: eggplant
text: Passive
effect: While this unit contains any standard bearers, add 1 to this unit's **control score**.
```

# Battle Tactics

## 1.0 Battle Tactics Overview

During a battle, each player can score extra **victory points** by completing **battle tactics**.

## 2.0 Picking Battle Tactics

Battle tactics are picked by using the 'Tactical Gambit' ability, below.

```ability
name: Tactical Gambit
icon: special
color: black
text: Once Per Battle Round, Start of Your Turn
declare: You cannot use this ability if you went second in the previous battle round and chose to go first in the current battle round.
effect: Pick 1 battle tactic that you have not yet attempted. You can attempt to complete that battle tactic this turn.
```

### 2.1 Completing Battle Tactics

If, at the end of your turn, you have completed the battle tactic you chose to attempt this turn, you score **4 victory points**.

:::danger

- Battle tactics are picked using the 'Tactical Gambit' ability at the start of your turn and are completed at the end of your turn.
- Each battle tactic is worth **4 victory points**.

  :::

## 3.0 Universal Battle Tactics

| Universal Battle Tactics                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Do Not Waver:** You complete this battle tactic at the end of your turn if 2 or more friendly units fought this turn and no friendly units were destroyed this turn.                                                                                                 |
| **Slay the Entourage:** Pick a unit in the enemy general's regiment. You complete this battle tactic if that unit is destroyed this turn.                                                                                                                              |
| **Attack on Two Fronts:** You complete this battle tactic at the end of your turn if you control 2 or more objectives that you did not control at the start of your turn and at least 1 of those objectives was controlled by your opponent at the start of your turn. |
| **Take Their Land:** Pick a terrain feature wholly or partially within enemy territory and wholly outside friendly territory. You complete this battle tactic if you control that terrain feature at the end of your turn.                                             |
| **Seize the Centre:** You complete this battle tactic at the end of your turn if 2 or more friendly units are within 3" of the centre of the battlefield and are not in combat.                                                                                        |
| **Take the Flanks:** You complete this battle tactic at the end of your turn if you have at least 1 friendly unit within 6" of each short battlefield edge, none of those units are wholly within friendly territory, and none of those units were set up this turn.   |

