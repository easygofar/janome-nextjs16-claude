import { FiSettings } from "react-icons/fi";

import TopEng from "@/components/topeng";

export const metadata = {
  title: "Spare Part | Iran Janome",
  description: "ُPare parts for Janome Sewing machines",
  keywords: "spare parts, janome sewing machine, after sales",
  alternates: {
    canonical: "https://iranjanome.ir/en/parts/",
    languages: {
      fa: "https://iranjanome.ir/parts/",
    },
  },
  openGraph: {
    title: "Spare Part | Iran Janome",
    description: "Pare parts for Janome Sewing machines",
    url: "https://iranjanome.ir/en/parts/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

export default function PartsPageEn() {
  return (
    <>
      <TopEng pagetitle="Spare Parts">
        <FiSettings size="2rem" color="#f00" className="mx-2" />
      </TopEng>

      <div className="main-backcolor spare-parts border p-5 w-100">
        <div className="w-100 d-flex justify-content-center bg-light p-5">
          <img
            src="/images/machines/janome-sewing-machine-essential-parts.png"
            width={550}
            height={550}
            alt="janome sewing machine essential parts"
          />
        </div>
        <div className="w-100 border-radius bg-light p-2 text-start eng-content fs-3 ">
          <p className="px-5 py-3">
            Iran Janome company, with 50 years active presence in sewing market,
            has been able to provide first class services and supply consumer
            market in a timely and adquate manner. We are proud to serve our
            customers who have trusted us.
          </p>
          <p className="px-5 py-3">
            Please contact our spare parts section for any required parts you
            may need.
            <span className="px-2 text-decoration-underline text-nowrap">
              Tel: +9821 66499533-5
            </span>
          </p>
          <p className="p-5"></p>
          <p className="p-5"></p>
        </div>
      </div>
    </>
  );
}
