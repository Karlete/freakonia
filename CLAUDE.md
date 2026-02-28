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
