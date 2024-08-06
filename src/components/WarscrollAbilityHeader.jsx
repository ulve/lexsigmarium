import "./WarscrollAbilityHeader.css";
import "./Phases.css";
import GetPhaseColors from "./PhaseColors";
import damaged from "@site/static/img/damaged.png";
import control from "@site/static/img/control.png";
import defensive from "@site/static/img/defensive.png";
import offensive from "@site/static/img/offensive.png";
import movement from "@site/static/img/movement.png";
import special from "@site/static/img/special.png";
import rally from "@site/static/img/rally.png";
import shooting from "@site/static/img/shooting.png";

function WarscrollAbilityHeader({ ability }) {
  let icon = damaged;

  if (ability.header.icon.toUpperCase().includes("CONTROL")) {
    icon = control;
  } else if (ability.header.icon.toUpperCase().includes("DEFENSIVE")) {
    icon = defensive;
  } else if (ability.header.icon.toUpperCase().includes("OFFENSIVE")) {
    icon = offensive;
  } else if (ability.header.icon.toUpperCase().includes("MOVEMENT")) {
    icon = movement;
  } else if (ability.header.icon.toUpperCase().includes("SPECIAL")) {
    icon = special;
  } else if (ability.header.icon.toUpperCase().includes("RALLY")) {
    icon = rally;
  } else if (ability.header.icon.toUpperCase().includes("SHOOTING")) {
    icon = shooting;
  }

  let { gradient } = GetPhaseColors(ability.header.color);

  return (
    <div className={`ability-header ${gradient}`}>
      <img className="ability-icon" src={icon} />
      <span>{ability.header.text}</span>
      {ability.castingValue && (
        <div className="castingValue">
          <span>{ability.castingValue}</span>
        </div>
      )}
      {ability.chantingValue && (
        <div className="chantingValue">
          <span>{ability.chantingValue}</span>
        </div>
      )}
      {ability.commandValue && (
        <div className="commandValue">
          <span>{ability.commandValue}</span>
        </div>
      )}
    </div>
  );
}

export default WarscrollAbilityHeader;
