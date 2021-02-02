import React, { useEffect, useState } from "react";
import Movies from "./showMovies.js";
import axios from "axios";
import rea from "./rea.ico";

const Getmovies = () => {
	const [movies, setMovies] = useState([]);
	const [load, setloading] = useState([true]);

	useEffect(() => {
		axios.get("/movies").then((res) => {
			setMovies(res.data);
			setloading(false);
			console.log(res.data);
		});
		console.log("Im the motherfucken app");
	}, []);

	return (
		<div>
			{load ? (
				<div style={{ marginTop: "5em" }}>
					<center>
						<h6 className="">
							<br />
							<br />
							LOADING...
							<br />
							<br />
							<img src={rea} style={{ minWidth: "5em" }} alt=""></img>
						</h6>
					</center>
				</div>
			) : (
				<center>
					<div className="movies">
						<hr />
						<h2>Here are Some of The Trending Movies</h2>
						{movies.map((move) => (
							<Movies
								key={move.Id}
								popularity={move.popularity}
								title={move.title}
								overview={move.description}
								image={move.poster}
								release={move.release}
							/>
						))}
					</div>
				</center>
			)}
		</div>
	);
};
export default Getmovies;
