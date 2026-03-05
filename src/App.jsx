import { useState } from "react";
import CharacterCards from "./components/CharacterCards";
import Counter from "./components/Counter";
import useFetchCharacters from "./components/FetchCharacters";
import shuffleArray from "./components/shuffleArray";
import DisplayMessage from "./components/DisplayMessage";

function App() {
  const [clicked, setClicked] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  const { characterInfo, error, loading } = useFetchCharacters();

  function handleClick(id) {
    if (clicked.includes(id)) {
      setClicked([]);
      setIsLost(true);
    } else {
      setClicked([...clicked, id]);
    }
  }

  function handleNewRound() {
    setClicked([]);
    setIsLost(false);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  if (clicked.length === characterInfo.length) {
    return <DisplayMessage state={"won"} />;
  }

  shuffleArray(characterInfo);

  const score = clicked.length;
  if (score > bestScore) setBestScore(score);

  return (
    <>
      {isLost && <DisplayMessage state={"lost"} handleClick={handleNewRound} />}
      <Counter score={score} bestScore={bestScore} />
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
