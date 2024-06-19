function GetPhaseColors(phase) {
  let color = "start";
  if (phase) {
    if (phase.toUpperCase().includes("BLACK")) {
      color = "black";
    } else if (phase.toUpperCase().includes("YELLOW")) {
      color = "yellow";
    } else if (phase.toUpperCase().includes("GRAY")) {
      color = "gray";
    } else if (phase.toUpperCase().includes("TEAL")) {
      color = "teal";
    } else if (phase.toUpperCase().includes("ORANGE")) {
      color = "orange";
    } else if (phase.toUpperCase().includes("RED")) {
      color = "red";
    } else if (phase.toUpperCase().includes("EGGPLANT")) {
      color = "eggplant";
    } else if (phase.toUpperCase().includes("GREEN")) {
      color = "green";
    }
  }

  return {
    gradient: color + "-gradient",
    border: color + "-border",
    outline: color + "-outline",
  };
}

export default GetPhaseColors;
