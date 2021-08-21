import { NEWS_GET } from "../actions/types";

const initialState = [];
const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEWS_GET:
			return action.payload;
		default:
			return state;
	}
};
export default newsReducer;
