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
  console.log(`CASTING VALUE: ${ability.castingValue}`);
  let { gradient } = GetPhaseColors(ability.header.color);

  return (
    <div className={`ability-header ${gradient}`}>
      <img className="ability-icon" src={icon} />
      <span>{ability.header.text}</span>
      {ability.castingValue && (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            position: "absolute",
            height: "4rem",
            width: "4rem",
            top: "-1rem",
            textAlign: "center",
            verticalAlign: "middle",
            right: "1rem",
            background:
              "linear-gradient(128deg, rgba(255,20,0,1) 20%, rgba(255,175,0,1) 39%, rgba(20,175,0,1) 60%, rgba(0,15,240,1) 80%, rgba(201,0,201,1) 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          <span>{ability.castingValue}</span>
        </div>
      )}
    </div>
  );
}

export default WarscrollAbilityHeader;
