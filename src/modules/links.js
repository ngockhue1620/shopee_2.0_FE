export const getAppLinks = () => {
  const common = {};
  const shopee = {
    home: () => "/",
    login: () => "/login",
    register: () => "/register",
  };
  const admin = {};

  return {
    common,
    shopee,
    admin,
  };
};
