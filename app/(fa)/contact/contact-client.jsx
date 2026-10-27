"use client";

import { useState } from "react";
import { RiMapPinRangeLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

import Loading from "@/components/loading";
import * as ga from "@/lib/ga";
import TopEng from "@/components/topeng";

const mbutton = {
  false: "مشاهده محدوده طرح ترافیک",
  true: "مشاهده نقشه مکان",
};

export default function ContactClient() {
  const [showTraficMap, setShowTraficMap] = useState(false);

  const handleChange = () => {
    ga.event({
      action: "change map",
      params: {
        search_term: !showTraficMap,
      },
    });
    setShowTraficMap(!showTraficMap);
  };

  return (
    <>
      <TopEng pagetitle="اطلاعات تماس">
        <RiMapPinRangeLine size="2.0rem" className="mx-2" />
      </TopEng>
      {!showTraficMap ? (
        <section className="d-flex justify-content-center align-items-center main-backcolor p-5 position-relative">
          <div
            id="spinner"
            className="position-absolute rouded-3"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              zIndex: "0",
            }}
          >
            <Loading text="در حال بار گذاری نقشه ..." />
          </div>
          <iframe
            src="https://balad.ir/embed?p=PX2Xpbwr1H2L6k"
            title="مشاهده «ساختمان تجاری و اداری سجاد» روی نقشه بلد"
            style={{ width: "100%", border: "0", zIndex: "50" }}
            height={450}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            className="border border-2 "
          ></iframe>
        </section>
      ) : (
        <ImageTrafic />
      )}
      <section className=" p-5 h-100" style={{ marginBottom: "3.0rem" }}>
        <div className="row bg-white">
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-between align-items-center flex-column">
                <h5 className="card-title">آدرس</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <RiMapPinRangeLine size="1.5rem" color="#FF7800" />
                </h6>
                <p className="card-text text-center">
                  تهران – خیابان جمهوری - ساختمان سجاد - پلاک 945
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">تلفن تهران</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <ImPhone size="1.2rem" color="#FF7800" />
                </h6>
                <p className="card-text">5 - 66499533 </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">فکس تهران</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <FaFax size="1.2rem" color="#FF7800" />
                </h6>
                <p className="card-text">66499536 </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title">ایمیل</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <MdEmail size="1.2rem" color="#FF7800" />
                </h6>
                <p className="card-text">info(@)iranjanome.ir</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ImageTrafic = () => (
  <div id="traffic-zone-wrap">
    <img
      src="/images/traffic-lines-tehran.jpg"
      width={900}
      height={450}
      style={{ border: "0" }}
      id="traffic-zone-image"
      alt="tehran trafic lines"
    />
  </div>
);
