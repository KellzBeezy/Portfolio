import { TECH_GET } from "../actions/types";

const initialState = [];
const technologyReducer = (state = initialState, action) => {
	switch (action.type) {
		case TECH_GET:
			return action.payload;
		default:
			return state;
	}
};
export default technologyReducer;
