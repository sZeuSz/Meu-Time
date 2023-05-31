import axios, { AxiosInstance } from "axios";
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default api;
