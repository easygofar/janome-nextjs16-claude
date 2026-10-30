import { notFound } from "next/navigation";

import { _allMachines } from "@/data/machines";
import { getTable, getImage } from "@/components/helpers";
import {
  SITE,
  modelSlug,
  modelOgImageUrl,
  productSchema,
  jsonLdScript,
} from "@/lib/seo";

export function generateStaticParams() {
  return _allMachines.map(m => ({ model: modelSlug(m.model) }));
}

function findMachine(slug) {
  return _allMachines.find(m => modelSlug(m.model) === slug);
}

// SEO NOTE: duplicate of /en/janome-sewing-machine-model/[model]/, so the
// canonical points there. Add the 301 redirects from /redirects.txt at your
// host/CDN (a static export cannot redirect on its own).
export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const slug = modelSlug(machine.model);
  const title = `Janome ${machine.model} Sewing Machine | Iran Janome`;
  const description = `Janome ${machine.model} sewing machine: ${machine.machine_type_eng}, ${machine.system_eng}. Official Iran Janome representative.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}/en/janome-sewing-machine-model/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/en/janome-sewing-machine-model/${slug}/`,
      images: [{ url: modelOgImageUrl(machine), width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPageEn({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  return (
    <div className="container">
      <section
        id="product-detail"
        className="d-flex flex-md-row flex-column-reverse align-items-start justify-content-center"
      >
        <section className="w-50  text-center p-3">
          <h1 className="mb-3 eng-content">
            Janome Sewing Machine {machine.model}
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
      <script {...jsonLdScript(productSchema(machine, "en"))} />
    </div>
  );
}
