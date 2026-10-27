import { notFound } from "next/navigation";

import Tab from "@/components/Tab/tab";
import { _allMachines } from "@/data/machines";
import { getImage } from "@/components/helpers";

// Replaces getStaticPaths - one static page per machine model, at build time.
export function generateStaticParams() {
  return _allMachines.map(m => ({ model: m.model }));
}

function findMachine(model) {
  return _allMachines.find(m => m.model === model);
}

// Replaces getStaticProps + the <Head> block.
export async function generateMetadata({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) return {};

  const title = `چرخ خیاطی ${machine.farsi} مدل ${machine.model} | ژانومه ایران`;
  const description = ` چرخ خیاطی ژانومه مدل ${machine.model}`;

  return {
    title,
    description,
    keywords: `چرخ خیاطی ژانومه , ژانومه , مدل ${machine.model} , ${machine.machine_type}, ${machine.brand}, ${machine.system}`,
    alternates: {
      canonical: `https://iranjanome.ir/janome-sewing-machine-model/${machine.model}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://iranjanome.ir/janome-sewing-machine-model/${machine.model}/`,
      images: [{ url: `https://iranjanome.ir/${getOGImage(machine)}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ModelDetailPage({ params }) {
  const { model } = await params;
  const machine = findMachine(model);
  if (!machine) notFound();

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `چرخ خیاطی ${machine.farsi} ${machine.model}`,
    image: `https://iranjanome.ir/images/machines/${machine.image[0]}`,
    description: ` چرخ خیاطی ${machine.farsi} مدل ${machine.model} ، ${machine.known_as} ، ${machine.system} ، ${machine.made}`,
    brand: {
      "@type": "Brand",
      name: `${machine.farsi}`,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        "برند\t": machine["brand"],
        "نوع ماشین\t": machine["machine_type"],
        "مدل\t": machine["model"],
        "سیستم\t": machine["system"],
        "کشور سازنده": machine["made"],
        "فرم اسکلت چرخ\t": machine["machine_frame"],
        "معروف به": machine["known_as"],
        "تعداد نوع دوخت": machine["num_stich_type"],
        "عرض دوخت میلیمتر": machine["stich_width_mm"],
        "تعداد ولوم": machine["num_nob"],
        "درجه عرض و طول دوخت": machine["wth_hth_gauge"],
        "سوزن نخ کن": machine["needle_threading"],
        "درب و جعبه": machine["box_case"],
        "صفحه مانیتور": machine["lcd_monitor"],
        "سرنخ زن اتومات": machine["auto_self_threading"],
        "توانائی دوخت حروف": machine["letter_sewing"],
        "صفحه بازوی اتوماتیک": machine["auto_arm_panel"],
        "قابلیت اتصال به کامپیوتر": machine["pc_connection"],
        "تعداد سوزن": machine["num_needle"],
        "تیغ پاک دوزی": machine["blade_cleaner"],
      },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "IRR",
      price: "0",
      seller: {
        "@type": "Organization",
        name: "ژانومه",
      },
    },
  };

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
