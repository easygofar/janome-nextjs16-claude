"use client";

import { useState } from "react";
import { RiMapPinRangeLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

import Loading from "@/components/loading";
import * as ga from "@/lib/ga";
import TopEng from "@/components/topeng";

export default function ContactClientEn() {
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
      <TopEng pagetitle="Contact">
        <RiMapPinRangeLine size="2.0rem" className="mx-2" />
      </TopEng>
      {!showTraficMap ? (
        <section className="d-flex justify-content-between align-items-center main-backcolor p-5 position-relative">
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
            <Loading text="Loading map..." />
          </div>
          <iframe
            src="https://balad.ir/embed?p=PX2Xpbwr1H2L6k"
            title="View Sajjad Building on Balad Map"
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
      <section className="p-5 mh-100" style={{ marginBottom: "3.0rem" }}>
        <div className="row bg-white">
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-between align-items-center flex-column">
                <h5 className="card-title">Address</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <RiMapPinRangeLine size="1.5rem" color="#FF7800" />
                </h6>
                <p className="card-text text-center">
                  No. 945, Jomhouri Islami St., Tehran
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-between align-items-center flex-column">
                <h5 className="card-title">Phone</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <ImPhone size="1.2rem" color="#FF7800" />
                </h6>
                <p className="card-text">+9821-66499533 -5</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-between align-items-center flex-column">
                <h5 className="card-title">Fax</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  <FaFax size="1.2rem" color="#FF7800" />
                </h6>
                <p className="card-text">+9821-66499536</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6" style={{ marginBottom: "2.0rem" }}>
            <div className="card h-100">
              <div className="card-body d-flex justify-content-between align-items-center flex-column">
                <h5 className="card-title">Email</h5>
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
