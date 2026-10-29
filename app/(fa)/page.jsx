// export const metadata = {
//   title: "چرخ خیاطی ژانومه | نماینده رسمی و انحصاری ژانومه در ایران",
//   description: "خرید چرخ خیاطی ژانومه ژاپن از نماینده رسمی و انحصاری در ایران. فروش، گارانتی، قطعات یدکی و خدمات پس از فروش در تهران و سراسر کشور.",
//   keywords:
//     "چرخ خیاطی ژانومه, نمایندگی ژانومه ایران, خرید چرخ خیاطی ژانومه, قطعات یدکی ژانومه, خدمات و پشتیبانی ژانومه",
//   alternates: {
//     canonical: "https://iranjanome.ir/",
//     languages: {
//       fa: "https://iranjanome.ir/",
//       en: "https://iranjanome.ir/en/",
//       "x-default": "https://iranjanome.ir/",
//     },
//   },
//   openGraph: {
//     title: "نماینده انحصاری چرخ خیاطی ژانومه | شرکت ژانومه ایران",
//     description: "نمایندگی های رسمی فروش و سرویس چرخ خیاطی های ژانومه در ایران",
//     url: "https://iranjanome.ir",
//     images: [
//       { url: "https://iranjanome.ir/images/background/M17_og.jpg", width: 1200, height: 630 },
//     ],
//   },
// };

// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "ژانومه ایران",
//   url: "https://iranjanome.ir",
//   logo: "https://iranjanome.ir/images/logo.png",
//   sameAs: ["https://www.instagram.com/iranjanome.ir/"],
//   description: "نماینده انحصاری چرخ خیاطی ژانومه در ایران",
//   contactPoint: {
//     "@type": "ContactPoint",
//     telephone: "+98-21-66499533",
//     contactType: "customer service",
//     areaServed: "IR",
//     availableLanguage: ["fa", "en"],
//   },
// };

// export default function HomePage() {
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//     />
//   );
// }

// app/(fa)/page.jsx  — full replacement
import Link from "next/link";

export const metadata = {
  title: "چرخ خیاطی ژانومه | نماینده رسمی و انحصاری ژانومه در ایران",
  description:
    "خرید چرخ خیاطی ژانومه ژاپن از نماینده رسمی و انحصاری در ایران. فروش، گارانتی، قطعات یدکی و خدمات پس از فروش در تهران و سراسر کشور.",
  alternates: {
    canonical: "https://iranjanome.ir/",
    languages: {
      fa: "https://iranjanome.ir/",
      en: "https://iranjanome.ir/en/",
      "x-default": "https://iranjanome.ir/",
    },
  },
  openGraph: {
    title: "چرخ خیاطی ژانومه | نماینده رسمی و انحصاری در ایران",
    description:
      "فروش، گارانتی، قطعات یدکی و خدمات پس از فروش چرخ خیاطی ژانومه ژاپن در ایران.",
    url: "https://iranjanome.ir/",
    type: "website",
    locale: "fa_IR",
    images: [
      {
        url: "https://iranjanome.ir/images/background/M17_og.jpg",
        width: 1200,
        height: 630,
        alt: "چرخ خیاطی ژانومه",
      },
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://iranjanome.ir/#organization",
    name: "ژانومه ایران",
    alternateName: "Iran Janome",
    url: "https://iranjanome.ir/",
    logo: "https://iranjanome.ir/images/janome-logo-sm.png", // verify /images/logo.png exists, or keep this
    sameAs: [
      "https://www.instagram.com/iranjanome.ir/",
      "https://www.aparat.com/iranjanome.ir/",
    ],
    description: "نماینده رسمی و انحصاری چرخ خیاطی ژانومه در ایران",
    address: {
      "@type": "PostalAddress",
      streetAddress: "خیابان جمهوری اسلامی - ساختمان سجاد",
      addressLocality: "تهران",
      postalCode: "3354718342",
      addressCountry: "IR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+98-21-66499533",
      email: "info@iranjanome.ir",
      contactType: "customer service",
      areaServed: "IR",
      availableLanguage: ["fa", "en"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://iranjanome.ir/",
    name: "ژانومه ایران",
    inLanguage: "fa",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* The hero is position:fixed, so this section starts one screen down
          and scrolls over it. z-index must beat .home-image-wrap (20). */}
      <main
        className="home-intro bg-dark text-light"
        style={{
          position: "relative",
          zIndex: 30,
          marginTop: "100vh",
          opacity: 0.80,
          padding: "2.5rem 1rem 6rem", // bottom room for the fixed footer
        }}
      >
        <div className="container" style={{ maxWidth: 900 }}>
          {/* H1 is in the header (menu.jsx). If you move it here, remove it there. */}
          <h2 className="h4">فروش چرخ خیاطی ژانومه</h2>
          <p>
            ژانومه ایران نماینده رسمی و انحصاری چرخ خیاطی ژانومه ژاپن در ایران
            است. در بخش <Link href="/products/">محصولات</Link> می‌توانید مدل
            مناسب خود را پیدا کنید و در{" "}
            <Link href="/services/compare/">مقایسه محصولات</Link> ویژگی‌های
            مدل‌ها را کنار هم ببینید.
          </p>

          <h2 className="h4">خدمات و گارانتی ژانومه</h2>
          <p>
            پاسخ پرسش‌های رایج را در{" "}
            <Link href="/faq/">سوالات متداول فنی</Link> بخوانید و با{" "}
            <Link href="/services/training/">فیلم‌های آموزشی</Link> کار با
            دستگاه را یاد بگیرید.
          </p>

          <h2 className="h4">قطعات یدکی چرخ خیاطی ژانومه</h2>
          <p>
            فهرست <Link href="/parts/">لوازم یدکی</Link> ژانومه را ببینید.
          </p>

          <h2 className="h4">نمایندگی‌های مجاز ژانومه در ایران</h2>
          <p>
            نزدیک‌ترین نمایندگی را در صفحه <Link href="/agents/">نمایندگی‌ها</Link>{" "}
            پیدا کنید، یا با ما در{" "}
            <Link href="/contact/">تماس</Link> باشید. دفتر مرکزی: تهران، خیابان
            جمهوری اسلامی، ساختمان سجاد؛ تلفن{" "}
            <a href="tel:+982166499533">۶۶۴۹۹۵۳۳ - ۰۲۱</a>.
          </p>
          <p>
            <Link href="/history/">درباره ژانومه و تاریخچه برند</Link>
          </p>
        </div>
      </main>
    </>
  );
}
