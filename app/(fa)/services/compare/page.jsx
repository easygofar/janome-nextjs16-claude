import CompareClient from "./compare-client";

export const metadata = {
  title: " مقایسه محصولات | ژانومه ایران ",
  description: " جدول مقایسه مدهای چرخ خیاطی ژانومه ",
  keywords:
    "مقایسه چرخ خیاطی ژانومه, تفاوت مدل‌های ژانومه, راهنمای انتخاب چرخ خیاطی ژانومه, بررسی فنی چرخ خیاطی, بهترین مدل چرخ خیاطی ژانومه, چرخ خیاطی حرفه‌ای یا خانگی, مقایسه قیمت چرخ خیاطی ژانومه",
  alternates: {
    canonical: "https://iranjanome.ir/services/compare/",
    languages: {
      fa: "https://iranjanome.ir/services/compare/",
      en: "https://iranjanome.ir/en/services/compare/",
      "x-default": "https://iranjanome.ir/services/compare/",
    },
  },
  openGraph: {
    title: "مقایسه محصولات | ژانومه ایران",
    description: " جدول مقایسه مدهای چرخ خیاطی ژانومه ",
    url: "https://iranjanome.ir/services/compare/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ComparePage() {
  return <CompareClient />;
}
