import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.8.106:5000/",
});
http.interceptors.request.use((req) => {
  return req;
});

export default http;
