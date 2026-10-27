"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { getTable, getTableEng } from "../helpers";
import TabDetail from "./tabdetail";
import TabDownload from "./tabdownload";

export default function Tab({ data }) {
	const pathname = usePathname();
	const eng = pathname.includes("/en") ? true : false;
	let tabsData = [{ ...data }];
	if (data.tabs || data.tabseng) {
		tabsData = eng ? [...data.tabseng] : [...data.tabs];
	}
	const tabsFont = eng ? "Calibri" : "Yekan";
	const textAlign = eng ? "text-start" : "text-end";
	const catalogue = eng ? "Catalogue" : "کاتالوگ";

	return (
		<>
			<ul
				className="nav nav-tabs justify-content-start"
				id="dataTab"
				role="tablist"
				style={{ paddingInlineStart: "10px" }}
			>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="home-tab"
						data-bs-toggle="tab"
						data-bs-target="#home"
						type="button"
						role="tab"
						aria-controls="home"
						aria-selected="true"
						style={{ fontFamily: tabsFont }}
					>
						{eng ? "Specification" : "مشخصات"}
					</button>
				</li>
				{tabsData.length &&
					tabsData.map((tab, index) => {
						return (
							<li
								key={new Date().getMilliseconds() + index}
								className="nav-item"
								role="presentation"
							>
								<button
									className="nav-link"
									id={`${data.model}${index}-tab`}
									data-bs-toggle="tab"
									data-bs-target={`#${data.model}${index}`}
									type="button"
									role="tab"
									aria-controls={`${data.model}${index}`}
									aria-selected="false"
									style={{
										fontFamily: tabsFont,
									}}
								>
									{tab.name}
								</button>
							</li>
						);
					})}
			</ul>
			<div
				className="tab-content justify-content-start"
				id="dataTabContent"
				style={{ minHeight: "75vh" }}
			>
				<div
					className="tab-pane fade show active"
					id="home"
					role="tabpanel"
					aria-labelledby="home-tab"
				>
					{eng ? getTableEng(data) : getTable(data)}
				</div>
				{tabsData.length &&
					tabsData.map((tab, index) => {
						return (
							<div
								key={new Date().getMilliseconds() + index}
								className={`tab-pane fade ${textAlign}`}
								id={`${data.model}${index}`}
								role="tabpanel"
								aria-labelledby={`${data.model}${index}-tab`}
								style={{
									fontSize: "1.1rem",
									fontFamily: tabsFont,
								}}
							>
								{tab.name !== catalogue ? (
									<TabDetail tab={tab} />
								) : (
									<TabDownload tab={tab} />
								)}
							</div>
						);
					})}
			</div>
		</>
	);
}
