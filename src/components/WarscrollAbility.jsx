import './WarscrollAbilities.css';
import WarscrollAbilityContent from './WarscrollAbilityContent';
import WarscrollAbilityHeader from './WarscrollAbilityHeader';
function WarscrollAbility({ ability }) {
    return <div className="ability">
        <WarscrollAbilityHeader ability={ability} />
        <WarscrollAbilityContent ability={ability} />
    </div>
}

export default WarscrollAbility;