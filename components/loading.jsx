import React from "react";

function Loading({ text = "" }) {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div
				className="spinner-border text-danger mb-2"
				role="status"
			></div>
			<span className="text-nowrap fs-5"> {text} </span>
		</div>
	);
}

export default Loading;
