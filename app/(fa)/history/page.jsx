import HistoryClient from "./history-client";

export const metadata = {
  title: "تاریخچه ژانومه ژاپن | ژانومه ایران",
  description: "تاریخچه شرکت ژانومه ژاپن، سازنده چرخ خیاطی‌های ژانومه. ژانومه ایران نماینده رسمی و انحصاری این برند در ایران است.",
  alternates: {
    canonical: "https://iranjanome.ir/history/",
    languages: {
      fa: "https://iranjanome.ir/history/",
      en: "https://iranjanome.ir/en/history/",
      "x-default": "https://iranjanome.ir/history/",
    },
  },
  openGraph: {
    title: "تاریخچه ژانومه ژاپن | ژانومه ایران",
    description: "تاریخچه شرکت ژانومه ژاپن، سازنده چرخ خیاطی‌های ژانومه. ژانومه ایران نماینده رسمی و انحصاری این برند در ایران است.",
    url: "https://iranjanome.ir/history/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function HistoryPage() {
  return <HistoryClient />;
}
