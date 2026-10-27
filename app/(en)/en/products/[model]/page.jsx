import { notFound } from "next/navigation";

import { _allMachines } from "@/data/machines";
import { getTable, getImage } from "@/components/helpers";

export function generateStaticParams() {
  return _allMachines.map(m => ({ model: m.model }));
}

function findMachine(model) {
  return _allMachines.find(m => m.model === model);
}

// SEO NOTE (important): the original source had
//   <link rel="canonical" href="https://iranjanome.ir/en/products" />
// on every one of these 94 pages - i.e. every English product detail page
// was telling search engines "the real page is the listing, not me."
// That's a canonicalization bug that likely kept every one of these pages
// out of Google's index individually. og:url had the same problem, pointing
// at the *Persian* listing page. Both are fixed below to point at the page
// itself. This is also a duplicate of /en/janome-sewing-machine-model/[model]/
// - see the note on that route's Persian counterpart.
export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const title = `Janome Sewing Machine ${machine.farsi} Model ${machine.model} | Iran Janome`;
  const description = `Janome Sewing Machine ${machine.model}`;

  return {
    title,
    description,
    keywords: `Sewing Machine , Model ${machine.model} , Janome`,
    alternates: {
      canonical: `https://iranjanome.ir/en/janome-sewing-machine-model/${machine.model}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://iranjanome.ir/en/products/${machine.model}/`,
      images: [{ url: `https://iranjanome.ir/${getOGImage(machine)}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPageEn({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${machine.brand} Sewing Machine: ${machine.model}`,
    image: `https://iranjanome.ir/images/${machine.image[0]}`,
    description: `Sewing Machine ${machine.brand} , Model: ${machine.model} ، ${machine.system_eng} ، ${machine.machine_type_eng} ، ${machine.system} ، ${machine.made}`,
    brand: { "@type": "Brand", name: `${machine.farsi}` },
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      url: `https://iranjanome.ir/products/${machine.model}/`,
      price: "0",
      seller: { "@type": "Organization", name: "ژانومه" },
    },
  };

  return (
    <div className="container">
      <section
        id="product-detail"
        className="d-flex flex-md-row flex-column-reverse align-items-start justify-content-center"
      >
        <section className="w-50  text-center p-3">
          <h1 className="mb-3">
            چرخ خیاطی {machine.farsi}{" "}
            <span className="eng-text"> {machine.model} </span>
          </h1>
          <section className="">{getTable(machine)}</section>
        </section>
        <section id="model-image-wrap" className="w-50 p-3">
          <section id="model-image" className="w-100 mt-5 pt-5 position-relative">
            {getImage(machine)}
          </section>
          <hr />
        </section>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}

function getOGImage(data) {
  return `/images/machines/Janome/${data["brand_model"]
    .toLowerCase()
    .replace(/ /g, "")}/${data["brand_model"]
    .toLowerCase()
    .replace(/ /g, "")}-${data["image"]}_og copy.jpg`;
}
