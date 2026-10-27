import Link from "next/link";

import SocialMedia from "./socialmedia";

const quickLinks = [
  { href: "/en/", label: "Home" },
  { href: "/en/products/", label: "Janome Sewing Machines" },
  { href: "/en/parts/", label: "Spare Parts" },
  { href: "/en/services/compare/", label: "Compare Models" },
  { href: "/en/services/training/", label: "Training Videos" },
  { href: "/en/services/faq/", label: "FAQ" },
  { href: "/en/history/", label: "Company History" },
  { href: "/en/contact/", label: "Contact Us" },
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
        <span>Copyright © {year} Iran Janome</span>
      </div>
    );
  }

  return (
    <footer
      id="footer"
      dir="ltr"
      className="w-100 text-black m-0 border-top border-info"
      itemScope
      itemType="https://schema.org/Organization"
      style={{ backgroundColor: "#cee" }}
    >
      <meta itemProp="name" content="Iran Janome" />
      <meta itemProp="url" content="https://iranjanome.ir/en/" />

      <div className="container" style={{ padding: "20px", borderRadius: "10px" }}>
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <h2 className="h5 text-black mb-3">Iran Janome</h2>
            <p className="text-black small mb-3">
              Exclusive representative of Janome sewing machines (Japan) in
              Iran, offering sales, after-sales support, genuine spare parts
              and training for every Janome model nationwide.
            </p>
            <SocialMedia color="#fff" />
          </div>

          <div className="col-6 col-lg-4">
            {/* <h2 className="h6 text-black mb-3">Quick Links</h2>
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

          <div className="col-12 col-lg-4">
            <h2 className="h6 text-black mb-3">Contact Information</h2>
            <address
              className="text-black small fst-normal mb-0"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <p className="mb-2" itemProp="streetAddress">
                945, Sajjad Building, Jomhuri Ave., Tehran, Iran
              </p>
              <p className="mb-2">
                Tel:{" "}
                <a
                  href="tel:+982166499533"
                  className="text-black text-decoration-none"
                  itemProp="telephone"
                >
                  +98 21 66499533-5
                </a>
              </p>
              <p className="mb-2">Fax: +98 21 66499536</p>
              <p className="mb-0">
                Email:{" "}
                <a
                  href="mailto:info@iranjanome.ir"
                  className="text-black text-decoration-none"
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
          <span>Copyright © {year} Iran Janome</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
