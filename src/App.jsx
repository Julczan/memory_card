import { useState } from "react";
import CharacterCards from "./components/CharacterCards";
import Counter from "./components/Counter";
import useFetchCharacters from "./components/FetchCharacters";
import shuffleArray from "./components/shuffleArray";

function App() {
  const [clicked, setClicked] = useState([]);
  const { characterInfo, error, loading } = useFetchCharacters();

  function handleClick(id) {
    setClicked([...clicked, id]);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  shuffleArray(characterInfo);

  const count = clicked.length;

  return (
    <>
      <Counter count={count} />
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
