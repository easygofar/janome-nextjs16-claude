import ModelListClient from "./model-list-client";

// SEO NOTE: this page and /products/ render the exact same 94 machines with
// near-identical titles and descriptions in the source. That's duplicate
// content at the listing level, on top of the per-model duplicate covered
// in app/(fa)/products/[model]/page.jsx. Worth deciding which listing is
// canonical (or merging them) rather than shipping both as-is.
export const metadata = {
  title: "لیست انواع چرخ خیاطی\u200cهای ژانومه | ژانومه ایران ",
  description: " لیست چرخ خیاطی های ژانومه ",
  alternates: {
    canonical: "https://iranjanome.ir/janome-sewing-machine-model/",
    languages: {
      en: "https://iranjanome.ir/en/janome-sewing-machine-model/",
    },
  },
  openGraph: {
    title: "لیست انواع چرخ خیاطی\u200cهای ژانومه | ژانومه ایران",
    description: " لیست چرخ خیاطی های ژانومه ",
    url: "https://iranjanome.ir/janome-sewing-machine-model/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function ModelListPage() {
  return <ModelListClient />;
}
