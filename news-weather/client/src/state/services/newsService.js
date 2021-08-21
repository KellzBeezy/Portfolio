import http from "../../baseUrl";

class newsService {
  getAll() {
    return http.get("api/news");
  }
}

export default new newsService();
