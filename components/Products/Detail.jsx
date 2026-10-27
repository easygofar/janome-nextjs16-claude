import React from "react";

function Detail({ prop, value, spec, filter }) {
	const lang =
		prop.includes("ا") || prop.includes("ب") || prop.includes("د")
			? ""
			: "eng-content";
	return (
		<div className={lang}>
			<span className="fw-bold me-1 ms-2"> {prop}:</span> {value}
		</div>
	);
}

export default Detail;
