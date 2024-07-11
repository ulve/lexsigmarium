import "./WarscrollAbilities.css";
import "./Phases.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function WarscrollProfile({ profile, maxWidth }) {
  let a = "";
  if (profile.points) a += `* **Cost:** ${profile.points}\n\n`;
  if (profile.unitSize) a += `* **Unit Size:** ${profile.unitSize}\n`;
  if (profile.relevantKeywords)
    a += `* **Relevant Keywords:** ${profile.relevantKeywords.join(", ")}\n`;
  if (profile.notes) a += `**Notes:** ${profile.notes}\n`;
  if (profile.baseSizes)
    a += `* **Base Size:** ${profile.baseSizes.join(", ")}\n`;
  if (profile.regimentOptions) {
    a += profile.regimentOptions.map((option) => {
      let b = "* **Regiment Options:** ";
      if (option.min) b = option.min + "-";
      if (option.max) b += option.max + " ";
      b += option.text + "\n";
      return b;
    });
  }

  if (!maxWidth) maxWidth = "100%";
  return (
    <div className="ability" style={{ maxWidth: maxWidth }}>
      <div className="ability-header teal-gradient">
        <span>Profile</span>
      </div>
      <div className={`ability-content teal-border`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{a}</ReactMarkdown>
      </div>
    </div>
  );
}
export default WarscrollProfile;
