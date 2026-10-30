// Shared SEO helpers: URL slugs, image URLs and JSON-LD builders.
// Server-side only (uses fs at build time) — do not import from "use client" files
// except `modelSlug`, which lives in lib/slug.js for that reason.
import fs from "fs";
import path from "path";

import { modelSlug } from "@/lib/slug";

export const SITE = "https://iranjanome.ir";
export const LOGO_URL = `${SITE}/images/janome-logo-large.png`;
export const DEFAULT_OG_IMAGE = `${SITE}/images/background/M17_og.jpg`;

export { modelSlug };

const brandKey = (m) => m.brand_model.toLowerCase().replace(/ /g, "");

/** Public path (starts with "/") of the normal product photo. */
export const modelImagePath = (m) =>
  `/images/machines/Janome/${brandKey(m)}/${brandKey(m)}-${m.image}.jpg`;

/** Absolute URL of the 1200x630 OG image if it exists, else the normal photo. */
export function modelOgImageUrl(m) {
  const og = `/images/machines/Janome/${brandKey(m)}/${brandKey(m)}-${m.image}_og copy.jpg`;
  const exists = fs.existsSync(path.join(process.cwd(), "public", og));
  return SITE + encodeURI(exists ? og : modelImagePath(m));
}

export const modelImageUrl = (m) => SITE + encodeURI(modelImagePath(m));

/** Product JSON-LD. No Offer: the site publishes no prices, and an Offer
 *  without a real price is invalid (price "0" would claim the item is free). */
export function productSchema(m, lang = "fa") {
  const url =
    lang === "en"
      ? `${SITE}/en/janome-sewing-machine-model/${modelSlug(m.model)}/`
      : `${SITE}/janome-sewing-machine-model/${modelSlug(m.model)}/`;
  const specs =
    lang === "en"
      ? [
          ["Machine type", m.machine_type_eng],
          ["System", m.system_eng],
          ["Frame", m.machine_frame_eng],
          ["Made in", m.made_eng],
          ["Stitch types", m.num_stich_type_eng],
          ["Stitch width (mm)", m.stich_width_mm],
          ["Number of needles", m.num_needle],
        ]
      : [
          ["نوع ماشین", m.machine_type],
          ["سیستم", m.system],
          ["فرم اسکلت چرخ", m.machine_frame],
          ["کشور سازنده", m.made],
          ["تعداد نوع دوخت", m.num_stich_type],
          ["عرض دوخت میلیمتر", m.stich_width_mm],
          ["تعداد سوزن", m.num_needle],
        ];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    url,
    name:
      lang === "en"
        ? `Janome ${m.model} sewing machine`
        : `چرخ خیاطی ${m.farsi} ${m.model}`,
    sku: String(m.model),
    model: String(m.model),
    image: modelImageUrl(m),
    description:
      lang === "en"
        ? `Janome ${m.model}: ${m.machine_type_eng}, ${m.system_eng}. ${m.made_eng}.`
        : `چرخ خیاطی ${m.farsi} مدل ${m.model}، ${m.machine_type}، ${m.system}، ${m.made}`,
    category: lang === "en" ? m.machine_type_eng : m.machine_type,
    brand: { "@type": "Brand", name: "Janome", alternateName: m.farsi },
    additionalProperty: specs
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([name, value]) => ({
        "@type": "PropertyValue",
        name,
        value: String(value),
      })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, url], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url,
    })),
  };
}

const stripHtml = (s) =>
  String(s || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** FAQPage JSON-LD from the faqContent / faqContentEng arrays. */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: stripHtml(f.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answers.map((a) => stripHtml(a.text)).join(" "),
      },
    })),
  };
}

export const jsonLdScript = (data) => ({
  type: "application/ld+json",
  dangerouslySetInnerHTML: { __html: JSON.stringify(data).replace(/</g, "\\u003c") },
});
