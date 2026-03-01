/**
 * PIXEL PATRON RAIN
 * Reads PIXEL_DONORS from js/pixels-data.js (must be loaded first).
 * Adds donor names to the existing pixel particle rain on index.html.
 * Names fall slower than pixels, each in their own color with neon glow.
 */
(function () {
  "use strict";

  const canvas = document.getElementById("patron-rain-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const DONORS = typeof PIXEL_DONORS !== "undefined" ? PIXEL_DONORS : [];
  const DONOR_COLORS = ["#00ff41", "#ff00ff", "#00bfff"];

  let W,
    H,
    nameDrops = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function createNameDrop(donor) {
    return {
      name: donor.name,
      color:
        donor.color ||
        DONOR_COLORS[Math.floor(Math.random() * DONOR_COLORS.length)],
      x: 20 + Math.random() * (W - 220),
      y: -(Math.random() * H),
      speed: 0.35 + Math.random() * 0.65,
      opacity: 0.55 + Math.random() * 0.35,
      size: Math.random() < 0.5 ? 10 : 12,
    };
  }

  // Populate pool: each donor appears proportionally (min 2, max 5 drops each)
  function buildPool() {
    nameDrops = [];
    if (DONORS.length === 0) return;
    const repeats = Math.max(2, Math.min(5, Math.ceil(20 / DONORS.length)));
    DONORS.forEach((d) => {
      for (let i = 0; i < repeats; i++) {
        const drop = createNameDrop(d);
        drop.y = Math.random() * H; // scatter initial positions
        nameDrops.push(drop);
      }
    });
  }
  buildPool();

  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, W, H);

    nameDrops.forEach((d, i) => {
      d.y += d.speed;
      ctx.globalAlpha = d.opacity;
      ctx.fillStyle = d.color;
      ctx.shadowColor = d.color;
      ctx.shadowBlur = 6;
      ctx.font = `${d.size}px 'Press Start 2P'`;
      ctx.fillText(d.name, d.x, d.y);
      ctx.shadowBlur = 0;

      if (d.y > H + 30) {
        nameDrops[i] = createNameDrop(
          DONORS[Math.floor(Math.random() * DONORS.length)],
        );
      }
    });

    ctx.globalAlpha = 1;
    frame++;
  }
  animate();

  // ─── Update UI elements ────────────────────────────────────────────────
  const INTENSITY_LEVELS = [
    { max: 0, label: "SILENCIOSA", pct: 2 },
    { max: 3, label: "GOTAS", pct: 15 },
    { max: 10, label: "LLOVIZNA", pct: 30 },
    { max: 25, label: "LLUVIA", pct: 55 },
    { max: 50, label: "TORMENTA", pct: 80 },
    { max: 9999, label: "DILUVIO ⚡", pct: 100 },
  ];

  function getIntensity(n) {
    return (
      INTENSITY_LEVELS.find((l) => n <= l.max) ||
      INTENSITY_LEVELS[INTENSITY_LEVELS.length - 1]
    );
  }

  function updatePatronUI() {
    const count = DONORS.length;
    const lvl = getIntensity(count);

    const elCount = document.getElementById("patron-count");
    const elBar = document.getElementById("patron-intensity-bar");
    const elIntLabel = document.getElementById("patron-intensity-label");
    const elListNum = document.getElementById("patron-list-count");

    if (elCount) elCount.textContent = count;
    if (elBar) elBar.style.width = lvl.pct + "%";
    if (elIntLabel) elIntLabel.textContent = lvl.label;
    if (elListNum) elListNum.textContent = count + " registrados";

    // Render donor list
    const list = document.getElementById("patron-donor-list");
    if (!list) return;
    if (count === 0) {
      list.innerHTML = `<div style="padding:1.2rem;text-align:center;font-family:var(--font-secondary);color:var(--text-dim);font-size:1.1rem;">¡Sé el primero en aparecer en la lluvia!</div>`;
      return;
    }
    list.innerHTML = "";
    [...DONORS].reverse().forEach((d) => {
      const item = document.createElement("div");
      item.className = "patron-donor-item";
      item.innerHTML = `
        <div class="patron-donor-dot" style="background:${d.color};box-shadow:0 0 5px ${d.color}"></div>
        <span style="color:${d.color};font-family:var(--font-primary);font-size:0.55rem;">${d.name}</span>
        <span class="patron-donor-date">${d.date}</span>
      `;
      list.appendChild(item);
    });
  }

  // Run on DOMContentLoaded (script loads at end of body)
  document.addEventListener("DOMContentLoaded", updatePatronUI);
})();
