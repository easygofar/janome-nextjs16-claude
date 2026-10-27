"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineOndemandVideo } from "react-icons/md";

import _ from "lodash";

////////////////////////////////////////////////////////////////////

// import FireFly from "../../../../src/components/FireFly/FireFly";
import MovieCard from "@/components/Services/moviecardeng";
import Search from "@/components/Search/search";
import TopEng from "@/components/topeng";
import Loading from "@/components/loading";
import * as ga from "@/lib/ga";
const movieTexts = {
	a: "نحوه کار و قابلیت چرخ‌خیاطی",
};

const _trainingMovies = [
	{
		models: [{ modelNum: "802P", brand: "janome" }],
		subModels: [{ modelNum: "802P", brand: "janome" }],
		embedID: "Ykw8N",
		id: "Ykw8N",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-802P.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "802A", brand: "janome" }],
		subModels: [
			{ modelNum: "808A", brand: "janome" },
			{ modelNum: "802A", brand: "janome" },
		],
		embedID: "nHEAI",
		id: "nHEAI",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-808A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "813A", brand: "janome" }],
		subModels: [
			{ modelNum: "815EX", brand: "janome" },
			{ modelNum: "815A", brand: "janome" },
			{ modelNum: "813A", brand: "janome" },
		],
		embedID: "pbU4u",
		id: "pbU4u",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-815A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "JH203", brand: "janome" }],
		subModels: [
			{ modelNum: "214A", brand: "janome" },
			{ modelNum: "213A", brand: "janome" },
			{ modelNum: "204D", brand: "janome" },
			{ modelNum: "JH203", brand: "janome" },
		],
		embedID: "bHTvI",
		id: "bHTvI",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-JH203.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "393A", brand: "janome" }],
		subModels: [
			{ modelNum: "393A", brand: "janome" },
			{ modelNum: "395A", brand: "janome" },
			{ modelNum: "397A", brand: "janome" },
			{ modelNum: "399A", brand: "janome" },
			{ modelNum: "JH696A", brand: "newhome" },
		],
		embedID: "3nELD",
		id: "3nELD",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-393A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "652A", brand: "janome" }],
		subModels: [
			{ modelNum: "660A", brand: "janome" },
			{ modelNum: "658A", brand: "janome" },
			{ modelNum: "654A", brand: "janome" },
			{ modelNum: "652A", brand: "janome" },
		],
		embedID: "MEmpl",
		id: "MEmpl",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-654A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "670A", brand: "janome" }],
		subModels: [
			{ modelNum: "671A", brand: "janome" },
			{ modelNum: "670A", brand: "janome" },
			// { modelNum: "JH1512", brand: "newhome" },
		],
		embedID: "nQRGM",
		id: "nQRGM",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-670A.jpg",
		brandEng: "janome",
	},

	{
		models: [{ modelNum: "680A", brand: "janome" }],
		subModels: [
			{ modelNum: "672A", brand: "janome" },
			{ modelNum: "680A", brand: "janome" },
		],
		embedID: "ybuXe",
		id: "ybuXe",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-672A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "730", brand: "juno" }],
		subModels: [
			{ modelNum: "730", brand: "juno" },
			{ modelNum: "740", brand: "juno" },
			{ modelNum: "750", brand: "juno" },
			{ modelNum: "760", brand: "juno" },
			{ modelNum: "JH1412", brand: "newhome" },
		],
		embedID: "rX2ZO",
		id: "rX2ZO",
		text: movieTexts["a"],
		brand: "Janome",
		image: "juno-730.jpg",
		brandEng: "juno",
	},

	{
		models: [{ modelNum: "6800A", brand: "janome" }],
		subModels: [{ modelNum: "6800A", brand: "janome" }],
		embedID: "21mje",
		id: "21mje",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-6800A.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "7000A", brand: "janome" }],
		subModels: [{ modelNum: "7000A", brand: "janome" }],
		embedID: "Mdcgh",
		id: "Mdcgh",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-7000A.jpg",
		brandEng: "janome",
	},

	{
		models: [{ modelNum: "1122A", brand: "janome" }],
		subModels: [
			{ modelNum: "1122A", brand: "janome" },
			{ modelNum: "1124A", brand: "janome" },
			{ modelNum: "1126A", brand: "janome" },
			{ modelNum: "1128A", brand: "janome" },
			{ modelNum: "1130A", brand: "janome" },
			{ modelNum: "1224A", brand: "janome" },
			{ modelNum: "1226A", brand: "janome" },
			{ modelNum: "1228A", brand: "janome" },
			{ modelNum: "1230A", brand: "janome" },
		],
		embedID: "kcCG0",
		id: "kcCG0",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-1122A.jpg",
		brandEng: "janome",
	},

	{
		models: [{ modelNum: "JH1010", brand: "newhome" }],
		subModels: [{ modelNum: "JH1010", brand: "newhome" }],
		embedID: "hpPOT",
		id: "hpPOT",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-JH1010.jpg",
		brandEng: "newhome",
	},

	{
		models: [{ modelNum: "TXL607", brand: "newhome" }],
		subModels: [{ modelNum: "TXL607", brand: "newhome" }],
		embedID: "QE3qC",
		id: "QE3qC",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-TXL607.jpg",
		brandEng: "newhome",
	},

	{
		models: [{ modelNum: "8000", brand: "janome" }],
		subModels: [
			{ modelNum: "8000", brand: "janome" },
			{ modelNum: "8100", brand: "janome" },
			{ modelNum: "8200", brand: "janome" },
			{ modelNum: "8300", brand: "janome" },
			{ modelNum: "8400", brand: "janome" },
			{ modelNum: "8500", brand: "janome" },
			{ modelNum: "8600", brand: "janome" },
			{ modelNum: "8700", brand: "janome" },
			{ modelNum: "8800", brand: "janome" },
			{ modelNum: "8900", brand: "janome" },
			{ modelNum: "720", brand: "janome" },
			{ modelNum: "1020", brand: "janome" },
			{ modelNum: "1040", brand: "janome" },
			{ modelNum: "1406", brand: "newhome" },
			{ modelNum: "JH1506", brand: "newhome" },
			{ modelNum: "1820", brand: "janome" },
			{ modelNum: "1916", brand: "janome" },
			{ modelNum: "1920", brand: "janome" },
			{ modelNum: "JH1206", brand: "janome" },
		],
		embedID: "k6olE",
		id: "k6olE",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-8000.jpg",
		brandEng: "janome",
	},

	{
		models: [{ modelNum: "JH1212", brand: "newhome" }],
		subModels: [
			{ modelNum: "JH1212", brand: "newhome" },
			{ modelNum: "JH1206", brand: "newhome" },
			{ modelNum: "1014", brand: "janome" },
			{ modelNum: "1016", brand: "janome" },
			{ modelNum: "1012", brand: "janome" },
			{ modelNum: "312", brand: "janome" },
			{ modelNum: "2018", brand: "janome" },
			{ modelNum: "2020", brand: "janome" },
			{ modelNum: "2030", brand: "janome" },
			{ modelNum: "2040", brand: "janome" },
			{ modelNum: "2050", brand: "janome" },
			{ modelNum: "4000", brand: "janome" },
			{ modelNum: "4025", brand: "hogaro" },
			{ modelNum: "4035", brand: "hogaro" },
			{ modelNum: "4045", brand: "hogaro" },
			{ modelNum: "5000", brand: "janome" },
			{ modelNum: "7000", brand: "janome" },
			{ modelNum: "7100", brand: "janome" },
			{ modelNum: "7200", brand: "janome" },
			{ modelNum: "7300BLACK", brand: "janome" },
		],
		embedID: "MtAu4",
		id: "MtAu4",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-JH1212.jpg",
		brandEng: "newhome",
	},

	{
		models: [{ modelNum: "ML744D", brand: "janome" }],
		subModels: [
			{ modelNum: "ML744D", brand: "janome" },
			{ modelNum: "ML644D", brand: "janome" },
		],
		embedID: "NolQX",
		id: "NolQX",
		text: movieTexts["a"],
		brand: "Janome",
		image: "janome-ML744D.jpg",
		brandEng: "janome",
	},
	{
		models: [{ modelNum: "9300DX", brand: "newhome" }],
		subModels: [{ modelNum: "9300DX", brand: "newhome" }],
		embedID: "PEO8L",
		id: "PEO8L",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-9300DX.jpg",
		brandEng: "newhome",
	},
	{
		models: [{ modelNum: "JH1512", brand: "newhome" }],
		subModels: [{ modelNum: "JH1512", brand: "newhome" }],
		embedID: "7wVky",
		id: "7wVky",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-JH1512.jpg",
		brandEng: "newhome",
	},
	{
		models: [{ modelNum: "NH1860", brand: "newhome" }],
		subModels: [
			{ modelNum: "DXL603", brand: "newhome" },
			{ modelNum: "XL601", brand: "newhome" },
			{ modelNum: "QXL605", brand: "newhome" },
			{ modelNum: "NH1860", brand: "newhome" },
		],
		embedID: "ANOCT",
		id: "ANOCT",
		text: movieTexts["a"],
		brand: "Janome",
		image: "newhome-NH1860.jpg",
		brandEng: "newhome",
	},
];

