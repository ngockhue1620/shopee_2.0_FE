import { AxiosInstance } from "axios";

export const createShopeeApiClient = (api) => {
  return {
    login: login(api),
    getCategory: getCategory(api),
  };
};

const login = (api) => async (data) => {
  try {
    const res = await api.post("/user/login", data);

    return res.data;
  } catch (error) {}
};
const getCategory = (api) => async () => {
  try {
    const res = await api.get("/categories");

    return res.data;
  } catch (error) {}
};
