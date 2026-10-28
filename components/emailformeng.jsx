"use client";
import React from "react";

function EmailFormEng({ handleChange, emailMessage, error, handleSubmit }) {
	return (
		<form className="col border p-2" onSubmit={handleSubmit}>
			<div className="d-flex flex-column">
				<div className="mb-3 w-50 mx-1">
					<label
						htmlFor="exampleFormControlInput22"
						className="form-label"
					>
						نام و نام خانوادگی
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput22"
						style={{ direction: "rtl" }}
						onChange={handleChange}
						name="name"
						value={emailMessage["name"]}
					/>
					<small> {error[0]}</small>
				</div>
				<div className="mb-3 w-50 mx-1">
					<label
						htmlFor="exampleFormControlInput1"
						className="form-label"
					>
						ایمیل
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="آدرس ایمیل"
						style={{ direction: "rtl" }}
						onChange={handleChange}
						name="email"
						value={emailMessage["email"]}
					/>
					<small> {error[1]}</small>
				</div>
				<div className="mb-3 w-50 mx-1">
					<label
						htmlFor="exampleFormControlInput11"
						className="form-label"
					>
						مدل چرخ خیاطی
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleFormControlInput11"
						placeholder="مدل چرخ خیاطی"
						style={{ direction: "rtl" }}
						onChange={handleChange}
						name="machine"
						value={emailMessage["machine"]}
					/>
					<small> {error[2]}</small>
				</div>
			</div>
			<div className="mb-3">
				<label
					htmlFor="exampleFormControlTextarea1"
					className="form-label"
				>
					متن سؤال فنی
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows="5"
					style={{ direction: "rtl" }}
					name="message"
					value={emailMessage["message"]}
					onChange={handleChange}
				></textarea>
				<small> {error[2]}</small>
			</div>
			<div className="mb-3">
				<button className="btn btn-danger">ارسال</button>
			</div>
		</form>
	);
}

export default EmailFormEng;
