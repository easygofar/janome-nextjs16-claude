import TrainingClient from "./training-client";

export const metadata = {
  title: " فیلم های آموزشی | ژانومه ایران ",
  description: " فیلم های آموزشی چرخ خیاطی های ژانومه ",
  keywords:
    "آموزش چرخ خیاطی ژانومه, فیلم آموزشی چرخ خیاطی, آموزش کار با مدل‌های ژانومه, راهنمای استفاده از چرخ خیاطی ژانومه, نحوه نخ‌کشی چرخ خیاطی, آموزش تصویری چرخ خیاطی ژانومه, آموزش اولیه خیاطی با چرخ ژانومه",
  alternates: {
    // NOTE: the original canonical/og:url omitted the trailing slash used
    // everywhere else on the site (next.config.js sets trailingSlash: true).
    // Fixed here for consistency.
    canonical: "https://iranjanome.ir/services/training/",
    languages: {
      en: "https://iranjanome.ir/en/services/training/",
    },
  },
  openGraph: {
    title: "فیلم های آموزشی | ژانومه ایران",
    description: " جدول مقایسه مدهای چرخ خیاطی ژانومه ",
    url: "https://iranjanome.ir/services/training/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function TrainingPage() {
  return <TrainingClient />;
}
