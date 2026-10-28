export const metadata = {
  title: "چرخ خیاطی ژانومه | نماینده رسمی و انحصاری ژانومه در ایران",
  description: "خرید چرخ خیاطی ژانومه ژاپن از نماینده رسمی و انحصاری در ایران. فروش، گارانتی، قطعات یدکی و خدمات پس از فروش در تهران و سراسر کشور.",
  keywords:
    "چرخ خیاطی ژانومه, نمایندگی ژانومه ایران, خرید چرخ خیاطی ژانومه, قطعات یدکی ژانومه, خدمات و پشتیبانی ژانومه",
  alternates: {
    canonical: "https://iranjanome.ir/",
    languages: {
      fa: "https://iranjanome.ir/",
      en: "https://iranjanome.ir/en/",
      "x-default": "https://iranjanome.ir/",
    },
  },
  openGraph: {
    title: "نماینده انحصاری چرخ خیاطی ژانومه | شرکت ژانومه ایران",
    description: "نمایندگی های رسمی فروش و سرویس چرخ خیاطی های ژانومه در ایران",
    url: "https://iranjanome.ir",
    images: [
      { url: "https://iranjanome.ir/images/background/M17_og.jpg", width: 1200, height: 630 },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ژانومه ایران",
  url: "https://iranjanome.ir",
  logo: "https://iranjanome.ir/images/logo.png",
  sameAs: ["https://www.instagram.com/iranjanome.ir/"],
  description: "نماینده انحصاری چرخ خیاطی ژانومه در ایران",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+98-21-66499533",
    contactType: "customer service",
    areaServed: "IR",
    availableLanguage: ["fa", "en"],
  },
};

export default function HomePage() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
