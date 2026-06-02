# Freakonia — Session Log

---

## Sesión 74 — 2026-06-02

### feat(news): batch 119–123 + freakochapa fixes + PS1 callout in gaming

**New files:**
- `articles/noticia-lec-spring-giantx-elimina-vitality-kc-barre-2026.html` — Esports (119): GIANTX tumba a Vitality 3-0, KC barre a GIANTX, Gran Final G2 vs KC/MKOI el 7/06. Source: insider-gaming.com.
- `articles/noticia-nba-finales-2026-spurs-knicks-1999-reencuentro.html` — NBA (120): Finales NBA 2026 Spurs vs Knicks, reencuentro 27 años después, Wembanyama lideró la remontada en 7 partidos. Source: yahoo.com.
- `articles/noticia-gamedev-summer-game-fest-week-2026-playstation-xbox.html` — GameDev (121): Semana del SGF — PlayStation State of Play hoy, SGF Live el 5/06, Xbox Showcase el 7/06. Source: gamesradar.com.
- `articles/noticia-mtg-final-fantasy-prerelease-junio-2026.html` — Magic (122): MTG x Final Fantasy prerrelease 6-8/06, lanzamiento 13/06. Jenova, Knights of the Round, Triple Triad, bonus sheet. Source: mtggoldfish.com.
- `articles/noticia-tow-summer-roadmap-whfrp5e-rumores-2026.html` — Warhammer (123): The Old World verano 2026, Dogs of War como rumor más sólido, WHFRP 5E en listas de más esperados. Source: belloflostsouls.net.

**Modified files:**
- `js/articles-index.js`: 5 líneas nuevas al TOP (warhammer → magic → gamedev → nba → esports).
- `gaming.html`: enlace freakochapa Master System II corregido (`article.html?id=...` → `articles/freakochapa-master-system-ii-10-juegarrales.html`). Callout freakochapa PS1 añadido en sección PlayStation 1 (reemplaza placeholder "MÁS JUEGOS POR AÑADIR"), con imágenes `metalgear.jpg` + `tekken3.jpg`, border `var(--accent-warn)`.
- `articles/freakochapa-master-system-ii-10-juegarrales.html`: 10 rutas de imágenes corregidas (`assets/img/mastersystem2/` → `../assets/img/mastersystem2/`).
- `articles/freakochapa-ps1-biblioteca-historia-2026.html`: 14 rutas de imágenes inline corregidas (`assets/img/PS1/` → `../assets/img/PS1/`).
- `estado.md`: last_update → 2026-06-02, artículos 125 → 135, NEWS_TRACKER actualizado, IDs recientes actualizados.
- `commit.md`: esta entrada.

**NEWS_TRACKER:** last_update → 2026-06-02 · next_available → got · gaming · rol

---

## Sesión 73 — 2026-05-26

### feat(news): batch 109–113 + NBA replace + OG banner URL update

**New files:**
- `articles/noticia-tow-dark-elves-silencio-gw-2026.html` — Warhammer (109): The Old World silencio GW, debate Dark Elves segundo semestre 2026. Source: belloflostsouls.net.
- `articles/noticia-mtg-marvel-reality-fracture-junio-2026.html` — MTG (110): Marvel Super Heroes 26/06, Reality Fracture set What If? universos alternativos. Source: wargamer.com.
- `articles/noticia-gamedev-six-one-showcase-sgf-2026.html` — GameDev (111): Six One Indie Showcase 2026, Summer Game Fest Dolby Theatre 5-8/06. Source: gameinformer.com.
- `articles/noticia-nba-finales-2026-knicks-finals-thunder-spurs.html` — NBA (112 reemplazada): Knicks a Finales por primera vez desde 1999 (barren Cavs 4-0), Thunder vs Spurs 2-2 Game 5 esta noche. Source: espn.com.
- `articles/noticia-lec-g2-reverse-sweep-koi-msi-2026.html` — Esports (113): G2 remonta 0-2 ante Movistar KOI, Caps decimosexto torneo internacional, G2 a la final y al MSI. Source: insider-gaming.com.

**Deleted files:**
- `articles/noticia-nba-finales-conferencia-2026.html` — reemplazado por artículo actualizado (Knicks ya en Finales, Thunder vs Spurs).

**Modified files:**
- `js/articles-index.js`: 5 líneas nuevas al TOP (esports → nba → gamedev → magic → warhammer). Línea `noticia-nba-finales-conferencia-2026` eliminada y sustituida por `noticia-nba-finales-2026-knicks-finals-thunder-spurs` también al TOP.
- Todos los `.html` raíz + `article.html` (inline JS): `og_image.jpg` → `freakonia_banner.jpg` en todas las referencias a `https://freakonia.com/assets/img/og_image.jpg`. `article.html:530` — fallback JS `assets/img/og_image.jpg` → `assets/img/freakonia_banner.jpg`.
- `estado.md`: last_update → 2026-05-26, artículos 120 → 125, NEWS_TRACKER actualizado, IDs recientes actualizados.
- `commit.md`: esta entrada.

**NEWS_TRACKER:** last_update → 2026-05-26 · next_available → got · gaming · rol

---

## Sesión 72 — 2026-05-25

### feat(ux): 8-bit click sound + hub stagger + reveal polish

**Modified files:**
- `js/main.js`: `playClickSound()` añadida — `AudioContext` lazy + persistente, `resume()` si suspended. Clicks en enlaces internos: `preventDefault` + navegación a 85ms para completar el sonido antes del unload.
- `css/animations.css`: stagger hub cards — 12 entradas (era 8), paso 0.08s (era 0.05s), delays 0.00s–0.88s.
- `css/main.css`: `.reveal` — `translateY(24px)` (era 16px), `transition 0.5s` (era 0.4s). Eliminados `.destino-banner-wrap` / `.destino-banner-img`.
- `index.html`: banner `freakonia_background.png` eliminado de sección `#hub`. Script tag `konami.js` eliminado.
- `js/konami.js`: fichero eliminado.

---

## Sesión 71 — 2026-05-24

### feat(ui): UI polish — glitch hero + hub hover + typewriter + quiz CTA + news cards

**Modified files:**
- `index.html`: Hero h1 — `glitch` class + `data-text="FREAKONIA"` añadidos. Sección `#quiz-cta` insertada antes de Social Quick Links — 5 arquetipos (arcade purist/coleccionista/TÚ/rpg addict/speedrunner), pills info, botón CTA pulsante, `.quiz-coin` animada (octagono `clip-path`). Rutas de imágenes actualizadas a `assets/img/quiz/`. CSS `.quiz-*` (14 reglas) + `@keyframes coinFlip` añadidos al `<style>` inline.
- `css/animations.css`: `.glitch::before/.after` reescritos — `font-family`, `font-size: inherit`, `pointer-events: none`, `clip-path: inset(0 0 100% 0)`, animación `glitchSlice 5s` (glitch en 90–100% del ciclo). `@keyframes glitchSlice` añadido. `@keyframes hubScanSweep` y `@keyframes hubIconBounce` añadidos al final.
- `css/components.css`: `.nav-hub-item` hover brutal reescrito — pixel-stepped transitions (`steps(1)/(2)`), `::before` top bar `transform-origin: left steps(4)`, `::after` scan sweep, hover verde `translate(-4px,-4px)` + shadow offset 4px + glow + inset. `.nav-hub-item:hover .nav-hub-label` glow verde. `.nav-hub-icon` hover bounce + drop-shadow.
- `css/news.css`: `.news-preview-card` hover brutal — `position: relative; overflow: hidden`, pixel transitions, `::before` top bar `steps(5)`, hover `translate(-4px,-4px)` + shadow offset + inset dark, title color change. `.news-preview-section::after` scan beam `sectionScanBeam 6s` + `z-index` stacking. `@keyframes sectionScanBeam` añadido.
- `js/main.js`: Typewriter IIFE extraído del DOMContentLoaded (bloqueado por early return de article detection) a función standalone `sectionTitleTypewriter()` al final del fichero — se ejecuta en todas las páginas.

