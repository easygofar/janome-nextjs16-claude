import Link from "next/link";

import { LOGO_URL, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Janome Sewing Machines | Official Exclusive Dealer in Iran",
  description:
    "Official exclusive Janome sewing machine dealer in Iran: sales, warranty, spare parts and after-sales service in Tehran and nationwide.",
  alternates: {
    canonical: "https://iranjanome.ir/en/",
    languages: {
      fa: "https://iranjanome.ir/",
      en: "https://iranjanome.ir/en/",
      "x-default": "https://iranjanome.ir/",
    },
  },
  openGraph: {
    title: "Janome Sewing Machines | Official Exclusive Dealer in Iran",
    description:
      "Sales, warranty, spare parts and after-sales service for Janome sewing machines in Iran.",
    url: "https://iranjanome.ir/en/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://iranjanome.ir/images/background/M17_og.jpg",
        width: 1200,
        height: 630,
        alt: "Janome sewing machine",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iran Janome",
  url: "https://iranjanome.ir/en/",
  logo: LOGO_URL,
  sameAs: ["https://www.instagram.com/iranjanome.ir/"],
  description: "Official exclusive Janome sewing machine dealer in Iran",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tehran",
    addressCountry: "IR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+98-21-66499533",
    email: "info@iranjanome.ir",
    contactType: "customer service",
    availableLanguage: ["fa", "en"],
  },
};

export default function EnHomePage() {
  return (
    <>
      <script {...jsonLdScript(jsonLd)} />
      <main
        className="home-intro eng-content text-light"
        style={{
          position: "relative",
          zIndex: 30,
          marginTop: "100vh",
          background: "rgba(0, 0, 0, 0.82)",
          padding: "2.5rem 1rem 6rem",
        }}
      >
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="h4">Janome sewing machines in Iran</h2>
          <p>
            Iran Janome is the official exclusive dealer of Janome sewing
            machines in Iran. Browse the <Link className="link-light" href="/en/products/">products</Link>{" "}
            or <Link className="link-light" href="/en/services/compare/">compare models</Link> side by
            side.
          </p>
          <h2 className="h4">Service and support</h2>
          <p>
            Learn with <Link className="link-light" href="/en/services/training/">training videos</Link>,
            read the <Link className="link-light" href="/en/services/faq/">FAQ</Link>, or find{" "}
            <Link className="link-light" href="/en/parts/">spare parts</Link>.
          </p>
          <h2 className="h4">Contact</h2>
          <p>
            Tehran, Jomhouri Eslami Ave., Sajjad Building. Phone{" "}
            <a className="link-light" href="tel:+982166499533">+98 21 66499533</a>.{" "}
            <Link className="link-light" href="/en/contact/">Contact us</Link> or read our{" "}
            <Link className="link-light" href="/en/history/">history</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
