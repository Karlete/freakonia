// twitter.js — Twitter/X embed helper

// Twitter/X official embed script (loaded on demand)
// Replace TWITTER_HANDLE with the actual handle (without @)

const TWITTER_HANDLE = 'YOUR_HANDLE_HERE';

/**
 * Load the Twitter widget script and render a timeline embed.
 * Call this after the placeholder element exists in the DOM.
 * @param {string} containerId - ID of the div to embed into
 * @param {Object} options - { theme, height, lang, dnt }
 */
function renderTwitterTimeline(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const {
    theme = 'dark',
    height = 600,
    lang = 'en',
    dnt = true,
  } = options;

  // Build the anchor tag Twitter widgets.js expects
  const anchor = document.createElement('a');
  anchor.className = 'twitter-timeline';
  anchor.setAttribute('data-theme', theme);
  anchor.setAttribute('data-height', height);
  anchor.setAttribute('data-lang', lang);
  anchor.setAttribute('data-dnt', dnt);
  anchor.setAttribute('data-chrome', 'nofooter noheader transparent');
  anchor.href = `https://twitter.com/${TWITTER_HANDLE}`;
  anchor.textContent = `Tweets by @${TWITTER_HANDLE}`;
  container.innerHTML = '';
  container.appendChild(anchor);

  // Load Twitter widget script if not already loaded
  if (!window.twttr) {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  } else if (window.twttr.widgets) {
    window.twttr.widgets.load(container);
  }
}

/**
 * Build a manual tweet card (fallback when embeds are blocked).
 * @param {Object} tweet - { handle, displayName, date, text, url, avatar }
 * @returns {HTMLElement}
 */
function buildTweetCard({ handle, displayName, date, text, url = '#', avatar = '' }) {
  const card = document.createElement('article');
  card.className = 'tweet-card reveal';
  card.innerHTML = `
    <div class="tweet-header">
      ${avatar ? `<img src="${avatar}" alt="${displayName}" class="tweet-avatar" />` : '<div class="tweet-avatar-placeholder">👤</div>'}
      <div class="tweet-user">
        <span class="tweet-display-name">${displayName}</span>
        <span class="tweet-handle">@${handle}</span>
      </div>
      <span class="tweet-x-logo">𝕏</span>
    </div>
    <p class="tweet-text">${text}</p>
    <div class="tweet-footer">
      <span class="tweet-date">${date}</span>
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-small">
        VIEW
      </a>
    </div>
  `;
  return card;
}

// Auto-init timeline if placeholder exists
document.addEventListener('DOMContentLoaded', () => {
  const timelineContainer = document.getElementById('twitter-timeline');
  if (timelineContainer) {
    renderTwitterTimeline('twitter-timeline');
  }
});

window.renderTwitterTimeline = renderTwitterTimeline;
window.buildTweetCard = buildTweetCard;
window.TWITTER_HANDLE = TWITTER_HANDLE;
