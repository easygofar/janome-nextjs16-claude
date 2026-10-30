import { FiSettings } from "react-icons/fi";

import TopEng from "@/components/topeng";

export const metadata = {
  title: "لوازم یدکی چرخ خیاطی ژانومه | ژانومه ایران",
  description: "فهرست لوازم و قطعات یدکی چرخ خیاطی‌های ژانومه. برای تهیه قطعات و خدمات پس از فروش با نماینده رسمی ژانومه در ایران تماس بگیرید.",
  alternates: {
    canonical: "https://iranjanome.ir/parts/",
    languages: {
      fa: "https://iranjanome.ir/parts/",
      en: "https://iranjanome.ir/en/parts/",
      "x-default": "https://iranjanome.ir/parts/",
    },
  },
  openGraph: {
    title: "لوازم یدکی چرخ خیاطی ژانومه | ژانومه ایران",
    description: "فهرست لوازم و قطعات یدکی چرخ خیاطی‌های ژانومه. برای تهیه قطعات و خدمات پس از فروش با نماینده رسمی ژانومه در ایران تماس بگیرید.",
    url: "https://iranjanome.ir/parts/",
    images: [
      { url: "https://iranjanome.ir/images/background/MC500E_og_image.jpg", width: 1200, height: 630 },
    ],
  },
};

// NOTE: the original page imported agent/state data and had useState/
// useEffect wired up to build a state picker, but never rendered any of
// it - dead code left over from copy-pasting the agents page. None of
// that is needed to reproduce what actually appears on the page, so this
// no longer needs to be a Client Component at all.
export default function PartsPage() {
  return (
    <>
      <TopEng pagetitle="لوازم یدکی">
        <FiSettings size="2.0rem" className="mx-2" />
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
        <div className="w-100 border-radius bg-light p-2">
          <p className="px-5 py-3">
            شرکت ژانومه ایران پس از 50 سال حضور فعال در صنعت دوخت ایران توانسته‌
            است با ارائه خدمات نوین و پویا نیاز سراسری بازار مصرف ایران را با
            نهایت سرعت و بهترین کیفیت پاسخگو باشد. همواره مفتخریم رضایت شما
            مشتریان عزیزی که به مجموعه ما اعتماد نموده‌اید را فراهم سازیم .
          </p>
          <p className="px-5 py-3">
            برای کسب اطلاعات در مورد لوزام یدکی چرخ خیاطی های ژانومه با بخش
            لوازم یدکی شرکت ایران ژانومه با شماره تلفن
            <span className="px-2 text-decoration-underline text-nowrap">
              5 - 66499533
            </span>
            در تهران تماس بگیرید.
          </p>
          <p className="p-5"></p>
          <p className="p-5"></p>
        </div>
      </div>
    </>
  );
}
