import "./WarscrollAbilities.css";
import WarscrollAbility from "./WarscrollAbility";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function WarscrollAbilities({ unit }) {
  let numberOfAbilities = unit.abilities.length;
  if (numberOfAbilities === 0) {
    return null;
  }

  return (
    <div className="warscroll-abilities">
      <div className="abilities-left">
        {unit.notes && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Notes:** ${unit.notes}`}</ReactMarkdown>
        )}
        {unit.options && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{`**Options:** ${unit.options}`}</ReactMarkdown>
        )}
        {unit.abilities
          .slice(0, Math.round(numberOfAbilities / 2))
          .map((ability, i) => (
            <WarscrollAbility key={i} ability={ability} />
          ))}
      </div>
      <div className="abilities-right">
        {unit.abilities
          .slice(Math.round(numberOfAbilities / 2), numberOfAbilities)
          .map((ability, i) => (
            <WarscrollAbility key={i} ability={ability} />
          ))}
      </div>
    </div>
  );
}

export default WarscrollAbilities;
