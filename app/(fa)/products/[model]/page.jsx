import Link from "next/link";
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

// SEO NOTE: this page duplicates /janome-sewing-machine-model/[model]/, so its
// canonical points there. A static export cannot issue server redirects:
// add the 301 redirects listed in /redirects.txt at your host/CDN.
// The page is kept (rather than deleted) so old links keep working.
export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const slug = modelSlug(machine.model);
  const title = `چرخ خیاطی ${machine.farsi} مدل ${machine.model} | ژانومه ایران`;
  const description = `مشخصات چرخ خیاطی ${machine.farsi} مدل ${machine.model}؛ ${machine.machine_type}، سیستم ${machine.system}. برای خرید و سرویس با ژانومه ایران تماس بگیرید.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}/janome-sewing-machine-model/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/janome-sewing-machine-model/${slug}/`,
      images: [{ url: modelOgImageUrl(machine), width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
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
      {/* Same Product entity as the canonical page, so signals consolidate. */}
      <script {...jsonLdScript(productSchema(machine, "fa"))} />
    </div>
  );
}
