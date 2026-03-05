// Freakonia SEO patcher — Node.js, no external deps
'use strict';
const fs = require('fs');

// ── Page config ──────────────────────────────────────────────────────────
const pages = [
  {
    file: 'index.html',
    canonical: 'https://freakonia.com/index.html',
    title: 'Freakonia — Pixel Art, Gaming &amp; Fandom · Web de Karlete',
    desc: 'Web personal friki con estética pixel art. GameDev, Gaming, Game of Thrones, Warhammer, Magic, Rol, NBA, Java y noticias. Sin filtros.',
    heroImg: null, // hero handled by CSS/canvas, no <img> hero
  },
  {
    file: 'gamedev.html',
    canonical: 'https://freakonia.com/gamedev.html',
    title: 'Game Dev — Freakonia | Proyectos Unity e Indie de Karlete',
    desc: 'Juegos indie publicados en itch.io y proyectos en desarrollo. Fallen Valkyrie: Metroidvania 2D pixel art hecho en Unity por Karlete.',
    heroImg: 'assets/img/unity.jpg',
  },
  {
    file: 'gaming.html',
    canonical: 'https://freakonia.com/gaming.html',
    title: 'Gaming — Freakonia | Historial Retro de Karlete desde 1993',
    desc: 'Historia gaming de Karlete desde 1993. Master System II, Game Boy, Super Nintendo, PlayStation 1 y PC — toda una vida de píxeles y vidas perdidas.',
    heroImg: null,
  },
  {
    file: 'esports.html',
    canonical: 'https://freakonia.com/esports.html',
    title: 'Esports — Freakonia | League of Legends y Competitivo Gamer',
    desc: '14 temporadas de League of Legends comentadas, el rango Bromuro de Sodio III y cobertura del LEC, Worlds y la escena competitiva de LoL.',
    heroImg: null,
  },
  {
    file: 'got.html',
    canonical: 'https://freakonia.com/got.html',
    title: 'Game of Thrones — Freakonia | ASOIAF, Westeros y Lore',
    desc: 'Pasión por A Song of Ice and Fire y Game of Thrones. Casas, teorías, la espera de The Winds of Winter y todo el lore de Westeros analizado.',
    heroImg: null,
  },
  {
    file: 'warhammer.html',
    canonical: 'https://freakonia.com/warhammer.html',
    title: 'Warhammer — Freakonia | 40K, Age of Sigmar y Pintura',
    desc: 'Sección dedicada a Warhammer 40.000 y Age of Sigmar. Miniaturas, lore grimdark y galería de pintura de Karlete.',
    heroImg: null,
  },
  {
    file: 'magic.html',
    canonical: 'https://freakonia.com/magic.html',
    title: 'Magic: The Gathering — Freakonia | Barajas y Colecciones',
    desc: 'Rincón de Magic: The Gathering. Barajas favoritas, cartas icónicas, sets y la pasión de Karlete por el juego de cartas coleccionables más icónico.',
    heroImg: null,
  },
  {
    file: 'rol.html',
    canonical: 'https://freakonia.com/rol.html',
    title: 'Rol — Freakonia | Juegos de Rol y Aventuras de Mesa',
    desc: 'Sección de juegos de rol de Freakonia. D&D, sistemas de rol, campañas y todo lo relacionado con las aventuras de mesa y narrativa colaborativa.',
    heroImg: null,
  },
  {
    file: 'nba.html',
    canonical: 'https://freakonia.com/nba.html',
    title: 'NBA — Freakonia | Baloncesto y La Taberna del Boxscore',
    desc: '25 años siguiendo la NBA de cerca. Lakers, análisis sin pretensiones, La Taberna del Boxscore y la pasión real de Karlete por el baloncesto.',
    heroImg: null,
  },
  {
    file: 'social.html',
    canonical: 'https://freakonia.com/social.html',
    title: 'Social — Freakonia | YouTube, Twitter y Redes de Karlete',
    desc: 'Canal de YouTube, Twitter/X y todas las redes sociales de Karlete (Freakonia). Vídeos, threads y contenido friki sin filtros.',
    heroImg: null,
  },
  {
    file: 'java.html',
    canonical: 'https://freakonia.com/java.html',
    title: 'Java — Freakonia | Programación Java y Desarrollo Backend',
    desc: 'Notas, recursos y aprendizaje de Java por Karlete. Programación orientada a objetos, proyectos backend y el camino del desarrollador desde cero.',
    heroImg: null,
  },
  {
    file: 'news.html',
    canonical: 'https://freakonia.com/news.html',
    title: 'Noticias — Freakonia | Gaming, Esports, GoT y Más',
    desc: 'Últimas noticias de Freakonia: gaming retro y actual, esports, Game of Thrones, NBA, Warhammer y Magic. Actualizado regularmente por Karlete.',
    heroImg: null,
  },
];