**Verificaciones:**
- `grep -n "quiz-cta\|quiz/boy\|quiz/girl" index.html` → section + 4 img paths
- `grep -n "sectionScanBeam\|coinFlip\|news-preview-card:hover" css/news.css index.html` → 7 matches
- `tail -20 js/main.js` → `sectionTitleTypewriter` IIFE al final

---

## Sesión 70 — 2026-05-21

### feat(news+arch): batch 104–108 + migración completa a artículos estáticos

**Cambios funcionales:**
- 5 noticias nuevas (104–108): GoT (HotD T3 teaser), Gaming (GTA VI Trailer 3 earnings call), Rol (Daggerheart/Fallout/Magefall), NBA (playoffs semis), Esports (LEC Spring playoffs).
- Migración de noticias desde un único `js/news-data.js` a ficheros mensuales (`js/news-2026-02.js` … `js/news-2026-05.js`) y luego a un sistema **estático**:
  - `articles/[id].html` — 120 ficheros HTML auto-contenidos generados por un script de un solo uso (`generate-articles.js`, ya borrado tras la generación). Nav y footer pegados verbatim desde `news.html`. CSS/JS con rutas relativas `../`.
  - `js/articles-index.js` — array `ARTICLES_INDEX` con solo metadatos (sin `full`), un objeto por línea, ordenados newest-first.
- Eliminados: `js/news-data.js`, `js/news-2026-02.js`, `js/news-2026-03.js`, `js/news-2026-04.js`, `js/news-2026-05.js`. Los 5 `<script>` tags de `index.html` y `news.html` reemplazados por un único `<script src="js/articles-index.js"></script>`.
- `news.html` — `renderNews()` ahora consume `ARTICLES_INDEX`. `renderCard()` simplificado: las cards muestran solo summary + tags + botones `>> LEER ARTÍCULO` (→ `articles/[id].html`), `>> FUENTE` (si hay), `>> IR A <topic>` (si hay).
- `index.html` — slider "¿Qué se cuece?" consume `ARTICLES_INDEX`; el botón `LEER` enlaza a `articles/[id].html`.
- `article.html` — ya no se enlaza desde ningún sitio (deprecated). El render dinámico que tenía se arregló durante la migración (manejaba `full` como array; ahora también acepta string HTML) por compatibilidad antes de retirarlo del flujo.

**Bug fix de datos:**
- Detectada colisión de IDs: dos noticias de Warhammer Old World/Gran Cathay de marzo compartían el id `noticia-tow-gran-cathay-defenders-2026`. La segunda fue renombrada a `noticia-tow-gran-cathay-defenders-marzo-2026` y su HTML estático copiado con el id correcto. Verificado `ls articles/*.html | wc -l` → 120.

**Docs:**
- `CLAUDE.md` reescrito: la sección "FLUJO DE NOTICIAS" ahora describe el sistema estático (OPERACIÓN 1: crear HTML; OPERACIÓN 2: insertar línea en index). Plantilla HTML de referencia incluida.
- `estado.md` actualizado: nueva descripción del sistema, NEWS_TRACKER → `last_update: 2026-05-21`, tabla de IDs reducida a las 5 más recientes (la fuente de verdad ahora es `js/articles-index.js`).

**Verificaciones:**
- `node -e "eval(require('fs').readFileSync('js/articles-index.js','utf8')); console.log(ARTICLES_INDEX.length);"` → `120`
- `grep -n "NEWS_DATA\|news-data\|news-2026" index.html news.html` → empty
- `ls articles/*.html | wc -l` → `120`

---

## Sesión 69 — 2026-05-11

### feat(news): add 5 news articles (GOT/NBA/GAMING/ROL/ESPORTS batch 94–98) + update tracker

**Modified files:**
- `js/news-data.js`: 5 artículos nuevos insertados al TOP como NOTICIA 94–98:
  - NOTICIA 98: `noticia-lec-roadtrip-madrid-2026-mkoi-top4` (esports) — LEC Roadtrip Madrid 2026: MKOI épico ante G2, top 4 cerrado con dos equipos españoles. Source: movistaresports.com. Image: `lec_calendar_format.webp`.
  - NOTICIA 97: `noticia-rol-dnd-liveservice-elric-rpg-2026` (rol) — D&D anuncia "Drops" y CEO habla de modelo live service · Free League sorprende con RPG de Elric. Source: enworld.org. Image: `rol_generic.jpg`.
  - NOTICIA 96: `noticia-gaming-subnautica2-forza6-mayo-2026` (gaming) — Mayo gaming: Subnautica 2 Game Pass 14, Forza Horizon 6 Japón 19, 007 First Light 27. Source: gamespot.com. Image: `gaming_generic.webp`.
  - NOTICIA 95: `noticia-nba-semis-2026-knicks-barren-thunder-3-0` (nba) — Semis NBA 2026: Knicks barren Sixers, Thunder 3-0 Lakers, Wembanyama expulsado. Source: espn.com. Image: `nba_ball.webp`.
  - NOTICIA 94: `noticia-hotd-t3-cambios-libro-aegon-2026` (got) — HotD T3: seis cambios confirmados respecto al libro, póster "Win or Die" anticipa Aemond vs Daemon. Source: comicbook.com. Image: `house_of_the_dragons.webp`.
  - NEWS_TRACKER: last_update → 2026-05-11, next_available → ["warhammer", "magic", "gamedev"]

- `estado.md`: Last updated → 2026-05-11 (sesión 69), news count → 83 artículos, NEWS_TRACKER updated, IDs table updated (noticias 94–98 añadidas).
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 68 — 2026-05-05

### feat(news+got+gaming): add 4 news articles (esports/warhammer/magic/got análisis) + got analysis section + gaming history fill

**Modified files:**
- `js/news-data.js`: 4 artículos nuevos insertados al TOP como NOTICIA 91–94:
  - NOTICIA 94: `noticia-got-analisis-menique-petyr-baelish` (got/análisis) — Meñique: la traición más grande de Juego de Tronos no fue de él… fue a él. Análisis temporada a temporada del personaje. Source: x.com/SanprietoG. Image: `assets/img/got/Petyr_baelish.webp`. BadgeLabel: ANÁLISIS.
  - NOTICIA 93: `noticia-mtg-magiccon-vegas-2026-hobbit-realityfracture` (magic) — MagicCon Las Vegas: primeras cartas de Final Fantasy, El Hobbit confirmado, Reality Fracture desvela su arco final.
  - NOTICIA 92: `noticia-tow-grand-cathay-preorder-mayo-2026` (warhammer) — The Old World: los Astromantes de Grand Cathay ya en preventa y rumores de Dogs of War para 2026.
  - NOTICIA 91: `noticia-lec-spring-2026-semana6-fnatic-eliminado` (esports) — LEC Spring Semana 6: Vitality arrasa, Fnatic queda eliminado y el top 6 está cerrado.
  - NEWS_TRACKER: last_update → 2026-05-05, next_available → ["gaming", "nba"]

- `got.html`: 2 cambios realizados:
  1. Añadido nav link en `.section-quicknav` (línea ~174): `<a href="#analisis-personajes" class="gold">🎭 Análisis</a>` después de link "Spinoffs"
  2. Insertada nueva sección "ANÁLISIS DE PERSONAJES" antes del cierre (línea ~1123): era-header con h3 "🎭 ANÁLISIS DE PERSONAJES", grid-2 con análisis Petyr Baelish (imagen, descripción, tags, link a X) + tarjeta "MÁS ANÁLISIS PRÓXIMAMENTE"

