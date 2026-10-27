"use client";

import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { RiQuestionnaireLine } from "react-icons/ri";
///////////////////////////////////////////////////////////////////

// import FireFly from "../../../src/components/FireFly/FireFly";
import { faqContentEng } from "@/data/machines";
import AccordinItem from "@/components/accordinItemeng";

import EmailForm from "@/components/emailformeng";
import EmailSent from "@/components/emailsenteng";
import TopEng from "@/components/topeng";

const faq = faqContentEng;

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

			<TopEng pagetitle="Frequently Asked Questions">
				<RiQuestionnaireLine size="2.0rem" className="mx-2" />
			</TopEng>

			<section className="main-backcolor faq min-vh-100 w-100 border p-5">
				<h3>Questions and Answers</h3>
				<p className="eng-content fs-4">
					Use the form at the end of this page to send your questions
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
				{/* <section className="row w-75 p-2 pt-4" id="faq-form">
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
				</section> */}
			</section>
		</>
	);
};

export default Faqs;
