/**
 * Pre-launch audit: prejde všetky stránky, overí odkazy, kotvy, obrázky,
 * hierarchiu nadpisov a JSON-LD. Spustenie: node scripts/audit.mjs
 */
const BASE = process.env.AUDIT_BASE ?? "http://127.0.0.1:4321";

// Zoznam stránok sa berie zo sitemap.xml, aby sa audit nikdy nerozišiel s webom.
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname
);

const problems = [];
const note = (page, msg) => problems.push(`${page} — ${msg}`);

const docs = new Map();
for (const page of pages) {
  const res = await fetch(BASE + page);
  if (!res.ok) note(page, `HTTP ${res.status}`);
  docs.set(page, await res.text());
}

const anchorsByPage = new Map();
for (const [page, html] of docs) {
  anchorsByPage.set(
    page,
    new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  );
}

const checkedExternals = new Set();

for (const [page, html] of docs) {
  // --- odkazy ---
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>/g)) {
    const tag = m[0];
    const href = m[1];

    if (!href.trim() || href === "#") {
      note(page, `mŕtvy odkaz href="${href}"`);
      continue;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;

    if (href.startsWith("http")) {
      if (!checkedExternals.has(href)) {
        checkedExternals.add(href);
        if (!/rel="[^"]*noopener/.test(tag)) {
          note(page, `externý odkaz bez rel="noopener": ${href}`);
        }
      }
      continue;
    }

    const [path, hash] = href.split("#");
    const target = path === "" ? page : path;

    if (!pages.includes(target)) {
      note(page, `odkaz na neexistujúcu stránku: ${href}`);
      continue;
    }
    if (hash && !anchorsByPage.get(target)?.has(hash)) {
      note(page, `odkaz na neexistujúcu kotvu: ${href}`);
    }
  }

  // --- obrázky ---
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const src = tag.match(/\ssrc="([^"]*)"/)?.[1] ?? "(bez src)";
    if (!/\salt="/.test(tag)) note(page, `<img> bez alt: ${src}`);
    if (!/\swidth="/.test(tag) && !/data-nimg="fill"/.test(tag)) {
      note(page, `<img> bez rozmerov (CLS): ${src}`);
    }
    if (!/\sloading="lazy"/.test(tag) && !/\sfetchpriority="high"/i.test(tag)) {
      // Next.js bez priority dopĺňa loading="lazy"; informatívne.
    }
  }

  // --- nadpisy ---
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>/g)].map((m) =>
    Number(m[1])
  );
  const h1Count = headings.filter((level) => level === 1).length;
  if (h1Count !== 1) note(page, `počet <h1> je ${h1Count}, očakáva sa 1`);

  let previous = 1;
  for (const level of headings) {
    if (level > previous + 1) {
      note(page, `preskočená úroveň nadpisu: h${previous} → h${level}`);
    }
    previous = level;
  }

  // --- JSON-LD ---
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
    ),
  ];
  if (blocks.length === 0) note(page, "chýba JSON-LD");

  const types = [];
  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block[1]);
      for (const entry of Array.isArray(parsed) ? parsed : [parsed]) {
        types.push(entry["@type"]);
        if (!entry["@context"]) note(page, `JSON-LD bez @context: ${entry["@type"]}`);
        for (const [key, value] of Object.entries(entry)) {
          if (value === "" || value === undefined) {
            note(page, `JSON-LD má prázdnu hodnotu "${key}" v ${entry["@type"]}`);
          }
        }
      }
    } catch (error) {
      note(page, `nevalidný JSON-LD: ${error.message}`);
    }
  }

  const expectedTypes =
    page === "/"
      ? ["WebSite", "HealthAndBeautyBusiness", "FAQPage"]
      : page.startsWith("/lekcie/")
        ? ["WebSite", "HealthAndBeautyBusiness", "Service", "BreadcrumbList"]
        : ["WebSite", "HealthAndBeautyBusiness", "BreadcrumbList"];

  for (const expected of expectedTypes) {
    if (!types.includes(expected)) note(page, `chýba JSON-LD typ ${expected}`);
  }

  // --- povinné meta ---
  for (const [label, re] of [
    ["<title>", /<title>[^<]+<\/title>/],
    ["meta description", /<meta name="description" content="[^"]+"/],
    ["canonical", /<link rel="canonical"/],
    ["og:title", /<meta property="og:title"/],
    ["og:image", /<meta property="og:image"/],
  ]) {
    if (!re.test(html)) note(page, `chýba ${label}`);
  }
}

// --- statické súbory ---
for (const asset of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/favicon.ico"]) {
  const res = await fetch(BASE + asset);
  if (!res.ok) note(asset, `HTTP ${res.status}`);
}

// --- obrázky referencované v HTML skutočne existujú ---
const srcs = new Set();
for (const html of docs.values()) {
  for (const m of html.matchAll(/<img\b[^>]*\ssrc="([^"]+)"/g)) srcs.add(m[1]);
}
for (const src of srcs) {
  if (src.startsWith("data:")) continue;
  const res = await fetch(BASE + src.replaceAll("&amp;", "&"));
  if (!res.ok) note("assets", `obrázok ${res.status}: ${src}`);
}

if (problems.length === 0) {
  console.log(`OK — ${pages.length} stránok bez nálezov.`);
} else {
  console.log(`NÁLEZY (${problems.length}):`);
  for (const problem of problems) console.log("  - " + problem);
  process.exitCode = 1;
}
