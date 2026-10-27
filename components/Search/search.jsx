"use client";
import React from "react";
import { MdClear } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Search = ({ searchKey, onClick, onChange, eng = false }) => {
	return (
		<p className="input-group">
			<span className="input-group-text" id="basic-addon1">
				<FiSearch />
			</span>
			<input
				type="text"
				className={`form-control ${
					eng ? "eng-text text-center" : "text-center eng-text"
				}`}
				placeholder={`${eng ? "Model Number" : "شماره مدل"}`}
				value={searchKey}
				onChange={onChange}
				style={{
					padding: "0.375rem 0.75rem",
				}}
			/>
			<span
				className="input-group-text"
				style={{ cursor: "pointer" }}
				id="basic-addon1"
				onClick={onClick}
			>
				<MdClear />
			</span>
		</p>
	);
};

export default Search;
