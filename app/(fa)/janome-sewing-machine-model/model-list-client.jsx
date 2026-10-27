"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GiSewingMachine } from "react-icons/gi";
import { BsFilter } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import _ from "lodash";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button } from "react-bootstrap";
////////////////////////////////////////////////////////////////////

import { _allMachines, _filters } from "@/data/machines";
import Search from "@/components/Search/search";
// import FireFly from "../../src/components/FireFly/FireFly";
import Filters from "@/components/Products/Filters";
import Detail from "@/components/Products/Detail";
import * as ga from "@/lib/ga";

const allMachines = _allMachines;
const filters = _filters;

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

      setFilteredMachines(_.uniqWith(filtered, _.isEqual));
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

  // const handleScrollClick = direction => {
  // 	let itemScrollLength =
  // 		+scroll.current.scrollWidth / +filteredMachines.length;
  // 	scroll.current.scrollBy({
  // 		left: itemScrollLength * direction,
  // 		behavior: "smooth",
  // 	});
  // };

  const showFilters = () => {
    setIsOpen(true);
    // $("#column-one").toggle(300);
    // // const value = !visibility ? "visibile" : "hidden";
    // $(".machine-col-inner").css(
    // 	"visibility",
    // 	!visibility ? "visibile !important" : "hidden !important"
    // );
    // setVisibility(!visibility);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* 1st row */}

      <div
        id="product"
        className="green w-100 h3-shadow  p-0 m-0 d-flex align-items-center"
      >
        <GiSewingMachine size="2.0rem" color="#f00" className="mx-2" />
        <h1 className="w-100 m-0 p-2">لیست محصولات ژانومه</h1>
      </div>
      <div className="section-background d-flex flex-column align-items-center py-5 m-0">
        {/* <FireFly /> */}
        <h5 className="text-center mx-auto w-100 mb-2">جستجوی محصولات</h5>
        <div className="pb-3 d-flex align-items-center">
          <div className=" px-1">
            <Search
              searchKey={searchKey}
              onChange={handleSearch}
              onClick={handleClearSearchKey}
            />
          </div>
        </div>
      </div>

      {/* 2nd row */}

      <div id="row-two" className="row main-backcolor w-100 m-0 py-3 border">
        <div id="modal-filters">
          <button className="btn btn-danger text-nowrap" onClick={showFilters}>
            <BsFilter size="1.5rem" color="#fff" />
            <span className="mx-2"> فیلتر </span>
          </button>
        </div>
        <div id="column-one" className="col-5 col-sm-5 col-md-3">
          <Filters
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
          className="col-5 col-sm-7 col-md-9 p-0 d-flex flex-column jusfify-content-start"
        >
          {/* <div
						className="mc-right"
						onClick={() => handleScrollClick(1)}
					>
						<button className="btn btn-danger d-flex align-items-center">
							<BsCaretRight />
						</button>
					</div>
					<div
						className="mc-left"
						onClick={() => handleScrollClick(-1)}
					>
						<button className="btn btn-danger d-flex align-items-center">
							<BsCaretLeft />
						</button>
					</div> */}
          <div
            className="row justify-content-center"
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
                  <div className="d-flex flex-column p-2">
                    <div className="border-bottom mb-2 bg-light w-100">
                      <div>
                        <img
                          width={250}
                          height={187}
                          src={image}
                          className="card-img-top"
                          alt={
                            fm.model +
                            " " +
                            fm.brand +
                            " " +
                            " چرخ خیاطی " +
                            fm.farsi +
                            " " +
                            fm.machine_type
                          }
                        />
                      </div>
                    </div>
                    <Detail
                      filter={filter}
                      prop="برند"
                      value={fm.brand_class}
                      spec="brand_class"
                    />
                    <Detail
                      filter={filter}
                      prop="نوع ماشین"
                      value={fm.machine_type}
                      spec="machine_type"
                    />
                    <Detail
                      filter={filter}
                      prop="کشور سازنده"
                      value={fm.made}
                      spec="made"
                    />
                    <Detail
                      filter={filter}
                      prop="فرم اسکلت چرخ"
                      value={fm.machine_frame}
                      spec="machine_frame"
                    />
                    <Detail
                      filter={filter}
                      prop="معروف به"
                      value={fm.known_as}
                      spec="known_as"
                    />
                    <Detail
                      filter={filter}
                      prop="تعداد نوع دوخت"
                      value={fm.num_stich_type}
                      spec="num_stich_type"
                    />
                    <Detail
                      filter={filter}
                      prop="عرض دوخت میلیمتر"
                      value={fm.stich_width_mm}
                      spec="stich_width_mm"
                    />
                    <Detail
                      filter={filter}
                      prop="تعداد ولوم"
                      value={fm.num_nob}
                      spec="num_nob"
                    />
                  </div>
                  <hr className="m-0 mt-2 mb-1" />
                  <div className="w-100">
                    <span className="w-100 d-flex justify-content-center">
                      <Link
                        href={`/janome-sewing-machine-model/${fm.model}`}
                        className="text-decoration-none p-2"
                        style={{
                          color: "var(--bs-primary) !important",
                        }}
                        target="_blank"
                      >
                        جزییات بیشتر...
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
            {!filteredMachines.length && (
              <>
                <span className="fw-bold text-center text-dark p-5">
                  چرخ خیاطی با این مشخصات پیدا نشد &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    onClick={handleClearAllFilters}
                    className="px-3 mx-1 border rounded"
                  >
                    حذف فیلترها
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
          <Modal.Title className="d-flex w-100 justify-content-between flex-row">
            <div>
              <button className="btn" onClick={closeModal}>
                <VscChromeClose size="1.2rem" />
              </button>
              <span> فیلترها </span>
            </div>
            <a
              onClick={handleClearAllFilters}
              className="px-3 mx-1 text-decoration-none position-absolute"
            // style={{ left: "0px" }}
            >
              حذف فیلترها
            </a>
          </Modal.Title>
          <div className="w-100 text-center">
            <span
              onClick={closeModal}
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "1.2rem",
                fontWeight: "800",
              }}
              className="eng-text"
            >
              {filteredMachines.length != allMachines.length ? (
                <span>نتیجه فیلتر: {filteredMachines.length} چرخ خیاطی</span>
              ) : (
                ""
              )}{" "}
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 h-100">
            <Filters
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
