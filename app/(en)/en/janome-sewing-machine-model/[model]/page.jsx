import { notFound } from "next/navigation";

import Tab from "@/components/Tab/tab";
import { _allMachines } from "@/data/machines";

export function generateStaticParams() {
  return _allMachines.map(m => ({ model: m.model }));
}

function findMachine(model) {
  return _allMachines.find(m => m.model === model);
}

export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const title = `Detail Information of Janome ${machine.model} | Iran Janome`;
  const description = `Specifications and features of the Janome ${machine.model} sewing machine: ${machine.machine_type}, ${machine.system}. Official Iran Janome representative.`;

  return {
    title,
    description,
    keywords: `Janome, ${machine.model} , ${machine.machine_type}, ${machine.brand}, ${machine.system} ,${machine.brand_model}`,
    alternates: {
      canonical: `https://iranjanome.ir/en/janome-sewing-machine-model/${machine.model}/`,
      languages: {
        fa: `https://iranjanome.ir/janome-sewing-machine-model/${machine.model}/`,
        en: `https://iranjanome.ir/en/janome-sewing-machine-model/${machine.model}/`,
        "x-default": `https://iranjanome.ir/janome-sewing-machine-model/${machine.model}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://iranjanome.ir/en/janome-sewing-machine-model/${machine.model}/`,
      images: [{ url: `https://iranjanome.ir${getOGImage(machine)}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ModelDetailPageEn({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  return (
    <div className="container">
      <main
        id="product-detail"
        className="d-flex flex-md-row flex-column-reverse align-items-start justify-content-center"
      >
        <section className="w-50 text-center p-3">
          <h1 className="mb-3 eng-content">
            Janome Sewing Machine
            {machine.model}
          </h1>
          <section className="">
            <Tab data={machine} />
          </section>
        </section>
        <section id="model-image-wrap" className="w-50 p-3">
          <section id="model-image" className="w-100 mt-5 pt-5 position-relative">
            {getImage(machine)}
          </section>
        </section>
      </main>
    </div>
  );
}

const getImage = data => {
  return (
    <img
      src={`/images/machines/Janome/${data["brand_model"]
        .toLowerCase()
        .replace(/ /g, "")}/${data["brand_model"]
        .toLowerCase()
        .replace(/ /g, "")}-${data["image"]}.jpg`}
      alt={`${data.model}  چرخ ژانومه مدل`}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        width: "100%",
      }}
    />
  );
};

function getOGImage(data) {
  return `/images/machines/Janome/${data["brand_model"]
    .toLowerCase()
    .replace(/ /g, "")}/${data["brand_model"]
    .toLowerCase()
    .replace(/ /g, "")}-${data["image"]}_og copy.jpg`;
}
