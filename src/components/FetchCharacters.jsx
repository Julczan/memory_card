import { useEffect, useState } from "react";

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

// const CharacterImage = () => {
//   const { imageUrl } = useFetchCharacters();

//   if (imageUrl) {
//     return imageUrl.map((obj) => <img src={obj.image}></img>);
//   }
// };

export default useFetchCharacters;
