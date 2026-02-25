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

  // ── ARTICLE 1 ───────────────────────────────────────────────────
  {
    id: 1,
    topic:      'esports',
    category:   'esports',
    emoji:      '🏆',
    badgeLabel: 'ESPORTS',
    title:      'LEC VERSUS 2026 \u2014 FINAL EN BARCELONA ESTE FIN DE SEMANA',
    summary:    'La LEC llega a su cl\u00edmax: los playoffs del LEC Versus 2026 se deciden en Barcelona del 27 de febrero al 1 de marzo. Karmine Corp lidera, G2 y Fnatic llegan por los pelos. El primer clasificado a First Stand ya huele a polvo de Summoner\u2019s Rift.',
    full: [
      'El LEC Versus 2026 ha resultado ser la temporada de invierno m\u00e1s sorprendente que se recuerda. El formato completamente nuevo \u2014que invita a equipos de ligas regionales europeas a medirse con los diez grandes franquiciados\u2014 ha tra\u00eddo revelaciones may\u00fasculas. Karmine Corp domin\u00f3 la fase regular sin discusi\u00f3n, con NAVI como la gran sorpresa del invierno. Hasta aqu\u00ed, bien.',
      'Pero el verdadero titular lo escribieron G2 Esports y Fnatic, acabando s\u00e9ptimos y octavos respectivamente en la fase regular. Para quienes llevamos a\u00f1os viendo a estos dos colossos repartirse los t\u00edtulos europeos como si fuera una tradici\u00f3n familiar, verlos en esa posici\u00f3n produce casi v\u00e9rtigo. Y eso sin mencionar que tres equipos espa\u00f1oles clasificaron a playoffs: GIANTX, Team Heretics y Movistar KOI. La escena espa\u00f1ola en su mejor momento.',
      'Este fin de semana Barcelona es la capital del LoL competitivo europeo. El ganador va directo a First Stand 2026, el primer evento internacional de la temporada. G2 ya barri\u00f3 3-0 a Movistar KOI en cuartos, demostrando que los veteranos a\u00fan tienen colmillo cuando m\u00e1s importa. \u00bfPodr\u00e1 Karmine Corp mantener su dominio o el viejo orden europeo contraataca?'
    ],
    date:       '25/02/2026',
    url:        'https://liquipedia.net/leagueoflegends/LEC/2026/Versus',
    page:       'esports.html',
    pageLabel:  'ESPORTS',
    accent:     '#ffcc00',
    source:     'liquipedia.net',
    img:        'assets/img/lec_versus_2026.jpg',
    tags:       ['LEC', 'Versus 2026', 'Barcelona', 'Karmine Corp', 'G2 Esports', 'First Stand']
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

// NEWS_TRACKER: {"used_topics":["got","esports","gaming","magic","gaming"],"last_update":"2026-02-25"}
// Next session available topics: gamedev · warhammer · rol · nba
