// main.js — Global JS: nav, utils, pixel effects

// ─── Navigation active state ───────────────────────────────────────────────
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
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

// ─── Pixel coin / star spawn on click ─────────────────────────────────────
document.addEventListener('click', e => {
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
