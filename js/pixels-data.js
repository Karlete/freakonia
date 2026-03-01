/**
 * PIXEL PATRON DATA
 * Add new donors at the TOP of the array (newest first).
 * Each object: { name: 'NICK', color: '#hex', date: 'DD/MM/YYYY' }
 * Colors rotate: '#00ff41' (green) → '#ff00ff' (magenta) → '#00bfff' (blue)
 *
 * RAIN_INTENSITY levels:
 *   0 donors  → SILENCIOSA
 *   1–3       → GOTAS
 *   4–10      → LLOVIZNA
 *   11–25     → LLUVIA
 *   26–50     → TORMENTA
 *   51+       → DILUVIO ⚡
 */
const PIXEL_DONORS = [
  { name: "RIKI", color: "#00bfff", date: "01/03/2026" },
  { name: "MERCHAND", color: "#ff00ff", date: "01/03/2026" },
  { name: "KAWAI_BI", color: "#00ff41", date: "01/03/2026" },
  { name: "KARLETE", color: "#ffcc00", date: "01/03/2026" },
];
