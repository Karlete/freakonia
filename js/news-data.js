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

// NEWS_TRACKER: {"used_topics":["got","esports","gaming","magic","gaming","gamedev","warhammer","rol","got","gaming","esports","nba","esports","gaming","esports"],"last_update":"2026-02-28"}
// Next session available topics: got · gaming · gamedev · warhammer · nba
