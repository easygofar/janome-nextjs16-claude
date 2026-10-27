"use client";
import React from "react";
import _ from "lodash";
import { GiSewingMachine } from "react-icons/gi";
import { v4 as uuidv4 } from "uuid";

////

import MachineCount from "../machinecount";
import { numOfFilters } from "../helpers";

const Filters = ({
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
			<div className="filter-tilte py-2 d-flex flex-column justify-content-between border-bottom rounded ">
				<div className="bg-light d-flex flex-column align-items-center position-relative border py-5">
					<div className="form-check form-switch d-flex align-items-center justify-content-center pb-4">
						<div>
							<input
								className="form-check-input"
								type="checkbox"
								id="flexSwitchCheckChecked"
								onChange={handleSwitchChange}
								checked={switchValue}
							/>
							<label
								className="form-check-label fs-5 mx-2"
								htmlFor="flexSwitchCheckChecked"
							>
								&nbsp;فقط کالاهای موجود&nbsp;
							</label>
						</div>
						<div
							id="machine-selected-number"
							className="btn text-dark position-absolute mx-2 "
						>
							<GiSewingMachine color="rgba(50, 50, 50, 1)" />
							<MachineCount count={filteredMachines.length} />
						</div>
					</div>
					{noFilterButton ? (
						""
					) : (
						<button
							className="btn btn-danger"
							style={{
								width: "80%",
							}}
							onClick={handleClearAllFilters}
							disabled={!numOfFilters(filter)}
						>
							حذف فیلترها{" "}
							{numOfFilters(filter)
								? `(${numOfFilters(filter)})`
								: ""}
						</button>
					)}{" "}
				</div>
			</div>
			<div
				id="column-one-part-two"
				style={{
					width: "100%",
				}}
			>
				{keys.map(k => {
					let mainKey = k === "brand_class" ? "brand_class_order" : k;
					return (
						<div key={uuidv4()}>
							<div
								className="row px-1 py-0 m-0 rounded bg-light mt-3 border"
								style={{
									backgroundColor: "#eee",
								}}
								key={uuidv4()}
							>
								{k === "available" ? (
									""
								) : (
									<>
										<span className="filter-tilte m-2">
											{filters[k]}
										</span>
									</>
								)}

								{_.sortBy(_.uniqBy(allMachines, k), [
									mainKey,
									k,
								]).map(v => {
									let key = uuidv4();
									if (k !== "model" && k !== "available")
										return (
											<div
												className="col-3 border-0 "
												style={{
													fontSize: "0.95rem",
												}}
												key={uuidv4()}
											>
												<div
													className="mb-1"
													key={uuidv4()}
												>
													<span
														onClick={e =>
															handleClick(
																e,
																k,
																v[k]
															)
														}
													>
														<input
															className="form-check-input mx-1"
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

														<label
															className="form-check-label"
															// htmlFor={key}
														>
															{!_.isBoolean(v[k])
																? v[k]
																: v[k]
																? "دارد"
																: "ندارد"}
														</label>
													</span>
													<br />
												</div>
											</div>
										);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Filters;
