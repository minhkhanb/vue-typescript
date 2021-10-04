export default {
  API_URL: process.env.VUE_APP_API_URL,
  API_TIMEOUT: 20000,
  IS_LOGGING: process.env.NODE_ENV === 'development',
};
