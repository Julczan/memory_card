import { useEffect, useState } from "react";

const useFetchCharacters = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/[1,2,3,7,6]")
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

const CharacterImage = () => {
  const { imageUrl } = useFetchCharacters();

  if (imageUrl) {
    imageUrl.map((obj) => console.log(obj.image));
  }
};

export default CharacterImage;
