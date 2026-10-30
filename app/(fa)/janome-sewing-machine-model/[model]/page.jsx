import { notFound } from "next/navigation";

import Tab from "@/components/Tab/tab";
import { _allMachines } from "@/data/machines";
import { getImage } from "@/components/helpers";
import {
  SITE,
  modelSlug,
  modelOgImageUrl,
  productSchema,
  breadcrumbSchema,
  jsonLdScript,
} from "@/lib/seo";

// One static page per machine model, generated at build time.
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
  const title = `چرخ خیاطی ${machine.farsi} مدل ${machine.model} | ژانومه ایران`;
  const description = `مشخصات و ویژگی‌های چرخ خیاطی ${machine.farsi} مدل ${machine.model}؛ ${machine.machine_type}، سیستم ${machine.system}. نمایندگی رسمی ژانومه ایران.`;
  const url = `${SITE}/janome-sewing-machine-model/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fa: url,
        en: `${SITE}/en/janome-sewing-machine-model/${slug}/`,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "fa_IR",
      images: [{ url: modelOgImageUrl(machine), width: 1200, height: 630 }],
    },
  };
}

export default async function ModelDetailPage({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  const slug = modelSlug(machine.model);
  const jsonLd = [
    productSchema(machine, "fa"),
    breadcrumbSchema([
      ["خانه", `${SITE}/`],
      ["محصولات", `${SITE}/products/`],
      [
        `چرخ خیاطی ${machine.farsi} ${machine.model}`,
        `${SITE}/janome-sewing-machine-model/${slug}/`,
      ],
    ]),
  ];

  return (
    <div className="container">
      <main
        id="product-detail"
        className="d-flex flex-md-row flex-column-reverse align-items-start justify-content-center"
      >
        <section className="w-50 text-center p-3">
          <h1 className="mb-3">
            چرخ خیاطی {machine.farsi}
            <span className="eng-text">{machine.model}</span>
          </h1>
          <section className="">
            <Tab data={machine} />
          </section>
        </section>
        <section id="model-image-wrap" className="w-50 p-3">
          <section id="model-image" className="w-100 mt-5 pt-5">
            {getImage(machine)}
          </section>
          <hr />
        </section>
      </main>
      <script {...jsonLdScript(jsonLd)} />
    </div>
  );
}
