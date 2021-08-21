import newsService from "../services/newsService";
import { NEWS_GET } from "./types";

export const getNews = () => async (dispatch) => {
	try {
		const news = await newsService.getAll();
		dispatch({
			type: NEWS_GET,
			payload: news.data,
		});
	} catch (err) {
		console.log(err);
	}
};
