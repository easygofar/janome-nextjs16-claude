export const dynamic = "force-static"
import { _allMachines } from "@/data/machines";

const BASE = "https://iranjanome.ir";

export default function sitemap() {
  const now = new Date();

  const faStatic = [
    "",
    "agents",
    "contact",
    "faq",
    "history",
    "parts",
    "products",
    "janome-sewing-machine-model",
    "services/compare",
    "services/training",
  ].map(p => ({
    url: p ? `${BASE}/${p}/` : `${BASE}/`,
    lastModified: now,
  }));

  const enStatic = [
    "en",
    "en/contact",
    "en/history",
    "en/parts",
    "en/products",
    "en/services/compare",
    "en/services/faq",
    "en/services/training",
  ].map(p => ({
    url: `${BASE}/${p}/`,
    lastModified: now,
  }));

  const faModels = _allMachines.flatMap(m => [
    { url: `${BASE}/janome-sewing-machine-model/${m.model}/`, lastModified: now },
  ]);

  const enModels = _allMachines.map(m => ({
    url: `${BASE}/en/janome-sewing-machine-model/${m.model}/`,
    lastModified: now,
  }));

  // NOTE: /products/[model]/ and /en/products/[model]/ are deliberately
  // left out of the sitemap - they now carry a canonical pointing at the
  // /janome-sewing-machine-model/ equivalent (see the comments in those
  // page.jsx files), so listing both versions here would just resubmit
  // the duplicate-content problem this migration fixed.

  return [...faStatic, ...enStatic, ...faModels, ...enModels];
}
