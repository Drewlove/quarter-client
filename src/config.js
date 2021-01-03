export default {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_ENDPOINT:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9000/api"
      : "https://limitless-stream-84911.herokuapp.com/api",
  HEADERS: {
    Authorization: process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
};
