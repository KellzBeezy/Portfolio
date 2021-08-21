import http from "../../baseUrl";

class technologyService {
  getAll() {
    return http.get("api/tech");
  }
}

export default new technologyService();
