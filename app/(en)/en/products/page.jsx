import ProductsClientEn from "./products-client";

export const metadata = {
  title: "Janome Models List | Iran Janome",
  description: "Janome Sewing Machine Models",
  keywords: "Janome models, janome sewing machine, 802P, 802A, 802, 644D, 744D",
  alternates: {
    canonical: "https://iranjanome.ir/en/products/",
    languages: {
      fa: "https://iranjanome.ir/products/",
    },
  },
  openGraph: {
    title: "Janome Models List | Iran Janome",
    description: "Janome Sewing Machine Models",
    url: "https://iranjanome.ir/en/products/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ProductsPageEn() {
  return <ProductsClientEn />;
}