- `js/gaming-history.js`: 35+ eventos históricos del gaming añadidos para llenar gaps:
  - Enero: +2 eventos (03-01: Splinter Cell, 08-01: Tomb Raider)
  - Febrero: +4 eventos (01-02: Brawl, 11-02: Twilight Princess, 18-02: Deus Ex 2, 28-02: BioShock)
  - Marzo: +4 eventos (01-03: RE4, 08-03: Diablo II, 20-03: Splinter Cell lanza, 29-03: Advance Wars)
  - Abril: +3 eventos (01-04: Portal, 11-04: Shenmue, 29-04: RE4 lanza)
  - Mayo: +6 eventos (01-05 a 06-05: Killzone 2, Street Fighter IV, Game Boy, Pac-Man, League of Legends, Red Dead Redemption anunciado)
  - Junio: +3 eventos (01-06: Advance Wars, 05-06: Diablo II, 30-06: GTA San Andreas)
  - Julio: +2 eventos (02-07: MGS2, 18-07: Pokémon RB)
  - Agosto: +3 eventos (01-08: MGS2 Japón, 20-08: Shadow of the Colossus, 31-08: Perfect Dark)
  - Septiembre: +2 eventos (02-09: WoW lanza, 28-09: BioShock)
  - Octubre: +2 eventos (01-10: MGS2 lanza, 18-10: RE4 Norteamérica)
  - Noviembre: +1 evento (06-11: Diablo II, 25-11: Halo 2)
  - Diciembre: +2 eventos (07-12: Halo 2 anunciado, 17-12: Wii, 28-12: Perfect Dark desarrollo)

- `estado.md`: Last updated → 2026-05-05 (sesión 68), news count → 94 artículos, NEW sections added (GOT análisis, gaming history expanded).

- `commit.md`: esta entrada.

---

## Sesión 67 — 2026-05-02

### feat(news): add 5 news articles (GOT, ESPORTS, NBA, GAMING, ROL) + update NEWS_TRACKER

**Modified files:**
- `js/news-data.js`: 5 artículos nuevos insertados al TOP como NOTICIA 86–90:
  - NOTICIA 90: `noticia-ttrpg-news-mayo-2026` (rol) — D&D Beyond, Justice League RPG, Blade Runner expansions
  - NOTICIA 89: `noticia-gaming-mayo-2026-forza-bond` (gaming) — Forza Horizon 6 (Tokio), 007 First Light
  - NOTICIA 88: `noticia-nba-playoffs-2026-r1-game7s` (nba) — NBA Playoffs East chaos, Game 7s, Knicks leading
  - NOTICIA 87: `noticia-lec-spring-2026-semana6-playoffs` (esports) — LEC Spring Week 6, playoff shape forming
  - NOTICIA 86: `noticia-hotd-t3-aegon-look-2026` (got) — House of the Dragon S3, Aegon II scarred reveal
  - NEWS_TRACKER: last_update → 2026-05-02, next_available → warhammer · magic · gamedev
- `estado.md`: Last updated → 2026-05-02 (sesión 67), news count → 78 artículos, NEWS_TRACKER updated, 5 new articles added to ID table.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 66 — 2026-04-26

### feat(universo): interactive universe map page + nav link on all pages

**New files:**
- `universo.html`: Mapa del Universo Freakonia. Canvas fullscreen (`overflow:hidden`), navbar idéntica al resto del proyecto (incluye el propio link activo), inline `<style>` con panel lateral responsive (desktop: slide desde right; mobile: slide desde bottom), footer copiado de index.html. Carga `js/news-data.js` en `<head>`, `js/main.js` + `js/universo.js` al final del body. Schema JSON-LD WebPage.
- `js/universo.js`: Motor canvas completo en IIFE. 9 nodos (`UNIVERSE_NODES`): GameDev, Gaming, Esports, GoT, Warhammer, Magic, Rol, NBA, Java. 9 líneas de constelación (`CONSTELLATION_LINES`). 220 estrellas con parpadeo. Orbit particles (2 por nodo) + pulse rings. Breathing animation por nodo. `drawNode()`: glow, fill, border, emoji centrado, label truncado a 12 chars. `drawConstellationLines()`: lineDash animado. `showPanel()`: filtra `NEWS_DATA` por `topic`, renderiza 2 artículos recientes, botón "▶ ENTRAR A ...". Eventos: mousemove, click, touchstart/end, Escape, resize.

**Modified files (nav only — 16 pages):**
- `index.html`, `gamedev.html`, `fallen-valkyrie.html`, `gaming.html`, `esports.html`, `got.html`, `warhammer.html`, `magic.html`, `rol.html`, `nba.html`, `social.html`, `java.html`, `news.html`, `article.html`, `quiz.html`:
  - `<li><a href="universo.html" class="nav-link">🗺 Universo</a></li>` insertado inmediatamente antes del `<li>` del lang-toggle button en todos los archivos.
- `estado.md`: Last updated → 2026-04-26 (sesión 66), nav template actualizado, universo.html añadido a tabla de páginas y Phase list, session log entry añadida.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 65 — 2026-04-24

### feat(news+i18n): Freakochapa #3 PS1 + Pixel Patron bilingual

**New files:**
- `assets/img/PS1/`: 12 imágenes de juegos PS1 (FFVII.jpg, abe.jpg, alundra.jpg, castlevania.jpg, grantheftauto.jpg, metalgear.jpg, residentevil.jpg, silenthill.jpg, tekken3.jpg, tenchu.jpg, tombraider.jpg, tony.jpg).

**New files:**
- `assets/img/PS1/granturismo.jpg`, `assets/img/PS1/soulreaver.webp` — imágenes reales añadidas por Karlete tras el commit principal.

**Modified files:**
- `js/news-data.js`: Freakochapa #3 (`freakochapa-ps1-biblioteca-historia-2026`) insertada al TOP como NOTICIA 73. Estructura idéntica a la Freakochapa #2 (MS2): `badgeLabel:'FREAKOCHAPA'`, `source:'freakonia.com'`, `url:'gaming.html'`, puntuaciones Freakcoin como `<span>` inline en cada entrada `full[]`. 14 juegos (Metal Gear Solid 10, FFVII/IX 10, Castlevania SotN 10, Oddworld 7, Alundra 8, GTA 6, Gran Turismo 8, Soul Reaver 7, RE2 9, Silent Hill 8, Tekken 3 10, Tomb Raider 7, Tenchu 10, Tony Hawk 5). Todas las imágenes en `assets/img/PS1/` (Gran Turismo → `granturismo.jpg`, Soul Reaver → `soulreaver.webp`). NEWS_TRACKER last_update → 2026-04-24, next_available → got · esports · nba.
- `article.html`: `.article-body img` — hover: `scale(1.06)` + `brightness(1.14)` + `saturate(1.3)` + neon green glow (`box-shadow`). `height:180px` + `object-fit:cover` + `object-position:center top` para uniformar el tamaño de todas las imágenes de artículo independientemente de su ratio original.
- `index.html`: Pixel Patron section — elementos con `data-i18n` añadidos a `achievementDesc`, `counterLabel`, `intensityTitle`, `donateBtn`, `listHeader`, `how1/2/3Title`, `how1/2/3Desc`. Traducciones ES+EN añadidas al objeto `translations`. `applyLang()` llama a `window.refreshPatronUI(lang)` tras aplicar keys.
- `js/pixels-rain.js`: `INTENSITY_LEVELS` convertido a objeto `{es:[...], en:[...]}`. `UI_STRINGS` añadido con `registered(n)` y `emptyState` por idioma. `updatePatronUI(lang)` recibe lang y usa los strings correctos. `window.refreshPatronUI` expuesto para que `applyLang()` de index.html lo llame al cambiar idioma.
- `CLAUDE.md`: sección "FLUJO DE FREAKOCHAPAS" añadida con tabla de campos obligatorios, checklist de verificación y explicación de por qué importa cada campo.
- `estado.md`: Last updated → 2026-04-24 (sesión 65), news count → 73, NEWS_TRACKER updated, FC3 added to ID table, session log entry added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesiones 59–64 — 2026-04-23

