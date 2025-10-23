import axios from "axios";

const client = axios.create({
  baseURL: "https://restaurantsearch.onrender.com",
  timeout: 10000, // 10s
});

// Example place to add interceptors (auth, logging) if/when needed
// client.interceptors.request.use(cfg => { return cfg; });

export default client;
