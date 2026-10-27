"use client";

import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiQuestionnaireLine } from "react-icons/ri";
///////////////////////////////////////////////////////////////////

// import FireFly from "../../src/components/FireFly/FireFly";
import { faqContent } from "@/data/machines";
import AccordinItem from "@/components/accordinItem";
import TopEng from "@/components/topeng";
import EmailForm from "@/components/emailform";
import EmailSent from "@/components/emailsent";

const faq = faqContent;

const Faqs = () => {
	const [emailMessage, setEmailMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [error, setError] = useState({});
	const [emailSent, setEmailSent] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setEmailMessage({ ...emailMessage, [name]: value });
	};

	const handleEmailSent = () => {
		setEmailMessage({});
		setError({});
		setEmailSent(false);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		let response;
		try {
			response = await axios.post("/contact.php", {
				...emailMessage,
			});
		} catch (err) {
			console.log("error", err);
			return;
		}
		const { data } = response;

		if (data["error"]) {
			setError(data["error"]);
			return;
		}
		if (data["message"] === "success") {
			setEmailSent(true);
		}
	};

	return (
		<>
			{/* <div
				id="agents-js"
				className="h3-shadow green w-100 p-0 m-0 d-flex align-items-center"
			>
				<RiQuestionnaireLine size="2.0rem" className="mx-2" />
				<h1 className=" w-100 m-0 p-2">سئوالات متداول فنی</h1>
			</div>
			<div className="section-background d-flex flex-column align-items-center py-5 m-0">
				<FireFly />
				<div className="pb-3"></div>
			</div> */}

			<TopEng pagetitle="سئوالات متداول فنی">
				<RiQuestionnaireLine size="2.0rem" className="mx-2" />
			</TopEng>
			<section className="main-backcolor min-vh-100 w-100 border p-5">
				<h3>پاسخ به برخی سوالات متداول</h3>
				<p className="fs-5">
					در صورت تمایل میتوانید سوالات خود را برای ما ارسال کنید تا
					متخصصین بخش فنی در همین بخش پاسخ آنان را درج نمایند.
				</p>
				{/* <hr className="my-4" /> */}
				<div
					className="accordion accordion-flush pt-4 border-top"
					id="accordionFlushExample"
				>
					{faq.map(f => (
						<AccordinItem key={uuidv4()} obj={f} />
					))}
				</div>
				<section className="row w-75 p-2 pt-4" id="faq-form">
					<h4>فرم ارسال سئوالات فنی</h4>

					{!emailSent ? (
						<EmailForm
							handleChange={handleChange}
							error={error}
							emailMessage={emailMessage}
							handleSubmit={handleSubmit}
						/>
					) : (
						<EmailSent
							handleEmailSent={handleEmailSent}
							emailMessage={emailMessage}
						/>
					)}
				</section>
			</section>
		</>
	);
};

export default Faqs;
