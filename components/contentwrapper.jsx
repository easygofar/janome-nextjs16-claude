import React from "react";
// import Flags from "country-flag-icons/react/3x2";

/////////////////////////////////
import Footer from "./footer";

function ContentWrapper({ children }) {
	return (
		<div id="wrapper" className="container-new m-0 mx-auto">
			<div id="content-wrapper" className=" m-0 mx-auto p-0 rounded">
				{children}
			</div>
			<div
				className="d-flex flex-column justify-content-center align-items-around position-fixed"
				style={{ top: "300px", left: "10px" }}
			></div>
		</div>
	);
}

export default ContentWrapper;
