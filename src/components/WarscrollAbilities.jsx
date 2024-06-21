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
      {unit.notes && (
        <div class="note">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`**Notes:** ${unit.notes}`}</ReactMarkdown>
        </div>
      )}
      {unit.options && (
        <div class="note">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`**Options:** ${unit.options}`}</ReactMarkdown>
        </div>
      )}
      {unit.abilities.map((ability, i) => (
        <WarscrollAbility maxWidth="25rem" key={i} ability={ability} />
      ))}
    </div>
  );
}

export default WarscrollAbilities;
