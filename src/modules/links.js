export const getAppLinks = () => {
  const common = {};
  const shopee = {
    home: () => "/",
    login: () => "/login",
    register: () => "/register",
    products: () => "/products",
    productDetail: (id = ":id") => `/product/${id}`,
  };
  const admin = {};

  return {
    common,
    shopee,
    admin,
  };
};
