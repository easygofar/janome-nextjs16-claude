"use client";

import { usePathname } from "next/navigation";

import Menu from "@/components/nav/menu";
import Home from "@/components/Home/home";
import ContentWrapper from "@/components/contentwrapper";
import Footer from "@/components/footer";

// Mirrors the branching that used to live in pages/_app.js: the homepage
// renders without the ContentWrapper and uses a fixed-position footer,
// every other Persian page gets the wrapper and a normal-flow footer.
export default function FaChrome({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div dir="rtl">
      <Menu homePage={isHome} />
      <Home path={pathname} />
      {isHome ? (
        <>
          {children}
          <Footer position="fixed" />
        </>
      ) : (
        <ContentWrapper>
          {children}
          <Footer />
        </ContentWrapper>
      )}
    </div>
  );
}
