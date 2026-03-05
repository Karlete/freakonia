# Freakonia — Session Log

---

## Sesión 31 — 2026-03-05

### feat(seo): full technical SEO audit + favicons + manifest + sitemap

- **favicon.ico** + **assets/icons/**: pixel-art "F" favicon in 5 sizes (16, 32, 180, 192, 512px) generated via Node.js raw PNG binary (_gen_favicons.js)
- **site.webmanifest**: PWA manifest with name/short_name/theme_color/background_color/icons
- **robots.txt**: allow all + sitemap reference
- **sitemap.xml**: all 12 pages, lastmod 2026-03-05, priority 1.0/0.8
- **All 12 HTML pages** (index/gamedev/gaming/esports/got/warhammer/magic/rol/nba/social/java/news):
  - Unique `<title>` tags expanded to 50-60 chars
  - Unique `<meta name="description">` improved to 110-160 chars
  - Favicon link block added (ico + png 32 + png 16 + apple-touch-icon)
  - `<link rel="manifest" href="/site.webmanifest">` added
  - `<link rel="canonical">` added per page
  - `loading="lazy"` added to all below-fold `<img>` tags
  - `fetchpriority="high"` added to hero image on gamedev.html
  - `rel="noopener noreferrer"` ensured on all external links
- **estado.md**: updated sesión 31
- **commit.md**: session log added

---

## Sesión 30 — 2026-03-05

### feat(gaming): add @SANPRIETO YouTube channel section to gaming.html

- **gaming.html:** Added inline `<style>` block with `#canal`-scoped CSS for channel-card components (reusing nba.html pattern: `.channel-card`, `.taberna-img-link/wrap/img/overlay`, `.taberna-play-btn`, `.status-soon`, `.canal-tags`)
- **gaming.html:** Added `#canal` as first quick-nav anchor in `.platform-quicknav` (class `yt`, pink/magenta color)
- **gaming.html:** Added `<section id="canal">` before `#master-system`, with: section-label pink "MI CANAL DE GAMING", title @SANPRIETO, status badge "⏳ REBRANDING EN CURSO" (gold), placeholder image `la_taberna_del_boxscore.jpg` (TODO comment for banner), description VT323, tags row, pink CTA button
- **estado.md:** Last updated sesión 30
- **commit.md:** Session log added

---

## Sesión 29 — 2026-03-04

### feat(news): 3 new articles — gaming/warhammer/esports + tracker updated

- **js/news-data.js:** Inserted 3 new articles at TOP of NEWS_DATA (articles 19–21):
  - Art. 21 `noticia-fatal-frame-2-remake-2026` — Gaming: Fatal Frame II Crimson Butterfly Remake, 12/03 en PS5/XSX/Switch2/PC. Camera Obscura renovada. accent #00bfff. Source: infobae.com.
  - Art. 20 `noticia-tow-gran-cathay-defenders-2026` — Warhammer: Defenders of the Great Bastion (53 minis Gran Cathay · The Old World), lanzamiento 14/03. accent #ffcc00. Source: spikeybits.com.
  - Art. 19 `noticia-lyon-lcs-lockin-2026` — Esports: LYON campeones LCS Lock-In 2026, 3-1 vs Cloud9, Inspired MVP, First Stand São Paulo. accent #C89B3C. Source: esportsinsider.com.
- **NEWS_TRACKER** actualizado: last_update 2026-03-04, next_available got/nba/magic/rol.
- **estado.md:** Last updated sesión 29, NEWS_TRACKER fecha, session log añadido.
- **MEMORY.md:** Current news state actualizado (18 artículos, art. 21, next_available).

---

## Sesión 28 — 2026-03-02

### feat(news): 3 new articles — esports/got/nba + tracker updated

- **js/news-data.js:** Inserted 3 new articles at TOP of NEWS_DATA (articles 16–18):
  - Art. 18 `noticia-g2-lec-versus-2026` — Esports: G2 campeones LEC Versus 2026, 3-2 vs KC, Caps MVP (16 títulos), First Stand 2026 São Paulo. accent #C89B3C. Source: esports.gg.
  - Art. 17 `noticia-hotd-t3-trailer-2026` — GOT: HotD T3 tráiler oficial CNN Español, Batalla del Gaznate, Aemond en trono, Alicent traición, estreno junio 2026 HBO Max. accent #cc2200. Source: cnnespanol.cnn.com.
  - Art. 16 `noticia-spurs-racha-2026` — NBA: Spurs 11 victorias seguidas, caen vs Knicks con Mikal Bridges 25pts+5rob. Contexto playoffs: Detroit lidera Este, OKC/Boston candidatos. accent #ffcc00. Source: nbamaniacs.com.
- **js/news-data.js:** NEWS_TRACKER updated — last_update: 2026-03-02, next_available: got/gaming/esports.

---

## Sesión 27 — 2026-03-01

### fix(index): extend patron rain canvas to cover hero + pixel-patron sections

- **index.html:** Wrapped `<section class="hero">` and `<section id="pixel-patron">` inside `<div class="patron-rain-wrap">`. Canvas moved out of `.hero` to be first child of `.patron-rain-wrap`. Closing `</div><!-- end .patron-rain-wrap -->` placed after pixel-patron `</section>` and before `<main>`.
- **css/pixels.css:** Added `.patron-rain-wrap { position: relative; overflow: hidden; }` rule before the canvas rule. Canvas remains `position: absolute; inset: 0`.
- **js/pixels-rain.js:** No change needed — `resize()` already reads `canvas.parentElement` dimensions, which now correctly refers to `.patron-rain-wrap`.

---

## Sesión 26 — 2026-03-01

### fix(index): confine patron rain canvas to hero section only

- **index.html:** Removed `<canvas>` from after `.crt-overlay` (was body-level). Moved it as first child inside `<section class="hero">`.
- **css/pixels.css:** Changed `#patron-rain-canvas` from `position: fixed` to `position: absolute` (hero already has `position: relative` in main.css).
- **js/pixels-rain.js:** `resize()` now uses `canvas.parentElement.offsetWidth/offsetHeight` instead of `window.innerWidth/innerHeight` so the canvas fills the hero exactly.

---

## Sesión 25 — 2026-03-01

### fix+feat(index): PayPal URL fix + hero patron button

- **index.html:** Fixed PayPal URL placeholder → `https://www.paypal.me/sanprietogamer/5`
- **index.html:** Added `🏅 PIXEL PATRON` anchor button (`.btn.btn-gold.btn-small`) inside `hero-sprite-wrap`, after XP bar closing `</div>`, linking to `#pixel-patron`.
- **index.html:** Added `<style>` block with `@keyframes patron-btn-pulse` (gold glow pulse) before `</body>`.

---

## Sesión 24 — 2026-03-01

### feat(index): Pixel Patron Rain system

- **New file:** `js/pixels-data.js` — PIXEL_DONORS array with 4 initial patrons (RIKI, MERCHAND, KAWAI_BI, KARLETE). Inline docs for intensity levels and color rotation.
- **New file:** `css/pixels.css` — All styles for patron rain system: canvas, hero-shield, achievement card, counter, intensity bar, donor list, how-it-works grid. No border-radius, all design system variables.
- **New file:** `js/pixels-rain.js` — Canvas animation loop: donor names fall from top with neon glow in their assigned colors. Builds drop pool proportionally. Updates UI (counter, intensity bar, donor list) via `updatePatronUI()` on DOMContentLoaded.
- **index.html (head):** Added `<link css/pixels.css>` after news.css. Added `<script js/pixels-data.js>` after news-data.js.
- **index.html (body):** Added `<canvas id="patron-rain-canvas">` after `.crt-overlay`. Added `.hero-shield` as first child of `.hero-content`.
- **index.html:** New `<section id="pixel-patron">` inserted between hero `</section>` and `<main>` — achievement card, donor list, how-it-works grid.
- **index.html (body end):** Added `<script js/pixels-rain.js>` before `</body>`.

---

## Sesión 23 — 2026-02-28

### css/news.css — Bug fix: Leer más expandía todas las cards de la fila
- **Problema:** Al hacer clic en "LEER MÁS" de una card, todas las cards de la misma fila del grid se expandían visualmente en altura.
- **Causa:** `align-items: stretch` (comportamiento por defecto de CSS grid) iguala la altura de todos los items de cada fila al más alto.
- **Fix:** Añadido `align-items: start` a `.news-grid` en `css/news.css` (línea 104). Cada card ahora solo ocupa su propia altura.
- Commit: `fix(news): add align-items:start to .news-grid to fix Leer más bug`
- Push a `origin/main` ✅

---

## Sesión 22 — 2026-02-28

### js/news-data.js — Limpieza artículos LEC duplicados
- Eliminados 3 artículos de esports/LEC Versus 2026 redundantes o desactualizados:
  - `noticia-lec-versus-2026-final-barcelona` (sesión 21 — enfoque erróneo)
  - `noticia-lec-versus-finals-barcelona-2026` (sesión 20 — desactualizado)
  - `id: 1` (sesión 13 — previa a playoffs, ya caducado)
- Insertado 1 artículo definitivo al top del array:
  - `noticia-lec-versus-final-badalona-2026` — estado actual del sábado 28: G2 en final del domingo, KOI vs KC semifinal lower 17:00. Fuente: lolesports.com
- NEWS_TRACKER actualizado.
- Commit: `fix(news): replace duplicate LEC articles with single updated article`

---

## Sesión 21 — 2026-02-28

### js/news-data.js — 3 artículos pre-escritos (NBA · Esports · Gaming)
- Insertados al top del array (artículos 12, 13, 14):
  - **NBA** `noticia-nba-allstar-2026` — All-Star 2026 en el Intuit Dome de LA. Nuevo formato 3 equipos, Lillard 3er concurso de triples, Edwards MVP. Fuente: nba.com
  - **ESPORTS** `noticia-lec-versus-2026-final-barcelona` — LEC Versus 2026 playoffs, G2 y Fnatic séptimos y octavos, final en Barcelona. Fuente: lolesports.com
  - **GAMING** `noticia-god-of-war-trilogy-remake-2026` — State of Play 12/02: GoW Trilogy Remake anunciado + shadowdrop Sons of Sparta (Mega Cat Studios). Fuente: eurogamer.es
- NEWS_TRACKER actualizado: `nba`, `esports`, `gaming` añadidos a used_topics.
- Commit: `feat: 3 new articles (nba/esports/gaming) + tracker updated`

---

## Sesión 20 — 2026-02-28

### js/news-data.js — 3 artículos nuevos buscados desde fuentes
- Búsqueda real con web_search + web_fetch en fuentes de `news_source.md`.
- Insertados al top del array (artículos 9, 10, 11):
  - **GOT** `noticia-hotd-s3-trailer-2026` — Tráiler HotD T3: Batalla del Gullet, junio 2026. George R.R. Martin: "ya no es mi historia". Fuente: 3djuegos.com
  - **GAMING** `noticia-re9-requiem-2026` — RE9 Requiem lanzado 27/02 en PS5/Xbox/PC/Switch2. Grace Ashcroft + Leon, Raccoon City post-nuclear. Spoilers filtrando. Fuente: 3djuegos.com
  - **ESPORTS** `noticia-lec-versus-finals-barcelona-2026` — LEC Versus Finals en Badalona: G2 3-0 KOI en upper, KC vs GIANTX 3-0, hoy KOI vs KC. Fuente: lolesports.com
- NEWS_TRACKER actualizado: `got`, `gaming`, `esports` añadidos.

---

## Sesión 12 — 2026-02-22

### rol.html — Imágenes de portadas de libros RPG
- Añadidas 3 rejillas de portadas en la sección "Los Sistemas":
  - **Stormbringer**: grid 3 columnas con 6 imágenes (STORMBRINGER, OCTOGONO, HECHICEROS, EL_LOBO_BLANCO, EL_CANTO_INFERNAL, DEMONIOS_Y_MAGIA)
  - **La Llamada de Cthulhu**: grid 2 columnas con CTHULHU_1 y CTHULHU_2
  - **El Señor de los Anillos**: grid 2 columnas con LOTR_1 y LOTR_2
- CSS añadido en `css/rol.css`: `.rol-books-grid`, `.rol-book-wrap`, `.rol-book-img`, `.rol-book-caption`
- Link a `css/rol.css` añadido en `<head>` de rol.html

### rol.html — Colores por sección en portadas
- Atributo `data-rpg` añadido a cada grid (stormbringer / cthulhu / lotr)
- CSS actualizado con selectores por sección:
  - Stormbringer → borde y glow rojo `#cc0000`, hover `#ff3333`
  - Cthulhu → borde y glow magenta `var(--accent-secondary)`, hover `#ff66ff`
  - LOTR → borde y glow verde `var(--accent-primary)`, hover `#44ff6e`
- Color del caption sincronizado con el color del título de cada sección

### rol.html — Imagen hero de cabecera
- Añadida imagen `mesa_rol.jpg` como hero de página completa tras el page header
- CSS en `css/rol.css`: `.rol-hero-img-wrap` con borde/glow dorado `var(--accent-warn)`
- Altura 480px escritorio, 260px móvil; scale(1.02) en hover

### news.html — Nueva página de noticias
- Creada página completa con filtrado por categoría y búsqueda por título/texto
- Primer artículo: House of the Dragon T3 (junio 2026, Batalla del Gullet, tráiler confirmado)
- Creado `css/news.css`: estilos de search bar, filtros, grid, cards y read-more
- Creado `js/news.js`: lógica de búsqueda, filtrado y toggle "Leer más / Leer menos"
- Link `📰 News` añadido al navbar de las 12 páginas existentes
- Card de News añadida al hub "ELIGE TU DESTINO" en index.html

### Git — Repositorio inicializado y publicado
- `git init` + remote añadido a `https://github.com/Karlete/freakonia.git`
- Creado `.gitignore` (excluye `.claude/`, `task.md`, OS files, node_modules)
- Creado `README.md` con badges, tabla de secciones, stack técnico y links
- Initial commit: 106 archivos (HTML, CSS, JS, assets)
- Push a GitHub Pages — web live en `https://karlete.github.io/freakonia`

### SEO — Open Graph y Twitter Card meta tags
- Añadidos 14 meta tags OG + Twitter Card a las 12 páginas HTML
- Título, descripción y URL únicos por página; imagen compartida `og_image.jpg`
- `og:image:width` 1200, `og:image:height` 630
- index.html: título optimizado a 50-60 chars, descripción a 110-160 chars
- Imagen actualizada de `freakonia_background.png` a `og_image.jpg`
