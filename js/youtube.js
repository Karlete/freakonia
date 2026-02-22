// youtube.js — YouTube thumbnail fetcher (no API key needed)
// Uses public YouTube thumbnail URL pattern + oEmbed for titles

// Public thumbnail URL patterns (no API key required):
// maxresdefault: https://img.youtube.com/vi/{ID}/maxresdefault.jpg
// hqdefault:     https://img.youtube.com/vi/{ID}/hqdefault.jpg  (always exists)
// sddefault:     https://img.youtube.com/vi/{ID}/sddefault.jpg

/**
 * Build a YouTube video card element.
 * @param {Object} video - { id, title, description }
 * @returns {HTMLElement}
 */
function buildVideoCard({ id, title, description = '' }) {
  const url = `https://www.youtube.com/watch?v=${id}`;
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const maxThumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  const card = document.createElement('article');
  card.className = 'video-card reveal';
  card.innerHTML = `
    <a href="${url}" target="_blank" rel="noopener noreferrer" class="video-thumb-link">
      <div class="video-thumb-wrap">
        <img
          src="${maxThumb}"
          onerror="this.src='${thumb}'"
          alt="${title}"
          class="video-thumb"
          loading="lazy"
        />
        <div class="video-play-btn">▶</div>
      </div>
    </a>
    <div class="video-info">
      <h3 class="video-title">
        <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
      </h3>
      ${description ? `<p class="video-desc">${description}</p>` : ''}
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-small">
        ▶ WATCH
      </a>
    </div>
  `;
  return card;
}

/**
 * Render a list of video cards into a container element.
 * @param {string} containerId - The ID of the container element
 * @param {Array} videos - Array of { id, title, description } objects
 */
function renderVideoCards(containerId, videos) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  videos.forEach(video => container.appendChild(buildVideoCard(video)));
}

// ─── Video data — replace IDs with your real YouTube video IDs ────────────
// Example data structure (edit with real video IDs and titles):
const YOUTUBE_VIDEOS = [
  // { id: 'dQw4w9WgXcQ', title: 'Video Title Here', description: 'Short description.' },
];

// Auto-render if container exists on page load
document.addEventListener('DOMContentLoaded', () => {
  if (YOUTUBE_VIDEOS.length > 0) {
    renderVideoCards('youtube-grid', YOUTUBE_VIDEOS);
  }
});

window.renderVideoCards = renderVideoCards;
window.buildVideoCard = buildVideoCard;
window.YOUTUBE_VIDEOS = YOUTUBE_VIDEOS;
