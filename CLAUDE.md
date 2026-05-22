# CLAUDE.md — Project Context

## INICIO DE SESIÓN

Leer `estado.md` SOLO si la tarea implica construir o modificar páginas HTML/CSS/JS.
Si el prompt menciona `task.md` o noticias: ignorar este paso e ir directamente al flujo correspondiente.

## Project

Personal static fandom & gamedev website with pixel art aesthetic.
Owner: Karlete | Stack: HTML5, CSS3, Vanilla JS | Host: GitHub Pages

## Design System

- Primary font: "Press Start 2P" (Google Fonts)
- Secondary font: "VT323" for body text (more readable at smaller sizes)
- Color palette:
  - Background: #0a0a0a (near black)
  - Primary accent: #00ff41 (matrix green)
  - Secondary accent: #ff00ff (magenta/neon)
  - Tertiary: #00bfff (electric blue)
  - Text: #e0e0e0
- Effects: CRT scanlines overlay, pixel borders (4px solid),
  box-shadow neon glow on hover
- No smooth border-radius — everything squared or pixel-stepped

## Pages & Sections

### index.html — Home
- Pixel art hero section with animated character sprite (CSS animated)
- Navigation hub with pixel art icons per section
- "Qué se cuece" slider — reads from ARTICLES_INDEX (js/articles-index.js)

### gamedev.html — Game Dev
- Grid of game cards: title, screenshot, description, itch.io link, genre tags
- Section "In Development" vs "Released"
- Currently working on: "Fallen Valkyrie" (2D Metroidvania in Unity)

### gaming.html — Gaming History
- Organized by console: Master System 2, Game Boy, SNES, PS1, PC

### news.html — News listing
- Renders cards from ARTICLES_INDEX, links to articles/[id].html
- Filters by topic, search, pagination

### articles/[id].html — Individual article pages (static HTML)
- One file per article, fully self-contained

### got.html, warhammer.html, magic.html, esports.html, nba.html, rol.html, gamedev.html, social.html, java.html, fallen-valkyrie.html

## Development Notes
- No external dependencies except Google Fonts
- GitHub Pages compatible (no server-side code)
- Nav is duplicated HTML across all pages (no build tool)

## Key Conventions
- CSS custom properties for all colors/fonts
- Pixel borders: `border: 4px solid var(--accent-primary)`
- Hover effects: neon glow via box-shadow
- No border-radius anywhere

---

## FLUJO DE NOTICIAS — SISTEMA ESTÁTICO

**Las noticias llegan completamente escritas en `task.md`.**
**Añadir una noticia = DOS operaciones. Nada más.**

### OPERACIÓN 1 — Crear el fichero HTML del artículo

Crear `articles/[id].html` copiando la estructura exacta de cualquier artículo existente.
Para ver un ejemplo: `head -60 articles/noticia-lec-spring-2026-semana5.html`

Estructura del fichero (adaptar datos del artículo):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <meta name="description" content="[SUMMARY — max 155 chars]"/>
  <title>[TITLE] — Freakonia</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="../css/main.css"/>
  <link rel="stylesheet" href="../css/components.css"/>
  <link rel="stylesheet" href="../css/animations.css"/>
  <link rel="stylesheet" href="../css/news.css"/>
</head>
<body>
[NAV — copy exact nav from any existing article]
<div class="page-header">
  <div class="container">
    <p class="page-header-pre"><a href="../news.html" style="color:inherit;text-decoration:none;">← NOTICIAS</a></p>
    <h1 class="page-header-title" style="font-size:clamp(0.6rem,2vw,1rem);line-height:1.6;">[TITLE]</h1>
  </div>
