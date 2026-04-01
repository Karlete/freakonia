# estado.md — Project State Tracker

Last updated: 2026-04-01 (sesión 47)

---

## ⚠️ REGLAS DE ESTILO — LEER ANTES DE TOCAR CUALQUIER PÁGINA

> Estas reglas son obligatorias en todas las páginas. No añadir librerías externas, no romper el sistema de variables, no redefinir clases globales en archivos de página.

### Paleta de colores (CSS variables — NO cambiar los valores hex)
| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#0a0a0a` | Fondo base de página |
| `--bg-surface` | `#111111` | Navbar, footer, paneles oscuros |
| `--bg-card` | `#161616` | Fondo de cards y bloques |
| `--accent-primary` | `#00ff41` | Verde matrix — acento principal, títulos, bordes |
| `--accent-secondary` | `#ff00ff` | Magenta neon — hover, detalles, badges |
| `--accent-tertiary` | `#00bfff` | Azul eléctrico — info, detalles secundarios |
| `--accent-warn` | `#ffcc00` | Oro pixel — WIP, warnings, destacados |
| `--text` | `#e0e0e0` | Texto normal |
| `--text-dim` | `#888888` | Texto secundario, labels |
| `--text-bright` | `#ffffff` | Títulos, valores destacados |

### Tipografía
- **Titulares / UI / botones / labels:** `font-family: var(--font-primary)` → `'Press Start 2P'`
- **Cuerpo de texto / descripciones / párrafos:** `font-family: var(--font-secondary)` → `'VT323'`
- Tamaño mínimo de texto VT323: `16px`. Mínimo Press Start 2P: `0.45rem`

### Bordes y glow
- Borde estándar: `border: 4px solid var(--accent-primary)` — siempre 4px, siempre recto (sin border-radius)
- Borde hover/acento: `border-color: var(--accent-secondary)`
- Glow verde: `box-shadow: var(--glow-green)`
- Glow rosa: `box-shadow: var(--glow-pink)`
- NO usar `border-radius` — todo cuadrado o escalonado estilo pixel

### Componentes reutilizables (ya definidos en css/)
- `.btn` / `.btn-pink` / `.btn-blue` / `.btn-gold` / `.btn-small` / `.btn-block` → `css/components.css`
- `.card` / `.card-title` / `.card-body` / `.card-footer` → `css/components.css`
- `.game-card` / `.game-card-thumb` / `.game-card-body` / `.game-card-footer` → `css/components.css`
- `.section-title` / `.pixel-divider` / `.tag` / `.status-badge` → `css/main.css`
- `.bar-container` / `.bar-track` / `.bar-fill.green|pink|blue|gold` → `css/components.css`
- `.stats-row` / `.stat-box` → `css/components.css`
- `.page-header` → `css/main.css`
- `.reveal` + `.stagger` → animaciones scroll gestionadas por `js/main.js`

### Componentes definidos en páginas individuales (inline `<style>`)
Estos están declarados dentro del `<style>` de cada página y son propios de cada una:
- `got.html` → `.book-card`, `.tv-card`, `.author-bio`, `.lore-box`, `.key-moment`
- `warhammer.html` → `.personal-story`, `.edition-card`, `.army-card`, `.army-img-container`, `.army-img`, `.whf-gallery`, `.whf-gallery-img-wrap`, `.whf-gallery-img`, `.whf-gallery-caption`, `.whf-section-img-wrap`, `.whf-img-ediciones`, `.whf-img-endtimes`, `.whf-img-oldworld`, `.whf-section-img`, `.endtimes-box`, `.chronicle-card`, `.lore-box`, `.quote-card`, `.section-quicknav`
- `java.html` + `css/java.css` → `.page-header-java`, `.section-label` (y variantes .pink/.gold/.blue/.dim/.teal), `.java-story-card`, `.java-why-grid`, `.java-why-card`, `.java-timeline`, `.java-timeline-item`, `.java-timeline-year`, `.java-timeline-text`, `.javadevbible-spotlight`, `.javadevbible-badge`, `.javadevbible-title`, `.javadevbible-btns`, `.javadevbible-tags`, `.javadevbible-tag`, `.jdb-screenshot`, `.jdb-img`, `.btn-teal`
- `magic.html` → `.mtg-pillar`, `.edition-card`, `.mana-color-box`, `.collection-box`, `.set-badge`, `.personal-story`, `.lore-box`, `.quote-card`, `.section-quicknav`
- `rol.html` → `.publisher-card`, `.publisher-tragedy`, `.publisher-stats`, `.collection-item`, `.owned-badge`, `.rpg-system`, `.supplement-card`, `.closing-narrative`, `.quote-card-final`, `.lore-box`, `.quote-card`, `.section-quicknav`
- `nba.html` → `.player-tribute`, `.player-stats`, `.player-stat-row`, `.player-badge`, `.dunk-event`, `.dunk-contender`, `.dunk-verdict`, `.dunk-grid`, `.dunk-gif`, `.channel-card`, `.taberna-img-link`, `.taberna-img-wrap`, `.taberna-img`, `.taberna-img-overlay`, `.taberna-play-btn`, `.fantasy-card`, `.fantasy-table`, `.memory-card`, `.era-stats`, `.era-stat-box`, `.lore-box`, `.quote-card`, `.section-quicknav`, `.nba-hero-text`, `.nba-hero-visual`, `.nba-hero-img`, `.section-img-nba`, `.section-media-row`
- `gaming.html` → `.memory-card`, `.platform-header`
- `esports.html` → `.season-card`, `.section-quicknav`

### Estructura obligatoria de cada página HTML
```html
<!-- 1. CRT overlay siempre primero en body -->
<div class="crt-overlay" aria-hidden="true"></div>

<!-- 2. Nav igual en todas las páginas (marcar .active en el link actual) -->
<nav class="navbar">...</nav>

<!-- 3. Page header o hero propio de la página -->

<!-- 4. <main> con secciones .section > .container -->

<!-- 5. Footer idéntico en todas las páginas -->
<footer class="site-footer">...</footer>

<!-- 6. JS al final del body -->
<script src="js/main.js"></script>
```

### Nav — lista completa de links (copiar en cada página nueva)
```html
<li><a href="index.html"     class="nav-link">🏠 Inicio</a></li>
<li class="nav-dropdown">
  <span class="nav-link nav-dropdown-toggle">🎮 GameDev ▾</span>
  <ul class="nav-submenu">
    <li><a href="gamedev.html">🎮 GameDev</a></li>
    <li><a href="fallen-valkyrie.html">📓 FV Devlog</a></li>
  </ul>
</li>
<li><a href="gaming.html"    class="nav-link">🕹 Gaming</a></li>
<li><a href="esports.html"   class="nav-link">🏆 Esports</a></li>
<li><a href="got.html"       class="nav-link">🐉 GoT</a></li>
<li><a href="warhammer.html" class="nav-link">⚙ Warhammer</a></li>
<li><a href="magic.html"     class="nav-link">✨ MtG</a></li>
<li><a href="rol.html"       class="nav-link">🎲 Rol</a></li>
<li><a href="nba.html"       class="nav-link">🏀 NBA</a></li>
<li><a href="java.html"      class="nav-link">☕ Java</a></li>
<li><a href="social.html"    class="nav-link">📡 Social</a></li>
<li><a href="news.html"      class="nav-link">📰 News</a></li>
```
> "🎮 GameDev" es un dropdown. Desktop: hover muestra el submenu. Mobile: click en el toggle abre/cierra. El active state lo gestiona `setActiveNav()` en main.js — no añadir clase `active` a mano en el toggle.
> ✅ Nav actualizada en todas las páginas (sesión 33). Dropdown styles en `css/components.css`.

---

## ▶ PRÓXIMA SESIÓN — Leer esto primero

### Estado actual del sistema de noticias (news)
- `js/news-data.js` — array `NEWS_DATA` con **32 artículos**. **Añadir nuevos artículos AQUÍ, al principio del array (más reciente primero).**
- `news.html` — renderizado dinámico vía `renderNews()`. No tocar el grid HTML.
- `index.html` — slider "¿Qué se cuece?" lee automáticamente `NEWS_DATA`. No requiere cambios al añadir noticias.
- `css/news.css` — `.news-grid` tiene `align-items: start` (fix bug Leer más).

### NEWS_TRACKER — temas usados
```json
{"used_topics":["got","esports","gaming","magic","gamedev","warhammer","rol","nba"],"last_update":"2026-03-25"}
```
**Próximos temas disponibles:** `got` · `esports` · `nba`

### IDs de artículos actuales en NEWS_DATA (para evitar duplicados)
| # | id | topic | fecha |
|---|---|---|---|
| 38 | `noticia-first-stand-2026-semifinales` | esports | 20/03/2026 |
| 37 | `noticia-nintendo-demanda-aranceles-2026` | gamedev | 20/03/2026 |
| 36 | `noticia-hotd-t3-reshoots-condal-2026` | got | 20/03/2026 |
| 35 | `noticia-crimson-desert-reviews-bolsa-2026` | gaming | 20/03/2026 |
| 34 | `noticia-first-stand-2026-grupos` | esports | 20/03/2026 |
| 33 | `noticia-first-stand-2026-dia1` | esports | 17/03/2026 |
| 30 | `noticia-lpl-tes-naiyou-amano-2026` | esports | 07/03/2026 |
| 29 | `noticia-crimson-desert-lanzamiento-2026` | gaming | 07/03/2026 |
| 28 | `noticia-akotsk-temporada-2-confirmada-2026` | got | 06/03/2026 |
| 27 | `noticia-mtg-tortugas-ninja-2026` | magic | 05/03/2026 |
| 26 | `noticia-old-world-grand-cathay-defenders-2026` | warhammer | 07/03/2026 |
| 25 | `noticia-nba-playoffs-race-shai-record-2026` | nba | 08/03/2026 |
| 24 | `noticia-mtg-tmnt-2026` | magic | 06/03/2026 |
| 23 | `noticia-tow-gran-cathay-defenders-2026` | warhammer | 14/03/2026 |
| 22 | `noticia-lec-spring-2026-formato` | esports | 06/03/2026 |
| 21 | `noticia-fatal-frame-2-remake-2026` | gaming | 02/03/2026 |
| 18 | `noticia-g2-lec-versus-2026` | esports | 01/03/2026 |
| 17 | `noticia-hotd-t3-trailer-2026` | got | 19/02/2026 |
| 16 | `noticia-spurs-racha-2026` | nba | 01/03/2026 |
| 15 | `noticia-lec-versus-final-badalona-2026` | esports | 28/02/2026 |
| 14 | `noticia-nba-allstar-2026` | nba | 28/02/2026 |
| 12 | `noticia-god-of-war-trilogy-remake-2026` | gaming | 28/02/2026 |
| 10 | `noticia-re9-requiem-2026` | gaming | 28/02/2026 |
| 9  | `noticia-hotd-s3-trailer-2026` | got | 28/02/2026 |
| 8  | `noticia-coc-arkham-2026` | misc/rol | 26/02/2026 |
| 7  | `noticia-warhammer-gran-cathay-2026` | misc/warhammer | 26/02/2026 |
| 6  | `noticia-unity-ia-gdc-2026` | gamedev | 26/02/2026 |
| 5  | `noticia-ffvii-remaster-2026` | gaming | 25/02/2026 |
| 4  | `id:4` | got | 22/02/2026 |
| 3  | `id:3` | magic | 23/02/2026 |
| 2  | `id:2` | gaming | 24/02/2026 |

