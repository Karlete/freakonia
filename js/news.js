// ============================================
// news.js — Search, filter and read more
// Freakonia
// ============================================

(function () {

  const searchInput = document.getElementById('newsSearch');
  const filterBtns  = document.querySelectorAll('.news-filter-btn');
  const newsCards   = document.querySelectorAll('.news-card');
  const noResults   = document.getElementById('newsNoResults');
  const newsCount   = document.getElementById('newsCount');

  let currentFilter = 'all';
  let currentSearch = '';

  // Update visible count
  function updateCount() {
    const visible = document.querySelectorAll('.news-card:not(.news-hidden)').length;
    if (newsCount) newsCount.textContent = visible;
  }

  // Filter + search logic
  function applyFilters() {
    let anyVisible = false;

    newsCards.forEach(card => {
      const category = card.dataset.category || '';
      const title    = card.dataset.title    || '';
      const bodyEl   = card.querySelector('.news-card-body');
      const bodyText = bodyEl ? bodyEl.textContent.toLowerCase() : '';

      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = currentSearch === '' ||
                            title.includes(currentSearch) ||
                            bodyText.includes(currentSearch);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('news-hidden');
        anyVisible = true;
      } else {
        card.classList.add('news-hidden');
      }
    });

    if (noResults) {
      noResults.style.display = anyVisible ? 'none' : 'block';
    }
    updateCount();
  }

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Read more toggle
  document.querySelectorAll('.news-read-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const card        = btn.closest('.news-card');
      const fullContent = card.querySelector('.news-card-full');
      const expanded    = btn.dataset.expanded === 'true';

      if (expanded) {
        fullContent.style.display = 'none';
        btn.textContent        = '▶ LEER MÁS';
        btn.dataset.expanded   = 'false';
      } else {
        fullContent.style.display = 'block';
        btn.textContent        = '▼ LEER MENOS';
        btn.dataset.expanded   = 'true';
      }
    });
  });

  updateCount();

})();
