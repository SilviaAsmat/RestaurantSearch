import { useEffect, useRef, useState } from "react";
import SearchPlacesEndpoint from "../api/SearchPlacesEndpoint";

export default function usePlaces({ query, radius, type } = {}) {
  const [data, setData] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    SearchPlacesEndpoint({ query, radius, type })
      .then((res) => setData(res))
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [query, radius, type]);

  return { data, loading, error };
}
