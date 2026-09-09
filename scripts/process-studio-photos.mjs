/**
 * Spracuje štúdiové fotky do webových variantov pre Lavande.
 * node scripts/process-studio-photos.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS =
  "/Users/davidmikulas/.cursor/projects/Users-davidmikulas-Desktop-lavande/assets";
const OUT = "public/images/lavande";

/** @param {string} src @param {{ width: number, height: number, position?: string }} crop */
async function cropCover(src, { width, height, position = "centre" }) {
  return sharp(src)
    .rotate()
    .resize(width, height, {
      fit: "cover",
      position,
    })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
}

async function writeFile(name, buffer) {
  const dest = path.join(OUT, name);
  await sharp(buffer).toFile(dest);
  const { stat } = await import("node:fs/promises");
  const { size } = await stat(dest);
  const meta = await sharp(dest).metadata();
  console.log(`✓ ${name} (${meta.width}×${meta.height}, ${Math.round(size / 1024)} KB)`);
}

const src = (file) => path.join(ASSETS, file);

/** Mapovanie zdroj → výstupy s cropom podľa sekcie */
const jobs = [
  // Lekcie — landscape 4:3
  {
    out: "lesson-beginner.jpg",
    from: "IMG_4971-25ce2cc2-a7e7-4af9-ab60-2a598b4e81b8.jpg",
    w: 960,
    h: 720,
    pos: "centre",
  },
  {
    out: "lesson-intermediate.jpg",
    from: "IMG_4942-662a469e-674a-4938-bdbd-57187f578c5b.jpg",
    w: 960,
    h: 720,
    pos: "right",
  },
  {
    out: "lesson-advanced.jpg",
    from: "IMG_4946-cc0cf15d-cda3-4f24-b97a-493246d45fac.jpg",
    w: 960,
    h: 720,
    pos: "left",
  },
  {
    out: "lesson-individual.jpg",
    from: "IMG_4943-aac789c4-29dd-4038-9ae8-bac42b9729ae.jpg",
    w: 960,
    h: 720,
    pos: "centre",
  },

  // Prečo Lavande — portrait 4:5
  {
    out: "benefit-individual.jpg",
    from: "IMG_4968-514ae370-2119-407e-aa31-acf117e88a42.jpg",
    w: 640,
    h: 800,
    pos: "top",
  },
  {
    out: "benefit-groups.jpg",
    from: "IMG_4966-502ea10a-2eb5-4daf-864b-497cfb5c754b.jpg",
    w: 640,
    h: 800,
    pos: "centre",
  },
  {
    out: "benefit-strength.jpg",
    from: "IMG_4944-77250181-c07b-4883-a5f8-688c20a6f511.jpg",
    w: 640,
    h: 800,
    pos: "centre",
  },
  {
    out: "benefit-environment.jpg",
    from: "IMG_4964-4844ca32-2c4e-4fdc-9c71-20d7ad7bcf9a.jpg",
    w: 640,
    h: 800,
    pos: "top",
  },

  // O štúdiu — portrait
  {
    out: "about-main.jpg",
    from: "IMG_4965-cfd35805-f55f-461a-926f-1785351cce16.jpg",
    w: 900,
    h: 1125,
    pos: "centre",
  },
  {
    out: "about-avatar.jpg",
    from: "IMG_4971-25ce2cc2-a7e7-4af9-ab60-2a598b4e81b8.jpg",
    w: 160,
    h: 160,
    pos: "right",
  },

  // Lektorka
  {
    out: "instructor-alexandra.jpg",
    from: "IMG_4942-662a469e-674a-4938-bdbd-57187f578c5b.jpg",
    w: 900,
    h: 1125,
    pos: "left",
  },

  // Referencie — štvorce
  {
    out: "testimonial-1.jpg",
    from: "IMG_4971-25ce2cc2-a7e7-4af9-ab60-2a598b4e81b8.jpg",
    w: 128,
    h: 128,
    pos: "centre",
  },
  {
    out: "testimonial-2.jpg",
    from: "IMG_4968-514ae370-2119-407e-aa31-acf117e88a42.jpg",
    w: 128,
    h: 128,
    pos: "top",
  },
  {
    out: "testimonial-3.jpg",
    from: "IMG_4946-cc0cf15d-cda3-4f24-b97a-493246d45fac.jpg",
    w: 128,
    h: 128,
    pos: "centre",
  },
];

await mkdir(OUT, { recursive: true });

for (const job of jobs) {
  const buffer = await cropCover(src(job.from), {
    width: job.w,
    height: job.h,
    position: job.pos,
  });
  await writeFile(job.out, buffer);
}

console.log("\nDone —", jobs.length, "images");
