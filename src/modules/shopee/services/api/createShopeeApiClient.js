import { AxiosInstance } from "axios";

export const createShopeeApiClient = (api) => {
  return {
    login: login(api),    
  };
};

const login = (api) => async (data) => {
  try {
    const res = await api.post("/user/login", data);

    return res.data;
  } catch (error) {}
};
