"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { VscClose } from "react-icons/vsc";
import $ from "jquery";

////////////////////////////
import * as ga from "@/lib/ga";

import Loading from "../loading";

const MovieCardEng = ({ obj, onClick }) => {
  const { id, brand, image, brandEng, models, subModels } = obj;
  const image_src = "/images/machines/Janome/" + brandEng + "/" + image;
  useEffect(() => {
    $(".movie-clip").hide(0).removeClass("hide-play").addClass("show-play");
  }, []);

  const showImage = (e) => {
    ga.event({
      action: "showMovie " + e.target.innerText,
      params: {
        search_term: e.target.innerText,
      },
    });

    $(e.target).parents("section").find(".main-image").hide(0);
    $(".movie-clip").hide(50);
    $(e.target).next().show(400);
    $(e.target).parents("section").find(".main-image").show(1000);
  };

  const hideImage = (e) => {
    $(".movie-clip").hide(50);
  };

  return (
    <section
      className=" mt-2 m-2 pb-1 border position-relative"
      style={{
        background: "rgba(255,255,255,1)",
        width: "350px",
        borderRadius: "0.75rem",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-between  w-100 h-100">
        <div className="py-1 fw-bold text-center w-100">
          <h5 className="py-2 fs-5 border-bottom eng-text">
            <span>Janome</span>
            <span className="eng-text">{models[0]["modelNum"]}</span>
          </h5>
          <div>
            <img
              src={image_src}
              width={230}
              height={187}
              className="main-image p-2 mb-2 "
              alt={`${models[0]["modelNum"]} Janome Sewing Machine`}
            />
          </div>
          <div className="py-2">
            {subModels.length > 1 ? (
              <h6 className="text-center eng-content fs-5">
                Training shared for these models
              </h6>
            ) : (
              ""
            )}
            <div className="d-flex flex-wrap p-0 m-2 justify-content-center">
              {subModels.map((md) => {
                let imgsrc = `/images/machines/Janome/${md.brand}/${md.brand}-${md.modelNum}.jpg`;
                return (
                  <div key={md.modelNum}>
                    <button
                      className="btn btn-warning eng-text m-1 py-1"
                      style={{ width: "70px" }}
                      onClick={showImage}
                    >
                      {md.modelNum}
                    </button>
                    <div className="movie-clip hide-play">
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <Loading />
                      </div>
                      <img
                        src={imgsrc}
                        width={300}
                        height={225}
                        alt={`${md.modelNum} Janome Iran`}
                      />
                      <button
                        onClick={() => onClick(id, md.modelNum)}
                        className="btn btn-danger eng-text p-1 px-3"
                      >
                        Play
                      </button>
                      <div>
                        <button
                          onClick={hideImage}
                          className="btn btn-transparent position-absolute top-0 end-0 p-0"
                        >
                          <VscClose size="1.5rem" className="p-0" />
                        </button>
                      </div>
                      <div className="position-absolute top-0 p-0 left-50 eng-text">
                        {md.modelNum}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCardEng;
