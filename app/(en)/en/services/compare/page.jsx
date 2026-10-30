import CompareClientEn from "./compare-client";

export const metadata = {
  title: "Compare Janome Sewing Machines | Iran Janome",
  description: "Compare Janome sewing machine models side by side: features and specifications to help you choose the right machine.",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/compare/",
    languages: {
      fa: "https://iranjanome.ir/services/compare/",
      en: "https://iranjanome.ir/en/services/compare/",
      "x-default": "https://iranjanome.ir/services/compare/",
    },
  },
  openGraph: {
    title: "Compare Janome Sewing Machines | Iran Janome",
    description: "Compare Janome sewing machine models side by side: features and specifications to help you choose the right machine.",
    url: "https://iranjanome.ir/en/services/compare/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ComparePageEn() {
  return <CompareClientEn />;
}
