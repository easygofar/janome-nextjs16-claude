"use client";

import Script from "next/script";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as ga from "@/lib/ga";

// useSearchParams() forces Next.js to bail out of static prerendering for
// any page that renders this component unless it's wrapped in <Suspense> -
// that's what broke the export build. The tracking logic lives in its own
// inner component so only *that* subtree suspends, not the whole page.
function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return;
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    ga.pageview(url);
  }, [pathname, searchParams]);

  return null;
}

// NOTE: NEXT_PUBLIC_GOOGLE_ANALYTICS currently holds a Universal Analytics ID
// (UA-...). UA stopped processing data in 2023 - replace it with a GA4
// measurement ID (G-...) in .env.local. The gtag.js snippet below works with
// either, but analytics will silently collect nothing until the ID is GA4.
export default function GoogleAnalytics() {
  if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
    </>
  );
}
