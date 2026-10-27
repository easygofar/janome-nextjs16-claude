"use client";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { getSelection } from "../helpers";

function MultiSelect({ machines, afterSelect, afterReset }) {
	const [models, setModels] = useState([]);

	useEffect(() => {
		const _sortedModels = _.sortBy(machines, "sort");

		const _models = _sortedModels.map(m => ({
			id: m.id,
			model: m.model,
			checked: false,
			brand: m.brand_model,
			sort: m.sort,
		}));
		setModels(_models);
	}, [machines]);

	const handleReset = () => {
		const _models = [...models];
		_models.forEach(m => (m.checked = false));
		setModels(_models);
		afterReset();
	};

	const handleSelect = obj => {
		const _models = [...models];
		_models.forEach(md => {
			if (md.id === obj.id) {
				md.checked = !md.checked;
				obj.checked = md.checked;
			}
		});
		setModels(_models);
		afterSelect(obj);
	};

	return (
		<>
			<h5 className="w-100 text-end m-0 p-0">
				انتخاب مدل چرخ خیاطی ژانومه برای مقایسه
			</h5>
			<div className="d-flex flex-column align-items-center justify-content-center m-0 p-0">
				<div
					className="d-flex flex-column justify-content-center"
					style={{ marginTop: "1rem" }}
				>
					{getSelection(models, "JANOME", "ژانومه", handleSelect)}

					{getSelection(models, "JUNO", "جونو", handleSelect)}
					{getSelection(models, "NEW HOME", "نیوهوم", handleSelect)}
					{getSelection(models, "HOGARO", "هوگارو", handleSelect)}
				</div>
				<div className="pt-3">
					<button className="btn btn-danger" onClick={handleReset}>
						حذف گزینه ها
					</button>
				</div>
			</div>
		</>
	);
}

export default MultiSelect;
