import http from "../../baseUrl";

class forecastService {
	getAll(lat, lon) {
		return http.get(`api/forecast/${lat}/${lon}`);
	}
}

export default new forecastService();
