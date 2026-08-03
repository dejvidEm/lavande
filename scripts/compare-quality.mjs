/**
 * Porovná pôvodné zdrojové obrázky s tým, čo sa reálne posiela prehliadaču.
 * Počíta PSNR (nad 40 dB je rozdiel voľným okom nerozoznateľný)
 * a vygeneruje vizuálne porovnanie vedľa seba do scripts/out/.
 * Spustenie: node scripts/compare-quality.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const BASE = process.env.AUDIT_BASE ?? "http://127.0.0.1:4324";
const OUT = "scripts/out";
await mkdir(OUT, { recursive: true });

const ACCEPT = "image/avif,image/webp,image/*,*/*;q=0.8";

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { accept: ACCEPT } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

/** Peak signal-to-noise ratio medzi dvoma obrázkami rovnakých rozmerov. */
async function psnr(bufA, bufB, width) {
  const toRaw = (buf) =>
    sharp(buf)
      .resize({ width, fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer();

  const [a, b] = await Promise.all([toRaw(bufA), toRaw(bufB)]);
  const length = Math.min(a.length, b.length);

  let sum = 0;
  for (let i = 0; i < length; i += 1) {
    const diff = a[i] - b[i];
    sum += diff * diff;
  }
  const mse = sum / length;
  return mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse);
}

const cases = [
  {
    name: "hero",
    label: "Hero fotka",
    original: "public/images/lavande/hero-background.jpg",
    served: `${BASE}/_next/image?url=%2Fimages%2Flavande%2Fhero-background.jpg&w=1080&q=90`,
    compareWidth: 1024,
  },
  {
    name: "benefit-studio",
    label: "Karta Prečo Lavande (studio.png)",
    original: "public/images/lavande/studio.png",
    served: `${BASE}/_next/image?url=%2Fimages%2Flavande%2Fstudio.png&w=828&q=65`,
    compareWidth: 687,
  },
  {
    name: "about",
    label: "O štúdiu (reformer-pilates.png)",
    original: "public/images/lavande/reformer-pilates.png",
    served: `${BASE}/_next/image?url=%2Fimages%2Flavande%2Freformer-pilates.png&w=1080&q=75`,
    compareWidth: 769,
  },
  {
    name: "logo",
    label: "Logo v navigácii",
    original: "public/brand/lavande-studio-logo-nav.png",
    served: `${BASE}/brand/lavande-studio-logo-nav-small.png`,
    // Logo sa zobrazuje vysoké 56 px, teda 112 px na retine → šírka ~277 px.
    compareWidth: 277,
  },
];

console.log("obrázok".padEnd(34) + "PSNR       verdikt");

for (const item of cases) {
  const originalBuf = await sharp(item.original).toBuffer();
  const servedBuf = await fetchBuffer(item.served);

  const value = await psnr(originalBuf, servedBuf, item.compareWidth);
  const verdict =
    value === Infinity || value >= 40
      ? "nerozoznateľné"
      : value >= 34
        ? "rozdiel len pri priblížení"
        : "VIDITEĽNÉ ZHORŠENIE";

  console.log(
    item.label.padEnd(34) +
      `${value === Infinity ? "∞" : value.toFixed(1)} dB`.padEnd(11) +
      verdict
  );

  // Vizuálne porovnanie vedľa seba, obe verzie v rovnakej mierke.
  const height = Math.round(
    (await sharp(originalBuf).metadata()).height *
      (item.compareWidth / (await sharp(originalBuf).metadata()).width)
  );
  const prep = (buf) =>
    sharp(buf)
      .resize(item.compareWidth, height, { fit: "fill" })
      .flatten({ background: "#ffffff" })
      .png()
      .toBuffer();

  const [left, right] = await Promise.all([
    prep(originalBuf),
    prep(servedBuf),
  ]);

  await sharp({
    create: {
      width: item.compareWidth * 2 + 12,
      height,
      channels: 3,
      background: "#ff0090",
    },
  })
    .composite([
      { input: left, left: 0, top: 0 },
      { input: right, left: item.compareWidth + 12, top: 0 },
    ])
    .png()
    .toFile(`${OUT}/${item.name}-porovnanie.png`);
}

await writeFile(
  `${OUT}/README.txt`,
  "Vľavo pôvodný zdroj, vpravo to, čo sa reálne posiela prehliadaču.\n" +
    "Súbory sú len na kontrolu, do buildu nevstupujú.\n"
);

console.log(`\nPorovnania vedľa seba: ${OUT}/`);
