import FaqClientEn from "./faq-client";

export const metadata = {
  title: "FAQ | Iran Janome",
  description: "Frequently Asked Question",
  keywords: "FAQ, questions, Iran Janome",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/faq/",
    languages: {
      fa: "https://iranjanome.ir/services/faq/",
      en: "https://iranjanome.ir/en/services/faq/",
      "x-default": "https://iranjanome.ir/services/faq/",
    },
  },
  openGraph: {
    title: "FAQ | Iran Janome",
    description: "Frequently Asked Question",
    url: "https://iranjanome.ir/en/services/faq/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function FaqPageEn() {
  return <FaqClientEn />;
}
