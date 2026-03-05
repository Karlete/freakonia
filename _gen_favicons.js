// Freakonia favicon generator — Node.js, no external deps
'use strict';
const zlib = require('zlib');
const fs   = require('fs');

// ── CRC32 ────────────────────────────────────────────────────────────────
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

// ── PNG writer ───────────────────────────────────────────────────────────
function chunk(type, data) {
  const tb  = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([tb, data])), 0);
  return Buffer.concat([len, tb, data, crc]);
}

function makePNG(w, h, getPixel) {
  const sig = Buffer.from([137,80,78,71,13,10,26,10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0); ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8; ihdrData[9] = 2; // 8-bit RGB

  const raw = Buffer.alloc(h * (1 + w * 3));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + w * 3)] = 0; // filter: None
    for (let x = 0; x < w; x++) {
      const [r, g, b] = getPixel(x, y, w, h);
      const o = y * (1 + w * 3) + 1 + x * 3;
      raw[o] = r; raw[o+1] = g; raw[o+2] = b;
    }
  }

  return Buffer.concat([
    sig,
    chunk('IHDR', ihdrData),
    chunk('IDAT', zlib.deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// ── Pixel-art "F" bitmap (16×16 reference grid) ──────────────────────────
const F_MAP = [
  '0000000000000000',
  '0000000000000000',
  '0011111111000000',
  '0011111111000000',
  '0011100000000000',
  '0011100000000000',
  '0011111100000000',
  '0011111100000000',
  '0011100000000000',
  '0011100000000000',
  '0011100000000000',
  '0011100000000000',
  '0000000000000000',
  '0000000000000000',
  '0000000000000000',
  '0000000000000000',
];
const GRID = 16;

// Matrix green / near-black
const GREEN = [0, 255, 65];
const BLACK = [10, 10, 10];

function getPixel(x, y, w, h) {
  const gx = Math.floor((x / w) * GRID);
  const gy = Math.floor((y / h) * GRID);
  if (gy >= 0 && gy < GRID && gx >= 0 && gx < GRID && F_MAP[gy][gx] === '1')
    return GREEN;
  return BLACK;
}

// ── ICO container (embeds PNG) ────────────────────────────────────────────
function makeICO(pngData, size) {
  const header = Buffer.alloc(6);
  header[2] = 1; header[4] = 1; // type=icon, count=1

  const dir = Buffer.alloc(16);
  dir[0] = size === 256 ? 0 : size;
  dir[1] = size === 256 ? 0 : size;
  dir[6] = 32; dir[7] = 0;
  dir.writeUInt32LE(pngData.length, 8);
  dir.writeUInt32LE(22, 12); // offset = 6 + 16

  return Buffer.concat([header, dir, pngData]);
}

// ── Generate files ────────────────────────────────────────────────────────
fs.mkdirSync('assets/icons', { recursive: true });

const specs = [
  { size: 16,  path: 'assets/icons/favicon-16x16.png' },
  { size: 32,  path: 'assets/icons/favicon-32x32.png' },
  { size: 180, path: 'assets/icons/apple-touch-icon.png' },
  { size: 192, path: 'assets/icons/favicon-192x192.png' },
  { size: 512, path: 'assets/icons/favicon-512x512.png' },
];

for (const { size, path } of specs) {
  const png = makePNG(size, size, getPixel);
  fs.writeFileSync(path, png);
  console.log(`✔ ${path} (${size}×${size})`);
}

const png32 = makePNG(32, 32, getPixel);
fs.writeFileSync('favicon.ico', makeICO(png32, 32));
console.log('✔ favicon.ico (32×32, PNG-in-ICO)');
console.log('Done!');
