import React from "react";
import _ from "lodash";

const column_eng = {
	machine_type: "machine_type_eng",
	made: "made_eng",
	machine_frame: "machine_frame_eng",
	num_stich_type: "num_stich_type_eng",
	num_nob: "num_nob_eng",
	system: "system_eng",
	brand_class: "brand_model",
};

export default function TdCompare({ column, groupByCols, item, eng = false }) {
	function isColumnSelected(col, groupByColumns) {
		const updatedColumn = groupByColumns[3] === col ? "tdBackColor" : "";
		return updatedColumn;
	}
	const value = eng ? item[column_eng[column]] : item[column];
	return (
		<td
			className={isColumnSelected(column, groupByCols)}
			style={{
				fontSize: "1.2rem",
			}}
		>
			{value === true ? "YES" : value === false ? "N/A" : value}
		</td>
	);
}
