"use client";
import React from "react";
import { numOfFilters } from "../helpers";

export default function ButtonClear({ handleClearAllFilters, filter }) {
	return (
		<button
			className="btn btn-danger eng-content fs-5 p-1 w-75"
			onClick={handleClearAllFilters}
			disabled={!numOfFilters(filter)}
		>
			Clear Filters{" "}
			{numOfFilters(filter) ? `(${numOfFilters(filter)})` : ""}
		</button>
	);
}
