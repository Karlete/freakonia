/* analytics.js — Analítica sin cookies (GoatCounter)
 *
 * GoatCounter no usa cookies ni guarda la IP, así que la web no necesita banner.
 * Interruptor único: rellena GOATCOUNTER_CODE con el código del sitio
 * (p. ej. 'freakonia' para https://freakonia.goatcounter.com). Vacío = no se carga nada.
 *
 * Para contar clics en un botón: añade data-goatcounter-click="nombre-del-evento".
 */
(function () {
  var GOATCOUNTER_CODE = ''; // ← PENDIENTE: código del sitio en GoatCounter

  if (!GOATCOUNTER_CODE) return;
  // Solo en producción: las pruebas en local no cuentan
  if (!/(^|\.)freakonia\.com$/.test(location.hostname)) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