### feat: gaming history widget + quiz redirects + news update + SEO fixes

**New files:**
- `js/gaming-history.js` — `GAMING_HISTORY` object keyed by `DD-MM`, eventos históricos del gaming; ventana de 7 días; renderizado IIFE en index.html y gaming.html.
- `quiz-speedrunner.html`, `quiz-coleccionista.html`, `quiz-rpgaddict.html`, `quiz-arcadepurist.html`, `quiz-trasteador.html` (boy variants)
- `quiz-speedrunner-girl.html`, `quiz-coleccionista-girl.html`, `quiz-rpgaddict-girl.html`, `quiz-arcadepurist-girl.html`, `quiz-trasteadora-girl.html` (girl variants)
- Cada redirect: OG + Twitter/X meta tags específicos por arquetipo + `window.location.replace()` a `quiz.html?resultado=X&gender=Y`

**Modified files:**
- `index.html`: canonical corregido (`/index.html` → `/`); `<script src="js/gaming-history.js">` en `<head>`; CSS `.gaming-history-*` (border azul, hover glow-blue) en `<style>`; sección `#gaming-history-widget` entre `#que-se-cuece` y `#pixel-patron`; IIFE widget antes de `</body>`.
- `gaming.html`: `<script src="js/gaming-history.js">` antes de `</head>`; CSS `.gaming-history-*` añadido al `<style>` existente; sección `#gaming-history-widget` antes de `<hr>#canal`; IIFE widget antes de `</body>`; placeholder MS2 reemplazado por callout Freakochapa con `ghoulsandghosts.webp`; flex row con `ghoulsandghosts.webp` + `asterix.webp`.
- `quiz.html`: `shareOnX()` — `var url = window.location.href` reemplazado por `shareUrls[gender][key]` con URLs absolutas por arquetipo + fallback a `https://freakonia.com/quiz.html`.
- `css/pixels.css`: z-index:2 añadido a `#que-se-cuece` y `#gaming-history-widget` (y subelementos) para quedar sobre el canvas patron rain (z-index:1).
- `js/news-data.js`: 4 artículos nuevos al TOP (noticias 69–72, 23/04/2026): `noticia-lck-2026-apertura-kt-sorpresa` (esports) · `noticia-tow-espana-2026-wtc-wcw` (warhammer) · `noticia-rol-cthulhu-campfire-tales-2026` (rol) · `noticia-magic-protour-strixhaven-las-vegas-2026` (magic). NEWS_TRACKER last_update → 2026-04-23, next_available → gaming · nba · gamedev.
- `CLAUDE.md`: eliminadas líneas 157–fin (bloque de instrucciones de edición que quedó en el cuerpo del fichero); añadida regla de imagen genérica al checklist de noticias.
- `sitemap.xml`: 13 `<lastmod>` actualizados a `2026-04-23`; fallen-valkyrie priority `0.8` → `0.6`.
- `fallen-valkyrie.html`: `<link rel="canonical" href="https://freakonia.com/fallen-valkyrie.html">` añadido antes de `</head>`.
- `task.md`: limpiado.
- `estado.md`: Last updated → 2026-04-23 (sesión 64), session log entries 59–64 añadidos.
- `commit.md`: esta entrada.

---

## Sesión 58 — 2026-04-22

### feat(nav): add Quiz Retro to Gaming dropdown in all 14 HTML pages

**Modified files:**
- `index.html`, `gamedev.html`, `gaming.html`, `esports.html`, `got.html`, `warhammer.html`, `magic.html`, `rol.html`, `nba.html`, `social.html`, `java.html`, `news.html`, `fallen-valkyrie.html`, `quiz.html`:
  - `<li><a href="quiz.html">🎯 Quiz Retro</a></li>` inserted after `<li><a href="esports.html">🏆 Esports</a></li>` inside the Gaming `<ul class="nav-submenu">` in every page.
- `estado.md`: Last updated → 2026-04-22 (sesión 58), quiz.html added to pages table and phase list, nav template updated, session log entries 56–58 added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 57 — 2026-04-22

### feat(quiz): create quiz.html — ¿Qué jugador retro eres?

**New file:**
- `quiz.html` — Standalone quiz page. 5 archetypes (speedrunner, coleccionista, rpg_addict, arcade_purist, trasteador) with boy/girl title variants. 7 questions × 5 options each; scores tallied per option type. Gender selector with onclick (avoids DOMContentLoaded timing). Progress dots bar (active/done states). URL params `?resultado=&gender=` make results deep-linkable and shareable. Twitter/X share button generates pre-filled tweet. Inline `<style>` block (no border-radius, CSS variables only). Navbar + footer copied verbatim from gaming.html. Full static OG + Twitter/X meta tags + canonical with absolute https://freakonia.com/ URLs. `js/main.js` loaded at bottom of body. References `assets/img/quiz/` for archetype images.

**Modified files:**
- `estado.md`: quiz.html added to pages table, phase list updated, session log entry added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 56 — 2026-04-22

### fix(seo): convert article.html OG/Twitter meta tags from empty to static absolute URLs

**Modified files:**
- `article.html`:
  - `og:url` → `https://freakonia.com/article.html` (was empty string)
  - `og:title` → `"Freakonia — Artículos y Freakochapas"` (was empty)
  - `og:description` → full description string (was empty)
  - `og:image` → `https://freakonia.com/assets/img/og_image.jpg` (was empty)
  - Added `og:image:width` content="1200" (was missing)
  - Added `og:image:height` content="630" (was missing)
  - Added `twitter:creator` content="@SanprietoG" (was missing)
  - `twitter:title`, `twitter:description`, `twitter:image` → filled with absolute values (were empty)
  - Removed "set dynamically by JS" comment from OG block
- `estado.md`: session log entry added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 55 — 2026-04-21

### feat(freakcoin+news): freakcoin system + 2 Freakochapas + dynamic SEO in article.html

**Modified files:**
- `article.html`:
  - `updateSEO(article)` IIFE added after `if (!article)` guard: updates `meta[name="description"]`, `link[rel="canonical"]`, all 5 OG tags, and 3 Twitter/X card tags dynamically per article. Falls back to `og_image.jpg` when no `img` field.
  - Freakcoin system wired: `<link rel="stylesheet" href="css/freakcoin.css">` in `<head>`, `<div id="freakcoin-rating">` between article body and source footer, `renderFreakcoin()` call gated on `article.freakcoin`, `<script src="js/freakcoin.js">` before `</body>`.
- `js/news-data.js`:
  - **Freakochapa #1** inserted at TOP: `freakochapa-fallen-valkyrie-devlog-1` · topic gamedev · 7 paragraphs · año-1 Unity journey + Fallen Valkyrie lore/design vision · 21/04/2026 · source freakonia.com.
  - **Freakochapa #2** inserted at TOP (above #1): `freakochapa-master-system-ii-10-juegarrales` · topic gaming · 10 paragraphs · per-game inline images + FREAKCOINS scores · 21/04/2026 · img ghoulsandghosts.webp.
  - NEWS_TRACKER `last_update` → `2026-04-21`.
- **New files added:**
  - `css/freakcoin.css` — Freakochapa rating widget styles.
  - `js/freakcoin.js` — `renderFreakcoin()` function.
  - `assets/img/freakcoin_fondo_negro.png` · `assets/img/freakcoin_transparente.png` — Freakcoin badge assets.
  - `assets/img/mastersystem2/` — 10 game screenshots: alexkidd, asterix, castle_of_ilusion, ghoulsandghosts, princeofpersia, shadowofthebeast, shinobi, sonic, streetofrage, supermonaco (all `.webp`).
