"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Modal, Button } from "react-bootstrap";
import { AiOutlineZoomIn } from "react-icons/ai";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";
import { BiRefresh, BiCheck } from "react-icons/bi";

//////////////////////////////////////////////////////////

import { _allMachines, _mobileHeadersEng } from "@/data/machines";
import { getMachineImagePath } from "@/components/helpers";
// import FireFly from "../../../src/components/FireFly/FireFly";
import MultiSelectEng from "@/components/MultiSelect/multiselecteng";
import TopEng from "@/components/topeng";
import TdCompare from "@/components/Services/tdcompare";

const _columns = [
  { col: "Model", selected: false },
  { col: "Brand", selected: false },
  { col: "Type", selected: false },
  { col: "Made In", selected: false },
  { col: "Frame", selected: false },
  { col: "System", selected: false },
  // { col: "معروف به", selected: false },
  { col: "Stich Num", selected: false },
  { col: "Stich Width (mm)", selected: false },
  { col: "Nobs", selected: false },
  { col: "Needle num", selected: false },
  { col: "Width/Height Gauge", selected: false },
  { col: "Needle Threader", selected: false },
  { col: "Box Case", selected: false },
  { col: "LCD Monitor", selected: false },
  { col: "Auto Self Threading", selected: false },
  { col: "Letter Embroidery", selected: false },
  { col: "Auto Arm Panel", selected: false },
  {
    col: "PC Connection",
    selected: false,
  },
  { col: "Blade Cleaner", selected: false },
];

const _theads = [
  "model",
  "brand_class",
  "machine_type",
  "made",
  "machine_frame",
  "system",
  // "known_as",
  "num_stich_type",
  "stich_width_mm",
  "num_nob",
  "num_needle",
  "wth_hth_gauge",
  "needle_threading",
  "box_case",
  "lcd_monitor",
  "auto_self_threading",
  "letter_sewing",
  "auto_arm_panel",
  "pc_connection",
  "blade_cleaner",
];

const allMachines = _allMachines;
const mobileHeaders = _mobileHeadersEng;
const columns = _columns;
const theads = _theads;

