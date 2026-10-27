import ProductsClient from "./products-client";

export const metadata = {
  title: "لیست انواع چرخ خیاطی های ژانومه | ژانومه ایران ",
  description: " لیست چرخ خیاطی های ژانومه ",
  keywords:
    "چرخ خیاطی ژانومه, مدل‌های چرخ خیاطی ژانومه, چرخ خیاطی برقی ژانومه, چرخ خیاطی ژاپنی, چرخ خیاطی گلدوزی, چرخ خیاطی کاوری مدل عروس, چرخ خیاطی بازویی, چرخ خیاطی کف تخت, چرخ خیاطی کامپیوتری ژانومه, چرخ خیاطی صنعتی ژانومه",
  alternates: {
    canonical: "https://iranjanome.ir/products/",
    languages: {
      en: "https://iranjanome.ir/en/products/",
    },
  },
  openGraph: {
    title: "لیست انواع چرخ خیاطی های ژانومه | ژانومه ایران",
    description: " لیست چرخ خیاطی های ژانومه ",
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
