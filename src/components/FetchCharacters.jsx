import { useEffect, useState } from "react";

const useFetchCharacters = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const array = [1, 2, 3, 4];
    fetch(`https://rickandmortyapi.com/api/character/${array}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageUrl(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageUrl, error, loading };
};

export default useFetchCharacters;
