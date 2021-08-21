import businessService from "../services/businessService";
import { BUSINESS_GET } from "./types";

export const getBusiness = () => async (dispatch) => {
	try {
		const buzz = await businessService.getAll();
		dispatch({
			type: BUSINESS_GET,
			payload: buzz.data,
		});
	} catch (err) {
		console.log(err);
	}
};
