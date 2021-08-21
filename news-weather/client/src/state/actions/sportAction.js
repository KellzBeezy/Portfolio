import sportService from "../services/sportService";
import { SPORT_GET } from "./types";

export const getSports = () => async (dispatch) => {
	try {
		const sports = await sportService.getAll();
		dispatch({
			type: SPORT_GET,
			payload: sports.data,
		});
	} catch (err) {
		console.log(err);
	}
};
