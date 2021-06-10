import { useState, useEffect } from "react";

const BASE_API_URL = process.env.REACT_APP_API_URL;

export function useFetch(url, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError("");
      try {
        const result = await fetch(BASE_API_URL + url).then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("Error occurred");
        });
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}
