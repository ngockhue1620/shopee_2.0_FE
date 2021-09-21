import axios, { AxiosInstance } from "axios";

export const createApiClient = (args) => {
  const { baseURL } = args;

  const api = axios.create({
    baseURL,
  });
  api.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}` || "";
    return config;
  });
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response?.data);
    }
  );

  return api;
};
