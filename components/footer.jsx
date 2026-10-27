// import React from "react";
// import SocialMedia from "./socialmedia";

// function Footer({ position = "relative" }) {
//   return (
//     <div
//       className={`w-100 py-2 ${position === "fixed" ? "bg-transparent" : "bg-light"
//         }`}
//       id="footer"
//       style={{
//         position: `${position}`,
//         bottom: "0",
//         background: "transparent !important",
//       }}
//     >
//       <div>
//         <SocialMedia color="#000" />
//       </div>
//       <span>Copyright © 2026 Iran Janome | ایران ژانومه</span>
//     </div>
//   );
// }

// export default Footer;

import Link from "next/link";

import SocialMedia from "./socialmedia";

const quickLinks = [
  { href: "/", label: "خانه" },
  { href: "/products/", label: "چرخ خیاطی ژانومه" },
  { href: "/janome-sewing-machine-model/", label: "مدل های چرخ خیاطی" },
  { href: "/agents/", label: "نمایندگی ها" },
  { href: "/parts/", label: "لوازم یدکی" },
  { href: "/services/compare/", label: "مقایسه محصولات" },
  { href: "/services/training/", label: "فیلم های آموزشی" },
  { href: "/faq/", label: "سؤالات متداول" },
  { href: "/history/", label: "تاریخچه شرکت" },
  { href: "/contact/", label: "تماس با ما" },
];

function Footer({ position = "relative" }) {
  const year = new Date().getFullYear();

  // The homepage keeps the original slim, floating bar so the footer
  // doesn't compete with the hero. Every other page gets the full,
  // link-rich footer below.
  if (position === "fixed") {
    return (
      <div
        className="w-100 py-2 bg-transparent"
        id="footer"
        style={{ position: "fixed", bottom: "0" }}
      >
        <div>
          <SocialMedia color="#000" />
        </div>
        <span>Copyright © {year} Iran Janome | ایران ژانومه</span>
      </div>
    );
  }

  return (
    <footer
      id="footer"
      dir="rtl"
      className="w-100 text-black m-0 border-top border-info"
      itemScope
      itemType="https://schema.org/Organization"
      style={{ backgroundColor: '#cee' }}
    >
      <meta itemProp="name" content="شرکت ژانومه ایران" />
      <meta itemProp="url" content="https://iranjanome.ir" />

      <div className="" style={{ padding: "20px", borderRadius: "10px" }}>
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <h2 className="h5 text-black mb-3">ژانومه ایران</h2>
            <p className="text-black normal mb-3">
              نماینده انحصاری چرخ خیاطی ژانومه ژاپن در ایران؛ ارائه دهنده
              خدمات فروش، پشتیبانی، لوازم یدکی و آموزش برای تمامی مدل های
              چرخ خیاطی ژانومه در سراسر کشور.
            </p>
            <SocialMedia color="#fff" />
          </div>

          <div className="col-6 col-md-4">
            {/* <h2 className="h6 text-black mb-3">دسترسی سریع</h2>
            <ul className="list-unstyled small">
              {quickLinks.map(link => (
                <li key={link.href} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-black text-decoration-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          <div className="col-12 col-md-4">
            <h2 className="h6 text-black mb-3">اطلاعات تماس</h2>
            <address
              className="text-black small fst-normal mb-0"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p className="mb-2" itemProp="streetAddress">
                تهران – خیابان جمهوری - ساختمان سجاد - پلاک 945
              </p>
              <p className="mb-2">
                تلفن:{" "}
                <a
                  href="tel:+982166499533"
                  className="text-black text-decoration-none eng-text"
                  itemProp="telephone"
                >
                  5 - 66499533 (21 98+)
                </a>
              </p>
              <p className="mb-2">
                فکس: <span className="eng-text">66499536</span>
              </p>
              <p className="mb-0">
                ایمیل:{" "}
                <a
                  href="mailto:info@iranjanome.ir"
                  className="text-black text-decoration-none eng-text"
                  itemProp="email"
                >
                  info@iranjanome.ir
                </a>
              </p>
            </address>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-black">
          <span>Copyright © {year} Iran Janome | ایران ژانومه</span>
          <span>تمامی حقوق این وب سایت متعلق به شرکت ژانومه ایران است</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
