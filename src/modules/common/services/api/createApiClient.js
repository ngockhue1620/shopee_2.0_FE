import axios, { AxiosInstance } from "axios";
import { useShopeeApiClient } from "../../../shopee/hooks/useShopeeApiClient";

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
      if (error.response.status === 401) {
        const formData = new FormData();
        formData.append("grant_type", "refresh_token");
        formData.append("refresh_token", localStorage.getItem("refresh_token"));
        formData.append(
          "client_id",
          "9vSIOToLQJDc71yBxaCl8gCdfLZdf5fHlGRzw48t"
        );
        formData.append(
          "client_secret",
          "onCWThWKzjaX7NQJCJeYmHLQbHtl8Bbjsk23RF3Ppahqwpqp1X55k40n13OmTwd43Ttsra8JWPjNJQAx1owwzHNTGdKHUp6M6eANssf6ZbyByJK6wZgHSbc2cI7kdLoE"
        );
        axios
          .post(`https://shopee20.herokuapp.com/api/v1/o/token/`, formData, {
            headers: { "content-type": "multipart/form-data" },
          })
          .then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("refresh_token", res.data.refresh_token);
          });
      }
      return Promise.reject(error.response?.data);
    }
  );

  return api;
};
