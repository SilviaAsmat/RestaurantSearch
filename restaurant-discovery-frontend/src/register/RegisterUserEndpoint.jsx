import client from "../api/client.js";

/**
 * GetPlace(options)
 * options: { query, radius = 1000 }
 * Returns: { results: Array }
 */
const RegisterUserEndpoint = async (options = {}) => {
  const { email, password } = options;

  try {
    const request = { email, password };
    const response = await client.post("/register", request);
    return {
      results: response.data?.results ?? [],
    };
  } catch (err) {
    console.error("Error registering user", err);
    throw err;
  }
};

export default RegisterUserEndpoint;
