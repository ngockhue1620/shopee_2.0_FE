import axios, { AxiosInstance } from "axios";

export const createApiClient = (args) => {
  const { baseURL } = args;

  const api = axios.create({
    baseURL,
  });

  return api;
};
