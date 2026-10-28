import FaqClient from "./faq-client";

export const metadata = {
  title: "سؤالات متداول فنی | ژانومه ایران",
  description: "سؤال و جواب فنی چرخ خیاطی های ژانومه",
  keywords:
    "سؤالات متداول چرخ خیاطی ژانومه, راهنمای خرید چرخ خیاطی, نحوه تعمیر چرخ خیاطی ژانومه, پاسخ به مشکلات چرخ خیاطی, سوالات رایج ژانومه, مشکلات چرخ خیاطی و راه‌حل‌ها, نکات نگهداری چرخ خیاطی ژانومه",
  alternates: {
    canonical: "https://iranjanome.ir/faq/",
    // NOTE: the original pointed this at /en/faq/, which doesn't exist -
    // the English FAQ actually lives at /en/services/faq/. Fixed here.
    languages: {
      fa: "https://iranjanome.ir/faq/",
      en: "https://iranjanome.ir/en/services/faq/",
      "x-default": "https://iranjanome.ir/faq/",
    },
  },
  openGraph: {
    title: "سؤالات متداول فنی | ژانومه ایران",
    description: "سؤال و جواب فنی چرخ خیاطی های ژانومه",
    url: "https://iranjanome.ir/faq/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
