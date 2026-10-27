# Iran Janome - App Router migration

Converted from Next.js 14.2.3 Pages Router (static export) to the current
App Router, keeping every URL identical to the old site so nothing needs a
redirect. `next.config.js` still uses `output: "export"` - this is a fully
static site.

## Before you do anything else

**Rotate your secrets.** The `.env.local` you shared contains a live
`ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`, and a MongoDB URI. They're not
included in this build (see below for why), but treat them as compromised
since they were shared in this conversation and rotate them.

Copy `.env.local.example` to `.env.local` and fill in a **GA4** measurement
ID (`G-XXXXXXX`). The old value (`UA-219648158-1`) is a Universal Analytics
ID - UA stopped processing data in 2023, so analytics have likely been
silently collecting nothing for a while.

## What was structurally dead code (removed)

`next.config.js` has `output: "export"`. Static exports **cannot** run
`pages/api/*` routes or `middleware.js` at all - there's no server to run
them on. That means the MongoDB/JWT login code in `pages/api/user/*` and
`middleware.js` has not run in production regardless of this migration.
Both are dropped, along with the now-unused dependencies (`mongodb`,
`bcrypt`, `jsonwebtoken`, `jwt-decode`, `jose`, `cookies`, `cookies-next`,
`next-compose-plugins`, `next-optimized-images`). If you actually need
login/auth, it needs a real backend (a separate API, or a host that
supports Next.js server features instead of a static export).

`/parts/` (both languages) imported agent/state data and had a full
`useState`/`useEffect` state-picker wired up - none of it was ever
rendered. Removed; both are now plain (non-interactive) pages.

## Real bugs found and fixed while converting

1. **Canonical tag pointed at the wrong page, on all 94 English product
   pages.** `pages/en/products/[model].jsx` had
   `<link rel="canonical" href="https://iranjanome.ir/en/products" />` -
   every single English product detail page told Google "the real page is
   the listing." Likely the reason these pages don't show up individually
   in search. Fixed to point at itself (redirected to the
   `janome-sewing-machine-model` equivalent - see point 3).
2. **`og:url` copy-paste errors:**
   - Persian `/products/` listing pointed its `og:url` at `/parts/`.
   - English `/services/training/` pointed its `og:url` at the **Persian**
     `/services/training/` page.
   Both fixed to point at themselves.
3. **Duplicate content: `/products/[model]/` vs
   `/janome-sewing-machine-model/[model]/`.** Same machine, same content,
   two URLs, each canonicalizing to itself. `/janome-sewing-machine-model/`
   has the richer page (tabs, downloads), so `/products/[model]/` now
   canonicalizes there instead. Same fix applied to the English pair.
   **You should still add a real 301 redirect** from `/products/[model]/`
   to `/janome-sewing-machine-model/[model]/` at your host/CDN - a static
   export can't issue server redirects on its own, and a canonical tag is
   a hint, not a redirect.
4. **`/products/` and `/janome-sewing-machine-model/` listing pages** also
   duplicate each other at the collection level (same 94 machines,
   near-identical titles). This one is a product decision, not just a
   technical fix - either merge them or make one clearly authoritative.
5. **Case-sensitive import bug:** `pages/en/products/index.jsx` imported
   `.../Products/FiltersEng` (capital E), but the file on disk is
   `Filterseng.jsx` (lowercase e). Windows/Mac dev machines don't care;
   a case-sensitive Linux build would fail on this import. Fixed.
6. **Missing trailing slash:** `/services/training/`'s old canonical and
   `og:url` omitted the trailing slash used everywhere else on the site
   (`next.config.js` sets `trailingSlash: true`). Fixed for consistency.
7. **No `sitemap.xml` or `robots.txt`** existed in the exported site.
   Added `app/sitemap.js` (every static + dynamic route, both languages)
   and `app/robots.js`.

## What changed structurally

- **Routing:** every route now lives under `app/`, split into two route
  groups so Persian and English can each have their own root `<html>`:
  `app/(fa)/...` (`dir="rtl"`) and `app/(en)/en/...` (`dir="ltr"`). Route
  groups don't add a URL segment, so every URL is unchanged.
- **Metadata:** `next/head` is gone everywhere, replaced by the Metadata
  API (`export const metadata = {...}` for static pages,
  `generateMetadata({ params })` for the two dynamic model-detail routes).
  Canonical/hreflang tags now use `alternates.canonical` /
  `alternates.languages` instead of raw `<link>` tags.
- **Data fetching:** every `getStaticProps` that just passed through a
  local JS/JSON module (all of them - nothing here ever fetched anything
  remote) was deleted; the page now imports the data module directly.
  `getStaticProps` + `getStaticPaths` on the two model-detail routes
  became `generateStaticParams` + `generateMetadata`.
- **Client/Server split:** every page that needs interactivity
  (`useState`, filters, the compare/training tools, etc.) is split into a
  server `page.jsx` (holds `metadata`/`generateMetadata`, cheap to render)
  and a `"use client"` sibling component that holds the actual UI. The two
  machine-detail pages (`janome-sewing-machine-model/[model]`) need no
  client-side state at all now, so they're plain server components.
- **`next/router` → `next/navigation`:** `useRouter().pathname` became
  `usePathname()`; `router.push(...)` still works via `next/navigation`'s
  `useRouter`.
- **Components:** moved from `src/components/` to `components/`, with
  `"use client"` added wherever a component uses hooks, jQuery, or
  `useRouter`. Import paths use the `@/` alias (see `jsconfig.json`)
  instead of long `../../../` chains.

## Still worth doing

- Decide what to do about the listing-level duplicate content (point 4
  above).
- Add the 301 redirects mentioned in point 3, once you know your
  host/CDN's redirect mechanism (Cloudflare Page Rules, Vercel
  `vercel.json`, etc. - `next.config.js`'s `redirects()` does **not**
  work with `output: "export"`).
- Run `npm install` and `npm run build` and fix anything version-specific
  that comes up - dependencies were bumped to current majors
  (Next 15, React 18.3, Bootstrap 5.3, etc.) and this hasn't been built
  in this environment.
- `pages/en/janome-sewing-machine-model/trtable.jsx` was a real exported
  route in your site (`/en/janome-sewing-machine-model/trtable/`) that
  rendered a bare `<tr>` with no props ever passed to it - an empty,
  invalid page with no real content. It wasn't recreated here; recommend
  just letting that URL 404, or redirecting it if it has any inbound
  links/backlinks worth preserving.
