import { MOVIE_GET } from "../actions/types";

const initialState = [];
const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVIE_GET:
			return action.payload;
		default:
			return state;
	}
};
export default moviesReducer;
