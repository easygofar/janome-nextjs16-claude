"use client";
import React from "react";
import _ from "lodash";
import { GiSewingMachine } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";

////

import MachineCount from "../machinecount";
import { numOfFilters } from "../helpers";
import ButtonClear from "./ButtonClear";

const FiltersEng = ({
	filter,
	filters,
	allMachines,
	switchValue,
	handleClick,
	noFilterButton = false,
	toggleCheckbox,
	filteredMachines,
	handleSwitchChange,
	handleClearAllFilters,
}) => {
	const keys = Object.keys(filters).map(m => m);

	return (
		<div className="main-backcolor">
			<div className="filter-tilte my-2 d-flex flex-column justify-content-between border-bottom rounded ">
				<div className="bg-light d-flex justify-content-center position-relative border py-2">
					<div className="form-check form-switch d-flex align-items-center justify-content-center p-0 m-0">
						<div
							id="machine-selected-number-eng"
							className="selected-number-eng btn text-dark position-absolute mx-2 "
						>
							<GiSewingMachine color="rgba(50, 50, 50, 1)" />
							<MachineCount count={filteredMachines.length} />
						</div>
					</div>
					{noFilterButton ? (
						""
					) : (
						<ButtonClear
							handleClearAllFilters={handleClearAllFilters}
							filter={filter}
						/>
					)}
				</div>
			</div>
			<div
				id="column-one-part-two"
				style={{
					width: "100%",
				}}
			>
				{keys.map(k => {
					let mainKey = k === "brand_model" ? "brand_class_order" : k;
					return (
						<div key={uuidv4()}>
							<div
								className="row px-1 pb-2 m-0 rounded bg-light mt-2 border"
								style={{
									backgroundColor: "#eee",
								}}
								key={uuidv4() + "57"}
							>
								{k === "available" ? (
									""
								) : (
									<span className="filter-tilte m-2 text-start">
										{filters[k]}
									</span>
								)}
								<div className="row align-items-center">
									{_.sortBy(_.uniqBy(allMachines, k), [
										mainKey,
										k.padStart(30, "0"),
									]).map(v => {
										let key = uuidv4();
										if (k !== "model" && k !== "available")
											return (
												<div
													className="col-6 text-start flex-row-reverse m-0 p-0 text-nowrap d-flex align-items-center"
													onClick={e =>
														handleClick(e, k, v[k])
													}
													key={uuidv4() + "68"}
												>
													<label
														className="form-check-label eng-content col text-nowrap"
														// htmlFor={key}
													>
														{!_.isBoolean(v[k])
															? v[k]
															: v[k]
															? "Yes"
															: "N/A"}
													</label>
													<input
														className="ms-1 eng-content"
														style={{
															outlineStyle:
																"none",
														}}
														type="checkbox"
														value={v[k]}
														// id={key}
														checked={toggleCheckbox(
															filter,
															k,
															v
														)}
														readOnly
													/>
												</div>
											);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FiltersEng;
