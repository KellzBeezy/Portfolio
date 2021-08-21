import { BUSINESS_GET } from "../actions/types";

const initialState = [];
const businessReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUSINESS_GET:
			return action.payload;
		default:
			return state;
	}
};
export default businessReducer;