### Cómo añadir una noticia nueva
1. Abrir `js/news-data.js`
2. Insertar nuevo objeto al principio del array (antes del `// ── ARTICLE 1`)
3. Seguir la estructura obligatoria: `id, topic, category, emoji, badgeLabel, title, summary, full[], date (DD/MM/YYYY), url, page, pageLabel, accent, source, img, tags[]`
4. Actualizar el comentario `NEWS_TRACKER` al final del archivo
5. Añadir imagen en `assets/img/` si la hay

### Bugs conocidos / pendientes
- Ninguno activo. Todo funcionando en producción a fecha 2026-02-28.

### Bugs resueltos (histórico)
- **2026-02-28 sesión 23:** `.news-grid` expandía todas las cards de una fila al hacer "Leer más" en una. Fix: `align-items: start` en `.news-grid` en `css/news.css`.

---

## Current Phase
🚀 Phase 3: PUBLICADA — index ✅ · gamedev ✅ · fallen-valkyrie ✅ · gaming ✅ · esports ✅ · got ✅ · warhammer ✅ · magic ✅ · rol ✅ · nba ✅ · social ✅ · java ✅ · news ✅

**Web completa y publicada en producción.**
- 🌐 URL: **https://freakonia.com**
- 📦 Repo: **https://github.com/Karlete/freakonia**
- ⚙️ Deploy: GitHub Pages (rama `main`, raíz `/`)

