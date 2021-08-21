import techService from "../services/technologyService";
import { TECH_GET } from "./types";

export const getTechnology = () => async (dispatch) => {
	try {
		const technology = await techService.getAll();

		dispatch({
			type: TECH_GET,
			payload: technology.data,
		});
	} catch (err) {
		console.log(err);
	}
};
