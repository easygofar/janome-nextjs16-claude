import CompareClientEn from "./compare-client";

export const metadata = {
  title: " Compare Janome Models | Iran Janome ",
  description: " Compare Janome Sewing Machines ",
  keywords: "sewing machine,janome sewing machine,Juno,New Home, Janome",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/compare/",
    languages: {
      fa: "https://iranjanome.ir/services/compare/",
    },
  },
  openGraph: {
    title: "Compare Janome Models | Iran Janome",
    description: " Compare Janome Sewing Machines ",
    url: "https://iranjanome.ir/en/services/compare/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ComparePageEn() {
  return <CompareClientEn />;
}
