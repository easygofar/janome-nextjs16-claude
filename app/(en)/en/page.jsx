// export const metadata = {
//   title: "Iran Janome | Official Exclusive Dealer | Sales & Service",
//   description: "Iran Janome After-Sales Service",
//   keywords:
//     "janome sewing machine, home sewing machine, sewing macine, buy sewing macihne, janome, japan",
//   alternates: {
//     canonical: "https://iranjanome.ir/en/",
//     languages: {
//       fa: "https://iranjanome.ir/",
//       en: "https://iranjanome.ir/en/",
//       "x-default": "https://iranjanome.ir/",
//     },
//   },
//   openGraph: {
//     title: "Iran Janome | Official Exclusive Dealer | Sales & Service",
//     description: "Iran Janome After-Sales Service",
//     images: [
//       { url: "https://iranjanome.ir/images/background/M17_og.jpg", width: 1200, height: 630 },
//     ],
//   },
// };

// // The original page rendered nothing but <Head> tags; kept as-is since the
// // visible homepage content (hero) lives in the shared layout/chrome.
// export default function EnHomePage() {
//   return null;
// }

// app/(en)/en/page.jsx — full replacement
import Link from "next/link";

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
  logo: "https://iranjanome.ir/images/janome-logo-sm.png",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main
        className="home-intro eng-content bg-dark text-light"
        style={{
          position: "relative",
          zIndex: 30,
          marginTop: "100vh",
          opacity: 0.80,
          padding: "2.5rem 1rem 6rem",
        }}
      >
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 className="h4">Janome sewing machines in Iran</h2>
          <p>
            Iran Janome is the official exclusive dealer of Janome sewing
            machines in Iran. Browse the <Link href="/en/products/">products</Link>{" "}
            or <Link href="/en/services/compare/">compare models</Link> side by
            side.
          </p>
          <h2 className="h4">Service and support</h2>
          <p>
            Learn with <Link href="/en/services/training/">training videos</Link>,
            read the <Link href="/en/services/faq/">FAQ</Link>, or find{" "}
            <Link href="/en/parts/">spare parts</Link>.
          </p>
          <h2 className="h4">Contact</h2>
          <p>
            Tehran, Jomhouri Eslami Ave., Sajjad Building. Phone{" "}
            <a href="tel:+982166499533">+98 21 66499533</a>.{" "}
            <Link href="/en/contact/">Contact us</Link> or read our{" "}
            <Link href="/en/history/">history</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
