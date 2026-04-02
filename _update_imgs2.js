const fs = require('fs');
let content = fs.readFileSync('D:/Dev/Freakonia/js/news-data.js', 'utf8');

const changes = [
  // HotD / GoT
  ['noticia-hotd-t3-fan-concerns-martin-2026',    'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-hotd-t3-reshoots-condal-2026',        'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-hotd-t3-casting-2026',                'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-hotd-t3-trailer-2026',                'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-hotd-s3-trailer-2026',                'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-martin-condal-abysmal-2026',          'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-akotsk-temporada-2-produccion-2026',  'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  ['noticia-akotsk-temporada-2-confirmada-2026',  'https://img.youtube.com/vi/i6w7O1kwuBk/hqdefault.jpg'],
  // Esports / LoL
  ['noticia-first-stand-final-blg-campeon-2026',  'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-first-stand-2026-semifinales',        'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-first-stand-2026-grupos',             'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-first-stand-2026-dia1',               'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-lec-spring-2026-semana1',             'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-lec-spring-2026-formato',             'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-lpl-tes-naiyou-amano-2026',           'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  ['noticia-lyon-lcs-lockin-2026',                'https://img.youtube.com/vi/QdBZExpgErs/hqdefault.jpg'],
  // NBA
  ['noticia-nba-finde-march-28-29-2026',          'https://img.youtube.com/vi/xjMqZoXZhEA/hqdefault.jpg'],
  ['noticia-nba-durant-jordan-record-lebron-2026','https://img.youtube.com/vi/xjMqZoXZhEA/hqdefault.jpg'],
  ['noticia-nba-playoffs-race-shai-record-2026',  'https://img.youtube.com/vi/xjMqZoXZhEA/hqdefault.jpg'],
  ['noticia-spurs-racha-2026',                    'https://img.youtube.com/vi/xjMqZoXZhEA/hqdefault.jpg'],
  // D&D / Rol
  ['noticia-dnd-2026-roadmap-ravenloft',          'https://img.youtube.com/vi/B9BJOsHuqFQ/hqdefault.jpg'],
  ['noticia-dnd-ravenloft-horrors-within-2026',   'https://img.youtube.com/vi/B9BJOsHuqFQ/hqdefault.jpg'],
  // Nintendo / Unity
  ['noticia-nintendo-demanda-aranceles-2026',     'https://img.youtube.com/vi/GsR5nLMjGSM/hqdefault.jpg'],
  ['noticia-unity-ia-gdc-2026',                   'https://img.youtube.com/vi/GsR5nLMjGSM/hqdefault.jpg'],
];

let updated = 0, notFound = 0;

for (const [articleId, newImg] of changes) {
  const idIdx = content.indexOf(articleId);
  if (idIdx === -1) {
    console.log('NOT FOUND: ' + articleId);
    notFound++;
    continue;
  }

  // Find the closing brace of this article (next '\n  }' after the id)
  const articleEnd = content.indexOf('\n  }', idIdx) + 6;
  const articleSlice = content.slice(idIdx, articleEnd);

  // Match img field with any non-empty or empty value, preserving quote style
  const imgMatch = /(\s+img:\s*)(["'])(.*?)\2,/.exec(articleSlice);
  if (!imgMatch) {
    console.log('IMG NOT FOUND: ' + articleId);
    notFound++;
    continue;
  }

  const quote = imgMatch[2];
  const oldStr = imgMatch[0];
  const newStr = imgMatch[1] + quote + newImg + quote + ',';

  const newSlice = articleSlice.replace(oldStr, newStr);
  content = content.slice(0, idIdx) + newSlice + content.slice(articleEnd);

  console.log('UPDATED: ' + articleId + '\n  ' + imgMatch[3].slice(0, 50) + ' → ' + newImg.slice(0, 50));
  updated++;
}

console.log('\nTotal updated: ' + updated + ', not found: ' + notFound);
fs.writeFileSync('D:/Dev/Freakonia/js/news-data.js', content, 'utf8');
console.log('File written.');
