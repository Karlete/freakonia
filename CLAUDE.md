# CLAUDE.md — Project Context

## INICIO DE SESIÓN — OBLIGATORIO

**Primera acción de cada sesión**: leer `estado.md` completo antes de hacer nada.
`estado.md` es la fuente de verdad del estado actual del proyecto.

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

- Grid of game cards, each with:
  - Game title (pixel font)
  - Screenshot/thumbnail
  - Short description
  - itch.io link button (pixel styled)
  - Genre tags
- Games in development are Unity 2D (Metroidvania style)
- Section for "In Development" vs "Released"
- Currently working on: "Fallen Valkyrie" (2D Metroidvania)

### gaming.html — Gaming History

- Organized by console/platform with pixel art console icons
- Consoles in order: Master System 2, Game Boy, Super Nintendo,
  PlayStation 1, PC (includes League of Legends, Dead by Daylight)
- Each console section has: era banner, list of memorable games,
  personal memories/review cards
- PC section includes esports content (LoL competitive) and
  survival horror (DBD) — link to esports.html for deeper content

### social.html — Social Hub

- YouTube section: embed latest videos or manual video cards with
  thumbnails (use https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg)
- Twitter/X section: Twitter embed timeline or manual tweet cards
- Each video card shows: thumbnail, title, link to video
- No API keys needed — use YouTube's public thumbnail URL pattern

### got.html — Game of Thrones

- Sections: Books (A Song of Ice and Fire), TV Series, Current News/Updates
- Cards for houses, characters, theories
- "News & Updates" section for ongoing developments (The Winds of Winter,
  spinoffs, etc.)
- Placeholder structure ready for regular content updates

### warhammer.html — Warhammer (Placeholder)

- Basic structure with intro blurb
- Sections: Warhammer 40K, Age of Sigmar, Painting Gallery
- Ready for content

### magic.html — Magic: The Gathering (Placeholder)

- Basic structure with intro blurb
- Sections: Favorite Decks, Favorite Cards, Sets & Collections
- Ready for content

### esports.html — Esports & Gaming News

- League of Legends competitive: patch notes discussion, LEC/worlds coverage
- Dead by Daylight: survivor/killer updates, patch highlights
- Card-based news layout, easy to add new entries manually

## Development Notes

- All pages share the same nav component (duplicated HTML for now,
  no build tool)
- Mobile responsive: pixel aesthetic maintained on mobile
- No external dependencies except Google Fonts and optional
  Twitter/YouTube embeds
- GitHub Pages compatible (no server-side code)

## Key Conventions

- Use CSS custom properties (variables) for all colors/fonts
- Pixel borders: `border: 4px solid var(--accent-primary)`
- Hover effects: neon glow via box-shadow
- All buttons styled as pixel art buttons with :active press effect
- Section headers use pixel art dividers

## FLUJO DE NOTICIAS

**Las noticias llegan YA REDACTADAS en `task.md`. Claude Code NO busca, NO redacta, NO planifica.**
El único trabajo es insertar los artículos en `js/news-data.js` y actualizar el NEWS_TRACKER.

### PASOS — en orden, sin saltarse ninguno

1. **Leer `task.md`** — contiene los artículos listos para insertar.

2. **Obtener el número del último artículo y los IDs existentes:**
   tail -300 js/news-data.js
   grep "id:" js/news-data.js
   Solo estos dos comandos. NO leer `js/news-data.js` entero.

3. **Insertar** todos los artículos al TOP del array `NEWS_DATA`, con su comentario
   `// ── NOTICIA N ──` numerado desde el siguiente al último existente.

4. **Actualizar `NEWS_TRACKER`** al final de `js/news-data.js`:
   - `last_update`: fecha de hoy en YYYY-MM-DD
   - `next_available`: los 3 topics no usados en este batch

5. **Vaciar `task.md`** — dejar el fichero en blanco tras completar la inserción.

### Reglas inamovibles