- `estado.md`: Last updated → 2026-04-21 (sesión 55), article count 68 → 70, IDs table updated, session log entry added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 54 — 2026-04-21

### feat(seo): JSON-LD schema markup across all pages + dynamic BlogPosting in article.html

**Modified files:**
- `index.html`:
  - Pixel Patron text: "Freakonio/a para siempre" → "Freakoni@ real".
  - JSON-LD `schema.org/Person` block inserted before `</head>` (name: sanprieto, sameAs: YouTube/Twitter/itch.io/GitHub, knowsAbout: 8 topics).
- `gamedev.html`, `gaming.html`, `esports.html`, `got.html`, `warhammer.html`, `magic.html`, `rol.html`, `nba.html`, `social.html`, `java.html`, `news.html`, `fallen-valkyrie.html`:
  - JSON-LD `schema.org/WebPage` (or `Blog` for news.html, dual `WebPage`+`VideoGame` for fallen-valkyrie.html) inserted before `</head>` in each file.
  - Each block includes: `name`, `url`, `description`, `author` (Person/sanprieto), `isPartOf` (WebSite/Freakonia).
- `article.html`:
  - Dynamic `schema.org/BlogPosting` injected at runtime inside the existing IIFE, after the `article` object is confirmed from `NEWS_DATA`.
  - Builds ISO date from `DD/MM/YYYY`, populates headline, description, datePublished, dateModified, author, publisher, url, mainEntityOfPage, isPartOf (Blog), keywords from `article.tags`.
  - Script tag appended to `<head>` via `document.createElement`.
- `estado.md`: Last updated → 2026-04-21 (sesión 54), session log entry added.
- `commit.md`: esta entrada.
- `task.md`: limpiado.

---

## Sesión 53 — 2026-04-20

### feat(news): 4 new articles — MSI 2026 Daejeon, Winds of Winter fake leak, NBA Playoffs R1, GTA VI mapa

**Modified files:**
- `js/news-data.js`:
  - 4 artículos nuevos insertados al TOP del array (noticias 65–68, fecha 20/04/2026):
    - **Noticia 68** — Esports: `noticia-msi-2026-daejeon-clasificacion` · MSI 2026 en Daejeon (28/06–12/07), formato renovado sin fase de grupos, BLG con ventaja de clasificación directa al Bracket Stage por ganar el First Stand 2026. Img: `lpl_2026.webp`. Source: dotesports.com.
    - **Noticia 67** — GoT: `noticia-got-winds-winter-falso-leak-2026` · Bantam Books desmiente en abril el rumor de que The Winds of Winter sale en otoño 2026; Martin tiene ~1.100 páginas escritas según su entrevista de enero. Img: `got_generic.webp`. Source: collider.com.
    - **Noticia 66** — NBA: `noticia-nba-playoffs-r1-juego1-2026` · Playoffs primera ronda Juego 1: Magic tumba a Detroit 112-101 (Banchero 23+9+4), Thunder aplasta a Suns 119-84 (SGA 25 pts), Wembanyama debuta con 35 pts (récord histórico Spurs en postemporada). Img: `nba_ball.webp`. Source: nba.com.
    - **Noticia 65** — Gaming: `noticia-gta-vi-mapa-noviembre-2026` · Mapa actualizado de Leonida filtrado el 14/04 con Vice City, Leonida Keys, Grassrivers y Mount Kalaga; Rockstar entra en año fiscal de Take-Two sin retraso nuevo; marketing de lanzamiento arranca en verano; fecha 19 nov 2026. Img: `gran_theft_auto_6.webp`. Source: gamingbible.com.
  - NEWS_TRACKER: last_update → 2026-04-20, next_available → magic · warhammer · gamedev.
- `estado.md`: Last updated → 2026-04-20 (sesión 53), artículos 61 → 65, ID table actualizada (noticias 58–68 añadidas), NEWS_TRACKER actualizado, entrada sesión 53 añadida al log.
- `commit.md`: esta entrada.

---

## Sesión 52 — 2026-04-14

### feat(news): 4 new articles — LEC semana 3, NBA Play-In, MTG Strixhaven, Warhammer Adepticon

**Modified files:**
- `js/news-data.js`:
  - 4 artículos nuevos insertados al TOP del array (noticias 58–61, fecha 14/04/2026):
    - **Noticia 61** — Esports: `noticia-lec-spring-semana3-2026` · LEC Spring 2026 semana 3 (11-13/04): VIT 5-1 lidera, GIANTX 4-0 invicto, resultados de la semana. Img: `lec_versus_2026.webp`. Source: globalsportsarchive.com.
    - **Noticia 60** — NBA: `noticia-nba-playin-2026` · Play-In Tournament 2026 arranca el 14/04, Heat vs Hornets y Trail Blazers vs Suns, playoffs el 18/04. Img: `nba_ball.webp`. Source: nba.com.
    - **Noticia 59** — Magic: `noticia-magic-secrets-strixhaven-2026` · Secrets of Strixhaven lanza 24/04 en papel, 21/04 en Arena, early access 15/04, prerrelease 17/04, mazos bienvenida renovados. Img: `secrets_of_strixhaven.webp`. Source: magic.wizards.com.
    - **Noticia 58** — Warhammer: `noticia-warhammer-old-world-adepticon-gw-2026` · Adepticon 2026 campeón Andrea Ninni con Jade Fleet (78 jugadores) + análisis 4 cosas que GW necesita cambiar. Img: `the_old_world.jpg`. Source: belloflostsouls.net.
  - *(fix posterior)* noticia 61 reescrita con datos reales del LEC Spring (clasificación incorrecta detectada y corregida — se usaban datos del LEC Versus enero-febrero por error).
  - NEWS_TRACKER: last_update → 2026-04-14, next_available → gamedev · got · gaming.
- `estado.md`: Last updated → 2026-04-14 (sesión 52), artículos 57 → 61, NEWS_TRACKER actualizado.
- `task.md`: limpiado.

### feat(gaming): FFVII special section + new short in youtube.js

**Modified files:**
- `js/youtube.js`:
  - Nuevo short `xst_ontfUyg` añadido al TOP de `SANPRIETO_VIDEOS` — "7 CURIOSIDADES DE FFVII QUE NO TIENES NI PUTA IDEA 😂" (type: 'short').
  - Array ahora tiene 3 entradas: xst_ontfUyg · dOsnhBU5AzA · hZQMq7Zg5dg.
- `gaming.html`:
  - Quicknav: nuevo enlace `⚔ FINAL FANTASY VII` (clase `.ffvii`, color dorado) entre MI CANAL y MASTER SYSTEM II.
  - Nueva sección `#ffvii-especial` insertada entre el primer `<hr>` y la sección `#master-system`:
    - Badge "REPORTAJE ESPECIAL" + título `FINAL FANTASY VII` en dorado con glow.
    - Portada `assets/img/FFVIIPortada.webp` con borde dorado, overflow hidden y zoom hover.
    - Párrafo intro con borde izquierdo dorado (`.ffvii-intro`).
    - Grid 2 columnas (`.ffvii-report-grid`): bloque "Historia real" (Square, Sakaguchi, Kitase, Nomura, Uematsu, PlayStation, ventas 1997) + bloque "La historia" (Cloud, Midgar, Sephiroth, Aerith, Nibelheim).
    - Caja de anuncio (`.ffvii-announce`, borde magenta/glow): título serie completa, descripción (3 vídeos ~9h, mods gráficos, retraducción ES), badges meta, botón suscripción.
  - CSS scoped añadido al bloque `<style>` inline: `.ffvii-portada-wrap`, `.ffvii-portada`, `.ffvii-intro`, `.ffvii-report-grid`, `.ffvii-block`, `.ffvii-block-title`, `.ffvii-announce`, `.ffvii-announce-label`, `.ffvii-announce-title`, `.ffvii-announce-meta`. Responsive mobile (max-width 640px).