</div>
<main>
  <div class="container" style="max-width:860px;">
    <article style="margin:var(--sp-6) 0;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--sp-4);flex-wrap:wrap;gap:var(--sp-2);">
        <span class="news-card-cat news-cat--[TOPIC]" style="border-color:[ACCENT];color:[ACCENT];">[EMOJI] [BADGELABEL]</span>
        <span class="news-card-date">📅 [DD · MES · YYYY]</span>
      </div>
      <img src="../[IMG]" alt="[TITLE]" style="width:100%;display:block;margin-bottom:var(--sp-5);border:4px solid [ACCENT];">
      <div style="font-family:var(--font-secondary);font-size:1.25rem;line-height:1.8;color:var(--text-muted);margin-bottom:var(--sp-5);padding:var(--sp-4);border-left:4px solid [ACCENT];">
        [SUMMARY]
      </div>
      <div style="font-family:var(--font-secondary);font-size:1.15rem;line-height:1.9;">
        <p class="article-paragraph">[PARAGRAPH 1]</p>
        <p class="article-paragraph">[PARAGRAPH 2]</p>
        <p class="article-paragraph">[PARAGRAPH 3]</p>
        <p class="article-paragraph">[PARAGRAPH 4]</p>
      </div>
      <div style="margin-top:var(--sp-6);padding-top:var(--sp-4);border-top:2px solid var(--border-color);">
        <div class="news-card-tags" style="margin-bottom:var(--sp-4);">
          <span class="tag">[TAG1]</span><span class="tag">[TAG2]</span>
        </div>
        <div style="display:flex;gap:var(--sp-3);flex-wrap:wrap;">
          <a href="[URL]" target="_blank" rel="noopener" class="btn">>> FUENTE: [SOURCE]</a>
          <a href="../[PAGE]" class="btn btn-pink">>> IR A [PAGELABEL]</a>
          <a href="../news.html" class="btn btn-small" style="border-color:var(--text-dim);color:var(--text-dim);">← TODAS LAS NOTICIAS</a>
        </div>
      </div>
    </article>
  </div>
</main>
[FOOTER — copy exact footer from any existing article]
<script src="../js/main.js"></script>
</body>
</html>
```

### OPERACIÓN 2 — Añadir una línea al índice

In `js/articles-index.js`, insert ONE line at the very TOP of the `ARTICLES_INDEX` array:

```js
{ id:'[ID]', topic:'[TOPIC]', category:'[TOPIC]', emoji:'[EMOJI]', badgeLabel:'[BADGELABEL]', title:'[TITLE]', summary:'[SUMMARY]', date:'[DD/MM/YYYY]', img:'assets/img/news/[IMG]', url:'[URL]', page:'[PAGE]', pageLabel:'[PAGELABEL]', accent:'[ACCENT]', source:'[SOURCE]', tags:['TAG1','TAG2'] },
```

### PROHIBIDO

- Leer `js/articles-index.js` entero antes de insertar — sólo abrir y añadir al top.
- Tocar `news.html`, `index.html`, `js/news.js`, cualquier `.css`.
- Editar artículos existentes en `articles/`.

### Quick reference — topics

| topic     | accent   | page           | pageLabel | badgeLabel | emoji | fallback img         |
|-----------|----------|----------------|-----------|------------|-------|----------------------|
| got       | #cc2200  | got.html       | GoT       | GOT        | 🐉    | got_generic.webp     |
| esports   | #C89B3C  | esports.html   | Esports   | ESPORTS    | 🏆    | esports_generic.webp |
| gaming    | #00bfff  | gaming.html    | Gaming    | GAMING     | 🕹️   | gaming_generic.webp  |
| gamedev   | #00ff41  | gamedev.html   | GameDev   | GAMEDEV    | 🎮    | gamedev_generic.webp |
| magic     | #9933ff  | magic.html     | MTG       | MTG        | ✨    | magic_generic.webp   |
| warhammer | #8B0000  | warhammer.html | Warhammer | WARHAMMER  | ⚔️   | the_old_world.jpg    |
| rol       | #cc9900  | rol.html       | Rol       | ROL        | 🎲    | rol_generic.jpg      |
| nba       | #FF8C00  | nba.html       | NBA       | NBA        | 🏀    | nba_ball.webp        |

---

## REGLA GENERAL — PARA TAREAS DE DESARROLLO WEB

Si la tarea implica construir o modificar HTML/CSS/JS (NO noticias):
leer el código existente equivalente antes de escribir nada nuevo.
No inferir. No inventar. Copiar el patrón existente y aplicar los datos nuevos.

---

## FLUJO DE FREAKOCHAPAS

Una Freakochapa es un artículo de opinión de Karlete. Sigue el mismo flujo
que una noticia estándar (crear HTML + añadir línea al índice) con estos campos distintos:

| Campo           | Valor correcto                   |
|-----------------|----------------------------------|
| `badgeLabel`    | `'FREAKOCHAPA'` siempre          |
| `isFreakochapa` | `true`                           |
| `freakcoin`     | `{ score: N, verdict: '...' }`   |
| `source`        | `'freakonia.com'`                |
| `url`           | `''` (vacío)                     |

En el HTML del artículo, omitir el botón de fuente si `url` está vacío.

At the end of each session your code will be revised by ChatGPT and Grok.