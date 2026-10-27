import TrainingClientEn from "./training-client";

export const metadata = {
  title: " Training Movies | Iran Janome ",
  description: " Training Movies for Janome Sewing Machines ",
  keywords: "Janome Sewing Macine, training movies,Hogaro,Juno,New Home, Janome",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/training/",
    languages: {
      fa: "https://iranjanome.ir/services/training/",
    },
  },
  openGraph: {
    title: "Training Movies | Iran Janome",
    description: " Training Movies for Janome Sewing Machines ",
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
