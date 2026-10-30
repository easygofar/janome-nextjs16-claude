import ProductsClientEn from "./products-client";

export const metadata = {
  title: "Janome Sewing Machine Models | Iran Janome",
  description: "Browse Janome sewing machine and serger models offered by Iran Janome, with specifications and filters by type and features.",
  alternates: {
    canonical: "https://iranjanome.ir/en/products/",
    languages: {
      fa: "https://iranjanome.ir/products/",
      en: "https://iranjanome.ir/en/products/",
      "x-default": "https://iranjanome.ir/products/",
    },
  },
  openGraph: {
    title: "Janome Sewing Machine Models | Iran Janome",
    description: "Browse Janome sewing machine and serger models offered by Iran Janome, with specifications and filters by type and features.",
    url: "https://iranjanome.ir/en/products/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ProductsPageEn() {
  return <ProductsClientEn />;
}
