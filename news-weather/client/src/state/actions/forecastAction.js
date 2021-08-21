import forecastService from "../services/forecastService";
import { FORECAST_GET } from "./types";

export const getForecast = (lat, lon) => async (dispatch) => {
	try {
		const forecast = await forecastService.getAll(lat, lon);
		dispatch({
			type: FORECAST_GET,
			payload: forecast,
		});
	} catch (err) {
		console.log(err);
	}
};
