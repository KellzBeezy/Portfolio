import React, { useEffect, useState } from "react";
import Movies from "./showMovies.js";
import { useSelector } from "react-redux";
import rea from "./rea.ico";

const GetMovies = () => {
	const res = useSelector((state) => state.movies);
	const [movies, setMovies] = useState([]);
	const [load, setLoading] = useState([true]);

	useEffect(() => {
		if (res) {
			setMovies(res);
			setLoading(false);
		}
	}, [res]);

	return (
		<div id="movies">
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
export default GetMovies;
