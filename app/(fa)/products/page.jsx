import ProductsClient from "./products-client";

export const metadata = {
  title: "لیست انواع چرخ خیاطی ژانومه | ژانومه ایران",
  description: "مدل‌های چرخ خیاطی و اورلاک ژانومه با مشخصات فنی و فیلتر بر اساس نوع و ویژگی. نماینده رسمی و انحصاری ژانومه در ایران.",
  alternates: {
    canonical: "https://iranjanome.ir/products/",
    languages: {
      fa: "https://iranjanome.ir/products/",
      en: "https://iranjanome.ir/en/products/",
      "x-default": "https://iranjanome.ir/products/",
    },
  },
  openGraph: {
    title: "لیست انواع چرخ خیاطی ژانومه | ژانومه ایران",
    description: "مدل‌های چرخ خیاطی و اورلاک ژانومه با مشخصات فنی و فیلتر بر اساس نوع و ویژگی. نماینده رسمی و انحصاری ژانومه در ایران.",
    // NOTE: the original page had this pointed at /parts/ - almost
    // certainly copy-pasted from the parts page. Fixed to point at itself.
    url: "https://iranjanome.ir/products/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
