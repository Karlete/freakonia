# CLAUDE.md — Project Context

## INICIO DE SESIÓN

Leer `estado.md` SOLO si la tarea implica construir o modificar páginas HTML/CSS/JS.
Si el prompt menciona `task.md`, noticias o freakochapas: ignorar este paso e ir directamente al flujo correspondiente.

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
- "About me" short blurb
- Pixel art decorative elements (stars, coins, etc.)

### gamedev.html — Game Dev

- Grid of game cards, each with: title, screenshot, description, itch.io link, genre tags
- Section for "In Development" vs "Released"
- Currently working on: "Fallen Valkyrie" (2D Metroidvania in Unity)

### gaming.html — Gaming History

- Organized by console: Master System 2, Game Boy, SNES, PS1, PC
- PC section includes LoL competitive and DBD — link to esports.html

### social.html — Social Hub

- YouTube: video cards with thumbnails (https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg)
- Twitter/X: embed timeline or manual tweet cards

### got.html — Game of Thrones

- Sections: Books, TV Series, Current News/Updates
- Cards for houses, characters, theories

### warhammer.html — Warhammer Fantasy (The Old World)

### magic.html — Magic: The Gathering

### esports.html — Esports & LoL competitive

## Development Notes

- All pages share the same nav (duplicated HTML, no build tool)
- No external dependencies except Google Fonts and optional Twitter/YouTube embeds
- GitHub Pages compatible (no server-side code)

## Key Conventions

- CSS custom properties for all colors/fonts
- Pixel borders: `border: 4px solid var(--accent-primary)`
- Hover effects: neon glow via box-shadow
- All buttons: pixel art style with :active press effect
- No border-radius anywhere

---

## FLUJO DE NOTICIAS — INSERCIÓN DESDE task.md

**Las noticias llegan completamente escritas en `task.md` con números, IDs y todos los campos.**
**NO leer news-data.js. NO ejecutar tail. NO ejecutar grep. NO planificar. NO explicar.**

### Los únicos 3 pasos permitidos:

1. Leer `task.md`.
2. Abrir `js/news-data.js` e insertar los artículos al TOP del array, antes del primer `// ── NOTICIA`.
3. Actualizar `last_update` y `next_available` en el bloque NEWS_TRACKER al final del fichero.

### PROHIBIDO en este flujo:

- Leer `js/news-data.js` de ninguna forma (ni tail, ni grep, ni head, ni open completo).
- Leer `estado.md`.
- Tocar `index.html`, `news.html`, `article.html`, `js/news.js`, cualquier `.css`.
- Editar artículos existentes.
- Explicar lo que vas a hacer. Solo hacer.

### Quick reference — accents, pages, fallback images

| topic     | accent  | page           | pageLabel | badgeLabel | emoji | fallback img         |
| --------- | ------- | -------------- | --------- | ---------- | ----- | -------------------- |
| got       | #cc2200 | got.html       | GoT       | GOT        | 🐉    | got_generic.webp     |
| esports   | #C89B3C | esports.html   | Esports   | ESPORTS    | 🏆    | esports_generic.webp |
| gaming    | #00bfff | gaming.html    | Gaming    | GAMING     | 🕹️    | gaming_generic.webp  |
| gamedev   | #00ff41 | gamedev.html   | GameDev   | GAMEDEV    | 🎮    | gamedev_generic.webp |
| magic     | #9933ff | magic.html     | MTG       | MTG        | ✨    | magic_generic.webp   |
| warhammer | #8B0000 | warhammer.html | Warhammer | WARHAMMER  | ⚔️    | the_old_world.jpg    |
| rol       | #cc9900 | rol.html       | Rol       | ROL        | 🎲    | rol_generic.jpg      |
| nba       | #FF8C00 | nba.html       | NBA       | NBA        | 🏀    | nba_ball.webp        |

---

## REGLA GENERAL — PARA TAREAS DE DESARROLLO WEB

Si la tarea implica construir o modificar HTML/CSS/JS (NO noticias):
leer el código existente equivalente antes de escribir nada nuevo.
No inferir. No inventar. Copiar el patrón existente y aplicar los datos nuevos.

---

## FLUJO DE FREAKOCHAPAS

Una Freakochapa es un artículo de opinión personal de Karlete. Campos distintos a las noticias:

| Campo           | Valor correcto                 |
| --------------- | ------------------------------ |
| `badgeLabel`    | `'FREAKOCHAPA'` siempre        |
| `isFreakochapa` | `true`                         |
| `freakcoin`     | `{ score: N, verdict: '...' }` |
| `source`        | `'freakonia.com'`              |
| `url`           | `''` (vacío)                   |
| `date`          | `'DD/MM/YYYY'`                 |

Antes de insertar: grep -n "isFreakochapa" js/news-data.js y copiar estructura exacta.
Después de insertar: verificar sintaxis JS con node.

At the end of each session your code will be revised by ChatGPT and Grok.
