import weatherService from "../services/weatherService";
import { WEATHER_GET } from "./types";

export const getWeather = () => async (dispatch) => {
	try {
		const weather = await weatherService.getAll();
		dispatch({
			type: WEATHER_GET,
			payload: weather.data,
		});
	} catch (err) {
		console.log(err);
	}
};
