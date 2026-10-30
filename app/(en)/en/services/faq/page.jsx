import FaqClientEn from "./faq-client";
import { faqContentEng } from "@/data/machines";
import { faqSchema, jsonLdScript } from "@/lib/seo";

export const metadata = {
  title: "Janome Sewing Machine FAQ | Iran Janome",
  description: "Answers to frequently asked technical questions about Janome sewing machines, such as why needles break and how to change them.",
  alternates: {
    canonical: "https://iranjanome.ir/en/services/faq/",
    languages: {
      fa: "https://iranjanome.ir/faq/",
      en: "https://iranjanome.ir/en/services/faq/",
      "x-default": "https://iranjanome.ir/faq/",
    },
  },
  openGraph: {
    title: "Janome Sewing Machine FAQ | Iran Janome",
    description: "Answers to frequently asked technical questions about Janome sewing machines, such as why needles break and how to change them.",
    url: "https://iranjanome.ir/en/services/faq/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function FaqPageEn() {
  return (
    <>
      <FaqClientEn />
      <script {...jsonLdScript(faqSchema(faqContentEng))} />
    </>
  );
}
