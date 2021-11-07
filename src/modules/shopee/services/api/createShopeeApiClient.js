import { AxiosInstance } from "axios";

export const createShopeeApiClient = (api) => {
  return {
    login: login(api),
    getCategory: getCategory(api),
    getProducts: getProducts(api),
    getProductById: getProductById(api),
  };
};

const login = (api) => async (data) => {
  try {
    const res = await api.post("/api_oauth2/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data,
    });

    return res.data;
  } catch (error) {}
};

const getCategory = (api) => async () => {
  try {
    const res = await api.get("/categories");

    return res.data;
  } catch (error) {}
};
const getProducts = (api) => async (params) => {
  try {
    const res = await api.get("/products", { params });

    return res.data;
  } catch (error) {}
};
const getProductById = (api) => async (id) => {
  try {
    const res = await api.get(`/products/${id}`);

    return res.data;
  } catch (error) {}
};
