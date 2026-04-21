// ============================================================
// freakcoin.js — Freakcoin Rating Component
// Freakonia · Sistema de valoración con monedas pixel art
// ============================================================
// Uso:
//   renderFreakcoin(containerId, score, verdict)
//
// Ejemplo:
//   renderFreakcoin('mi-rating', 9, 'Casi perfecto.')
//
// El contenedor debe existir en el HTML:
//   <div id="mi-rating"></div>
// ============================================================

(function () {

  // ── SVG symbols (se inyectan una sola vez en el body) ─────

  var SVG_SYMBOLS = `
<svg class="freakcoin-symbols" aria-hidden="true">

  <!-- Moneda llena: DORADO -->
  <symbol id="fc-gold" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#ffcc00"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#ffcc00"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#ffcc00"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#ffcc00"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#ffcc00"/>
    <rect x="4"  y="2"  width="2"  height="2"  fill="#ffe066"/>
    <rect x="22" y="2"  width="2"  height="2"  fill="#ffe066"/>
    <rect x="4"  y="24" width="2"  height="2"  fill="#cc8800"/>
    <rect x="22" y="24" width="2"  height="2"  fill="#cc8800"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#996600"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#996600"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#996600"/>
  </symbol>

  <!-- Moneda llena: VIOLETA -->
  <symbol id="fc-purple" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#cc44ff"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#cc44ff"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#cc44ff"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#cc44ff"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#cc44ff"/>
    <rect x="4"  y="2"  width="2"  height="2"  fill="#dd88ff"/>
    <rect x="22" y="2"  width="2"  height="2"  fill="#dd88ff"/>
    <rect x="4"  y="24" width="2"  height="2"  fill="#8800cc"/>
    <rect x="22" y="24" width="2"  height="2"  fill="#8800cc"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#660099"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#660099"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#660099"/>
  </symbol>

  <!-- Moneda llena: VERDE -->
  <symbol id="fc-green" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#00ff41"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#00ff41"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#00ff41"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#00ff41"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#00ff41"/>
    <rect x="4"  y="2"  width="2"  height="2"  fill="#88ffaa"/>
    <rect x="22" y="2"  width="2"  height="2"  fill="#88ffaa"/>
    <rect x="4"  y="24" width="2"  height="2"  fill="#00aa22"/>
    <rect x="22" y="24" width="2"  height="2"  fill="#00aa22"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#006622"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#006622"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#006622"/>
  </symbol>

  <!-- Moneda llena: AZUL -->
  <symbol id="fc-blue" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#00bfff"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#00bfff"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#00bfff"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#00bfff"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#00bfff"/>
    <rect x="4"  y="2"  width="2"  height="2"  fill="#88ddff"/>
    <rect x="22" y="2"  width="2"  height="2"  fill="#88ddff"/>
    <rect x="4"  y="24" width="2"  height="2"  fill="#0077aa"/>
    <rect x="22" y="24" width="2"  height="2"  fill="#0077aa"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#005577"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#005577"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#005577"/>
  </symbol>

  <!-- Moneda llena: ROJO -->
  <symbol id="fc-red" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#ff3131"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#ff3131"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#ff3131"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#ff3131"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#ff3131"/>
    <rect x="4"  y="2"  width="2"  height="2"  fill="#ff8888"/>
    <rect x="22" y="2"  width="2"  height="2"  fill="#ff8888"/>
    <rect x="4"  y="24" width="2"  height="2"  fill="#aa0000"/>
    <rect x="22" y="24" width="2"  height="2"  fill="#aa0000"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#770000"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#770000"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#770000"/>
  </symbol>

  <!-- Moneda vacía (todas las puntuaciones) -->
  <symbol id="fc-empty" viewBox="0 0 28 28">
    <rect x="4"  y="0"  width="20" height="2"  fill="#2a2a2a"/>
    <rect x="4"  y="26" width="20" height="2"  fill="#2a2a2a"/>
    <rect x="0"  y="4"  width="2"  height="20" fill="#2a2a2a"/>
    <rect x="26" y="4"  width="2"  height="20" fill="#2a2a2a"/>
    <rect x="2"  y="2"  width="24" height="24" fill="#1e1e1e"/>
    <rect x="8"  y="6"  width="2"  height="16" fill="#333333"/>
    <rect x="8"  y="6"  width="12" height="2"  fill="#333333"/>
    <rect x="8"  y="13" width="8"  height="2"  fill="#333333"/>
  </symbol>

</svg>`;

  // ── Tablas de configuración ────────────────────────────────

  var TIERS = {
    10: { tier: 'gold',   sym: 'fc-gold'   },
    9:  { tier: 'purple', sym: 'fc-purple' },
    8:  { tier: 'purple', sym: 'fc-purple' },
    7:  { tier: 'green',  sym: 'fc-green'  },
    6:  { tier: 'green',  sym: 'fc-green'  },
    5:  { tier: 'blue',   sym: 'fc-blue'   },
    4:  { tier: 'red',    sym: 'fc-red'    },
    3:  { tier: 'red',    sym: 'fc-red'    },
    2:  { tier: 'red',    sym: 'fc-red'    },
    1:  { tier: 'red',    sym: 'fc-red'    }
  };

  var DEFAULT_VERDICTS = {
    10: 'Obra maestra. <strong>Intemporal.</strong>',
    9:  'Sobresaliente. <strong>Casi perfecto.</strong>',
    8:  'Muy bueno. <strong>Altamente recomendado.</strong>',
    7:  'Bueno. <strong>Vale la pena.</strong>',
    6:  'Notable. <strong>Con sus cosillas.</strong>',
    5:  'Pasable. <strong>Ni fu ni fa.</strong>',
    4:  'Flojo. <strong>Durete.</strong>',
    3:  'Flojo. <strong>Durete.</strong>',
    2:  'Muy flojo. <strong>Durete.</strong>',
    1:  'Penoso. <strong>Durete.</strong>'
  };

  // ── Inyectar SVG symbols una sola vez ──────────────────────

  function injectSymbols() {
    if (document.getElementById('fc-gold')) return;
    var div = document.createElement('div');
    div.innerHTML = SVG_SYMBOLS;
    document.body.insertBefore(div.firstElementChild, document.body.firstChild);
  }

  // ── Render principal ───────────────────────────────────────
  //
  // @param {string} containerId  — id del elemento donde renderizar
  // @param {number} score        — puntuación del 1 al 10
  // @param {string} [verdict]    — texto de veredicto (opcional, usa defaults si se omite)
  //
  // Ejemplo: renderFreakcoin('rating-box', 9, 'Casi perfecto.')

  window.renderFreakcoin = function (containerId, score, verdict) {
    injectSymbols();

    var container = document.getElementById(containerId);
    if (!container) {
      console.warn('[freakcoin] Contenedor no encontrado: #' + containerId);
      return;
    }

    score = Math.min(10, Math.max(1, parseInt(score, 10) || 1));

    var cfg        = TIERS[score];
    var verdictHtml = verdict
      ? verdict
      : (DEFAULT_VERDICTS[score] || '');

    // Construir monedas
    var coinsHtml = '';
    for (var i = 1; i <= 10; i++) {
      var sym = (i <= score) ? cfg.sym : 'fc-empty';
      coinsHtml += '<svg class="freakcoin-coin" aria-hidden="true">'
        + '<use href="#' + sym + '"/>'
        + '</svg>';
    }

    container.innerHTML =
      '<div class="freakcoin-box" data-fc-tier="' + cfg.tier + '">'
      + '<div class="freakcoin-title">&#x2B21; VALORACIÓN FREAKCOINS</div>'
      + '<div class="freakcoin-coins">' + coinsHtml + '</div>'
      + '<div class="freakcoin-divider"></div>'
      + '<div class="freakcoin-score-row">'
      +   '<span class="freakcoin-score">' + score + '</span>'
      +   '<span class="freakcoin-score-max">/ 10 FREAKCOINS</span>'
      + '</div>'
      + '<div class="freakcoin-verdict">' + verdictHtml + '</div>'
      + '</div>';
  };

})();
