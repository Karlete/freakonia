// youtube.js — Video cards with inline embed toggle for @sanprieto channel
// No API key required. Thumbnails via public YouTube CDN.

// ─── Data ────────────────────────────────────────────────────────────────────
// type: 'short' = vertical 9:16 embed | 'video' = horizontal 16:9 embed
const SANPRIETO_VIDEOS = [
  {
    id: "hZQMq7Zg5dg",
    title: "FINAL FANTASY VII — TRÁILER",
    description:
      "Primer vistazo al gameplay completo de Final Fantasy VII con mods gráficos y retraducción. Lo que viene va a ser épico.",
    type: "short",
  },
];

// ─── Toggle embed (open/close inline) ────────────────────────────────────────
function toggleVideoEmbed(btn) {
  const videoId = btn.dataset.videoId;
  const embed = document.getElementById("video-embed-" + videoId);
  if (!embed) return;

  const isOpen = embed.style.display !== "none";

  // Close all open video embeds first
  document.querySelectorAll(".video-embed-container").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelectorAll(".play-video-btn").forEach((b) => {
    b.textContent = "▶ REPRODUCIR AQUÍ";
  });

  if (!isOpen) {
    embed.style.display = "block";
    btn.textContent = "✕ CERRAR";
    embed.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// ─── Build a single video card ────────────────────────────────────────────────
function buildVideoCard(video) {
  const { id, title, description, type } = video;
  const ytUrl = "https://www.youtube.com/watch?v=" + id;
  const embedUrl = "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0";
  const thumb = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
  const maxThumb = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
  const isShort = type === "short";
  const label = isShort ? "▶ SHORT" : "▶ VÍDEO";

  const article = document.createElement("article");
  article.className = "video-card";
  article.id = "video-" + id;

  article.innerHTML =
    '<div class="video-type-badge">' +
    label +
    "</div>" +
    '<div class="video-thumb-wrap">' +
    '<img src="' +
    maxThumb +
    '" onerror="this.src=\'' +
    thumb +
    "'\" " +
    'alt="' +
    title +
    '" class="video-thumb" loading="lazy" />' +
    '<div class="video-thumb-overlay">▶</div>' +
    "</div>" +
    '<div class="video-info">' +
    '<h3 class="video-title">' +
    title +
    "</h3>" +
    (description ? '<p class="video-desc">' + description + "</p>" : "") +
    '<div class="video-btns">' +
    '<a href="' +
    ytUrl +
    '" target="_blank" rel="noopener noreferrer" ' +
    'class="btn btn-small btn-pink">▶ VER EN YOUTUBE</a>' +
    (!isShort
      ? '<button class="btn btn-small play-video-btn" ' +
          'data-video-id="' + id + '" ' +
          'onclick="toggleVideoEmbed(this)">▶ REPRODUCIR AQUÍ</button>'
      : '') +
    "</div>" +
    "</div>" +
    '<div class="video-embed-container ' +
    (isShort ? "is-short" : "") +
    '" ' +
    'id="video-embed-' +
    id +
    '" style="display:none;">' +
    '<div class="video-embed-header">' +
    '<span class="video-embed-title">▶ ' +
    title +
    "</span>" +
    '<button class="video-embed-close" ' +
    "onclick=\"toggleVideoEmbed(document.querySelector('[data-video-id=\\'" +
    id +
    "\\']'))\">✕ CERRAR</button>" +
    "</div>" +
    '<div class="video-embed-frame-wrap ' +
    (isShort ? "short-frame" : "") +
    '">' +
    '<iframe src="' +
    embedUrl +
    '" ' +
    'allow="autoplay; fullscreen" allowfullscreen ' +
    'frameborder="0" class="video-embed-iframe" ' +
    'title="' +
    title +
    '"></iframe>' +
    "</div>" +
    "</div>";

  return article;
}

// ─── Render all cards into container ─────────────────────────────────────────
function renderVideoCards() {
  const container = document.getElementById("sanprieto-videos-grid");
  if (!container) return;
  container.innerHTML = "";
  SANPRIETO_VIDEOS.forEach((v) => container.appendChild(buildVideoCard(v)));
}

document.addEventListener("DOMContentLoaded", renderVideoCards);

window.toggleVideoEmbed = toggleVideoEmbed;
window.SANPRIETO_VIDEOS = SANPRIETO_VIDEOS;
