export default {
  API_ENDPOINT: process.env.REACT_APP_SERVER,
  HEADERS: {
    // Authorization: "Bearer 1234",
    Authorization: process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
};
