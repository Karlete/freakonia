// article-page.js — Dynamic enhancements for static article pages
(function () {
  if (typeof ARTICLES_INDEX === 'undefined') return;

  var path = window.location.pathname;
  var id   = path.split('/').pop().replace('.html', '');
  var idx  = ARTICLES_INDEX.findIndex(function (a) { return a.id === id; });
  if (idx === -1) return;

  var current = ARTICLES_INDEX[idx];
  var accent  = current.accent || '#00ff41';

  /* Set accent CSS variable globally for this article */
  document.documentElement.style.setProperty('--article-accent', accent);

  document.addEventListener('DOMContentLoaded', function () {
    var article = document.querySelector('main article');
    if (!article) return;

    /* ── Style paragraphs ───────────────────────────────── */
    article.querySelectorAll('div > p').forEach(function (p) {
      p.classList.add('article-paragraph');
    });

    /* ── Prev / Next navigation ─────────────────────────── */
    var prev = idx < ARTICLES_INDEX.length - 1 ? ARTICLES_INDEX[idx + 1] : null;
    var next = idx > 0                          ? ARTICLES_INDEX[idx - 1] : null;

    var navHtml = '<nav class="article-nav" aria-label="Navegación entre artículos">';
    if (prev) {
      navHtml += '<a href="' + prev.id + '.html" class="article-nav-btn article-nav-prev">'
        + '<span class="article-nav-label" style="color:' + (prev.accent||accent) + '">◀ ANTERIOR</span>'
        + (prev.img ? '<img src="../' + prev.img + '" alt="' + prev.title + '" class="article-nav-thumb">' : '')
        + '<span class="article-nav-title">' + prev.title + '</span>'
        + '</a>';
    } else { navHtml += '<div></div>'; }

    if (next) {
      navHtml += '<a href="' + next.id + '.html" class="article-nav-btn article-nav-next">'
        + '<span class="article-nav-label" style="color:' + (next.accent||accent) + '">SIGUIENTE ▶</span>'
        + (next.img ? '<img src="../' + next.img + '" alt="' + next.title + '" class="article-nav-thumb">' : '')
        + '<span class="article-nav-title">' + next.title + '</span>'
        + '</a>';
    }
    navHtml += '</nav>';
    article.insertAdjacentHTML('afterend', navHtml);

    /* ── Sidebar: últimas noticias ──────────────────────── */
    var recent = ARTICLES_INDEX
      .filter(function (a) { return a.id !== id; })
      .slice(0, 4);

    var sidebarHtml = '<aside class="article-sidebar">'
      + '<div class="article-sidebar-header">// ÚLTIMAS NOTICIAS</div>';

    recent.forEach(function (a) {
      sidebarHtml += '<a href="' + a.id + '.html" class="article-sidebar-card" style="--card-accent:' + (a.accent||'#00ff41') + '">'
        + '<div class="article-sidebar-img"><img src="../' + a.img + '" alt="' + a.title + '" loading="lazy" onerror="this.style.display=\'none\'"></div>'
        + '<div class="article-sidebar-body">'
        + '<span class="article-sidebar-badge">' + a.emoji + ' ' + a.badgeLabel + '</span>'
        + '<span class="article-sidebar-title">' + a.title + '</span>'
        + '</div></a>';
    });
    sidebarHtml += '</aside>';

    /* Wrap main container + sidebar in a layout grid */
    var container = article.closest('.container');
    if (container) {
      var layout = document.createElement('div');
      layout.className = 'article-layout';
      container.parentNode.insertBefore(layout, container);
      layout.appendChild(container);
      layout.insertAdjacentHTML('beforeend', sidebarHtml);
    }
  });
}());
