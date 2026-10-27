"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
// import FireFly from "../FireFly/FireFly";

function Home({ path }) {
	const tiltRef = useRef(null);
	useEffect(() => {
		if (!tiltRef.current) return;
		const element = tiltRef.current;
		VanillaTilt.init(element, {
			max: 10,
			speed: 6000,
		});

		return () => element.vanillaTilt.destroy();
	});
	return (
		<>
			{/* <FireFly outter="fixed" inner="fixed" /> */}

			<div
				id="app-js"
				className="w-100 p-0 d-flex flex-column align-items-between"
			>
				<div className="home-background">
					<div className="home-image-wrap">
						{/* {path === "/" || path === "/" ? ( */}
						<div
							className="home-background-machine no-effect"
							ref={tiltRef}
						></div>
						{/* ) : null} */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
