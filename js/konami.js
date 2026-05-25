(function () {
  const SEQUENCE = [
    'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
    'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight',
    'KeyB','KeyA'
  ];
  let progress = 0;

  /* ── Inject god-mode styles once ── */
  const style = document.createElement('style');
  style.id = 'konami-styles';
  style.textContent = `
    body.god-mode .crt-overlay {
      opacity: 0.15 !important;
      background: repeating-linear-gradient(
        0deg,
        rgba(0,255,65,0.03) 0px,
        rgba(0,255,65,0.03) 1px,
        transparent 1px,
        transparent 2px
      ) !important;
    }
    body.god-mode {
      filter: hue-rotate(0deg);
    }
    body.god-mode .section-title,
    body.god-mode .hero-title {
      text-shadow: 0 0 8px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41 !important;
    }
    body.god-mode .card,
    body.god-mode .game-card {
      box-shadow: 0 0 8px #00ff41, 0 0 20px rgba(0,255,65,0.3) !important;
    }
    body.god-mode .navbar {
      border-bottom: 2px solid #00ff41 !important;
      box-shadow: 0 2px 20px rgba(0,255,65,0.4) !important;
    }
    #konami-overlay {
      font-family: 'Press Start 2P', cursive;
    }
    @keyframes konamiBlink {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  function showOverlay(activating) {
    const existing = document.getElementById('konami-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'konami-overlay';
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:99999',
      'background:rgba(0,0,0,0.92)',
      'display:flex', 'flex-direction:column',
      'justify-content:center', 'align-items:center',
      'gap:1rem', 'cursor:pointer'
    ].join(';');

    if (activating) {
      overlay.innerHTML = `
        <div style="font-size:1.5rem;color:#ffcc00;margin-bottom:1rem;text-align:center;">
          ⬆⬆⬇⬇⬅➡⬅➡🅱🅰
        </div>
        <div style="font-size:clamp(1.2rem,4vw,2rem);color:#00ff41;text-shadow:0 0 10px #00ff41,0 0 30px #00ff41;text-align:center;">
          DIOS FREAK MODE
        </div>
        <div style="font-size:0.8rem;color:#ff00ff;animation:konamiBlink 0.8s step-end infinite;text-align:center;">
          [ ACTIVADO ]
        </div>
      `;
    } else {
      overlay.innerHTML = `
        <div style="font-size:clamp(1.2rem,4vw,2rem);color:#00ff41;text-shadow:0 0 10px #00ff41,0 0 30px #00ff41;text-align:center;">
          DIOS FREAK MODE
        </div>
        <div style="font-size:0.8rem;color:#ff00ff;animation:konamiBlink 0.8s step-end infinite;text-align:center;">
          [ DESACTIVADO ]
        </div>
      `;
    }

    document.body.appendChild(overlay);

    const duration = activating ? 2500 : 1500;
    const timer = setTimeout(() => {
      overlay.remove();
      if (!activating) document.body.classList.remove('god-mode');
    }, duration);

    overlay.addEventListener('click', function () {
      clearTimeout(timer);
      overlay.remove();
      if (!activating) document.body.classList.remove('god-mode');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.code === SEQUENCE[progress]) {
      progress++;
      if (progress === SEQUENCE.length) {
        progress = 0;
        const activating = !document.body.classList.contains('god-mode');
        if (activating) document.body.classList.add('god-mode');
        showOverlay(activating);
      }
    } else {
      progress = e.code === SEQUENCE[0] ? 1 : 0;
    }
  });
})();
