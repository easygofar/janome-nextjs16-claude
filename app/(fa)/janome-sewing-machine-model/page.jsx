import ModelListClient from "./model-list-client";

// SEO NOTE: this listing duplicates /products/ (same machines), so its
// canonical points to /products/ and it is left out of the sitemap.
export const metadata = {
  title: "لیست انواع چرخ خیاطی ژانومه | ژانومه ایران",
  description: "مدل‌های چرخ خیاطی و اورلاک ژانومه با مشخصات فنی و فیلتر بر اساس نوع و ویژگی. نماینده رسمی و انحصاری ژانومه در ایران.",
  alternates: {
    canonical: "https://iranjanome.ir/products/",
  },
  openGraph: {
    title: "لیست انواع چرخ خیاطی ژانومه | ژانومه ایران",
    description: "مدل‌های چرخ خیاطی و اورلاک ژانومه با مشخصات فنی و فیلتر بر اساس نوع و ویژگی. نماینده رسمی و انحصاری ژانومه در ایران.",
    url: "https://iranjanome.ir/products/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ModelListPage() {
  return <ModelListClient />;
}
