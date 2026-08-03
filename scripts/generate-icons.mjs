/**
 * Vygeneruje odľahčené ikony a zmenšený zdroj loga z originálov v public/brand.
 * Púšťa sa ručne po zmene loga: node scripts/generate-icons.mjs
 */
import { Buffer } from "node:buffer";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const MARK = "public/brand/lavande-studio-logo.png";
const WORDMARK = "public/brand/lavande-studio-logo-nav.png";

/** Zabalí PNG do ICO kontajnera (PNG-in-ICO podporujú všetky moderné prehliadače). */
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);

  let offset = 6 + pngs.length * 16;
  const entries = [];
  for (const { size, data } of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += data.length;
  }

  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const icoSizes = [16, 32, 48];
const icoPngs = [];
for (const size of icoSizes) {
  icoPngs.push({
    size,
    data: await sharp(MARK)
      .resize(size, size, { fit: "contain", background: "#ffffff" })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer(),
  });
}
await writeFile("public/favicon.ico", buildIco(icoPngs));

// Apple touch icon musí byť nepriehľadný a presne 180x180.
await sharp(MARK)
  .resize(180, 180, { fit: "contain", background: "#ffffff" })
  .flatten({ background: "#ffffff" })
  .png({ palette: true, colours: 128, compressionLevel: 9, effort: 10 })
  .toFile("src/app/apple-icon.png");

// Wordmark stačí v 2x veľkosti najväčšieho zobrazenia (56 px výška v pätičke).
// Paletové PNG je pri dvojfarebnom texte s alfou výrazne menšie než AVIF,
// preto sa tento súbor servíruje priamo bez optimalizácie cez next/image.
await sharp(WORDMARK)
  .resize({ height: 130, withoutEnlargement: true })
  .png({ palette: true, colours: 32, compressionLevel: 9, effort: 10 })
  .toFile("public/brand/lavande-studio-logo-nav-small.png");

const report = await Promise.all(
  [
    "public/favicon.ico",
    "src/app/apple-icon.png",
    "public/brand/lavande-studio-logo-nav-small.png",
  ].map(async (path) => {
    const { size } = await import("node:fs").then((fs) => fs.statSync(path));
    return `${path}: ${(size / 1024).toFixed(1)} KB`;
  })
);
console.log(report.join("\n"));
