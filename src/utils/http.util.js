import axios from "axios";
import { API_URL, LOCALE } from "@/env";

export const http = axios.create({
  baseURL: API_URL,
  timeout: 60000
});

// Add a request interceptor
http.interceptors.request.use(
  config => {
    config.headers.common["Accept-Language"] =
      window.localStorage.getItem("locale") || LOCALE;
    return config;
  },
  error => Promise.reject(error)
);

// Add a response interceptor
http.interceptors.response.use(
  response => {
    // Return JSON data
    if (response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    const err = (error.response && error.response.data) || error;
    if (error.response && error.response.status) {
      err.status = error.response.status;
    }

    return Promise.reject(err);
  }
);
export default http;
