// ============================================
// news-data.js — News articles data source
// Freakonia
// Add new articles at the TOP of the array (newest first).
// Required fields: id, topic, category, emoji, badgeLabel,
//   title, summary, full[], date (DD/MM/YYYY), url, page,
//   pageLabel, accent, source, img, tags[]
// source: clean domain without https:// or www.
// ============================================

var NEWS_DATA = [

  // ── NOTICIA 1 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-lpl-tes-naiyou-amano-2026",
    topic: "esports",
    category: "ESPORTS · LPL",
    emoji: "🀄",
    badgeLabel: "ESCÁNDALO",
    title: "NAIYOU CONFIESA: EL JUNGLA DE TES AMAÑÓ PARTIDAS EN LOS PLAYOFFS DE LA LPL",
    summary: "El jungla Yang 'naiyou' Zijian de Top Esports confesó haber amañado todos los partidos que su equipo perdió en los Playoffs del Split 1 2026. El entrenador lo reveló en directo. La LPL investiga.",
    full: [
      "El 6 de marzo de 2026, Top Esports publicó un comunicado oficial en Weibo anunciando que había reportado a su jungla Yang 'naiyou' Zijian a la comisión disciplinaria de la LPL por 'conducta irregular que afecta a la integridad de la competición'. La investigación se inició el 2 de marzo, tras la eliminación del equipo a manos de Weibo Gaming en el Lower Bracket de los Playoffs.",
      "Al día siguiente, el entrenador jefe de TES, Chang 'Poppy' Po-Hao, confirmó en directo que naiyou había confesado haber amañado deliberadamente todos los partidos que TES perdió en la fase de playoffs. 'Si él no hubiese tirado esos partidos, ¿hasta dónde podríamos haber llegado? No me lo puedo ni imaginar', declaró Poppy visiblemente afectado.",
      "El top laner Bai '369' Jia-Hao, que días antes había defendido públicamente al jungla en Weibo, publicó un críptico 'Soy un payaso...' al conocer la noticia. Según los rumores, fueron el midlaner Creme y el AD carry JiaQi quienes alertaron al CEO del club y amenazaron con ir directamente a la liga si no se actuaba.",
      "El caso se suma a una larga lista de escándalos de amaño en la LPL, que incluye a los exjunglas de FPX Milkyway y Bo Yang-Bo. Ni la LPL ni Riot Games han comunicado aún las sanciones que podría enfrentar naiyou, aunque un ban de por vida es el escenario más probable si los cargos se confirman."
    ],
    date: "07/03/2026",
    url: "https://www.hotspawn.com/league-of-legends/news/top-esports-naiyou-investigation",
    page: "esports.html",
    pageLabel: "🏆 ESPORTS",
    accent: "var(--accent-primary)",
    source: "Hotspawn / Esports.gg",
    img: "",
    tags: ["LPL", "TES", "naiyou", "match fixing", "amaño", "League of Legends", "escándalo"]
  },

  // ── NOTICIA 2 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-crimson-desert-lanzamiento-2026",
    topic: "gaming",
    category: "GAMING · PC/CONSOLAS",
    emoji: "🗡️",
    badgeLabel: "LANZAMIENTO",
    title: "CRIMSON DESERT LLEGA EL 19 DE MARZO: EL MUNDO ABIERTO DE PEARL ABYSS ENTRA EN SU RECTA FINAL",
    summary: "El ambicioso juego de acción y mundo abierto de Pearl Abyss confirma su fecha de salida para PC, PS5 y Xbox Series X|S. Años de desarrollo y comparaciones con Elden Ring. ¿Está a la altura?",
    full: [
      "Crimson Desert, el proyecto de mundo abierto desarrollado por Pearl Abyss —los creadores de Black Desert Online—, llega por fin el 19 de marzo de 2026 a PC, PS5 y Xbox Series X|S. Tras años de retrasos y una presentación impactante en el PlayStation State of Play, el juego entra en su recta final antes del lanzamiento.",
      "El título propone una aventura de acción en solitario ambientada en el continente de Pywel, donde controlamos a Masen, un mercenario marcado por un pasado oscuro que busca sobrevivir en un mundo definido por el conflicto y las leyendas. El diseño de mundo abierto, el combate visceral y la escala visual del juego han generado comparaciones inevitables con Elden Ring.",
      "Desde su revelación inicial, Crimson Desert ha pasado por varias rondas de rediseño, priorizando la campaña para un jugador sobre el componente multijugador que se barajó en un principio. Las últimas demos mostradas en ferias han recibido reacciones muy positivas, especialmente por la calidad visual y la fluidez del sistema de combate.",
      "El juego llega en un mes cargado de lanzamientos importantes, compitiendo directamente con otros títulos de peso. Para Pearl Abyss, es su gran apuesta para demostrar que pueden trasladar la profundidad de Black Desert a una experiencia narrativa de un jugador de primer nivel."
    ],
    date: "07/03/2026",
    url: "https://vandal.elespanol.com/noticias/videojuegos",
    page: "gaming.html",
    pageLabel: "🕹 GAMING",
    accent: "var(--accent-secondary)",
    source: "Vandal / Sortiraparis",
    img: "",
    tags: ["Crimson Desert", "Pearl Abyss", "mundo abierto", "PS5", "Xbox Series", "PC", "acción", "RPG"]
  },

  // ── NOTICIA 3 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-akotsk-temporada-2-confirmada-2026",
    topic: "got",
    category: "GAME OF THRONES · HBO",
    emoji: "⚔️",
    badgeLabel: "CONFIRMADO",
    title: "UN CABALLERO DE LOS SIETE REINOS TENDRÁ TEMPORADA 2: HBO EXPANDE EL UNIVERSO TARGARYEN HASTA 2028",
    summary: "HBO confirma la renovación de 'A Knight of the Seven Kingdoms' por una segunda temporada. La precuela de Dunk y Egg continúa el universo de Poniente con novedades hasta 2028.",
    full: [
      "HBO ha confirmado la renovación de 'A Knight of the Seven Kingdoms: The Hedge Knight' por una segunda temporada, ampliando así el universo de Juego de Tronos más allá de House of the Dragon. La cadena anunció además un plan de expansión del universo de George R. R. Martin con nuevas temporadas programadas hasta 2028.",
      "La serie, que adapta las novelas de Dunk y Egg ambientadas unos 90 años antes de los eventos de Game of Thrones, siguió a Ser Duncan el Alto y al joven príncipe Aegon Targaryen en sus aventuras como caballero errante por los Siete Reinos. Su tono más ligero y aventurero, alejado de la oscuridad política de las demás precuelas, la distinguió desde su estreno.",
      "El anuncio llega mientras House of the Dragon prepara su tercera temporada para junio de 2026, consolidando la estrategia de HBO de mantener el universo de Poniente en pantalla de forma continua con producciones solapadas en el tiempo.",
      "Para los fans de los libros, la renovación supone una buena noticia: las novelas cortas de Dunk y Egg son de las pocas historias del universo ASOIAF que GRRM ha completado, por lo que la serie tiene material de sobra para continuar sin los problemas de la adaptación de los libros principales de Canción de Hielo y Fuego."
    ],
    date: "06/03/2026",
    url: "https://watchersonthewall.com",
    page: "got.html",
    pageLabel: "🐉 GoT",
    accent: "#cc2200",
    source: "HBO / Watchers on the Wall",
    img: "",
    tags: ["A Knight of the Seven Kingdoms", "Dunk y Egg", "HBO", "precuela", "temporada 2", "ASOIAF", "Game of Thrones"]
  },

  // ── NOTICIA 4 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-mtg-tortugas-ninja-2026",
    topic: "magic",
    category: "MAGIC: THE GATHERING",
    emoji: "🐢",
    badgeLabel: "NUEVO SET",
    title: "COWABUNGA: LAS TORTUGAS NINJA LLEGAN A MAGIC: THE GATHERING CON LA MECÁNICA DE INFILTRACIÓN",
    summary: "Magic lanza el 5 de marzo su colaboración con las TMNT. Cuatro tortugas, nueva mecánica de Infiltración y un único mazo Commander pentacolor cooperativo. ¿Lo mejor de Universes Beyond hasta la fecha?",
    full: [
      "El 5 de marzo de 2026 llegó a las tiendas Magic: The Gathering | Teenage Mutant Ninja Turtles, la primera colaboración Universes Beyond del año. El set traslada al universo de Leonardo, Donatello, Raphael y Michelangelo al juego de cartas con mecánicas diseñadas específicamente para capturar la esencia del equipo.",
      "La mecánica estrella del set es Infiltración, una versión mejorada del clásico Ninjutsu: a diferencia del original, este ahora cuenta como lanzamiento de hechizo, lo que abre sinergias enormes con otras cartas del formato. La mecánica Asociación también hace acto de presencia, activándose al lanzar criaturas adicionales al campo de batalla.",
      "Uno de los aspectos más comentados del set es la inclusión de un único mazo Commander pentacolor con mecánica cooperativa: hasta cuatro jugadores pueden enfrentarse juntos a un villano controlado por el propio juego. Una propuesta inédita en Magic que puede abrir la puerta a un nuevo formato.",
      "Las cuatro cartas de las tortugas en versión headliner están ilustradas por Kevin Eastman, el creador original de las TMNT, con su sello de autógrafo estampado. El set incluye además 20 cartas de 'material de origen' que homenajean la historia de la franquicia, incluyendo la portada del número 1 del cómic original en la carta de Doubling Season."
    ],
    date: "05/03/2026",
    url: "https://magic.wizards.com/es/news/announcements/everything-announced-for-magic-the-gathering-in-2026",
    page: "magic.html",
    pageLabel: "✨ MAGIC",
    accent: "var(--accent-secondary)",
    source: "Magic Wizards Official / Chicas Gamers",
    img: "",
    tags: ["Magic The Gathering", "Tortugas Ninja", "TMNT", "Universes Beyond", "Infiltración", "Commander", "nuevo set"]
  },

  // ── NOTICIA 5 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-old-world-grand-cathay-defenders-2026",
    topic: "warhammer",
    category: "WARHAMMER: THE OLD WORLD",
    emoji: "🏯",
    badgeLabel: "NUEVO LANZAMIENTO",
    title: "GRAN CATHAY REFUERZA SUS FILAS: DEFENDERS OF THE GREAT BASTION LLEGA EL 14 DE MARZO",
    summary: "Games Workshop lanza una caja de refuerzo para Gran Cathay con 53 miniaturas: Astromancers, Cañones Grulla, Fusileros de Granizo de Hierro y Milicia Campesina. El ejército más reciente de The Old World sigue creciendo.",
    full: [
      "El 14 de marzo de 2026, Games Workshop pone a la venta Defenders of the Great Bastion, una caja de refuerzo de ejército para la facción de Gran Cathay en Warhammer: The Old World. El set incluye 53 miniaturas y está pensado como una 'caja de inicio de línea de tiro': personajes que lideran, una pared de cuerpos para protegerlos y suficientes armas de fuego para hacer el tablero más pequeño.",
      "El contenido incluye Astromancers de la Corte Celestial —los personajes que lideran el ejército—, Equipos de Cañón Grulla con escudos torre para hostigar desde la retaguardia, Fusileros de Granizo de Hierro con arcabuces de corto alcance y Milicia Campesina con lanzas y arcos para saturar los objetivos.",
      "Gran Cathay fue el ejército nuevo con el que GW inauguró 2025 en The Old World, y pese a algunos problemas de balance en el metagame competitivo, su popularidad ha sido innegable. Esta caja de refuerzo responde directamente a la demanda de los jugadores de poder construir una línea de fusilería completa sin tener que buscar miniaturas por separado.",
      "The Old World sigue su hoja de ruta de 2026 con buen ritmo. Los Warriors of Chaos también están en el horizonte, y la comunidad española —especialmente activa en torneos— lleva semanas debatiendo las posibles incorporaciones al reglamento que podrían llegar con la próxima actualización de FAQs y erratas."
    ],
    date: "07/03/2026",
    url: "https://www.warhammer-community.com/es-es",
    page: "warhammer.html",
    pageLabel: "⚙ WARHAMMER",
    accent: "var(--accent-warn)",
    source: "Warhammer Community / Spikey Bits",
    img: "",
    tags: ["Warhammer", "The Old World", "Gran Cathay", "Games Workshop", "miniaturas", "lanzamiento", "Defenders of the Great Bastion"]
  },

  // ── NOTICIA 6 ──────────────────────────────────────────────────────────────
  {
    id: "noticia-nba-playoffs-race-shai-record-2026",
    topic: "nba",
    category: "NBA · TEMPORADA 2025-26",
    emoji: "🏀",
    badgeLabel: "RECTA FINAL",
    title: "OKC LIDERA HACIA PLAYOFFS Y SHAI SE ACERCA A UN RÉCORD DE WILT CHAMBERLAIN",
    summary: "El Thunder de Oklahoma City fue el primer equipo en sellar su plaza en los Playoffs 2026. Su estrella Shai Gilgeous-Alexander se acerca al récord de Wilt Chamberlain de 126 partidos consecutivos anotando 20 o más puntos.",
    full: [
      "La temporada regular de la NBA 2025-26 entra en su recta final con el calendario de playoffs cerrado: la temporada regular acaba el 12 de abril, el Play-In Tournament arranca el 14 de abril y los Playoffs comienzan el 18 de abril. Oklahoma City Thunder se convirtió en el primer equipo de la liga en sellar matemáticamente su plaza en la postemporada, liderando una Conferencia Oeste que sigue siendo increíblemente apretada.",
      "La gran narrativa individual de la temporada la protagoniza Shai Gilgeous-Alexander, que se encuentra en la persecución del histórico récord de Wilt Chamberlain de 126 partidos consecutivos anotando 20 o más puntos. El canadiense lleva una temporada mayúscula que lo sitúa como uno de los favoritos al MVP y confirma al Thunder como el equipo más sólido del Oeste.",
      "En el Este, los Detroit Pistons han sorprendido al mundo del baloncesto manteniéndose como el mejor equipo de la conferencia, mientras Boston Celtics espera el posible regreso de Jayson Tatum —lesionado— para la postemporada. Houston Rockets pelea por el tercer puesto y los Lakers, con LeBron James todavía en activo, intentan asegurar una posición que evite el Play-In.",
      "Con cinco semanas de temporada regular por delante, el panorama de playoffs se definirá partido a partido. Las Finales NBA 2026 están programadas para el 3 de junio, y el debate sobre quién se llevará el anillo ya está servido."
    ],
    date: "08/03/2026",
    url: "https://espndeportes.espn.com/basquetbol/nba/nota/_/id/16386606/nba-power-rankings-equipos-clasificacion-juegos-intrigantes",
    page: "nba.html",
    pageLabel: "🏀 NBA",
    accent: "var(--accent-warn)",
    source: "ESPN / NBA.com",
    img: "",
    tags: ["NBA", "OKC Thunder", "Shai Gilgeous-Alexander", "playoffs 2026", "Wilt Chamberlain", "temporada regular", "MVP"]
  },

  // ── ARTICLE 24 ──────────────────────────────────────────────────
  {
    id: "noticia-mtg-tmnt-2026",
    topic: "magic",
    category: "misc",
    emoji: "✨",
    badgeLabel: "MAGIC",
    title: "Magic: The Gathering × Tortugas Ninja — El set radical sale hoy, 6 de marzo",
    summary: "Wizards of the Coast lanza hoy el set Universes Beyond de las Tortugas Ninja. Arte de Kevin Eastman, el creador original del cómic, mecánicas nuevas y un Commander deck de cinco colores. Cowabunga.",
    full: [
      "Magic: The Gathering | Teenage Mutant Ninja Turtles llega hoy 6 de marzo a tiendas físicas y MTG Arena. El set introduce a Leonardo, Donatello, Raphael y Michelangelo como legendarias, junto a Shredder, Krang, April O'Neil y hasta los Foot Soldiers. Las cartas de arte de los sobres de coleccionista recuperan ilustraciones directamente sacadas del cómic original de los 80.",
      "El set introduce dos nuevas mecánicas: sneak, una variante del ninjutsu que permite colarse en combate de forma más agresiva, y disappear, ligada a la pizza y a los ratos que habitan las cloacas. Hay 20 cartas de 'source material' con ilustraciones del cómic original firmadas por Kevin Eastman, algunas con sello de autógrafo del propio artista.",
      "Junto al set principal llega Turtle Power!, el mazo de Commander de cinco colores, y el Secret Lair Totally TubuLair Superdrop. Para Magic veterans como yo que llevan sin coleccionar desde los 90, ver estas licencias tan distintas al juego original siempre genera debate. Pero hay que reconocer que el set tiene una energía tremenda y la nostalgia de las TMNT es universal."
    ],
    date: "06/03/2026",
    url: "https://magic.wizards.com/es/news",
    page: "magic.html",
    pageLabel: ">> IR A MAGIC",
    accent: "#ff00ff",
    source: "magic.wizards.com",
    img: "",
    tags: ["Magic", "TMNT", "Universes Beyond", "Commander", "2026"]
  },

  // ── ARTICLE 23 ──────────────────────────────────────────────────
  {
    id: "noticia-tow-gran-cathay-defenders-2026",
    topic: "warhammer",
    category: "misc",
    emoji: "⚙️",
    badgeLabel: "WARHAMMER",
    title: "The Old World: Defenders of the Great Bastion llega el 14 de marzo — 53 minis de Gran Cathay",
    summary: "Games Workshop lanza el 14 de marzo la caja de refuerzo Defenders of the Great Bastion para Gran Cathay. 53 miniaturas: Astromancers, Crane Guns, Iron Hail Gunners y Peasant Levy.",
    full: [
      "El 14 de marzo llega a tiendas Defenders of the Great Bastion, la gran caja de refuerzo de ejército para Gran Cathay en Warhammer: The Old World. 53 miniaturas que cubren todos los escalones de una línea de combate: los Astromancers de la Corte Celestial para liderar la magia, los Crane Guns para trabajo de largo alcance desde retaguardia, los Iron Hail Gunners con sus trabucazos a media distancia y la masa de Peasant Levy con lanzas y arcos para absorber cargas y controlar objetivos.",
      "Es básicamente un starter de gunline de Gran Cathay en una sola caja. La facción ya debutó el año pasado y algunos jugadores señalaron desbalances, pero Games Workshop la sigue apoyando con material, lo que es buena señal para la salud del juego en su tercer año.",
      "The Old World sigue demostrando en 2026 que el regreso del Warhammer Fantasy clásico fue una decisión acertada. La comunidad española tiene cada vez más torneos activos y las miniaturas de bases cuadradas ya son de nuevo una visión habitual en las tiendas. Para los veteranos de la quinta edición como yo, ver cómo el juego se expande con facciones nuevas como Cathay es una satisfacción enorme."
    ],
    date: "14/03/2026",
    url: "https://spikeybits.com/old-world-new-releases-roadmap-previews/",
    page: "warhammer.html",
    pageLabel: ">> IR A WARHAMMER",
    accent: "#ffcc00",
    source: "spikeybits.com",
    img: "",
    tags: ["The Old World", "Gran Cathay", "Games Workshop", "Miniaturas", "2026"]
  },

  // ── ARTICLE 22 ──────────────────────────────────────────────────
  {
    id: "noticia-lec-spring-2026-formato",
    topic: "esports",
    category: "esports",
    emoji: "🏆",
    badgeLabel: "ESPORTS",
    title: "LEC Spring Split 2026 — Adiós a los Bo1: vuelven el Bo3, los roadtrips y el MSI en Corea",
    summary: "La LEC Spring Split arranca a finales de marzo con cambios de formato: eliminan los Bo1 y vuelven el Bo3 en fase regular y Bo5 en playoffs. Dos roadtrips de MKOI y Karmine Corp. Los dos finalistas clasifican al MSI en Daejeon.",
    full: [
      "La LEC vuelve a finales de marzo con uno de los cambios más pedidos por la comunidad: se eliminan los Bo1 de la temporada regular. Vuelve el formato Bo3 en todos los partidos de liga, lo que da más profundidad táctica y reduce la lotería de partida única. Los playoffs serán Bo5 íntegros. Los lunes seguirán jugándose, pero sin público en arena para reducir costes de producción.",
      "El split contará con dos roadtrips. Movistar KOI organizará uno en España y Karmine Corp otro en Francia, ambos durante la temporada regular. Siguiendo el modelo del año pasado con el Madrid Arena, estos eventos son una oportunidad de oro para la escena española: ver LoL competitivo de élite en directo es una experiencia que merece la pena.",
      "Los dos finalistas del Spring Split clasificarán para el Mid-Season Invitational (MSI), que este año se celebra en Daejeon, Corea del Sur. Tras la resaca de G2 campeón del LEC Versus con Caps MVP, ahora toca ver si alguien puede quitarles el trono en este nuevo formato. Los candidatos — MKOI, KC, Fnatic y los propios G2 — empiezan desde cero."
    ],
    date: "06/03/2026",
    url: "https://esports.gg/news/league-of-legends/2026-lec-spring-split/",
    page: "esports.html",
    pageLabel: ">> IR A ESPORTS",
    accent: "#C89B3C",
    source: "esports.gg",
    img: "",
    tags: ["LEC", "Spring Split", "MSI", "MKOI", "2026"]
  },

  // ── ARTICLE 21 ──────────────────────────────────────────────────
  {
    id:         'noticia-fatal-frame-2-remake-2026',
    topic:      'gaming',
    category:   'gaming',
    emoji:      '🕹',
    badgeLabel: 'GAMING',
    title:      'Fatal Frame II: Crimson Butterfly Remake llega el 12 de marzo con terror japonés renovado',
    summary:    'El clásico de terror psicológico de 2003 vuelve completamente renovado en PS5, Xbox Series, Switch 2 y PC. La Camera Obscura regresa con gráficos modernos para uno de los juegos de terror más influyentes de la PS2.',
    full:       [
      'Si hay un juego que definió el terror japonés en la PS2, ese fue Fatal Frame II: Crimson Butterfly. El 12 de marzo de 2026 llega el remake completo a PS5, Xbox Series X/S, Nintendo Switch 2 y PC, con gráficos renovados desde cero pero manteniendo toda la esencia del original de 2003.',
      'El juego sigue a las gemelas Mio y Mayu Amakura atrapadas en una aldea maldita donde los fantasmas solo pueden ser vencidos fotografiándolos con la Camera Obscura. El remake conserva la estructura original pero actualiza modelos de personajes, iluminación y controles, sin perder ni un gramo del terror psicológico que lo hizo legendario.',
      'Para los fans del terror de la era PS2 —esa época dorada que también incluía Silent Hill 2 y el Resident Evil 4 original— este remake es una celebración y una prueba de que el terror japonés nunca fue sustituido, solo aletargado. El State of Play de febrero 2026 confirmó también remakes de la trilogía original de God of War, dejando claro que la nostalgia de los 2000s está más viva que nunca.'
    ],
    date:       '02/03/2026',
    url:        'https://www.infobae.com/tecno/2026/03/02/asi-queda-el-calendario-de-estrenos-de-xbox-en-marzo-rpgs-shooters-y-clasicos-renovados/',
    page:       'gaming.html',
    pageLabel:  '>> VER GAMING',
    accent:     '#00bfff',
    source:     'infobae.com',
    img:        '',
    tags:       ['Fatal Frame II', 'Crimson Butterfly', 'Remake', 'Terror japonés', 'PS5', 'Switch 2']
  },

  // ── ARTICLE 20 ──────────────────────────────────────────────────
  {
    id:         'noticia-tow-gran-cathay-defenders-2026',
    topic:      'warhammer',
    category:   'misc',
    emoji:      '⚙',
    badgeLabel: 'WARHAMMER',
    title:      'The Old World: llegan los Defensores de la Gran Muralla de Cathay el 14 de marzo',
    summary:    'Games Workshop lanza el 14 de marzo el set \'Defenders of the Great Bastion\', 53 miniaturas de Gran Cathay para Warhammer: The Old World. Astromancers, Crane Guns y una legión de infantería lista para la batalla.',
    full:       [
      'Warhammer: The Old World sigue en plena forma en su tercer año de vida, y marzo trae una de las novedades más esperadas: el set \'Defenders of the Great Bastion\' de Gran Cathay llega el 14 de marzo con 53 miniaturas pensadas para completar y reforzar el ejército del lejano oriente.',
      'El set incluye Astromancers de la Corte Celestial (los magos-estrella del lore Cathay), Crane Gun Teams para dar fuego de largo alcance, Iron Hail Gunners con sus trabucos de corto rango, y Peasant Levy para llenar las líneas de infantería y hacer sufrir al enemigo en cuerpo a cuerpo. Una caja pensada para montar una línea de fuego completa.',
      'Gran Cathay fue el ejército estrella de The Old World en 2025, con su propio Arcane Journal y un trasfondo riquísimo. Este refuerzo de 2026 consolida al ejército como uno de los más completos del juego, y abre la puerta a nuevas tácticas de gunline que van a hacer sufrir a más de un Guerrero del Caos en la mesa.'
    ],
    date:       '02/03/2026',
    url:        'https://spikeybits.com/old-world-new-releases-roadmap-previews/',
    page:       'warhammer.html',
    pageLabel:  '>> VER WARHAMMER',
    accent:     '#ffcc00',
    source:     'spikeybits.com',
    img:        '',
    tags:       ['Gran Cathay', 'The Old World', 'Defenders of the Great Bastion', 'Games Workshop', 'Warhammer Fantasy']
  },

  // ── ARTICLE 19 ──────────────────────────────────────────────────
  {
    id:         'noticia-lyon-lcs-lockin-2026',
    topic:      'esports',
    category:   'esports',
    emoji:      '🏆',
    badgeLabel: 'ESPORTS',
    title:      'LYON se corona campeón del LCS Lock-In 2026 y va al First Stand',
    summary:    'La organización mexicana LYON remonta desde el lower bracket para ganar el primer torneo del año en Norteamérica, superando a Cloud9 en la final. El jungler Inspired, MVP indiscutible.',
    full:       [
      'El LCS vuelve como liga independiente en 2026 después del experimento de la LTA, y su primer torneo, el Lock-In, lo ha ganado LYON, la organización mexicana que llegó desde la liga latinoamericana. El equipo arrancó la temporada con problemas de visado y cambios de roster de última hora, pero en los playoffs lo dieron todo.',
      'Cloud9 había arrasado durante toda la fase de grupos y era el favorito absoluto para la final. Sin embargo, LYON salió superior, solo cayó en el primer mapa y remontó para ganar 3-1 una serie que no tuvo rival. El jungler polaco Kacper \'Inspired\' Słoma fue el MVP indiscutible de la final, con una presión de mapa constante que dejó a C9 sin respuesta.',
      'Con esta victoria, LYON se convierte en el representante de Norteamérica para el First Stand 2026 en São Paulo (16–22 de marzo), el primer torneo internacional del año, donde se enfrentará a G2 (LEC), Gen.G (LCK) y los clasificados de la LPL. Una historia de remontada que ya es parte de la historia del LCS.'
    ],
    date:       '01/03/2026',
    url:        'https://esportsinsider.com/2026/03/lyon-crowned-2026-lcs-lock-in-champion',
    page:       'esports.html',
    pageLabel:  '>> VER ESPORTS',
    accent:     '#C89B3C',
    source:     'esportsinsider.com',
    img:        '',
    tags:       ['LYON', 'LCS Lock-In 2026', 'Cloud9', 'Inspired MVP', 'First Stand 2026']
  },

  // ── ARTICLE 18 ──────────────────────────────────────────────────
  {
    id:         'noticia-g2-lec-versus-2026',
    topic:      'esports',
    category:   'esports',
    emoji:      '🏆',
    badgeLabel: 'ESPORTS',
    title:      'G2 Esports: campeones de la LEC Versus 2026 en Badalona',
    summary:    'Los Samurais vencen a Karmine Corp en un épico 3-2 en la gran final celebrada en Badalona. Caps nombrado MVP con su decimosexto título en la LEC. G2 clasifica al First Stand 2026 en São Paulo.',
    full:       [
      'La gran final de la LEC Versus 2026 se disputó en Badalona ante más de 15.000 espectadores. G2 Esports salió dominando con un rápido 2-0 gracias a drafts creativos y un control impecable de objetivos. Parecía una victoria cómoda, pero Karmine Corp no se rindió.',
      'KC remontó en los juegos 3 y 4 con una actuación increíble de Canna, cuya engage milagrosa en el juego 4 forzó el Silver Scrapes. El quinto mapa duró 46 minutos y mantuvo al pabellón en vilo hasta el final. G2 cerró la serie con una composición de fuerte CC y acumulando dragones y Barón.',
      'Rasmus \'Caps\' Winther fue nombrado MVP de la final por séptima vez, extendiendo su récord como el jugador más laureado de la historia del LEC con 16 títulos domésticos. Con esta victoria, G2 conquista su decimoctavo título europeo y se clasifica para el First Stand 2026 en São Paulo (16–22 de marzo), donde se medirá a Gen.G, BNK FEARX, LOUD y otros representantes mundiales.'
    ],
    date:       '01/03/2026',
    url:        'https://esports.gg/news/league-of-legends/g2-esports-lec-versus-winner/',
    page:       'esports.html',
    pageLabel:  '>> VER ESPORTS',
    accent:     '#C89B3C',
    source:     'esports.gg',
    img:        '',
    tags:       ['G2 Esports', 'LEC Versus', 'Karmine Corp', 'Caps MVP', 'First Stand 2026']
  },

  // ── ARTICLE 17 ──────────────────────────────────────────────────
  {
    id:         'noticia-hotd-t3-trailer-2026',
    topic:      'got',
    category:   'got',
    emoji:      '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title:      'House of the Dragon T3: tráiler oficial y estreno en junio 2026',
    summary:    'HBO lanza el primer tráiler oficial de la tercera temporada con la Batalla del Gaznate, dragones en combate masivo y Rhaenyra más poderosa que nunca. Estreno confirmado en junio 2026 en HBO Max.',
    full:       [
      'El 19 de febrero de 2026, HBO lanzó el tráiler oficial de la temporada 3 de House of the Dragon, y el fandom de Poniente estalló. Las imágenes muestran la tan esperada Batalla del Gaznate, uno de los enfrentamientos navales más brutales del canon ASOIAF, con dragones surcando los cielos mientras las flotas arden.',
      'La temporada arranca con Aemond Targaryen en el Trono de Hierro tras la caída de su hermano Aegon. Alicent Hightower, en un giro impactante, abandona en secreto Desembarco del Rey y lo entrega a Rhaenyra. El lema promocional \'Del fuego nace la oscuridad\' resume perfectamente el tono que se viene.',
      'La temporada contará con 8 episodios y llegará a HBO Max en junio de 2026, siendo la penúltima de la serie (ya hay T4 confirmada para 2028). Una nota agridulce: GRRM no participó en esta temporada por desacuerdos creativos con el showrunner Ryan Condal. Sea como sea, la Danza de los Dragones está a punto de llegar a su punto álgido.'
    ],
    date:       '19/02/2026',
    url:        'https://cnnespanol.cnn.com/2026/02/19/entretenimiento/trailer-house-of-dragon-temporada-3-orix',
    page:       'got.html',
    pageLabel:  '>> VER GOT',
    accent:     '#cc2200',
    source:     'cnnespanol.cnn.com',
    img:        '',
    tags:       ['House of the Dragon', 'Temporada 3', 'HBO', 'Batalla del Gaznate', 'ASOIAF']
  },

  // ── ARTICLE 16 ──────────────────────────────────────────────────
  {
    id:         'noticia-spurs-racha-2026',
    topic:      'nba',
    category:   'nba',
    emoji:      '🏀',
    badgeLabel: 'NBA',
    title:      'Los Spurs encadenan 11 victorias seguidas antes de caer ante los Knicks',
    summary:    'San Antonio sorprende a la NBA con su mejor racha de la temporada. Los Knickerbockers, liderados por Mikal Bridges con 25 puntos, ponen fin al partido más esperado del fin de semana.',
    full:       [
      'Los San Antonio Spurs han sido la gran sorpresa de la temporada regular NBA 2025-26. El equipo texano encadenó 11 victorias consecutivas, una racha que no tenía desde hace años y que ha obligado a todos a tomarles en serio de cara a los playoffs.',
      'La racha llegó a su fin el 1 de marzo ante los New York Knickerbockers en lo que se convirtió en uno de los duelos más seguidos de la jornada. Mikal Bridges fue el verdugo definitivo con 25 puntos y 5 robos de balón, sellando la victoria local en lo que fue un partidazo.',
      'Con la temporada regular llegando a su recta final (acaba el 12 de abril), la lucha por los playoffs se intensifica. Detroit Pistons, de los peores de la liga hace apenas dos temporadas, lidera actualmente el Este. Mientras tanto, la zona oeste sigue siendo un polvorín con OKC Thunder y Boston Celtics como candidatos al título. Los playoffs llegan en menos de 6 semanas.'
    ],
    date:       '01/03/2026',
    url:        'https://www.nbamaniacs.com/noticias/',
    page:       'nba.html',
    pageLabel:  '>> VER NBA',
    accent:     '#ffcc00',
    source:     'nbamaniacs.com',
    img:        '',
    tags:       ['San Antonio Spurs', 'New York Knicks', 'Mikal Bridges', 'NBA 2026', 'Playoffs']
  },

  // ── ARTICLE 15 ──────────────────────────────────────────────────
  {
    id:         'noticia-lec-versus-final-badalona-2026',
    topic:      'esports',
    category:   'esports',
    emoji:      '🏆',
    badgeLabel: 'ESPORTS',
    title:      'LEC VERSUS 2026 — MAÑANA G2 VS EL QUE GANE EL KOI-KC DE HOY EN BADALONA',
    summary:    'Las finales del LEC Versus 2026 están ardiendo en Badalona. G2 ya espera en la gran final del domingo tras arrasar en el winners bracket. Hoy sábado se decide quién le planta cara: Movistar KOI o Karmine Corp.',
    full:       [
      'El Olimpic Arena de Badalona es este fin de semana la capital europea del League of Legends, y el ambiente está al rojo vivo. G2 Esports ya está instalado en la gran final del domingo 1 de marzo después de barrer a Movistar KOI por un contundente 3-0 en el winners bracket. SkewMond está intratable en estos playoffs y Caps sigue demostrando que en 2026 sigue siendo de los mejores mids de Europa.',
      'Ayer viernes arrancaron las finales presenciales con Karmine Corp aplastando a GIANTX 3-0. Los malagueños se despiden del split con un top 4 histórico para la organización, pero KC no dio ninguna opción. Caliste en modo carry, Yike recordándonos por qué ganó varias LEC, y una propuesta de juego muy superior a la del conjunto español.',
      'Hoy sábado a las 17:00 se juega el partido más importante de la semana: Movistar KOI contra Karmine Corp, semifinal del losers bracket. El que gane se cita con G2 mañana domingo en la gran final. El que pierda se va a casa. KOI juega prácticamente en casa ante su público de Badalona, pero KC viene de un 3-0 limpio y con la moral por las nubes. Va a ser una serie brutal.',
      'El ganador de esta LEC Versus se clasifica al First Stand 2026 en Brasil, el primer torneo internacional del año. Tres equipos con posibilidades reales, una sola plaza. G2 lleva semanas siendo el mejor equipo de Europa en estos playoffs, pero en un Bo5 presencial con la afición empujando, cualquier cosa puede pasar. La final del domingo puede ser un clásico. O puede ser otro 3-0 de G2. Con SkewMond así, casi lo prefiero ver que anticiparlo.'
    ],
    date:       '28/02/2026',
    url:        'https://lolesports.com/es-ES/leagues/lec',
    page:       'esports.html',
    pageLabel:  'IR A ESPORTS',
    accent:     '#ffcc00',
    source:     'lolesports.com',
    img:        'assets/img/lec_versus_2026.jpg',
    tags:       ['LEC', 'G2 Esports', 'Movistar KOI', 'Karmine Corp', 'Badalona', 'First Stand 2026']
  },

  // ── ARTICLE 14 ──────────────────────────────────────────────────
  {
    id:         'noticia-nba-allstar-2026',
    topic:      'nba',
    category:   'misc',
    emoji:      '🏀',
    badgeLabel: 'NBA',
    title:      'NBA ALL-STAR 2026 — LOS ÁNGELES SE RINDE ANTE LA ÉLITE DEL BASKET',
    summary:    'El All-Star 2026 en el Intuit Dome de Los Ángeles ha sido uno de los mejores fines de semana de las estrellas en años. Nuevo formato, Lillard ganando su tercer concurso de triples y Edwards dominando el partido principal. Esto es lo que hay que ver.',
    full:       [
      'El fin de semana del 13 al 15 de febrero en el Intuit Dome de Inglewood, California reunió a lo mejor de la NBA bajo un formato completamente renovado: tres equipos (USA Stars, USA Stripes y World) en lugar del clásico Este vs Oeste. Y reconozco que era escéptica con el cambio, pero funcionó mejor de lo esperado.',
      'En el partido estelar, Anthony Edwards y Tyrese Maxey lideraron a las USA Stars y se llevaron el título. Más allá del resultado, el espectáculo fue lo que importaba: Luka Doncic en Los Ángeles de titular del Oeste, Giannis acumulando su décimo All-Star consecutivo, y Cade Cunningham recordándonos que Detroit está de vuelta.',
      'Pero lo del sábado fue especial. Damian Lillard ganó el Concurso de Triples por tercera vez en su carrera. Tres veces. En un torneo donde participan los mejores tiradores del planeta. Y luego está Keshad Johnson ganando el Slam Dunk con consistencia frente a la espectacularidad de su rival. La polémica estaba servida.',
      'Con los playoffs acercándose en abril, este All-Star ha sido el último respiro antes de que empiece la guerra de verdad. Los Cavaliers siguen siendo el equipo más sólido del Este. En el Oeste, Jokic y los Nuggets no van a regalar nada. Va a ser un final de temporada brutal.'
    ],
    date:       '28/02/2026',
    url:        'https://www.nba.com/allstar/2026',
    page:       'nba.html',
    pageLabel:  'IR A NBA',
    accent:     '#ffcc00',
    source:     'nba.com',
    img:        'assets/img/nba_allstar_2026.jpg',
    tags:       ['NBA', 'All-Star 2026', 'Lillard', 'Anthony Edwards', 'Los Ángeles']
  },

  // ── ARTICLE 12 ──────────────────────────────────────────────────
  {
    id:         'noticia-god-of-war-trilogy-remake-2026',
    topic:      'gaming',
    category:   'gaming',
    emoji:      '🎮',
    badgeLabel: 'GAMING',
    title:      'GOD OF WAR TRILOGY REMAKE Y SONS OF SPARTA — KRATOS LO HA VUELTO A HACER',
    summary:    'El State of Play del 12 de febrero fue una locura. Santa Monica anunció el God of War Trilogy Remake, lanzó por sorpresa Sons of Sparta ese mismo día, y el internet entero explotó. Kratos sigue mandando.',
    full:       [
      'El State of Play del 12 de febrero de 2026 ha sido uno de esos eventos que se recuerdan. Sony cerró el evento con dos anuncios de God of War en una misma noche, algo que nadie esperaba: por un lado, el God of War Trilogy Remake en desarrollo; por otro, un shadowdrop inmediato con God of War: Sons of Sparta ya disponible en PS5 ese mismo día.',
      'Sons of Sparta es una aventura 2D con estética pixel art desarrollada por Mega Cat Studios junto a Santa Monica, que narra la juventud de Kratos y su hermano Deimos en el agoge espartano. El juego ha tenido polémica con su modo cooperativo —la comunidad se sintió engañada con la implementación inicial— pero el estudio ya ha añadido gratis el modo "Foso de Agonías" para jugar en pareja desde el inicio.',
      'Lo que de verdad ha hecho explotar las redes es el Trilogy Remake. Los tres juegos clásicos de PS2 y PS3 con gráficos modernos y, según ha filtrado el actor de voz, un nuevo sistema de combate. El propio T.C. Carson —la voz del Kratos original— fue quien anunció el proyecto en el State of Play. El desarrollo está en fases tempranas, así que puede que no lo veamos hasta 2027 o 2028.',
      'Personalmente, la trilogía griega es la que más me marcó. El God of War de PS2 era pura fantasía de poder sin filtros, y ver eso con el motor gráfico actual y el sistema de combate moderno es algo que no sabía que necesitaba hasta que lo anunciaron. Eso sí, espero que mantengan la brutalidad del original. Kratos griego no tiene tiempo para momentos emotivos con su hijo. Kratos griego destruye dioses.'
    ],
    date:       '28/02/2026',
    url:        'https://www.eurogamer.es/sony-anuncia-god-of-war-trilogy-remake-y-god-of-war-sons-of-sparta',
    page:       'gaming.html',
    pageLabel:  'IR A GAMING',
    accent:     '#00ff41',
    source:     'eurogamer.es',
    img:        'assets/img/god_of_war_trilogy_remake.jpg',
    tags:       ['God of War', 'PlayStation', 'Remake', 'Santa Monica', 'Sons of Sparta']
  },

  // ── ARTICLE 10 ──────────────────────────────────────────────────
  {
    id:         'noticia-re9-requiem-2026',
    topic:      'gaming',
    category:   'gaming',
    emoji:      '🎮',
    badgeLabel: 'GAMING',
    title:      'RESIDENT EVIL 9: REQUIEM YA ESTÁ EN LA CALLE — Y LOS SPOILERS SE ESPARCEN COMO EL T-VIRUS',
    summary:    'El 27 de febrero Capcom lanzó Resident Evil 9: Requiem en PS5, Xbox Series, PC y Nintendo Switch 2. Leon Kennedy vuelve a una Raccoon City post-nuclear junto a Grace Ashcroft, nueva protagonista e hija de Alyssa de RE7. Las copias anticipadas ya circulaban días antes y los foros están minados. Modo avión activado.',
    full:       [
      'Capcom ha conseguido algo que parecía difícil después de Resident Evil 8 Village: volver a generar hype masivo antes del lanzamiento. RE9 Requiem llegó ayer, 27 de febrero, a PS5, Xbox Series X|S, PC y Nintendo Switch 2 simultáneamente. La premisa es sencillamente deliciosa: Raccoon City, la ciudad que todos recordamos como el escenario donde todo se fue al traste en RE2 y RE3, ha sido destruida por bombardeos nucleares y sirve ahora de escenario post-apocalíptico para una nueva pesadilla de Capcom.',
      'La protagonista es Grace Ashcroft, investigadora del FBI e hija de Alyssa, la periodista de Resident Evil 7. Capcom mete aquí un hilo de lore que conecta la saga de una manera que no esperaba nadie y que, según los poquísimos agraciados con copias anticipadas, tiene mucho más peso narrativo de lo habitual en la franquicia. Leon Kennedy también aparece. La combinación pinta bien sobre el papel, aunque "pinta bien sobre el papel" también lo podría haber dicho alguien antes de RE6 y ya sabemos cómo terminó aquello.',
      'El problema del día de lanzamiento: los spoilers. Copias anticipadas en circulación desde días antes, capturas filtradas por todas partes y un livestream en Twitch que duró unos veinte minutos antes de que Capcom lo cortara de raíz. Si tienes pendiente jugar Requiem y aún no has empezado, pon internet en modo avión directamente. Los foros están siendo un campo minado. Personalmente estoy al borde del estado de emergencia friki total hasta que pueda meterle unas horitas esta misma tarde.'
    ],
    date:       '28/02/2026',
    url:        'https://www.3djuegos.com/juegos/resident-evil-9-requiem/',
    page:       'gaming.html',
    pageLabel:  'GAMING',
    accent:     '#00bfff',
    source:     '3djuegos.com',
    img:        '',
    tags:       ['Resident Evil 9', 'Requiem', 'Capcom', 'PS5', 'Leon Kennedy', 'Raccoon City']
  },

  // ── ARTICLE 9 ───────────────────────────────────────────────────
  {
    id:         'noticia-hotd-s3-trailer-2026',
    topic:      'got',
    category:   'got',
    emoji:      '🐉',
    badgeLabel: 'GOT',
    title:      'HOUSE OF THE DRAGON T3 — TRÁILER BRUTAL, PERO MARTIN DICE QUE YA NO ES SU HISTORIA',
    summary:    'El primer tráiler de la temporada 3 de La Casa del Dragón está aquí y es visualmente espectacular: la Batalla del Gullet por fin se acerca. El problema: George R.R. Martin acaba de declarar públicamente que "esto ya no es mi historia". Drama dentro y fuera de la pantalla. Junio 2026 llega cargado de polémica.',
    full:       [
      'El tráiler mola. Lo digo con sinceridad, y mira que después de la temporada 2 —ese festival de incoherencias épicas que analizamos con detalle en esta web— no tenía muchas ganas de ilusionarme. Y sin embargo ahí está: dragones sobrevolando el Gullet, batallas navales que prometen ser de las más épicas de toda la saga, personajes que por fin parecen estar en el lugar correcto de la historia. El actor Abubakar Salim ya adelantó que rodar la Batalla del Gullet fue "uno de los momentos más locos de su carrera". Las expectativas están calibradas al alza. Junio 2026 no puede llegar pronto.',
      'Pero entonces llega George R.R. Martin y lo suelta con toda la frialdad del mundo: "Esto ya no es mi historia." Brutal. El hombre que construyó Poniente viendo cómo Ryan Condal y su equipo siguen tomando decisiones que se alejan cada vez más de los libros ha decidido desvincularse públicamente de la tercera temporada. Esto no es un problemilla. Es un problemón mayúsculo, porque lo que diferencia a las buenas adaptaciones de las malas es precisamente que el creador pueda reconocerse en ellas.',
      '¿Puede ser la temporada 3 buena aunque Martin la repudie? Técnicamente, sí. Pero el sabor agridulce que deja esa noticia es innegable. Ojalá Condal haya aprendido de los errores de la 2: Criston Cole matando gente impunemente, las reinas quedando a cafés con las rivales que liquidaron a sus hijos, las invenciones peregrinas que salen de la nada. La Batalla del Gullet tiene que ser la mayor set-piece de acción dragoneril de la historia de la televisión. Si no lo es, el fandom sabrá muy bien a quién pasarle la factura. Y pista: no es a George.'
    ],
    date:       '28/02/2026',
    url:        'https://www.3djuegos.com/tv-series/noticias/nuevo-trailer-casa-dragon-espectacular-problema-que-serie-tiene-enemigo-casa',
    page:       'got.html',
    pageLabel:  'GOT',
    accent:     '#cc2200',
    source:     '3djuegos.com',
    img:        '',
    tags:       ['House of the Dragon', 'HBO', 'Temporada 3', 'George R.R. Martin', 'Batalla del Gullet', '2026']
  },

  // ── ARTICLE 8 ───────────────────────────────────────────────────
  {
    id:         'noticia-coc-arkham-2026',
    topic:      'misc',
    category:   'misc',
    emoji:      '\uD83C\uDFB2',
    badgeLabel: 'ROL',
    title:      'Call of Cthulhu: Arkham llega en tapa dura \u2014 290 localizaciones de la ciudad de Lovecraft',
    summary:    'Chaosium public\u00f3 el 22 de febrero la edici\u00f3n en tapa dura a todo color de \u201cCall of Cthulhu: Arkham\u201d, el manual definitivo de la ciudad m\u00e1s ic\u00f3nica del Mito. El tomo cubre 290 localizaciones repartidas en 9 barrios, m\u00e1s de 80 PNJs detallados y dos mapas p\u00f3ster de la ciudad \u2014uno para jugadores y otro para el Guardiam con informaci\u00f3n oculta. Los pedidos desde chaosium.com incluyen el PDF sin coste adicional.',
    full:       [],
    date:       '26/02/2026',
    url:        'https://www.chaosium.com/blogcall-of-cthulhu-arkham-will-be-released-in-full-color-hardcover-on-february-22nd/',
    page:       'rol.html',
    pageLabel:  'ROL',
    accent:     '#9933ff',
    source:     'chaosium.com',
    img:        '',
    tags:       ['Call of Cthulhu', 'Arkham', 'Chaosium', 'Rol de Mesa', 'Lovecraft', 'Tapa Dura']
  },

  // ── ARTICLE 7 ───────────────────────────────────────────────────
  {
    id:         'noticia-warhammer-gran-cathay-2026',
    topic:      'misc',
    category:   'misc',
    emoji:      '\u2699',
    badgeLabel: 'WARHAMMER',
    title:      'Gran Cathay refuerza la Gran Muralla \u2014 Nuevas miniaturas para The Old World',
    summary:    'Games Workshop abre preventas el 28 de febrero para \u201cDefenders of the Great Bastion\u201d, el nuevo set de refuerzo de Gran Cathay para Warhammer: The Old World. El pack trae Astromancers, Soldados Campesinos, Equipos de Ca\u00f1\u00f3n Grulla y Fusileros de Granizo de Hierro, m\u00e1s un Arcane Journal de 48 p\u00e1ginas con reglas, trasfondo y la batalla de Nan-Li. Llega a tiendas el 14 de marzo.',
    full:       [],
    date:       '26/02/2026',
    url:        'https://www.warhammer-community.com/en-gb/articles/lyzpUdEz/saturday-pre-orders-warhammer-the-old-world/',
    page:       'warhammer.html',
    pageLabel:  'WARHAMMER',
    accent:     '#cc2200',
    source:     'warhammer-community.com',
    img:        '',
    tags:       ['Warhammer', 'The Old World', 'Gran Cathay', 'Games Workshop', 'Miniaturas', 'Preventas']
  },

  // ── ARTICLE 6 ───────────────────────────────────────────────────
  {
    id:         'noticia-unity-ia-gdc-2026',
    topic:      'gamedev',
    category:   'gamedev',
    emoji:      '\uD83C\uDFAE',
    badgeLabel: 'GAMEDEV',
    title:      'Unity anuncia IA que genera juegos completos desde texto \u2014 sin programar',
    summary:    'El CEO de Unity Matthew Bromberg confirm\u00f3 que la compa\u00f1\u00eda presentar\u00e1 en la GDC 2026 una Beta de IA que permite generar juegos casuales completos usando texto en lenguaje natural, sin escribir una sola l\u00ednea de c\u00f3digo. El sistema es accesible desde el navegador y combina el contexto del proyecto Unity con modelos de IA externos. Una apuesta que redefine qui\u00e9n puede hacer videojuegos... y que ya levanta ampollas entre los devs de siempre.',
    full:       [],
    date:       '26/02/2026',
    url:        'https://www.gamedeveloper.com/programming/unity-says-its-ai-tech-will-soon-be-able-to-prompt-full-casual-games-into-existence-',
    page:       'gamedev.html',
    pageLabel:  'GAMEDEV',
    accent:     '#00ff41',
    source:     'gamedeveloper.com',
    img:        '',
    tags:       ['Unity', 'Inteligencia Artificial', 'GDC 2026', 'Gamedev', 'IA Generativa', 'Casual Games']
  },

  // ── ARTICLE 5 ───────────────────────────────────────────────────
  {
    id:         'noticia-ffvii-remaster-2026',
    topic:      'gaming',
    category:   'gaming',
    emoji:      '\uD83D\uDD79',
    badgeLabel: 'GAMING',
    title:      'Final Fantasy VII vuelve a PC... con m\u00e1s caos que Meteor',
    summary:    'Square Enix ha relanzado el FF7 original en Steam y GOG con modo velocidad x3, sin encuentros aleatorios, mejoras de batalla y autoguardado. Gratis para due\u00f1os del port de 2013. El problema: sali\u00f3 sin ejecutable, lleva reviews \u2018Mostly Negative\u2019 y los mods de 7th Heaven a\u00fan no son compatibles. Cl\u00e1sico Square.',
    full:       [],
    date:       '25/02/2026',
    url:        'https://insider-gaming.com/final-fantasy-7-re-release-launches-to-mostly-negative-reviews-on-steam/',
    page:       'gaming.html',
    pageLabel:  'GAMING',
    accent:     '#00bfff',
    source:     'insider-gaming.com',
    img:        '',
    tags:       ['Final Fantasy VII', 'Square Enix', 'Steam', 'GOG', 'Remaster', 'PC']
  },

  // ── ARTICLE 2 ───────────────────────────────────────────────────
  {
    id: 2,
    topic:      'gaming',
    category:   'gaming',
    emoji:      '🕹',
    badgeLabel: 'GAMING',
    title:      'CONFIRMADO: GOD OF WAR 1, 2 Y 3 TENDR\u00c1N REMAKE COMPLETO',
    summary:    'Sony confirm\u00f3 en el \u00faltimo State of Play que la trilog\u00eda griega de Kratos vuelve desde cero con gr\u00e1ficos actuales. La saga que defini\u00f3 una generaci\u00f3n regresa para la siguiente. La ira del Fantasma de Esparta, ahora en 4K y con toda la brutalidad intacta.',
    full: [
      'Los remakes de toda la vida exigen sangre, sudor y nostalgia, y Sony parece decidida a explotar los tres. El anuncio de los remakes de God of War 1, 2 y 3 cay\u00f3 en el \u00faltimo State of Play como una espada c\u00f3smica sobre la escena gaming. Para quienes crecimos machacando botones contra Ares o destrozando a Poseid\u00f3n en una de las secuencias m\u00e1s brutales de la historia del videojuego, esto es como que te regalen la PS2 con todos los juegos incluidos.',
      '2026 est\u00e1 resultando ser el a\u00f1o de los remakes. La industria, tras a\u00f1os de hipertrofiar el AAA y explotar franquicias hasta el agotamiento, parece haber descubierto que la nostalgia vende y que hay una generaci\u00f3n entera que solo conoce al pap\u00e1 n\u00f3rdico con el hacha y no tiene ni idea de qui\u00e9n es el Kratos griego. Ponerles en las manos la trilog\u00eda que lo empez\u00f3 todo, con motores actuales, es un movimiento brillante.',
      'Sin fecha de lanzamiento confirmada a\u00fan, pero el mero anuncio ya ha encendido todos los foros del planeta. Si respetan la brutalidad, la \u00e9pica y el caos mitol\u00f3gico de los originales, esto puede ser uno de los remakes del a\u00f1o. Y si los cagan... bueno, Kratos sabr\u00e1 de qui\u00e9n vengarse.'
    ],
    date:       '24/02/2026',
    url:        'https://www.merca20.com/state-of-play-2026-confirmado-god-of-war-1-2-y-3-remake/',
    page:       'gaming.html',
    pageLabel:  'GAMING',
    accent:     '#00bfff',
    source:     'merca20.com',
    img:        'assets/img/god_of_war_remake.jpg',
    tags:       ['God of War', 'Remake', 'PlayStation', 'Kratos', 'Sony', 'State of Play']
  },

  // ── ARTICLE 3 ───────────────────────────────────────────────────
  {
    id: 3,
    topic:      'magic',
    category:   'misc',
    emoji:      '✨',
    badgeLabel: 'MTG',
    title:      'MAGIC VUELVE A LORWYN \u2014 18 A\u00d1OS DE ESPERA TERMINARON',
    summary:    'Wizards of the Coast lanz\u00f3 el 23 de enero Lorwyn Eclipsed, el regreso al plano m\u00e1s m\u00e1gico e inquietante de toda la historia de Magic. Dieciocho a\u00f1os despu\u00e9s del original, las hadas, los kithkin y los gigantes vuelven... pero algo oscuro ha cambiado para siempre.',
    full: [
      'Para quienes empezamos en Magic por la era cl\u00e1sica \u2014Ice Age, Chronicles, Tempest\u2014, Lorwyn siempre tuvo un aura especial. Un plano de luz perpetua, sin noche, habitado por criaturas de cuento que escond\u00edan algo mucho m\u00e1s oscuro bajo su apariencia id\u00edlica. El set original de 2007 fue una bocanada de aire fresco en el juego, y ahora despu\u00e9s de dieciocho a\u00f1os, vuelve transformado.',
      'Lorwyn Eclipsed llega con la promesa de explorar qu\u00e9 le ocurri\u00f3 a ese plano de eterna tarde dorada. El nombre ya lo dice todo: algo ha eclipsado la luz que defin\u00eda a Lorwyn. Los trailers y el arte filtrado muestran un mundo cambiado, con las facciones originales irreconocibles. Wizards juega bien sus cartas \u2014nunca mejor dicho\u2014 dosificando el lore y dejando m\u00e1s preguntas que respuestas.',
      'Y por si fuera poco, 2026 viene cargad\u00edsimo para MTG: despu\u00e9s de Lorwyn Eclipsed, llegan sets de Tortugas Ninja, Marvel Super Heroes, El Hobbit y Star Trek antes de fin de a\u00f1o. Si en los 90 te parec\u00eda que hab\u00eda demasiados sets con Chronicles y Fallen Empires... querido lector, a\u00fan no conoces la verdadera abundancia. Que fluya el man\u00e1.'
    ],
    date:       '23/02/2026',
    url:        'https://magic.wizards.com/en/news/announcements/everything-announced-for-magic-the-gathering-in-2026',
    page:       'magic.html',
    pageLabel:  'MTG',
    accent:     '#9933ff',
    source:     'magic.wizards.com',
    img:        'assets/img/lorwyn_eclipsed.jpg',
    tags:       ['Magic: The Gathering', 'Lorwyn Eclipsed', 'Wizards of the Coast', '2026', 'Nuevo Set']
  },

  // ── ARTICLE 4 ───────────────────────────────────────────────────
  {
    id: 4,
    topic:      'got',
    category:   'got',
    emoji:      '🐉',
    badgeLabel: 'GOT',
    title:      'HOUSE OF THE DRAGON T3 \u2014 YA HAY TR\u00c1ILER Y FECHA',
    summary:    'La guerra de los dragones vuelve en junio de 2026. HBO acaba de soltar el primer tr\u00e1iler oficial y confirma que la Batalla del Gullet llegar\u00e1 por fin a la pantalla.',
    full: [
      'La temporada 1 de House of the Dragon ten\u00eda su gracia, \u00bfeh? Sangre, incesto Targaryen bien dosificado, dragones que molaban y un Paddy Considine que se com\u00eda la pantalla como un abuelo cabreado con la vida. No era perfecta, pero te dejaba con ganas de m\u00e1s. Pues bien: lleg\u00f3 la temporada 2 y los guionistas debieron de decirse: "\u00bfY si la cagamos a lo grande? \u00a1Venga, inventemos por doquier y a ver qu\u00e9 pasa!"',
      'Porque, madre m\u00eda, qu\u00e9 demencial fue todo. Ser Criston Cole asesinando a gente importante sin consecuencias aparentes: mata a uno en una boda delante de todo el mundo, luego liquida a otro consejero como quien pela una patata, y el t\u00edo sigue de Mano del Rey, de Lord Comandante y de lo que le salga. \u00bfD\u00f3nde est\u00e1 la justicia westerosi? \u00bfEn el caj\u00f3n de "ya lo arreglamos en la temporada 3"?',
      'Y luego las reinas, Rhaenyra y Alicent, vi\u00e9ndose cara a cara varias veces como si fueran dos amigas quedando para un caf\u00e9 despu\u00e9s del pilates. "Oye, guapa, perdona que mataran a tu hijo/nieto, pero \u00bftomamos algo y hablamos de paz?". Han asesinado a hijos y nietos de ambas, hay una guerra civil que est\u00e1 dejando Westeros como un coladero de sangre, y ellas ah\u00ed, confidencias en el Sept o en Dragonstone, quedando tan amigas. Esto no es Juego de Tronos, esto es The Real Housewives of King\u2019s Landing.',
      'Y no olvidemos al primog\u00e9nito Velaryon... \u00a1el puto Laenor sobrevive! Finge su muerte en la temporada 1 (un invento de los guionistas que ya ol\u00eda raro), se pira a Essos con su novio a vivir la vida loca, y en la 2 ni rastro, pero Seasmoke anda por ah\u00ed buscando nuevo jinete como si nada. En fin, la temporada 2 fue un festival de incoherencias y cambios absurdos del libro. La 1 promet\u00eda fuego y sangre; la 2 nos dio humo, bostezos y un "pero \u00bfqu\u00e9 co\u00f1o?" cada dos por tres. \u00bfRenovamos para la 3? Claro, porque somos masoquistas. Pero, por favor, que alguien avise a George R.R. Martin antes de que conviertan Poniente en una sitcom de dragones.'
    ],
    date:       '22/02/2026',
    url:        '',
    page:       'got.html',
    pageLabel:  'GOT',
    accent:     '#cc2200',
    source:     '',
    img:        'assets/img/house_of_the_dragon_s3.jpg',
    tags:       ['House of the Dragon', 'HBO', 'Targaryens', 'Batalla del Gullet', '2026']
  }

];

// NEWS_TRACKER
// used_topics: ["got", "esports", "gaming", "magic", "gamedev", "warhammer", "rol", "nba"]
// last_update: "2026-03-08"
// next_available: ["got", "nba", "rol"]
