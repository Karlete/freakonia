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

grep -n "isFreakochapa\|FREAKOCHAPA\|freakochapa" js/news-data.js

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

1. grep "id:" js/news-data.js | head -3
   → El id de la nueva freakochapa debe aparecer en las 3 primeras líneas.
   → Si no aparece: NO se insertó al TOP del array. Corregir.

2. grep "badgeLabel" js/news-data.js | head -3
   → Debe mostrar 'FREAKOCHAPA', no el nombre del topic.

3. node --input-type=module < js/news-data.js 2>&1 | head -5
   (o: node -e "var s=require('fs').readFileSync('js/news-data.js','utf8'); eval(s)")
   → Si hay error de sintaxis JS, el artículo no se cargará en ninguna página.
   → Causa más común: apóstrofes sin escapar dentro de strings con comillas simples.
   → Ejemplo del bug: title: 'Abe's Oddysee' → rompe el JS.
   → Corrección: usar comillas dobles para el string: title: "Abe's Oddysee"

### Por qué importa

- `badgeLabel: 'GAMING'` en lugar de `'FREAKOCHAPA'` → el badge muestra el tipo
  incorrecto en news.html y en el slider "Qué se cuece" de index.html.
- Artículo no insertado al TOP → no aparece en el slider (toma solo los 6 más recientes).
- Error de sintaxis JS → NEWS_DATA no carga → ninguna noticia aparece en la web.

At the end of the sesions your code will be revised by Chat GPT and Grok.
