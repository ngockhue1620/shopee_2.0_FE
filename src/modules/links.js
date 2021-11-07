export const getAppLinks = () => {
  const common = {};
  const shopee = {
    home: () => "/",
    login: () => "/login",
    register: () => "/register",
    products: () => "/products",
    productDetail: (id = ":id") => `/product/${id}`,
    cart: () => "/cart",
  };
  const admin = {};

  return {
    common,
    shopee,
    admin,
  };
};
