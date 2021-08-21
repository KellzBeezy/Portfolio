import http from "../../baseUrl";

class movieService {
  getAll() {
    return http.get("api/movies");
  }
}

export default new movieService();