- Artículos nuevos siempre al **TOP** del array, nunca al final.
- **Nunca** editar artículos existentes.
- **Nunca** tocar `index.html`, `news.html`, `article.html`, `js/news.js` ni ningún CSS.
- Si un `id` del task.md ya existe en el array, avisar a Karlete antes de insertar.

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

## REGLA GENERAL — ANTES DE IMPLEMENTAR CUALQUIER COSA

**Si la tarea que se pide ya se ha hecho antes en este proyecto (mismo componente,
mismo tipo de artículo, mismo patrón), la primera acción OBLIGATORIA es leer el
código existente que ya funciona y replicar su estructura exacta.**

No inferir. No inventar. No usar valores por defecto genéricos.
Leer primero. Copiar el patrón. Aplicar los datos nuevos.

Checklist de "ya se ha hecho antes":
[ ] ¿Existe ya un artículo del mismo tipo en js/news-data.js?
→ Leer ese artículo completo y copiar su estructura campo a campo.
[ ] ¿Existe ya un componente igual en otra página HTML?
→ Copiar el HTML/CSS/JS existente, no recrearlo desde cero.
[ ] ¿Existe ya una función JS que hace lo mismo?
→ Reusar esa función. No escribir una nueva.

Si no lees el código existente primero, producirás errores garantizados
en campos, clases, IDs o lógica que ya estaban resueltos.

---

## FLUJO DE FREAKOCHAPAS — OBLIGATORIO PARA ARTÍCULOS TIPO FREAKOCHAPA

Una **Freakochapa** es un artículo de opinión personal de Karlete.
Su estructura en `js/news-data.js` difiere de las noticias estándar en
campos clave. Violarlos produce bugs visuales y de filtrado.

### PASO 0 — LEER LAS FREAKOCHAPAS EXISTENTES PRIMERO

Antes de insertar una nueva freakochapa, ejecutar:
grep -n "isFreakochapa|FREAKOCHAPA|freakochapa" js/news-data.js

Leer ÍNTEGROS los artículos encontrados. Copiar su estructura exacta.
No usar la estructura de noticias estándar como base.

### Campos obligatorios y sus valores correctos

| Campo           | Valor correcto                   | Error habitual a evitar        |
| --------------- | -------------------------------- | ------------------------------ |
| `badgeLabel`    | `'FREAKOCHAPA'` — siempre        | Poner el topic ('GAMING', etc) |
| `isFreakochapa` | `true`                           | Omitirlo                       |
| `freakcoin`     | `{ score: N, verdict: '...' }`   | Omitirlo                       |
| `source`        | `'freakonia.com'`                | Dejarlo vacío o externo        |
| `url`           | `''` (vacío — es opinión propia) | Poner una URL externa          |
| `date`          | `'DD/MM/YYYY'` — formato exacto  | Usar `'YYYY-MM-DD'`            |

### PASO FINAL — Verificar posición e integridad

Después de insertar, ejecutar estas comprobaciones:

1. `grep "id:" js/news-data.js | head -3`
   → El id de la nueva freakochapa debe aparecer en las 3 primeras líneas.
   → Si no aparece: NO se insertó al TOP del array. Corregir.

2. `grep "badgeLabel" js/news-data.js | head -3`
   → Debe mostrar 'FREAKOCHAPA', no el nombre del topic.

3. `node -e "var s=require('fs').readFileSync('js/news-data.js','utf8'); eval(s)"`
   → Si hay error de sintaxis JS, el artículo no se cargará en ninguna página.
   → Causa más común: apóstrofes sin escapar dentro de strings con comillas simples.
   → Ejemplo del bug: title: 'Abe's Oddysee' → rompe el JS.
   → Corrección: usar comillas dobles para el string: title: "Abe's Oddysee"

### Por qué importa

- `badgeLabel: 'GAMING'` en lugar de `'FREAKOCHAPA'` → el badge muestra el tipo
  incorrecto en news.html y en el slider "Qué se cuece" de index.html.
- Artículo no insertado al TOP → no aparece en el slider (toma solo los 6 más recientes).
- Error de sintaxis JS → NEWS_DATA no carga → ninguna noticia aparece en la web.

At the end of each session your code will be revised by ChatGPT and Grok.
