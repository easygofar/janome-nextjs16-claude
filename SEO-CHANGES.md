# SEO changes (audit follow-up)

## Needs action at your host (not possible in a static export)
- Apply the 301 redirects in `redirects.txt` (Netlify/Cloudflare syntax; translate for nginx/Apache/Vercel).
  Regenerate with `node scripts/generate-redirects.mjs > redirects.txt`.
- Old URLs `/janome-sewing-machine-model/Jem Gold/`, `SKYLINE S3/`, `SKYLINE S5/` (and `/en/...`) are now `Jem-Gold`, `SKYLINE-S3`, `SKYLINE-S5`.
- `/janome-sewing-machine-model/` (list) now canonicals to `/products/`; `/products/<model>/` canonicals to `/janome-sewing-machine-model/<model>/`.

## Code
- `lib/slug.js`, `lib/seo.js`: model slug helper, image URLs (OG image with fallback), Product / BreadcrumbList / FAQPage JSON-LD builders.
- Sitemap: encoded-safe slugs, hreflang alternates, no fake `lastmod`, duplicate listing removed.
- Product schema: valid `PropertyValue`s, no `Offer` (no prices are published), correct image URL; added to English model pages; BreadcrumbList on model pages; FAQPage on both FAQ pages.
- Homepages: dead code removed, readable contrast (translucent background instead of element opacity, light links), schema logo uses an existing image (`/images/janome-logo-large.png`), hero has an aria-label.
- Titles/descriptions rewritten on all static pages; `<meta keywords>` removed; English FAQ hreflang fixed.
- Nav: unique dropdown ids, Persian aria/alt text, "سؤالات" typo fixed, placeholder warranty link removed (re-add when the page exists), `/en` home detection fixed.

## Not changed on purpose
- Model slugs keep their original case (`MC500E`). Lower-casing would change ~90 indexed URLs and needs redirects; do it only if you add them.
- The H1 stays in the header on the Persian/English homepages (see `components/nav/menu.jsx`).
