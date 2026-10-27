import React from "react";
import { FiVideo, FiInstagram } from "react-icons/fi";

function SocialMedia({ color = "#000" }) {
  return (
    <>
      {/* <span className="m-2 px-2">
    <FiTwitter size="2rem" />
</span> */}
      <span className="m-2 px-2">
        <a
          href="https://www.instagram.com/iranjanome.ir"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram size="2rem" color="#EE171E" />
        </a>
      </span>
      <span className="m-2 px-2">
        <a
          href="https://www.aparat.com/iranjanome.ir/"
          target="_blank"
          rel="noreferrer"
          aria-label="Aparat Video"
        >
          <FiVideo size="2rem" color="#EE171E" />
        </a>
      </span>
    </>
  );
}

export default SocialMedia;
