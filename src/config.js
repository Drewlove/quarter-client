export default {
  API_ENDPOINT: process.env.REACT_APP_SERVER,
  HEADERS: {
    Authorization: process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
};
