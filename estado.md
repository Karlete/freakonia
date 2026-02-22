# estado.md — Project State Tracker

Last updated: 2026-02-21 (sesión 11)

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
- `nba.html` → `.player-tribute`, `.player-stats`, `.player-stat-row`, `.player-badge`, `.dunk-event`, `.dunk-contender`, `.dunk-verdict`, `.dunk-grid`, `.channel-card`, `.taberna-img-link`, `.taberna-img-wrap`, `.taberna-img`, `.taberna-img-overlay`, `.taberna-play-btn`, `.fantasy-card`, `.fantasy-table`, `.memory-card`, `.era-stats`, `.era-stat-box`, `.lore-box`, `.quote-card`, `.section-quicknav`
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
<li><a href="gamedev.html"   class="nav-link">🎮 GameDev</a></li>
<li><a href="gaming.html"    class="nav-link">🕹 Gaming</a></li>
<li><a href="esports.html"   class="nav-link">🏆 Esports</a></li>
<li><a href="got.html"       class="nav-link">🐉 GoT</a></li>
<li><a href="warhammer.html" class="nav-link">⚙ Warhammer</a></li>
<li><a href="magic.html"     class="nav-link">✨ MtG</a></li>
<li><a href="rol.html"       class="nav-link">🎲 Rol</a></li>
<li><a href="nba.html"       class="nav-link">🏀 NBA</a></li>
<li><a href="java.html"      class="nav-link">☕ Java</a></li>
<li><a href="social.html"    class="nav-link">📡 Social</a></li>
```
> Añadir clase `active` al link de la página actual.
> ✅ Nav y footer actualizados en todas las páginas (NBA: sesión 7, Java: sesión 9).

---

## Current Phase
🏁 Phase 2: COMPLETO — index ✅ · gamedev ✅ · gaming ✅ · esports ✅ · got ✅ · warhammer ✅ · magic ✅ · rol ✅ · nba ✅ · social ✅ · java ✅

**Todas las páginas construidas.** Siguiente fase: deploy a GitHub Pages.
**Sesión 11 (2026-02-21):** renombrado de marca "SanprietoThrone" → "FREAKONIA" en los 11 HTML + imágenes de sección en magic.html + fix hero-title + banner destino en index.

⚠️ PENDIENTE: renombrar carpeta física `D:\Dev\SanprietoThrone` → `D:\Dev\Freakonia` (hacerlo manualmente, la sesión la tenía bloqueada).

---

## Completed ✅

### Foundation
- [x] Project structure created
- [x] CLAUDE.md created
- [x] estado.md created
- [x] `assets/img/`, `assets/icons/`, `assets/fonts/` directories

### CSS Design System (css/)
- [x] `css/main.css` — Variables, reset, tipografía, layout helpers, section-title, pixel-divider, tags, status-badges, page-header, scroll-reveal base, responsive breakpoints
- [x] `css/components.css` — Navbar (desktop + mobile), buttons (green/pink/blue/gold/small/block), cards, game-cards, video-cards, tweet-cards, HP/XP bars, platform-headers, footer, nav-hub, stat-boxes, alerts
- [x] `css/animations.css` — 15+ keyframes, utility classes, glitch text, pixel particles, cursor blink, pixel loader, stagger delays

### JS Utilities (js/)
- [x] `js/main.js` — Nav active state, mobile toggle, CRT flicker, pixel cursor trail, scroll-reveal (IntersectionObserver), typeWriter util, XP/HP bar animation, click particle burst
- [x] `js/youtube.js` — `buildVideoCard()` + `renderVideoCards()`, YOUTUBE_VIDEOS array ready to fill
- [x] `js/twitter.js` — Twitter embed (dark theme) + manual tweet card fallback, TWITTER_HANDLE placeholder

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
- **Sección "Proyecto Actual"** (Fallen Valkyrie spotlight):
  - Barra progreso general 35% + Diseño 60% + Programación 40% + Arte 25%
  - Feature checklist (✔ done / ▶ pending)
  - Info sidebar: motor, género, plataforma, lanzamiento TBD
  - Escalable: añadir más WIP cards debajo siguiendo comentario HTML

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

### ✅ nba.html — COMPLETO + MEJORADO (sesión 10) — nav propagado a todas las páginas ✅
- Page header: gradiente dorado/magenta, acento `--accent-warn` dominante
- Stats row: `2000` · `KOBE` · `14 AÑOS` (fantasy) · `0` anillos · `2016` (Slam Dunk)
- Quick-nav: 9 anclajes — `#canal` en primera posición (sesión 10)
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

### ✅ rol.html — COMPLETO (sesión 2026-02-19)
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
- Karlete: jugó rol de los 14 a los 18 años; conserva Stormbringer completo + Cthulhu básico + MERP básico
- Componentes: `.publisher-card`, `.publisher-tragedy`, `.publisher-stats`, `.collection-item`, `.owned-badge`, `.rpg-system`, `.supplement-card`, `.closing-narrative`, `.quote-card-final`

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
- [ ] Deploy a GitHub Pages
- [ ] Considerar añadir i18n a gamedev.html y resto de páginas

---

## Session Notes

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
