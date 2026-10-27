"use client";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { getSelection } from "../helpers";
import Selection from "./selection";

function MultiSelectAccardion({ machines, afterSelect, afterReset }) {
	const [models, setModels] = useState([]);

	useEffect(() => {
		const _models = machines.map(m => ({
			id: m.id,
			model: m.model,
			checked: false,
			brand: m.brand_model,
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
			<div
				className="accordion container-fluid main-backcolor p-0 "
				id="accordionExample"
				style={{ padding: "10px" }}
			>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button collapsed btn btn-info fw-bold fs-5"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							انتخاب مدل چرخ خیاطی ژانومه برای مقایسه
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body d-flex flex-column align-items-center justify-content-center">
							<div
								className="d-flex flex-column justify-content-center"
								style={{ marginTop: "2.5rem" }}
							>
								{getSelection(
									models,
									"JANOME",
									"ژانومه",
									handleSelect
								)}

								{getSelection(
									models,
									"JUNO",
									"جونو",
									handleSelect
								)}
								{getSelection(
									models,
									"NEW HOME",
									"نیوهوم",
									handleSelect
								)}
								{getSelection(
									models,
									"HOGARO",
									"هوگارو",
									handleSelect
								)}
							</div>
							<div className="pt-3">
								<button
									className="btn btn-danger"
									onClick={handleReset}
								>
									حذف گزینه ها
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// export default MultiSelectAccardion;
