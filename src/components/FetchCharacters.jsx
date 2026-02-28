import { useEffect, useState } from "react";

const useFetchCharacters = () => {
  const [characterInfo, setCharacterInfo] = useState(null);
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
      .then((response) => setCharacterInfo(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { characterInfo, error, loading };
};

export default useFetchCharacters;
