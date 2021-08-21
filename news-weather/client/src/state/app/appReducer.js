import moviesReducer from "../reducers/moviesReducer";
import newsReducer from "../reducers/newsReducer";
import sportReducer from "../reducers/sportReducer";
import technologyReducer from "../reducers/technologyReducer";
import weatherReducer from "../reducers/weatherReducer";
import { combineReducers } from "redux";
import forecastReducer from "../reducers/forecastReducer";
import businessReducer from "../reducers/businessReducer";

const allReducers = combineReducers({
	movies: moviesReducer,
	news: newsReducer,
	sports: sportReducer,
	technology: technologyReducer,
	weather: weatherReducer,
	forecast: forecastReducer,
	business: businessReducer,
});

export default allReducers;
