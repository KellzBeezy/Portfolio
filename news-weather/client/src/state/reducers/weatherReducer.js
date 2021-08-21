import { WEATHER_GET } from "../actions/types";

const initialState = { icon: "01n" };
const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WEATHER_GET:
			return action.payload;
		default:
			return state;
	}
};
export default weatherReducer;
