import React from "react";

export default function TabDetail({ tab }) {
	return (
		<ul className="list-group list-group-flush px-0 py-3">
			{tab.data &&
				tab.data.map(item => (
					<li
						key={item}
						className="list-group-item"
						style={{
							fontSize: "1.1rem ",
						}}
					>
						{item}
					</li>
				))}
		</ul>
	);
}
