import AgentsClient from "./agents-client";

export const metadata = {
  title: "لیست نمایندگی ها مجاز چرخ خیاطی های ژانومه | ژانومه ایران",
  description: "نمایندگی های رسمی فروش و سرویس چرخ خیاطی های ژانومه در ایران",
  keywords: "چرخ خیاطی ژانومه , نمایندگی های مجاز",
  alternates: {
    canonical: "https://iranjanome.ir/agents/",
    languages: {
      en: "https://iranjanome.ir/en/agents/",
    },
  },
  openGraph: {
    title: "لیست نمایندگی ها مجاز چرخ خیاطی های ژانومه | ژانومه ایران",
    description: "نمایندگی های رسمی فروش و سرویس چرخ خیاطی های ژانومه در ایران",
    url: "https://iranjanome.ir/agents/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function AgentsPage() {
  return <AgentsClient />;
}
