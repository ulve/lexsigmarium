import "./WarscrollAbilities.css";
import WarscrollAbilityContent from "./WarscrollAbilityContent";
import WarscrollAbilityHeader from "./WarscrollAbilityHeader";
function WarscrollAbility({ ability, maxWidth }) {
  if (typeof ability === "string" || ability instanceof String)
    ability = JSON.parse(ability);

  if (!maxWidth) maxWidth = "100%";

  return (
    <div className="ability" style={{ maxWidth: maxWidth }}>
      <WarscrollAbilityHeader ability={ability} />
      <WarscrollAbilityContent ability={ability} />
    </div>
  );
}

export default WarscrollAbility;
