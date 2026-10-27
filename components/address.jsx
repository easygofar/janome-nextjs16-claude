"use client";
import { RiMapPinRangeLine, RiInformationLine } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

function Address({ handleChange }) {
  return (
    <div>
      <table
        // id="contact-table"
        className="table table-hover table-responsive rounded-3 table-hover table-default"
      >
        <tbody>
          <tr>
            <td>
              <RiMapPinRangeLine size="1.5rem" color="#FF7800" />
            </td>
            <td>آدرس:</td>
            <td>
              تهران – خیابان جمهوری - بین ابوریحان و دانشگاه ساختمان سجاد - پلاک
              945
            </td>
          </tr>
          <tr>
            <td>
              <ImPhone size="1.2rem" color="#FF7800" />
            </td>
            <td>تلفن:</td>
            <td>5 - 66499533 </td>
          </tr>
          <tr>
            <td>
              <FaFax size="1.2rem" color="#FF7800" />
            </td>
            <td>فاکس:</td>
            <td>66499536 </td>
          </tr>
          <tr>
            <td>
              <MdEmail size="1.2rem" color="#FF7800" />
            </td>
            <td>ایمیل:</td>
            <td>info(@)iranjanome.ir </td>
          </tr>
          <tr>
            <td colSpan="3">
              <p>
                <RiInformationLine size="1.5rem" className="mx-2" />
                نزدیکترین ایستگاه مترو به این مکان ورودی ۶ مترو چهار راه ولیعصر
                و نزدیکترین ایستگاه اتوبوس به این مکان، پاساژ علاءالدین ۲
                می‌باشد
              </p>
              {/* <p>
                <button onClick={handleChange} className="btn btn-danger">
                  {mapButton[showTraficMap]}
                </button>
              </p> */}
              <h6>آدرس نمایندگی چرخ خیاطی ژانومه در تهران</h6>
            </td>
          </tr>
        </tbody>
        {/* <tfoot className="pt-4"> */}
        {/* </tfoot> */}
      </table>
    </div>
  );
}

export default Address;
