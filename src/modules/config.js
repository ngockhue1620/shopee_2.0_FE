export const getAppConfig = () => {
  return {
    api: {
      adminEndpoint: process.env.REACT_APP_ADMIN_API_ENDPOINT,
      shopeeEndpoint: process.env.REACT_APP_SHOPEE_API_ENDPOINT,
    },
  };
};
