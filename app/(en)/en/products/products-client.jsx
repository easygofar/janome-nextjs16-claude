"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiSewingMachine } from "react-icons/gi";
import { BsFilter } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import _ from "lodash";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import { _allMachines, _filters_eng } from "@/data/machines";
import Search from "@/components/Search/search";
import Detail from "@/components/Products/Detail";
import * as ga from "@/lib/ga";
import { modelSlug } from "@/lib/slug";
import FiltersEng from "@/components/Products/Filterseng";
import TopEng from "@/components/topeng";

const allMachines = _allMachines;
const filters = _filters_eng;

const Products = () => {
  const [filteredMachines, setFilteredMachines] = useState(allMachines);
  const [filter, setFilter] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [position, setPosition] = useState(0);
  const [visibility, setVisibility] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const scroll = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // if (!searchKey) return;
    const found = allMachines.filter(
      (am) => am["model"].indexOf(searchKey) > -1
    );
    setFilteredMachines(() => found);
  }, [searchKey]);

  useEffect(() => {
    let selectedMachines = [];
    if (_.isEmpty(filter)) {
      setFilteredMachines(() => allMachines);
      return;
    }

    Object.keys(filter).forEach((key) => {
      let arr;
      filter[key].forEach((value) => {
        arr = _.filter(allMachines, [key, value]);
        selectedMachines.push(arr);
      });
      const duplicates = _.countBy(selectedMachines.flat(), "model");
      const filtered = selectedMachines
        .flat()
        .filter(
          (item) => duplicates[item["model"]] >= Object.keys(filter).length
        );

      const _filtered = _.uniqWith(filtered, _.isEqual);
      setFilteredMachines(_filtered);
      if (_filtered.length) {
        toast.success(`${_filtered.length} sewing machine(s) found.`, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          // draggable: true,
          // progress: undefined,
        });
      }
    });
    $("#filtered-machine").fadeIn("slow");
  }, [filter]);

  const handleSearch = (e) => {
    setSearchKey(e.target.value.toUpperCase());
  };

  const handleClick = (e, k, v) => {
    e.stopPropagation();
    setFilteredMachines([]);

    const copyFilter = { ...filter };

    if (k === "available" && !v) {
      delete copyFilter[k];
      setFilter(() => copyFilter);
      return;
    }

    if (filter[k] && filter[k].indexOf(v) > -1) {
      let tmpFilterArray = [...copyFilter[k]];
      _.remove(tmpFilterArray, (value) => value === v);
      copyFilter[k] = [...tmpFilterArray];
      if (!tmpFilterArray.length) delete copyFilter[k];
      setFilter(() => copyFilter);
      return;
    }

    let item = { [k]: [v] };
    if (filter[k]) {
      item = { [k]: [...filter[k], v] };
    }
    // filteredMachines.length
    $("#filtered-machine").hide();
    setFilter({ ...filter, ...item });
    setPosition(0);
  };

  const handleSwitchChange = (e) => {
    const value = e.target.checked;
    handleClick(e, "available", value);
    setSwitchValue(value);
  };
  const handleClearAllFilters = () => {
    ga.event({
      action: "clearAllFilters",
      params: {
        search_term: "",
      },
    });

    setFilter({});
    setSearchKey("");
  };

  const handleCompareClick = () => {
    router.push("/services/compare");
  };

  const handleClearSearchKey = () => {
    ga.event({
      action: "clearSearch",
      params: {
        search_term: searchKey,
      },
    });

    if (!searchKey) return;
    setSearchKey("");
    setFilteredMachines(() => allMachines);
  };

  const toggleCheckbox = (filter, k, v) =>
    filter[k] && filter[k].indexOf(v[k]) > -1;

  const showFilters = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      {/* Structured Data (JSON-LD) */}
      {/* 1st row */}

      <TopEng pagetitle="Janome Models">
        <GiSewingMachine size="2.0rem" color="#f00" className="mx-2" />
      </TopEng>

      {/* 2nd row */}

      <div id="row-two" className="row  main-backcolor w-100 m-0 py-3 border">
        <ToastContainer />
        <div id="modal-filters" className="d-flex justify-content-start">
          <button
            className="btn btn-danger text-nowrap eng-content p-2 mx-2"
            onClick={showFilters}
          >
            <BsFilter size="1.3rem" color="#fff" />
            <span className="mx-2"> Filter </span>
          </button>

          <button
            className="btn btn-danger text-nowrap eng-content p-2 mx-2"
            onClick={handleClearAllFilters}
          >
            {filter.length ? filter.length : <span>&nbsp;</span>}
            Clear Filters {filter.length ? filter.length : ""}
          </button>
        </div>
        <div id="column-one" className="col-5 col-sm-5 col-lg-4 col-xl-3">
          <FiltersEng
            filter={filter}
            filters={filters}
            allMachines={allMachines}
            switchValue={switchValue}
            handleClick={handleClick}
            toggleCheckbox={toggleCheckbox}
            filteredMachines={filteredMachines}
            handleSwitchChange={handleSwitchChange}
            handleClearAllFilters={handleClearAllFilters}
          />
        </div>
        <div
          id="machine-column"
          className="col-5 col-sm-7 col-lg-8 col-xl-9 p-0 d-flex flex-column jusfify-content-start"
        >
          <section className="d-flex flex-column align-items-center">
            <h2 className="mb-2 eng-content fs-3">Search Model Number</h2>
            <div className="pb-3 d-flex align-items-center">
              <div className=" px-1">
                <Search
                  searchKey={searchKey}
                  onChange={handleSearch}
                  onClick={handleClearSearchKey}
                  eng={true}
                />
              </div>
            </div>
          </section>
          <div
            className="row justify-content-center eng-content fs-5"
            id="filtered-machine"
            ref={scroll}
          >
            {filteredMachines.map((fm) => {
              let image =
                "/images/machines/Janome/" +
                fm["brand_model"].toLowerCase().replace(/ /g, "") +
                "/" +
                fm["brand_model"].toLowerCase().replace(/ /g, "") +
                "-" +
                fm["image"] +
                ".jpg";

              return (
                <div
                  className="col-xl-3 col-sm-5 col-xs-12 p-1 m-2 mt-2 machine-col-inner"
                  style={{
                    border: "1px solid rgba(100,100,100,0.1)",
                    borderRadius: "0.75rem",
                    background: "#fff",
                  }}
                  key={uuidv4()}
                >
                  <p
                    className="w-100 py-0 fs-5 m-0 eng-text text-center text-dark bg-transparent"
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {fm.model}
                  </p>
                  <div className="d-flex flex-column px-3 text-start">
                    <div className="border-bottom mb-2 bg-light w-100">
                      <div className="w-100 text-center">
                        <img
                          width="auto"
                          height="auto"
                          src={image}
                          className="card-img-top"
                          alt={
                            fm.model +
                            " " +
                            fm.brand +
                            " " +
                            " Sewing Machine " +
                            " " +
                            fm.machine_type
                          }
                        />
                      </div>
                    </div>
                    <Detail
                      filter={filter}
                      prop="Brand"
                      value={fm.brand_model}
                      spec="brand_model"
                    />
                    <Detail
                      filter={filter}
                      prop="Machine Type"
                      value={fm.machine_type_eng}
                      spec="machine_type"
                    />
                    <Detail
                      filter={filter}
                      prop="Made In"
                      value={fm.made_eng}
                      spec="made"
                    />
                    <Detail
                      filter={filter}
                      prop="Machine Frame"
                      value={fm.machine_frame_eng}
                      spec="machine_frame"
                    />
                    <Detail
                      filter={filter}
                      prop="Stich Type"
                      value={fm.num_stich_type_eng}
                      spec="num_stich_type"
                    />
                    <Detail
                      filter={filter}
                      prop="Stich Width(mm)"
                      value={fm.stich_width_mm}
                      spec="stich_width_mm"
                    />
                    <Detail
                      filter={filter}
                      prop="Nobs"
                      value={fm.num_nob_eng}
                      spec="num_nob"
                    />
                  </div>
                  <hr className="m-0 mt-2 mb-1" />
                  <div className="w-100">
                    <span className="w-100 d-flex justify-content-center">
                      <Link
                        href={`/en/janome-sewing-machine-model/${modelSlug(fm.model)}`}
                        className="text-decoration-none p-2 eng-content fs-5"
                        style={{
                          color: "var(--bs-primary) !important",
                        }}
                        target="_blank"
                      >
                        ... More Info
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
            {!filteredMachines.length && (
              <>
                <span className="fw-bold text-center text-dark eng-content fs-4 p-5">
                  Not Found &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handleClearAllFilters}
                    className="btn btn-danger eng-content p-2 fs-5"
                  >
                    Clear Filters
                  </button>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header
          closeButton
          className="m-0 d-flex flex-column"
          id="modal-product-filters"
        >
          <Modal.Title className="d-flex w-100 justify-content-between align-items-center flex-row">
            <div>
              <button className="btn btn-transparent " onClick={closeModal}>
                <VscChromeClose size="1.2rem" />
              </button>
            </div>
            <a
              onClick={handleClearAllFilters}
              className="px-3 mx-1 text-decoration-none eng-content fs-5"
              style={{ left: "0px" }}
            >
              Clear Filters
            </a>
          </Modal.Title>
          <div className="w-100 text-center eng-content">
            <h3> Filters </h3>
            <span
              onClick={closeModal}
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.2rem",
                fontWeight: "800",
              }}
            >
              {filteredMachines.length != allMachines.length ? (
                <div className="d-flex justify-content-center ">
                  <span>{filteredMachines.length}</span>
                  <span className="mx-2">Sewing Machine(s) Found</span>
                </div>
              ) : (
                ""
              )}{" "}
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 h-100">
            <FiltersEng
              noFilterButton={true}
              filter={filter}
              filters={filters}
              allMachines={allMachines}
              switchValue={switchValue}
              handleClick={handleClick}
              toggleCheckbox={toggleCheckbox}
              filteredMachines={filteredMachines}
              handleSwitchChange={handleSwitchChange}
              handleClearAllFilters={handleClearAllFilters}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="danger" onClick={closeModal} className="px-5">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Products;
