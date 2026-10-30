import CompareClient from "./compare-client";

export const metadata = {
  title: "مقایسه مدل‌های چرخ خیاطی ژانومه | ژانومه ایران",
  description: "جدول مقایسه مدل‌های چرخ خیاطی ژانومه؛ ویژگی‌ها و مشخصات چند مدل را کنار هم ببینید و مدل مناسب خود را انتخاب کنید.",
  alternates: {
    canonical: "https://iranjanome.ir/services/compare/",
    languages: {
      fa: "https://iranjanome.ir/services/compare/",
      en: "https://iranjanome.ir/en/services/compare/",
      "x-default": "https://iranjanome.ir/services/compare/",
    },
  },
  openGraph: {
    title: "مقایسه مدل‌های چرخ خیاطی ژانومه | ژانومه ایران",
    description: "جدول مقایسه مدل‌های چرخ خیاطی ژانومه؛ ویژگی‌ها و مشخصات چند مدل را کنار هم ببینید و مدل مناسب خود را انتخاب کنید.",
    url: "https://iranjanome.ir/services/compare/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ComparePage() {
  return <CompareClient />;
}
