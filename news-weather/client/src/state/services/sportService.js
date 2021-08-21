import http from "../../baseUrl";

class sportService {
  getAll() {
    return http.get("api/sport");
  }
}

export default new sportService();
