"use client";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { getSelection } from "../helpers";

function MultiSelectEng({ machines, afterSelect, afterReset }) {
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
			<h5 className="w-100 text-center m-0 p-0 eng-content fs-4">
				Choose Janome Models to compare
			</h5>
			<div className="d-flex flex-column align-items-center justify-content-center m-0 p-0">
				<div
					className="d-flex flex-column justify-content-center"
					style={{ marginTop: "1rem" }}
				>
					{getSelection(
						models,
						"JANOME",
						"ژانومه",
						handleSelect,
						true
					)}

					{getSelection(models, "JUNO", "جونو", handleSelect, true)}
					{getSelection(
						models,
						"NEW HOME",
						"نیوهوم",
						handleSelect,
						true
					)}
					{getSelection(
						models,
						"HOGARO",
						"هوگارو",
						handleSelect,
						true
					)}
				</div>
				<div className="pt-3">
					<button
						className="btn btn-danger eng-content fs-5"
						onClick={handleReset}
					>
						Clear selections
					</button>
				</div>
			</div>
		</>
	);
}

export default MultiSelectEng;
