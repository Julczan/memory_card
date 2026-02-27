import { useEffect, useState } from "react";
import shuffleArray from "./shuffleArray";

const useFetchCharacters = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const array = [1, 2, 3, 4];
    fetch(`https://rickandmortyapi.com/api/character/${array}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageUrl(response));
  }, []);

  return { imageUrl };
};

const useCharacterArray = () => {
  const { imageUrl } = useFetchCharacters();

  if (imageUrl) {
    shuffleArray(imageUrl);
    return imageUrl;
  }
};

export default useCharacterArray;