---

## Sesión 51 — 2026-04-11

### fix(gaming): autoplay bug in youtube.js + new short + 3 news articles

**Modified files:**
- `js/youtube.js`:
  - `toggleVideoEmbed()` reescrito: al cerrar embeds ahora borra `iframe.src = ''` para detener la reproducción. Al abrir, asigna `iframe.src = iframe.dataset.src` para arrancar el vídeo solo cuando se solicita.
  - `buildVideoCard()`: iframe renderiza con `src=""` + `data-src="<embedUrl>"` para evitar autoplay en carga de página.
  - `SANPRIETO_VIDEOS`: nuevo entry añadido al TOP — `dOsnhBU5AzA` (FINAL FANTASY VII — WTF TRADUCCIÓN, type: 'short').
- `js/news-data.js`:
  - 3 artículos nuevos insertados al TOP del array (noticias 55–57, fecha 11/04/2026):
    - `noticia-oblivion-remastered-gamepass-2026` (gaming) — Oblivion Remastered llega a Game Pass Ultimate y PC Game Pass el 16 de abril. Fuente: news.xbox.com.
    - `noticia-hotd-s3-junio-2026-confirmado` (got) — HotD T3 confirmada junio 2026, 8 episodios, James Norton + Tommy Flanagan se incorporan. T4 en 2028. Fuente: gamesradar.com.
    - `noticia-dnd-villainous-options-playtest-2026` (rol) — D&D Unearthed Arcana Villainous Options: opciones mecánicas oficiales para PJs villanos. Fuente: enworld.org.
  - NEWS_TRACKER actualizado: last_update → 2026-04-11, next_available → esports · nba · magic · warhammer · gamedev.
- `estado.md` — Last updated → sesión 51, NEWS_TRACKER actualizado, tabla de IDs actualizada (noticias 50–57), entrada de sesión 51 añadida al log.
- `commit.md` — esta entrada.
- `task.md` — limpiado.

---

## Sesión 50 — 2026-04-09

### feat(gaming): YouTube video section with inline embed toggle in #canal

**Modified files:**
- `js/youtube.js` — fully rewritten. `SANPRIETO_VIDEOS` array (type: `'short'` | `'video'`). `buildVideoCard()` builds article with thumbnail (maxresdefault → hqdefault fallback), badge SHORT/VÍDEO, buttons "VER EN YOUTUBE" and "REPRODUCIR AQUÍ" (hidden for Shorts). `toggleVideoEmbed()` closes all open embeds before opening the clicked one. `renderVideoCards()` targets `#sanprieto-videos-grid` on DOMContentLoaded. Globals: `window.toggleVideoEmbed`, `window.SANPRIETO_VIDEOS`.
- `css/gaming.css` — appended new block: `.videos-section-header`, `#sanprieto-videos-grid` (auto-fill grid 280px min), `.video-card`, `.video-type-badge` (absolute top-left), `.video-thumb-wrap` (16:9 aspect-ratio), `.video-thumb`, `.video-thumb-overlay`, `.video-info`, `.video-title`, `.video-desc`, `.video-btns`, `.video-embed-container` + `@keyframes embedSlideIn`, `.video-embed-header`, `.video-embed-title`, `.video-embed-close`, `.video-embed-frame-wrap` (16:9 default, `.short-frame` 9:16 max-width 360px), `.video-embed-iframe`. Mobile breakpoint: 1-column grid, short-frame full width.
- `gaming.html` — (1) videos grid injected inside `#canal` after "VER CANAL" button: `.videos-section-header` + `#sanprieto-videos-grid` div. (2) `<script src="js/youtube.js">` added before `</body>`.

---

## Sesión 46 — 2026-04-02

### feat(news): article pages + UI improvements + 3 new articles

**New file:**
- `article.html` — individual article page, renders any NEWS_DATA entry via `?id=` query param. Navbar + footer + inline CSS + Pixel Patron Rain full-page background + Twitter/X share button. Title color randomised from site palette on each load. Pixel-art corner brackets + scanline overlay on image. `// FREAKONIA NEWS` label on content box border.

**Modified files:**
- `news.html` — `renderNews()`: "LEER MÁS" expand/collapse replaced by `<a>` link to `article.html?id=<n.id>`. FUENTE button and sourceHtml removed from cards (both now live in article.html).
- `js/news.js` — removed `.news-read-more` click toggle listener (no longer needed).
- `js/news-data.js`:
  - Fixed `url` for `noticia-marathon-bungie-2026` → correct GameSpot URL.
  - All images in `assets/img/news/` renamed: hyphens removed from filenames (e.g. `el-caballero-siete-reinos.webp` → `elcaballerosietereinos.webp`). All `img:` references in NEWS_DATA updated accordingly.
  - 3 new articles inserted at TOP (noticias 47–49):
    - `noticia-adepticon-tow-gran-cathay-2026` (warhammer, 02/04/2026) — Gran Cathay gana Adepticon 2026 con Jade Fleet, 78 jugadores, 5-0 Andrea Ninni
    - `noticia-secrets-strixhaven-spoilers-2026` (magic, 02/04/2026) — Secrets of Strixhaven spoiler season oficial, Archivo Místico en cada sobre, 5 precons Commander, sale 24/04
    - `noticia-unity-informe-gamedev-2026` (gamedev, 02/04/2026) — Unity Game Dev Report 2026: juegos pequeños, India como mercado objetivo, 82% usa colaboraciones externas
  - NEWS_TRACKER `last_update` → `2026-04-02`

---

## Sesión 47 — 2026-04-01

### refactor(news): fill all img fields and normalize filenames to underscore convention

