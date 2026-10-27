"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import $ from "jquery";
import { CgCheck } from "react-icons/cg";
////
export default function MenuEnd({ pathname }) {
  const homePage = true;
  const background =
    pathname === "/en" ? "bg-transparent" : "navbar-light bg-light";
  const handleHideHamburgermenu = (e) => {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-collapse").addClass("hide");
  };

  return (
    <>
      <header
        id="menu-js"
        className={`row w-100 text-dark justify-content-between m-0 align-items-center ${background}`}
      >
        <nav className="navbar navbar-expand-md col col-md-5 m-0">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                background: "#ee1d23",
                color: "#fff",
              }}
            >
              <RiMenu3Line size="1.5rem" color="#eee" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {getMenu(handleHideHamburgermenu)}
            </div>
          </div>
        </nav>
        <section className="col-6">
          <div
            id="logo-text-eng"
            className="d-flex align-items-center justify-content-center position-relative eng-content"
          >
            <div id="farsi-title-eng">
              {homePage ? <h1>Iran Janome</h1> : <h4>Iran Janome</h4>}
            </div>
            <div id="janome-logo" className="p-0">
              <img
                src="/images/janome-logo-sm.png"
                width={200}
                height={34}
                alt="iran janome logo"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

const getMenu = (handleHideHamburgermenu) => {
  return (
    <ul
      className="navbar-nav mx-auto mb-lg-0 eng-content justify-content-center"
      style={
        {
          // textShadow: "0px 3px 4px rgba(0, 0, 0, 0.21)",
        }
      }
    >
      <li className="nav-item">
        <Link
          href="/en"
          className="nav-link eng-menu dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BiWorld size="2.0rem" />
        </Link>
        <ul className="dropdown-menu eng" aria-labelledby="navbarDropdown">
          <li>
            <Link
              href="/en"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              <span className="mx-2"> EN </span>
              <span> (انگلیسی) </span>
              <span>
                <CgCheck size="1.3rem" />
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              <span className="mx-2"> FA </span>
              <span> (فارسی) </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link
          href="/en"
          onClick={handleHideHamburgermenu}
          className="nav-link eng-menu"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/en/products"
          onClick={handleHideHamburgermenu}
          className="nav-link eng-menu"
        >
          Products
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          href="/en"
          className="nav-link eng-menu dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </Link>
        <ul className="dropdown-menu eng" aria-labelledby="navbarDropdown">
          <li>
            <Link
              href="/en/services/training"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              Training Videos
            </Link>
          </li>
          <li>
            <Link
              href="/en/services/compare"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              Compare Products
            </Link>
          </li>
          <li>
            <Link
              href="/en/parts"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              Spare Parts
            </Link>
          </li>
          <li>
            <Link
              href="/en/services/faq"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              FAQ
            </Link>
          </li>
          {/* <li>
						<hr className="dropdown-divider" />
					</li> */}
          {/* <li>
						<Link href="/">
							<a
								onClick={handleHideHamburgermenu}
								className="dropdown-item"
							>
								فعال کردن گارانتی{" "}
							</a>
						</Link>
					</li> */}
        </ul>
      </li>
      {/* <li className="nav-item">
				<Link href="/agents">
					<a onClick={handleHideHamburgermenu} className="nav-link eng-menu">
						نمایندگی‌ها
					</a>
				</Link>
			</li> */}
      <li className="nav-item">
        <Link
          href="/en/history"
          onClick={handleHideHamburgermenu}
          className="nav-link eng-menu"
        >
          History
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/en/contact"
          onClick={handleHideHamburgermenu}
          className="nav-link eng-menu"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
