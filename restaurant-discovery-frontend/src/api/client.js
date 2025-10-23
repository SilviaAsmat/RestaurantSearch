import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://127.0.0.1:3000/",
  timeout: 10000, // 10s
});

// Example place to add interceptors (auth, logging) if/when needed
// client.interceptors.request.use(cfg => { return cfg; });

export default client;
