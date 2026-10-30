export const dynamic = "force-static";
import { _allMachines } from "@/data/machines";
import { modelSlug } from "@/lib/slug";

const BASE = "https://iranjanome.ir";

// No <lastmod>: the site has no per-page edit dates, and a build-time
// timestamp on every URL teaches Google to ignore lastmod altogether.
// To add real dates later, put a `lastModified: "YYYY-MM-DD"` on each entry.

// [persian path, english path] — null where a language version doesn't exist.
const pairs = [
  ["", "en"],
  ["agents", null],
  ["contact", "en/contact"],
  ["faq", "en/services/faq"],
  ["history", "en/history"],
  ["parts", "en/parts"],
  ["products", "en/products"],
  ["services/compare", "en/services/compare"],
  ["services/training", "en/services/training"],
];

const abs = p => (p ? `${BASE}/${p}/` : `${BASE}/`);

function entry(fa, en) {
  const e = [];
  const languages = {};
  if (fa !== null) languages.fa = abs(fa);
  if (en) languages.en = abs(en);
  const alternates = fa !== null && en ? { languages } : undefined;
  if (fa !== null) e.push({ url: abs(fa), ...(alternates && { alternates }) });
  if (en) e.push({ url: abs(en), ...(alternates && { alternates }) });
  return e;
}

export default function sitemap() {
  const statics = pairs.flatMap(([fa, en]) => entry(fa, en));

  const models = _allMachines.flatMap(m => {
    const s = modelSlug(m.model);
    return entry(`janome-sewing-machine-model/${s}`, `en/janome-sewing-machine-model/${s}`);
  });

  // /products/[model]/ and /en/products/[model]/ are intentionally left out:
  // their canonical points at the /janome-sewing-machine-model/ equivalent.
  return [...statics, ...models];
}