- **js/news-data.js**: replaced placeholder external URLs (YouTube thumbnails, Steam CDN) and empty `img:` fields with correct local asset paths for all 45 articles in NEWS_DATA
- **assets/img/news/**: renamed 20 hyphenated image files to underscore convention (e.g. `house-of-the-dragons.webp` → `house_of_the_dragons.webp`); 34 images total in directory
- **js/news-data.js**: updated 36 `img:` references to match renamed underscore filenames; fixed previously stripped hyphens (e.g. `elcaballerosietereinos.webp` → `el_caballero_siete_reinos.webp`)
- **js/news-data.js**: updated `lec_versus_2026.jpg` reference → `lec_versus_2026.webp`
- task.md: cleared

---

## Sesión 45 — 2026-03-25

### feat(news): add 3 articles (MHS3 reviews, Subnautica 2/Krafton, Secrets of Strixhaven)

- **js/news-data.js**: inserted 3 new articles at TOP of NEWS_DATA (noticias 44–46):
  - `noticia-mhs3-reviews-metacritic-2026` (gaming, 25/03/2026) — Monster Hunter Stories 3: Twisted Reflection reviews, Metacritic +80, JRPG del Q1 2026
  - `noticia-subnautica2-krafton-demanda-2026` (gamedev, 25/03/2026) — Krafton usa ChatGPT para evitar bonus 250M, juez reintegra CEO de Unknown Worlds
  - `noticia-secrets-strixhaven-preview-2026` (magic, 25/03/2026) — Secrets of Strixhaven preview season, Mystical Archive vuelve, 5 precons Commander
- NEWS_TRACKER `last_update` → `2026-03-25`, `next_available` → `got · esports · nba`
- task.md: cleared

---

## Sesión 44 — 2026-03-23

### refactor(java): move JAVADEVBIBLE section to top of main

- **java.html**: reordered sections inside `<main>`. JAVADEVBIBLE (`.javadevbible-section`) is now first — no preceding `<hr>`. A new `<hr class="pixel-divider" style="margin: 0 var(--sp-5);">` separates it from MI HISTORIA CON JAVA. Remaining order: ORÍGENES → ARGUMENTOS → HISTORIA. No internal HTML content changed.

---

## Sesión 43 — 2026-03-20

### refactor(index): extend patron-rain-wrap to cover #pixel-patron section

- **index.html**: moved `section#pixel-patron` (including its `<!-- ─── Pixel Patron Rain -->` comment) inside `.patron-rain-wrap`, after `section#que-se-cuece` and before `</div><!-- end .patron-rain-wrap -->`. `<main>` now starts directly with `#about`. Canvas rain animation now covers hero + news slider + pixel patron sections.

---

## Sesión 42 — 2026-03-20

### feat(news): add 5 articles (First Stand groups+semis, Crimson Desert reviews, HotD T3 reshoots, Nintendo tariffs)

- **js/news-data.js**: inserted 5 new articles at TOP of NEWS_DATA (noticias 34–38):
  - `noticia-first-stand-2026-grupos` (esports, 20/03/2026) — BLG a playoffs, G2 al límite, Gen.G imparable en Grupo B
  - `noticia-crimson-desert-reviews-bolsa-2026` (gaming, 20/03/2026) — Crimson Desert 78 Metacritic, bolsa Pearl Abyss -30%
  - `noticia-hotd-t3-reshoots-condal-2026` (got, 20/03/2026) — HotD T3 reshoots son rutina, Condal aclara en podcast
  - `noticia-nintendo-demanda-aranceles-2026` (gamedev, 20/03/2026) — Nintendo demanda aranceles Trump, paraliza la acción
  - `noticia-first-stand-2026-semifinales` (esports, 20/03/2026) — G2 vivo, semifinales 21/03, gran final 22/03 São Paulo
- NEWS_TRACKER `last_update` → `2026-03-20`
- task.md: cleared

---

## Sesión 41 — 2026-03-17

### feat(news): add 3 articles (First Stand Day 1, Crimson Desert embargo, Slay the Spire 2)

- **js/news-data.js**: inserted 3 new articles at TOP of NEWS_DATA (noticias 31–33):
  - `noticia-first-stand-2026-dia1` (esports, 17/03/2026) — BLG y G2 dominan Día 1 del First Stand en São Paulo
  - `noticia-crimson-desert-embargo-2026` (gaming, 17/03/2026) — Embargo análisis Crimson Desert, polémica sin acceso a PS5 base
  - `noticia-slay-spire-2-exito-indie-2026` (gamedev, 17/03/2026) — Slay the Spire 2 arrasa en Early Access
- NEWS_TRACKER last_update actualizado a "2026-03-17"

---

## Sesión 40 — 2026-03-15

### feat(news): add 3 articles (Crimson Desert, Martin/Condal drama, EA layoffs)

- **js/news-data.js**: inserted 3 new articles at TOP of NEWS_DATA (noticias 28–30):
  - `noticia-crimson-desert-launch-2026` (gaming, 15/03/2026) — Crimson Desert lanzamiento 19/03, leak Revenant, specs técnicas
  - `noticia-martin-condal-abysmal-2026` (got, 15/03/2026) — GRRM describe su relación con Ryan Condal como "abismal" (THR interview)
  - `noticia-ea-despidos-battlefield-2026` (gamedev, 15/03/2026) — EA despidos en DICE/Criterion/Ripple Effect/Motive tras éxito récord de BF6
- NEWS_TRACKER last_update actualizado a "2026-03-15"

---

## Sesión 39 — 2026-03-12

### feat(news): add 3 articles (GDC festival, GTA6 date, HotD T3 casting)

- **js/news-data.js**: inserted 3 new articles at TOP of NEWS_DATA (noticias 25–27):
  - `noticia-gdc-festival-2026` (gamedev, 09/03/2026) — GDC 40 aniversario / Festival of Gaming
  - `noticia-gta6-fecha-definitiva-2026` (gaming, 11/03/2026) — GTA 6 fecha 19 nov 2026
  - `noticia-hotd-t3-casting-2026` (got, 10/03/2026) — HotD T3 nueva Jaehaera + fecha junio
- NEWS_TRACKER last_update actualizado a "2026-03-11"

---

## Sesión 38 — 2026-03-08

### refactor(nav): group navbar into dropdowns, reduce items from 12 to 7

- **index.html, gamedev.html, gaming.html, esports.html, got.html, warhammer.html, magic.html, rol.html, nba.html, java.html, social.html, news.html, fallen-valkyrie.html** (navbar `<ul class="nav-menu">`):
  - Eliminados 8 `<li>` planos: gaming · esports · got · warhammer · magic · rol · java · social
  - Añadidos 3 nuevos `<li class="nav-dropdown">` con el mismo patrón que el GameDev dropdown existente:
    - **🕹 Gaming ▾**: gaming.html + esports.html
    - **🐉 Fantasía ▾**: got.html + warhammer.html + magic.html + rol.html
    - **📡 Comunidad ▾**: java.html + social.html
  - `<button class="lang-toggle">` añadido a las 12 páginas que no lo tenían (solo existía en index.html)
  - Clases activas manuales eliminadas de todos los `<li>` planos — active state 100% delegado a `setActiveNav()` en main.js
  - `data-i18n="nav.home"` conservado únicamente en index.html (donde ya existía)
  - Sin cambios en CSS ni en JS

---

## Sesión 37 — 2026-03-08

### feat(gamedev): add in-browser play embed + 6 news articles

- **gamedev.html** (sección #published · `.game-card-full-footer`):
  - Samurai Kitchen: añadido botón `▶ JUGAR EN EXPLORADOR` (`.btn.btn-green.play-embed-btn`, `data-game-id="15920008"`, `onclick="toggleGameEmbed(this)"`)
  - Stars Lander: ídem con `data-game-id="15830656"`
  - Tras cada `.game-card-full-body`: añadido `div.game-embed-container` con header (título + botón cerrar) + `div.game-embed-frame-wrap` + `iframe` (src itch.io embed-upload, `allowfullscreen`, `allow="fullscreen"`, `frameborder="0"`, `class="game-embed-iframe"`)
  - Embed IDs: `#embed-15920008` (Samurai Kitchen) · `#embed-15830656` (Stars Lander)
- **index.html** (sección #games · `.game-card-footer`):
  - Samurai Kitchen: añadido botón `▶ JUGAR` (`.btn.btn-small.btn-green.play-embed-btn`)
  - Stars Lander: ídem
  - Tras cada `.game-card`: añadidos los mismos `div.game-embed-container` con iframe embeds
- **css/gamedev.css** (append al final):
  - `.game-embed-container`: border 4px verde, box-shadow verde, bg-surface, animación `embedSlideIn`
  - `@keyframes embedSlideIn`: opacity 0→1, translateY -8px→0, steps(4)
  - `.game-embed-header`: flex space-between, bg accent-primary (verde)
  - `.game-embed-title`: font-primary 0.45rem, color bg-base
  - `.game-embed-close`: transparent bg, border bg-base, hover invierte colores
  - `.game-embed-frame-wrap`: aspect-ratio 16/10, width 100%
  - `.game-embed-iframe`: 100% × 100%, block, border none
  - `.btn-green`: border/color/shadow accent-primary · hover bg verde text negro
- **js/main.js** (append al final):
  - `toggleGameEmbed(btn)`: cierra todos los embeds abiertos, resetea texto de todos los botones, luego abre el embed del juego pulsado y hace scrollIntoView. Texto activo: "■ CERRAR JUEGO"
- **js/news-data.js** — 6 artículos insertados al TOP de NEWS_DATA (artículos 25–30):
  - **30** `noticia-lpl-tes-naiyou-amano-2026` (esports · 07/03): naiyou/TES amaño LPL Playoffs S1 2026 — confesión, investigación, ban de por vida esperado
  - **29** `noticia-crimson-desert-lanzamiento-2026` (gaming · 07/03): Crimson Desert 19/03 PC/PS5/XSX — Pearl Abyss, mundo abierto, Elden Ring comparisons
  - **28** `noticia-akotsk-temporada-2-confirmada-2026` (got · 06/03): A Knight of the Seven Kingdoms T2 confirmada — Dunk y Egg, HBO expansión hasta 2028
  - **27** `noticia-mtg-tortugas-ninja-2026` (magic · 05/03): MTG × TMNT — mecánica Infiltración, Commander pentacolor cooperativo, arte Kevin Eastman
  - **26** `noticia-old-world-grand-cathay-defenders-2026` (warhammer · 07/03): Gran Cathay Defenders of the Great Bastion 14/03 — 53 miniaturas, Astromancers, Crane Guns, Iron Hail Gunners, Peasant Levy
  - **25** `noticia-nba-playoffs-race-shai-record-2026` (nba · 08/03): OKC primer clasificado playoffs 2026, Shai cerca del récord Wilt Chamberlain 126 partidos 20+ pts
- **js/news-data.js** — NEWS_TRACKER: `last_update` actualizado a `"2026-03-08"`

---

## Sesión 36 — 2026-03-07

### feat(devlog): add first real devlog entry #01 — enemy detection & attack

- **fallen-valkyrie.html** (sección #sesiones):
  - Eliminado `div.devlog-empty` (empty state placeholder)
  - Añadida primera entrada real `#01` (07/03/2026) inmediatamente tras el comentario `<!-- DEVLOG ENTRIES -->` usando las clases de diseño existentes: `.devlog-entry.reveal`, `.devlog-entry-header`, `.devlog-date`, `.devlog-num`, `.devlog-title`, `.devlog-img`, `.devlog-desc` (×2), `.devlog-tags`, `.devlog-tag` (×5)
  - Contenido: DETECCIÓN Y ATAQUE DEL ENEMIGO — implementación de radio de visión del esqueleto, estados CHASE y ATTACK en la máquina de estados, daño conectado al frame exacto del swing en animación de ataque
  - Tags: Enemy AI · State Machine · Detection Range · Attack System · Animation Events
- **assets/img/FV_enemy_attack.gif**: nuevo asset — GIF demostrativo del sistema de ataque del enemigo

---

## Sesión 35 — 2026-03-06

### feat(news): add 3 new articles (magic/warhammer/esports) + tracker updated

- **js/news-data.js** — 3 artículos insertados al TOP del array NEWS_DATA (artículos 22, 23, 24):
  - **Artículo 24** `noticia-mtg-tmnt-2026` (magic · 06/03/2026): Magic: The Gathering × TMNT Universes Beyond — sale hoy. Mecánicas sneak/disappear, arte Kevin Eastman, Commander 5 colores Turtle Power!, Secret Lair TubuLair.
  - **Artículo 23** `noticia-tow-gran-cathay-defenders-2026` (warhammer · 14/03/2026): The Old World Defenders of the Great Bastion — 53 minis Gran Cathay: Astromancers, Crane Guns, Iron Hail Gunners, Peasant Levy.
  - **Artículo 22** `noticia-lec-spring-2026-formato` (esports · 06/03/2026): LEC Spring Split 2026 — eliminan Bo1, vuelven Bo3 regular + Bo5 playoffs, 2 roadtrips (MKOI España, KC Francia), finalistas clasifican al MSI en Daejeon.
- **js/news-data.js** — NEWS_TRACKER actualizado: `last_update: "2026-03-06"`, `next_available: ["got", "nba", "rol"]`

---

## Sesión 34 — 2026-03-05

### feat(fallen-valkyrie): fill estado actual with real content + screenshot

- **fallen-valkyrie.html** (sección #estado › `.devlog-summary`):
  - `<div class="devlog-img-placeholder">` reemplazado por `<img src="assets/img/estado_actual_FV.jpg" class="devlog-img" onerror="this.parentElement.style.display='none'">` (imagen sobre el texto)
  - Cuerpo `.summary-body` rellenado con texto real en primera persona: movimiento completo, máquina de estados, salto, dash, deslizamiento por paredes, ataque, tilemap lv1, primer enemigo esqueleto
  - Tags actualizados: 8 `.devlog-tag` pills — Player Movement · State Machine · Jump · Dash · Wall Slide · Attack · Tilemap Lv1 · Enemy: Skeleton (antes eran 4 `.tag.blue` genéricos)
- **assets/img/estado_actual_FV.jpg**: screenshot real de Fallen Valkyrie en desarrollo

---

## Sesión 33 — 2026-03-05

### feat(nav): GameDev dropdown with FV Devlog submenu on all pages

- **css/components.css**: nuevas reglas `.nav-dropdown` (position:relative), `.nav-dropdown-toggle` (cursor:pointer), `.nav-submenu` (absolute, bg-surface, 4px solid accent-primary, VT323 links). Desktop: hover muestra submenu via CSS. Mobile: static + border-left, visible con `.open` class
- **js/main.js**: `setActiveNav()` extendido — también itera `.nav-submenu a` y si el href coincide con la página actual, añade `.active` al link y `.active` al `.nav-dropdown-toggle` padre. Nuevo listener de click en `.nav-dropdown-toggle` para toggle de `.open` en mobile (solo si `window.innerWidth <= 900`)
- **13 HTML pages** (index, gamedev, gaming, esports, got, warhammer, magic, rol, nba, java, social, news, fallen-valkyrie): item `<li><a href="gamedev.html" class="nav-link">` reemplazado por `<li class="nav-dropdown">` con toggle `<span>` y submenu con gamedev.html + fallen-valkyrie.html
- **gamedev.html**: botón `.btn.btn-pink` "▶ VER DEVLOG" → fallen-valkyrie.html añadido tras la feature checklist del spotlight Fallen Valkyrie

---

## Sesión 32 — 2026-03-05

### feat(gamedev): create fallen-valkyrie.html devlog page

- **fallen-valkyrie.html** (nueva página):
  - `<head>`: favicons estándar, Google Fonts, css/main.css + css/components.css + css/animations.css, inline `<style>` con todos los componentes específicos
  - **Header** `.page-header-fv`: magenta dominant, gradiente bg, pre-text "▶ GAMEDEV / FALLEN VALKYRIE", H1 "DEVLOG", subtítulo VT323, 4 stat boxes (ENGINE/GÉNERO/ESTADO/PROGRESO)
  - **Sección #creditos**: `.fv-section-label` gold, `.lore-box.gold-border` con `.lore-box-title` "⚠ ESTE JUEGO NACE DE UN APRENDIZAJE", texto en primera persona con atribución a AlexDev, `.credit-tag` (link a curso Udemy, abre en nueva pestaña, Press Start 2P, bg accent-warn, color #000)
  - **Sección #estado**: `.bar-container` barra PROGRESO GLOBAL 10% (`.bar-fill.pink`, `data-fill="10"`), `.devlog-summary` card con `.summary-badge` "📋 RESUMEN INICIAL", título, fecha badge, placeholder imagen, cuerpo placeholder, 4 tags placeholder
  - **Sección #sesiones**: `.devlog-empty` visible con `.devlog-cursor` parpadeante, comentario `<!-- DEVLOG ENTRIES -->`, template de entrada completo entre `<!-- EXAMPLE START -->` / `<!-- EXAMPLE END -->`
  - Footer y `<script src="js/main.js">` estándar
  - Componentes inline definidos: `.page-header-fv`, `.fv-stats`, `.fv-stat-box`, `.lore-box`, `.credit-tag`, `.devlog-summary`, `.summary-badge`, `.devlog-entry`, `.devlog-date`, `.devlog-num`, `.devlog-img`, `.devlog-img-placeholder`, `.devlog-empty`, `.devlog-tag`, `.fv-section-label`
- **estado.md** + **commit.md** + **task.md**: actualizados

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