function Compare() {
  const [filteredMachines, setFilteredMachines] = useState(
    _.sortBy(allMachines, "brand_class_order")
  );
  const [multiSelectList, setMultiSelectList] = useState(
    _.sortBy(allMachines, "brand_class_order")
  );
  const [showMultiSelection, setShowMultiSelection] = useState(false);
  const [image, setImage] = useState({ name: "", path: "" });
  const [showImage, setShowImage] = useState(false);
  const [groupByCols, setGroupByCols] = useState([columns, 0, "مدل", "model"]);

  const scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollLeft = 1;
  }, []);

  const handleShowModels = () => {
    setShowMultiSelection(true);
  };

  const handleTable = (obj) => {
    let newList;
    let modelSelected = allMachines.filter((am) => am.id === obj.id);
    modelSelected[0].checked = obj.checked;
    if (obj.checked) {
      newList = filteredMachines.filter((am) => am.id !== obj.id);
      newList.unshift(modelSelected[0]);
    } else {
      newList = filteredMachines.map((fm) => {
        if (fm.id === obj.id) fm.checked = false;
        return fm;
      });
      const iteratees = (_obj) => -_obj.checked;
      newList = _.sortBy(newList, "sort");
    }

    scroll.current.scrollLeft = 1;

    setFilteredMachines(newList);
  };

  const handleOpenModal = (index, name, path) => {
    openModal(name, path);
  };

  const openModal = (name, path) => {
    setImage({ name, path });
    setShowImage(true);
  };
  const closeModal = () => {
    setShowMultiSelection(false);
    setShowImage(false);
  };

  const handleResetTable = () => {
    const _allMachines = [...allMachines];
    _allMachines.forEach((m) => (m.checked = false));
    setFilteredMachines(() => _allMachines);
    setGroupByCols(() => [
      [...columns],
      0,
      mobileHeaders[theads[0]],
      theads[0],
    ]);
    setMultiSelectList([...multiSelectList]);
  };

  const handleClickGroupBy = (index) => {
    const tempColumns = [...columns];
    let idx = groupByCols[0].length - index - 1;
    $("tbody").fadeOut(50);
    let selected = !groupByCols[0][idx].selected;
    const order = selected ? "desc" : "asc";
    const column = theads[idx] === "model" ? "brand_class_order" : theads[idx];
    tempColumns[idx] = { ...tempColumns[idx], selected };
    let groupedMachines = _.orderBy(allMachines, [column], [order]);
    setFilteredMachines(() => groupedMachines);
    setGroupByCols([
      [...tempColumns],
      idx,
      mobileHeaders[theads[index]],
      theads[index],
    ]);
    $("tbody").fadeIn(300);
  };

  return (
    <>
      <div className="p-0 position-relative w-100">
        <TopEng pagetitle="Compare Janome Models">
          <IoIosGitCompare size="2.0rem" className="mx-2" />
        </TopEng>

        <div className="main-backcolor table_wrapper table-responsive-padding text-center">
          <div className="d-flex flex-column align-items-center my-2">
            <h4 className="text-center mb-3 eng-content fs-5">
              Use table columns header to sort table
            </h4>
            <div className="compare-buttons d-flex mb-3">
              <button
                onClick={handleShowModels}
                className="d-flex pe-1 mx-2 justify-content-center text-light align-items-center btn btn-danger"
              >
                <BiCheck size="1.5rem" color="#fff" className="mx-0 px-0" />
                <span className="px-0 mx-0 me-2 eng-content fs-5">
                  Choose Models
                </span>
              </button>

              <button
                onClick={handleResetTable}
                className="d-flex pe-1 mx-2 justify-content-center text-light align-items-center btn btn-danger"
              >
                <BiRefresh size="1.5rem" color="#fff" className="mx-0 px-0" />
                <span className="px-0 mx-0 me-2 eng-content fs-5">
                  Reset Table
                </span>
              </button>
            </div>
          </div>
          <table
            id="product-compare-table "
            className="table table-hover table-responsive-md table-bordered table-striped align-middle"
            style={{
              background: "rgba(255,255,255,1)",
            }}
            ref={scroll}
          >
            <thead
              id="table-compare-head"
              style={{
                top: "-1px",
                position: "sticky",
                zIndex: "50",
              }}
            >
              <tr
                className="bg-light compareRow position-relative"
                style={{
                  borderBottom: "1px solid #888",
                }}
              >
                <th scope="col" className="text-center py-1 position-relative">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                    className="position-absolute eng-content text-center"
                  >
                    Image
                  </span>
                  <img
                    className="position-relative"
                    src="/images/blank-png.png"
                    width={80}
                    height={60}
                    alt="png"
                  />
                </th>
                {groupByCols[0].map((item, index) => {
                  let btnColor =
                    groupByCols[1] === index
                      ? "btn-info py-1"
                      : "btn-danger py-1";
                  return (
                    <th
                      scope="col"
                      key={uuidv4()}
                      className="text-center p-0 align-items-center"
                      onClick={() =>
                        handleClickGroupBy(groupByCols[0].length - index - 1)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      <span
                        className="eng-content text-center"
                        style={{
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.col}
                      </span>
                      <button
                        aria-label="up down sort button"
                        className={`btn ${btnColor} btn-sm p-0 w-100 m-0 my-1`}
                      >
                        {!item.selected ? (
                          <GoChevronDown className="p-0 m-0  sort" />
                        ) : (
                          <GoChevronUp className="p-0 m-0  sort" />
                        )}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {filteredMachines.map((item, index) => {
                const rowColor = item.checked ? "#ffffaa" : "";
                return (
                  <tr
                    className="compareRow eng-content"
                    key={uuidv4()}
                    style={{ background: rowColor }}
                  >
                    <td className="text-center">
                      <div
                        className="position-relative h-100"
                        onClick={() =>
                          handleOpenModal(index, item.image, item.brand_model)
                        }
                      >
                        <img
                          width={80}
                          height={60}
                          src={getMachineImagePath(
                            item.image,
                            item.brand_model
                          )}
                          alt={
                            " Iran Janome " +
                            item.image +
                            " " +
                            item.brand_model
                          }
                        />
                        <div
                          className="position-absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            padding: "0px 0px",
                          }}
                        >
                          <AiOutlineZoomIn
                            size="1.8rem"
                            color="rgba(0,0,0,0.3)"
                            style={{
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <TdCompare
                      column="model"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="brand_class"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />

                    <TdCompare
                      column="machine_type"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="made"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="machine_frame"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="system"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="num_stich_type"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="stich_width_mm"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="num_nob"
                      groupByCols={groupByCols}
                      item={item}
                      eng={true}
                    />
                    <TdCompare
                      column="num_needle"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="wth_hth_gauge"
                      groupByCols={groupByCols}
                      item={item}
                    />

                    <TdCompare
                      column="needle_threading"
                      groupByCols={groupByCols}
                      item={item}
                    />

                    <TdCompare
                      column="box_case"
                      groupByCols={groupByCols}
                      item={item}
                    />

                    <TdCompare
                      column="lcd_monitor"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="letter_sewing"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="auto_arm_panel"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="blade_cleaner"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="auto_self_threading"
                      groupByCols={groupByCols}
                      item={item}
                    />
                    <TdCompare
                      column="pc_connection"
                      groupByCols={groupByCols}
                      item={item}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showImage} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="eng-text2">
              {image.path} {image.name}
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={getMachineImagePath(image.name, image.path)}
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
            layout="responsive"
            // objectFit="contain"
            alt={`Janome ${image.name} ایران ژانومه چرخ خیاطی`}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button
            variant="danger"
            onClick={closeModal}
            className="px-5 eng-content"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* multi selection modal */}
      <Modal show={showMultiSelection} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <MultiSelectEng
            machines={multiSelectList}
            afterSelect={handleTable}
            afterReset={handleResetTable}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button
            variant="danger"
            onClick={closeModal}
            className="px-5 eng-content fs-5"
          >
            Compare
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Compare;
