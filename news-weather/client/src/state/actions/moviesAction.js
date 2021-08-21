import movieService from "../services/movieService";
import { MOVIE_GET } from "./types";

export const getMovies = () => async (dispatch) => {
	try {
		const movies = await movieService.getAll();
		dispatch({
			type: MOVIE_GET,
			payload: movies.data,
		});
	} catch (err) {
		console.log(err);
	}
};