const trainingMovies = _trainingMovies;

const Training = () => {
	const [movie, setMovie] = useState({});
	const [searchKey, setSearchKey] = useState("");
	const [filteredTraning, setFilteredTraining] = useState(trainingMovies);
	const [modelPlaying, setModelPlaying] = useState("");

	useEffect(() => {
		if (searchKey === "") {
			setFilteredTraining(trainingMovies);
			return;
		}

		const found = trainingMovies.filter(tm => {
			return _.find(tm.subModels, function (sm) {
				return sm.modelNum.indexOf(searchKey) != -1;
			});
		});
		setFilteredTraining(() => found);
	}, [searchKey, trainingMovies]);

	const handleDeleteInput = () => {
		setSearchKey("");
		setFilteredTraining(trainingMovies);
	};
	const handleSearch = e => {
		setSearchKey(e.target.value.toUpperCase());
	};

	const handleClick = (id, model) => {
		ga.event({
			action: "startMovie " + model,
			params: {
				search_term: model,
			},
		});

		const filteredMovie = filteredTraning.filter(tm => tm.id === id);
		setModelPlaying(model);
		setMovie(() => filteredMovie[0]);
	};

	const handleClose = () => {
		setMovie({});
	};
	return (
		<>
			{/* <div className="p-0 position-relative w-100">
				<div className="green w-100 p-0 m-0">
					<div className="green w-100 h3-shadow  p-0 m-0 d-flex align-items-center  flex-justify-start">
						<MdOutlineOndemandVideo
							size="2rem"
							color="#f00"
							className="mx-2"
						/>
						<h1 className=" m-0 p-2">Janome Training Movies</h1>
					</div>
				</div>
			</div>
			<div className="section-background d-flex flex-column align-items-center py-5 m-0">
				<FireFly />
				<div className="pb-3"></div>
			</div> */}

			<TopEng pagetitle="Janome Training Movies">
				<MdOutlineOndemandVideo
					size="2rem"
					color="#f00"
					className="mx-2"
				/>
			</TopEng>
			<div className="d-flex flex-column p-0 py-3 bg-light align-items-center">
				<h5 className="text-center mx-auto pt-4 eng-content fs-4">
					Search model number
				</h5>
				<div className="pb-3">
					<Search
						searchKey={searchKey}
						onChange={handleSearch}
						onClick={handleDeleteInput}
						eng={true}
					/>
				</div>
			</div>
			<div className="main-backcolor h-100 d-flex justify-content-center flex-wrap  p-0 m-0 py-5">
				{filteredTraning.length ? (
					filteredTraning.map(obj => (
						<MovieCard
							key={uuidv4()}
							obj={obj}
							onClick={handleClick}
						/>
					))
				) : (
					<div className="vh-100 d-flex justify-content-center eng-content fs-4">
						<h4>Not Found</h4>
					</div>
				)}
			</div>
			<Modal show={!_.isEmpty(movie)} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{movie.brand}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="h_iframe-aparat_embed_frame position-relative">
						<div className="loading position-absolute">
							<Loading text="شروع فیلم ..." />
						</div>
						<span
							style={{ display: "block", paddingTop: "57%" }}
						></span>
						<iframe
							src={`https://www.aparat.com/video/video/embed/videohash/${movie.embedID}/vt/frame`}
							title={movie.title}
							allowFullScreen={true}
							webkitallowfullscreen="true"
							mozallowfullscreen="true"
						></iframe>
					</div>
					<div className="w-100 text-center fw-bold pt-2 lead eng-text">
						Training for <span>{modelPlaying}</span>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="danger"
						onClick={handleClose}
						className="eng-text p-1 px-3"
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Training;
