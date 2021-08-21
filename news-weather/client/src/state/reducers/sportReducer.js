import { SPORT_GET } from "../actions/types";

const initialState = [];
const sportReducer = (state = initialState, action) => {
	switch (action.type) {
		case SPORT_GET:
			return action.payload;
		default:
			return state;
	}
};
export default sportReducer;
