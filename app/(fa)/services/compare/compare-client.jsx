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

import { _allMachines, _mobileHeaders } from "@/data/machines";

import { getMachineImagePath } from "@/components/helpers";
// import FireFly from "../../../src/components/FireFly/FireFly";
import MultiSelect from "@/components/MultiSelect/multiselect";
import TopEng from "@/components/topeng";

const _columns = [
  { col: "مدل", selected: false },
  { col: "برند", selected: false },
  { col: "نوع ماشین", selected: false },
  { col: "کشور سازنده", selected: false },
  { col: "فرم اسکلت چرخ", selected: false },
  { col: "سیستم", selected: false },
  { col: "معروف به", selected: false },
  { col: "تعداد نوع دوخت", selected: false },
  { col: "عرض دوخت mm", selected: false },
  { col: "تعداد ولوم", selected: false },
  { col: "تعداد سوزن", selected: false },
  { col: "عرض و طول دوخت", selected: false },
  { col: "سوزن نخ کن", selected: false },
  { col: "درب و جعبه", selected: false },
  { col: "صفحه مانیتور", selected: false },
  { col: "سرنخ زن اتومات", selected: false },
  { col: "توانائی دوخت حروف", selected: false },
  { col: "صفحه بازوی اتوماتیک", selected: false },
  {
    col: "اتصال به کامپیوتر",
    selected: false,
  },
  { col: "تیغ پاک دوزی", selected: false },
];

const _theads = [
  "model",
  "brand_class",
  "machine_type",
  "made",
  "machine_frame",
  "system",
  "known_as",
  "num_stich_type",
  "stich_width_mm",
  "num_nob",
  "wth_hth_gauge",
  "num_needle",
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
const mobileHeaders = _mobileHeaders;
const columns = _columns;
const theads = _theads;

function Compare() {
  const [filteredMachines, setFilteredMachines] = useState(
    _.sortBy(allMachines, "sort")
  );
  const [multiSelectList, setMultiSelectList] = useState(
    _.sortBy(allMachines, "sort")
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
      // newList = _.sortBy(newList, iteratees);
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

    $("tbody").fadeOut(50);
    let selected = !groupByCols[0][index].selected;
    const order = selected ? "desc" : "asc";
    const column =
      theads[index] === "model" ? "brand_class_order" : theads[index];
    tempColumns[index] = { ...tempColumns[index], selected };
    let groupedMachines = _.orderBy(allMachines, [column], [order]);
    setFilteredMachines(() => groupedMachines);
    setGroupByCols([
      [...tempColumns],
      index,
      mobileHeaders[theads[index]],
      theads[index],
    ]);
    $("tbody").fadeIn(300);
  };

  const isColumnSelected = (col) => {
    const column = groupByCols[3] === col ? "tdBackColor" : "";
    return column;
  };

  return (
    <>
      <div className="p-0 position-relative w-100">
        {/* <div id="compare" className="green w-100 p-0 m-0">
					<div className="green d-flex h3-shadow align-items-center p-0 m-0 ">
						<IoIosGitCompare size="2.0rem" className="mx-2" />
						<h1 className=" w-100 m-0 p-2">
							جدول مقایسه محصولات ژانومه
						</h1>
					</div>
				</div> */}
        <TopEng pagetitle="جدول مقایسه محصولات ژانومه">
          <IoIosGitCompare size="2.0rem" className="mx-2" />
        </TopEng>

        <div className="main-backcolor table_wrapper table-responsive-padding text-center">
          <div className="d-flex flex-column align-items-center my-2">
            <h5 className="text-center mb-3">
              با استفاده از ستونها محصولات را دسته بندی کنید
            </h5>
            <div className="compare-buttons d-flex mb-3">
              <button
                onClick={handleShowModels}
                className="d-flex pe-1 mx-2 justify-content-center text-light align-items-center btn btn-danger"
              >
                <BiCheck size="1.5rem" color="#fff" className="mx-0 px-0" />
                <span className="px-0 mx-0 me-2">انتخاب مدل ها</span>
              </button>

              <button
                onClick={handleResetTable}
                className="d-flex pe-1 mx-2 justify-content-center text-light align-items-center btn btn-danger"
              >
                <BiRefresh size="1.5rem" color="#fff" className="mx-0 px-0" />
                <span className="px-0 mx-0 me-2">حالت اول جدول</span>
              </button>
            </div>
          </div>
          <table
            id="product-compare-table "
            className="table table-hover table-responsive-md table-bordered table-striped"
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
                    className="position-absolute"
                  >
                    عکس
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
                      className="text-center p-0 align-items-between"
                      onClick={() => handleClickGroupBy(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <span
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
                    className="compareRow"
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
                            " ایران ژانومه " +
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

                    <td
                      className={isColumnSelected("model")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      <span
                        className={`eng-text `}
                        style={{
                          background: "transparent",
                        }}
                      >
                        {item["model"]}
                      </span>
                    </td>

                    <td
                      className={isColumnSelected("brand_class")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["farsi"]}
                    </td>

                    <td
                      className={isColumnSelected("machine_type")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["machine_type"].split("چرخ ")}
                    </td>

                    <td
                      className={isColumnSelected("made")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["made"].split("-")}
                    </td>

                    <td
                      className={isColumnSelected("machine_frame")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["machine_frame"]}
                    </td>
                    <td
                      className={isColumnSelected("system")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["system"]}
                    </td>

                    <td
                      className={isColumnSelected("known_as")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["known_as"]}
                    </td>

                    <td
                      className={isColumnSelected("num_stich_type")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["num_stich_type"]}
                    </td>

                    <td
                      className={isColumnSelected("stich_width_mm")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["stich_width_mm"]}
                    </td>

                    <td
                      className={isColumnSelected("num_nob")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["num_nob"]}
                    </td>

                    <td
                      className={isColumnSelected("num_needle")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["num_needle"]}
                    </td>
                    <td
                      className={isColumnSelected("wth_hth_gauge")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["wth_hth_gauge"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("needle_threading")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["needle_threading"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("box_case")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["box_case"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("lcd_monitor")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["lcd_monitor"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("auto_self_threading")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["auto_self_threading"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("letter_sewing")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["letter_sewing"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("auto_arm_panel")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["auto_arm_panel"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("pc_connection")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["pc_connection"] ? "دارد" : "ندارد"}
                    </td>

                    <td
                      className={isColumnSelected("blade_cleaner")}
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {item["blade_cleaner"] ? "دارد" : "ندارد"}
                    </td>
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
            objectFit="contain"
            alt={`Janome ${image.name} Iran Janome`}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button variant="danger" onClick={closeModal} className="px-5">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>

      {/* multi selection modal */}
      <Modal show={showMultiSelection} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="body-modal">
          <MultiSelect
            machines={multiSelectList}
            afterSelect={handleTable}
            afterReset={handleResetTable}
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-start">
          <Button variant="danger" onClick={closeModal} className="px-5">
            مقایسه کن
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Compare;
