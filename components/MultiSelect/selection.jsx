"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Selection({ list, selection = "JANOME", title, handleSelect }) {
	const [newList, setNetList] = useState(() =>
		list.filter(item => item.brand === selection)
	);

	return (
		<>
			<h5 className="text-center p-0 m-0">{title}</h5>;
			<div className="d-flex flex-wrap justify-content-end">
				{newList.map(item => {
					return (
						<div
							key={uuidv4()}
							style={{ width: "110px" }}
							className="text-start"
						>
							<span className="eng-text">{item.model}</span>
							<input
								type="checkbox"
								value={item.model}
								onChange={handleSelect(item)}
								checked={item.checked}
							/>
						</div>
					);
				})}
			</div>
			<hr className="p-0 mb-1" />
		</>
	);
}

export default Selection;
