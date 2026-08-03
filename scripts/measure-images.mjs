/**
 * Zmeria, koľko bajtov obrázkov sa reálne prenesie pri načítaní stránky.
 * Simuluje výber z srcSet tak, ako ho robí prehliadač pri danom viewporte a DPR.
 * Spustenie: node scripts/measure-images.mjs
 */
const BASE = process.env.AUDIT_BASE ?? "http://127.0.0.1:4322";

const pages = ["/", "/lekcie/reformer-zaciatocnici", "/obchodne-podmienky"];
const devices = [
  { name: "mobil  390px @3x", viewport: 390, dpr: 3 },
  { name: "desktop 1440px @2x", viewport: 1440, dpr: 2 },
];
const ACCEPT = "image/avif,image/webp,image/apng,image/*,*/*;q=0.8";

const cache = new Map();
async function byteLength(url) {
  if (!cache.has(url)) {
    const res = await fetch(BASE + url, { headers: { accept: ACCEPT } });
    const buf = await res.arrayBuffer();
    cache.set(url, {
      bytes: buf.byteLength,
      type: (res.headers.get("content-type") ?? "?").replace("image/", ""),
    });
  }
  return cache.get(url);
}

/** Vyhodnotí atribút sizes a vráti šírku v CSS pixeloch. */
function resolveSizes(sizes, viewport) {
  if (!sizes) return viewport;

  for (const candidate of sizes.split(",").map((s) => s.trim())) {
    const media = candidate.match(/^\((.+?)\)\s+(.+)$/);
    const value = media ? media[2] : candidate;
    if (media) {
      const max = media[1].match(/max-width:\s*(\d+)px/);
      const min = media[1].match(/min-width:\s*(\d+)px/);
      if (max && viewport > Number(max[1])) continue;
      if (min && viewport < Number(min[1])) continue;
    }
    const vw = value.match(/([\d.]+)vw/);
    if (vw) return (Number(vw[1]) / 100) * viewport;
    const px = value.match(/([\d.]+)px/);
    if (px) return Number(px[1]);
  }
  return viewport;
}

/** Vyberie z srcSet URL podľa potrebnej šírky a DPR. */
function pickFromSrcSet(srcset, neededWidth, dpr) {
  const entries = srcset.split(",").map((part) => {
    const [url, descriptor = "1x"] = part.trim().split(/\s+/);
    const density = descriptor.endsWith("w")
      ? parseFloat(descriptor) / neededWidth
      : parseFloat(descriptor);
    return { url, density };
  });
  entries.sort((a, b) => a.density - b.density);
  return (entries.find((entry) => entry.density >= dpr) ?? entries.at(-1)).url;
}

const grandTotal = {};

for (const page of pages) {
  const html = await (await fetch(BASE + page)).text();
  console.log(`\n===== ${page} =====`);

  for (const device of devices) {
    const requests = new Map();

    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
      const unescape = (v) => v?.replaceAll("&amp;", "&");
      const srcset = unescape(tag.match(/srcSet="([^"]+)"/i)?.[1]);
      const src = unescape(tag.match(/\ssrc="([^"]+)"/)?.[1]);
      const sizes = tag.match(/\ssizes="([^"]+)"/)?.[1];
      const alt = (tag.match(/\salt="([^"]*)"/)?.[1] ?? "(dekoratívny)").slice(0, 32);

      const needed = resolveSizes(sizes, device.viewport) * device.dpr;
      const url = srcset
        ? pickFromSrcSet(srcset, resolveSizes(sizes, device.viewport), device.dpr)
        : src;
      if (url) requests.set(url, { url, alt, needed });
    }

    // Ikony, ktoré prehliadač sťahuje mimo <img>.
    for (const icon of html.matchAll(/<link rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g)) {
      requests.set(icon[1], { url: icon[1], alt: "(favicon)", needed: 0 });
    }

    let total = 0;
    const rows = [];
    for (const { url, alt } of requests.values()) {
      const { bytes, type } = await byteLength(url);
      total += bytes;
      rows.push({ kb: bytes / 1024, type, alt, w: url.match(/[?&]w=(\d+)/)?.[1] ?? "-" });
    }

    console.log(`  ${device.name}  →  ${Math.round(total / 1024)} KB`);
    for (const row of rows.sort((a, b) => b.kb - a.kb).slice(0, 4)) {
      console.log(
        `      ${row.kb.toFixed(1).padStart(6)} KB  w=${String(row.w).padStart(4)}  ${row.type.padEnd(4)}  ${row.alt}`
      );
    }
    grandTotal[device.name] = (grandTotal[device.name] ?? 0) + total;
  }
}

console.log("\n===== SPOLU (všetky stránky) =====");
for (const [name, bytes] of Object.entries(grandTotal)) {
  console.log(`  ${name}: ${Math.round(bytes / 1024)} KB`);
}
