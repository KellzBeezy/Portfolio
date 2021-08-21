import http from "../../baseUrl";

class businessService {
	getAll() {
		return http.get("api/business");
	}
}

export default new businessService();
