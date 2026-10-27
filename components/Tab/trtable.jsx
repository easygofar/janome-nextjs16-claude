import React from "react";
import _ from "lodash";

const getValue = param => {
	if (!_.isBoolean(param)) return param;

	return param === true ? "Yes" : "N/A";
};

export default function TrTable({ title, value }) {
	return (
		<tr>
			<td className="text-start"> {title} </td>
			<td className="text-start"> {getValue(value)} </td>
		</tr>
	);
}
