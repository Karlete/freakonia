# Freakonia — Session Log

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
