import { _allMachines } from "@/data/machines";
import { modelSlug } from "@/lib/slug";

const SITE = "https://iranjanome.ir";

// ItemList JSON-LD for the product listing page. Deliberately has no Offer:
// the site publishes no prices (the old version declared fake prices, which
// is misleading structured data).
export function createJsonLD() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: _allMachines.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/janome-sewing-machine-model/${modelSlug(p.model)}/`,
      name: `چرخ خیاطی ${p.farsi} ${p.model}`,
    })),
  };
}
