// import FireFly from "../components/FireFly/FireFly";
import TrTable from "./Tab/trtable";

import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

export const getMachineImagePath = (image, path) => {
  return (
    "/images/machines/Janome/" +
    path.toLowerCase().replace(/ /g, "") +
    "/" +
    path.toLowerCase().replace(/ /g, "") +
    "-" +
    image +
    ".jpg"
  );
};

export const contains = (state, allStates) => {
  const filter = allStates.filter((a) => a.name === state);
  return filter.length > 0;
};

export const showFirstPageBackground = () => {
  return (
    <>
      {/* <FireFly outter="fixed" inner="fixed" /> */}
      <div className="home-background  animation">
        <div className="home-background-machine no-effect js-tilt"></div>
      </div>
    </>
  );
};

export const showOtherPageBackground = () => {
  return (
    <>
      {/* <FireFly outter="fixed" inner="fixed" /> */}
      <div className="home-background"></div>
    </>
  );
};

export const getSelection = (
  list,
  selection,
  title,
  handleSelect,
  eng = false
) => {
  const newList = _.sortBy(
    list.filter((item) => item.brand === selection),
    "sort"
  );
  return (
    <>
      <h5
        className={`text-center w-100 py-2 m-0 mt-2 main-backcolor border-top ${
          eng ? "eng-content fs-5 fw-bold" : "fw-bold"
        }`}
      >
        {eng ? selection : title}
      </h5>
      <div className="d-flex justify-content-center border-start border-end border-bottom p-3">
        <div className="d-flex flex-wrap justify-content-end">
          {newList.map((item) => {
            const model = item.model.replace(" ", "");
            return (
              <div
                key={uuidv4()}
                style={{ width: "90px" }}
                className="d-flex justify-content-end align-items-center"
              >
                <label
                  className="eng-text"
                  style={{ fontSize: "1.1rem !important" }}
                  htmlFor={model}
                >
                  {model}
                </label>
                <input
                  id={model}
                  type="checkbox"
                  value={item.model}
                  onChange={() => handleSelect(item)}
                  checked={item.checked}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const numOfFilters = (f) => {
  let sum = 0;
  if (!_.isEmpty(f)) {
    Object.keys(f).forEach((key) => {
      sum = sum + f[key].length;
    });
  }
  return sum;
};
const getValue = (param) => {
  if (!_.isBoolean(param)) return param;

  return param === true ? "دارد" : "ندارد";
};

export const getTable = (data) => {
  return (
    <table id="machine-detail" className="table round rounded-3 bg-light">
      <tbody>
        <tr>
          <td> شماره </td>
          <td className="eng-text"> {data.model}</td>
        </tr>
        <tr>
          <td> برند </td>
          <td> {data.brand}</td>
        </tr>
        <tr>
          <td> نوع ماشین </td>
          <td> {data.machine_type}</td>
        </tr>
        <tr>
          <td> مدل </td>
          <td> {data.brand_model}</td>
        </tr>
        <tr>
          <td> سیستم </td>
          <td> {data.system}</td>
        </tr>
        <tr>
          <td> کشور سازنده </td>
          <td> {data.made}</td>
        </tr>
        <tr>
          <td> فرم اسکلت چرخ </td>
          <td> {data.machine_frame} </td>
        </tr>
        <tr>
          <td> معروف به </td>
          <td> {data.known_as}</td>
        </tr>
        <tr>
          <td> تعداد نوع دوخت </td>
          <td> {data.num_stich_type} </td>
        </tr>
        <tr>
          <td> عرض دوخت میلیمتر </td>
          <td> {data.stich_width_mm} </td>
        </tr>
        <tr>
          <td> تعداد ولوم </td>
          <td> {data.num_nob}</td>
        </tr>
        <tr>
          <td> درجه عرض و طول دوخت </td>
          <td>{getValue(data.wth_hth_gauge)}</td>
        </tr>
        <tr>
          <td> سوزن نخ کن </td>
          <td>{getValue(data.needle_threading)}</td>
        </tr>
        <tr>
          <td> درب و جعبه </td>
          <td>{getValue(data.box_case)}</td>
        </tr>
        <tr>
          <td> صفحه مانیتور </td>
          <td>{getValue(data.lcd_monitor)}</td>
        </tr>
        <tr>
          <td> سرنخ زن اتومات </td>
          <td>{getValue(data.auto_self_threading)}</td>
        </tr>
        <tr>
          <td> توانائی دوخت حروف </td>
          <td>{getValue(data.letter_sewing)}</td>
        </tr>
        <tr>
          <td> صفحه بازوی اتوماتیک </td>
          <td>{getValue(data.auto_arm_panel)}</td>
        </tr>
        <tr>
          <td> قابلیت اتصال به کامپیوتر </td>
          <td>{getValue(data.pc_connection)}</td>
        </tr>
        <tr>
          <td> تعداد سوزن </td>
          <td>{getValue(data.num_needle)}</td>
        </tr>
        <tr>
          <td> تیغ پاک دوزی </td>
          <td>{getValue(data.blade_cleaner)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const getTableEng = (data) => {
  return (
    <table
      id="machine-detail"
      className="table round rounded-3 bg-light eng-content"
    >
      <tbody>
        <TrTable title="Model No" value={data.model} />
        <TrTable title="Brand" value={data.brand} />
        <TrTable title="Machine Type" value={data.machine_type_eng} />
        <TrTable title="Brand Model" value={data.brand_model} />
        <TrTable title="System" value={data.system_eng} />
        <TrTable title="Made In" value={data.made_eng} />
        <TrTable title="Machine Frame" value={data.machine_frame_eng} />
        <TrTable title="Stich Num" value={data.num_stich_type_eng} />
        <TrTable title="Stich Width(mm)" value={data.stich_width_mm} />

        <TrTable title="Nobs" value={data.num_nob_eng} />
        <TrTable title="Width/Height Gauge" value={data.wth_hth_gauge} />
        <TrTable title="Needle Threader" value={data.needle_threading} />

        <TrTable title="Box Case" value={data.box_case} />
        <TrTable title="LCD Monitor" value={data.lcd_monitor} />
        <TrTable title="Auto Self Threading" value={data.auto_self_threading} />

        <TrTable title="Letter Embroidery" value={data.letter_sewing} />
        <TrTable title="Auto Arm Panel" value={data.auto_arm_panel} />
        <TrTable title="PC Connection" value={data.pc_connection} />
        <TrTable title="Needle Num" value={data.num_needle} />

        <TrTable title="Blade Cleaner" value={data.blade_cleaner} />
      </tbody>
    </table>
  );
};

export const getImage = (data) => {
  return (
    <img
      src={`/images/machines/Janome/${data["brand_model"]
        .toLowerCase()
        .replace(/ /g, "")}/${data["brand_model"]
        .toLowerCase()
        .replace(/ /g, "")}-${data["image"]}.jpg`}
      alt={`${data.model}  چرخ ژانومه مدل`}
      width="100%"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    />
  );
};
