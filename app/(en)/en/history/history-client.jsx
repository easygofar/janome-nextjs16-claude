"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsBuilding } from "react-icons/bs";
import TopEng from "@/components/topeng";
///////////////////////////////////////////////////

const historyContent = [
  [
    "1920",
    [
      {
        date: "1921",
        title: "Corporate History",
        item: "",
        text: "In Takinogawa, Tokyo, Yosaku Ose founded 'Pine Sewing Machinery Mfg. Co., Ltd.' with Shigeru Kamematsu and Shoichi Tobimatsu.",
      },
      {
        date: "1921",
        title: "Product Information",
        item: "Pine 500 type 53 type",
        text: "Completed a small hand-cranked sewing machine, which is said to be the first domestically produced sewing machine.",
      },
    ],
    [
      {
        date: "1929",
        title: "Product Information",
        item: "Pine 100 types 30 type",
        text: "Launched the first domestic standard sewing machine for home use. A vertical half-turn type is used for the bobbin thread mechanism, dramatically improving work efficiency.",
      },
    ],
  ],
  [
    "1930",
    [
      {
        date: "1935",
        title: "Corporate History",
        item: "Changed the trade name to 'Imperial Sewing Machine Co., Ltd.' 'Janome Sewing Machine' has been registered as a trademark.",
        text: "The origin of 'Janome' comes from the fact that the bobbin used by 'Pine 100 Kind 30' has a round shape similar to the circled dot pattern, so it was called a 'Janome' sewing machine. The body of the sewing machine also had a snake-eye pattern.",
      },
    ],
    [
      {
        date: "1936",
        title: "Corporate History",
        item: "The Koganei Factory, the first domestically produced sewing machine mass production factory, has been completed.",
        text: "* The photo of the building is not the one at that time.",
      },
    ],
  ],
  [
    "1940",
    [
      {
        date: "1948",
        title: "Product Information",
        item: "HA-1 102 type",
        text: "At the request of Masuzou Maeda, who was the representative of the Imperial sewing machine (predecessor of our company), the standard dimensions of domestic household sewing machines were unified, and this sewing machine was called 'household HA-1 type'.",
      },
    ],
  ],
  [
    "1950",
    [
      {
        date: "1954",
        title: "Product Information",
        item: "320 type",
        text: "The modern exterior designed by industrial designer Jiro Kosugi was selected as the first selection in the '2nd Mainichi Industrial Design Contest', and started the era when companies competed for sewing machine design.",
      },
      {
        date: "1954",
        title: "Corporate History",
        item: "The trade name was changed to 'Janome Sewing Industry Co., Ltd.' in order to emphasize the manufacturer's color.",
        text: "",
      },
    ],
  ],
  [
    "1960",
    [
      {
        date: "1961",
        title: "Product Information",
        item: "Type 560",
        text: "Introducing a fully automatic zigzag sewing machine. Instead of moving the lever and dial by hand, it has become possible to sew patterns using a part called a cam.",
      },
    ],
    [
      {
        date: "1963",
        title: "Corporate History",
        item: "Listed on the First Section of the Tokyo / Osaka Stock Exchange.",
        text: "",
      },
    ],
    [
      {
        date: "1964",
        title: "Product Information",
        item: "Type 670, High Dream",
        text: "Released to commemorate the Tokyo Olympics. Made of light alloy die-cast, the industry's first in-house production. The weight is half that of the conventional one.",
      },
      {
        date: "1964",
        title: "Corporate History",
        item: "The Technical Research Institute was completed in Hachioji, Tokyo.",
        text: "",
      },
    ],
    [
      {
        date: "1965",
        title: "Corporate History",
        item: "The head office building is completed in Kyobashi, Chuo-ku, Tokyo. We adopted the latest architectural style of the time called 'H line core system'.",
        text: "",
      },
    ],
    [
      {
        date: "1969",
        title: "Corporate History",
        item: "Established Janome Sewing Machine Co., Ltd. (currently Janome Taiwan) Co., Ltd.",
        text: "",
      },
    ],
  ],

  [
    "1970",
    [
      {
        date: "1971",
        title: "Product Information",
        item: "Type 801, Janome Topia",
        text: "The finest zigzag sewing machine developed to commemorate the 50th anniversary of our founding. Equipped with cutting-edge technology at the time, such as 'full rotation type kama'.",
      },
      {
        date: "1971",
        title: "Product Information",
        item: "Imprinter",
        text: "Released the first domestically produced imprinter machine. It is a device that imprints embossed credit card information on slips, and is also used for medical examination tickets in hospitals.",
      },
    ],
    [
      {
        date: "1976",
        title: "Product Information",
        item: "Type 813, Excel",
        text: "This is Janome's first domestic main model that uses a built-in cam type and free arm.",
      },
    ],
    [
      {
        date: "1979",
        title: "Product Information",
        item: "Type 5001, Memoria",
        text: "Japan's first computer sewing machine. The movement of the needle and feed dog adjusted by the dial and lever is controlled by the computer. The movement of the needle has become free, and the sewing machine has entered a period of great change.",
      },
      {
        date: "1979",
        title: "Product Information",
        item: "General-purpose stepping motor",
        text: "Has a track record of use in a wide range of fields, centered on OA / FA equipment.",
      },
    ],
  ],
  [
    "1980",
    [
      {
        date: "1980",
        title: "Product Information",
        item: "Vacuum casting device",
        text: "From mold making to duplication with one model, it can be done at low cost and in a short period of time, greatly reducing development costs and time.",
      },
    ],
    [
      {
        date: "1983",
        title: "Product Information",
        item: "6000 type, memory craft",
        text: "It has been enhanced with computer functions and has been very well received both at home and abroad. Built-in number of stitches in the world at that time.",
      },
    ],
    [
      {
        date: "1984",
        title: "Product Information",
        item: "Electro Press (Servo Press) Unit 1 JP-20 ",
        text: "The industry's first small electric press machine with a DC servo motor drive source. Achieve a quiet and clean work environment.",
      },
    ],
    [
      {
        date: "1986",
        title: "Product Information",
        item: "Combination DX2000",
        text: "A sewing machine that has two functions: a straight / zigzag sewing machine and an overlock sewing machine. You can switch between a zigzag sewing machine and a lock sewing machine by turning the turntable around.",
      },
    ],
  ],
  [
    "1990",
    [
      {
        date: "1990",
        title: "Product Information",
        item: "Yu Master",
        text: "A 24-hour bath that allows you to take a comfortable bath 24 hours a day. It gained popularity with an impressive theme song that started with 'Yu, Yu, Yu, Yu Meijin' and became a hit product.",
      },
    ],
    [
      {
        date: "1991",
        title: "Product Information",
        item: "8100 type, Cecio",
        text: "Equipped with a touch panel. You can now enjoy full-scale embroidery with a maximum of 80 mm on the left and right. Released as a model commemorating the 70th anniversary of its founding.",
      },
    ],
    [
      {
        date: "1993",
        title: "Product Information",
        item: "Desktop robot 'JR500' No. 1",
        text: "Developed to meet the automation needs of assembly lines. It can be used for screw tightening and temporary screw insertion, and has been well received for its quality control function and good operability.",
      },
      {
        date: "1993",
        title: "Corporate History",
        item: " The Takao Factory (currently the Tokyo Factory) has been completed. ",
        text: "",
      },
    ],
    [
      {
        date: "1997",
        title: "Product Information",
        item: " Yu Master Super Z ",
        text: "Uses triple safety (1. Continuous double sterilization of ozone and ultraviolet rays 2. Automatic heat cleaning at 70 ° C 3. Antibacterial filter material).",
      },
    ],
  ],
  [
    "2000",
    [
      {
        date: "2001",
        title: "Product Information",
        item: "Type 9500, Super Cecio",
        text: "The world's first high-end computer sewing machine with an embroidery function that automatically threads threads.",
      },
    ],
    [
      {
        date: "2003",
        title: "Product Information",
        item: "SCARA robot 'JS series' ",
        text: "Released a servo SCARA robot with various usage methods such as screw tightening work, soldering work, and pick and place.",
      },
    ],
    [
      {
        date: "2004",
        title: "Product Information",
        item: "Desktop robot 'JR2000N series'",
        text: "Equipped with 'Easy teaching' that facilitates program setting work, 'Robot language' that allows the robot to send control signals to operate the system, and 'Customization function' that allows you to create your own dedicated software.",
      },
      {
        date: "2004",
        title: "Product Information",
        item: " Bus Ace 600 ",
        text: "A 24-hour commercial bath ideal for small-scale facilities such as inns, pensions, guest houses, hospitals, and dormitories.",
      },
    ],
    [
      {
        date: "2006",
        title: "Product Information",
        item: "Cecio 11000",
        text: "Redesigned exterior design. Equipped with the industry's first large LCD with a position adjustment mechanism as a household sewing machine. Direct link with a personal computer is possible.",
      },
    ],
    [
      {
        date: "2009",
        title: "Corporate History",
        item: " The head office function has been moved from Kyobashi, Chuo-ku, Tokyo to Hachioji City. ",
        text: "",
      },
    ],
  ],
  [
    "2010",
    [
      {
        date: "2010",
        title: "Product Information",
        item: "HORIZON Memory Craft 7700",
        text: "It features a wide 280mm sewing space where you can easily sew large works. It has become a popular sewing machine all over the world, from beginners to heavy users.",
      },
      {
        date: "2010",
        title: "Product Information",
        item: "Servo press 'JP-S series' ",
        text: "Uses an AC servo motor. It is clean and quiet. Succeeded in industry-leading miniaturization and weight reduction, ideal for in-line installation.",
      },
    ],
    [
      {
        date: "2011",
        title: "Product Information",
        item: "Horizon Memory Craft12000",
        text: "A model with many new features for quilting enthusiasts. It is possible to connect the sewing machine to a personal computer and perform advanced processing on the personal computer side.",
      },
    ],
    [
      {
        date: "2012",
        title: "Product Information",
        item: " DC6030 ",
        text: "It features a large direct selection button placed on the front and a design that blends into the interior. The concept is 'easy to see', 'easy operation', and 'beautiful finish'. Received the 2012 'Good Design Best 100' award.",
      },
    ],
    [
      {
        date: "2013",
        title: "Product Information",
        item: "Horizon Memory Craft 15000",
        text: "The world's first computer sewing machine with Wi-Fi communication function. Enables wireless connection with iPad devices via wireless network. Equipped with a new automatic threading function.",
      },
    ],
    [
      {
        date: "2014",
        title: "Product Information",
        item: "Desktop robot 'JR3000 series'",
        text: "It is the first desktop robot in the industry to have a built-in robot cable. A design that is effective for manufacturing sites with height restrictions. Functionality has also improved, enabling more productive work.",
      },
      {
        date: "2014",
        title: "Corporate History",
        item: "Janome Sewing Park was opened in Nagaoka City, Niigata Prefecture. ",
        text: "* Moved to Aeon Niigata Higashi store in November 2019.",
      },
    ],
    [
      {
        date: "2015",
        title: "Product Information",
        item: "Cecio 14000",
        text: "A high-end computer sewing machine with an embroidery function that seeks 'highest grade' in all of sewing comfort, operability, and functions.",
      },
    ],
    [
      {
        date: "2016",
        title: "Product Information",
        item: "Servo press 'JP series 5' ",
        text: "Achieves industry-leading ram speed and field network support. Along with shortening the cycle time at the manufacturing site, it has become possible to improve manufacturing quality.",
      },
    ],
    [
      {
        date: "2018",
        title: "Product Information",
        item: "Lock sewing machine 'MY LOCK AIR 2000D'",
        text: "Equipped with a new function 'ratchet type air looper threader' that allows easy threading with the power of air based on the concept of simplicity and safety.",
      },
      {
        date: "2018",
        title: "Product Information",
        item: "SCARA robot JS3 series",
        text: "The basic performance such as operating speed and communication function has been greatly improved compared to the conventional model, achieving high speed, high accuracy, and high portability.",
      },
    ],
    [
      {
        date: "2019",
        title: "Product Information",
        item: "HORIZON Memory Craft 9450QCP",
        text: "The highest peak model that achieves outstanding sewing quality and ease of use. Equipped with a new 'ruler work mode' function.",
      },
      {
        date: "2019",
        title: "Product Information",
        item: "Continental M7 Professional",
        text: "Top quilt sewing machine. Adopted a sturdy body made of die-cast aluminum and a long arm with a pocket length of 13.5 inches (343 mm).",
      },
    ],
  ],
  [
    "2020",
    [
      {
        date: "2020",
        title: "Product Information",
        item: "Epolk",
        text: "100th anniversary model. Naming is a combination of French Époque (era) and Finnish Polku (road). A sewing machine that expresses our gratitude to the many customers who have spent the time and time together, and the desire to convey the joy of manufacturing with sewing machines in the future. Available in two colors: 'CLASSIC RED', which is a deeper version of our corporate color, and 'VINTAGE BLUE', which is based on the image of the body color of sewing machines released in the 1960s.",
      },
    ],
    [
      {
        date: "2021",
        title: "Product Information",
        item: "CoverPro 3000 PROFESSIONAL",
        text: "Our first cover stitch sewing machine that uses top cover stitching to support highly elastic fabrics and improve sewing quality and durability.",
      },
      {
        date: "2021",
        title: "Product Information",
        item: " Servo press JP series 5 ",
        text: "The two-handed operation unit is equipped with a two-handed operation type safety device for press that was newly developed by our company and has obtained domestic type certification. It eliminates the need for safety devices such as area sensors, reducing costs, ensuring worker safety and securing a wide range of work spaces.",
      },
      {
        date: "2021",
        title: "Corporate History",
        item: "The trade name has been changed to 'Janome Co., Ltd.'",
        text: "",
      },
      {
        date: "2021",
        title: "Corporate History",
        item: "We are celebrating the 100th anniversary of our founding.",
        text: "",
      },
    ],
    [
      {
        date: "2022",
        title: "Product Information",
        item: "Continental M17",
        text: "A computer sewing machine with the highest quality embroidery function that provides comfortable and luxurious time with innovative functions and the highest level of functions and quality. The concept of the exterior design, which is particular about the details, is 'high quality, authenticity, and innovation.' The industry's first two-screen touch screen inherits ease of use while achieving the industry's largest sewing space and maximum embroidery area. The stitch regulator and high-speed sewing speed enhance the quilting function.",
      },
    ],
  ],
];