**Sesión 45 (2026-03-25):** 3 artículos insertados al TOP de `js/news-data.js` (noticias 44–46): Gaming (noticia-mhs3-reviews-metacritic-2026 · Monster Hunter Stories 3 reviews Metacritic +80 · 25/03) · GameDev (noticia-subnautica2-krafton-demanda-2026 · Krafton/ChatGPT/bonus 250M · 25/03) · Magic (noticia-secrets-strixhaven-preview-2026 · preview season Secrets of Strixhaven · 25/03). NEWS_TRACKER last_update → 2026-03-25, next_available → got · esports · nba. Push a main.
**Sesión 43 (2026-03-20):** `index.html` — `section#pixel-patron` movida dentro de `.patron-rain-wrap`, después de `#que-se-cuece` y antes de `</div><!-- end .patron-rain-wrap -->`. `<main>` ahora empieza directamente con `#about`. El canvas de lluvia cubre ahora hero + news slider + pixel patron. Push a main.
**Sesión 42 (2026-03-20):** 5 artículos insertados al TOP de `js/news-data.js` (noticias 34–38): Esports (noticia-first-stand-2026-grupos · BLG a playoffs, G2 al límite, Gen.G imparable · 20/03) · Gaming (noticia-crimson-desert-reviews-bolsa-2026 · Crimson Desert 78 Metacritic + bolsa Pearl Abyss -30% · 20/03) · GoT (noticia-hotd-t3-reshoots-condal-2026 · HotD T3 reshoots rutina, estreno junio 2026 · 20/03) · GameDev (noticia-nintendo-demanda-aranceles-2026 · Nintendo demanda aranceles Trump, acción paralizada · 20/03) · Esports (noticia-first-stand-2026-semifinales · G2 vivo, semifinales 21/03, gran final 22/03 São Paulo · 20/03). NEWS_TRACKER last_update actualizado a 2026-03-20. task.md limpiado. Push a main.
**Sesión 40 (2026-03-15):** 3 artículos insertados al TOP de `js/news-data.js` (noticias 28–30): Gaming (noticia-crimson-desert-launch-2026 · Crimson Desert lanzamiento 19/03 · 15/03) · GoT (noticia-martin-condal-abysmal-2026 · Martin "relación abismal" con Condal · 15/03) · GameDev (noticia-ea-despidos-battlefield-2026 · EA despidos post-Battlefield 6 · 15/03). NEWS_TRACKER last_update actualizado a 2026-03-15. Push a main.
**Sesión 39 (2026-03-12):** 3 artículos insertados al TOP de `js/news-data.js` (noticias 25–27): GameDev (GDC Festival of Gaming 40 aniversario) · Gaming (GTA 6 fecha 19 nov 2026) · GoT (HotD T3 nueva actriz Jaehaera + fecha junio). NEWS_TRACKER last_update 2026-03-11. Push a main.
**Sesión 38 (2026-03-08):** Navbar refactorizado en las 13 páginas HTML: reducidos items visibles de 12 a 7 agrupando en dropdowns. Nuevos dropdowns: 🕹 Gaming ▾ (gaming.html + esports.html) · 🐉 Fantasía ▾ (got.html + warhammer.html + magic.html + rol.html) · 📡 Comunidad ▾ (java.html + social.html). Mismo patrón HTML/CSS que el dropdown GameDev existente (`.nav-dropdown` / `.nav-submenu`). Lang-toggle button añadido a las 12 páginas que no lo tenían (solo estaba en index.html). Active state delegado completamente a `setActiveNav()` en main.js (sin clases activas manuales). Push a main.
**Sesión 36 (2026-03-07):** Primera entrada real del devlog de Fallen Valkyrie añadida a `fallen-valkyrie.html` (sección #sesiones): entrada #01 "DETECCIÓN Y ATAQUE DEL ENEMIGO" (07/03/2026). Eliminado `div.devlog-empty`. Estructura usa clases existentes del diseño (`.devlog-entry`, `.devlog-entry-header`, `.devlog-date`, `.devlog-num`, `.devlog-title`, `.devlog-img`, `.devlog-desc`, `.devlog-tags`). Nuevo asset `assets/img/FV_enemy_attack.gif`. Push a main.
**Sesión 37 (2026-03-08):** Feature "▶ JUGAR EN EXPLORADOR" añadida a `gamedev.html` e `index.html`: botón verde por card que togglea un iframe de itch.io inline sin salir de la página (`toggleGameEmbed` en `js/main.js`). Samurai Kitchen embed ID 15920008 · Stars Lander embed ID 15830656. `css/gamedev.css`: nuevas clases `.game-embed-container`, `.game-embed-header`, `.game-embed-title`, `.game-embed-close`, `.game-embed-frame-wrap`, `.game-embed-iframe`, `.btn-green` + animación `embedSlideIn`. 6 nuevos artículos insertados al TOP de `js/news-data.js` (artículos 25–30): Esports (naiyou/TES amaño LPL · 07/03) · Gaming (Crimson Desert 19/03 · 07/03) · GoT (A Knight S2 confirmada · 06/03) · Magic (TMNT mecánica Infiltración · 05/03) · Warhammer (Gran Cathay Defenders · 07/03) · NBA (OKC playoffs + Shai récord Wilt · 08/03). NEWS_TRACKER actualizado: last_update 2026-03-08. Estado.md y commit.md actualizados. Push a main.

**Sesión 35 (2026-03-06):** 3 nuevos artículos insertados al TOP de NEWS_DATA en `js/news-data.js`: Magic (noticia-mtg-tmnt-2026 · MTG × TMNT Universes Beyond · 06/03) · Warhammer (noticia-tow-gran-cathay-defenders-2026 · Defenders of the Great Bastion 53 minis · 14/03) · Esports (noticia-lec-spring-2026-formato · LEC Spring Split 2026 formato Bo3/Bo5 · roadtrips MKOI + KC · MSI Daejeon). NEWS_TRACKER actualizado: last_update 2026-03-06, next_available got/nba/rol. Estado.md y commit.md actualizados. Push a main.
**Sesión 34 (2026-03-05):** Estado actual de fallen-valkyrie.html rellenado con contenido real: imagen `estado_actual_FV.jpg` encima del texto, cuerpo en primera persona (movimiento completo, máquina de estados, salto, dash, wall slide, ataque, tilemap lv1, esqueleto primer enemigo), 8 `.devlog-tag` pills (Player Movement · State Machine · Jump · Dash · Wall Slide · Attack · Tilemap Lv1 · Enemy: Skeleton). Push a main.
**Sesión 33 (2026-03-05):** Navbar "🎮 GameDev" convertido a dropdown en las 13 páginas HTML. CSS: `.nav-dropdown`, `.nav-dropdown-toggle`, `.nav-submenu` añadidos a `css/components.css` (hover en desktop, `.open` toggle en mobile). JS: `setActiveNav()` actualizado para detectar submenu links y destacar el toggle padre; nuevo listener de click para mobile dropdown en `js/main.js`. GameDev ya no es un `<a>` directo — el submenu tiene gamedev.html y fallen-valkyrie.html. Push a main.
**Sesión 32 (2026-03-05):** Nueva página `fallen-valkyrie.html` — devlog/progress page de Fallen Valkyrie (2D RPG Unity). Header magenta con 4 stat boxes. Sección #creditos con lore-box gold y .credit-tag enlazando al curso AlexDev en Udemy. Sección #estado con barra de progreso 10% (pink) y .devlog-summary card. Sección #sesiones con empty state visible + template de entrada en comentarios. Inline `<style>` con todos los componentes específicos (`.devlog-entry`, `.devlog-summary`, `.devlog-tag`, etc.). gamedev.html: botón "▶ VER DEVLOG" (btn-pink) enlazando a fallen-valkyrie.html en el spotlight de Fallen Valkyrie. Push a main.
**Sesión 29 (2026-03-04):** 3 nuevos artículos insertados al TOP de NEWS_DATA en `js/news-data.js`: Gaming (noticia-fatal-frame-2-remake-2026 · Fatal Frame II Crimson Butterfly Remake 12/03 en PS5/XSX/Switch2/PC) · Warhammer (noticia-tow-gran-cathay-defenders-2026 · Defenders of the Great Bastion 53 minis · 14/03) · Esports (noticia-lyon-lcs-lockin-2026 · LYON campeones LCS Lock-In 2026 · Inspired MVP · First Stand). NEWS_TRACKER actualizado: last_update 2026-03-04, next_available got/nba/magic/rol. Estado.md y commit.md actualizados. Push a main.
**Sesión 28 (2026-03-02):** 3 nuevos artículos insertados al TOP de NEWS_DATA en `js/news-data.js`: Esports (noticia-g2-lec-versus-2026 · G2 campeones LEC Versus 3-2 vs KC · Caps MVP · First Stand 2026) · GOT (noticia-hotd-t3-trailer-2026 · HotD T3 tráiler CNN · Batalla del Gaznate · junio 2026) · NBA (noticia-spurs-racha-2026 · Spurs 11 victorias + caída vs Knicks · Mikal Bridges 25pts). NEWS_TRACKER actualizado: last_update 2026-03-02, next_available got/gaming/esports. Estado.md y commit.md actualizados. Push a main.
**Sesión 25 (2026-03-01):** Pixel Patron Rain — nueva feature completa en index.html: js/pixels-data.js creado — array PIXEL_DONORS con 4 donantes seed: KARLETE · KAWAI_BI · MERCHAND · RIKI. js/pixels-rain.js creado — canvas con lluvia de nombres sobre el fondo, independiente de los píxeles existentes. css/pixels.css creado — estilos de la sección Pixel Patron (achievement card, contador, barra intensidad, donor list, how-it-works grid). index.html: canvas #patron-rain-canvas añadido tras el crt-overlay. index.html: .hero-shield añadido dentro de .hero-content — panel rgba(0,0,0,0.20) que evita solapamiento visual de nombres con título/sprite/botones. index.html: sección #pixel-patron añadida entre hero y main — achievement card dorada, contador de patrons, barra de intensidad (SILENCIOSA→DILUVIO), lista de donantes, grid "cómo funciona". index.html: botón 🏅 PIXEL PATRON dorado pulsante añadido bajo las barras HP/XP del sprite — anchor scroll a #pixel-patron. PayPal URL configurada: https://www.paypal.me/sanprietogamer/5. Flujo de actualización: donante paga 5€ · incluye nick en concepto PayPal · Karlete añade objeto a PIXEL_DONORS · git push → nombre aparece en lluvia en producción. 5 niveles de intensidad de lluvia: SILENCIOSA (0) · GOTAS (1–3) · LLOVIZNA (4–10) · LLUVIA (11–25) · TORMENTA (26–50) · DILUVIO ⚡ (51+). Colores de nombres: verde #00ff41 · magenta #ff00ff · azul #00bfff · dorado #ffcc00 (Karlete).
**Sesión 23 (2026-02-28):** BUG FIX — `.news-grid` expandía cards al hacer "Leer más". Fix: `align-items: start` en `css/news.css`. Push a main. Todos los .md actualizados.
**Sesión 22 (2026-02-28):** LEC cleanup — eliminados 3 artículos duplicados de esports/LEC Versus 2026 (`noticia-lec-versus-2026-final-barcelona`, `noticia-lec-versus-finals-barcelona-2026`, `id:1`). Sustituidos por 1 artículo definitivo `noticia-lec-versus-final-badalona-2026` con contenido actualizado al sábado 28 (KOI vs KC semifinal lower, G2 espera en final). NEWS_TRACKER actualizado.
**Sesión 21 (2026-02-28):** 3 artículos pre-escritos insertados en `js/news-data.js` (NBA: All-Star 2026 LA · Esports: LEC Versus 2026 final Barcelona · Gaming: GoW Trilogy Remake + Sons of Sparta). Commit `feat: 3 new articles (nba/esports/gaming) + tracker updated`.
**Sesión 20 (2026-02-28):** 3 artículos nuevos en `js/news-data.js` buscados desde cero (GOT: HotD T3 tráiler + Martin drama · Gaming: RE9 Requiem lanzamiento · Esports: LEC Versus Finals en vivo). Fuentes: 3djuegos.com · lolesports.com. NEWS_TRACKER actualizado.
**Sesión 19 (2026-02-26):** 3 noticias nuevas en `js/news-data.js` (Warhammer: Gran Cathay · Rol: CoC Arkham · GameDev: Unity IA GDC2026). nba.html: hero image `nba_pixels.png` con layout 2 columnas; GIFs LaVine + Gordon x2 con `.dunk-gif`; 3 imágenes de sección (nbalive/allstars2006/fantasyhoops) con `.section-img-nba`; flex row `.section-media-row` en NBA Live y All-Star. Commit + push a main.
**Sesión 18 (2026-02-25):** commit + push de toda la arquitectura news (sesiones 13–17) a GitHub. 5 archivos · 799 inserciones · commit 7d736f2. Web actualizada en producción.
**Sesión 17 (2026-02-25):** BUG FIX — news cards invisibles (opacity:0 permanente). Causa: scrollReveal() en main.js registra .reveal antes de que renderNews() cree las cards. Fix: eliminada clase "reveal" de las news-cards dinámicas en renderNews(); las cards aparecen visibles de inmediato al no heredar opacity:0.
**Sesión 16 (2026-02-25):** BUG FIX — news.html mostraba grid vacío tras refactor data-driven. Causa: news-data.js cargaba en body en vez de en head. Fix: news-data.js movido a head + render IIFE reescrito como función named renderNews() con guard anti-doble-render, check defensivo NEWS_DATA, sort por fecha desc, fallback .no-news, y llamada síncrona antes de news.js.
**Sesión 15 (2026-02-25):** sección "¿Qué se cuece?" añadida a index.html (slider 3-up desktop / 1-up mobile, dots, arrows) + CSS slider en news.css + NEWS_TRACKER movido a news-data.js.
**Sesión 14 (2026-02-25):** news refactorizado a arquitectura data-driven (js/news-data.js + renderCard()) + campo source + .news-source CSS.
**Sesión 13 (2026-02-25):** 3 nuevas noticias en news.html (esports: LEC Versus 2026 Finals Barcelona · gaming: God of War trilogy remakes · misc/magic: Lorwyn Eclipsed MTG) + sistema de paginación (9 por página, inline JS + CSS) + NEWS_TRACKER inicializado.
**Sesión 12 (2026-02-22):** portadas de libros en rol.html + colores por sección + hero image + news.html completa + git init + push + OG/Twitter meta tags en las 12 páginas + imagen OG optimizada.
**Sesión 11 (2026-02-21):** renombrado de marca "SanprietoThrone" → "FREAKONIA" + imágenes magic.html + fix hero-title + banner destino index.

✅ Carpeta física renombrada a `D:\Dev\Freakonia`.

---

## Completed ✅

### Foundation
- [x] Project structure created
- [x] CLAUDE.md created
- [x] estado.md created
- [x] `assets/img/`, `assets/icons/`, `assets/fonts/` directories

### CSS Design System (css/)
- [x] `css/main.css` — Variables, reset, tipografía, layout helpers, section-title, pixel-divider, tags, status-badges, page-header, scroll-reveal base, responsive breakpoints
- [x] `css/components.css` — Navbar (desktop + mobile), **nav dropdown** (`.nav-dropdown` / `.nav-dropdown-toggle` / `.nav-submenu` — sesión 33), buttons (green/pink/blue/gold/small/block), cards, game-cards, video-cards, tweet-cards, HP/XP bars, platform-headers, footer, nav-hub, stat-boxes, alerts
- [x] `css/animations.css` — 15+ keyframes, utility classes, glitch text, pixel particles, cursor blink, pixel loader, stagger delays
- [x] `css/pixels.css` — estilos Pixel Patron section · achievement card · contador · barra intensidad · donor list · how-grid

### JS Utilities (js/)
- [x] `js/main.js` — Nav active state, mobile toggle, CRT flicker, pixel cursor trail, scroll-reveal (IntersectionObserver), typeWriter util, XP/HP bar animation, click particle burst
- [x] `js/youtube.js` — `buildVideoCard()` + `renderVideoCards()`, YOUTUBE_VIDEOS array ready to fill
- [x] `js/twitter.js` — Twitter embed (dark theme) + manual tweet card fallback, TWITTER_HANDLE placeholder
- [x] `js/pixels-data.js` — PIXEL_DONORS array · 4 donantes seed · comentario de flujo de actualización
- [x] `js/pixels-rain.js` — canvas lluvia de nombres · velocidad lenta · glow neon por color · pool proporcional al número de donantes

### Assets
- [x] `assets/img/Samurai Kitchen Screenshot.jpg`
- [x] `assets/img/Starslander screenshot.jpg`

---

## Pages ✅ / 🔄 / 📋

### ✅ index.html — COMPLETO
- CRT overlay + pixel particle rain
- Sticky navbar con mobile toggle + botón EN/ES (i18n completo)
- Hero: CSS pixel sprite (KARLETE), HP/XP bars, typewriter tagline en ES/EN
  - **Fix sesión 11:** `.hero-title` → `white-space: nowrap` + `.line-accent` cambiado de `display: block` a `display: inline` (era la causa real del split "FREAK / ONIA")
  - Media query `≤768px`: `white-space: normal` + `font-size: clamp(0.9rem, 6vw, 1.4rem)`
- About: bio larga (historia gaming desde Doom → LoL/DBD + fandom GoT/Warhammer/MtG/Rol)
  - Death Match ciber de Cáceres mencionado (Action Quake 2 / CS / Diablo 2)
  - Tutorial creators Unity mencionados
- Skill bars: Game Dev 78%, Blender 65%, LoL BROMIDE III, Fanático Lore 99%, DBD Hours
- Stat boxes: Consolas · Horas Épicas · Juego en Dev
- **Nav hub grid: 10 secciones** (Game Dev / Gaming / Esports / GoT / Warhammer / MtG / Rol / NBA / Java / Social Hub)
  - Card Java (☕) añadida en posición 9 con `data-i18n="hub.java"` — sesión 10
  - Traducciones ES+EN para `hub.java` añadidas al objeto i18n
  - **Banner ELIGE TU DESTINO (sesión 11):** `.destino-banner-wrap` entre el h2 y el grid de cards — `assets/img/freakonia_background.png` · borde/glow verde, hover magenta · `height: auto` · CSS en `css/main.css`
- Spotlight Fallen Valkyrie (WIP) + 2 juegos terminados con screenshots reales
- Itch.io links correctos:
  - Samurai Kitchen → https://sanprieto.itch.io/samurai-kitchen
  - Stars Lander    → https://sanprieto.itch.io/starslander
- i18n ES/EN completo con localStorage (tecla toggle en nav)
- Footer
- Pixel Patron Rain (sesión 25): lluvia de nombres de donantes sobre el hero · .hero-shield semitransparente · sección #pixel-patron con achievement card · botón anchor dorado pulsante bajo sprite · PayPal paypal.me/sanprietogamer/5 · flujo: email PayPal → añadir nick a js/pixels-data.js → git push

### ✅ gamedev.html — COMPLETO
- Page header con pre-text, título y subtítulo
- Stats row: 2 publicados · 1 en desarrollo · Unity · itch.io
- **Unity hero image** (sesión 10): `.gamedev-hero-img-wrap` entre HR post-stats y SECCIÓN 0
  - `assets/img/unity.jpg` · `height: auto` (imagen completa sin recorte) · overlay degradado inferior
  - Label `⚙ POWERED BY UNITY` en verde, cambia a magenta en hover
  - Borde verde → magenta en hover · `margin: 3rem auto 3rem auto` (sin solapar pixel-divider)
- **Sección "Cómo empezó todo"** (historia Unity 2020):
  - Texto corregido y pulido
  - Tags de tutoriales: Alva Majo, DevAlen, AlexDev, Imphenzia, CodeMonkey, Jonathan Weinberger
  - Teaser de juegos próximos (naves, Arkanoid, Fallen Valkyrie)
- **Sección "Catálogo Publicado"** (2 juegos):
  - Samurai Kitchen — screenshot + descripción + tags + itch.io link
  - Stars Lander — screenshot + descripción + tags + itch.io link
  - Grid-2 escalable: añadir más cards siguiendo el comentario HTML
  - **Botón "▶ JUGAR EN EXPLORADOR"** (btn-green, sesión 37): cada card tiene un botón que despliega un iframe de itch.io inline (`toggleGameEmbed`). IDs: Samurai Kitchen `#embed-15920008` · Stars Lander `#embed-15830656`
- **Sección "Proyecto Actual"** (Fallen Valkyrie spotlight):
  - Barra progreso general 35% + Diseño 60% + Programación 40% + Arte 25%
  - Feature checklist (✔ done / ▶ pending)
  - Info sidebar: motor, género, plataforma, lanzamiento TBD
  - Escalable: añadir más WIP cards debajo siguiendo comentario HTML
  - **Botón "▶ VER DEVLOG"** (btn-pink) → fallen-valkyrie.html (sesión 32)

### ✅ fallen-valkyrie.html — COMPLETO (sesión 32–34)
- Child page de gamedev.html — devlog/progress page de Fallen Valkyrie (2D RPG Unity)
- Header magenta con pre-text "▶ GAMEDEV / FALLEN VALKYRIE", título "DEVLOG", 4 stat boxes
- Sección #creditos: lore-box gold-border con atribución a AlexDev/Udemy, `.credit-tag` enlazable
- Sección #estado: barra progreso global 10% (pink fill) + `.devlog-summary` card con:
  - Screenshot real `assets/img/estado_actual_FV.jpg` (onerror oculta el wrapper)
  - Cuerpo primera persona con estado real del proyecto (movimiento, FSM, salto, dash, wall slide, ataque, tilemap, esqueleto)
  - 8 `.devlog-tag` pills
- Sección #sesiones: `.devlog-empty` visible + template en comentarios `<!-- EXAMPLE START/END -->`
- Todos los estilos inline en `<style>` — sin archivo CSS externo propio
- **Para añadir una entrada de sesión:** copiar el bloque comentado en #sesiones, rellenar fecha/num/título/desc/tags, eliminar `.devlog-empty` cuando haya al menos una entrada real

### ✅ gaming.html — COMPLETO
- Page header con gradiente multicolor (azul → verde → rosa → dorado)
- Stats row: 5 plataformas · ∞ horas · NVL 99 · 1993
- Quick-nav ancla por plataforma (cada una con su color de acento)
- **5 secciones de plataforma**, cada una con: platform-header + intro card + grid-3 de memory cards
  - Master System II (azul/tertiary) — Alex Kidd, Sonic
  - Game Boy (verde/primary) — Super Mario Land 2
  - Super Nintendo (rosa/secondary) — Super Mario World, Mortal Kombat
  - PlayStation 1 (dorado/warn) — Tomb Raider, Final Fantasy, PES/NBA
  - PC (blanco/grey) — AQ2, Counter-Strike, Diablo II, HoMM II-V, Gothic, Skyrim+mods, LoL/DBD (link a esports), StarCraft
- Técnica: hover por card vía CSS var `--memory-color` en inline style
- Placeholders tipo "más juegos por añadir" listos en cada sección
- PC dividida en 2 sub-eras: "Ciber Death Match Cáceres" + "Era PC en casa"

### ✅ esports.html — COMPLETO
- Page header dorado, tagline "Modo Espectadora Activado"
- Stats row: 2009 · 14 temporadas · NaBr III · 100M+ viewers
- Rank display: Bromuro de Sodio III con barras (Faker 0%, Ward 12%, Tilt 99%)
- 2 quote cards de intro (texto de Karlete sobre LoL)
- Quick-nav de temporadas S1–S14
- **14 season cards** en 3 eras con color propio:
  - Era Clásica S1–S3 → verde (`--accent-primary`)
  - Era Media S4–S7 → dorado (`--accent-warn`) — default
  - Era Moderna S8–S14 → azul (`--accent-tertiary`)
- Cada era: título, season number Y hover de cards en el color de era
- Técnica: hover por card vía CSS var `--card-accent` en inline style
- Cada season card: META · CAMPEONES (champ-tags) · ANÉCDOTAS · WORLDS RESULT box
- Card resumen final con conteo de títulos por región
- DBD no añadido — solo LoL por ahora

### ✅ got.html — COMPLETO
- Page header: gradiente rojo/dorado, acento `--got-red: #cc2200`
- Stats row: 1996 · 5 libros · 8 temporadas · HBO
- Quick-nav: Libros / Serie / Spinoffs
- **Sección 1 (Libros ASOIAF):**
  - Author bio card (GRRM)
  - 6 `.book-card` (Libros I–V publicados + VI TWoW en espera)
  - 4 `.lore-box` (Casas, Temas, Magia/Dragones, R+L=J)
  - Hover color via `--book-color` CSS var por card
- **Sección 2 (Serie HBO):**
  - Stats row secundario
  - T1–T6 era dorada + T7–T8 caída como `.tv-card`
  - 2 spinoff lore boxes (HotD + KotSK)
  - Hover color via `--tv-accent` CSS var por card
- Karlete vio S1–S6 (anotado en stat box)
- Componentes: `.book-card`, `.tv-card`, `.author-bio`, `.lore-box`, `.key-moment`

### ✅ warhammer.html — COMPLETO + MEJORADO (sesión 9+10)
- Page header: gradiente dorado/rojo, acento `--accent-warn` + `--wh-red: #990000`
- Stats row: 1983 · 8 ediciones · 16+ ejércitos · 1996 (Karlete empieza)
- Quick-nav: Historia / Bretonia / Ediciones / Ejércitos / Fin Tiempos / The Old World
- **Sección 1 (Historia personal):** `.personal-story` card + galería 2 imágenes (`.whf-gallery`) + 4 lore boxes sobre Bretonia
  - Galería: `warhammer_caja_quinta_edicion.jpg` + `miniaturas_caja.jpg` — grid 1fr 1fr, borde dorado, hover magenta
- **Sección 2 (Ediciones):** lore box intro + imagen sección `.whf-img-ediciones` (borde/glow dorado `#ffcc00`, hover `#ffe066`) + `.edition-card` para 1ª–4ª + `.edition-card.featured` para 5ª (KARLETE) + grid 6ª–8ª
- **Sección 3 (Ejércitos):** grid 16 `.army-card` en 3 grupos (Orden/Caos/No Muertos+Neutral)
  - Bretonia marcada como `.army-card.my-army` con `.army-alignment.mine` badge
  - **Cada card tiene imagen** vía `.army-img-container` + `.army-img` (height 200px, object-fit cover)
  - `data-army="SLUG"` en cada container para overrides `object-position` individuales via CSS
  - Borde por defecto verde, hover sigue `--army-color` por card, Bretonia siempre dorada
- **Sección 4 (End Times):** imagen sección `.whf-img-endtimes` (borde/glow rojo `#990000`, hover `#cc0000`) + `.endtimes-box` + 5 `.chronicle-card` (Nagash/Glottkin/Khaine/Thanquol/Archaon)
- **Sección 5 (The Old World 2024):** imagen sección `.whf-img-oldworld` (borde/glow azul `#00bfff`, hover `#66d9ff`) + `.oldworld-box` azul + 2 lore boxes
- **Imágenes de sección** (sesión 10): `.whf-section-img-wrap` base + 3 modificadores — cada una hereda el color exacto del h2 de su sección (leído del inline style HTML)
  - Ediciones → `warhammer_partida_ediciones.jpg` · EndTimes → `warhammer_partida_endtimes.jpg` · OldWorld → `warhammer_partida_oldworld.jpg`
  - height 420px · object-fit cover · responsive 220px a ≤768px · scale(1.02) en hover
- Karlete: comenzó 1996 a los 12 años, 5ª edición, Bretonia (intercambió Lizardmen)
- **Assets army images** (todos en `assets/img/`, nombres limpios lowercase+guion_bajo):
  - `bretonia.jpg` · `el_imperio.jpg` · `enanos.jpg` · `altos_elfos.jpg` · `elfos_silvanos.jpg` · `hombres_lagarto.jpg`
  - `guerreros_del_caos.jpg` · `demonios_del_caos.jpg` · `bestias_del_caos.jpg` · `elfos_oscuros.png` · `enanos_del_caos.jpg` · `skavens.jpg`
  - `condes_vampiro.jpg` · `reyes_funerarios.jpg` · `orcos.jpg` · `reinos_ogros.jpg`
- Componentes: `.personal-story`, `.whf-gallery`, `.whf-gallery-img-wrap`, `.whf-section-img-wrap`, `.whf-img-ediciones`, `.whf-img-endtimes`, `.whf-img-oldworld`, `.army-img-container`, `.army-img`, `.edition-card`, `.army-card`, `.endtimes-box`, `.chronicle-card`, `.quote-card`, `.section-quicknav`

### ✅ magic.html — COMPLETO + IMÁGENES (sesión 11)
- Page header: gradiente magenta/verde, acento `--accent-secondary` dominante
- Stats row: `1993` (nacimiento MTG) · `1996` (primer mazo) · `ICE AGE` (set entrada) · `TEMPEST` (última era)
- Quick-nav: Qué es Magic / Los Pilares / Mi Historia / Las Ediciones / La Colección
- **Sección 1 (¿Qué es Magic?):** lore-box intro — Garfield, WotC, 1993, 20.000+ cartas
- **Sección 2 (Los 4 Pilares):** grid 2×2 `.mtg-pillar` (Mazo / Maná 5 colores / Combate / Multiverso) + 5 `.mana-color-box` visuales
- **Sección 3 (Mi Historia):** `.personal-story` — Cánovas 1996, Deathmatch, clan MDK, quote card, badge `🃏 COLECCIÓN CONSERVADA HASTA TEMPEST`
- **Sección 4 (Las Ediciones):** 19 sets en 4 eras con `.edition-card` grid-3:
  - Sets base (verde): Alpha · Beta · Unlimited · Revised
  - Expansiones tempranas (dorado): Arabian Nights · Antiquities · Legends · The Dark · Fallen Empires
  - Clásica media (magenta): Fourth Ed. · Ice Age `⭐ MI ENTRADA` · Chronicles · Homelands · Alliances
  - Bloque Mirage (azul): Mirage · Visions · Fifth Ed. · Weatherlight · Tempest `🏁 ÚLTIMA ERA`
- **Sección 5 (La Colección):** `.collection-box` + barra `.bar-fill.pink` data-fill=20 (400s cartas) + quote de nostalgia + CTA buttons
- **Imágenes de sección (sesión 11):** 5 imágenes `.magic-section-img-wrap` — una por sección, borde/glow magenta, hover verde
  - `#que-es` → `magic_azul.jpg` · `#pilares` → `magic_artefactos.jpg` · `#historia` → `magic_doradas.jpg`
  - `#ediciones` → `magic_verde.jpg` · `#coleccion` → `magic_negro.jpg`
  - Sobrantes ignoradas: `magic_blanco.jpg`, `magic_rojo.jpg`
  - CSS propio en `css/magic.css` (archivo creado en sesión 11) · enlazado en `<head>` de magic.html
- Karlete: jugó activamente 1996–1997, Ice Age como set de entrada, colección conservada hasta Tempest
- Componentes: `.mtg-pillar`, `.edition-card`, `.mana-color-box`, `.collection-box`, `.set-badge`, `.personal-story`, `.lore-box`, `.quote-card`, `.section-quicknav`, `.magic-section-img-wrap`, `.magic-section-img`

### ✅ social.html — COMPLETO (sesión 2026-02-19)
- Page header: gradiente verde/magenta, acento `--accent-primary` dominante
- Stats row: `5` plataformas · `@SanprietoG` · `2025` · `UNITY` · `PRÓXIMO`
- Intro card con borde magenta — texto de presentación del hub
- **5 plataformas** como `.platform-hub` (color por plataforma via `--platform-color` inline):
  - YouTube (`#ff0000`): status `RELANZANDO` · btn-pink · tags gaming/gamedev/nostalgia
  - X/Twitter (`#ffffff`): status `● ACTIVO` · btn verde · tags gamedev/memes/90s
  - itch.io (`#fa5c5c`): status `● 2 PUBLICADOS` · mini-game-row (Samurai Kitchen / Stars Lander)
  - Twitch (`#9147ff`): status `⏳ MUY PRONTO` · teaser-box FFVII con mods anunciado
- **Email** como `.contact-hub` full-width centrado → `sanprietogamer@gmail.com`
- **Quick links grid** 5 columnas — acceso rápido a todas las plataformas
- Componentes: `.platform-hub`, `.platform-identity`, `.platform-content`, `.status-live`, `.status-soon`, `.status-wip`, `.content-tags`, `.content-tag`, `.mini-game-row`, `.mini-game-card`, `.teaser-box`, `.contact-hub`, `.quick-links-grid`, `.quick-link`, `.intro-card`
- Karlete: YouTube @sanprieto (relanzando), X @SanprietoG (activo), itch.io sanprieto.itch.io (2 juegos), Twitch sanprieto (pronto, primer directo: FFVII), email sanprietogamer@gmail.com

### ✅ nba.html — COMPLETO + MEJORADO (sesión 19) — nav propagado a todas las páginas ✅
- Page header: gradiente dorado/magenta, acento `--accent-warn` dominante
- Stats row: `2000` · `KOBE` · `14 AÑOS` (fantasy) · `0` anillos · `2016` (Slam Dunk)
- Quick-nav: 9 anclajes — `#canal` en primera posición (sesión 10)
- **Hero image (sesión 19):** layout 2 columnas — texto izquierda + `assets/img/nba_pixels.png` derecha (`.nba-hero-text` + `.nba-hero-visual` + `.nba-hero-img`) — flex en `.page-header-nba .container`
- **Sección 1 (La Taberna del Boxscore):** `.channel-card` verde — MOVIDA al top (sesión 10)
  - Imagen `assets/img/la_taberna_del_boxscore.jpg` enlazada a YouTube con overlay oscuro + `▶ VER CANAL`
  - Borde/glow verde en reposo → magenta en hover · scale(1.03) en imagen · height 380px
  - Componentes: `.taberna-img-link`, `.taberna-img-wrap`, `.taberna-img`, `.taberna-img-overlay`, `.taberna-play-btn`
- **Sección 2 (origen):** lore-box narrativa de cómo empezó + quote magenta de Kobe
- **Sección 3 (Kobe):** `.player-tribute` 2 columnas — 6 stats + texto homenaje + badge `#8 · #24 · MAMBA FOREVER`
- **Sección 4 (LeBron):** lore-box + quote verde + `.player-tribute` 2 columnas con stats LeBron + badge KING
- **Sección 5 (Slam Dunk 2016):** `.dunk-event` con grid 2 columnas (LaVine azul / Gordon magenta) + quote + `.dunk-verdict` con lista
- **Sección 6 (NBA Live):** lore-box + `.memory-card` dorada (~2005)
- **Sección 7 (All-Star Nights):** lore-box + `.memory-card` azul (tradición madrugadas)
- **Sección 8 (Fantasy):** lore-box humor + `.fantasy-card` con `.fantasy-table` + barra `.bar-fill.pink` al 3%
- **Sección 9 (NBA hoy):** lore-box + 3 `.era-stat-box` (WEMBY · LUKA · SGA) + CTA buttons
- Karlete: sigue NBA desde 2000; fanática Kobe; canal YouTube La Taberna del Boxscore (2025); 14 años fantasy sin ganar
- Canal: `https://www.youtube.com/@Latabernadelboxscore`
- Componentes: `.player-tribute`, `.dunk-event`, `.dunk-contender`, `.dunk-verdict`, `.channel-card`, `.taberna-img-link`, `.taberna-img-wrap`, `.taberna-img`, `.taberna-img-overlay`, `.taberna-play-btn`, `.fantasy-card`, `.fantasy-table`, `.era-stat-box`, `.memory-card`

### ✅ java.html — COMPLETO (sesión 9 · 2026-02-20)
- CSS propio en `css/java.css` (único archivo de página con CSS externo — resto usan inline `<style>`)
- Page header: gradiente azul eléctrico (`--accent-tertiary`), acento teal; stats row 4 boxes: ~5 AÑOS · FP+CARRERA · OOP · JVM
- **Sección 1 (Mi historia):** `.java-story-card` borde azul + glow; texto narrativo personal en primera persona
- **Sección 2 (Por qué Java):** `.java-why-grid` 3 columnas — Write Once Run Anywhere · Fuertemente Tipado · Ecosistema
- **Sección 3 (Historia de Java):** `.java-timeline` vertical — 9 hitos 1991→HOY con años en dorado (`--accent-warn`)
- **Sección 4 (JavaDevBible):** `.javadevbible-spotlight` — paleta teal `#198395` (NO dorado), imagen del proyecto, 2 botones, 5 tags
  - Paleta teal: base `#198395` · claro `#1eb8d0` · oscuro `#0f5a66` · muy claro `#5dd6e8`
  - Título de sección: color `#198395` inline + `::before` → `#1eb8d0` via `.javadevbible-section` wrapper
  - Badge `★ PROYECTO PROPIO`: `.section-label.teal` (nueva variante en java.css)
  - Imagen: `assets/img/java_dev_bible.jpg` en `.jdb-screenshot` con borde/glow teal
  - Botón primario: `.btn.btn-teal` (nueva clase en java.css)
  - Botón secundario: `.btn.btn-blue` (existente de components.css)
  - URL JavaDevBible: `https://karlete.github.io/javadevbible/javabible/index.html`
  - URL GitHub: `https://github.com/karlete/javadevbible`
- Nav y footer propagados a todas las páginas existentes en la misma sesión
- Componentes en `css/java.css`: `.java-story-card`, `.java-why-grid`, `.java-why-card`, `.java-timeline`, `.java-timeline-item`, `.java-timeline-year`, `.java-timeline-text`, `.javadevbible-spotlight`, `.javadevbible-badge`, `.javadevbible-title`, `.jdb-screenshot`, `.jdb-img`, `.btn-teal`, `.section-label.teal`

### ✅ rol.html — COMPLETO + MEJORADO (sesión 12)
- Page header: gradiente dorado/azul, acento `--accent-warn` dominante + `--accent-tertiary` secundario
- Stats row: `1989` (JOC lanza MERP) · `14-18` (edad de oro) · `4 SISTEMAS` · `∞ PARTIDAS`
- Quick-nav: El Rol en los 90 / JOC Internacional / Mi Colección / Los Sistemas / La Mesa
- **Sección 1 (Defensa del rol):** lore-box personal de Karlete (texto reivindicativo + nostálgico) + quote-card dorado
- **Sección 2 (JOC Internacional):** `.publisher-card` con badge flotante `JOC`, párrafo editorial, stats row (1985 · 10+ sistemas · 100+ títulos · 1998 cierre) + `.publisher-tragedy` bloque rojo sobre el JCC SdlA que los hundió
- **Sección 3 (Mi Colección):** 3x `.collection-item` con `.owned-badge` verde `✓ LO TENGO`:
  - Stormbringer completo (IMPAGABLE) · Cthulhu básico (+100€) · MERP básico (100–200€)
- **Sección 4 (Los 4 Sistemas):** 4x `.rpg-system` con `--system-color` inline:
  - MERP (verde `--accent-primary`): d100, Tierra Media, Angus McBride, 6 supplement-cards
  - Stormbringer (`#cc0000` rojo caos): BRP, Elric, Das Pastoras, colección completa, 6 supplement-cards
  - La Llamada de Cthulhu (magenta `--accent-secondary`): BRP+Sanity, años 20, 6 supplement-cards
  - Star Wars d6 (azul `--accent-tertiary`): WEG/JOC, D6 System, tapa negra icónica, 4 supplement-cards
- **Sección 5 (La Mesa):** `.closing-narrative` + `.quote-card-final` centrado con borde/glow dorado + CTA buttons
- **[Sesión 12] Hero image:** `mesa_rol.jpg` full-width tras el page header — borde/glow dorado, 480px escritorio / 260px móvil
- **[Sesión 12] Portadas de libros RPG:** grids de imágenes en 3 sistemas:
  - Stormbringer → grid 3 col · 6 portadas · borde/glow rojo `#cc0000` · `data-rpg="stormbringer"`
  - Cthulhu → grid 2 col · 2 portadas · borde/glow magenta · `data-rpg="cthulhu"`
  - LOTR/MERP → grid 2 col · 2 portadas · borde/glow verde · `data-rpg="lotr"`
  - Colores de borde y caption sincronizados con el color del título de cada sección
- CSS externo en `css/rol.css` (enlazado en `<head>`)
- Karlete: jugó rol de los 14 a los 18 años; conserva Stormbringer completo + Cthulhu básico + MERP básico
- Componentes: `.publisher-card`, `.publisher-tragedy`, `.publisher-stats`, `.collection-item`, `.owned-badge`, `.rpg-system`, `.supplement-card`, `.closing-narrative`, `.quote-card-final`, `.rol-hero-img-wrap`, `.rol-books-grid`, `.rol-book-wrap`, `.rol-book-img`, `.rol-book-caption`

### ✅ news.html — COMPLETO (sesión 12)
- Page header: acento verde (`--accent-primary`) dominante, tagline "ACTUALIDAD FRIKI EN TIEMPO REAL"
- Stats row: contador dinámico de noticias · año 2026 · 5 categorías
- Búsqueda por texto en título y cuerpo del artículo — `<input>` con actualización en tiempo real
- Filtros por categoría: `all` · `got` · `gaming` · `esports` · `gamedev` · `misc`
- Grid `.news-grid` responsive: `auto-fill, minmax(340px, 1fr)` — 1 col en móvil
- Primera noticia: **House of the Dragon T3** (categoría `got`)
  - Expandible con toggle "Leer más / Leer menos" — `.news-card-full` oculto por defecto
  - `data-category="got"` · `data-title="..."` para filtrado/búsqueda
  - Imagen con `onerror` fallback (oculta el wrapper si la imagen no carga)
- CSS externo en `css/news.css` (enlazado en `<head>`)
- JS en `js/news.js` — IIFE con `applyFilters()`, `updateCount()`, toggle read-more
- Badge color por categoría: got→rojo `#cc2200` · gaming→azul tertiary · esports→dorado warn · gamedev→verde primary · misc→magenta secondary
- Nav activo en `news.html` · link 📰 News propagado a las 12 páginas en sesión 12
- Componentes CSS: `.news-search-wrap`, `.news-filter-btn`, `.news-grid`, `.news-card`, `.news-card-full`, `.news-cat--[categoría]`, `.news-read-more`, `.news-source`

### Arquitectura news (a partir de sesión 14)
- `js/news-data.js` — array `NEWS_DATA` con todos los artículos
- `news.html` carga `news-data.js` → script inline `renderCard()` rellena `#newsGrid` antes de que `news.js` inicialice
- Las cards se generan dinámicamente; el HTML de `#newsGrid` ya NO tiene artículos hardcodeados

### Estructura news card (obligatoria a partir de ahora)

Campos requeridos en NEWS_DATA: `id`, `topic`, `category`, `emoji`, `badgeLabel`, `title`, `summary`, `full[]`, `date` (DD/MM/YYYY), `url`, `page`, `pageLabel`, `accent`, `source` (dominio limpio sin https:// ni www.), `img`, `tags[]`

La card siempre termina con `.news-source` mostrando el dominio de la fuente como enlace a la URL original.
Si no hay fuente externa (`source: ''`), el elemento `.news-source` no se renderiza.

---

## Pending 📋 — Phase 2 (próximas sesiones)

### Páginas por construir / mejorar
- [x] `gaming.html` — ✅ Completo (sesión 3)
- [x] `esports.html` — ✅ Completo LoL (sesión 3), DBD pendiente si se quiere añadir
- [x] `got.html` — ✅ Completo base (sesión 4)
- [x] `warhammer.html` — ✅ Completo base (sesión 4) + imágenes ejércitos + galería historia (sesión 9)
- [x] `magic.html` — ✅ Completo (sesión 5)
- [x] `rol.html` — ✅ Completo (sesión 6)
- [x] `nba.html` — ✅ Completo (sesión 7)
- [x] `social.html` — ✅ Completo (sesión 8)
- [x] `java.html` + `css/java.css` — ✅ Completo (sesión 9)
- [x] Actualizar nav+footer de todas las páginas con enlace NBA ✅ (sesión 7)
- [x] Actualizar nav+footer de todas las páginas con enlace Java ✅ (sesión 9)
- [x] `news.html` — ✅ Completo (sesión 12)
- [x] Actualizar nav de todas las páginas con enlace News ✅ (sesión 12)
- [x] Deploy a GitHub Pages ✅ (sesión 12) — live en https://karlete.github.io/freakonia
- [x] README.md + .gitignore creados ✅ (sesión 12)
- [x] OG/Twitter meta tags en las 12 páginas ✅ (sesión 12)

### Contenido pendiente (propietario: Karlete)
- [ ] YouTube video IDs → añadir a `js/youtube.js` array YOUTUBE_VIDEOS
- [ ] Twitter/X handle → editar `js/twitter.js` TWITTER_HANDLE
- [ ] Texto de memorias adicionales por consola para `gaming.html`
- [ ] Contenido extra GoT: casas, personajes, teorías para `got.html`
- [ ] Screenshots / assets de juegos próximos (naves, Arkanoid)
- [ ] Actualizar progreso de Fallen Valkyrie cuando avance
- [ ] Actualizar progreso de Fallen Valkyrie en gamedev.html cuando avance
- [ ] Añadir más memory cards a gaming.html cuando Karlete aporte contenido

### Técnico pendiente
- [ ] Favicon (icono pixel art 32x32)
- [ ] Test layout móvil en dispositivos reales
- [x] Deploy a GitHub Pages ✅ (sesión 12)
- [ ] Considerar añadir i18n a gamedev.html y resto de páginas

---

## Session Notes

### 2026-03-01 — Session 20
- Fix lluvia (sesión 20b): canvas movido de posición fixed a absolute dentro de .patron-rain-wrap
- .patron-rain-wrap envuelve hero + sección #pixel-patron — lluvia cubre ambas secciones y se corta exactamente antes de `<main>`

### 2026-02-25 — Session 17
- **news.html — BUG FIX: news cards invisibles (opacity:0 permanente):**
  - Causa: `scrollReveal()` en `js/main.js` es una IIFE que registra todos los `.reveal` al cargarse
  - `main.js` carga antes del bloque render — cuando `scrollReveal()` corre, `renderNews()` aún no ha creado las cards
  - Las cards se renderizan con `class="news-card reveal"` pero el observer nunca las observa → quedan a `opacity: 0` para siempre
  - Fix (STEP 3 del task.md): eliminada clase `reveal` del template de `renderCard()` en `news.html`
  - Sin la clase `reveal`, no aplica `opacity: 0` y las cards son visibles de inmediato
  - Las cards de news están en viewport al cargar, no necesitan animación de scroll
  - `js/main.js` sin cambios — no se expuso `initReveal` globalmente (innecesario con este fix)

### 2026-02-26 — Session 19
- **js/news-data.js — 3 artículos nuevos añadidos al top del array (total: 8):**
  - `noticia-coc-arkham-2026` · categoría misc · badge ROL · accent `#9933ff` · fuente chaosium.com
  - `noticia-warhammer-gran-cathay-2026` · categoría misc · badge WARHAMMER · accent `#cc2200` · fuente warhammer-community.com
  - `noticia-unity-ia-gdc-2026` · categoría gamedev · badge GAMEDEV · accent `#00ff41` · fuente gamedeveloper.com
  - NEWS_TRACKER actualizado: topics usados += gamedev · warhammer · rol · próximos: nba · got · gaming · esports
- **nba.html — hero image:**
  - `.page-header-nba .container` convertido a flex row (display:flex + gap)
  - Texto existente envuelto en `.nba-hero-text` (flex:1)
  - `assets/img/nba_pixels.png` añadido en `.nba-hero-visual` (flex: 0 0 320px) con clase `.nba-hero-img`
- **nba.html — GIFs Slam Dunk 2016:**
  - `.dunk-gif` CSS añadido al `<style>` (display:block · 480px · border verde · pixelated)
  - `assets/img/lavine.gif` tras `</div>` del bloque ZACH LAVINE
  - `assets/img/gordon_dunk1.gif` tras `</div>` del bloque AARON GORDON
  - `assets/img/gordon_dunk2.gif` tras `</div>` del bloque `.dunk-verdict`
- **nba.html — imágenes de sección:**
  - `.section-img-nba` CSS: 360px max-width · 280px max-height · object-fit cover · border verde
  - `assets/img/nbalive.jpg` tras lore-box de "NBA LIVE EN LA PLAY"
  - `assets/img/allstars2006.jpg` tras lore-box de "ALL-STAR NIGHTS"
  - `assets/img/fantasyhoops.jpg` tras lore-box de "EL FANTASY" (inline style: 1024px / max-height 400px)
- **nba.html — `.section-media-row` flex wrapper:**
  - NBA Live y All-Star: img + memory-card envueltos en `<div class="section-media-row">`
  - `.section-media-row`: flex row · gap 1.5rem · responsive column a ≤700px
- **estado.md:** actualizado sesión 19

### 2026-02-25 — Session 16
- **news.html — BUG FIX: grid vacío tras refactor data-driven:**
  - Causa raíz: `<script src="js/news-data.js">` cargaba en `<body>` (línea ~191) en vez de en `<head>`
  - En sesiones anteriores se añadió el script al `<head>` pero quedó el duplicado en body
  - Fix 1: `news-data.js` en `<head>` (ya presente desde sesión anterior) + eliminado el duplicado de body
  - Fix 2: render IIFE reescrito como función named `renderNews()` con:
    - Guard anti-doble-render: `if (grid.children.length > 0) return;`
    - Check defensivo: `typeof NEWS_DATA === 'undefined' || NEWS_DATA.length === 0` → mensaje fallback `.no-news`
    - Sort por fecha descendente (DD/MM/YYYY) antes de renderizar
    - Llamada síncrona `renderNews()` antes de `<script src="js/news.js">` (para que news.js capture `.news-card`)
    - `DOMContentLoaded` como safety net (guard previene doble render)
    - Actualización del contador `#newsCount` con el total de artículos
- **estado.md:** actualizado sesión 16

### 2026-02-25 — Session 15
- **index.html — sección `#que-se-cuece` añadida:**
  - Ubicación: justo antes de `<section id="about">` (dentro de `<main>`)
  - Slider con botones ◄ ► · dots paginables · CTA "VER TODAS LAS NOTICIAS" → news.html
  - Desktop (≥768px): 3 cards a la vez → 2 páginas (de 6 items)
  - Mobile (<768px): 1 card a la vez → hasta 6 páginas
  - JS inline: ordena NEWS_DATA por fecha desc · toma los 6 más recientes · oculta la sección si NEWS_DATA vacío · re-pagina en resize
  - Cada card: `--news-accent` inline → badge coloreado, border y glow por accent del topic
  - `<script src="js/news-data.js">` añadido al `<head>` de index.html (síncrono, necesario antes del slider JS)
  - `<link rel="stylesheet" href="css/news.css" />` añadido al `<head>` de index.html
- **css/news.css — estilos de slider añadidos:**
  - `.news-preview-section`, `.news-preview-sub`, `.news-slider-wrapper`, `.slider-arrow` (hover rosa, disabled opacidad 0.3)
  - `.news-slider-track` (grid 3-col desktop / 1-col mobile)
  - `.news-preview-card` (280px, flex column, border `--news-accent`, hover glow)
  - `.news-preview-header`, `.news-topic-badge`, `.news-date`, `.news-preview-title`, `.news-preview-body`
  - `.slider-dots`, `.dot`, `.dot.active`, `.news-preview-cta`
- **NEWS_TRACKER movido:** de `news.html` a `js/news-data.js` (como comentario JS al final del array)

### 2026-02-25 — Session 14
- **news.html — migración a arquitectura data-driven:**
  - `js/news-data.js` creado con array `NEWS_DATA` (4 artículos: esports/gaming/magic/got)
  - Campos por objeto: id, topic, category, emoji, badgeLabel, title, summary, full[], date, url, page, pageLabel, accent, source, img, tags[]
  - `source`: dominio limpio (ej. `liquipedia.net`, `merca20.com`, `magic.wizards.com`)
  - GOT article: source/url vacíos (contenido original sin fuente externa)
  - `news.html`: `#newsGrid` ahora vacío en HTML; script inline `renderCard()` lo rellena dinámicamente
  - Script cargado ANTES de `news.js` para que los `.news-card` existan cuando news.js inicializa listeners
  - `renderCard()` genera la estructura completa: header, img-wrap, body (title+excerpt+full+read-more), footer (tags+links), `.news-source`
- **css/news.css — `.news-source` añadido:**
  - `font-family: var(--font-secondary)` · `font-size: 14px` · `color: var(--text-dim)` · `text-align: right`
  - Enlace con underline → hover verde `var(--accent-primary)`
- **estado.md — documentada nueva estructura obligatoria:**
  - Sección "Arquitectura news" + "Estructura news card (obligatoria a partir de ahora)" añadidas

### 2026-02-25 — Session 13
- **news.html — 3 noticias nuevas añadidas:**
  - 🏆 ESPORTS: LEC Versus 2026 Finals en Barcelona (27 feb – 1 mar) · Karmine Corp líder · G2/Fnatic séptimo/octavo · First Stand clasificatorio · fuente: Liquipedia
  - 🕹 GAMING: God of War 1, 2 y 3 Remake confirmados en State of Play 2026 · fuente: Merca20
  - ✨ MTG (misc): Magic regresa a Lorwyn 18 años después con Lorwyn Eclipsed (23 ene 2026) · preview 2026 lineup (Hobbit, Marvel, Star Trek) · fuente: Wizards oficial
  - Artículos ordenados: más reciente primero (25/02, 24/02, 23/02, 22/02)
  - Footer con botones >> FUENTE (link externo) + >> IR A SECCIÓN (link interno) en los 3 artículos nuevos
- **news.html — sistema de paginación:**
  - Máximo 9 noticias por página; botones `.page-btn` numerados pixel art
  - Inline `<script>` IIFE con MutationObserver para sincronizar con filtros de news.js
  - `<div class="news-pagination" id="news-pagination">` añadido entre news-grid y fin del container
  - CSS `.news-pagination`, `.page-btn`, `.page-btn.active`, `.page-btn:hover` añadidos en `css/news.css`
- **NEWS_TRACKER inicializado** al final de news.html: `used_topics: ["got","esports","gaming","magic"]`, last_update: 2026-02-25
  - Próxima sesión: topics disponibles → gamedev · warhammer · rol

### 2026-02-22 — Session 12
- **rol.html — portadas de libros RPG:** 3 grids de imágenes añadidos en la sección "Los Sistemas"
  - Stormbringer: grid 3 col · 6 portadas (STORMBRINGER, OCTOGONO, HECHICEROS, EL_LOBO_BLANCO, EL_CANTO_INFERNAL, DEMONIOS_Y_MAGIA) · borde/glow rojo `#cc0000` · `data-rpg="stormbringer"`
  - Cthulhu: grid 2 col · 2 portadas (CTHULHU_1, CTHULHU_2) · borde/glow magenta · `data-rpg="cthulhu"`
  - LOTR/MERP: grid 2 col · 2 portadas (LOTR_1, LOTR_2) · borde/glow verde · `data-rpg="lotr"`
  - Colores por sección via CSS attribute selectors `[data-rpg="X"] .rol-book-wrap` — caption sincronizado con color de sección
  - `css/rol.css` creado y enlazado en `<head>` de rol.html
- **rol.html — hero image:** `mesa_rol.jpg` full-width tras el page header — borde/glow dorado `--accent-warn` · 480px escritorio / 260px móvil · scale(1.02) hover
- **news.html — nueva página completa:**
  - Búsqueda por texto + filtrado por categoría (got/gaming/esports/gamedev/misc)
  - Primera noticia: House of the Dragon T3 (junio 2026, Batalla del Gullet)
  - `css/news.css` + `js/news.js` (IIFE con applyFilters, updateCount, read-more toggle)
  - Link 📰 News propagado al nav de las 12 páginas
  - Card de News añadida al hub "ELIGE TU DESTINO" en index.html
- **Git — repositorio inicializado y publicado:**
  - `git init` + `.gitignore` + `README.md` creados
  - Initial commit: 106 archivos — push a https://github.com/Karlete/freakonia
  - Web live en https://karlete.github.io/freakonia · dominio: https://freakonia.com
- **OG/Twitter meta tags:** 14 meta tags por página añadidos a las 12 páginas HTML
  - og:image → `https://freakonia.com/assets/img/og_image.jpg` (1200×630)
  - Título y descripción únicos por página; og:locale es_ES · twitter:site @SanprietoG
  - index.html: título optimizado 50-60 chars, descripción 110-160 chars
- **commit.md:** creado y completado con el changelog completo de sesión 12

### 2026-02-21 — Session 11
- **RENOMBRADO WEB: "SanprietoThrone" → "FREAKONIA"** en los 11 archivos HTML
  - Sustituidas: "SANPRIETO THRONE" → "FREAKONIA" · "Sanprieto Throne" → "Freakonia" · "SanprietoThrone" → "Freakonia"
  - Afecta a: `<title>`, `.nav-brand`, footer copyright, trademark legal, meta descriptions
  - NO tocados: @SanprietoG · @sanprieto · sanprieto.itch.io · URLs externas con "sanprieto"
  - ⚠️ Carpeta física `D:\Dev\SanprietoThrone` pendiente de renombrar a `Freakonia` manualmente
- **magic.html:** 5 imágenes `.magic-section-img-wrap` añadidas, una por sección (azul/artefactos/doradas/verde/negro)
  - `css/magic.css` creado con estilos `.magic-section-img-wrap` + `.magic-section-img` + media query
  - Enlace `<link rel="stylesheet" href="css/magic.css">` añadido en `<head>`
- **index.html — fix hero-title:** título "FREAKONIA" se partía en "FREAK / ONIA"
  - Causa real: `.hero-title .line-accent { display: block }` — cambiado a `display: inline`
  - Añadido `white-space: nowrap` en `.hero-title`
  - Media query `≤768px` añadida en el bloque responsive existente: `white-space: normal` + `font-size: clamp(0.9rem, 6vw, 1.4rem)`
- **index.html — banner "ELIGE TU DESTINO":** `.destino-banner-wrap` con `freakonia_background.png`
  - Insertado después del `<h2>` y antes del grid `.nav-hub`
  - CSS `.destino-banner-wrap` / `.destino-banner-img` añadidos al final de `css/main.css`
  - Borde/glow verde en reposo → magenta en hover · `scale(1.01)` · `height: auto`

### 2026-02-20 — Session 10
- nba.html: La Taberna del Boxscore movida a PRIMERA sección de contenido (antes en posición 7)
- nba.html: imagen `la_taberna_del_boxscore.jpg` añadida en `.channel-card` con overlay oscuro + botón ▶ VER CANAL
  - `.taberna-img-link` enlaza a YouTube · `.taberna-img-wrap` borde verde → hover magenta · scale(1.03)
- nba.html: quick-nav reordenado — `#canal` en primera posición
- index.html: card Java (☕) añadida al nav-hub grid en posición 9 (antes de Social Hub)
  - `data-i18n="hub.java"` — traducciones ES: "Desarrollo profesional, JavaDevBible y más" / EN: "Professional dev, JavaDevBible & more"
- warhammer.html: 3 imágenes de sección añadidas — una por sección, color heredado del h2 de cada sección:
  - `.whf-img-ediciones` → borde/glow `#ffcc00` (var(--accent-warn)), hover `#ffe066`
  - `.whf-img-endtimes` → borde/glow `#990000` (var(--wh-red)), hover `#cc0000`
  - `.whf-img-oldworld` → borde/glow `#00bfff` (var(--accent-tertiary)), hover `#66d9ff`
  - Archivos: `warhammer_partida_ediciones.jpg` · `warhammer_partida_endtimes.jpg` · `warhammer_partida_oldworld.jpg`
- gamedev.html: Unity hero image añadida entre HR post-stats y SECCIÓN 0
  - `assets/img/unity.jpg` · `.gamedev-hero-img-wrap` · `height: auto` (sin recorte) · overlay label verde/magenta
  - margin-top ajustado a 3rem para no solapar pixel-divider
- estado.md: actualizado sesión 10

### 2026-02-20 — Session 9
- java.html: creado desde cero — página Java Dev con 4 secciones + `css/java.css` separado
- java.html: acento azul eléctrico (`--accent-tertiary`) para header + timeline; teal `#198395` para JavaDevBible
- java.html: stat-box vertical centering fix (flexbox override en java.css scoped a `.page-header-java`)
- java.html: `.java-timeline` vertical con 9 hitos históricos 1991→HOY, años en dorado
- java.html: `.javadevbible-spotlight` — paleta teal completa reemplazando el dorado original
  - `.section-label.teal` nueva variante; h2 inline style cambiado a `#198395`
  - `.javadevbible-section` wrapper class para override del `::before` (▶ → `#1eb8d0`)
  - `.btn-teal` nuevo en java.css; `.jdb-screenshot` imagen del proyecto con borde teal
- java.html: nav + footer con enlace ☕ Java propagado a TODAS las páginas existentes (11 archivos)
- warhammer.html: 16 `.army-img-container` añadidos en todas las `.army-card`
  - `data-army="SLUG"` en cada container para CSS overrides individuales de `object-position`
  - height 200px · object-fit cover · responsive 150px a ≤768px
- warhammer.html: 3 archivos renombrados en `assets/img/` (condes_vampiros→vampiro, Reyes→reyes, elfos _oscuros→elfos_oscuros)
- warhammer.html: galería `.whf-gallery` en `.personal-story` — 2 imágenes de la 5ª edición lado a lado
  - `warhammer_caja_quinta_edicion.jpg` + `miniaturas_caja.jpg` · 320px · borde dorado hover magenta
- estado.md: actualizado sesión 9

### 2026-02-19 — Session 8
- social.html: creado desde cero — hub de todas las plataformas de Karlete
- social.html: acento verde dominante, cada plataforma con --platform-color inline propio
- social.html: 4 .platform-hub (YT/X/itch/Twitch) + 1 .contact-hub (email) + quick-links grid
- social.html: itch.io — mini-game-row con Samurai Kitchen y Stars Lander
- social.html: Twitch — .teaser-box con primer directo anunciado (FFVII mods + retradución)
- social.html: quick-links grid 5 columnas con todas las URLs
- social.html: status badges: status-live (X, itch) · status-wip (YouTube) · status-soon (Twitch)
- estado.md: Phase 2 marcado como COMPLETO — todas las páginas construidas
- MEMORY.md pendiente de actualizar

### 2026-02-19 — Session 7
- nba.html: creado desde cero — página nueva no planificada originalmente
- nba.html: acento dorado (--accent-warn) dominante + magenta para Kobe + verde para LeBron/canal
- nba.html: 9 secciones — origen, Kobe tribute, LeBron, Slam Dunk 2016, NBA Live, All-Star, canal YT, fantasy, hoy
- nba.html: .player-tribute grid 2-col con stats reales de Kobe (81pts, 5 anillos, etc.) y LeBron (40k pts, etc.)
- nba.html: .dunk-event — LaVine vs Gordon Toronto 2016 con .dunk-verdict y grid 2-col
- nba.html: .channel-card — La Taberna del Boxscore con enlace real a YouTube
- nba.html: .fantasy-card con .fantasy-table humorístico + barra 3% "sin anillo desde 2011"
- nba.html: nav incluye enlace propio activo + todas páginas existentes + social/nba en footer
- Enlace 🏀 NBA propagado al nav de las 8 páginas existentes (index, gamedev, gaming, esports, got, warhammer, magic, rol)
- estado.md actualizado con nba.html + nav actualizado en sección de reglas
- MEMORY.md pendiente de actualizar

### 2026-02-19 — Session 6
- rol.html: creado desde cero — JOC Internacional, 4 sistemas (MERP, Stormbringer, Cthulhu, SW d6)
- rol.html: acento dorado (--accent-warn) + azul (--accent-tertiary) + rojo caos (#cc0000) para Stormbringer
- rol.html: sección defensa del rol en los 90 — texto personal de Karlete + quote card
- rol.html: publisher-card JOC Internacional con stats + bloque tragedia del JCC SdlA 1995
- rol.html: 3 collection-item cards (Stormbringer completo · Cthulhu básico · MERP básico) con owned-badge
- rol.html: 4 bloques .rpg-system — MERP (verde) · Stormbringer (rojo) · Cthulhu (magenta) · SW d6 (azul)
- rol.html: cada sistema con intro + nota personal + 6 .supplement-card en grid-3
- rol.html: sección cierre — narrativa emotiva + quote-card-final + CTA buttons
- rol.html: nuevos componentes: .publisher-card, .collection-item, .owned-badge, .rpg-system, .supplement-card, .closing-narrative, .quote-card-final
- estado.md actualizado (sesión 6)
- MEMORY.md auto-memory actualizado

### 2026-02-19 — Session 5
- magic.html: creado desde cero — era 1993–1997, Alpha hasta Tempest
- magic.html: acento magenta (`--accent-secondary`) dominante + dorado para rarezas/destacados
- magic.html: sección pilares — 4 `.mtg-pillar` + 5 `.mana-color-box` visuales (un color por maná)
- magic.html: historia personal — Cánovas 1996, Deathmatch, clan MDK, viernes de torneo
- magic.html: 19 sets en 4 eras — Ice Age con badge `⭐ MI ENTRADA`, Tempest con `🏁 ÚLTIMA ERA`
- magic.html: sección colección — barra rosa + quote de nostalgia + CTA a otros fandoms
- magic.html: nuevos componentes inline: `.mtg-pillar`, `.edition-card`, `.mana-color-box`, `.collection-box`, `.set-badge`
- estado.md actualizado completamente (sesión 5)
- MEMORY.md auto-memory actualizado

### 2026-02-18 — Session 4
- got.html: creado desde cero — 2 secciones (libros ASOIAF + serie HBO)
- got.html: acento rojo carmesí (#cc2200) con gradiente rojo/dorado en header
- got.html: sección 1 — autor bio (GRRM), 6 book cards (libros I-V + TWoW), 4 lore boxes
- got.html: sección 2 — stats, T1–T6 era dorada, T7–T8 caída, spinoffs HotD + KotSK
- got.html: componentes propios: .book-card, .tv-card, .author-bio, .key-moment, .lore-box
- got.html: hover color via CSS var --book-color / --tv-accent por card
- warhammer.html: creado desde cero — SOLO Warhammer Fantasy Battle (no 40K, no AoS)
- warhammer.html: acento dorado (--accent-warn) + rojo oscuro (#990000) para Caos/End Times
- warhammer.html: sección personal — historia de 12 años, 5ª ed, Bretonia vs Lizardmen, el amigo
- warhammer.html: 4 lore boxes sobre Bretonia (esencia, unidades, Código, Dama del Lago)
- warhammer.html: ediciones 1ª-8ª + End Times (5 crónicas) + The Old World 2024
- warhammer.html: grid completo de 16 ejércitos (Orden/Caos/No Muertos) con .army-card
- warhammer.html: Bretonia destacada como .army-card.my-army con badge especial
- warhammer.html: nuevos componentes: .edition-card, .army-card, .personal-story, .endtimes-box, .chronicle-card
- estado.md y MEMORY.md actualizados

### 2026-02-17 — Session 3
- gaming.html: creado desde cero — 5 plataformas (SMS2, GB, SNES, PS1, PC)
- gaming.html: memory cards por juego con hover color via `--memory-color` CSS var
- gaming.html: PC dividida en dos sub-eras (ciber Cáceres / PC en casa)
- esports.html: creado desde cero — LoL exclusivo, 14 temporadas S1–S14
- esports.html: 3 eras con color propio (verde/dorado/azul) en títulos, season numbers y hover
- esports.html: hover color via `--card-accent` CSS var por card
- esports.html: rank display Bromuro de Sodio III con barras humorísticas
- MEMORY.md creado en directorio auto-memory

### 2026-02-16 — Session 2
- index.html: idioma por defecto cambiado a español, botón EN/ES con i18n completo
- index.html: itch.io links corregidos a URLs reales de sanprieto.itch.io
- index.html: screenshots reales integrados en las cards de juegos terminados
- index.html: about me ampliado con historia gaming completa + Death Match Cáceres
- index.html: about me ampliado con sección fandom (GoT s1-6 only, Warhammer, Rol, MtG)
- index.html: nav hub + navbar con nueva sección ROL (🎲)
- index.html: "Horas Perdidas" renombrado a "Horas Épicas"
- index.html: LoL rank actualizado a "BROMURO DE SODIO III"
- gamedev.html: creado desde cero — 3 secciones (origen, publicados, WIP)
- gamedev.html: AlexDev añadido a la lista de creadores de tutoriales

### 2026-02-15 — Session 1
- Phase 1 completo: scaffolding, design system CSS, JS utils, index.html base

---

## Estado Final — WEB TERMINADA Y PUBLICADA

**Freakonia está completa y en producción desde el 22 de febrero de 2026.**

- 🌐 **URL:** https://freakonia.com
- 📦 **Repo:** https://github.com/Karlete/freakonia
- ⚙️ **Deploy:** GitHub Pages (rama `main`, raíz `/`)
- 📄 **Páginas:** 12 páginas HTML completas (index, gamedev, gaming, esports, got, warhammer, magic, rol, nba, social, java, news)

A partir de la sesión 12, el trabajo en Freakonia pasa a **modo mantenimiento mínimo**:
- Corrección de bugs y pequeños ajustes de diseño
- Nuevos artículos en la sección `news.html`
- Añadir imágenes nuevas a cualquier sección existente
- No se planean nuevas páginas ni cambios estructurales mayores
