// Post-build 404 cleanup for Cloudflare Pages static exports. Runs after
// `next build` (see the build script in package.json) and fails the build if
// the 404 page is still wrong.
//
// 1. out/404.html must carry exactly one robots tag, "noindex, follow", and no
//    canonical. Next.js always injects <meta name="robots" content="noindex">
//    on not-found pages, so not-found.tsx sets robots: null (no second tag) and
//    alternates.canonical: null, and this script upgrades Next's tag to
//    "noindex, follow" in both the HTML and the inline RSC payload so
//    hydration renders the same single tag.
// 2. Next also writes copies of the 404 page at out/404/index.html and
//    out/_not-found(.html|/index.html). Cloudflare Pages serves those with
//    status 200 (soft 404s), so they are deleted. functions/404 makes /404
//    itself return a real 404.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "out");
const page = path.join(out, "404.html");
const errors = [];

if (!fs.existsSync(page)) {
  console.error("fix-404: out/404.html is missing. Pages needs it to return real 404s.");
  process.exit(1);
}

let html = fs.readFileSync(page, "utf8");
html = html
  .replace(/<meta name="robots" content="noindex"\/>/g, '<meta name="robots" content="noindex, follow"/>')
  .replace(/\\"name\\":\\"robots\\",\\"content\\":\\"noindex\\"/g, '\\"name\\":\\"robots\\",\\"content\\":\\"noindex, follow\\"');
fs.writeFileSync(page, html);

const robots = [...html.matchAll(/<meta[^>]*name="robots"[^>]*>/gi)].map((m) => m[0]);
const rscRobots = html.match(/\\"name\\":\\"robots\\"/g) || [];
if (robots.length !== 1 || !robots[0].includes('content="noindex, follow"')) {
  errors.push(`404.html needs exactly one <meta name="robots" content="noindex, follow">, found: ${robots.join(" ") || "none"}`);
}
if (rscRobots.length > 1) errors.push(`404.html RSC payload has ${rscRobots.length} robots tags. Set robots: null in not-found.tsx`);
if (/<link[^>]*rel="canonical"/i.test(html) || /\\"rel\\":\\"canonical\\"/.test(html)) {
  errors.push("404.html has a canonical tag. Set alternates: { canonical: null } in not-found.tsx");
}

const removed = [];
for (const rel of ["404/index.html", "404/index.txt", "_not-found.html", "_not-found/index.html"]) {
  const f = path.join(out, rel);
  if (fs.existsSync(f)) {
    fs.rmSync(f);
    removed.push(rel);
  }
}
const dir404 = path.join(out, "404");
if (fs.existsSync(dir404) && fs.readdirSync(dir404).length === 0) fs.rmdirSync(dir404);

if (errors.length) {
  console.error("fix-404 failed:\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log(`fix-404: 404.html ok (one robots tag, no canonical); removed ${removed.join(", ") || "nothing"}`);
