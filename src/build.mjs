// ALBA Wellbeing — trilingual static build.
// Reads src/*.html templates → writes EN (root), LT (/lt/), RU (/ru/).
// Run: node src/build.mjs   (from project root)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import T from "./translations.mjs";

const PAGES = ["index.html","about.html","hypnotherapy.html","end-of-life.html","contact.html","consent.html"];
const ALL_LOCALES = ["en","lt","ru"];               // languages that exist (for hreflang + switcher links)
const LOCALES = (process.env.LOCALES ? process.env.LOCALES.split(",") : ALL_LOCALES); // which to emit this run
const ORIGIN = "https://www.albawellbeing.co.uk";

const NAMED = { rsquo:"’", lsquo:"‘", ldquo:"“", rdquo:"”", mdash:"—",
  ndash:"–", hellip:"…", middot:"·", amp:"&", copy:"©", pound:"£",
  rarr:"→", rsaquo:"›", nbsp:" ", laquo:"«", raquo:"»", deg:"°", times:"×" };

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-zA-Z]+);/g, (m, name) => (name in NAMED ? NAMED[name] : m));
}

const LANG_HTML = { en: "English", lt: "Lietuvių", ru: "Русский" };

function switcher(path, loc) {
  const names = { en: "English", lt: "Lietuvių", ru: "Русский" };
  const links = ALL_LOCALES.map((l) => {
    const href = l === "en" ? "/" + path : `/${l}/` + path;
    const active = l === loc ? ' class="active" aria-current="true"' : "";
    return `<a href="${href}" hreflang="${l}"${active}>${names[l]}</a>`;
  }).join("");
  return `<details class="lang-menu"><summary aria-label="Language / Kalba / Язык">` +
    `<span class="lang-code">${loc.toUpperCase()}</span>` +
    `<svg class="chev" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>` +
    `</summary><div class="lang-pop">${links}</div></details>`;
}

function hreflang(path) {
  return ALL_LOCALES.map((l) => {
    const href = l === "en" ? `${ORIGIN}/` + path : `${ORIGIN}/${l}/` + path;
    return `<link rel="alternate" hreflang="${l}" href="${href}" />`;
  }).join("\n  ") + `\n  <link rel="alternate" hreflang="x-default" href="${ORIGIN}/${path}" />`;
}

const matched = { lt: new Set(), ru: new Set() };
const sortedKeys = Object.keys(T).sort((a, b) => b.length - a.length);

// whitespace-flexible regex for a key (source paragraphs may wrap across lines)
function reFor(key) {
  const esc = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(esc, "g");
}

for (const page of PAGES) {
  const srcRaw = readFileSync(new URL("./" + page, import.meta.url), "utf8");
  let src = decode(srcRaw);
  const m = src.match(/<link rel="canonical" href="([^"]+)"/);
  const enUrl = m ? m[1] : `${ORIGIN}/${page}`;
  const path = enUrl.replace(ORIGIN + "/", "");

  for (const loc of LOCALES) {
    let html = src;

    if (loc !== "en") {
      for (const key of sortedKeys) {
        const re = reFor(key);
        if (re.test(html)) {
          matched[loc].add(key);
          const val = T[key][loc];
          html = html.replace(reFor(key), () => val);
        }
      }
    }

    // lang attribute
    html = html.replace(/<html lang="[^"]*">/, `<html lang="${loc}">`);
    // canonical + og:url → locale URL
    const locUrl = loc === "en" ? enUrl : enUrl.replace(ORIGIN + "/", `${ORIGIN}/${loc}/`);
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${locUrl}$2`);
    html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${locUrl}$2`);
    // placeholders
    html = html.replace("<!--HREFLANG-->", hreflang(path));
    html = html.replace("<!--LANGS-->", switcher(path, loc));

    const outDir = loc === "en" ? "." : "./" + loc;
    if (loc !== "en") mkdirSync(new URL("../" + loc + "/", import.meta.url), { recursive: true });
    writeFileSync(new URL(`../${outDir}/${page}`.replace("/./", "/"), import.meta.url), html, "utf8");
  }
  console.log("built", page);
}

// report dictionary keys that matched nothing (likely a source mismatch)
for (const loc of ["lt", "ru"]) {
  const miss = sortedKeys.filter((k) => !matched[loc].has(k));
  if (miss.length) {
    console.log(`\n[${loc}] ${miss.length} unmatched keys:`);
    miss.forEach((k) => console.log("   · " + JSON.stringify(k.slice(0, 70))));
  } else {
    console.log(`[${loc}] all ${sortedKeys.length} keys matched`);
  }
}
