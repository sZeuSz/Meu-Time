import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
});

export default api;
