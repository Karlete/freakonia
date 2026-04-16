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

  // ── NOTICIA 64 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-s3-nuevos-caballeros-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'GOT',
    title: 'House of the Dragon T3 suma dos caballeros al elenco — Barry Sloane y Tom Cullen se unen a la Danza de Dragones',
    summary: 'Westeros.org confirma dos nuevas incorporaciones al reparto de la tercera temporada: Barry Sloane da vida a Ser Adrian Redfort, caballero del Valle, y Tom Cullen interpreta a Ser Luthor Largent, oficial de la Guardia de la Ciudad. Además, el showrunner Ryan Condal ha adelantado que habrá un episodio conceptual de estructura completamente distinta al resto de la serie.',
    full: [
      'La Danza de Dragones sigue sumando piezas. Westeros.org ha confirmado dos nuevas incorporaciones al elenco de la tercera temporada de House of the Dragon. Barry Sloane, conocido por su trabajo en series como Revenge y Six, da vida a Ser Adrian Redfort, un caballero del Valle cuyo papel en la guerra civil Targaryen está por ver pero que en el libro tiene presencia en los enfrentamientos de la coalición norteña. Tom Cullen, al que muchos recordarán de Knightfall, se mete en la piel de Ser Luthor Largent, un oficial de la Guardia de la Ciudad de desempeño temible que aparece en los capítulos más violentos de Fuego y Sangre.',
      'Estas incorporaciones se suman a las que ya conocíamos: James Norton como Lord Ormund Hightower y Tommy Flanagan como Roderick Dustin, el Roddy el Ruin que lidera a los Lobos del Invierno. El casting sigue apostando por actores de perfil medio-alto con experiencia en ficción épica, lo cual es una señal de que la tercera temporada no va a escatimar en el tratamiento de los personajes secundarios. En la segunda, ese fue uno de los puntos débiles: figuras que en el libro son importantes quedaron reducidas a apariciones casi anecdóticas.',
      'Lo más llamativo de lo que ha trascendido hasta ahora es el comentario del showrunner Ryan Condal sobre un episodio "conceptual" que romperá la estructura habitual de la serie. No ha dado detalles, pero la frase exacta apunta a un capítulo que se aleja del formato tradicional y apuesta por algo más experimental en términos narrativos. La comunidad ya especula: ¿un episodio centrado en un único personaje? ¿Algo en el estilo del "Long Night" de GoT pero bien ejecutado? Sea lo que sea, la expectativa está ahí.',
      'Con estreno confirmado para junio de 2026 y el cast al completo en el CCXP México del 24 al 26 de abril para una presentación con avances exclusivos, la campaña de promoción de la T3 ya está en marcha. La segunda temporada dejó el listón bajo, pero con la guerra completamente desatada y personajes nuevos de peso entrando en escena, hay motivos para el optimismo cauteloso.'
    ],
    date: '16/04/2026',
    url: 'https://www.westeros.org/News/Entry/Three_New_Characters_Announced_for_House_of_the_Dragon',
    page: 'got.html',
    pageLabel: 'GoT',
    accent: '#cc2200',
    source: 'westeros.org',
    img: 'assets/img/news/got_generic.webp',
    tags: ['House of the Dragon', 'HBO', 'Temporada 3', 'Barry Sloane', 'Tom Cullen', 'Targaryen', 'Danza de Dragones', 'casting']
  },

  // ── NOTICIA 63 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nba-playin-resultados-2026',
    topic: 'nba',
    category: 'nba',
    emoji: '🏀',
    badgeLabel: 'NBA',
    title: 'NBA Play-In 2026 — Avdija firma 41 puntos en la remontada de Portland y Curry saca a los Warriors del abismo contra los Clippers',
    summary: 'La primera tanda del Play-In 2026 dejó imágenes para el recuerdo. Deni Avdija anotó 41 puntos para rescatar a Portland de -11 en el cuarto cuarto y eliminar a Phoenix. En el Oeste, los Warriors remontaron una desventaja de 13 con Curry dominando la segunda mitad. En el Este, los 76ers sin Joel Embiid sobrevivieron gracias a Tyrese Maxey (31 pts) y los Hornets avanzan de la mano de LaMelo Ball y Coby White.',
    full: [
      'El Play-In Tournament 2026 ha dado exactamente lo que prometía: partidos competidos, remontadas y actuaciones individuales para el recuerdo. En el Oeste, Deni Avdija firmó uno de los mejores partidos de su carrera con 41 puntos para devolver a los Portland Trail Blazers a la postemporada. Los Blazers llegaron al cuarto cuarto con once puntos de desventaja ante los Phoenix Suns, y Avdija se encargó de desmontar la ventaja local prácticamente él solo en los minutos finales. Una actuación que ya circula por todas las redes y que recuerda a esos partidos que definen el rumbo de una franquicia.',
      'En el otro cruce del Oeste, los Golden State Warriors protagonizaron la remontada de la noche contra los Los Angeles Clippers. Trece puntos abajo con menos de diez minutos para el final, Stephen Curry activó el modo que le conocemos de toda la vida y anotó 27 puntos solo en la segunda mitad. Al Horford colaboró con cuatro triples en los momentos clave, y los Warriors sacaron adelante un partido que ya tenían perdido. Con esta victoria, Golden State accede directamente a la séptima plaza del Oeste para los playoffs.',
      'En el Este, la historia fue la ausencia de Joel Embiid. Los Philadelphia 76ers tuvieron que afrontar el partido sin su estrella, y Tyrese Maxey respondió como el líder que está demostrando ser: 31 puntos y una actuación madura que silenció cualquier duda sobre si los Sixers podían sobrevivir sin su pívot. Ganaron el partido contra el Orlando Magic y aseguran la séptima plaza del Este.',
      'Los Charlotte Hornets también avanzaron en la misma conferencia gracias a una noche inspirada de LaMelo Ball, con Coby White ejerciendo de apoyo perfecto cuando la presión apretaba más. Charlotte aspira a la octava plaza en los juegos de segunda ronda del Play-In, donde se cruzará con el Orlando Magic. Los playoffs propiamente dichos arrancan el 18 de abril, y el cuadro ya está prácticamente definido. La postemporada promete.'
    ],
    date: '16/04/2026',
    url: 'https://www.nba.com/playoffs/2026/play-in-tournament',
    page: 'nba.html',
    pageLabel: 'NBA',
    accent: '#FF8C00',
    source: 'nba.com',
    img: 'assets/img/news/nba_generic.png',
    tags: ['NBA', 'Play-In 2026', 'Avdija', 'Portland Trail Blazers', 'Golden State Warriors', 'Stephen Curry', '76ers', 'Maxey', 'Charlotte Hornets', 'postemporada']
  },

  // ── NOTICIA 62 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-unity-platform-toolkit-unite2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '🎮',
    badgeLabel: 'GAMEDEV',
    title: 'Unite 2026 — Unity lanza el Platform Toolkit y promete generar juegos casuales completos con IA desde un prompt',
    summary: 'En Unite 2026, Unity presentó el Platform Toolkit: una herramienta que permite lanzar un juego en múltiples plataformas con una sola línea de C#. También anunció acuerdos con Stripe y Coda para tiendas externas, y confirmó que su IA podrá generar juegos casuales completos desde instrucciones de texto. Un roadmap conservador pero enfocado en recuperar la confianza perdida desde el escándalo del Runtime Fee.',
    full: [
      'Unite 2026 ha llegado con un mensaje claro de Unity Technologies: estabilidad y herramientas prácticas antes que anuncios espectaculares. El evento, seguido de cerca por toda la comunidad de desarrolladores indie y estudios medianos, presentó el Platform Toolkit como la novedad más relevante del año. La promesa es ambiciosa en su sencillez: con una sola línea de código C#, el motor gestiona automáticamente las especificidades de cada plataforma —achievements, sistemas de pago, notificaciones— y las convierte al formato nativo correspondiente. Para un indie que quiere lanzar simultáneamente en PC, consolas y móvil sin volverse loco con SDKs diferentes, es una herramienta que puede cambiar el flujo de trabajo de forma significativa.',
      'Unity también anunció acuerdos con los procesadores de pago Stripe y Coda para conectar tiendas web externas directamente desde el motor. En un contexto donde Epic y Apple llevan años peleando en los tribunales por las comisiones de las tiendas, la posibilidad de derivar ventas a una tienda propia con mejores márgenes es una opción que muchos desarrolladores van a mirar con atención. No es una solución mágica —la implementación depende de cada plataforma y sus políticas—, pero es un paso en la dirección correcta.',
      'El anuncio más llamativo, y también el más debatido en redes, es la afirmación de que la IA de Unity será capaz de generar juegos casuales completos a partir de instrucciones en texto. La empresa no dio una fecha concreta ni mostró una demo pública, pero el CEO Matthew Bromberg confirmó la dirección en la que trabajan. Los escépticos señalan que "casual game" es un término muy amplio y que el camino entre un prototipo generado por IA y un juego publicable sigue siendo largo. Los optimistas ven en ello el mismo salto que supuso pasar de programar píxel a píxel a usar motores como el propio Unity.',
      'Lo que más se agradece de Unite 2026 es precisamente lo que no tiene: promesas vacías. Desde el escándalo del Runtime Fee en 2023, que provocó una fuga masiva de desarrolladores hacia Godot y otras alternativas, Unity ha estado en modo reparación. El roadmap de este año es deliberadamente conservador, centrado en rendimiento, velocidad de iteración y herramientas que los devs han pedido directamente. Si cumplen, la comunidad indie que se quedó —y la que se fue y está mirando de reojo— tiene razones para volver a confiar en el motor más usado de los últimos diez años.'
    ],
    date: '16/04/2026',
    url: 'https://www.gamedeveloper.com/programming/unity-unveils-new-toolkit-to-accelerate-multi-platform-launches',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'gamedeveloper.com',
    img: 'assets/img/news/unity_ai.webp',
    tags: ['Unity', 'Unite 2026', 'Platform Toolkit', 'IA', 'indie dev', 'game development', 'Unity 6', 'GameDev']
  },

  // ── NOTICIA 61 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-lec-spring-semana3-2026',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'LEC Spring 2026 — Semana 3: Team Vitality lidera con 5-1 y GIANTX sigue invicto con 4-0',
    summary: 'La semana 3 del LEC Spring 2026 (11-13 abril) ha dejado la tabla más clara: Team Vitality manda con 5 victorias en 6 partidos y GIANTX sigue sin perder un solo set. Heretics acumula su peor racha del split con dos derrotas más. SK Gaming sorprende ganando a Fnatic. La semana 4 arranca el 18 de abril.',
    full: [
      'La tercera semana del LEC Spring 2026 ha dejado resultados muy claros en la parte alta y baja de la tabla. Team Vitality es el líder indiscutible con cinco victorias en seis partidos disputados. Esta semana el equipo se deshizo de G2 Esports (2-1 el viernes 11) y de Shifters (2-1 el sábado 12), consolidando su dominio en un split que juega todos contra todos en formato BO3.',
      'El dato que más llama la atención es GIANTX: cuatro partidos jugados, cuatro victorias, cero derrotas. El martes 13 cerraron la semana despachando a Shifters 2-0 de forma cómoda, y la pregunta que ya circula por la comunidad es cuándo va a aparecer su primera derrota y quién se la va a dar. Con NaVi tercero en 3-1 y Movistar KOI en 2-2, la parte alta del split tiene mucho por definir todavía.',
      'La semana también tuvo sus sorpresas. SK Gaming, que llevan 2-4 en el global del split, se sacó de encima el papel de aspirante a colista derrotando a Fnatic 2-0 el miércoles 13. Es la segunda victoria seguida de SK tras haber caído ante MKOI (2-0) el viernes 11. Por el lado de Heretics, la situación se complica: perdieron contra NaVi (0-2) el viernes y contra Karmine Corp (0-2) el sábado, dejando su balance en 1-5 y convirtiéndose en el equipo más castigado del split junto a Shifters.',
      'Karmine Corp es otro nombre a vigilar: solo han jugado dos partidos y los dos los han ganado. Su rendimiento en las próximas semanas, cuando se enfrenten a los equipos de la parte alta, será determinante para saber si son candidatos reales a playoffs o si el calendario fácil del inicio los ha favorecido. La semana 4 arranca el 18 de abril y el Roadtrip de París del 24 al 26 de abril será el primer gran evento presencial del split.'
    ],
    date: '14/04/2026',
    url: 'https://globalsportsarchive.com/competition/leagueoflegends/lec-2026-spring/regular-season/145302/',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'globalsportsarchive.com',
    img: 'assets/img/news/lec_versus_2026.webp',
    tags: ['LEC', 'League of Legends', 'Split Spring 2026', 'Team Vitality', 'GIANTX', 'SK Gaming', 'Fnatic', 'Heretics', 'Esports']
  },

  // ── NOTICIA 60 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nba-playin-2026',
    topic: 'nba',
    category: 'nba',
    emoji: '🏀',
    badgeLabel: 'NBA',
    title: 'NBA Play-In 2026 — Arranca hoy la postemporada: Heat, Hornets, Trail Blazers y Suns pelean por los últimos billetes a playoffs',
    summary: 'El Play-In Tournament 2026 da el pistoletazo de salida este 14 de abril. En el Este, Heat y Hornets se cruzan en el partido 9-10. En el Oeste, Trail Blazers visita a Suns en el 7-8. Los playoffs propiamente dichos arrancan el 18 de abril, con Detroit y OKC como primeros cabezas de serie.',
    full: [
      'El calendario de la NBA llega hoy a uno de sus momentos más emocionantes del año: el Play-In Tournament 2026 da su primer pistoletazo de salida el 14 de abril. El formato, consolidado ya como un clásico de la temporada, enfrenta a los equipos del séptimo al décimo puesto de cada conferencia en una mini eliminatoria que define los últimos dos clasificados por lado a la postemporada.',
      'En el Este, el enfrentamiento de la primera tanda es Miami Heat (10) contra Charlotte Hornets (9), dos franquicias que llegan a este punto con algo que demostrar. Charlotte, con una segunda mitad de temporada que ha generado ilusión, busca el billete a playoffs en uno de sus mejores momentos recientes. Miami tiene el peso del nombre y la experiencia, pero no llega con las garantías de temporadas anteriores. En el Oeste, los Portland Trail Blazers (8) visitan a los Phoenix Suns (7) en un duelo que promete ser más competido de lo que sugieren los puestos.',
      'Es importante recordar cómo funciona el Play-In: el ganador del partido 7-8 entra directamente a playoffs como séptimo cabeza de serie. El perdedor del 7-8 y el ganador del 9-10 disputan un segundo cruce, y solo el ganador de ese partido obtiene la octava plaza. Es un sistema que mantiene la tensión más allá de la primera noche y que en los últimos años ha dado partidos de altísimo nivel.',
      'Los playoffs propiamente dichos arrancan el 18 de abril, con los Detroit Pistons encabezando el Este y Oklahoma City Thunder el Oeste en lo que son dos de las grandes historias de la temporada. Con Luka Dončić tocado en los Lakers y los Spurs de Wembanyama con ganas de dejar huella en su primera postemporada seria, el cuadro promete emociones desde la primera ronda. La mejor época del año para los que disfrutamos del baloncesto está aquí.'
    ],
    date: '14/04/2026',
    url: 'https://www.nba.com/news/2026-nba-playoffs-schedule',
    page: 'nba.html',
    pageLabel: 'NBA',
    accent: '#FF8C00',
    source: 'nba.com',
    img: 'assets/img/news/nba_ball.webp',
    tags: ['NBA', 'Play-In 2026', 'playoffs', 'Miami Heat', 'Charlotte Hornets', 'Trail Blazers', 'Suns', 'postemporada', 'OKC', 'Detroit Pistons']
  },

  // ── NOTICIA 59 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-magic-secrets-strixhaven-2026',
    topic: 'magic',
    category: 'magic',
    emoji: '✨',
    badgeLabel: 'MTG',
    title: 'Magic: The Gathering — Secrets of Strixhaven llega el 24 de abril con prerrelease, early access en Arena y mazos de bienvenida renovados',
    summary: 'El próximo set de Magic: The Gathering vuelve a la academia más famosa del Multiverso. Secrets of Strixhaven llega a las tiendas el 24 de abril, con lanzamiento previo en MTG Arena el 21. El 15 de abril, early access con streamers y pros. El 17, prerrelease en tiendas WPN. Además, el set estrena una nueva oleada de mazos de bienvenida para nuevos jugadores.',
    full: [
      'El regreso a Strixhaven, la academia de magia más famosa de todo el Multiverso, llega por fin a las tiendas físicas. Secrets of Strixhaven sale al mercado el 24 de abril de 2026, precedido por el lanzamiento digital en MTG Arena el 21 de abril. Para los jugadores que quieren pillar el set con antelación, el 17 de abril se celebran los eventos de Prerrelease en tiendas WPN participantes de todo el mundo, como es habitual en cada lanzamiento de Magic.',
      'Antes de eso, el 15 de abril Wizards organiza el Early Access Event de Arena: un grupo seleccionado de streamers, jugadores competitivos y creadores de contenido tendrá acceso anticipado al set para mostrarlo en directo en Twitch y YouTube. Es el escaparate que la comunidad utiliza para ver en acción las mecánicas nuevas antes de decidir qué cartas perseguir en el lanzamiento oficial. La novela Strixhaven: Omens of Chaos ya se publicó el 7 de abril como adelanto del lore que rodea al set.',
      'Una de las novedades más interesantes de este lanzamiento es la renovación de los Welcome Decks, los mazos de bienvenida monocolor de 40 cartas que llegan gratis a las tiendas WPN para que los jugadores nuevos puedan empezar sin coste. El movimiento parece pensado para aprovechar el interés creciente en el juego y facilitar la entrada justo cuando el set vuelve a un entorno tan popular como Strixhaven. En MTG Arena, las recompensas de temporada incluyen sobres del nuevo set y estilos de carta exclusivos para los rangos Platino y Diamante.',
      'Strixhaven original —lanzado en 2021— dividió opiniones con su diseño de colegios, pero creó un espacio de juego muy diferenciado que muchos jugadores recuerdan con cariño. Que Wizards vuelva con Secrets implica que tienen historia que contar ahí. Si el set hace honor al nombre, habrá secretos que valdrán mucho más que cualquier carta de tirada alta.'
    ],
    date: '14/04/2026',
    url: 'https://magic.wizards.com/en/news/mtg-arena/announcements-april-13-2026',
    page: 'magic.html',
    pageLabel: 'MTG',
    accent: '#9933ff',
    source: 'magic.wizards.com',
    img: 'assets/img/news/secrets_of_strixhaven.webp',
    tags: ['Magic: The Gathering', 'Secrets of Strixhaven', 'MTG Arena', 'Prerrelease', 'Wizards of the Coast', 'abril 2026', 'nuevo set']
  },

  // ── NOTICIA 58 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-warhammer-old-world-adepticon-gw-2026',
    topic: 'warhammer',
    category: 'warhammer',
    emoji: '⚔️',
    badgeLabel: 'WARHAMMER',
    title: 'Warhammer: The Old World — Adepticon 2026 y el debate que nadie quiere ignorar: lo que GW necesita cambiar',
    summary: 'El Adepticon 2026 fue el mayor torneo de The Old World en Norteamérica, con 78 jugadores y Andrea Ninni con Jade Fleet llevándose el título. Pero el torneo también puso sobre la mesa los problemas del juego: packs de compensación fragmentados, reglas con lagunas y la necesidad urgente de que Games Workshop tome el control de su propio sistema.',
    full: [
      'El Adepticon 2026 fue el mayor torneo de Warhammer: The Old World celebrado en América del Norte hasta la fecha. Con 78 participantes en el campeonato individual, Andrea Ninni con su ejército Jade Fleet se llevó el trofeo invicto tras ganar sus cinco enfrentamientos del día. Más allá del resultado, el evento dejó algo más valioso que el campeón: una conversación abierta y honesta sobre el estado del juego y lo que Games Workshop necesita hacer para que The Old World no pierda el impulso que tenía en su relanzamiento.',
      'El análisis de Bell of Lost Souls —una de las comunidades wargamers más seguidas en inglés— identifica cuatro grandes áreas de mejora. La primera es establecer un circuito de eventos oficial y estandarizado que venga de la propia empresa: sin ese referente, la comunidad se fragmenta en formatos locales incompatibles que no pueden compararse entre sí. La segunda es publicar actualizaciones de balance más frecuentes, algo que GW ya hace en sus otros juegos activos como Age of Sigmar o 40K, y que en The Old World brilla por su ausencia.',
      'La tercera crítica apunta al reglamento: hay secciones del libro de reglas que generan interpretaciones distintas según la región, especialmente en lo relativo a las reglas de escaramuzadores. Una segunda edición que cierre esas lagunas daría una base de juego uniforme a escala global. La cuarta —y quizás la más urgente— es que Games Workshop recupere el control de su propio juego: la proliferación de packs de compensación no oficiales y FAQs alternativos ha generado un mosaico de formatos regionales donde no todos juegan a lo mismo. Sin dirección unificada desde GW, el juego se arriesga a quedarse como un hobby de nicho fragmentado.',
      'The Old World está en su tercer año desde el relanzamiento, y la base de jugadores responde con entusiasmo cuando GW lo alimenta. El Arcane Journal de Gran Catay —lanzado a principios de año con nuevas unidades como los Astromancers y los equipos de Crane Gun— fue muy bien recibido. La comunidad existe, el talento de pintura es espectacular y el lore del Viejo Mundo tiene una profundidad que pocas ambientaciones de fantasía pueden igualar. Ahora le toca a GW hacer los deberes.'
    ],
    date: '14/04/2026',
    url: 'https://www.belloflostsouls.net/2026/04/warhammer-the-old-world-four-things-gw-needs-to-do-to-save-the-game.html',
    page: 'warhammer.html',
    pageLabel: 'Warhammer',
    accent: '#8B0000',
    source: 'belloflostsouls.net',
    img: 'assets/img/news/the_old_world.jpg',
    tags: ['Warhammer', 'The Old World', 'Games Workshop', 'Adepticon 2026', 'torneo', 'balance', 'comunidad', 'GW']
  },

  // ── NOTICIA 57 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-dnd-villainous-options-playtest-2026',
    topic: 'rol',
    category: 'rol',
    emoji: '🎲',
    badgeLabel: 'ROL',
    title: 'D&D lanza el playtest de Villainous Options — ahora los jugadores también pueden ser los malos',
    summary: 'Wizards of the Coast ha publicado un nuevo Unearthed Arcana con opciones de juego para personajes villanos. El playtest abre la puerta a construir PJs con rasgos oscuros de forma oficial, una petición que la comunidad llevaba tiempo haciendo.',
    full: [
      'Wizards of the Coast acaba de publicar un nuevo Unearthed Arcana bajo el título Villainous Options, y la comunidad de D&D ya está dando vueltas a todo lo que implica. El playtest introduce opciones mecánicas oficiales para construir personajes con rasgos claramente oscuros o directamente malvados: habilidades, trasfondos y características que hasta ahora quedaban fuera del manual principal o dependían de la buena voluntad del DM.',
      'Esto es algo que muchos jugadores llevaban tiempo pidiendo. La edición 2024 del Player\'s Handbook eliminó el alineamiento como restricción mecánica, y este playtest parece el siguiente paso lógico: si cualquier personaje puede actuar de cualquier manera, ¿por qué no tener herramientas diseñadas específicamente para campañas oscuras o grupos de antihéroes? Personalmente me parece una dirección interesante, aunque ya veo los debates infinitos en Reddit sobre si esto "arruina" D&D.',
      'Como siempre con los Unearthed Arcana, el material está sujeto a cambios según el feedback que reciba. Si te interesa probarlo o dar tu opinión, Wizards tiene habilitado el formulario de respuesta habitual. Yo ya tengo pensado un warlock con más de un secreto que esconder.'
    ],
    date: '11/04/2026',
    url: 'https://www.enworld.org/',
    page: 'rol.html',
    pageLabel: 'Rol',
    accent: '#9b59b6',
    source: 'enworld.org',
    img: 'assets/img/news/dungeons_and_dragons.webp',
    tags: ['D&D', 'Dungeons & Dragons', 'Unearthed Arcana', 'Wizards of the Coast', 'Playtest']
  },

  // ── NOTICIA 56 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-s3-junio-2026-confirmado',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'GOT',
    title: 'House of the Dragon T3 confirmada para junio — el elenco al completo y la Danza de Dragones en su punto álgido',
    summary: 'HBO ha confirmado que House of the Dragon vuelve en junio de 2026 con 8 episodios. El elenco completo retoma la guerra civil Targaryen, con nuevas incorporaciones como James Norton y Tommy Flanagan. La T4 y última ya tiene fecha: 2028.',
    full: [
      'Ya es oficial: House of the Dragon regresa en junio de 2026 con su tercera temporada, la penúltima de la serie. HBO ha confirmado los 8 episodios que continuarán la Danza de Dragones, la guerra civil Targaryen que dejó la segunda temporada en un punto bastante tenso. Emma D\'Arcy, Matt Smith, Olivia Cooke, Tom Glynn-Carney y prácticamente todo el reparto principal regresan. Además se incorporan James Norton como Lord Ormund Hightower y Tommy Flanagan como Roderick Dustin, el llamado Roddy el Ruin, liderando a los Lobos del Invierno del Norte.',
      'El tráiler ya cayó en febrero y hay que reconocer que tiene muy buena pinta. Se ve a Jaehaerys montando su dragón hacia la Batalla del Gaznate, una secuencia que en el libro es brutal y que esperaba con ganas. La T2 dejó mucho que desear tras el nivel que había marcado la primera, así que hay presión sobre Ryan Condal para que esta remonte. Con la guerra ya completamente desatada, el terreno está abonado para que sea la temporada más espectacular.',
      'Además, el cast aparecerá en el CCXP México del 24 al 26 de abril para una presentación con avances exclusivos. Si todo va bien, la T4 y final llegará en 2028 para cerrar definitivamente la historia de los Targaryen.'
    ],
    date: '11/04/2026',
    url: 'https://www.gamesradar.com/entertainment/fantasy-shows/house-of-the-dragon-season-3-release-date-cast-plot-trailer-news/',
    page: 'got.html',
    pageLabel: 'GoT',
    accent: '#cc2200',
    source: 'gamesradar.com',
    img: 'assets/img/news/house_of_the_dragons.webp',
    tags: ['House of the Dragon', 'HBO', 'Targaryen', 'Game of Thrones', 'Temporada 3']
  },

  // ── NOTICIA 55 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-oblivion-remastered-gamepass-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🎮',
    badgeLabel: 'GAMING',
    title: 'Oblivion Remastered llega a Game Pass el 16 de abril — el regreso que nadie esperaba tan pronto',
    summary: 'The Elder Scrolls IV: Oblivion Remastered sale de Game Pass Premium y se expande a Ultimate y PC Game Pass el 16 de abril. Un clásico de 2006 actualizado visualmente que vuelve a estar al alcance de millones de jugadores de golpe.',
    full: [
      'No hace mucho Bethesda sorprendió a todo el mundo con el anuncio de Oblivion Remastered, y ahora la sorpresa se completa: el juego llega a Game Pass Ultimate y PC Game Pass el 16 de abril. Llevaba un tiempo disponible solo para suscriptores de Game Pass Premium, pero a partir de esta semana se abre a la base más amplia del servicio. Para los que ya tienen Ultimate o PC Game Pass, es una incorporación directa sin coste adicional.',
      'Oblivion es uno de esos juegos que definen una época. Lo recuerdo perfectamente: el portal de Oblivion abriéndose por primera vez, el sistema de nivelado roto que nadie entendía del todo, y horas perdidas recorriendo Cyrodiil sin ningún objetivo concreto más allá de explorar. La versión remasterizada mantiene la esencia pero actualiza gráficos, iluminación y rendimiento para que se pueda disfrutar en hardware moderno sin que chirríe demasiado.',
      'Si nunca lo jugaste, esta es probablemente la mejor excusa para hacerlo. Y si ya lo conoces, seguro que hay una quimera o un Daedra por matar que tienes pendiente desde 2006.'
    ],
    date: '11/04/2026',
    url: 'https://news.xbox.com/en-us/2026/04/07/xbox-game-pass-april-2026-wave-1/',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'news.xbox.com',
    img: 'assets/img/news/gaming_generic.webp',
    tags: ['Elder Scrolls', 'Game Pass', 'Oblivion', 'Bethesda', 'Remaster']
  },

  // ── NOTICIA 54 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-les-split-primavera-2026',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'Arranca el Split de Primavera de la LES: la liga española de LoL ya está en marcha con Movistar KOI como campeón defensor',
    summary: 'La Liga Española de League of Legends echa a rodar su Split de Primavera 2026 hoy mismo, con la Jornada 1 en directo. Tras un Kickoff Tournament histórico —el primero bajo el nombre LES y la organización de Lastlap— donde Movistar KOI se coronó campeón, llega el split que definirá quién va al EMEA Masters.',
    full: [
      'La LES, la Liga Española de League of Legends nacida en 2026 de las cenizas de la Superliga, arranca hoy su Split de Primavera con la primera jornada de la temporada. El cambio fue histórico: después de más de una década bajo el paraguas de la LVP de Mediapro, la competición nacional pasó a manos de Lastlap y CABAL Esports, con el apoyo de Riot Games dentro de la estructura ERL europea. El nuevo nombre, nuevo organizador, nuevo formato y nueva identidad visual han sido recibidos con ilusión por una comunidad que llevaba tiempo pidiendo un producto renovado.',
      'El Kickoff Tournament de febrero dejó claro que la LES tiene nivel. Celebrado de forma presencial en Madrid con entradas agotadas en la jornada inaugural, los ocho equipos —Movistar KOI Fénix, GIANTX iTero, Los Heretics, Barça eSports, UCAM Esports, Falke Esports, LUA Gaming y Universitat de Barcelona— disputaron el primer título de la nueva era. Movistar KOI Fénix se llevó el trofeo y con él las dos plazas de clasificación para el EMEA Masters junto al finalista. El roster con mayor presencia española de la historia de la liga fue uno de los puntos más celebrados del torneo.',
      'El Split de Primavera que arranca hoy es el verdadero primer examen de largo recorrido para la LES. El formato alterna días de competición a lo largo de semanas, con los mejores equipos clasificándose para los playoffs finales. En juego está la plaza para representar a España en el EMEA Masters de primavera, el torneo regional que agrupa a los campeones de las ERL de toda Europa. MKOI llega como favorito, pero GIANTX y Los Heretics ya demostraron en el Kickoff que pueden competir al máximo nivel.',
      'Para mí, como fan de la escena española desde los tiempos de la primera Superliga, este arranque tiene sabor especial. Recordar los años de la LCS española, seguir a equipos históricos como los viejos Giants o los primeros MAD Lions, y ver ahora una liga con producción renovada y ocho equipos con identidad propia genera una mezcla de nostalgia y esperanza. La LES tiene una oportunidad real de recuperar la atención de una comunidad que nunca dejó de querer un producto doméstico de calidad. Hoy empieza a construirlo.'
    ],
    date: '08/04/2026',
    url: 'https://lesesports.es/split-primavera-2026/calendario/',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'lesesports.es',
    img: 'assets/img/news/esports_generic.webp',
    tags: ['LES', 'Liga Española', 'League of Legends', 'Split Primavera', 'Movistar KOI', 'GIANTX', 'Lastlap', 'EMEA Masters', '2026']
  },

  // ── NOTICIA 53 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-s3-junio-dragonfire-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'GOT',
    title: 'House of the Dragon T3 llega en junio y HBO anuncia Dragonfire, el juego móvil oficial del universo Targaryen',
    summary: 'HBO ha confirmado que House of the Dragon regresa en junio de 2026 con su tercera temporada, la más ambiciosa según el showrunner Ryan Condal. Y por si fuera poco, esta semana se anunció Dragonfire, un juego móvil gratuito de estrategia ambientado en los Siete Reinos, con lanzamiento previsto para este verano.',
    full: [
      'Ya es oficial: House of the Dragon Temporada 3 llega en junio de 2026 en HBO y Max. La confirmación llegó desde el CCXP México, donde parte del reparto —Matt Smith, Olivia Cooke y Fabien Frankel— confirmaron su presencia en el evento del 24 al 26 de abril con paneles, sesiones de firmas y material exclusivo de la producción. La tercera temporada constará de ocho episodios y cubrirá nuevos capítulos de la Danza de los Dragones, el conflicto civil Targaryen que quedó en punto álgido al final de la segunda temporada.',
      'Ryan Condal ha confirmado que la producción está en plena fase de postproducción: cortes, edición y efectos visuales están en marcha para cumplir el estreno estival. El showrunner describió esta temporada como la más ambiciosa de las tres, con la Batalla del Gullet como uno de los grandes set pieces prometidos desde hace tiempo. La T4, que será la temporada final de la serie, ya está en proceso de escritura y llegará en 2028, cerrando definitivamente la historia Targaryen antes de los eventos de Game of Thrones.',
      'Pero la noticia que más me sorprendió esta semana fue el anuncio de Dragonfire, un juego móvil gratuito de estrategia desarrollado por Warner Bros. Games Boston y ligado directamente al universo de House of the Dragon. El juego promete una experiencia de guerra territorial donde los jugadores crían, entrenan y vuelan con dragones para conquistar los Siete Reinos, con una mecánica definida como "estrategia social moderna". Su lanzamiento está programado para este verano, coincidiendo con el estreno de la T3.',
      'Seré honesto: la T2 me decepcionó bastante. Las decisiones de guión con Ser Criston Cole actuando impunemente en cada escena, las reuniones surrealistas entre reinas en medio de una guerra civil, o la resurrección conveniente de Laenor Velaryon convirtieron la serie en algo difícil de defender. Pero la T3 tiene ingredientes de sobra para redimirse: la Batalla del Gullet, el giro en las lealtades de varios personajes clave y una historia que en los libros de George R.R. Martin es absolutamente demoledora. Junio no puede llegar antes.'
    ],
    date: '08/04/2026',
    url: 'https://collider.com/house-of-the-dragon-season-3-companion-mobile-game-of-thrones-dragonfire-free-to-play-summer-release/',
    page: 'got.html',
    pageLabel: 'GoT',
    accent: '#cc2200',
    source: 'collider.com',
    img: 'assets/img/news/got_generic.webp',
    tags: ['House of the Dragon', 'HBO', 'Temporada 3', 'Dragonfire', 'Targaryens', 'Ryan Condal', 'junio 2026', 'Game of Thrones']
  },

  // ── NOTICIA 52 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-gaming-abril-2026-lanzamientos',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🎮',
    badgeLabel: 'GAMING',
    title: 'Abril 2026 gaming: Pragmata de Capcom, Saros de Housemarque y el Paladín de vuelta en Diablo IV',
    summary: 'Abril viene cargado de lanzamientos importantes. Pragmata, la nueva IP de Capcom ambientada en la Luna, llega el 17 de abril tras años de espera. Saros, el nuevo roguelike de los creadores de Returnal, cierra el mes el 30 en PS5. Y Diablo IV: Lord of Hatred trae al Paladín el 28 de abril. Hay para todos.',
    full: [
      'Después de un marzo que ya dejó el listón alto con Crimson Desert y el remake de Fatal Frame II, abril no afloja el ritmo. El lanzamiento más esperado del mes es sin duda Pragmata, la nueva IP de Capcom que lleva años generando expectativa desde su primer tráiler. Tras múltiples retrasos, el juego llegará el 17 de abril a PS5, Xbox Series, Switch 2 y PC. La propuesta nos lleva a una estación de investigación lunar en un futuro cercano donde una IA hostil lo controla todo: nuestro personaje, Hugh, un astronauta armado, deberá cooperar con Diana, una androide con habilidades de hackeo, para sobrevivir y volver a la Tierra. Los gráficos en los tráilers cortan el aliento y Capcom confía tanto en el producto que incluso adelantó la fecha de lanzamiento.',
      'También en abril llega Saros, el nuevo título de Housemarque para PS5 exclusivo de la plataforma de Sony, con fecha el 30 de abril. Los creadores del brillante Returnal vuelven a la carga con otro roguelike de corte arcade donde el dominio de patrones de enemigos y la precisión son la clave. Saros nos lleva a Carcosa, una colonia perdida bajo un eclipse permanente, donde interpretamos a Arjun Devraj, un ejecutor que lucha por sobrevivir. El actor Rahul Kohli forma parte del reparto de voces. Si Returnal os gustó aunque os diera algún que otro infarto, Saros está diseñado exactamente para vosotros.',
      'Y el mes no estaría completo sin mencionar Diablo IV: Lord of Hatred, la segunda gran expansión del ARPG de Blizzard, que llega el 28 de abril. La novedad más celebrada por la comunidad: por fin llega el Paladín, la clase más pedida por los fans desde el lanzamiento original, junto a un segundo personaje que aún no ha sido revelado. La historia enfrenta a los jugadores con Mefisto en un enfrentamiento que promete cerrar el arco narrativo iniciado con la expansión anterior.',
      'Más allá de los tres grandes del mes, abril también tiene hueco para Replaced (un cyberpunk en pixel art con fondos 3D que llega en Game Pass el 14), Mouse: P.I. for Hire (shooter en primera persona con estética de los dibujos animados de los años 30 de Disney) y Vampire Crawlers, el spin-off estratégico de Vampire Survivors para el 21 de abril. Un mes redondo para los que llevamos décadas sin poder parar de jugar.'
    ],
    date: '08/04/2026',
    url: 'https://arkaiacorp.com/blog/lanzamientos-videojuegos-abril-2026',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'arkaiacorp.com',
    img: 'assets/img/news/gaming_generic.webp',
    tags: ['Pragmata', 'Saros', 'Diablo IV', 'Capcom', 'Housemarque', 'Blizzard', 'lanzamientos abril 2026', 'gaming']
  },

  // ── NOTICIA 51 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-unity-hdrp-mantenimiento-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '🎮',
    badgeLabel: 'GAMEDEV',
    title: 'Unity pone HDRP en modo mantenimiento: el debate sobre el futuro del motor indie más popular del mundo',
    summary: 'En febrero de 2026, Unity anunció que su pipeline de renderizado de alta definición (HDRP) pasa a modo mantenimiento: sin nuevas funciones, solo corrección de bugs críticos. La comunidad indie se divide: ¿es el fin del Unity 3D de alta calidad o simplemente una apuesta inteligente por centrarse en URP y mobile?',
    full: [
      'El 25 de febrero de 2026, Unity tomó una decisión que ha encendido el debate en la comunidad de desarrolladores: colocar HDRP —su pipeline de renderizado de alta definición, pensado para competir con Unreal Engine en el espacio AAA y mid-core— en modo mantenimiento. En la práctica, esto significa que HDRP no recibirá nuevas funciones ni mejoras visuales. Solo se aplicarán correcciones de bugs críticos. Todo el esfuerzo del equipo de gráficos de Unity se concentra ahora en URP (Universal Render Pipeline).',
      'La justificación interna de Unity es clara: HDRP nunca consiguió masa crítica entre los desarrolladores. Quien quería gráficos de altísima fidelidad optaba por Unreal Engine 5, con Nanite y Lumen como argumentos aplastantes. Unity nunca pudo competir en ese espacio, y mantener dos pipelines activos consumía recursos sin retorno suficiente. La apuesta ahora es llevar URP al siguiente nivel, con Iluminación Global en tiempo real en el horizonte. La pregunta es si URP puede realmente satisfacer a los estudios que usaban HDRP para proyectos de calidad media-alta.',
      'El contexto importa: esta decisión llega tres años después del escándalo de las Runtime Fees de 2023, que dañó profundamente la confianza de la comunidad en Unity como empresa. Muchos desarrolladores llevan tiempo evaluando alternativas —Godot para 2D y proyectos ligeros, Unreal para 3D de alta calidad— y la noticia del HDRP ha acelerado esas conversaciones. No obstante, el informe de desarrollo de Unity 2026 muestra que el motor sigue siendo dominante en móvil y en equipos pequeños, con el 64% de los estudios de menos de 50 personas apostando por proyectos más pequeños y manejables donde URP es perfectamente suficiente.',
      'Para los desarrolladores indie de 2D —como la mayoría de los que hacen juegos de rol, plataformas o RPGs clásicos— el movimiento de Unity no cambia prácticamente nada: URP siempre fue la opción recomendada en esos géneros. La conversación que importa es para los estudios que querían hacer algo visualmente ambicioso sin saltar a Unreal. Y ahí Unity tendrá que demostrar que URP puede cubrir ese espacio vacío que deja HDRP.'
    ],
    date: '06/04/2026',
    url: 'https://www.gamedeveloper.com/programming/unity-says-its-ai-tech-will-soon-be-able-to-prompt-full-casual-games-into-existence-',
    page: 'gamedev.html',
    pageLabel: 'Gamedev',
    accent: '#00ff41',
    source: 'gamedeveloper.com',
    img: 'assets/img/news/gamedev_generic.webp',
    tags: ['Unity', 'HDRP', 'URP', 'game development', 'indie dev', 'Godot', 'Unreal Engine', '2026']
  },

  // ── NOTICIA 50 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nba-playoffs-picture-april-2026',
    topic: 'nba',
    category: 'nba',
    emoji: '🏀',
    badgeLabel: 'NBA',
    title: 'NBA: Detroit lidera el Este, OKC el Oeste — última semana de temporada regular antes del Play-In',
    summary: 'La temporada regular acaba el 12 de abril y el cuadro de playoffs se está dibujando. Los Pistons son el primer cabeza de serie del Este en veinte años. Oklahoma City manda en el Oeste. Luka Dončić pierde la recta final con los Lakers. El Play-In arranca el 14 de abril, los playoffs el 18.',
    full: [
      'Queda una semana de temporada regular en la NBA y el panorama de playoffs está tomando forma definitiva. En el Este, los Detroit Pistons han sellado el primer cabeza de serie con un balance de 57-21 —su primera posición número uno en el Este desde la temporada 2006-07. Un hito que nadie esperaba hace tres temporadas, cuando Detroit era uno de los peores equipos de la liga. En el Oeste, Oklahoma City Thunder lidera con autoridad, con los San Antonio Spurs de Wembanyama pisándole los talones en el segundo puesto. Los Spurs vuelven a playoffs tras seis años de ausencia, otra de las grandes historias de la temporada.',
      'La mala noticia de la recta final llega desde Los Ángeles: los Lakers han perdido a Luka Dončić (lesión en el isquiotibial) y a Austin Reaves (oblicuo) para los partidos que quedan. Los Lakers se aferran al tercer puesto del Oeste pero llegan tocados a la postemporada, lo que cambia por completo las perspectivas del cuadro occidental. Denver, Houston y los Clippers pelean por acomodarse lo mejor posible antes del 12 de abril.',
      'En el Este, la zona del quinto al décimo puesto es un hervidero: Atlanta Hawks, Philadelphia 76ers, Toronto Raptors, Charlotte Hornets, Orlando Magic y Miami Heat se juegan dos plazas directas a playoffs y dos al Play-In en los últimos partidos. Los Bucks y los Bulls ya están eliminados, dejando un bloque compacto de seis equipos con opciones reales. Los Raptors llevan una racha excepcional de final de temporada que los tiene en posición privilegiada.',
      'El calendario del final de la temporada: última jornada el 12 de abril, Play-In Tournament del 14 al 17 de abril, inicio de los playoffs el 18 de abril y Finales de la NBA programadas para comenzar el 3 de junio. Hay hambre de playoffs y el cuadro promete emociones desde la primera ronda.'
    ],
    date: '06/04/2026',
    url: 'https://www.nba.com/news/2026-nba-playoffs-standings-and-bracket-updates',
    page: 'nba.html',
    pageLabel: 'NBA',
    accent: '#FF8C00',
    source: 'nba.com',
    img: 'assets/img/news/nba_generic.png',
    tags: ['NBA', 'playoffs 2026', 'Detroit Pistons', 'OKC Thunder', 'Wembanyama', 'Luka Doncic', 'Play-In', 'temporada regular']
  },

  // ── NOTICIA 49 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-lec-spring-semana2-2026',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'LEC Spring Semana 2: Fnatic se redime aplastando a G2 — el reencuentro más esperado de la liga',
    summary: 'Fnatic había caído dos veces en la primera semana ante GIANTX y MKOI. Esta semana el equipo naranja se ha sacudido la presión de encima de la mejor manera posible: un 2-1 ante G2 Esports que vale mucho más que tres puntos. La semana también dejó a SK cayendo ante GIANTX y a VIT derrotando a NaVi.',
    full: [
      'Si la primera semana del LEC Spring 2026 había dejado a Fnatic con el cuerpo lleno de dudas — dos derrotas consecutivas ante GIANTX primero y el doloroso 0-2 ante Movistar KOI después — la segunda semana ha llegado para recordar por qué el equipo naranja siempre acaba apareciendo cuando menos te lo esperas. El viernes 4 de abril empezó bien para los favoritos: G2 Esports barrió a Team Heretics 2-0 sin dificultades, y SK Gaming hizo lo propio ante Shifters. Vitality, por su parte, se llevó la partida en BO1 ante Natus Vincere. Todo apuntaba a que G2 iba a confirmar ese buen tono el sábado... pero Fnatic tenía otros planes.',
      'El sábado 5 de abril, en lo que era el partido más atractivo de la segunda semana, Fnatic derrotó a G2 Esports 2-1 en un BO3 disputado. Vladi en mid y Upset en bot-lane lideraron el juego naranja en un partido donde G2, pese a llevarse el segundo mapa, no encontró respuesta en el tercero frente a un Fnatic que jugó con convicción y claridad táctica. Era la primera derrota de G2 en el split y mandaba un mensaje claro: la liga está completamente abierta. En ese mismo día, GIANTX se encargó de confirmar su buen momento al superar a SK Gaming 2-0, sumando tres victorias en su arranque de temporada.',
      'El domingo 6 de abril completa la segunda semana con los enfrentamientos GIANTX vs Team Heretics y Vitality vs Movistar KOI, duelos que terminarán de definir el cuadro de clasificación al término de la segunda jornada. Con tres semanas disputadas del todos contra todos, el panorama está lejos de aclararse: G2 sigue siendo uno de los favoritos pero ya ha mostrado que no es invulnerable, Fnatic ha respondido cuando más lo necesitaba, y GIANTX emerge como uno de los equipos revelación del split.',
      'El LEC Spring 2026 tiene paradas internacionales que elevan aún más el interés: el Roadtrip de París se celebra del 24 al 26 de abril en Les Arènes, y el Madrid Arena acoge el segundo Roadtrip del 8 al 10 de mayo. Los dos finalistas del split se clasifican para el MSI 2026 y la Esports World Cup. Quedan semanas de liga por delante y la narrativa ya está calentando motores.'
    ],
    date: '06/04/2026',
    url: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'liquipedia.net',
    img: 'assets/img/news/esports_generic.webp',
    tags: ['LEC', 'LEC Spring 2026', 'Fnatic', 'G2 Esports', 'GIANTX', 'semana 2', 'League of Legends', 'esports']
  },

  // ── NOTICIA 48 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-secrets-of-strixhaven-spoilers-2026',
    topic: 'magic',
    category: 'magic',
    emoji: '✨',
    badgeLabel: 'MTG',
    title: 'Secrets of Strixhaven llega el 24 de abril: la temporada de spoilers ya está en marcha',
    summary: 'Magic: The Gathering regresa a la universidad de magia más famosa del Multiverso. Secrets of Strixhaven sale el 24 de abril y la temporada de spoilers ya está mostrando cartas. Nuevos personajes, vida off-campus en Arcavios y el regreso del Mystical Archive. Además: la novela Strixhaven: Omens of Chaos ya está disponible.',
    full: [
      'Si Strixhaven: School of Mages de 2021 fue el primer curso, Secrets of Strixhaven es la segunda visita al campus más prestigioso del Multiverso de Magic. El set sale el 24 de abril de 2026 y la temporada de spoilers lleva semanas filtrando cartas que ya están generando conversación en la comunidad. La premisa esta vez es diferente: los protagonistas son estudiantes de segundo año explorando la vida fuera del campus de Arcavios, lejos de las paredes de sus Colegios. La dinámica narrativa se aleja del formato de primer curso para explorar qué hay más allá de las clases, los exámenes y las rivalidades entre facultades.',
      'Entre los spoilers ya revelados destacan Banishing Betrayal, Heated Argument, Together as One y Oracle\'s Restoration —cartas que apuntan a un set con fuerte componente de control y magia de interacción. El Mystical Archive, la bonus sheet de cartas históricas que fue uno de los grandes atractivos del Strixhaven original, regresa en esta edición. Para los jugadores de Commander, el 24 de abril también llegan los decks de Strixhaven al completo.',
      'Más allá de las cartas, Wizards ha lanzado esta semana la novela juvenil Strixhaven: Omens of Chaos, escrita por Seanan McGuire, que expande el lore del set con una historia paralela de nuevos estudiantes navegando su identidad en el Multiverso. Cada ejemplar incluye una carta promocional Command Tower en marco Retro Frame, algo que los coleccionistas ya están cazando activamente.',
      'Secrets of Strixhaven llega en el mejor momento posible para Magic: después de las Tortugas Ninja en marzo —un set Universes Beyond que dividió opiniones pero vendió muy bien—, el juego necesitaba volver a territorio propio. Arcavios y sus cinco Colegios representan exactamente eso: Magic puro con identidad propia, sin IP externa. El mes de abril se pinta de universitario y mágico en los locales de juego de todo el mundo.'
    ],
    date: '06/04/2026',
    url: 'https://magic.wizards.com/en/news',
    page: 'magic.html',
    pageLabel: 'MTG',
    accent: '#9933ff',
    source: 'magic.wizards.com',
    img: 'assets/img/news/magic_generic.webp',
    tags: ['Magic: The Gathering', 'Secrets of Strixhaven', 'Strixhaven', 'spoilers', 'MTG 2026', 'Wizards of the Coast']
  },

  // ── NOTICIA 47 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-adepticon-old-world-2026',
    topic: 'warhammer',
    category: 'warhammer',
    emoji: '⚔️',
    badgeLabel: 'WARHAMMER',
    title: 'Adepticon 2026: Grand Cathay arrasa y los rumores de los Dogs of War calientan la comunidad',
    summary: 'El campeonato de Warhammer: The Old World del Adepticon 2026 ya tiene ganador: Andrea Ninni con su lista de Jade Fleet (Gran Catay) se alzó invicto con cinco victorias. Y mientras la competición competitiva vive su mejor momento, los rumores sobre un posible regreso de los Dogs of War a The Old World están incendiando los foros.',
    full: [
      'El Adepticon 2026 celebrado en Milwaukee ha sido el mayor evento de Warhammer: The Old World en Norteamérica hasta la fecha. 78 jugadores se inscribieron en el campeonato individual, superando el récord del LVO y del NOVA en este mismo formato. Tras cinco rondas de juego con composición limitada —solo dos Linternas de Gran Catay permitidas, restricciones en voladoras y monstruos—, una sola lista ganó los cinco enfrentamientos sin ceder una sola derrota. Su piloto: Andrea Ninni, con una lista de Jade Fleet de Gran Catay basada en un doble Lord Shugengan de nivel 3 y 4 con la Lore of Yang, apoyado por infantería de Lanza Larga y artillería.',
      'La victoria de Ninni confirma lo que muchos llevan meses viendo en la escena competitiva: Gran Catay sigue siendo el ejército a batir a nivel mundial, a pesar de las restricciones de composición introducidas precisamente para limitar su dominio. La combinación de magia de Yang, la regla Strikes First de las Lanzas Largas y la solidez defensiva del ejército resulta extremadamente difícil de contrarrestar si el rival no ha preparado específicamente una respuesta.',
      'Pero si la escena competitiva está animada, los rumores que circulan en la comunidad no se quedan atrás. Fuentes habituales del circuito de rumores de Games Workshop apuntan a que los Dogs of War —la legendaria facción mercenaria de Warhammer Fantasy que lleva décadas sin una presencia oficial— podrían recibir una revisión dentro del roadmap de 2026 para The Old World. Los Dogs of War, conocidos por sus regimientos de Tercios y sus unidades de élite a sueldo, fueron durante años una de las opciones más creativas del juego original. Su regreso sería una señal clara de que GW no solo está recuperando las grandes facciones, sino también los elementos más únicos del viejo Warhammer Fantasy.',
      'The Old World cierra su tercer año de existencia en una posición de salud envidiable. El juego ha pasado de ser una apuesta nostálgica a construir una escena competitiva real, con torneos internacionales de envergadura y un crecimiento constante de la base de jugadores. Si los Dogs of War se confirman, 2026 podría ser el año más grande del juego desde su relanzamiento.'
    ],
    date: '06/04/2026',
    url: 'https://www.belloflostsouls.net/2026/04/warhammer-the-old-world-the-unbeatable-list-adepticon-championship-2026.html',
    page: 'warhammer.html',
    pageLabel: 'Warhammer',
    accent: '#8B0000',
    source: 'belloflostsouls.net',
    img: 'assets/img/news/warhammer_generic.jpg',
    tags: ['Warhammer', 'The Old World', 'Adepticon 2026', 'Gran Catay', 'Dogs of War', 'torneos', 'rumores']
  },

  // ── NOTICIA 46 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-adepticon-tow-gran-cathay-2026',
    topic: 'warhammer',
    category: 'warhammer',
    emoji: '⚙',
    badgeLabel: 'WARHAMMER',
    title: 'Adepticon 2026: Gran Cathay arrasa con la Jade Fleet — el ejército más nuevo de The Old World se lleva el campeonato',
    summary: 'El mayor torneo de singles de The Old World en Norteamérica reunió a 78 jugadores en Milwaukee. Andrea Ninni ganó los cinco rondas con una lista de Gran Cathay centrada en magia Yang y artillería. El ejército más reciente del juego demuestra que Games Workshop sabe lo que hace cuando diseña una nueva facción.',
    full: [
      'El Adepticon 2026 pasará a la historia de Warhammer: The Old World como el torneo que confirmó lo que muchos sospechaban: Gran Cathay no es solo el ejército nuevo y brillante, es un ejército que gana. 78 jugadores se dieron cita en Milwaukee en lo que se convirtió en el mayor evento de singles de The Old World celebrado en Norteamérica, superando ligeramente al LVO y al NOVA Open anteriores. Cinco rondas de batalla, con restricciones de composición que limitaban las Linternas de Gran Cathay a un máximo de dos y ponían techo a voladoras y monstruos.',
      'El ganador fue Andrea Ninni con una lista de Jade Fleet —la flota de Gran Cathay— construida alrededor de dos Señores Shugengan de nivel 3 y 4 en el Lore de Yang, con accesorios mágicos orientados a la supervivencia y el control del tablero. La clave del ejército no estaba en la potencia bruta sino en la sinergia: los magos de Yang generan dados extra de energía cuando dos unidades amistosas forman el símbolo Yin-Yang, lo que convierte cada turno de magia en una palanca de decisión táctica constante. Cinco victorias en cinco rondas, sin un empate ni una derrota.',
      'El resultado reabre el debate sobre el equilibrio de Gran Cathay en el meta competitivo. Desde su lanzamiento en 2025, la facción ha generado opiniones divididas: para un sector de la comunidad es demasiado potente en control y magia, para otro simplemente requiere una curva de aprendizaje más pronunciada que otras facciones. Games Workshop publicó una FAQ de The Old World a principios de 2026 que ajustó algunos de los puntos más polémicos, pero el resultado del Adepticon sugiere que el trabajo de balance no ha terminado.',
      'Más allá del debate meta, el Adepticon 2026 deja una imagen positiva del estado del juego: 78 jugadores en un singles event es una cifra notable para un wargame de regimientos en 2026, y la variedad de facciones representadas en la parte alta de la tabla —Bretonia, Tomb Kings, Imperio y Elfos Silvanos entre los mejores puestos además de Gran Cathay— apunta a un meta competitivo más diverso de lo que las primeras impresiones sugerían. The Old World lleva ya más de dos años de vida y sigue creciendo.'
    ],
    date: '02/04/2026',
    url: 'https://www.belloflostsouls.net/2026/04/warhammer-the-old-world-the-unbeatable-list-adepticon-championship-2026.html',
    page: 'warhammer.html',
    pageLabel: 'Warhammer',
    accent: '#cc2200',
    source: 'belloflostsouls.net',
    img: 'assets/img/news/the_old_world.jpg',
    tags: ['Warhammer', 'The Old World', 'Adepticon 2026', 'Gran Cathay', 'torneo', 'competitivo', 'Jade Fleet']
  },

  // ── NOTICIA 45 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-secrets-strixhaven-spoilers-2026',
    topic: 'magic',
    category: 'magic',
    emoji: '✨',
    badgeLabel: 'MTG',
    title: 'Secrets of Strixhaven ya está en spoiler season — la Academia vuelve con el Archivo Místico en cada sobre',
    summary: 'El 31 de marzo arrancó oficialmente la temporada de previews de Secrets of Strixhaven, el próximo set de Magic que sale el 24 de abril. Nuevas mecánicas, cinco precons de Commander, los cinco dragones ancianos de vuelta y una carta del Archivo Místico garantizada en cada sobre de juego. El set que los jugadores llevaban pidiendo desde 2021.',
    full: [
      'La temporada de previews de Secrets of Strixhaven arrancó oficialmente el 31 de marzo con el Debut en WeeklyMTG, y lo que se ha mostrado hasta ahora justifica el hype que llevaba meses acumulándose. El set llega el 24 de abril a tiendas físicas —y el 21 en MTG Arena— con los prerrelease el 17 de abril. Strixhaven: School of Mages fue uno de los sets más queridos de la era reciente por su ambientación, sus colegios de magia y el concepto del Archivo Místico, y esta secuela promete ampliar todo eso con nuevas mecánicas y una narrativa que continúa donde lo dejó el set original.',
      'El gran titular del set es el regreso del Archivo Místico con una carta garantizada en cada sobre de juego — una vuelta a la política original después de años en los que los bonus sheets fueron haciéndose cada vez más raros en los sobres estándar. Las cartas confirmadas ya incluyen reprints de alta demanda como Stock Up y Sylvan Library, esta última llegando a MTG Arena por primera vez. Los sobres Collector incluirán además versiones en japonés con arte alternativo y versiones Silver Scroll, un tratamiento de foil especial que ya ha generado conversación en la comunidad.',
      'En cuanto a mecánicas nuevas, el set presenta Opus para Prismari —recompensa lanzar instantáneos y brujerías gastando cinco o más maná—, Infusion para Witherbloom —que comprueba si ganaste vida ese turno—, Increment para Quandrix —contadores +1/+1 cuando lanzas hechizos con más maná que el poder o resistencia de la criatura— y el retorno de Flashback para Lorehold. También vuelve Converge para las criaturas arcanas del plano. Son cinco mecánicas distintas, una por colegio, lo que encaja perfectamente con la fantasía de cada facción.',
      'Los cinco dragones ancianos regresan como cartas míticas, cada uno representando uno de los colegios. Lorehold, the Historian ya ha generado comentarios positivos por su sinergia con el maná alto y el flashback. En el plano de los planewalkers, Ral Zarek reaparece como Guest Lecturer —monocolor negro, sorprendiendo a los que esperaban un Ral azul-rojo— y Professor Dellian Fel debuta como nuevo personaje. Cinco precons de Commander, una por colegio, completan el lanzamiento. Con 125 cartas en el set principal y 379 en los productos Commander, Secrets of Strixhaven es el lanzamiento más completo del año para los jugadores de mesa.'
    ],
    date: '02/04/2026',
    url: 'https://mtgrocks.com/mtg-secrets-of-strixhaven/',
    page: 'magic.html',
    pageLabel: 'MtG',
    accent: '#9933ff',
    source: 'mtgrocks.com',
    img: 'assets/img/news/secrets_of_strixhaven.webp',
    tags: ['Magic: The Gathering', 'Secrets of Strixhaven', 'spoilers', 'Archivo Místico', 'Commander', 'MTG Arena', 'abril 2026']
  },

  // ── NOTICIA 44 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-unity-informe-gamedev-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '🎮',
    badgeLabel: 'GAMEDEV',
    title: 'El informe Unity 2026 confirma la tendencia: los estudios apuestan por juegos pequeños, IA integrada y mercados emergentes',
    summary: 'Unity ha publicado su informe anual de desarrollo de videojuegos 2026, basado en encuestas a 300 desarrolladores y datos de casi cinco millones de usuarios del motor. El mensaje es claro: la industria prefiere apostar por proyectos de menor escala, el 82% ya usa colaboraciones externas, y la India es el próximo gran mercado objetivo.',
    full: [
      'Unity ha publicado su informe anual sobre el estado del desarrollo de videojuegos en 2026, y el documento cambia el tono respecto al año anterior de una manera significativa. Si el informe de 2025 preguntaba "¿puede un estudio sobrevivir?", el de 2026 da la supervivencia por superada y plantea la siguiente pregunta: "¿cómo construir un futuro sostenible?". Basado en encuestas a 300 desarrolladores profesionales y en datos propios de cerca de cinco millones de usuarios del motor en 2025, el informe identifica cinco grandes tendencias que están redefiniendo cómo se hacen los videojuegos.',
      'La más destacada es la apuesta decidida por proyectos de menor escala. Los estudios, después de años de hipertrofiar presupuestos y equipos en la era post-pandemia, están volviendo a proyectos más contenidos y enfocados. La lógica es sencilla: menos riesgo, iteración más rápida y mayor claridad sobre qué es el juego desde el primer día. El informe señala que esta tendencia no es solo económica sino también creativa: los equipos pequeños toman decisiones más rápido y el juego final suele tener una identidad más definida.',
      'En cuanto a promoción y marketing, el 62% de los desarrolladores encuestados apuesta por eventos online y el 60% por redes sociales como sus principales canales. Los eventos presenciales siguen siendo relevantes para el 49%, pero no pueden competir con el alcance potencial y el coste reducido de los medios digitales. La colaboración externa también marca el paso: un 82% de los estudios declara usar colaboraciones y partnerships relacionados con sus juegos, mientras que un 32% está explorando nuevos géneros como vía de diversificación de ingresos.',
      'El mercado geográfico que más interesa a los desarrolladores para los próximos años es la India, con un 73% de los encuestados apuntando al subcontinente como su próximo objetivo de expansión. La razón encaja con los datos: el 60% de los estudios ha encontrado su mayor éxito reciente en Asia Central y del Sur. Para los desarrolladores indie que usamos Unity —como es mi caso con Fallen Valkyrie—, el informe confirma que el motor sigue siendo la opción más accesible del mercado: Unity Personal continúa siendo gratuito en 2026 para creadores individuales y equipos pequeños con ingresos por debajo de 200.000 dólares anuales.'
    ],
    date: '02/04/2026',
    url: 'https://unity.com/es/blog/2026-unity-game-development-report-trends',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'unity.com',
    img: 'assets/img/news/unity_ai.webp',
    tags: ['Unity', 'gamedev', 'informe 2026', 'indie', 'desarrollo de videojuegos', 'mercados emergentes', 'IA']
  },

  // ── NOTICIA 43 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-marathon-bungie-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🎯',
    badgeLabel: 'GAMING',
    title: 'Marathon de Bungie: el extraction shooter que vuelve a poner el nombre de un clásico en boca de todos',
    summary: 'Bungie ha lanzado en marzo 2026 su regreso a una de las franquicias más queridas de los 90. Marathon no es el shooter de ciencia ficción que algunos veteranos recuerdan: es un extraction shooter PvP por equipos que aspira a redefinir el género con la marca de calidad del estudio creador de Halo y Destiny.',
    full: [
      'Para muchos, Bungie es el estudio detrás de Halo y de los diez años de Destiny que marcaron el género looter-shooter. Pero antes de todo eso existía Marathon: una trilogía de shooters de ciencia ficción para Macintosh que sentó las bases del worldbuilding y la narrativa ambiental que después definirían a la compañía. En marzo de 2026, Bungie —ahora bajo el paraguas de Sony— ha lanzado un nuevo Marathon que no es una secuela directa ni un remake, sino algo completamente distinto: un extraction shooter de corte competitivo por equipos ambientado en el universo original.',
      'En los extraction shooters, el bucle de juego se basa en entrar a una zona, conseguir botín o completar objetivos, y salir vivo — con la amenaza constante de otros equipos rivales intentando hacer exactamente lo mismo. Es el género que popularizaron Escape from Tarkov y Hunt: Showdown, y que en los últimos años ha buscado sin demasiado éxito su gran hit de masas. La apuesta de Bungie es traer la pulcritud de diseño y el trabajo de feel de disparo que definen a Destiny al formato extraction, con una selección de runners —los personajes jugables— que aportan habilidades y estilos de juego diferenciados.',
      'El lanzamiento llega después de una beta cerrada que generó opiniones mixtas: entusiasmo por la fluidez del movimiento y la solidez del combate, dudas sobre si el loop de juego es suficientemente atractivo a largo plazo para el público general. Bungie tiene historial demostrado en mantener comunidades activas durante años —Destiny lleva más de una década en pie— y eso se nota en cómo Marathon gestiona la progresión y el riesgo/recompensa de cada incursión.',
      'El contexto de fondo es importante: Bungie ha pasado por un año convulso, con despidos masivos en 2024 y mayor control operativo de Sony. Marathon llega como el lanzamiento que la compañía necesitaba que funcionase. Los primeros datos de jugadores y la respuesta de la comunidad decidirán si el nombre histórico y el saber hacer de Bungie son suficientes para hacerse un hueco duradero en un género donde la retención lo es absolutamente todo.'
    ],
    date: '30/03/2026',
    url: 'https://www.gamespot.com/articles/marathon-everything-we-know-about-bungies-extraction-shooter/1100-6514617/',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'gamespot.com',
    img: 'assets/img/news/marathon.webp',
    tags: ['Marathon', 'Bungie', 'Sony', 'extraction shooter', 'PvP', 'FPS', 'marzo 2026']
  },

  // ── NOTICIA 42 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-dnd-2026-roadmap-ravenloft',
    topic: 'rol',
    category: 'rol',
    emoji: '🎲',
    badgeLabel: 'ROL',
    title: 'D&D 2026: Wizards of the Coast presenta un roadmap por temporadas — Ravenloft vuelve en junio con \'The Horrors Within\'',
    summary: 'Tras meses de silencio, Wizards of the Coast presentó en el GAMA Expo de Louisville su hoja de ruta para 2026. La gran novedad no es solo qué van a publicar, sino cómo: temporadas temáticas que agrupan sourcebooks, aventuras y productos auxiliares. La Temporada del Horror llega en junio con un regreso a Ravenloft.',
    full: [
      'El 3 de marzo de 2026, durante el GAMA Expo celebrado en Louisville (Kentucky), Wizards of the Coast rompió meses de silencio sobre sus planes para Dungeons & Dragons. La novedad más estructural no es ningún libro concreto, sino el cambio de formato en cómo se va a organizar el año de lanzamientos: en adelante, los productos se agruparán en temporadas temáticas, cada una anclada por un sourcebook principal y acompañada de aventuras, accesorios y materiales complementarios. El modelo, familiar para cualquier jugador de videojuegos con componentes de live service, llega ahora al rol de mesa.',
      'La primera temporada se llama Temporada del Horror y arranca en abril con el lanzamiento previsto de Ravenloft: The Horrors Within para el 16 de junio de 2026. El libro introduce nuevas subclases de temática oscura y amplía el setting de Ravenloft, el escenario de terror gótico cuya actualización más reciente data de 2021 con la salida de Van Richten\'s Guide to Ravenloft. Junto al libro principal llegarán un mazo de tarokka de 60 cartas compatible con el sourcebook, una pantalla de DM y un pack de mapas, todos en torno a 24,99 dólares y con salida en junio.',
      'A partir de julio arranca la Temporada de la Magia, anclada por Arcana Unleashed, un sourcebook que promete ser la guía definitiva para amantes de la magia en D&D. Incluirá opciones de creación de personaje de alta magia, un nuevo sistema para crear objetos mágicos que evolucionan con el personaje, y una aventura complementaria protagonizada por los Magos Rojos de Thay llamada Deadfall. En agosto llegarán además mazos de referencia para hechizos, objetos mágicos y monstruos, actualizados para el reglamento de 2024.',
      'Una tercera temporada —la Temporada de los Campeones— está confirmada para octubre-diciembre, aunque su sourcebook principal todavía no se ha anunciado. El cambio de modelo llega después de que 2025 fuera un año más tranquilo para D&D, marcado por restructuraciones internas. La apuesta por temporadas temáticas responde a la necesidad de crear eventos culturales alrededor de los lanzamientos y generar conversación coordinada. Para los aficionados al rol de mesa, es una señal de que la franquicia más icónica del sector va a por todas en la segunda mitad de la década.'
    ],
    date: '30/03/2026',
    url: 'https://gameinformer.com/tabletop/2026/03/03/dungeons-dragons-2026-roadmap-reveals-new-sourcebooks-seasons-and-spell-cards',
    page: 'rol.html',
    pageLabel: 'Rol',
    accent: '#9b59b6',
    source: 'gameinformer.com',
    img: 'assets/img/news/dungeons_and_dragons.webp',
    tags: ['Dungeons & Dragons', 'D&D', 'Wizards of the Coast', 'Ravenloft', 'sourcebook', 'TTRPG', '2026', 'rol de mesa']
  },

  // ── NOTICIA 41 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nba-finde-march-28-29-2026',
    topic: 'nba',
    category: 'nba',
    emoji: '🏀',
    badgeLabel: 'NBA',
    title: 'NBA fin de semana: Wembanyama arrasa en San Antonio, los Celtics se clasifican y los playoffs están que arden',
    summary: 'Seis partidos el sábado, nueve el domingo. Wembanyama y los Spurs pasaron por encima de los Bucks. Los Celtics sellaron su billete a playoffs. Sengun sigue en estado de gracia con los Rockets. Y Toronto hizo historia con una racha anotadora sin precedentes.',
    full: [
      'El sábado 28 de marzo dejó seis partidos de NBA con mucho que analizar. El más destacado: San Antonio Spurs 127-95 Milwaukee Bucks. Wembanyama volvió a demostrar por qué es la conversación del año en ambos lados de la pista —dominio total, los Spurs llegaron a más de 30 puntos de ventaja en el cuarto final y los Bucks no encontraron respuesta en ningún momento. En otra cancha, Jalen Green explotó por 31 puntos para liderar a los Phoenix Suns en una victoria cómoda ante los Utah Jazz (134-109), manteniendo a Phoenix con opciones reales de entrar entre los cuatro primeros del Oeste. Tyrese Maxey también regresó a la acción con los 76ers, que completaron una remontada con Maxey y Paul George anotando 26 cada uno y Embiid añadiendo 29.',
      'El domingo fue aún más movido: nueve partidos, varios con implicaciones directas en la carrera por la postemporada. Los Boston Celtics certificaron su plaza para los playoffs, sumando otro hito a una temporada que apunta muy alto. Los Denver Nuggets alargaron su racha de victorias aplastando a los Golden State Warriors 116-93, consolidándose con 48-28 en el balance. Alperen Sengun encadenó su tercer partido de 30 o más puntos en los últimos cuatro encuentros para los Houston Rockets en un 134-102 ante los Pelicans, con Kevin Durant y Jabari Smith sumando 20 cada uno. Los Rockets son ya 45-29 y están en zona de playoff en el Oeste.',
      'El momento más sorprendente del domingo lo protagonizaron los Toronto Raptors, que establecieron una nueva marca histórica de la NBA con una racha anotadora sin precedentes en su partido ante los Orlando Magic. Los Raptors han sido el equipo revelación de la recta final de temporada, ofreciendo actuaciones que van bastante más allá de lo que su posición en la tabla haría esperar. Oklahoma City también ganó, y Jalen Brunson firmó 32 puntos en Nueva York en una noche cargada de grandes actuaciones individuales.',
      'Con el Play-In programado para el 14-17 de abril y el inicio oficial de los playoffs el 18, la cuenta atrás ya es definitiva. En el Este, los Celtics lideran con autoridad. En el Oeste, OKC y San Antonio acechan en los dos primeros puestos, con un grupo compacto de equipos peleando por posiciones del cuatro al siete. Detroit tiene opciones de cerrar el título de división Central, Nueva York busca confirmar su plaza. Quedan semanas de temporada regular, pero los contornos del cuadro de playoffs ya están tomando forma.'
    ],
    date: '30/03/2026',
    url: 'https://www.nba.com/news/2026-nba-playoffs-standings-and-bracket-updates',
    page: 'nba.html',
    pageLabel: 'NBA',
    accent: '#e35205',
    source: 'nba.com',
    img: 'assets/img/news/nba_ball.webp',
    tags: ['NBA', 'Wembanyama', 'Spurs', 'Celtics', 'Sengun', 'Rockets', 'playoffs 2026', 'resultados']
  },

  // ── NOTICIA 40 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-akotsk-temporada-2-produccion-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title: 'A Knight of the Seven Kingdoms: la T2 ya está en producción y el estreno de 2027 empieza a tomar forma',
    summary: 'Tras el final de temporada que conquistó 9,5 millones de espectadores, Dunk y Egg ya están de vuelta. La segunda temporada adaptará The Sworn Sword y se espera para 2027, con la T3 (The Mystery Knight) ya confirmada.',
    full: [
      'El final de la primera temporada de A Knight of the Seven Kingdoms marcó 9,5 millones de espectadores —la cifra más alta de toda la temporada, sumando datos de Nielsen y streams en HBO Max. Un número que confirma que HBO tiene entre manos otra joya dentro del universo de Westeros. La buena noticia es que el viaje de Dunk y Egg no ha terminado: la segunda temporada ya está en producción desde diciembre de 2025, con previsión de cerrar el rodaje en torno a junio de 2026 y estreno previsto para 2027.',
      'La T2 adaptará The Sworn Sword, la segunda novela corta del ciclo Dunk y Egg de George R.R. Martin. En comparación con The Hedge Knight, el material de partida tiene una escala más contenida —el conflicto central gira en torno a los derechos sobre un río—, lo que exigirá a los guionistas expandir la historia con material original. Algo que ya demostraron saber hacer muy bien en la primera temporada, donde varias de las mejores escenas no procedían directamente de las páginas de Martin. La estructura de seis episodios cortos se mantiene, lo que facilita el objetivo de HBO de lanzar la serie de forma anual.',
      'Más allá de la T2, HBO ya tiene confirmada una tercera temporada que adaptaría The Mystery Knight, la más extensa y con más acción de las tres novelas publicadas. Lo que viene después es la gran incógnita: solo existen esas tres novellas, lo que significa que en algún momento la serie tendrá que aventurarse en terreno sin cartografiar —igual que hizo Game of Thrones, aunque con suerte con mejor resultado. El showrunner Ira Parker ya ha señalado que la intención es mantener vivos a Dunk y Egg hasta que su historia llegue a su conclusión natural, aunque eso implique ir más allá del material publicado.',
      'La primera temporada fue aclamada como el mejor trabajo del universo westerosiano desde los años de gloria de la serie original: sin batallas de dragones, sin reyes disputando el Trono de Hierro, solo un caballero sin blanca y su escudero real intentando sobrevivir en un mundo que no les hace ningún favor. El equilibrio entre humor, emoción y la dureza característica de Martin funcionó como pocas veces en los últimos años. La espera hasta 2027 será larga, pero el camino de regreso ya ha comenzado.'
    ],
    date: '30/03/2026',
    url: 'https://screenrant.com/a-knight-of-the-seven-kingdoms-season-2-release-2027-promise/',
    page: 'got.html',
    pageLabel: 'GOT',
    accent: '#cc2200',
    source: 'screenrant.com',
    img: 'assets/img/news/el_caballero_siete_reinos.webp',
    tags: ['A Knight of the Seven Kingdoms', 'Dunk y Egg', 'HBO', 'Game of Thrones', 'The Sworn Sword', 'temporada 2', '2027']
  },

  // ── NOTICIA 39 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-lec-spring-2026-semana1',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'LEC Spring 2026 arranca: Fnatic cae dos veces en el primer fin de semana — MKOI da un aviso a la liga',
    summary: 'La temporada regular de la LEC Spring 2026 echó a rodar el 28 de marzo desde el Riot Games Arena de Berlín. Cinco partidas en dos días, victorias de NAVI, Karmine Corp, GIANTX, Heretics y Movistar KOI — y Fnatic como la gran damnificada de la apertura.',
    full: [
      'La LEC Spring 2026 ya tiene sus primeros resultados. La temporada regular de la liga europea de League of Legends echó a rodar el sábado 28 de marzo desde el Riot Games Arena de Berlín, con tres partidas en formato BO3 y Fearless Draft. La primera sorpresa del día la dio GIANTX, que se impuso a Fnatic 2-1 con Jackies como MVP. Después, Karmine Corp —subcampeones del Versus 2026— remontaron a Team Vitality también 2-1, con Caliste destacando como el mejor jugador de la serie. Para cerrar el sábado, Natus Vincere dejó claro que no llegan a la Spring como recién llegados: victoria 2-1 sobre Movistar KOI con Rhilech como gran protagonista.',
      'El domingo reservó otras dos partidas igualmente disputadas. Team Heretics ganó a SK Gaming 2-1, con Tracyn como MVP de una serie cerrada al límite. Pero el resultado más llamativo de la jornada llegó al final: Movistar KOI, que apenas un día antes había caído ante NAVI, apareció ante Fnatic en modo implacable y los barrió 2-0. El MVP fue Jojopyun, brillante durante toda la serie. Las declaraciones posteriores de Melzhet, jugador de KOI, no dejaron lugar a dudas sobre lo que piensa del estado actual del equipo londinense: "Si miramos lo de hoy, no merecen que les renueven."',
      'Fnatic, el club más laureado de la historia europea, suma dos derrotas en los dos primeros días de competición. No es un punto de partida que invite al optimismo. En el otro extremo, NAVI confirma que su salto a la tier 1 no es accidental, y KC mantiene el tipo como uno de los favoritos de la temporada. G2 Esports, campeones defensores del Versus y finalistas del First Stand 2026, no jugaron este fin de semana de apertura y debutarán más adelante en el calendario.',
      'El formato de la temporada es un todos contra todos en BO3 con Fearless Draft, con los seis primeros clasificados pasando a un playoff de doble eliminación. Los dos finalistas se clasifican para el MSI 2026, y el ganador entra directamente al Bracket Stage. La LEC Roadtrip pasará por París (24-26 de abril) y Madrid Arena (8-10 de mayo). La liga europea ya está en marcha — y los primeros resultados apuntan a una Spring cargada de sorpresas.'
    ],
    date: '30/03/2026',
    url: 'https://liquipedia.net/leagueoflegends/LEC/2026/Spring/Regular_Season',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'liquipedia.net',
    img: 'assets/img/news/lec_calendar_format.webp',
    tags: ['LEC', 'LEC Spring 2026', 'Fnatic', 'MKOI', 'NAVI', 'Karmine Corp', 'GIANTX', 'Heretics', 'League of Legends', 'semana 1']
  },

  // ── NOTICIA 46 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-mhs3-reviews-metacritic-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🗡️',
    badgeLabel: 'GAMING',
    title: 'Monster Hunter Stories 3 llega con críticas sobresalientes — el spin-off JRPG que ya supera a la saga principal',
    summary: 'Twisted Reflection aterrizó el 13 de marzo en PS5, Xbox Series X, Switch 2 y PC con un Metacritic por encima de 80 y elogios unánimes a su historia madura, su mundo enorme y sus vínculos con los monstruos. La crítica más ambiciosa de la saga, y quizás la mejor.',
    full: [
      'Monster Hunter Stories 3: Twisted Reflection ha llegado para demostrar que la franquicia Capcom tiene músculo más allá del combate en tiempo real. Lanzado el 13 de marzo en PS5, Xbox Series X|S, PC y con versión dedicada para Switch 2, el JRPG de crianza y combate por turnos ha recibido una acogida crítica que supera a los dos primeros entries de la saga. RPGFan lo describe como "el mejor de la trilogía, con momentos sorprendentemente épicos y un tono maduro y agridulce que no esperabas de una saga protagonizada por dragones adorables." Nintendo Life le da un 8/10 y destaca su mundo enorme y sus mecánicas de huevo.',
      'El juego te pone en la piel del Príncipe —o Princesa— de Azuria, un reino en conflicto con su vecino Vermeil mientras una plaga cristalina llamada el "Encroachment" amenaza el mundo. Lo que el juego tiene de especial es su apuesta por personajes con arcos propios, un protagonista con voz y un elenco de Rangers que te acompañan toda la partida con sus propias historias paralelas. La duración estimada ronda las 60-80 horas, con postgame incluido para los más completistas.',
      'El sistema de combate mantiene el piedra-papel-tijera de entregas anteriores —ataques de Poder, Técnica y Velocidad— pero añade capas suficientes para hacer los combates contra Jefes Ancianos genuinamente estratégicos. Las animaciones de los Ataques de Kinship son espectaculares. La pega más común en la crítica son los 30 FPS en Switch 2 y algunos problemas de pop-in de texturas en esa versión. En PC el rendimiento es prácticamente impecable.',
      'Digitally Downloaded lo pone más alto todavía: "Para bien o para mal, Twisted Reflection envía un mensaje claro — este spin-off podría convertirse en algo igual de esencial que la saga principal." VGC añade que es "el mayor y más épico monster-catching que existe." Si eres fan de JRPGs de tono emotivo con un sistema de crianza profundo —y no te importa que los protagonistas sean tan adorables que dan grima— este es tu juego del primer trimestre de 2026.'
    ],
    date: '25/03/2026',
    url: 'https://www.rpgfan.com/review/monster-hunter-stories-3-twisted-reflection/',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'rpgfan.com',
    img: 'assets/img/news/monster_hunter.webp',
    tags: ['Monster Hunter Stories 3', 'Twisted Reflection', 'Capcom', 'JRPG', 'Switch 2', 'PS5', 'reviews', 'Metacritic', 'monster-catching']
  },

  // ── NOTICIA 45 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-subnautica2-krafton-demanda-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '💻',
    badgeLabel: 'GAMEDEV',
    title: 'El escándalo Subnautica 2: Krafton usa ChatGPT para esquivar un bono de 250 millones y echa al CEO por los tribunales',
    summary: 'Uno de los dramas más sórdidos del sector en años. El CEO de Unknown Worlds fue despedido por su publisher Krafton justo antes de lanzar Subnautica 2 en Early Access, supuestamente para no pagar 250 millones de dólares en bonus. Un juez ordena su restitución — y la saga continúa.',
    full: [
      'El caso Subnautica 2 vs Krafton es ya una de las batallas legales más llamativas de la industria del videojuego en la última década. Ted Gill, CEO de Unknown Worlds —el estudio creador de Subnautica—, fue despedido por su publisher Krafton junto con los co-fundadores Charlie Cleveland y Max McGuire justo cuando el juego estaba listo para su lanzamiento en Early Access. La acusación de los fundadores es directa: Krafton retrasó deliberadamente el lanzamiento para evitar pagar un bonus de 250 millones de dólares vinculado a que el juego alcanzara ciertos objetivos de ventas antes de finales de 2025.',
      'El tribunal de Delaware falló a favor de Gill esta semana. El juez ordenó su restitución inmediata como CEO de Unknown Worlds y amplió el plazo para cobrar el bonus hasta septiembre de 2026, con opción de extensión adicional. El fallo incluye un detalle que ya es legendario en el sector: el CEO de Krafton, Changhan Kim, utilizó ChatGPT para buscar estrategias legales sobre cómo despedir a los fundadores y evitar el pago del bonus. El juez lo cita textualmente en la sentencia y fue un factor determinante en el veredicto.',
      'La saga, sin embargo, no ha terminado. El día después del fallo, Krafton filtró un memo interno anunciando que Subnautica 2 llegaría a Steam Early Access y Xbox Game Preview en mayo de 2026. El problema: el anuncio se hizo sin consultar a Gill, recién reinstalado como CEO. Sus abogados han presentado una nueva queja ante el tribunal argumentando que Krafton anunció la fecha de lanzamiento de forma unilateral, "dañando el juego y sembrando confusión en la comunidad de Subnautica." Krafton responde que el anuncio era simplemente una comunicación interna celebrando los resultados del último milestone review.',
      'Para los desarrolladores que siguen la industria, el caso resume varios problemas estructurales a la vez: el poder desmedido de los publishers sobre estudios adquiridos, los incentivos perversos que pueden crearse con cláusulas de bonus en fusiones y adquisiciones, y la opacidad con la que a veces se toman decisiones que afectan a años de trabajo de cientos de personas. Subnautica 2 tiene fecha tentativa de mayo 2026 para PC y Xbox — aunque a estas alturas, nada es seguro.'
    ],
    date: '25/03/2026',
    url: 'https://www.gamespot.com/articles/reinstated-subnatica-2-dev-says-krafton-cant-choose-early-release-date/1100-6538914/',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'gamespot.com',
    img: 'assets/img/news/subnautica.webp',
    tags: ['Subnautica 2', 'Krafton', 'Unknown Worlds', 'Ted Gill', 'Early Access', 'industria', 'legal', 'publisher', 'bonus', 'ChatGPT']
  },

  // ── NOTICIA 44 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-secrets-strixhaven-preview-2026',
    topic: 'magic',
    category: 'magic',
    emoji: '✨',
    badgeLabel: 'MAGIC',
    title: 'Secrets of Strixhaven arranca su preview season — el set más esperado de 2026 y el regreso al Magic de verdad',
    summary: 'El 23 de marzo comenzó la historia de Secrets of Strixhaven en DailyMTG. El 31, la revelación masiva de cartas. El 24 de abril llega a tiendas. La vuelta al plano mágico más icónico del año genera más hype que ningún Universes Beyond: Mystical Archive en cada booster, 5 Commander precons y una filtración de 20 cartas que ya incendia Discord.',
    full: [
      'Magic: The Gathering lleva meses dominado por las colaboraciones Universes Beyond — Tortugas Ninja, Marvel, Star Trek en camino — y el fandom más tradicional llevaba tiempo pidiendo a gritos volver a los planos propios del juego. Secrets of Strixhaven responde exactamente a esa demanda. El 23 de marzo arrancó la serie de historia en DailyMTG con el primer episodio de los seis que llevarán a la revelación masiva del 31 de marzo. El 24 de abril el set llega a tiendas; el prerrelease empieza el 17.',
      'El set regresa a Arcavios y a los pasillos de Strixhaven, la universidad mágica fundada por cinco dragones ancestrales. El arco argumental retoma los problemas que amenazaban el plano después de los eventos de March of the Machine: los Archaics —entidades mágicas normalmente pacíficas— se han vuelto erráticos y peligrosos, y Jadzi y otros magos investigan las causas. La historia promete un villano inesperado que se revelará durante los spoilers. El set tiene 111 expansiones de Magic a sus espaldas y se enmarca en el tercer y último arco argumental del ciclo Metronome.',
      'El elemento más celebrado es el regreso del Mystical Archive: un bonus sheet de conjuros icónicos de la historia de Magic —instantáneos y brujerías— con arte nuevo, uno garantizado en cada booster. El primer Archive revelado es Stock Up, un draw spell de eficiencia razonable que ya mueve mercado. Además, hay cinco Commander precons —uno por colegio— frente a los dos habituales de otros sets, con jefes como Quintorius, History Chaser, que ya tiene a los jugadores de combo frotándose las manos.',
      'El 23 de marzo también se filtró un lote de 20 cartas antes del schedule oficial, algo que no ocurría desde hacía años en Magic. La calidad de los diseños que se han visto —incluida Lorehold, the Historian, un nuevo dragón mítico del ciclo de Cofundadores— ha disparado el hype. La segunda banned and restricted announcement del año que se publicó simultáneamente solo afectó a Historic en Arena (Food Chain baneado), confirmando que el metajuego en papel está en un momento de estabilidad. Quedan dos semanas para la gran revelación del 31 de marzo.'
    ],
    date: '25/03/2026',
    url: 'https://magic.wizards.com/en/news/magic-story/planeswalkers-guide-to-secrets-of-strixhaven',
    page: 'magic.html',
    pageLabel: 'MtG',
    accent: '#ff00ff',
    source: 'magic.wizards.com',
    img: 'assets/img/news/secrets_of_strixhaven.webp',
    tags: ['Magic The Gathering', 'Secrets of Strixhaven', 'MtG 2026', 'Mystical Archive', 'Commander', 'Strixhaven', 'spoilers', 'preview season', 'Arcavios', 'Banned and Restricted']
  },

  // ── NOTICIA 43 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-first-stand-final-blg-campeon-2026',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'BLG CAMPEONES DEL FIRST STAND 2026 — Derrota a G2 3-0 en la gran final y Viper hace historia',
    summary: 'Bilibili Gaming corona una actuación impecable en São Paulo con una victoria sin concesiones sobre G2 Esports en la gran final del First Stand 2026. Un 3-0 que convierte a Viper en el primer jugador bicampeón del torneo y otorga al LPL ventaja directa en el MSI 2026.',
    full: [
      'La gran final del First Stand 2026 se celebró este domingo 22 de marzo en el Gymnásio Visual Farm de São Paulo y el resultado fue contundente: Bilibili Gaming derrotó a G2 Esports 3-0 para alzarse con el título del primer gran torneo internacional de la temporada. El KDA global de la serie refleja la superioridad del equipo chino — 61/27 frente a 27/61 — con 27 torres derribadas por solo 2 de G2 y un dominio total en el contador de dragones, 10 contra 5.',
      'G2 llegó a la final por la vía del lower bracket tras remontar desde una derrota en la fase de grupos: eliminó a FEARX 3-0 y protagonizó la mayor sorpresa del torneo barriendo a Gen.G, el primer clasificado del LCK, también 3-0 en semifinales. En la gran final, sin embargo, los europeos no encontraron respuesta al control absoluto de BLG. El primer partido fue el más igualado: G2 ganó la disputa del Baron y llegó a tener ventaja antes de que BLG cerrara con una teamfight perfecta. En los dos mapas siguientes, los chinos no dejaron margen.',
      'El MVP de la serie fue el support ON, cuya Alistar en el juego 2 fue uno de los highlights del torneo. Knight dominó el duelo de midlaners frente a Caps, a quien encerró durante los tres mapas. Bin, top laner de BLG, fue el MVP individual con un KDA de 15/6/14 y un 47.5% de kill participation. BrokenBlade fue el único jugador de G2 con actuaciones destacables, incluyendo un solo kill sobre Bin en el juego 1, pero la diferencia estructural entre ambos equipos fue demasiado grande.',
      'La victoria tiene consecuencias directas en el circuito internacional: BLG otorga al LPL una plaza directa en el Bracket Stage del MSI 2026, saltándose los Play-Ins. G2 se va de São Paulo con 150.000 dólares y el subcampeonato, que de todas formas supone el mejor resultado internacional de un equipo europeo en años. Park "Viper" Do-hyeon se convierte en el primer jugador en ganar el First Stand en dos ocasiones, tras su título con Hanwha Life en 2025. Un campeonato que consolida a BLG como la mejor organización del mundo en el primer tramo de 2026.'
    ],
    date: '22/03/2026',
    url: 'https://www.gosugamers.net/lol/news/78154-g2-esports-bilibili-gaming-are-the-2026-lol-first-stand-champions',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'gosugamers.net',
    img: 'assets/img/news/first_stand_2026.webp',
    tags: ['First Stand', 'FST 2026', 'BLG', 'G2', 'Viper', 'gran final', 'campeones', 'LoL', 'São Paulo', 'LPL', 'LEC', 'MSI 2026']
  },

  // ── NOTICIA 42 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-t3-fan-concerns-martin-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title: 'HotD T3: Martin abandona el barco, personajes originales y el fandom en pie de guerra',
    summary: 'A tres meses del estreno de House of the Dragon Temporada 3, la preocupación del fandom es real. George R.R. Martin dejó la serie al no soportar la dirección creativa de Condal. Se añaden personajes y una casa inventada. El miedo a repetir los errores de GOT S8 está sobre la mesa.',
    full: [
      'House of the Dragon Temporada 3 llega en junio de 2026 —fecha en domingo, con el 7, 14, 21 o 28 como opciones— y la expectación está teñida de ansiedad. La serie ha ido divergiendo progresivamente del material fuente de George R.R. Martin, y la Temporada 3 parece dispuesta a acelerar esa separación. Los showrunners han confirmado la inclusión de personajes completamente originales y, lo que ha incendiado las redes, de una casa noble inventada que no existe en Fuego y Sangre ni en ningún otro texto de Martin.',
      'El propio autor, que ya en enero calificó públicamente la dirección creativa de Ryan Condal como "abysmally bad", ha dejado de participar activamente en la producción. Martin no escribió ningún episodio de la T2 y su influencia sobre la T3 es, según fuentes cercanas, prácticamente nula. El fandom más purista recuerda que algo similar ocurrió con Game of Thrones cuando Benioff y Weiss se quedaron sin libros que adaptar en las temporadas 7 y 8 — con el resultado conocido.',
      'Los argumentos del sector más optimista son razonables: la Temporada 1 de HotD, que también se alejó en algunos puntos del libro, fue universalmente celebrada. Condal ha demostrado capacidad para navegar la política Targaryen con matices. Y la Batalla del Gullet —una de las secuencias más épicas que quedan por adaptar— promete ser visualmente monumental, según adelantó el director Loni Peristere. La T3 también introduce a James Norton como Ormund Hightower, uno de los personajes más esperados por los lectores.',
      'La Temporada 4, que ya está en escritura, será la última de la serie —algo que HBO y Condal confirmaron en febrero de 2026. El plan de cuatro temporadas da estructura y evita el síndrome de alargamiento artificial. Pero para llegar a esa conclusión con el fandom intacto, la Temporada 3 tiene que hacer mucho más que la segunda. Junio llega pronto. Los dragones también.'
    ],
    date: '22/03/2026',
    url: 'https://uwpexponent.com/news/2026/03/20/house-of-the-dragon-season-3-concerns/',
    page: 'got.html',
    pageLabel: 'GoT / HotD',
    accent: '#cc2200',
    source: 'uwpexponent.com',
    img: 'assets/img/news/house_of_the_dragons.webp',
    tags: ['House of the Dragon', 'HotD T3', 'HBO', 'George R.R. Martin', 'Ryan Condal', 'fandom', 'Danza de los Dragones', 'junio 2026', 'T4 confirmada']
  },

  // ── NOTICIA 41 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nba-durant-jordan-record-lebron-2026',
    topic: 'nba',
    category: 'nba',
    emoji: '🏀',
    badgeLabel: 'NBA',
    title: 'Durant supera a Jordan en el top-5 histórico de anotadores y LeBron rompe otro récord',
    summary: 'La semana más histórica de la temporada NBA 2025-26: Kevin Durant encesta el triple que le coloca 5º en la lista all-time de anotadores superando a Michael Jordan, y LeBron James juega su partido 1.612 rompiendo el récord de Robert Parish de más encuentros en la historia de la liga regular.',
    full: [
      'La noche del 21 de marzo dejó dos hitos históricos en la misma jornada de NBA. Kevin Durant, jugando con los Houston Rockets ante Miami Heat, anotó un triple desde la esquina en el minuto 36 del cuarto cuarto que le hizo superar los 32.292 puntos de carrera de Michael Jordan, colocándose como el quinto máximo anotador de la historia de la liga. Durant terminó el partido con 27 puntos en una victoria ajustada de los Rockets 123-122, decidida en el último segundo por un tap-in de Amen Thompson sobre un rebote ofensivo.',
      'En el mismo partido, LeBron James disputó su encuentro número 1.612 en la temporada regular con los Los Angeles Lakers, rompiendo el récord histórico de Robert Parish como el jugador con más partidos jugados en la liga regular de la NBA. LeBron aportó 12 puntos en la victoria de los Lakers 105-104 sobre Orlando Magic, su novena victoria consecutiva. A sus 41 años, el alero sigue siendo un rotacional clave en un equipo que marcha tercero en el Oeste con un récord de 46-25.',
      'El contexto de la temporada no puede ser más apretado a tres semanas del final de la temporada regular. En el Oeste, Oklahoma City Thunder lidera con un récord de 56-15 y una racha activa de 11 victorias. Los San Antonio Spurs son segundos con 53-18, mientras Los Lakers se aseguran el tercer puesto. Houston con 43-27 y Denver con 43-28 pelean por el cuarto y quinto. La zona del play-in incluye a Clippers, Trail Blazers y Warriors en una carrera que se decidirá partido a partido hasta el 12 de abril.',
      'En el Este, los Detroit Pistons lideran sorprendentemente con 51-19, seguidos de los Boston Celtics con 47-23. La lucha por los puestos 5-10 incluye un grupo de seis equipos separados por solo cuatro victorias. El Play-In arranca el 14 de abril y los Playoffs el 18. Las Finales NBA 2026 están programadas para el 3 de junio en ABC. Con Durant en el Olimpo de los anotadores y LeBron rompiendo récords de longevidad, la temporada tiene más narrativas que un guion de HBO.'
    ],
    date: '22/03/2026',
    url: 'https://www.nba.com/news/2026-nba-playoffs-standings-and-bracket-updates',
    page: 'nba.html',
    pageLabel: '🏀 NBA',
    accent: '#ffcc00',
    source: 'NBA.com',
    img: 'assets/img/news/nba_ball.webp',
    tags: ['Kevin Durant', 'Michael Jordan', 'anotadores históricos', 'LeBron James', 'Robert Parish', 'récord', 'NBA 2026', 'playoffs', 'Lakers', 'Rockets']
  },

  // ── NOTICIA 40 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-dnd-ravenloft-horrors-within-2026',
    topic: 'rol',
    category: 'rol',
    emoji: '🎲',
    badgeLabel: 'ROL',
    title: 'D&D presenta su roadmap 2026: Ravenloft en junio y los Red Wizards de Thay en otoño',
    summary: 'Wizards of the Coast desplegó en marzo su hoja de ruta completa para Dungeons & Dragons en 2026. Dos grandes suplementos dominan el año: Ravenloft: The Horrors Within, ambientado en el Dominio del Terror, y Arcana Unleashed: Deadfall, con los Red Wizards de Thay como antagonistas principales.',
    full: [
      'Wizards of the Coast usó su evento de prensa de marzo para presentar el roadmap completo de Dungeons & Dragons para 2026, el año en que el juego de rol más icónico del mundo celebra su transición definitiva a la nueva edición lanzada en 2024. El anuncio estrella es Ravenloft: The Horrors Within, programado para junio de 2026 con un precio de lanzamiento de 49,99 dólares. El suplemento regresa al Dominio del Terror, uno de los escenarios más queridos por los veteranos del juego, con 290 páginas de contenido que incluyen mecánicas de horror psicológico, nuevos sublinajes de monstruos y una campaña completa ambientada en Barovia.',
      'El segundo gran lanzamiento del año es Arcana Unleashed: Deadfall, un libro de aventuras con los Red Wizards de Thay como antagonistas principales. Wizards publicó ya algunas ilustraciones del arte interior y el material previo sugiere una campaña de nivel medio-alto con componentes de magia oscura, política arcana e infiltración. Junto a estos dos títulos principales, el roadmap incluye Arcana Unleashed como sourcebook mágico general, mazos de Tarokka, mapas de campaña y tarjetas de referencia rápida.',
      'WotC también anunció que este año usará Gen Con como plataforma de lanzamiento para varios de estos productos, una decisión estratégica que consolida la feria de Indianápolis como el evento de referencia para los anuncios de D&D en Norteamérica. En paralelo, la compañía abrió una encuesta pública para recabar la opinión de los jugadores sobre la dirección futura del juego —un gesto que algunos interpretan como respuesta a las críticas recibidas tras los cambios de licencia de 2023.',
      'Para los jugadores de rol en España, el calendario de traducciones de Edge Entertainment sigue pendiente de confirmación oficial, aunque históricamente los suplementos del juego base llegan al castellano entre seis y doce meses después del original en inglés. Si el patrón se mantiene, Ravenloft: The Horrors Within podría estar disponible en español a principios de 2027. Mientras tanto, los grupos con acceso al inglés ya pueden reservar el manual en preventa en la web de D&D Beyond.'
    ],
    date: '22/03/2026',
    url: 'https://www.enworld.org/',
    page: 'rol.html',
    pageLabel: 'Rol',
    accent: '#9933ff',
    source: 'enworld.org',
    img: 'assets/img/news/dungeons_and_dragons.webp',
    tags: ['Dungeons & Dragons', 'D&D 2026', 'Ravenloft', 'Wizards of the Coast', 'WotC', 'suplementos', 'rol de mesa', 'roadmap', 'Red Wizards', 'Thay']
  },

  // ── NOTICIA 39 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-tow-comp-war-comunidad-2026',
    topic: 'warhammer',
    category: 'warhammer',
    emoji: '⚙',
    badgeLabel: 'WARHAMMER',
    title: 'Warhammer: The Old World y la guerra de las reglas — GW pierde el control del juego competitivo',
    summary: 'Dos años después de su regreso, Warhammer: The Old World tiene una base de jugadores entusiasta y un problema creciente: la comunidad competitiva ha fragmentado el juego en versiones incompatibles. FAQs, errata y guías de juego organizado creadas por fans proliferan porque las oficiales no llegan a tiempo ni son suficientes.',
    full: [
      'Warhammer: The Old World cumple más de dos años desde su relanzamiento en enero de 2024 y el balance es agridulce. El juego ha recuperado a la mayoría de sus veteranos de Warhammer Fantasy Battle y ha captado a una nueva generación atraída por las miniaturas y la estética rank-and-flank. El problema es que el crecimiento del juego ha superado la capacidad de Games Workshop para gestionarlo de forma centralizada, y la escena competitiva se está fragmentando.',
      'Según un análisis publicado en Bell of Lost Souls, el núcleo del problema son las "comp rules": reglas de composición de ejército creadas por la comunidad para equilibrar el juego en torneos cuando las restricciones oficiales se perciben como insuficientes. En los últimos meses han proliferado versiones incompatibles entre sí: diferentes organizadores de torneos usan diferentes comp packages, lo que hace que una lista válida para un evento sea ilegal en otro celebrado la semana siguiente en la misma ciudad. La situación recuerda a los últimos años de Warhammer Fantasy Battle antes de que GW lo enterrase con los End Times.',
      'GW ha respondido con FAQs y erratas periódicas, y la Matched Play Guide incluye algunas restricciones, pero para muchos jugadores no es suficiente ni lo bastante rápido. El problema específico del Old World es que las interacciones entre ejércitos son extremadamente complejas —el sistema heredado de ediciones anteriores no fue diseñado pensando en torneos modernos con docenas de builds viables por facción— y GW no tiene el historial de soporte rápido que caracteriza a AoS o a 40K.',
      'La ironía es que esta fragmentación convive con un momento brillante para el juego en términos de releases: en marzo llegó el set de refuerzo Defenders of the Great Bastion para Gran Cathay con 53 miniaturas, y el roadmap de 2026 apunta a más facciones nuevas. El Old World tiene el contenido. Lo que necesita ahora es estructura competitiva oficial que unifique la comunidad antes de que las grietas sean demasiado grandes para cerrarlas.'
    ],
    date: '22/03/2026',
    url: 'https://www.belloflostsouls.net/2026/03/warhammer-the-old-world-games-workshop-is-losing-the-comp-wars.html',
    page: 'warhammer.html',
    pageLabel: 'Warhammer',
    accent: '#ffcc00',
    source: 'belloflostsouls.net',
    img: 'assets/img/news/the_old_world.jpg',
    tags: ['Warhammer', 'The Old World', 'Games Workshop', 'comp rules', 'torneos', 'juego competitivo', 'comunidad', 'rank-and-flank', 'FAQs']
  },

  // ── NOTICIA 38 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-first-stand-2026-semifinales',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'First Stand: G2 vivo en el lower bracket — el sábado se decide quién llega a la gran final',
    summary: 'Tras la fase de grupos, BLG y Gen.G esperan en playoffs como primeros clasificados. G2 sobrevive en el lower bracket tras ganar a FEARX. El 21 de marzo llegan las semifinales y el 22 la gran final con el Runeterra Fan Fest abierto al público en São Paulo.',
    full: [
      'La fase de grupos del First Stand 2026 ha dejado el cuadro semifinal prácticamente cerrado. BLG y Gen.G son los dos clasificados directos para los playoffs tras dominar sus respectivos grupos sin perder un solo mapa en las partidas decisivas. Gen.G fue especialmente contundente, aplastando a JD Gaming 3-0 en el Grupo B y enviando a los grandes names chinos al lower bracket, donde JDG respondió eliminando a LOUD para intentar sobrevivir.',
      'En el Grupo A, G2 cayó a la lower bracket tras perder 0-3 ante BLG, pero los europeos se reencontraron con FEARX y los eliminaron para mantenerse vivos en el torneo. BrokenBlade, el top laner de G2, fue uno de los más señalados por su rendimiento irregular — aunque en declaraciones a la prensa el jugador mostró confianza: "Necesitas jugar con la convicción de que vas a ganar. Lo que viene el sábado es lo que importa." G2 lleva dos victorias consecutivas en enfrentamientos directos contra BLG en torneos internacionales — la revancha está servida si ambos llegan a la final.',
      'El formato del Knockout Stage es eliminación directa al mejor de cinco. Las semifinales se disputarán el sábado 21 de marzo, y la gran final es el domingo 22. Ese mismo día, el Gymnásio Visual Farm de São Paulo acogerá el Runeterra Fan Fest: un evento abierto al público con estaciones de juego para TFT, LoL, 2XKO y Wild Rift, zona de artistas, merchandise exclusivo y retransmisión en directo de la final. El primer evento internacional con público físico en Brasil en nueve años.',
      'La apuesta es alta: la región ganadora obtiene una plaza directa en el Bracket Stage del MSI 2026, saltándose los Play-Ins. Si BLG o Gen.G ganan, LPL o LCK se aseguran otra ventaja estructural en el circuito internacional. Si G2 o LYON dan la sorpresa, sería el primer campeonato de un equipo occidental en un torneo internacional desde hace años. El ambiente en São Paulo, según los casters y periodistas presentes, es eléctrico.'
    ],
    date: '20/03/2026',
    url: 'https://escharts.com/news/bilibili-gaming-qualify-first-stand-playoffs',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'escharts.com',
    img: 'assets/img/news/first_stand_2026.webp',
    tags: ['First Stand', 'FST 2026', 'G2', 'BLG', 'Gen.G', 'semifinales', 'playoffs', 'LoL', 'São Paulo', 'Runeterra Fan Fest']
  },

  // ── NOTICIA 37 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-nintendo-demanda-aranceles-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '💻',
    badgeLabel: 'GAMEDEV',
    title: 'Nintendo demanda al gobierno de EE.UU. por los aranceles de Trump — y luego paraliza la acción',
    summary: 'La compañía japonesa presentó una demanda contra el gobierno estadounidense tras el fallo del Tribunal Supremo que validó los aranceles de Trump. Una semana después, con la causa paralizada temporalmente, la industria del videojuego observa con nerviosismo un conflicto que amenaza los precios de hardware en todo el mundo.',
    full: [
      'Nintendo tomó una decisión sin precedentes al presentar una demanda formal contra el gobierno de los Estados Unidos en respuesta al fallo del Tribunal Supremo que validó la política arancelaria de la administración Trump. La compañía, uno de los mayores fabricantes de hardware de videojuegos del mundo, argumenta que los aranceles impuestos a productos electrónicos fabricados en Asia impactan directamente en su cadena de suministro y en el precio final de sus consolas y accesorios para el mercado norteamericano.',
      'Sin embargo, apenas una semana después de abrir el caso, Nintendo solicitó una paralización temporal de los procedimientos legales. La compañía no ha detallado públicamente las razones de esta pausa, aunque analistas del sector apuntan a negociaciones en curso con el Departamento de Comercio y a la presión diplomática entre Japón y Estados Unidos como factores que podrían estar influyendo en la estrategia legal de Nintendo.',
      'El caso tiene implicaciones que van mucho más allá de Nintendo. Sony, Microsoft y prácticamente todos los fabricantes de periféricos y accesorios de videojuegos dependen de cadenas de producción asiáticas directamente afectadas por los aranceles. Si los gravámenes se consolidan, el impacto en los precios de hardware para el consumidor final podría ser significativo, especialmente en un año en que el Switch 2 acaba de arrancar su ciclo de vida y GTA 6 se aproxima como el mayor lanzamiento de software de la década.',
      'Para los desarrolladores independientes y estudios pequeños, la situación añade una capa más de incertidumbre a un mercado ya sacudido por despidos masivos y la consolidación de los grandes publishers. El coste de desarrollo no cambia con los aranceles, pero sí lo hace el tamaño del mercado accesible si los jugadores tienen menos dinero disponible después de pagar más por el hardware. Un frente más que vigilar en 2026.'
    ],
    date: '20/03/2026',
    url: 'https://gamerant.com/gaming/',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'gamerant.com',
    img: 'assets/img/news/nintendo.webp',
    tags: ['Nintendo', 'aranceles', 'Trump', 'industria', 'hardware', 'gamedev', 'política', 'Switch 2']
  },

  // ── NOTICIA 36 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-t3-reshoots-condal-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title: 'HotD T3: Condal sale del silencio — los reshoots son rutina, no catástrofe',
    summary: 'Rumores de problemas en la producción de House of the Dragon Temporada 3 llevan días circulando en redes. Ryan Condal los corta de raíz en su podcast: son retoques menores planificados desde el principio. La serie llega en junio y "va a once".',
    full: [
      'House of the Dragon Temporada 3 está actualmente en una breve fase de reshoots que ha encendido la alarma entre parte del fandom. Condal respondió directamente en su podcast The Stuff Dreams Are Made Of: "Hay rumores de fuego en el mundo porque nadie puede simplemente dejarnos hacer nuestra serie en paz y disfrutarla cuando salga." Las palabras del showrunner no dejan mucho margen a la interpretación — los reshoots comenzaron la semana pasada y duran aproximadamente semana y media.',
      'Según Condal, se trata de pickups de pequeña escala: ángulos alternativos, planos de reacción y correcciones de continuidad. El tipo de ajustes que cualquier producción de esta envergadura planifica con meses de antelación y que no tienen nada que ver con problemas creativos ni con las tensiones públicas que el showrunner mantiene con George R.R. Martin. La temporada terminó de rodarse en octubre de 2025 en localizaciones europeas, incluyendo los estudios Leavesden de Warner en Watford, y lleva meses en posproducción.',
      'La fecha de estreno sigue siendo junio de 2026, con el domingo como día habitual de HBO para sus grandes estrenos — las opciones son el 7, 14, 21 o 28 de junio. La temporada constará de ocho episodios y será la penúltima, ya que la Temporada 4 — que concluirá la serie — ya está en proceso de escritura con estreno previsto para 2028. Los directores de la T3 son Clare Kilner, Nina Lopez-Corrado, Andrij Parekh y Loni Peristere, quien ya adelantó que la temporada incluye dos secuencias épicas que eclipsan todo lo visto hasta ahora, incluyendo la Batalla del Gullet.',
      'El contexto de fondo sigue siendo el conflicto público entre Martin y Condal, que el autor calificó de "abismal" en enero. HBO, que respalda a Condal, tiene motivos para querer que la Temporada 3 sea un éxito rotundo: necesita recuperar el terreno perdido tras la polémica segunda temporada y demostrar que el universo Targaryen puede sostener una franquicia de largo recorrido. El fandom espera. Los dragones vuelan. Junio se acerca.'
    ],
    date: '20/03/2026',
    url: 'https://wikiofthrones.com/house-of-the-dragon-season-3-currently-undergoing-pre-planned-reshoots',
    page: 'got.html',
    pageLabel: 'GoT / HotD',
    accent: '#cc2200',
    source: 'wikiofthrones.com',
    img: 'assets/img/news/house_of_the_dragons.webp',
    tags: ['House of the Dragon', 'HotD T3', 'HBO', 'Ryan Condal', 'reshoots', 'Danza de los Dragones', 'junio 2026']
  },

  // ── NOTICIA 35 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-crimson-desert-reviews-bolsa-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🗡️',
    badgeLabel: 'GAMING',
    title: 'Crimson Desert lanza con 78 en Metacritic y hunde la bolsa de Pearl Abyss un 30%',
    summary: 'El RPG de mundo abierto más esperado de la primavera llega con críticas mixtas-positivas y desata el caos en los mercados coreanos. Un 78 no es un fracaso, pero tampoco es el 90+ que los inversores habían descontado en seis meses de subida bursátil del 125%.',
    full: [
      'Crimson Desert aterrizó el 19 de marzo en PS5, Xbox Series X|S y PC con un Metascore de 78 sobre 89 análisis y un 80 en OpenCritic con un 81% de recomendaciones. El juego divide a la crítica entre quienes lo consideran un logro técnico generacional — algunos medios le dieron un 10/10 calificándolo como el nuevo estándar del mundo abierto — y quienes señalan controles torpes, una narrativa desenfocada y sistemas que se acumulan sin depurarse. La puntuación media aterriza en el mismo rango que Stellar Blade, Lies of P o Black Myth: Wukong.',
      'Las consecuencias financieras fueron inmediatas y brutales. Las acciones de Pearl Abyss en la bolsa de Seúl cayeron un 29% en cuestión de horas, cerrando a 46.000 wones frente a los 68.500 que marcaban solo días antes, cuando el hype del juego había empujado la cotización a máximos históricos. La paradoja es que desde marzo de 2025 la acción había subido un 125% impulsada por las expectativas de Crimson Desert — los inversores apostaron por un 90+ y vendieron masivamente al ver el 78.',
      'Los análisis más positivos destacan el combate en tercera persona como algo nunca visto a esta escala — comparable a Devil May Cry o Ninja Gaiden pero en mundo abierto — y elogian la exploración, la variedad de biomas y una ambición técnica que puede llegar a las 200 horas de contenido. Los más críticos, como Polygon o Jason Schreier de Bloomberg, apuntan a un diseño de misiones plano y a un exceso de sistemas que ahogan la experiencia.',
      'Para el jugador de a pie, el 78 y el 80 de OpenCritic son números perfectamente respetables. El debate real es si el juego está a la altura de una campaña de marketing que lo vendió como el próximo Breath of the Wild. La versión de consola base sigue siendo una incógnita: Pearl Abyss no proporcionó acceso a PS5 estándar ni Xbox Series X a los medios antes del lanzamiento, y el análisis técnico de Digital Foundry en consola llegará en los próximos días.'
    ],
    date: '20/03/2026',
    url: 'https://www.gamesradar.com/games/rpg/crimson-deserts-metacritic-score-sinks-pearl-abyss-share-prices-by-30-percent-over-the-cardinal-sin-of-being-perfectly-fine/',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'gamesradar.com',
    img: 'assets/img/news/crisom_desert.jpg',
    tags: ['Crimson Desert', 'Pearl Abyss', 'Metacritic', 'reviews', 'PS5', 'Xbox', 'open world', 'RPG', 'bolsa']
  },

  // ── NOTICIA 34 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-first-stand-2026-grupos',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'First Stand 2026: BLG a playoffs, G2 al límite y Gen.G imparable en Grupo B',
    summary: 'El torneo internacional de LoL en São Paulo ya tiene su primera clasificada: Bilibili Gaming barren a G2 3-0 y se meten en playoffs. Los europeos sobreviven en el lower bracket. En el Grupo B, Gen.G aplasta a LYON 3-0 y JDG elimina a LOUD. El sábado llegan los cruces decisivos.',
    full: [
      'El First Stand 2026 sigue su curso en el Riot Games Arena de São Paulo y la fase de grupos va dejando el cuadro cada vez más claro. BLG vs G2 fue el partido del Grupo A del día 3: los chinos barrieron a los europeos 3-0 con autoridad, convirtose en el primer equipo confirmado para la fase de playoffs. BLG impuso control total en los tres mapas — robó el pick de Shen que G2 solía usar, aseguró todos los dragones del Grupo A y firmó las kill differences más aplastantes de lo que llevamos de torneo. Knight, el midlaner de BLG, registró dos solo kills sobre Caps en el mapa decisivo.',
      'G2 cae al lower bracket con un 0-1 en el Upper, pero no está eliminado. Tendrá que enfrentarse al ganador del duelo entre BNK FEARX y Team Secret Whales. En ese partido de eliminación directa, FEARX se impuso 3-0 a Secret Whales, quienes quedan fuera del torneo. G2 debe ganar ese cruce para seguir vivo y aspirar a la gran final del domingo 22.',
      'En el Grupo B el día 2 dejó resultados igual de contundentes. Gen.G aplastó a JD Gaming 3-0 para meterse directamente en playoffs, mientras LYON derrotó a LOUD 3-2 en uno de los partidos más igualados del torneo. Sin embargo, JDG respondió al día siguiente eliminando a LOUD 3-0, dejando a los brasileños fuera en casa. El enfrentamiento entre Gen.G y LYON por el Upper Bracket del Grupo B decidirá quién avanza cómodo y quién baja al lower.',
      'El formato del torneo es doble eliminación en grupos con todos los partidos al mejor de cinco en Fearless Draft — cada campeón solo puede ser seleccionado una vez por equipo a lo largo de toda la serie. Los semifinalistas se cruzan el 21 de marzo y la gran final es el 22. El ganador del torneo da a su región una plaza directa en la fase de grupos del MSI 2026, saltándose Play-Ins. Un millón de dólares en premios y el prestigio de ser el primer campeón internacional del año están en juego.'
    ],
    date: '20/03/2026',
    url: 'https://dotesports.com/league-of-legends/news/lol-first-stand-2026-schedule-results-standings-and-more',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'dotesports.com',
    img: 'assets/img/news/first_stand_2026.webp',
    tags: ['First Stand', 'FST 2026', 'BLG', 'G2', 'Gen.G', 'LYON', 'LEC', 'LPL', 'LCK', 'LoL', 'São Paulo']
  },

  // ── NOTICIA 33 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-first-stand-2026-dia1',
    topic: 'esports',
    category: 'esports',
    emoji: '🏆',
    badgeLabel: 'ESPORTS',
    title: 'First Stand 2026: BLG y G2 dominan el Día 1 en São Paulo',
    summary: 'Arranca el primer torneo internacional de la temporada de League of Legends. Bilibili Gaming supera en un épico Bo5 a BNK FEARX (3-2, MVP: knight) y G2 barre a Secret Whales (3-0, MVP: SkewMond). Mañana se miran las caras en el Upper Bracket.',
    full: [
      'São Paulo abre sus puertas al primer evento internacional del año en League of Legends. El First Stand 2026 arrancó el 16 de marzo en el Riot Games Arena con un formato de doble eliminación en grupos, todos los partidos al mejor de cinco con Fearless Draft — el modo en el que cada campeón solo puede ser elegido una vez a lo largo de la serie. El premio total es de un millón de dólares y el ganador obtiene un puesto directo en la fase de grupos del MSI 2026, saltándose los Play-Ins. Las apuestas no podrían ser más altas.',
      'El primer partido del día enfrentó a los favoritos de la LPL, Bilibili Gaming, contra BNK FEARX, segundo clasificado de la LCK. BLG ganó 3-2 en un partido memorable. El top laner Bin abrió la lata en el juego 1 con un Jax imparable, terminando 11/1 en una victoria en menos de 30 minutos. FEARX respondió en el juego 2 gracias al botlaner de 18 años Diable, que firmó un pentakill sobre Jinx. La serie fue equilibrada hasta el final, con el MVP knight marcando la diferencia en el juego decisivo. Notable también fue que BLG rompió una racha de 8 series consecutivas perdidas contra equipos LCK.',
      'El segundo partido fue entre G2 Esports y Team Secret Whales. El resultado fue 3-0 para los europeos, aunque la serie estuvo lejos de ser tan limpia como el marcador indica. Tras un juego 1 convincente, Secret Whales complicó las cosas a G2 en los siguientes mapas, llegando a ejecutar un ace completo sobre el equipo europeo en el juego 2. Pese a ello, G2 cerró la serie con solvencia. Rudy "Skewmond" Semaan, jungler de G2, fue elegido MVP y él mismo definió la serie como "una montaña rusa".',
      'El Día 2 depara el plato fuerte del Grupo A: BLG vs G2 en el Upper Bracket, un choque que se ha convertido casi en tradición internacional. BLG lidera el head-to-head 4-2, pero G2 ha ganado los dos últimos enfrentamientos directos. En paralelo, FEARX y Secret Whales se juegan la vida en el Lower Bracket. El perdedor se va a casa. El torneo completo termina el 22 de marzo con la gran final, donde además se celebrará el Runeterra Fan Fest abierto al público.'
    ],
    date: '17/03/2026',
    url: 'https://dotesports.com/league-of-legends/news/first-stand-day-1-recap',
    page: 'esports.html',
    pageLabel: 'Esports',
    accent: '#C89B3C',
    source: 'dotesports.com',
    img: 'assets/img/news/first_stand_2026.webp',
    tags: ['First Stand', 'FST 2026', 'BLG', 'G2', 'League of Legends', 'esports', 'São Paulo', 'LEC', 'LPL']
  },

  // ── NOTICIA 32 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-crimson-desert-embargo-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🗡️',
    badgeLabel: 'GAMING',
    title: 'Crimson Desert: mañana caen los análisis y la polémica por consola ya está servida',
    summary: 'El RPG más ambicioso de Pearl Abyss lanza el 19 de marzo. El embargo de análisis cae el 18 y una segunda review filtrada coreana lo describe como "extraordinario". El problema: nadie ha podido probar la versión de PS5 base ni Xbox Series X antes del lanzamiento.',
    full: [
      'Quedan horas para que Crimson Desert llegue a PS5, Xbox Series X|S y PC el 19 de marzo. El embargo de análisis se levanta el día anterior, el 18 de marzo a las 15:00 PT, y la anticipación en la comunidad es enorme. El juego ya está disponible para precargar desde el 17 de marzo en todas las plataformas digitales, con un tamaño mínimo de 150 GB en PC. La campaña rondará las 60-80 horas según los desarrolladores.',
      'La semana previa al lanzamiento ha estado marcada por una segunda revisión filtrada, esta vez de un creador de contenido coreano, que contradice algunas de las dudas planteadas anteriormente. Esta nueva fuente destaca mejoras sustanciales de rendimiento respecto a builds previas, elogia el sistema de exploración y el combate, y describe la experiencia global como "extraordinaria". Suma así a las impresiones del español Revenant, quien ya había calificado el juego como su "mundo abierto favorito de siempre" antes de borrar el vídeo bajo presión.',
      'El punto conflictivo es otro: varios medios especializados han confirmado que Pearl Abyss no les proporcionó acceso a las versiones de PS5 base y Xbox Series X antes del lanzamiento. Los primeros análisis procederán de PCs de alta gama y, en el mejor de los casos, de PS5 Pro. Esto genera incertidumbre legítima sobre cómo rendirá el juego en el hardware más común, el de los millones de jugadores que no tienen una PS5 Pro ni un PC tope de gama. Digital Foundry ha confirmado que publicará su análisis técnico de consolas coincidiendo con el lanzamiento.',
      'Pearl Abyss ha confirmado además que la versión PC incluirá Denuvo DRM, algo que ha generado críticas adicionales. En el lado positivo, la compañía ha garantizado que no habrá microtransacciones post-lanzamiento, un anuncio que ha sido muy bien recibido dada la historia de Black Desert Online. La predicción más optimista de las filtraciones apunta a un 90-95 en Metacritic si los análisis perdonan la curva de aprendizaje. La más conservadora se mueve entre 80 y 85. Mañana salimos de dudas.'
    ],
    date: '17/03/2026',
    url: 'https://www.notebookcheck.net/Crimson-Desert-PS5-reviews-unlikely-with-sites-blocked-from-access-before-release-date.1250973.0.html',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'notebookcheck.net',
    img: 'assets/img/news/crisom_desert.jpg',
    tags: ['Crimson Desert', 'Pearl Abyss', 'PS5', 'Xbox Series X', 'open world', 'RPG', 'análisis', 'Metacritic']
  },

  // ── NOTICIA 31 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-slay-spire-2-exito-indie-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '💻',
    badgeLabel: 'GAMEDEV',
    title: 'Slay the Spire 2 arrasa en Early Access: la fórmula indie sigue siendo imbatible',
    summary: 'El sucesor del roguelike de deckbuilding más influyente de la última década lleva solo días en Early Access y ya se perfila como uno de los grandes éxitos del año. Mega Crit demuestra que los estudios pequeños con visión propia siguen ganando la partida.',
    full: [
      'Slay the Spire 2 salió en Early Access el 6 de marzo de 2026 y el resultado es exactamente el que se esperaba de Mega Crit: un éxito rotundo. El original, lanzado en Early Access en 2017, prácticamente inventó el subgénero del roguelike deckbuilder tal como lo conocemos hoy. Nueve años después, el estudio apuesta por repetir la fórmula: lanzar en acceso anticipado, escuchar a la comunidad durante uno o dos años y pulir el juego hasta que esté listo de verdad.',
      'La secuela llega con cooperativo para cuatro jugadores desde el día uno, lo que amplía considerablemente el alcance respecto al original. Mega Crit ha sido transparente sobre el proceso: estiman que el juego tardará entre uno y dos años en alcanzar su versión 1.0, pero garantizan que el contenido disponible desde el primer día es sustancial y que el ritmo de actualizaciones será constante. Una hoja de ruta que contrasta fuertemente con los lanzamientos precipitados que han quemado a tantos estudios en el último ciclo.',
      'El caso Slay the Spire 2 llega en un momento especialmente relevante para el debate sobre la salud del sector. En la misma semana en que EA confirmaba despidos masivos en los equipos de Battlefield 6 tras su lanzamiento récord, un estudio independiente de dos personas fundado en 2012 vuelve a demostrar que la escala no lo es todo. El informe State of the Game Industry 2026, presentado en el GDC Festival of Gaming, señala precisamente el modelo de desarrollo indie sostenible como uno de los contrapesos más saludables a la volatilidad que sacude a los grandes publishers.',
      'Para quienes seguimos de cerca el desarrollo de videojuegos desde dentro, Slay the Spire 2 es mucho más que una secuela. Es un recordatorio de que con una mecánica sólida, escucha activa a la comunidad y honestidad sobre el estado del producto, se puede construir algo duradero. El Early Access tiene mala reputación en muchos círculos, pero Mega Crit fue uno de los que lo hicieron bien la primera vez. Todo apunta a que lo van a volver a hacer.'
    ],
    date: '17/03/2026',
    url: 'https://strategyandwargaming.com/2026/03/15/strategy-and-wargaming-news-15-march-2026-slay-the-spire-2-is-a-major-success-xenonauts-2-release-date-headquarters-cold-war-out-this-week-and-much-more/',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'strategyandwargaming.com',
    img: 'assets/img/news/slay_the_spire2.webp',
    tags: ['Slay the Spire 2', 'Mega Crit', 'Early Access', 'indie', 'roguelike', 'deckbuilder', 'gamedev', 'PC']
  },

  // ── NOTICIA 30 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-crimson-desert-launch-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🗡️',
    badgeLabel: 'GAMING',
    title: 'Crimson Desert: el RPG más ambicioso del año llega el 19 de marzo',
    summary: 'Pearl Abyss lanza el 19 de marzo su obra más ambiciosa con seis años de desarrollo. Las primeras impresiones filtradas apuntan a un combate generacional y un mundo abierto inmenso. El embargo de análisis cae el 18 con el juego ya en preload.',
    full: [
      'El 19 de marzo de 2026 llega Crimson Desert, el RPG de acción y mundo abierto que Pearl Abyss lleva más de seis años desarrollando. Se puede precargar desde el 17 de marzo en PlayStation Store, Xbox Store, Steam y Epic Games Store — un peso mínimo de 150 GB que da idea de la escala del proyecto. El embargo de análisis se levanta el día previo al lanzamiento, el 18 de marzo a las 15:00 PT, lo que ha generado expectación y cierta incertidumbre entre la comunidad.',
      'Antes de que se levante ese embargo, una filtración involuntaria del youtuber español Revenant — quien publicó y eliminó rápidamente su impresión del juego — ha disparado la expectativa. Los jugadores que grabaron el vídeo antes de su borrado describen un sistema de combate que el propio Revenant calificó como excepcional, con batallas a gran escala que no había visto hasta ahora y una mecánica que recuerda a clásicos del género como Devil May Cry o Ninja Gaiden, pero integrada en un mundo abierto masivo. Como aspectos negativos señaló algunos puzzles lentos, un esquema de controles complejo y dudas sobre el rendimiento en consola bajo situaciones de combate muy cargadas.',
      'El juego permite aprender movimientos de los propios enemigos y cuenta con un árbol de habilidades extenso. La campaña principal ronda las 60-80 horas según el equipo. Pearl Abyss ha confirmado que el juego no tendrá microtransacciones post-lanzamiento, un anuncio que ha sido muy bien recibido por una comunidad que conoce bien el modelo de negocio de Black Desert Online, su anterior título.',
      'En cuanto a especificaciones técnicas, la versión PS5 y Xbox Series X apunta a 60 FPS en modo rendimiento, mientras que Xbox Series S llegaría a los 40 FPS. La versión PS5 Pro correrá a 4K (upscale desde 1080p) con fluidez. La campaña de marketing ha sido bastante discreta hasta ahora, lo que combinado con el embargo tardío genera dos lecturas posibles: confianza total del estudio en el producto, o algún problema que las reviews revelarán en cuestión de horas.'
    ],
    date: '15/03/2026',
    url: 'https://www.gameshub.com/news/news/crimson-desert-early-review-leak-impressions-revenant-2860349/',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'gameshub.com',
    img: 'assets/img/news/crisom_desert.jpg',
    tags: ['Crimson Desert', 'Pearl Abyss', 'RPG', 'open world', 'PS5', 'Xbox Series X', 'PC']
  },

  // ── NOTICIA 29 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-martin-condal-abysmal-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title: 'Martin rompe su silencio: "Mi relación con Condal es abismal"',
    summary: 'El autor de Juego de Tronos ha descrito en The Hollywood Reporter su relación con el showrunner de House of the Dragon como "peor que tensa, directamente abismal". Una declaración que sacude los cimientos de la serie justo cuando la Temporada 3 entra en la recta final.',
    full: [
      'En una entrevista con The Hollywood Reporter publicada en enero de 2026, George R.R. Martin no se mordió la lengua al hablar de su relación con Ryan Condal, showrunner y cocreador de House of the Dragon. Cuando el periodista le preguntó si la relación era "tensa", Martin respondió: "Peor que tensa. Es abismal." Una palabra que cayó como una bomba en la comunidad de Westeros, a pocos meses del estreno de la Temporada 3.',
      'Según Martin, la colaboración empezó bien. Durante la primera temporada, el autor leía borradores de los guiones, daba notas y Condal las incorporaba. Todo cambió en la segunda temporada, cuando Martin afirma que Condal dejó de escucharle. Las diferencias escalaron hasta un punto de no retorno en una videollamada con ejecutivos de HBO, en la que Condal presentó su visión para la Temporada 3 y Martin pronunció la frase que lo resume todo: "Esto ya no es mi historia." HBO le pidió entonces que se mantuviera al margen del proyecto, aunque posteriormente fue reincorporado.',
      'El trasfondo de la disputa está en los cambios realizados a personajes de Fire & Blood, el libro de referencia. Martin señaló en su momento, en un post de blog que HBO le pidió eliminar, que excluir al joven Maelor del episodio de Sangre y Queso tendría un "efecto mariposa tóxico" en los arcos narrativos futuros. Condal, por su parte, ha reconocido haber hecho todo lo posible por incluir a Martin en el proceso, pero señala que llegó un punto en el que el autor se negó a reconocer las limitaciones prácticas de una producción televisiva.',
      'El jefe de contenidos de HBO, Casey Bloys, intentó mediar públicamente: "Como toda buena familia americana, preferiría que nuestra disfunción se quedara en casa." Bloys destacó el 87% en Rotten Tomatoes de las dos primeras temporadas y respaldó el trabajo de Condal. A todo esto hay que añadir que Martin se deshace en elogios hacia Ira Parker, showrunner de A Knight of the Seven Kingdoms, con quien describe una relación de colaboración idílica. El contraste no pasa desapercibido. House of the Dragon Temporada 3 llega en junio de 2026 con ocho episodios. Veremos qué historia cuenta Condal — y si es la que Martin habría contado.'
    ],
    date: '15/03/2026',
    url: 'https://www.tvinsider.com/1239508/house-of-the-dragon-creator-feud-george-rr-martin-ryan-condall/',
    page: 'got.html',
    pageLabel: 'GoT / HotD',
    accent: '#cc2200',
    source: 'hollywoodreporter.com',
    img: 'assets/img/news/house_of_the_dragons.webp',
    tags: ['House of the Dragon', 'George RR Martin', 'Ryan Condal', 'HotD T3', 'HBO', 'drama', 'Fire & Blood']
  },

  // ── NOTICIA 28 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-ea-despidos-battlefield-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '💻',
    badgeLabel: 'GAMEDEV',
    title: 'EA despide al equipo de Battlefield 6 tras su mejor lanzamiento en la historia de la saga',
    summary: 'Criterion, DICE, Ripple Effect y Motive Studios sufren despidos masivos solo meses después de que Battlefield 6 batiese todos los récords de la franquicia. EA lo llama "realineamiento". La industria lo llama hipocresía.',
    full: [
      'La industria del videojuego vuelve a dar un titular que duele. Electronic Arts ha confirmado despidos en varios de los estudios que desarrollaron Battlefield 6, el juego que batió todos los récords históricos de la saga y fue el título más vendido en Estados Unidos durante 2025. Los afectados incluyen a trabajadores de Criterion Games, DICE, Ripple Effect y Motive Studios. El número exacto de empleados despedidos no ha sido revelado.',
      'EA justifica la medida con la palabra que más se repite en las notas de prensa del sector: "realineamiento". La compañía ha declarado que estos cambios buscan adaptar los equipos al nuevo enfoque del juego, que pasa de un desarrollo activo a convertirse en un servicio live-service de largo recorrido. "Battlefield sigue siendo una de nuestras mayores prioridades, y continuamos invirtiendo en la franquicia", aseguró un portavoz de EA. Mientras tanto, los afectados actualizan sus perfiles de LinkedIn.',
      'El caso resulta especialmente llamativo porque la justificación habitual para este tipo de recortes — pobres resultados comerciales — no aplica aquí. Battlefield 6 fue un éxito masivo. La transición de equipos de desarrollo al modo "soporte y actualizaciones" es una dinámica que se repite con preocupante frecuencia en los grandes estudios: los mismos desarrolladores que construyeron el éxito son los primeros en salir una vez que el juego está estabilizado.',
      'La noticia llega en la misma semana en que el GDC Festival of Gaming publica su informe State of the Game Industry 2026, que dedica un apartado importante a los despidos masivos que han sacudido el sector durante los últimos tres años. Según ese informe, la IA generativa y la presión de los grandes publishers sobre sus estudios internos siguen siendo los principales factores de inestabilidad laboral en la industria. Para muchos desarrolladores independientes, estas noticias son el recordatorio más claro de por qué tiene sentido apostar por el camino del desarrollo indie.'
    ],
    date: '15/03/2026',
    url: 'https://www.goonhammer.com/games-industry-news-roundup-march-10th-2026/',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'goonhammer.com',
    img: 'assets/img/news/battlefield_6_explosion.webp',
    tags: ['EA', 'Battlefield 6', 'DICE', 'Criterion', 'despidos', 'industria', 'gamedev', 'live service']
  },

  // ── NOTICIA 27 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-gdc-festival-2026',
    topic: 'gamedev',
    category: 'gamedev',
    emoji: '🎮',
    badgeLabel: 'GAMEDEV',
    title: 'GDC se reinventa: 40 años después nace el Festival of Gaming',
    summary: 'La conferencia más importante del sector celebra su 40 aniversario con un histórico cambio de formato. Esta semana en San Francisco, el GDC se convierte en festival abierto con Hideo Kojima como invitado estrella y Clair Obscur liderando las nominaciones al GOTY.',
    full: [
      'Del 9 al 13 de marzo de 2026, el Moscone Center de San Francisco acoge la edición más especial de la Game Developers Conference en sus cuatro décadas de historia. Por primera vez, la GDC abandona el formato tradicional de conferencia técnica para convertirse en el GDC Festival of Gaming: un evento más abierto, con mayor protagonismo indie y un espíritu de comunidad que va mucho más allá de los desarrolladores AAA.',
      'El cambio más llamativo es la democratización del acceso. Se han lanzado nuevas categorías de pases a menor precio, incluyendo el "Early Stage Indie & Startup Pass" pensado para estudios emergentes. Los poseedores del Game Changer Pass pueden participar en el programa de pitches y en reuniones one-to-one de networking a través del sistema GamePlan. La sala de exposiciones se ha reorganizado en cinco zonas temáticas: Game Development, Future Tech, Indie & Education, International y Monetization & Player Engagement.',
      'En el terreno de los premios, Hideo Kojima sube al escenario para dar el primer keynote en cinco años, un gesto que subraya el peso histórico de esta edición. En los Game Developers Choice Awards, Clair Obscur: Expedition 33 lidera con ocho nominaciones, incluida la de Juego del Año. Por su parte, en el Independent Games Festival, Baby Steps (del creador de QWOP, Bennett Foddy) arrasa con cinco nominaciones que cubren audio, diseño, narrativa, el Premio Nouveau y el Gran Premio Seumas McNally.',
      'El Day of the Devs se ha trasladado a The Midway para una exhibición pública y gratuita de más de 60 juegos jugables el 8 de marzo, con un pop-up dentro del propio GDC entre los días 11 y 13. La ceremonia del IGF se celebra el miércoles 11 a las 18:30 PT con retransmisión en directo por Twitch. Una semana histórica para los que vivimos el desarrollo de videojuegos desde dentro.'
    ],
    date: '09/03/2026',
    url: 'https://gdconf.com/news-insights/',
    page: 'gamedev.html',
    pageLabel: 'GameDev',
    accent: '#00ff41',
    source: 'gdconf.com',
    img: 'assets/img/news/gdc_festival_of_gaming_2026.jpg',
    tags: ['GDC', 'indie', 'game dev', 'Clair Obscur', 'Hideo Kojima', 'IGF', 'festival']
  },

  // ── NOTICIA 26 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-gta6-fecha-definitiva-2026',
    topic: 'gaming',
    category: 'gaming',
    emoji: '🎮',
    badgeLabel: 'GAMING',
    title: 'GTA 6 tiene fecha inamovible: 19 de noviembre en PS5 y Xbox',
    summary: 'Tras años de esperas y dos retrasos, Rockstar y Take-Two cierran filas: Grand Theft Auto VI llega el 19 de noviembre de 2026. PlayStation Store ya habilitó su ficha y el marketing arranca este verano. La cuenta atrás es oficial.',
    full: [
      'Grand Theft Auto VI tiene fecha definitiva y, por fin, parece que esta vez va en serio. Rockstar Games y su empresa matriz Take-Two Interactive han confirmado el 19 de noviembre de 2026 como fecha de lanzamiento en PlayStation 5 y Xbox Series X|S. El CEO de Take-Two, Strauss Zelnick, lo mencionó explícitamente en el último earnings report como uno de los grandes hitos del ejercicio fiscal 2027, descartando cualquier nuevo retraso en el horizonte inmediato.',
      'El historial de GTA 6 no ha sido precisamente tranquilo: el juego fue originalmente anunciado para 2025, retrasado a mayo de 2026 y finalmente fijado en noviembre de ese mismo año para ganar el codiciado lanzamiento en la ventana navideña. Dos movimientos que recuerdan mucho al proceso de Red Dead Redemption 2, que también sufrió varios deslizamientos de fecha antes de aterrizar en octubre de 2018 con un resultado aplastante.',
      'A principios de marzo de 2026, la PlayStation Store actualizó significativamente la ficha oficial del juego, habilitando la opción de añadirlo a las wishlists de los usuarios. La prensa especializada lo interpretó como el pistoletazo de salida para la apertura inminente de reservas internacionales y el inicio de la fase de marketing masivo, que Take-Two ha confirmado comenzará este verano.',
      'El juego seguirá a Jason Duval y Lucia Caminos, pareja sentimental y criminal, en el estado ficticio de Leonida, inspirado en Florida y centrado en Vice City. Lucia pasa a la historia como la primera protagonista femenina no opcional de toda la saga GTA. La versión de PC llegará con un retraso estimado de 12 a 18 meses. Quedan poco más de ocho meses. La espera, al fin, tiene final.'
    ],
    date: '11/03/2026',
    url: 'https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026',
    page: 'gaming.html',
    pageLabel: 'Gaming',
    accent: '#00bfff',
    source: 'rockstargames.com',
    img: 'assets/img/news/gran_theft_auto_6.webp',
    tags: ['GTA 6', 'Rockstar', 'PS5', 'Xbox Series X', 'open world', 'Vice City']
  },

  // ── NOTICIA 25 ──────────────────────────────────────────────────────────────
  {
    id: 'noticia-hotd-t3-casting-2026',
    topic: 'got',
    category: 'got',
    emoji: '🐉',
    badgeLabel: 'HOUSE OF THE DRAGON',
    title: 'HotD T3: nueva Jaehaera, fechas confirmadas y la Danza al rojo vivo',
    summary: 'House of the Dragon llega en junio de 2026 con toda la artillería. HBO confirma la fecha, desvela nuevos fichajes para la temporada y los propios directores prometen escenas que eclipsarán todo lo visto hasta ahora. La Batalla del Gullet se acerca.',
    full: [
      'House of the Dragon Temporada 3 está en la recta final de posproducción y la maquinaria de HBO se ha puesto en marcha. Tras el tráiler oficial lanzado el 19 de febrero de 2026, los anuncios de casting no han parado: la actriz Pearl Clark se incorpora al reparto para interpretar a la princesa Jaehaera Targaryen, hija del rey Aegon II y la reina Helaena. Lo llamativo es que la temporada contará con dos versiones de Jaehaera simultáneamente, una de bebé y otra de unos diez años, reflejando el avance temporal de la narrativa de la Danza de los Dragones.',
      'Además de Pearl Clark, la temporada añade nombres importantes: James Norton como Ormund Hightower, Tommy Flanagan como Lord Roderick Dustin, Dan Fogler como Ser Torrhen Manderly y Tom Cullen como Ser Luthor Largent, entre otros. El reparto principal al completo regresa: Matt Smith, Emma D\'Arcy, Olivia Cooke, Ewan Mitchell, Steve Toussaint y Fabien Frankel, entre otros.',
      'La fecha está fijada en junio de 2026, específicamente en domingo, lo que deja cuatro opciones posibles: 7, 14, 21 o 28 de junio. La temporada constará de ocho episodios, igual que la segunda, y será la penúltima de la serie ya que HBO ha confirmado un final en cuatro temporadas, con la cuarta actualmente en proceso de escritura. El director Loni Peristere no ha podido ser más contundente: "Es todo lo que los fans quieren. Todo lo que han leído en el libro. Esta temporada va a once."',
      'El tráiler ya adelanta lo que se viene: Aemond Targaryen en el Trono de Hierro tras el retiro de Aegon, Rhaenyra con nuevos dragones a su disposición y Alicent jugando una doble partida desde Rocadragón. La Batalla del Gullet, el conflicto naval que iba a aparecer en la T2 y fue desplazado por el recorte de episodios, promete ser uno de los set pieces más épicos de toda la franquicia Juego de Tronos.'
    ],
    date: '10/03/2026',
    url: 'https://redanianintelligence.com/2026/03/09/house-of-the-dragon-season-3-casts-a-new-jaehaera-targaryen/',
    page: 'got.html',
    pageLabel: 'GoT / HotD',
    accent: '#cc2200',
    source: 'redanianintelligence.com',
    img: 'assets/img/news/house_of_the_dragons.webp',
    tags: ['House of the Dragon', 'HotD T3', 'HBO', 'Jaehaera', 'Danza de los Dragones', 'Westeros']
  },

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
    img: "assets/img/news/lpl_2026.webp",
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
    img: "assets/img/news/crisom_desert.jpg",
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
    img: "assets/img/news/el_caballero_siete_reinos.webp",
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
    img: 'assets/img/news/magic_tortugas_ninja.webp',
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
    img: 'assets/img/news/defenders_great_bastion.webp',
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
    img: "assets/img/news/nba_ball.webp",
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
    img: 'assets/img/news/magic_tortugas_ninja.webp',
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
    img: 'assets/img/news/defenders_great_bastion.webp',
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
    img: "assets/img/news/lec_calendar_format.webp",
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
    img:        'assets/img/news/fatal_frame_ii_crimson_butterfly_remake_pc_steam_cover.webp',
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
    img:        'assets/img/news/defenders_great_bastion.webp',
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
    img:        'assets/img/news/lcs_lyon_champs.jpg',
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
    img:        'assets/img/news/lec_calendar_format.webp',
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
    img:        'assets/img/news/house_of_the_dragons.webp',
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
    img:        'assets/img/news/nba_ball.webp',
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
    img:        'assets/img/lec_versus_2026.webp',
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
    img:        'assets/img/news/resident_evil_requiem.webp',
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
    img:        'assets/img/news/house_of_the_dragons.webp',
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
    img:        'assets/img/news/dungeons_and_dragons.webp',
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
    img:        'assets/img/news/defenders_great_bastion.webp',
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
    img:        'assets/img/news/unity_ai.webp',
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
    img:        'assets/img/news/final_fantasy_vii.webp',
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
// used_topics: ["got", "esports", "gaming", "magic", "gamedev", "warhammer", "rol", "nba", "gaming", "got", "rol", "esports", "nba", "magic", "warhammer", "got", "nba", "gamedev"]
// last_update: "2026-04-16"
// next_available: ["gaming", "esports", "warhammer"]
