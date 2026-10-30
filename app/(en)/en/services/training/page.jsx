import TrainingClientEn from "./training-client";

export const metadata = {
  title: "Janome Training Videos | Iran Janome",
  description: "Training videos for Janome sewing machines: learn to use and look after different models, step by step.",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/training/",
    languages: {
      fa: "https://iranjanome.ir/services/training/",
      en: "https://iranjanome.ir/en/services/training/",
      "x-default": "https://iranjanome.ir/services/training/",
    },
  },
  openGraph: {
    title: "Janome Training Videos | Iran Janome",
    description: "Training videos for Janome sewing machines: learn to use and look after different models, step by step.",
    // NOTE: original og:url pointed at the Persian /services/training/ page.
    // Fixed to point at this English page.
    url: "https://iranjanome.ir/en/services/training/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function TrainingPageEn() {
  return <TrainingClientEn />;
}
