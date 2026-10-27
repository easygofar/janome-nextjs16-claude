import React from "react";

export default function TopEng({ pagetitle, children }) {
	return (
		<>
			<div className="p-0 position-relative w-100">
				<div className="green w-100 p-0 m-0">
					<div className="green w-100 h3-shadow  p-0 m-0 d-flex align-items-center flex-justify-start">
						{children}
						<h1 className="m-0 p-2">{pagetitle}</h1>
					</div>
				</div>
			</div>
			<div className="section-background d-flex flex-column align-items-center py-5 m-0">
				{/* <FireFly /> */}
				<div className="pb-3"></div>
			</div>
		</>
	);
}
