// main.js — Global JS: nav, utils, pixel effects

// ─── Navigation active state ───────────────────────────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
  // Highlight dropdown parent when a submenu link matches the current page
  document.querySelectorAll('.nav-submenu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === path || (path === '' && href === 'index.html'))) {
      link.classList.add('active');
      const toggle = link.closest('.nav-dropdown')?.querySelector('.nav-dropdown-toggle');
      if (toggle) toggle.classList.add('active');
    }
  });
})();

// ─── Mobile nav toggle ─────────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.textContent = navMenu.classList.contains('open') ? '▲ MENU' : '▼ MENU';
  });
}

// ─── Dropdown nav toggle (mobile) ──────────────────────────────────────────
document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      const dropdown = toggle.closest('.nav-dropdown');
      if (dropdown) dropdown.classList.toggle('open');
    }
  });
});

// ─── CRT flicker (subtle random opacity dip) ──────────────────────────────
function crtFlicker() {
  const crt = document.querySelector('.crt-overlay');
  if (!crt) return;
  const flicker = () => {
    if (Math.random() > 0.97) {
      crt.style.opacity = (Math.random() * 0.15 + 0.02).toFixed(2);
      setTimeout(() => { crt.style.opacity = ''; }, 50 + Math.random() * 80);
    }
  };
  setInterval(flicker, 150);
}
crtFlicker();

// ─── Pixel cursor trail ────────────────────────────────────────────────────
(function pixelTrail() {
  const TRAIL_LENGTH = 8;
  const pool = [];

  for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
      position:fixed;pointer-events:none;z-index:9999;
      width:4px;height:4px;background:var(--accent-primary);
      opacity:0;image-rendering:pixelated;
    `;
    document.body.appendChild(dot);
    pool.push({ el: dot, x: 0, y: 0 });
  }

  const positions = [];
  document.addEventListener('mousemove', e => {
    positions.unshift({ x: e.clientX, y: e.clientY });
    if (positions.length > TRAIL_LENGTH) positions.pop();

    pool.forEach((dot, i) => {
      const pos = positions[i];
      if (pos) {
        dot.el.style.left = pos.x - 2 + 'px';
        dot.el.style.top = pos.y - 2 + 'px';
        dot.el.style.opacity = (1 - i / TRAIL_LENGTH).toFixed(2);
      } else {
        dot.el.style.opacity = '0';
      }
    });
  });
})();

// ─── Scroll reveal (intersection observer) ────────────────────────────────
(function scrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => observer.observe(el));
})();

// ─── Typing effect for hero taglines ──────────────────────────────────────
function typeWriter(el, text, speed = 60, callback) {
  let i = 0;
  el.textContent = '';
  el.style.visibility = 'visible';
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed);
    } else if (callback) {
      callback();
    }
  };
  tick();
}

window.typeWriter = typeWriter;

// ─── XP / health bar animation ────────────────────────────────────────────
(function animateBars() {
  document.querySelectorAll('[data-fill]').forEach(bar => {
    const target = parseInt(bar.dataset.fill, 10);
    let current = 0;
    const step = () => {
      if (current < target) {
        current = Math.min(current + 2, target);
        bar.style.width = current + '%';
        requestAnimationFrame(step);
      }
    };
    // Only animate when bar enters viewport
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        step();
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(bar);
  });
})();

// ─── 8-bit click sound (Web Audio API) ────────────────────────────────────
let _audioCtx = null;
function playClickSound() {
  try {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (_audioCtx.state === 'suspended') _audioCtx.resume();
    const ctx = _audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {}
}

// ─── Pixel coin / star spawn on click ─────────────────────────────────────
document.addEventListener('click', e => {
  playClickSound();

  // Delay internal-link navigation so the sound has time to play
  const link = e.target.closest('a[href]');
  if (link && link.target !== '_blank' && !e.ctrlKey && !e.metaKey) {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('javascript')) {
      e.preventDefault();
      setTimeout(() => { window.location.href = href; }, 85);
    }
  }

  const chars = ['★', '●', '♦', '+', '✦'];
  const colors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)'];
  const span = document.createElement('span');
  span.textContent = chars[Math.floor(Math.random() * chars.length)];
  span.style.cssText = `
    position:fixed;left:${e.clientX}px;top:${e.clientY}px;
    color:${colors[Math.floor(Math.random() * colors.length)]};
    font-family:var(--font-primary);font-size:12px;
    pointer-events:none;z-index:9998;
    animation:floatUp 0.8s ease-out forwards;
  `;
  document.body.appendChild(span);
  setTimeout(() => span.remove(), 900);
});

// ─── Game embed toggle ─────────────────────────────────────────────────────
function toggleGameEmbed(btn) {
  const gameId = btn.dataset.gameId;
  const container = document.getElementById("embed-" + gameId);
  if (!container) return;

  const isVisible = container.style.display !== "none";

  // Close all other open embeds first
  document.querySelectorAll(".game-embed-container").forEach((c) => {
    c.style.display = "none";
  });
  document.querySelectorAll(".play-embed-btn").forEach((b) => {
    b.textContent = b.classList.contains("btn-small")
      ? "▶ JUGAR"
      : "▶ JUGAR EN EXPLORADOR";
  });

  if (!isVisible) {
    container.style.display = "block";
    btn.textContent = "■ CERRAR JUEGO";
    container.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ─── Article image zoom wrapper ───────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('main article')) return;
  document.querySelectorAll('main article > img').forEach(function (img) {
    var accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--article-accent') || '';
    var wrap = document.createElement('div');
    wrap.className = 'article-img-zoom';
    if (accent) wrap.style.borderColor = accent.trim();
    img.style.removeProperty('margin-bottom');
    img.style.removeProperty('border');
    img.style.removeProperty('width');
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
  });

});

// ─── Typewriter on section titles when they enter viewport ──────────────────
(function sectionTitleTypewriter() {
  var titleEls = document.querySelectorAll('.section-title');
  if (!titleEls.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (el._twDone) return;
      el._twDone = true;

      var original = el._twOriginal;
      el.textContent = '';
      el.style.visibility = 'visible';

      var i = 0;
      function tick() {
        if (i <= original.length) {
          el.textContent = original.slice(0, i);
          i++;
          setTimeout(tick, 55);
        }
      }
      tick();
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  titleEls.forEach(function (el) {
    el._twOriginal = el.textContent.trim();
    el.style.visibility = 'hidden';
    observer.observe(el);
  });
})();

// ─── Scroll to top button ──────────────────────────────────────────────────
(function scrollToTop() {
  const btn = document.getElementById('scroll-to-top');
  if (!btn) return;

  function toggleButton() {
    if (window.scrollY > 200) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  function scrollToTopSmooth() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', toggleButton, { passive: true });
  btn.addEventListener('click', scrollToTopSmooth);

  // ESC key to scroll to top
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.classList.contains('show')) {
      scrollToTopSmooth();
    }
  });
})();
