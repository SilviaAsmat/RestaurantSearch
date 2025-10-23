import client from "./client";

const SearchPlacesEndpoint = async (options = {}) => {
  const { query, radius, type } = options;

  try {
    const request = { query, radius, type };
    const response = await client.post("/search", request);
    return {
      results: response.data?.results ?? [],
    };
  } catch (err) {
    console.error("Error in search places endpoint", err);
    const error = new Error("Something went wrong");
    throw error;
  }
};
export default SearchPlacesEndpoint;
