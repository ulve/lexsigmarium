import "./WarscrollKeywords.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function WarscrollKeywords({ primaryKeywords, secondaryKeywords, icon }) {
  let iconUrl = useBaseUrl(`img/${icon}`);
  return (
    <>
      {" "}
      <div className="warscroll-keywords">
        <div className="fifi">
          <div className="warscroll-keyword">Keywords</div>
        </div>
        <div className="primary-keywords">
          {primaryKeywords
            .map((keyword, i) => {
              return (
                <span key={i} className="primary-keyword">
                  {keyword}
                </span>
              );
            })
            .reduce((acc, x) => (acc === null ? [x] : [acc, ", ", x]), null)}
        </div>
        <div className="secondary-keywords">
          {secondaryKeywords
            .map((keyword, i) => {
              return (
                <span key={i} className="secondary-keyword">
                  {keyword}
                </span>
              );
            })
            .reduce((acc, x) => (acc === null ? [x] : [acc, ", ", x]), null)}
        </div>
      </div>
      <div className="warscroll-separator">
        <img src={iconUrl} className="nurgle" />
      </div>
    </>
  );
}

export default WarscrollKeywords;

