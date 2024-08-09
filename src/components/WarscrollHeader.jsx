import "./WarscrollHeader.css";
function WarscrollHeader({ unit, color }) {
  let ward = null;
  if (
    unit.primaryKeywords &&
    unit.primaryKeywords.join().toUpperCase().includes("WARD")
  ) {
    let str = unit.primaryKeywords.join().toUpperCase();
    const regex = /WARD\s*\((\d+\+?)\)/;
    const match = str.match(regex);

    if (match) {
      ward = match[1];
    }
  }

  return (
    <div className="warscroll-header">
      <div className="stat-card">
        <div className="stat-header">Move</div>
        <div className="stat">{unit.stats.movement}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">Save / Ward</div>
        {ward ? (
          <div className="stat">
            {unit.stats.save}/{ward}
          </div>
        ) : (
          <div className="stat">{unit.stats.save}</div>
        )}
      </div>
      {unit.stats.control && (
        <div className="stat-card">
          <div className="stat-header">Control</div>
          <div className="stat">{unit.stats.control}</div>
        </div>
      )}
      {unit.stats.banishment && (
        <div className="stat-card">
          <div className="stat-header">Banishment</div>
          <div className="stat">{unit.stats.banishment}</div>
        </div>
      )}
      <div className="stat-card">
        <div className="stat-header">Health</div>
        <div className="stat">{unit.stats.health}</div>
      </div>
    </div>
  );
}

export default WarscrollHeader;
