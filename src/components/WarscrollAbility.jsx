import "./WarscrollAbilities.css";
import WarscrollAbilityContent from "./WarscrollAbilityContent";
import WarscrollAbilityHeader from "./WarscrollAbilityHeader";
function WarscrollAbility({ ability, maxWidth }) {
  if (!maxWidth) maxWidth = "100%";
  console.log(maxWidth);
  return (
    <div className="ability" style={{ maxWidth: maxWidth }}>
      <WarscrollAbilityHeader ability={ability} />
      <WarscrollAbilityContent ability={ability} />
    </div>
  );
}

export default WarscrollAbility;

