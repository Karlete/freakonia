# CLAUDE.md — Project Context

## INICIO DE SESIÓN

Leer `estado.md` SOLO si la tarea implica construir o modificar páginas HTML/CSS/JS.
Si el prompt menciona `task.md` o noticias: saltar directamente al FLUJO DE NOTICIAS.

## Project

Personal static fandom & gamedev website with pixel art aesthetic.
Owner: Karlete | Stack: HTML5, CSS3, Vanilla JS | Host: GitHub Pages

## Design System

- Primary font: "Press Start 2P" (Google Fonts)
- Secondary font: "VT323" for body text
- Background: #0a0a0a | Primary accent: #00ff41 | Secondary: #ff00ff | Tertiary: #00bfff | Text: #e0e0e0
- CRT scanlines overlay, pixel borders (4px solid), neon glow on hover
- NO border-radius anywhere — everything squared

## Key Conventions
- CSS custom properties for all colors/fonts
- Pixel borders: `border: 4px solid var(--accent-primary)`
- Hover: neon glow via box-shadow

---

## FLUJO DE NOTICIAS — SISTEMA ESTÁTICO

**Las noticias llegan completamente escritas en `task.md`. NO leer ningún fichero existente.**
**Añadir una noticia = DOS operaciones únicamente.**

### OPERACIÓN 1 — Crear `articles/[ID].html`

**NO leer ningún artículo existente como plantilla. Usar EXACTAMENTE esta plantilla:**

Use article-template.html in the project root as the HTML template.

**Notas de la plantilla:**
- `[DD · MES · YYYY]` → formato `26 · MAY · 2026` (MES en español en mayúsculas: ENE FEB MAR ABR MAY JUN JUL AGO SEP OCT NOV DIC)
- `[TAGS_HTML]` → cada tag como `<span class="tag">TAGNAME</span>`
- `[SOURCE_BTN]` → si hay URL: `<a href="[URL]" target="_blank" rel="noopener" class="btn">&gt;&gt; FUENTE: [SOURCE]</a>` — si no hay URL, omitir
- Si el artículo tiene menos de 4 párrafos, usar solo los que haya

### OPERACIÓN 2 — Añadir UNA línea al TOP de `js/articles-index.js`

```js
{ id:'[ID]', topic:'[TOPIC]', category:'[TOPIC]', emoji:'[EMOJI]', badgeLabel:'[BADGELABEL]', title:'[TITLE]', summary:'[SUMMARY]', date:'[DD/MM/YYYY]', img:'assets/img/news/[IMG]', url:'[URL]', page:'[PAGE]', pageLabel:'[PAGELABEL]', accent:'[ACCENT]', source:'[SOURCE]', tags:['TAG1','TAG2'] },
```

### PROHIBIDO

- Leer cualquier artículo existente en `articles/` — la plantilla ya está arriba
- Leer `js/articles-index.js` entero — solo abrir y añadir al top
- Tocar `news.html`, `index.html`, `js/news.js`, cualquier `.css`
- Usar PowerShell para escribir ficheros — Node.js o escritura directa únicamente

### Quick reference — topics

| topic     | accent   | page           | pageLabel | badgeLabel | emoji | img fallback         |
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

## REGLA GENERAL — TAREAS DE DESARROLLO WEB

Si la tarea implica construir o modificar HTML/CSS/JS (NO noticias):
leer el código existente equivalente antes de escribir nada nuevo.
No inferir. No inventar. Copiar el patrón existente y aplicar los datos nuevos.

---

## FLUJO DE FREAKOCHAPAS

Una Freakochapa es artículo de opinión de Karlete. Mismo flujo que noticias (HTML + línea en index) con estos campos distintos en articles-index.js:

| Campo           | Valor                            |
|-----------------|----------------------------------|
| `badgeLabel`    | `'FREAKOCHAPA'` siempre          |
| `isFreakochapa` | `true`                           |
| `freakcoin`     | `{ score: N, verdict: '...' }`   |
| `source`        | `'freakonia.com'`                |
| `url`           | `''` (vacío — omitir SOURCE_BTN) |

At the end of each session your code will be revised by ChatGPT and Grok.