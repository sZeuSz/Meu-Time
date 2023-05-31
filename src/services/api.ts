import axios, { AxiosInstance } from "axios";
console.log(process.env);
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default api;
