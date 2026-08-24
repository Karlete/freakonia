/* cookie-consent.js — Banner de cookies (pixel style) */
(function () {
  var STORAGE_KEY = 'freakonia_cookie_consent';

  if (localStorage.getItem(STORAGE_KEY)) return;

  function buildBanner() {
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');

    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
        '<div class="cookie-banner-text">' +
          '<div class="cookie-banner-title">🍪 ESTA WEB USA COOKIES</div>' +
          '<p>Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia en Freakonia. Puedes aceptarlas o rechazarlas cuando quieras.</p>' +
        '</div>' +
        '<div class="cookie-banner-actions">' +
          '<button type="button" class="btn" id="cookie-accept">&gt;&gt; ACEPTAR</button>' +
          '<button type="button" class="btn btn-pink" id="cookie-reject">&gt;&gt; RECHAZAR</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function () {
      setConsent('accepted');
    });
    document.getElementById('cookie-reject').addEventListener('click', function () {
      setConsent('rejected');
    });
  }

  function setConsent(value) {
    localStorage.setItem(STORAGE_KEY, value);
    var banner = document.querySelector('.cookie-banner');
    if (banner) banner.remove();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildBanner);
  } else {
    buildBanner();
  }
})();
