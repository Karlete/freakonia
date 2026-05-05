// js/gaming-history.js
// ============================================================
// Widget: "Esta semana en la historia del gaming"
// Freakonia — datos estáticos, sin API, sin dependencias
// Formato clave: "DD-MM" → array de eventos ese día
// ============================================================

var GAMING_HISTORY = {

  // ── ENERO ──────────────────────────────────────────────────
  "03-01": [{ year: 2002, text: "Splinter Cell se anuncia por Ubisoft. El juego de espías va a revolucionar el stealth.", emoji: "🕵️" }],
  "08-01": [{ year: 1998, text: "Lara Croft: Tomb Raider lanza en PlayStation. La arqueóloga más famosa del gaming debuta.", emoji: "🏺" }],
  "14-01": [{ year: 1994, text: "Donkey Kong Country es anunciado en CES. El mundo del gaming no volvería a ser igual.", emoji: "🦍" }],
  "17-01": [{ year: 1996, text: "Resident Evil sale en Japón para PlayStation. El survival horror acaba de nacer.", emoji: "🧟" }],
  "21-01": [{ year: 1997, text: "Final Fantasy VII llega a Japón. Una generación entera descubre que los videojuegos pueden hacerte llorar.", emoji: "🗡️" }],
  "26-01": [{ year: 2001, text: "Metal Gear Solid 2 se anuncia. Kojima promete un juego revolucionario y escandaloso.", emoji: "📦" }],
  "31-01": [{ year: 2000, text: "Soulcalibur llega a Dreamcast. Muchos coinciden en que es el mejor juego de lucha de su época.", emoji: "⚔️" }],

  // ── FEBRERO ────────────────────────────────────────────────
  "01-02": [{ year: 2008, text: "Super Smash Bros Brawl lanza en Japón para Wii. El caos en pantalla tiene nueva dimensión.", emoji: "👊" }],
  "04-02": [{ year: 1989, text: "Tetris llega a occidente para Game Boy. El puzzle definitivo en el bolsillo.", emoji: "🟦" }],
  "07-02": [{ year: 2000, text: "Sega anuncia el fin de la Dreamcast en Japón. Fin de una era.", emoji: "💔" }],
  "09-02": [{ year: 1998, text: "Baldur's Gate entra en producción en BioWare. El RPG de PC está a punto de reinventarse.", emoji: "🧙" }],
  "11-02": [{ year: 2006, text: "The Legend of Zelda: Twilight Princess se anuncia. Link regresa más oscuro que nunca.", emoji: "🗡️" }],
  "13-02": [{ year: 1990, text: "Nintendo lanza Super Mario Bros 3 en Norteamérica. Las colas rodean las tiendas.", emoji: "🍄" }],
  "14-02": [{ year: 1994, text: "Donkey Kong Country es lanzado en Europa justo en San Valentín. El mejor regalo posible.", emoji: "🦍" }],
  "18-02": [{ year: 2003, text: "Deus Ex 2: Invisible War se anuncia. El cyberpunk del gaming continúa su viaje.", emoji: "🤖" }],
  "22-02": [{ year: 1994, text: "Sonic the Hedgehog 3 sale en Norteamérica. La guerra de las consolas en su máximo apogeo.", emoji: "💨" }],
  "28-02": [{ year: 2007, text: "BioShock se anuncia oficialmente. Rapture está esperando.", emoji: "🏙️" }],

  // ── MARZO ──────────────────────────────────────────────────
  "01-03": [{ year: 2005, text: "Resident Evil 4 se anuncia para GameCube. El reinventor del survival horror llegará pronto.", emoji: "🔫" }],
  "03-03": [{ year: 1990, text: "Game Boy llega a Japón con Tetris incluido. 118 millones de unidades vendidas después, la historia le daría la razón a Nintendo.", emoji: "🎮" }],
  "08-03": [{ year: 2000, text: "Diablo II se anuncia oficialmente. El dungeon crawler definitivo está en camino.", emoji: "😈" }],
  "11-03": [{ year: 1996, text: "El N64 llega a Japón con Super Mario 64. La transición al 3D comienza.", emoji: "⭐" }],
  "16-03": [{ year: 1998, text: "Starcraft lanza al mercado. La estrategia en tiempo real jamás volvería a ser lo mismo.", emoji: "👽" }],
  "20-03": [{ year: 2002, text: "Splinter Cell lanza en Norteamérica. El espionaje nunca fue tan sigiloso.", emoji: "🕵️" }],
  "22-03": [{ year: 1999, text: "Super Smash Bros llega a Japón para N64. Una idea loca que se convierte en franquicia icónica.", emoji: "👊" }],
  "24-03": [{ year: 2000, text: "PlayStation 2 lanza en Japón. La consola más vendida de la historia empieza su reinado.", emoji: "🔵" }],
  "29-03": [{ year: 2001, text: "Advance Wars se anuncia para Game Boy Advance. La táctica va a conquistar el mercado portátil.", emoji: "🪖" }],

  // ── ABRIL ──────────────────────────────────────────────────
  "01-04": [{ year: 2007, text: "Portal se anuncia. La física y los acertijos están a punto de cambiar el gaming.", emoji: "🚪" }],
  "03-04": [{ year: 1992, text: "Streets of Rage 2 sale en Europa. Yuzo Koshiro firma una banda sonora que suena brutal aún hoy.", emoji: "🥊" }],
  "08-04": [{ year: 2004, text: "Grand Theft Auto: San Andreas se anuncia oficialmente. El hype es histórico.", emoji: "🚗" }],
  "11-04": [{ year: 2000, text: "Shenmue se lanza en Japón para Dreamcast. Yu Suzuki crea una experiencia sin precedentes.", emoji: "🥋" }],
  "14-04": [{ year: 2003, text: "Castlevania: Aria of Sorrow llega a GBA. Uno de los mejores metroidvanias jamás creados.", emoji: "🏰" }],
  "19-04": [{ year: 2002, text: "Morrowind sale para PC. Bethesda establece el estándar del RPG de mundo abierto.", emoji: "🌍" }],
  "22-04": [{ year: 2011, text: "PSN sufre el mayor hackeo de su historia. 77 millones de cuentas comprometidas.", emoji: "⚠️" }],
  "26-04": [{ year: 1994, text: "Sonic & Knuckles lanza en Norteamérica con su revolucionario sistema de cartuchos apilables.", emoji: "💍" }],
  "29-04": [{ year: 2005, text: "Resident Evil 4 lanza en GameCube. El juego que reinventó el survival horror.", emoji: "🔫" }],

  // ── MAYO ───────────────────────────────────────────────────
  "01-05": [{ year: 2009, text: "Killzone 2 lanza en Europa para PlayStation 3. Los gráficos next-gen llegan a la consola de Sony.", emoji: "🎯" }],
  "02-05": [{ year: 2009, text: "Street Fighter IV entra en las máquinas arcade. El regreso del rey de los juegos de lucha.", emoji: "👊" }],
  "03-05": [{ year: 1985, text: "Game Boy se anuncia con Tetris incluido. Nintendo está a punto de revolucionar el gaming portátil.", emoji: "🎮" }],
  "04-05": [{ year: 1980, text: "Pac-Man llega a los arcades. La bolita amarilla que lo comería todo cambia la industria.", emoji: "👾" }],
  "05-05": [{ year: 2009, text: "League of Legends lanza oficialmente. El MOBA que definiría un género entero acaba de nacer.", emoji: "⚔️" }],
  "06-05": [{ year: 2010, text: "Red Dead Redemption se anuncia oficialmente. Rockstar trae el Far West a los videojuegos.", emoji: "🤠" }],
  "07-05": [{ year: 1984, text: "Tetris es creado por Alexey Pajitnov en la Academia de Ciencias de la URSS.", emoji: "🟥" }],
  "10-05": [{ year: 1996, text: "Diablo lanza en PC. El dungeon crawler moderno nace con el click de un ratón.", emoji: "😈" }],
  "13-05": [{ year: 1985, text: "Super Mario Bros llega a los arcades japoneses por primera vez. Todo cambia.", emoji: "🍄" }],
  "15-05": [{ year: 2001, text: "Gran Turismo 3 sale en Japón para PS2. El simulador de conducción definitivo de su generación.", emoji: "🏎️" }],
  "17-05": [{ year: 2004, text: "World of Warcraft entra en beta. El MMORPG que definiría una generación de jugadores.", emoji: "⚔️" }],
  "23-05": [{ year: 1994, text: "Sonic the Hedgehog llega al Mega-CD en su versión más ambiciosa y polémica.", emoji: "💨" }],
  "28-05": [{ year: 2002, text: "Grand Theft Auto: Vice City es anunciado. Los 80 están a punto de volver.", emoji: "🌴" }],

  // ── JUNIO ──────────────────────────────────────────────────
  "01-06": [{ year: 2001, text: "Advance Wars lanza en Norteamérica para Game Boy Advance. La táctica en el bolsillo definitiva.", emoji: "🪖" }],
  "05-06": [{ year: 1999, text: "Diablo II se lanza en Norteamérica. El ARPG que millones esperaban finalmente llega.", emoji: "😈" }],
  "11-06": [{ year: 2001, text: "Nintendo presenta el GameCube en el E3. Luigi's Mansion será el juego de lanzamiento.", emoji: "👻" }],
  "15-06": [{ year: 1996, text: "Quake sale para PC. El FPS en 3D real acaba de llegar. id Software lo vuelve a hacer.", emoji: "🔫" }],
  "16-06": [{ year: 1998, text: "Metal Gear Solid lanza en Japón para PlayStation. Kojima cambia el gaming para siempre.", emoji: "📦" }],
  "19-06": [{ year: 1989, text: "Game Boy sale en Norteamérica. La revolución portátil llega al mundo.", emoji: "🎮" }],
  "23-06": [{ year: 2003, text: "Mario Kart: Double Dash se anuncia en el E3. Los multijugadores locales están de enhorabuena.", emoji: "🏁" }],
  "26-06": [{ year: 1997, text: "Castlevania: Symphony of the Night lanza en Norteamérica. El metroidvania como género nace aquí.", emoji: "🦇" }],
  "30-06": [{ year: 2004, text: "Grand Theft Auto: San Andreas lanza en Norteamérica. El mundo abierto alcanza su máxima expresión.", emoji: "🚗" }],

  // ── JULIO ──────────────────────────────────────────────────
  "02-07": [{ year: 2002, text: "Metal Gear Solid 2: Sons of Liberty lanza en Norteamérica. Kojima vuelve a sorprender.", emoji: "📦" }],
  "09-07": [{ year: 1993, text: "Doom entra en desarrollo en id Software. El FPS está a punto de cambiar la industria.", emoji: "👹" }],
  "13-07": [{ year: 1990, text: "Super Mario World se lanza con la Super Famicom en Japón. La SNES llega pisando fuerte.", emoji: "🦕" }],
  "18-07": [{ year: 1999, text: "Pokémon Red & Blue llegan a Norteamérica. Los adolescentes están atrapados coleccionando criaturas.", emoji: "🔴" }],
  "19-07": [{ year: 2004, text: "Doom 3 sale en PC. El survival horror vuelve a las raíces del shooter.", emoji: "🔦" }],
  "23-07": [{ year: 1994, text: "Final Fantasy VI (III en occidente) lanza en Norteamérica. El storytelling en RPG alcanza su cima.", emoji: "🎭" }],
  "29-07": [{ year: 1996, text: "Crash Bandicoot lanza en Norteamérica para PlayStation. Sony tiene su mascota.", emoji: "🐾" }],

  // ── AGOSTO ─────────────────────────────────────────────────
  "01-08": [{ year: 2001, text: "Metal Gear Solid 2 se lanza en Japón. Kojima sigue revolucionando.", emoji: "📦" }],
  "03-08": [{ year: 2004, text: "Fable lanza en Xbox. Peter Molyneux promete el cielo y da un juego decente.", emoji: "🌟" }],
  "06-08": [{ year: 1991, text: "Street Fighter II llega a los arcades. El juego de lucha que lo empezó todo.", emoji: "👊" }],
  "08-08": [{ year: 1994, text: "Earthworm Jim lanza en Mega Drive. Animación Hollywood en un cartucho de 16 bits.", emoji: "🐛" }],
  "13-08": [{ year: 1981, text: "Donkey Kong llega a los arcades norteamericanos. El joven Mario (entonces Jumpman) debuta.", emoji: "🦍" }],
  "20-08": [{ year: 2005, text: "Shadow of the Colossus se lanza en Japón para PS2. Cada jefe es una obra maestra.", emoji: "🛡️" }],
  "24-08": [{ year: 1995, text: "Windows 95 llega al mercado. El gaming en PC nunca volvería a ser igual.", emoji: "💻" }],
  "27-08": [{ year: 2002, text: "Metroid Prime lanza en Norteamérica. El mejor juego de GameCube según muchos.", emoji: "🌌" }],
  "31-08": [{ year: 2000, text: "Perfect Dark se anuncia para Nintendo 64. El espía femenino de Rare llegará pronto.", emoji: "🕵️‍♀️" }],

  // ── SEPTIEMBRE ─────────────────────────────────────────────
  "02-09": [{ year: 2004, text: "World of Warcraft llega a la tienda (fecha de lanzamiento). El MMORPG definitivo.", emoji: "⚔️" }],
  "09-09": [{ year: 1999, text: "Dreamcast lanza en Norteamérica. Sega vende 372.000 unidades en 24 horas. Ojalá hubiera durado más.", emoji: "🌀" }],
  "13-09": [{ year: 1993, text: "Doom entra en beta. El FPS moderno tiene fecha.", emoji: "👹" }],
  "15-09": [{ year: 2001, text: "Ico sale en Japón para PS2. El arte en videojuegos acaba de subir el listón.", emoji: "🕯️" }],
  "20-09": [{ year: 1994, text: "The Lion King lanza en Mega Drive. El platformer más brutal de la SEGA.", emoji: "🦁" }],
  "22-09": [{ year: 1998, text: "Spyro the Dragon llega a PlayStation. El dragón violeta planta cara a Crash.", emoji: "🐲" }],
  "26-09": [{ year: 2003, text: "Prince of Persia: Sands of Time lanza. El mejor reboot de la historia.", emoji: "⏳" }],
  "28-09": [{ year: 2007, text: "BioShock lanza en Xbox 360 y PC. Rapture te está esperando.", emoji: "🏙️" }],

  // ── OCTUBRE ────────────────────────────────────────────────
  "01-10": [{ year: 2001, text: "Metal Gear Solid 2 lanza en Norteamérica para PS2. El final es controversia pura.", emoji: "📦" }],
  "04-10": [{ year: 1985, text: "Super Mario Bros lanza en Norteamérica con el NES. El gaming en casa renace.", emoji: "🍄" }],
  "09-10": [{ year: 2001, text: "GameCube lanza en Japón. Nintendo apuesta por el mini disco y la manilla morada.", emoji: "🟣" }],
  "14-10": [{ year: 1997, text: "Fallout lanza en PC. El RPG postapocalíptico definitivo.", emoji: "☢️" }],
  "18-10": [{ year: 2005, text: "Resident Evil 4 lanza en Norteamérica para GameCube. La reinvención completa.", emoji: "🔫" }],
  "21-10": [{ year: 1991, text: "Sonic the Hedgehog llega a Europa en Mega Drive. La mascota de Sega conquista el continente.", emoji: "💨" }],
  "26-10": [{ year: 2001, text: "GTA III lanza en PS2. El mundo abierto tridimensional llega al gran público.", emoji: "🚗" }],
  "29-10": [{ year: 1996, text: "Crash Bandicoot llega a Europa. PlayStation tiene ya su icono.", emoji: "🐾" }],

  // ── NOVIEMBRE ──────────────────────────────────────────────
  "03-11": [{ year: 1989, text: "Sega Genesis/Mega Drive lanza en Norteamérica. La guerra de los 16 bits comienza.", emoji: "⚡" }],
  "06-11": [{ year: 2000, text: "Diablo II llega a Norteamérica. La sequela que mejora al original en todos los aspectos.", emoji: "😈" }],
  "09-11": [{ year: 1998, text: "The Legend of Zelda: Ocarina of Time lanza en Norteamérica. El mejor juego de la historia según muchos.", emoji: "🎵" }],
  "10-11": [{ year: 2001, text: "Xbox lanza en Norteamérica con Halo. Microsoft entra en el mercado de consolas con todo.", emoji: "🟢" }],
  "15-11": [{ year: 2001, text: "GameCube lanza en Norteamérica. La batalla navideña entre Nintendo y Xbox es épica.", emoji: "🟣" }],
  "18-11": [{ year: 1996, text: "Super Mario 64 lanza en Norteamérica. El 3D en plataformas ya tiene su biblia.", emoji: "⭐" }],
  "19-11": [{ year: 2006, text: "PlayStation 3 y Nintendo Wii lanzan en Norteamérica el mismo día. Una noche histórica.", emoji: "🎮" }],
  "21-11": [{ year: 2001, text: "Halo: Combat Evolved lanza con Xbox. El FPS en consola encuentra su killer app.", emoji: "🪖" }],
  "22-11": [{ year: 2005, text: "Xbox 360 lanza en Norteamérica. La nueva generación empieza un año antes que la competencia.", emoji: "🟢" }],
  "25-11": [{ year: 2004, text: "Halo 2 lanza en Norteamérica para Xbox. El multijugador online revoluciona el gaming de consola.", emoji: "🪖" }],

  // ── DICIEMBRE ──────────────────────────────────────────────
  "02-12": [{ year: 1994, text: "PlayStation lanza en Norteamérica. Sony entra en el gaming y cambia la industria para siempre.", emoji: "⚫" }],
  "03-12": [{ year: 1994, text: "PlayStation lanza en Europa. El CD-ROM toma el control.", emoji: "⚫" }],
  "07-12": [{ year: 2003, text: "Halo 2 se anuncia oficialmente. El hype está al máximo.", emoji: "🪖" }],
  "10-12": [{ year: 1996, text: "Nights into Dreams lanza en Europa para Saturn. El juego que define la identidad de Sega en 32 bits.", emoji: "🌙" }],
  "11-12": [{ year: 1993, text: "Doom lanza como shareware en Navidades. El FPS moderno ha nacido.", emoji: "👹" }],
  "14-12": [{ year: 1993, text: "Aladdin de Sega lanza en Europa. La animación de Disney en un cartucho de 16 bits.", emoji: "🧞" }],
  "17-12": [{ year: 2006, text: "Wii llega a Norteamérica. La revolución del control por movimiento comienza.", emoji: "🎮" }],
  "19-12": [{ year: 1998, text: "The Legend of Zelda: Ocarina of Time llega a Europa. La espera merece la pena.", emoji: "🎵" }],
  "21-12": [{ year: 2001, text: "Halo llega a Europa con el lanzamiento de Xbox. El FPS en consola tiene un nuevo rey.", emoji: "🪖" }],
  "28-12": [{ year: 2000, text: "Perfect Dark entra en desarrollo en Rare. El espionaje femenino llegará.", emoji: "🕵️‍♀️" }]
};
