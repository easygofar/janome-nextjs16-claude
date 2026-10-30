"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { CgCheck } from "react-icons/cg";
import $ from "jquery";

export default function Menu({ homePage = false }) {
  const pathname = usePathname();
  const background =
    pathname === "/" ? "bg-transparent" : "navbar-light bg-light";

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
              aria-label="باز و بسته کردن منو"
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
            id="logo-text"
            className="d-flex align-items-center justify-content-center position-relative"
          >
            <div id="farsi-title">
              {homePage ? (
                <h1>نماینده رسمی و انحصاری چرخ خیاطی ژانومه</h1>
              ) : (
                // <p className="h2 m-0">نماینده انحصاری ژانومه در ایران</p>
                undefined
              )}
            </div>
            <div id="farsi-logo" className="p-0">
              <img
                src="/images/janome-logo-farsi-sm.png"
                width={200}
                height={34}
                alt="لوگوی فارسی ژانومه ایران"
              />
            </div>
            <div id="janome-logo" className="p-0">
              <img
                src="/images/janome-logo-sm.png"
                width={200}
                height={34}
                alt="لوگوی ژانومه"
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
      className="navbar-nav mx-auto"
      style={
        {
          // textShadow: "0px 3px 4px rgba(0, 0, 0, 0.21)",
        }
      }
    >
      <li className="nav-item">
        <Link
          href="/"
          className="nav-link dropdown-toggle"
          id="langDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="زبان"
        >
          <BiWorld size="2.0rem" />
        </Link>
        <ul className="dropdown-menu" aria-labelledby="langDropdown">
          <li>
            <Link
              href="/en"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              <span className="mx-2"> EN </span>
              <span> (انگلیسی) </span>
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
              <span>
                <CgCheck size="1.3rem" />
              </span>
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link href="/#menu-js" onClick={handleHideHamburgermenu} className="nav-link">
          خانه
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/products"
          onClick={handleHideHamburgermenu}
          className="nav-link"
        >
          محصولات
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          href="/"
          className="nav-link dropdown-toggle"
          id="servicesDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="خدمات"
        >
          خدمات
        </Link>
        <ul className="dropdown-menu z-99" aria-labelledby="servicesDropdown">
          <li>
            <Link
              href="/services/training"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              فیلم‌های آموزشی
            </Link>
          </li>
          <li>
            <Link
              href="/services/compare"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              مقایسه محصولات
            </Link>
          </li>
          <li>
            <Link
              href="/parts"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              لوازم یدکی
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              onClick={handleHideHamburgermenu}
              className="dropdown-item"
            >
              سؤالات فنی متداول
            </Link>
          </li>
          {/* Warranty-activation link removed: it pointed at "/" (placeholder). Re-add when the page exists. */}
        </ul>
      </li>
      <li className="nav-item">
        <Link
          href="/agents"
          onClick={handleHideHamburgermenu}
          className="nav-link"
        >
          نمایندگی‌ها
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/history"
          onClick={handleHideHamburgermenu}
          className="nav-link"
        >
          ژانومه
        </Link>
      </li>
      <li className="nav-item">
        <Link
          href="/contact"
          onClick={handleHideHamburgermenu}
          className="nav-link"
        >
          تماس
        </Link>
      </li>
    </ul>
  );
};
