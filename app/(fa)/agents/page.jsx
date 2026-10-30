import AgentsClient from "./agents-client";

export const metadata = {
  title: "نمایندگی‌های مجاز چرخ خیاطی ژانومه در ایران | ژانومه ایران",
  description: "فهرست نمایندگی‌های رسمی فروش و خدمات پس از فروش چرخ خیاطی ژانومه در ایران. نزدیک‌ترین نمایندگی مجاز را پیدا کنید.",
  alternates: {
    canonical: "https://iranjanome.ir/agents/",
    languages: {
      fa: "https://iranjanome.ir/agents/",
      "x-default": "https://iranjanome.ir/agents/",
    },
  },
  openGraph: {
    title: "نمایندگی‌های مجاز چرخ خیاطی ژانومه در ایران | ژانومه ایران",
    description: "فهرست نمایندگی‌های رسمی فروش و خدمات پس از فروش چرخ خیاطی ژانومه در ایران. نزدیک‌ترین نمایندگی مجاز را پیدا کنید.",
    url: "https://iranjanome.ir/agents/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function AgentsPage() {
  return <AgentsClient />;
}
