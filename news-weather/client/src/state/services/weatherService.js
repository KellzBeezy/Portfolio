import http from "../../baseUrl";

class weatherService {
  getAll() {
    return http.get("api/weather");
  }
}

export default new weatherService();