const random = 10;
const seconds = 2.8;
const delay = 1500;

const history = historyContent;

function History() {
  const [rotations, setRotations] = useState({ a: -3, b: 3, c: -3, d: 3 });

  const handleClickHistory = () => {
    window.open("https://www.janome.co.jp/100th/en/", "_blank");
    return;
  };

  useEffect(() => {
    const timer_id = setInterval(() => {
      let a = Math.floor(Math.random() * random);
      let b = Math.floor(Math.random() * random);
      let c = Math.floor(Math.random() * random);
      let d = Math.floor(Math.random() * random);

      a = a < random / a ? a : -1 * a;
      b = b < random / b ? b : -1 * b;
      c = c < random / c ? c : -1 * c;
      d = d < random / d ? d : -1 * d;

      // setRotations({ a, b, c, d });
    }, delay);
    return () => clearInterval(timer_id);
  }, []);

  const handleJanomeHistory = () => {
    window.location = "https://www.janome.co.jp/100th/en/";
  };

  return (
    <>
      <TopEng pagetitle="Janome History">
        <BsBuilding size="2.0rem" className="mx-2" />
      </TopEng>

      {/* table  */}
      <div className="main-backcolor m-0 py-5">
        <div
          className="d-flex justify-content-around flex-wrap p-0 m-0 justify-content-center mb-5 py-3 px-5 border"
          style={{
            background: "rgb(243,246,249)",
          }}
        >
          <img
            width={246}
            height={239}
            className="history-photo border border-2"
            src="/images/background/1921_model_53_pine_500_type.jpg"
            alt="model 53 pine 500"
            style={{
              transform: "rotate(" + rotations.a + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="history-photo border border-2"
            src="/images/background/1929_model_30_pine_100_type.jpg"
            alt="model 30 pine 100"
            style={{
              transform: "rotate(" + rotations.b + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="history-photo border border-2"
            src="/images/background/1948_model-102.jpg"
            alt="model 102"
            style={{
              transform: "rotate(" + rotations.c + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
          <img
            width={246}
            height={239}
            className="history-photo border border-2"
            src="/images/background/1954_model_320.jpg"
            alt="model 320"
            style={{
              transform: "rotate(" + rotations.d + "deg)",
              transition: "all " + seconds + "s ease-in-out",
              transformOrigin: "center top",
            }}
          />
        </div>

        <div
          className="container row   main-backcolor d-flex justify-content-center flex-wrap training-extra m-0 py-4"
          style={{
            fontSize: "1.3rem",
            lineHeight: "2.2rem",
          }}
        >
          <p className="eng-content">
            Janome was founded in 1921 as Japan&apos;s first domestic sewing
            machine manufacturer. In an era of drastic changes , Janome has
            faced the creation of products that make customers happy every day
            with solid technological capabilities and strong spirit of
            challenge.
          </p>
          <p className="eng-content">
            Janome quarter office is based in Tokyo and the manufacturing
            factories are located in Japan, Taiwan and Thailand.
          </p>
          <p className="eng-content">
            In 2021, Janome celebrated the 100th anniversary.{" "}
          </p>
          <p className="mt-4 px-5 eng-content text-center fs-3">
            Introducing Janome&apos;s 100 years with the history of the product
          </p>
        </div>

        <div className="row p-0 m-0 px-5 pb-5">
          {history.map((decades) => (
            <div className="col-11 rounded m-2 p-2" key={uuidv4()}>
              <div className="history-decade">{decades[0]}</div>
              <div className="history-item">
                {decades.slice(1).map((years) => {
                  return (
                    <div
                      className="decade-wrapper d-flex align-items-center mb-2 w-100"
                      key={uuidv4()}
                    >
                      <div className="history-date mx-5 my-3">
                        {years[0].date}
                      </div>
                      <div className="w-100 position-relative">
                        <div
                          className="history-years-en row p-3 "
                          style={{
                            background: "rgb(243,246,249)",
                          }}
                        >
                          {years.map((year, index) => {
                            let thumbnail = `/images/history/${year.date}_0${index + 1
                              }.png`;
                            return (
                              <div className="history-text col" key={uuidv4()}>
                                <section className="d-flex justify-content-start history">
                                  <div className="px-2">
                                    <img
                                      src={thumbnail}
                                      width={100}
                                      height={100}
                                      alt={thumbnail}
                                    />
                                  </div>
                                  <div>
                                    <div className="eng-content">
                                      <h6
                                        className="fs-6 bg-light p-1 text-center"
                                        style={{
                                          border: "1px solid #999",
                                          width: "120px",
                                        }}
                                      >
                                        {year.title}
                                      </h6>
                                      <h4
                                        style={{
                                          color: "red",
                                        }}
                                      >
                                        {year.item}
                                      </h4>
                                      <p>{year.text}</p>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-5 py-5 justify-content-center"
        style={{
          background: "rgb(243,246,249)",
          fontSize: "1.3rem",
          lineHeight: "2.2rem",
          wordSpacing: "0.3rem",
        }}
      >
        <h2>JANOME FACTORIES</h2>

        <div>
          {/* japan factory */}
          <div className="row w-100 px-3 mt-5 justify-content-center">
            <div className="col-md-4 col-sx-12 align-items-start">
              <div>
                <h4 className="text-shadow">TOKYO - JAPAN</h4>
                <h5 className="company-title text-muted pt-2">
                  Tokyo Janome Factory
                </h5>
              </div>
              <div className="p-3 my-5 border-start eng-content">
                <p>
                  Produces all models of machines with embroidery function. It
                  has an annual production of 50,000 units.
                </p>
                <ul>
                  <li>ISO 9002 certification in December 1997 </li>
                  <li>ISO 14001 certification of October 2000</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
              <div className="w-100 border border-2 p-1">
                <img
                  src="/images/factory/janome-tokyo-factory.jpg"
                  width={100}
                  height={100}
                  // style={{ width: "100px", height: "100px" }}
                  layout="responsive"
                  // objectFit="contain"
                  style={{ objectFit: "contain" }}
                  alt="Janome Tokyo Factory"
                />
              </div>
            </div>
          </div>
        </div>
        {/* taiwan factory */}
        <div className="row w-100 px-3 mt-5 justify-content-center">
          <div className="col-md-4 col-sx-12 align-items-start">
            <div>
              <h4 className="text-shadow">TAIWAN</h4>
              <h5 className="company-title text-muted pt-2">
                Taiwan Janome Factory
              </h5>
            </div>

            <div className="p-3 my-5 border-start eng-content">
              <p>
                Produces all models of sewing machines and overlock machines. It
                is the largest factory in the world. It has an annual production
                of 1,200,000 units.
              </p>
              <ul>
                <li>ISO 9002 Certification February 1995</li>
                <li>ISO 14001 Certification May 2002</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
            <div className="w-100 border border-2 p-1">
              <img
                src="/images/factory/janome-taiwan-factory.jpg"
                // style={{ width: "100%", height: "100%" }}
                width={100}
                height={100}
                layout="responsive"
                // objectFit="contain"
                style={{ objectFit: "contain" }}
                alt="Janome Taiwan Factory"
              />
            </div>
          </div>
        </div>
        {/* thailand factory */}
        <div className="row w-100 px-3 mt-5 justify-content-center">
          <div className="col-md-4 col-sx-12 align-items-start">
            <div>
              <h4 className="text-shadow">THAILAND </h4>
              <h5 className="company-title text-muted pt-2">
                Thailand Janome Factory
              </h5>
            </div>

            <div className="p-3 my-5 border-start eng-content">
              <p>
                Produces sewing machines with the oscillating shuttle and FM125
                (X&apos;pression) drilling machines. The annual output of
                550,000 units.
              </p>
              <ul>
                <li>ISO 9002 certification from April 2000</li>
                <li>ISO 14001 Certification December 2004</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sx-12 d-flex justify-content-center align-items-start py-0 px-2">
            <div className="w-100 border border-2 p-1">
              <img
                src="/images/factory/janome-thailand-factory.jpg"
                width={100}
                height={100}
                layout="responsive"
                style={{ objectFit: "contain" }}

                // objectFit="contain"
                alt="کارخانه تایلند ژانومه"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
