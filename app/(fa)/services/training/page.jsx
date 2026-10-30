import TrainingClient from "./training-client";

export const metadata = {
  title: "فیلم‌های آموزشی چرخ خیاطی ژانومه | ژانومه ایران",
  description: "فیلم‌های آموزشی کار با مدل‌های مختلف چرخ خیاطی ژانومه برای یادگیری قدم‌به‌قدم استفاده و نگهداری دستگاه.",
  alternates: {
    // NOTE: the original canonical/og:url omitted the trailing slash used
    // everywhere else on the site (next.config.js sets trailingSlash: true).
    // Fixed here for consistency.
    canonical: "https://iranjanome.ir/services/training/",
    languages: {
      fa: "https://iranjanome.ir/services/training/",
      en: "https://iranjanome.ir/en/services/training/",
      "x-default": "https://iranjanome.ir/services/training/",
    },
  },
  openGraph: {
    title: "فیلم‌های آموزشی چرخ خیاطی ژانومه | ژانومه ایران",
    description: "فیلم‌های آموزشی کار با مدل‌های مختلف چرخ خیاطی ژانومه برای یادگیری قدم‌به‌قدم استفاده و نگهداری دستگاه.",
    url: "https://iranjanome.ir/services/training/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function TrainingPage() {
  return <TrainingClient />;
}
