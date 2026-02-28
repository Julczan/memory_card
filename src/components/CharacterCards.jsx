import { useState } from "react";
import useFetchCharacters from "./FetchCharacters";
import shuffleArray from "./shuffleArray";

function CharacterCards() {
  const [clicked, setClicked] = useState([]);
  const { characterInfo, error, loading } = useFetchCharacters();

  function handleClick(id) {
    console.log(`clicked ${id}`);
    setClicked([...clicked, id]);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  shuffleArray(characterInfo);

  return characterInfo.map((obj) => (
    <div
      className="character-card"
      key={obj.id}
      onClick={() => handleClick(obj.id)}
    >
      <img src={obj.image}></img>
      <p>{obj.name}</p>
    </div>
  ));
}

export default CharacterCards;
