import WarscrollAbilities from "./WarscrollAbilities";
import WarscrollHeader from "./WarscrollHeader";
import WarscrollKeywords from "./WarscrollKeywords";
import WarscrollWeapons from "./WarscrollWeapons";

function Warscroll({ unit, icon, color }) {

    return <div className="warscroll" style={{ '--faction-color': `${color}` }}>
        <WarscrollHeader unit={unit} color={color} />
        <WarscrollWeapons unit={unit} color={color} />
        <WarscrollAbilities unit={unit} />
        <WarscrollKeywords color={color} icon={icon} primaryKeywords={unit.primaryKeywords} secondaryKeywords={unit.secondaryKeywords} />
    </div>
}

export default Warscroll;