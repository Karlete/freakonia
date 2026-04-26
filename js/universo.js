(function () {
  "use strict";

  const UNIVERSE_NODES = [
    {
      id: "gamedev",
      label: "GAMEDEV",
      emoji: "🎮",
      href: "gamedev.html",
      topic: "gamedev",
      color: "#00ff41",
      tagline: "Fallen Valkyrie en construcción. Unity y café.",
      xRatio: 0.30,
      yRatio: 0.20,
      baseRadius: 28,
    },
    {
      id: "gaming",
      label: "GAMING",
      emoji: "🕹",
      href: "gaming.html",
      topic: "gaming",
      color: "#ff00ff",
      tagline: "Desde 1993. Memoria pixelada y músculo arcade.",
      xRatio: 0.20,
      yRatio: 0.45,
      baseRadius: 26,
    },
    {
      id: "esports",
      label: "ESPORTS",
      emoji: "🏆",
      href: "esports.html",
      topic: "esports",
      color: "#00bfff",
      tagline: "14 temporadas de LoL. Más espectador que jugador.",
      xRatio: 0.27,
      yRatio: 0.71,
      baseRadius: 22,
    },
    {
      id: "got",
      label: "GAME OF THRONES",
      emoji: "🐉",
      href: "got.html",
      topic: "got",
      color: "#cc2200",
      tagline: "ASOIAF S1-S6. El Norte recuerda. GRRM, escribe.",
      xRatio: 0.67,
      yRatio: 0.20,
      baseRadius: 26,
    },
    {
      id: "warhammer",
      label: "WARHAMMER",
      emoji: "⚙",
      href: "warhammer.html",
      topic: "warhammer",
      color: "#ffcc00",
      tagline: "Bretonia, 5ª edición, 1996. El Viejo Mundo vive.",
      xRatio: 0.78,
      yRatio: 0.43,
      baseRadius: 24,
    },
    {
      id: "magic",
      label: "MAGIC: THE GATHERING",
      emoji: "✨",
      href: "magic.html",
      topic: "magic",
      color: "#cc44ff",
      tagline: "Ice Age a Tempest. Clan MDK. Torneos de viernes.",
      xRatio: 0.71,
      yRatio: 0.66,
      baseRadius: 22,
    },
    {
      id: "rol",
      label: "ROL",
      emoji: "🎲",
      href: "rol.html",
      topic: "rol",
      color: "#ff8800",
      tagline: "JOC Internacional. MERP, Stormbringer, Cthulhu.",
      xRatio: 0.59,
      yRatio: 0.79,
      baseRadius: 20,
    },
    {
      id: "nba",
      label: "NBA",
      emoji: "🏀",
      href: "nba.html",
      topic: "nba",
      color: "#ff6600",
      tagline: "25 años de Lakers. La Taberna del Boxscore.",
      xRatio: 0.38,
      yRatio: 0.79,
      baseRadius: 22,
    },
    {
      id: "java",
      label: "JAVA",
      emoji: "☕",
      href: "java.html",
      topic: "java",
      color: "#1eb8d0",
      tagline: "Dev profesional. JavaDevBible en construcción.",
      xRatio: 0.50,
      yRatio: 0.88,
      baseRadius: 20,
    },
    {
      id: "freakonia",
      label: "FREAKONIA",
      emoji: "⚔",
      href: "index.html",
      topic: null,
      color: "#00ff41",
      tagline: "El reino friki de Karlete. Sin filtros desde 1993.",
      xRatio: 0.50,
      yRatio: 0.47,
      baseRadius: 36,
    },
  ];

  const CONSTELLATION_LINES = [
    ["gamedev", "gaming"],
    ["gaming", "esports"],
    ["got", "warhammer"],
    ["warhammer", "magic"],
    ["magic", "rol"],
    ["esports", "nba"],
    ["nba", "java"],
    ["java", "rol"],
    ["gamedev", "got"],
    ["freakonia", "gamedev"],
    ["freakonia", "gaming"],
    ["freakonia", "got"],
    ["freakonia", "nba"],
    ["freakonia", "java"],
    ["freakonia", "rol"],
  ];

  const NAV_HEIGHT = 64;

  let canvas, ctx;
  let stars = [];
  let shootingStars = [];
  let time = 0;
  let hoveredNode = null;
  let panelNode = null;

  function computeNodePositions() {
    const w = canvas.width;
    const h = canvas.height;
    const usableH = h - NAV_HEIGHT;
    UNIVERSE_NODES.forEach((node) => {
      node.x = node.xRatio * w;
      node.y = NAV_HEIGHT + node.yRatio * usableH;
    });
  }

  function initParticlesAndRings() {
    UNIVERSE_NODES.forEach((node) => {
      node.particles = [
        {
          angle: Math.random() * Math.PI * 2,
          orbitRadius: node.baseRadius + 14,
          speed: 0.012 + Math.random() * 0.01,
          size: 2,
        },
        {
          angle: Math.random() * Math.PI * 2,
          orbitRadius: node.baseRadius + 22,
          speed: 0.007 + Math.random() * 0.008,
          size: 2,
        },
      ];
      node.pulseRing = {
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.003,
      };
    });
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < 350; i++) {
      const isBright = Math.random() < 0.05;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: isBright ? 2.5 + Math.random() * 0.5 : 0.5 + Math.random() * 1.5,
        baseAlpha: isBright ? 0.9 + Math.random() * 0.1 : 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.003,
      });
    }
  }

  function drawStars() {
    stars.forEach((star) => {
      const alpha =
        star.baseAlpha *
        (0.5 + 0.5 * Math.sin(time * star.speed * 60 + star.phase));
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(
        Math.floor(star.x),
        Math.floor(star.y),
        Math.ceil(star.size),
        Math.ceil(star.size),
      );
    });
  }

  function updateAndDrawShootingStars() {
    if (Math.random() < 0.0007) {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.7,
        y: NAV_HEIGHT + Math.random() * (canvas.height - NAV_HEIGHT) * 0.5,
        vx: 4 + Math.random() * 3,
        vy: 1.5 + Math.random() * 2,
        length: 60 + Math.random() * 80,
        life: 1,
      });
    }

    shootingStars = shootingStars.filter((star) => {
      star.x += star.vx;
      star.y += star.vy;
      star.life -= 0.018;
      if (star.life <= 0) return false;

      ctx.save();
      ctx.globalAlpha = star.life * 0.8;
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x - star.vx * (star.length / 5),
        star.y - star.vy * (star.length / 5),
      );
      ctx.stroke();
      ctx.globalAlpha = star.life;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(Math.floor(star.x), Math.floor(star.y), 2, 2);
      ctx.restore();

      return true;
    });
  }

  function drawNebulae() {
    const blobs = [
      {
        cx: canvas.width * 0.23,
        cy: NAV_HEIGHT + (canvas.height - NAV_HEIGHT) * 0.46,
        r: canvas.width * 0.16,
        inner: "rgba(255,0,255,0.06)",
        outer: "rgba(255,0,255,0)",
      },
      {
        cx: canvas.width * 0.72,
        cy: NAV_HEIGHT + (canvas.height - NAV_HEIGHT) * 0.44,
        r: canvas.width * 0.18,
        inner: "rgba(255,204,0,0.05)",
        outer: "rgba(204,34,0,0)",
      },
      {
        cx: canvas.width * 0.49,
        cy: NAV_HEIGHT + (canvas.height - NAV_HEIGHT) * 0.82,
        r: canvas.width * 0.14,
        inner: "rgba(255,102,0,0.04)",
        outer: "rgba(0,191,255,0)",
      },
      {
        cx: canvas.width * 0.50,
        cy: NAV_HEIGHT + (canvas.height - NAV_HEIGHT) * 0.47,
        r: canvas.width * 0.10,
        inner: "rgba(0,255,65,0.05)",
        outer: "rgba(0,255,65,0)",
      },
    ];

    blobs.forEach((blob) => {
      const grad = ctx.createRadialGradient(
        blob.cx, blob.cy, 0,
        blob.cx, blob.cy, blob.r,
      );
      grad.addColorStop(0, blob.inner);
      grad.addColorStop(1, blob.outer);
      ctx.globalAlpha = 1;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(blob.cx, blob.cy, blob.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawConstellationLines() {
    ctx.save();
    CONSTELLATION_LINES.forEach(([fromId, toId], idx) => {
      const from = UNIVERSE_NODES.find((n) => n.id === fromId);
      const to = UNIVERSE_NODES.find((n) => n.id === toId);
      if (!from || !to) return;

      // Pass 1 — wide glow in from-node color
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle = from.color + "18";
      ctx.lineWidth = 4;
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      // Pass 2 — animated dashed mid line
      ctx.beginPath();
      ctx.setLineDash([6, 5]);
      ctx.lineDashOffset = -(time * 14);
      ctx.strokeStyle = "rgba(0,255,65,0.20)";
      ctx.lineWidth = 1.5;
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      // Pass 3 — traveling bright dot
      ctx.setLineDash([]);
      const t = ((time * 0.3 + idx * 0.17) % 1);
      const px = from.x + (to.x - from.x) * t;
      const py = from.y + (to.y - from.y) * t;
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(Math.floor(px) - 1, Math.floor(py) - 1, 3, 3);
      ctx.globalAlpha = 1;
    });
    ctx.setLineDash([]);
    ctx.restore();
  }

  function updatePulseRing(node, currentRadius) {
    node.pulseRing.progress =
      (node.pulseRing.progress + node.pulseRing.speed) % 1;
    const p = node.pulseRing.progress;
    const ringRadius = currentRadius + p * 35;
    const alpha = (1 - p) * 0.5;
    ctx.save();
    ctx.beginPath();
    ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
    ctx.strokeStyle = node.color;
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function updateOrbitParticles(node, currentRadius) {
    node.particles.forEach((p) => {
      p.angle += p.speed;
      const px =
        node.x +
        Math.cos(p.angle) * (currentRadius + p.orbitRadius - node.baseRadius);
      const py =
        node.y +
        Math.sin(p.angle) * (currentRadius + p.orbitRadius - node.baseRadius);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = 0.55;
      ctx.fillRect(Math.floor(px), Math.floor(py), p.size, p.size);
      ctx.globalAlpha = 1;
    });
  }

  function drawNode(node, currentRadius, isHovered, breathe) {
    const isFreakonia = node.id === "freakonia";
    ctx.save();

    // Glow — stronger for freakonia
    ctx.shadowColor = node.color;
    ctx.shadowBlur = isFreakonia
      ? (isHovered ? 60 : 40)
      : (isHovered ? 45 : 18);

    // Filled body (low alpha)
    ctx.beginPath();
    ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
    ctx.fillStyle = node.color + "22";
    ctx.fill();

    // Border ring
    ctx.beginPath();
    ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
    ctx.strokeStyle = node.color;
    ctx.lineWidth = isHovered ? 3 : 2;
    ctx.stroke();

    // FREAKONIA second static inner ring
    if (isFreakonia) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.baseRadius + 8 + breathe, 0, Math.PI * 2);
      ctx.strokeStyle = "#00ff41" + "33";
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();
    }

    ctx.shadowBlur = 0;

    // Hover: outer dashed ring
    if (isHovered) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentRadius + 18, 0, Math.PI * 2);
      ctx.strokeStyle = node.color + "55";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Hover: animated scan line sweeping vertically through node
    if (isHovered) {
      const scanY = node.y - currentRadius + ((time * 60) % (currentRadius * 2));
      if (scanY >= node.y - currentRadius && scanY <= node.y + currentRadius) {
        ctx.beginPath();
        ctx.strokeStyle = node.color + "40";
        ctx.lineWidth = 1;
        ctx.moveTo(node.x - currentRadius, scanY);
        ctx.lineTo(node.x + currentRadius, scanY);
        ctx.stroke();
      }
    }

    // Hover: coordinate label above node
    if (isHovered) {
      ctx.font = '6px "Press Start 2P", monospace';
      ctx.fillStyle = node.color + "aa";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      const coordText = `[${Math.floor(node.xRatio * 100)}:${Math.floor(node.yRatio * 100)}]`;
      ctx.fillText(coordText, node.x, node.y - currentRadius - 16);
    }

    // Emoji (centered)
    const emojiSize = Math.floor(currentRadius * 0.75);
    ctx.font = `${emojiSize}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(node.emoji, node.x, node.y);

    // Label below
    ctx.font = '7px "Press Start 2P", monospace';
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = isHovered ? node.color : "#666666";
    ctx.shadowColor = isHovered ? node.color : "transparent";
    ctx.shadowBlur = isHovered ? 8 : 0;
    const maxChars = 12;
    const displayLabel =
      node.label.length > maxChars
        ? node.label.slice(0, maxChars) + "…"
        : node.label;
    ctx.fillText(displayLabel, node.x, node.y + currentRadius + 10);
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  function animate() {
    requestAnimationFrame(animate);
    time += 0.016;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawStars();
    updateAndDrawShootingStars();
    drawNebulae();
    drawConstellationLines();

    UNIVERSE_NODES.forEach((node, i) => {
      const isHovered = hoveredNode && hoveredNode.id === node.id;
      const breatheAmp = node.id === "freakonia" ? 6 : 3;
      const breathe = Math.sin(time * 0.8 + i * 1.3) * breatheAmp;
      const currentRadius = node.baseRadius + breathe + (isHovered ? 10 : 0);
      updatePulseRing(node, currentRadius);
      updateOrbitParticles(node, currentRadius);
      drawNode(node, currentRadius, isHovered, breathe);
    });
  }

  function handlePointerMove(mx, my) {
    let found = null;
    UNIVERSE_NODES.forEach((node) => {
      const dist = Math.hypot(mx - node.x, my - node.y);
      if (dist < node.baseRadius + 20) found = node;
    });
    if (found !== hoveredNode) {
      hoveredNode = found;
      canvas.style.cursor = found ? "pointer" : "default";
      if (found) {
        showPanel(found);
      }
      // Panel stays visible until user closes it or clicks another node
    }
  }

  function showPanel(node) {
    panelNode = node;
    const panel = document.getElementById("universe-panel");

    panel.style.borderColor = node.color;
    panel.style.setProperty("--panel-color", node.color);

    document.getElementById("panel-emoji").textContent = node.emoji;
    document.getElementById("panel-title").textContent = node.label;
    document.getElementById("panel-title").style.color = node.color;

    const taglineEl = document.getElementById("panel-tagline");
    taglineEl.textContent = node.tagline;
    taglineEl.style.borderLeftColor = node.color;
    taglineEl.style.color = "#aaaaaa";

    const newsContainer = document.getElementById("panel-news");
    newsContainer.innerHTML = "";

    const label = document.createElement("p");
    label.className = "universe-news-label";
    label.textContent = "— ÚLTIMAS NOTICIAS —";
    newsContainer.appendChild(label);

    if (typeof NEWS_DATA !== "undefined") {
      const topicNews = NEWS_DATA.filter((n) => n.topic === node.topic).slice(
        0,
        2,
      );
      if (topicNews.length === 0) {
        const empty = document.createElement("p");
        empty.style.cssText =
          "font-family: VT323, monospace; font-size: 18px; color: #444444;";
        empty.textContent = "Sin noticias recientes.";
        newsContainer.appendChild(empty);
      } else {
        topicNews.forEach((article) => {
          const card = document.createElement("a");
          card.className = "universe-news-card";
          card.href = `article.html?id=${article.id}`;
          card.style.setProperty("--card-hover-color", node.color);
          card.innerHTML = `
            <span class="universe-news-card-title">${article.title}</span>
            <span class="universe-news-card-date">${article.date}</span>
          `;
          newsContainer.appendChild(card);
        });
      }
    }

    const btn = document.getElementById("panel-btn");
    btn.href = node.href;
    btn.textContent = `▶ ENTRAR A ${node.label}`;
    btn.style.background = node.color;
    btn.style.color = "#000000";
    btn.style.borderColor = node.color;

    panel.classList.add("visible");
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    computeNodePositions();
  }

  document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("universe-canvas");
    ctx = canvas.getContext("2d");

    resizeCanvas();
    initParticlesAndRings();
    initStars();
    animate();

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      handlePointerMove(mx, my);
    });

    canvas.addEventListener("click", () => {
      if (hoveredNode) {
        window.location.href = hoveredNode.href;
      }
    });

    canvas.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        const t = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        handlePointerMove(t.clientX - rect.left, t.clientY - rect.top);
      },
      { passive: false },
    );

    canvas.addEventListener(
      "touchend",
      (e) => {
        e.preventDefault();
        if (hoveredNode) {
          window.location.href = hoveredNode.href;
        }
      },
      { passive: false },
    );

    document
      .getElementById("universe-panel-close")
      .addEventListener("click", () => {
        document.getElementById("universe-panel").classList.remove("visible");
        panelNode = null;
      });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("universe-panel").classList.remove("visible");
        panelNode = null;
      }
    });

    window.addEventListener("resize", resizeCanvas);
  });
})();
