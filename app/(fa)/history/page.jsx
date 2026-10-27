import HistoryClient from "./history-client";

export const metadata = {
  title: " تاریخ شرکت ژانومه | ژانومه ایران ",
  description: " تاریخ شرکت ژانومه ژاپن ",
  keywords: "چرخ خیاطی ژانومه , تاریخ شرکت ژانومه",
  alternates: {
    canonical: "https://iranjanome.ir/history/",
    languages: {
      en: "https://iranjanome.ir/en/history/",
    },
  },
  openGraph: {
    title: "تاریخ شرکت ژانومه | ژانومه ایران",
    description: " تاریخ شرکت ژانومه ژاپن ",
    url: "https://iranjanome.ir/history/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function HistoryPage() {
  return <HistoryClient />;
}
