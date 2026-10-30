import { notFound } from "next/navigation";

import Tab from "@/components/Tab/tab";
import { _allMachines } from "@/data/machines";
import {
  SITE,
  modelSlug,
  modelImagePath,
  modelOgImageUrl,
  productSchema,
  breadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo";

export function generateStaticParams() {
  return _allMachines.map(m => ({ model: modelSlug(m.model) }));
}

function findMachine(slug) {
  return _allMachines.find(m => modelSlug(m.model) === slug);
}

export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const slug = modelSlug(machine.model);
  const title = `Janome ${machine.model} Sewing Machine | Iran Janome`;
  const description = `Specifications and features of the Janome ${machine.model} sewing machine: ${machine.machine_type_eng}, ${machine.system_eng}. Official Iran Janome representative.`;
  const url = `${SITE}/en/janome-sewing-machine-model/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fa: `${SITE}/janome-sewing-machine-model/${slug}/`,
        en: url,
        "x-default": `${SITE}/janome-sewing-machine-model/${slug}/`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_US",
      images: [{ url: modelOgImageUrl(machine), width: 1200, height: 630 }],
    },
  };
}

export default async function ModelDetailPageEn({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  const slug = modelSlug(machine.model);
  const jsonLd = [
    productSchema(machine, "en"),
    breadcrumbSchema([
      ["Home", `${SITE}/en/`],
      ["Products", `${SITE}/en/products/`],
      [`Janome ${machine.model}`, `${SITE}/en/janome-sewing-machine-model/${slug}/`],
    ]),
  ];

  return (
    <div className="container">
      <main
        id="product-detail"
        className="d-flex flex-md-row flex-column-reverse align-items-start justify-content-center"
      >
        <section className="w-50 text-center p-3">
          <h1 className="mb-3 eng-content">
            Janome Sewing Machine {machine.model}
          </h1>
          <section className="">
            <Tab data={machine} />
          </section>
        </section>
        <section id="model-image-wrap" className="w-50 p-3">
          <section id="model-image" className="w-100 mt-5 pt-5 position-relative">
            <img
              src={modelImagePath(machine)}
              alt={`Janome ${machine.model} sewing machine`}
              width="100%"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            />
          </section>
        </section>
      </main>
      <script {...jsonLdScript(jsonLd)} />
    </div>
  );
}
