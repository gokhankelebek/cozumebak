// Writes lib/lastmod.json: the last commit date of each page's own sources,
// keyed by URL path. app/sitemap.ts reads it so <lastmod> says when a page
// really changed instead of "today" on every deploy (Google ignores lastmod
// that is always fresh). Run `npm run lastmod` before opening a content PR.
// Vercel builds from a shallow clone, so this cannot run there.
import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";

if (execSync("git rev-parse --is-shallow-repository").toString().trim() === "true") {
  console.log("lastmod: shallow clone, keeping committed lib/lastmod.json");
  process.exit(0);
}

// One pass over history: first time a file is seen = its latest commit date.
const last = {};
let date = "";
const log = execSync("git log --name-only --format=@%cs", { maxBuffer: 1 << 28 }).toString();
for (const line of log.split("\n")) {
  if (line.startsWith("@")) date = line.slice(1);
  else if (line && !(line in last)) last[line] = date;
}
const newest = (...files) =>
  files.map((f) => last[f]).filter(Boolean).sort().at(-1);

const out = {};
for (const slug of readdirSync("app/konular")) {
  const page = `app/konular/${slug}/page.mdx`;
  if (!existsSync(page)) continue;
  // A lesson also changes when one of the figure files it imports changes.
  const figs = [...readFileSync(page, "utf8").matchAll(/from "@\/(components\/figures\/[^"]+)"/g)].map(
    (m) => `${m[1]}.tsx`,
  );
  const d = newest(page, ...figs);
  if (d) out[`/konular/${slug}`] = d;
}
for (const f of readdirSync("lib/soru-tipleri")) {
  const d = newest(`lib/soru-tipleri/${f}`);
  if (d) out[`/soru-tipleri/${f.replace(/\.ts$/, "")}`] = d;
}
for (const route of ["yks-puan-hesaplama", "tercih-robotu", "hedef-net", "hakkimizda", "iletisim", "gizlilik", "sss"]) {
  const d = newest(`app/${route}/page.tsx`, `app/${route}/page.mdx`);
  if (d) out[`/${route}`] = d;
}
const yazili = newest("lib/yazili.ts", "components/YaziliSinav.tsx");
if (yazili) out["/yazili-sinavlar"] = yazili;

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync("lib/lastmod.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(`lastmod: ${Object.keys(sorted).length} paths`);
