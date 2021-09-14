export const getAppConfig = () => {
  return {
    api: {
      adminEndpoint: process.env.REACT_APP_ADMIN_API_ENDPOINT,
      shoppeEndpoint: process.env.REACT_APP_HABIT_API_ENDPOINT,
    },
  };
};
