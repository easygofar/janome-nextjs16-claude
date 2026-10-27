"use client";

import { usePathname } from "next/navigation";

import MenuEnd from "@/components/nav/menueng";
import Home from "@/components/Home/home";
import ContentWrapper from "@/components/contentwrapper";
import Footer from "@/components/footereng";

// Mirrors the /en branch of the old pages/_app.js.
export default function EnChrome({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/en" || pathname === "/en/";

  return (
    <div dir="ltr">
      <MenuEnd pathname={pathname} />
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
