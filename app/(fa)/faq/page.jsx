import FaqClient from "./faq-client";
import { faqContent } from "@/data/machines";
import { faqSchema, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "سؤالات متداول فنی چرخ خیاطی ژانومه | ژانومه ایران",
  description: "پاسخ سؤالات متداول فنی درباره چرخ خیاطی ژانومه؛ از علت شکستن سوزن و تعویض سوزن تا مشکلات رایج دوخت.",
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
    title: "سؤالات متداول فنی چرخ خیاطی ژانومه | ژانومه ایران",
    description: "پاسخ سؤالات متداول فنی درباره چرخ خیاطی ژانومه؛ از علت شکستن سوزن و تعویض سوزن تا مشکلات رایج دوخت.",
    url: "https://iranjanome.ir/faq/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function FaqPage() {
  return (
    <>
      <FaqClient />
      <script {...jsonLdScript(faqSchema(faqContent))} />
    </>
  );
}
