import { useState } from "react";
import CharacterCards from "./components/CharacterCards";
import Counter from "./components/Counter";
import useFetchCharacters from "./components/FetchCharacters";
import shuffleArray from "./components/shuffleArray";
import DisplayMessage from "./components/DisplayMessage";

function App() {
  const [clicked, setClicked] = useState([]);
  const [isLost, setIsLost] = useState(false);

  const { characterInfo, error, loading } = useFetchCharacters();

  function handleClick(id) {
    if (clicked.includes(id)) {
      setClicked([]);
      setIsLost(true);
    } else {
      setClicked([...clicked, id]);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  if (clicked.length === characterInfo.length) {
    return <DisplayMessage state={"won"} />;
  }

  shuffleArray(characterInfo);

  const score = clicked.length;

  return (
    <>
      {isLost && <DisplayMessage state={"lost"} />}
      <Counter score={score} />
      {characterInfo.map((character) => (
        <CharacterCards
          key={character.id}
          handleClick={() => handleClick(character.id)}
          img={character.image}
          name={character.name}
        />
      ))}
    </>
  );
}

export default App;
