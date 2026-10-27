import Link from "next/link";
import { notFound } from "next/navigation";

import { _allMachines } from "@/data/machines";
import { getTable, getImage } from "@/components/helpers";

export function generateStaticParams() {
  return _allMachines.map(m => ({ model: m.model }));
}

function findMachine(model) {
  return _allMachines.find(m => m.model === model);
}

// SEO NOTE: the exported site had this exact page duplicated at
// /janome-sewing-machine-model/[model]/ with an identical title and
// description, each pointing its own canonical at itself. That tells
// search engines they are two different pages, so neither ranks as well
// as one consolidated page would. Since /janome-sewing-machine-model/
// has the richer content (tabs, downloads), this page's canonical now
// points there instead of at itself, consolidating ranking signals.
// Recommended follow-up: add a real 301 redirect from /products/[model]/
// to /janome-sewing-machine-model/[model]/ at your host/CDN - a static
// export can't issue server redirects on its own.
export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const title = `چرخ خیاطی ${machine.farsi} مدل ${machine.model} | ژانومه ایران`;
  const description = ` چرخ خیاطی ژانومه مدل ${machine.model}`;

  return {
    title,
    description,
    keywords: `چرخ خیاطی ژانومه مدل ${machine.model}, چرخ خیاطی ${machine.machine_type}, چرخ خیاطی ${machine.system}, خرید چرخ خیاطی مدل ${machine.model}, قیمت چرخ خیاطی ژانومه ${machine.model}, ژانومه`,
    alternates: {
      canonical: `https://iranjanome.ir/janome-sewing-machine-model/${machine.model}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://iranjanome.ir/products/${machine.model}/`,
      images: [{ url: `https://iranjanome.ir/${getOGImage(machine)}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `چرخ خیاطی ${machine.farsi} ${machine.model}`,
    image: `https://iranjanome.ir/images/${machine.image[0]}`,
    description: ` چرخ خیاطی ${machine.farsi} مدل ${machine.model} ، ${machine.known_as} ، ${machine.system} ، ${machine.made}`,
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
            چرخ خیاطی {machine.farsi}
            <span className="eng-text"> {machine.model} </span>
          </h1>
          <section className="">{getTable(machine)}</section>
          <Link
            href="/contact"
            className="text-decoration-none"
            style={{ color: "var(--bs-primary)!important" }}
          >
            برای خرید، فروش و یا سرویس با شرکت ایران ژانومه تماس بگیرید
          </Link>
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
