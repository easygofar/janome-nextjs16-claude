"use client";
import React from "react";

function EmailSent({ emailMessage, handleEmailSent }) {
	return (
		<div className="border p-3 m-2">
			<h6>متن شما به شرح زیر ارسال شد</h6>
			<section className="row p-0 my-3 px-4">
				<div className="col-2">نام: </div>
				<div className="col-10">{emailMessage["name"]} </div>
				<div className="col-2">ایمیل: </div>
				<div className="col-10">{emailMessage["email"]} </div>
				<div className="col-2">مدل چرخ خیاطی: </div>
				<div className="col-10">{emailMessage["machine"]} </div>
				<div className="col-2">پیام: </div>
				<div className="col-10" style={{ direction: "rtl" }}>
					<pre> {emailMessage["message"]} </pre>
				</div>
			</section>
			<button
				onClick={handleEmailSent}
				className="btn btn-danger inline-block"
			>
				بازگشت به فرم
			</button>
		</div>
	);
}

export default EmailSent;
