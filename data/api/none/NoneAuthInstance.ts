import { endpoint } from "@/data/utils/constants";
import axios, { AxiosRequestConfig } from "axios";

const noneAuthInstance = axios.create({
  baseURL: endpoint,
  withCredentials: true,
});

noneAuthInstance.defaults.headers.common["Content-Type"] = "application/json";

noneAuthInstance.defaults.timeout = 3000;

noneAuthInstance.interceptors.request.use(
  async (config: any | AxiosRequestConfig) => {
    const baseUrl = config.baseURL;
    const url = config.url;

    console.log(`📮 API Request Url 👉`, baseUrl + url);
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default noneAuthInstance;