// ── Favicon + manifest block to inject ───────────────────────────────────
const faviconBlock = `  <!-- Favicons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">`;

// ── Helpers ───────────────────────────────────────────────────────────────
function injectAfterViewport(html, block) {
  // Insert after the viewport meta tag line
  return html.replace(
    /(<meta name="viewport"[^>]*\/>)/,
    `$1\n\n${block}`
  );
}

function setCanonical(html, url) {
  // Remove existing canonical if present, then add it
  html = html.replace(/<link rel="canonical"[^>]*>\n?/g, '');
  // Insert before the first <meta property="og: or <!-- Open Graph
  const ogMarker = /(\s*<!-- Open Graph)/;
  if (ogMarker.test(html)) {
    html = html.replace(ogMarker, `\n  <link rel="canonical" href="${url}">\n$1`);
  } else {
    // Fallback: before </head>
    html = html.replace('</head>', `  <link rel="canonical" href="${url}">\n</head>`);
  }
  return html;
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
}

function setMetaDesc(html, desc) {
  return html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${desc}"`
  );
}

function addLazyLoading(html, heroSrc) {
  // Track whether we've seen the first img tag in <main>
  // Strategy: add loading="lazy" to all <img> that don't already have it,
  // except the one matching heroSrc gets fetchpriority="high" instead.
  // If heroSrc is null, first img in main gets fetchpriority="high", rest get lazy.

  let inMain = false;
  let heroFound = false;
  const lines = html.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (/<main[\s>]/.test(line)) inMain = true;
    if (/<\/main>/.test(line)) inMain = false;

    if (inMain && /<img\b/.test(line)) {
      const isHero = heroSrc && line.includes(heroSrc);
      const alreadyHasLoading = /loading=/.test(line);
      const alreadyHasFetch = /fetchpriority=/.test(line);

      if (isHero || (!heroFound && !heroSrc)) {
        // Hero image — fetchpriority=high, no lazy
        heroFound = true;
        if (!alreadyHasFetch) {
          line = line.replace(/<img\b/, '<img fetchpriority="high"');
        }
      } else {
        // Non-hero — lazy load
        if (!alreadyHasLoading) {
          line = line.replace(/<img\b/, '<img loading="lazy"');
        }
      }
    }

    result.push(line);
  }

  return result.join('\n');
}

function fixExternalLinks(html) {
  // Ensure all href starting with http have rel="noopener noreferrer"
  // Match <a href="http..." without rel or with incomplete rel
  return html.replace(
    /<a\s([^>]*href="https?:\/\/[^"]*"[^>]*)>/g,
    (match, attrs) => {
      if (/rel=/.test(attrs)) {
        // Has rel — ensure it contains noopener and noreferrer
        attrs = attrs.replace(/rel="([^"]*)"/, (rm, rv) => {
          let parts = rv.split(/\s+/).filter(Boolean);
          if (!parts.includes('noopener')) parts.push('noopener');
          if (!parts.includes('noreferrer')) parts.push('noreferrer');
          return `rel="${parts.join(' ')}"`;
        });
      } else {
        // No rel — add it before the closing >
        attrs = attrs + ' rel="noopener noreferrer"';
      }
      return `<a ${attrs}>`;
    }
  );
}

// ── Process each page ─────────────────────────────────────────────────────
let changed = 0;
for (const page of pages) {
  if (!fs.existsSync(page.file)) {
    console.warn(`⚠ Not found: ${page.file}`);
    continue;
  }

  let html = fs.readFileSync(page.file, 'utf8');

  // 1. Favicons + manifest (only if not already present)
  if (!html.includes('favicon.ico')) {
    html = injectAfterViewport(html, faviconBlock);
  }

  // 2. Canonical
  html = setCanonical(html, page.canonical);

  // 3. Title
  html = setTitle(html, page.title);

  // 4. Meta description
  html = setMetaDesc(html, page.desc);

  // 5. Lazy loading + fetchpriority
  html = addLazyLoading(html, page.heroImg);

  // 6. External link rel fix
  html = fixExternalLinks(html);

  fs.writeFileSync(page.file, html, 'utf8');
  console.log(`✔ ${page.file}`);
  changed++;
}

console.log(`\nDone — ${changed} files patched.`);
