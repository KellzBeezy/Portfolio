import { FORECAST_GET } from "../actions/types";

const initialState = {};
const forecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case FORECAST_GET:
			return action.payload;
		default:
			return state;
	}
};
export default forecastReducer;
