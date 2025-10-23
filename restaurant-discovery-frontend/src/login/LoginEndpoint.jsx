import client from "../api/client";

/**
 * GetPlace(options)
 * options: { query, radius = 1000 }
 * Returns: { results: Array }
 */
const LoginEndpoint = async (options = {}) => {
  const { email, password } = options;
  console.log("in login endpoint");
  try {
    const request = { email, password };
    const response = await client.post("/login", request);
    console.log("login endpoint " + { response });
    return {
      response,
    };
  } catch (err) {
    console.error("Error in login endpoint", err);
    throw err;
  }
};

export default LoginEndpoint;
