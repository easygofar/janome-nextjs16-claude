import React from "react";
import { v4 as uuidv4 } from "uuid";

function AccordinItem({ obj }) {
	let { answers } = obj;

	function createMarkup(text) {
		return { __html: text };
	}

	return (
		<>
			<div className="accordion-item mb-2">
				<h2 className="accordion-header" id={`${obj.id}`}>
					<button
						className="accordion-button faq collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={`#collapse-${obj.id}`}
						aria-expanded="false"
						aria-controls={`collapse-${obj.id}`}
					>
						<span className="fs-5 d-flex justify-content-start px-3">
							{obj.question}
						</span>
					</button>
				</h2>
				<div
					id={`collapse-${obj.id}`}
					className="accordion-collapse collapse"
					aria-labelledby={`${obj.id}`}
					data-bs-parent="#accordionFlushExample"
				>
					<div
						className="accordion-body"
						style={{ background: "#fff" }}
					>
						{answers.map(answer => (
							<p className="fs-5 px-4" key={uuidv4()}>
								{answer.type ? <>&bull;&nbsp;&nbsp;</> : ""}
								<span
									dangerouslySetInnerHTML={createMarkup(
										answer.text
									)}
								/>
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default AccordinItem;
