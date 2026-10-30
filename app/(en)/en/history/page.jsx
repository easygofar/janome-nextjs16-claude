import HistoryClient from "./history-client";

export const metadata = {
  title: "Janome History | Iran Janome",
  description: "The history of Janome, the Japanese sewing machine maker. Iran Janome is its official exclusive dealer in Iran.",
  alternates: {
    canonical: "https://iranjanome.ir/en/history/",
    languages: {
      fa: "https://iranjanome.ir/history/",
      en: "https://iranjanome.ir/en/history/",
      "x-default": "https://iranjanome.ir/history/",
    },
  },
  openGraph: {
    title: "Janome History | Iran Janome",
    description: "The history of Janome, the Japanese sewing machine maker. Iran Janome is its official exclusive dealer in Iran.",
    url: "https://iranjanome.ir/en/history/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function HistoryPageEn() {
  return <HistoryClient />;
}
