import "./WarscrollAbilityContent.css";
import "./Phases.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GetPhaseColors from "./PhaseColors";

function WarscrollAbilityContent({ ability }) {
  let { gradient, border, outline } = GetPhaseColors(ability.header.color);

  return (
    <div className={`ability-content ${border}`}>
      <div className="ability-name">{ability.name}</div>
      {ability.note && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >{`**${ability.note.title}** ${ability.note.text}`}</ReactMarkdown>
      )}
      {ability.usedBy && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >{`**Used By:** ${ability.usedBy}`}</ReactMarkdown>
      )}
      {ability.declare && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >{`**Declare:** ${ability.declare}`}</ReactMarkdown>
      )}
      {ability.effect && (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
        >{`**Effect:** ${ability.effect}`}</ReactMarkdown>
      )}
      {ability.keywords && (
        <div className={`ability-keywords ${outline}`}>
          <div className={`${gradient}`}>
            <div className="left ability-bold heading-font">Keywords: </div>
          </div>
          <div className="ability-bold ability-keyword-list">
            {ability.keywords.join(", ")}
          </div>
        </div>
      )}
    </div>
  );
}

export default WarscrollAbilityContent;
