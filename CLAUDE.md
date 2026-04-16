# CLAUDE.md — Project Context

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

## Fuentes de noticias

Antes de buscar noticias o novedades para cualquier sección del proyecto, leer `news_source.md` y consultar las fuentes de la categoría correspondiente.

## FLUJO DE NOTICIAS — OBLIGATORIO ANTES DE PROPONER O AÑADIR CUALQUIER NOTICIA

Estas reglas se aplican SIEMPRE, sin excepción, antes de redactar o insertar noticias en `js/news-data.js`.

### PASO 1 — Leer el estado actual ANTES de buscar nada

1. Leer `js/news-data.js` completo para conocer:
   - Todos los `id` existentes (evitar duplicados)
   - Los temas (`topic`) ya cubiertos recientemente
   - El bloque `NEWS_TRACKER` al final del fichero:
     - `used_topics` — temas ya usados
     - `last_update` — fecha de la última actualización
     - `next_available` — temas sugeridos para la próxima tanda

2. Leer `news_source.md` para saber qué fuentes consultar por categoría.

### PASO 2 — Buscar noticias respetando estas restricciones

- NO proponer un topic que ya tenga una noticia reciente en el array
  (revisar los últimos 10 artículos del array antes de decidir el topic)
- Para temas con cobertura en curso (LEC, NBA, torneos activos):
  buscar SIEMPRE los resultados más recientes antes de redactar.
  Nunca proponer una noticia de "arranque" o "presentación" de algo
  que ya lleva semanas en curso.
- Los artículos `full[]` deben ser texto original — nunca copiar ni parafrasear
  demasiado cerca de la fuente. Citar la fuente en `url` y `source`, nada más.

### PASO 3 — IDs y numeración

- El `id` debe ser único y descriptivo: `noticia-[tema-corto]-[año]`
- El número de artículo en el comentario `// ── NOTICIA N ──` es el siguiente
  al último existente en el array.

### PASO 4 — Inserción

- Los artículos nuevos van SIEMPRE al TOP del array `NEWS_DATA` (más reciente primero).
- Después de insertar, actualizar el bloque `NEWS_TRACKER` al final del fichero:
  - `last_update`: fecha actual en formato YYYY-MM-DD
  - `next_available`: sugerir los 3 topics menos usados recientemente

### RESUMEN RÁPIDO (checklist antes de proponer noticias)

[ ] ¿He leído los últimos 10 artículos del array para evitar repetir topic?
[ ] ¿He comprobado si el tema tiene cobertura en curso (liga activa, torneo, etc.)?
[ ] ¿He buscado los resultados/novedades MÁS RECIENTES, no el "arranque" del evento?
[ ] ¿El id propuesto no existe ya en el array?
[ ] ¿Los artículos van al TOP del array?
[ ] ¿He actualizado el NEWS_TRACKER al final?

In `CLAUDE.md`, find this exact line inside the ## FLUJO DE NOTICIAS section:

[ ] ¿El id propuesto no existe ya en el array?

Replace it with:

[ ] ¿El id propuesto no existe ya en el array?
[ ] ¿He asignado una imagen genérica a los artículos sin imagen específica?

Also find this line inside the same section:

- Los artículos `full[]` deben ser texto original — nunca copiar ni parafrasear
  demasiado cerca de la fuente. Citar la fuente en `url` y `source`, nada más.

Replace it with:

- Los artículos `full[]` deben ser texto original — nunca copiar ni parafrasear
  demasiado cerca de la fuente. Citar la fuente en `url` y `source`, nada más.
- Si un artículo no tiene imagen específica (campo `img` vacío), asignar
  la imagen genérica correspondiente a su `topic` buscando en `assets/img/news/`
  un fichero cuyo nombre contenga la palabra "generic" y el topic del artículo
  (ej: topic "esports" → buscar fichero con "esports" y "generic" en el nombre).
  Si no existe genérica para ese topic, dejar `img: ''`.

Do not modify anything else in the file.

At the end of the sesions your code will be revised by Chat GPT and Grok.
