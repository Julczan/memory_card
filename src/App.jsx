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

  if (loading) return <div className="loading">Loading...</div>;
  if (error)
    return <div className="error">A network error was encountered</div>;

  if (isLost) {
    return <DisplayMessage state={"lost"} handleClick={handleNewRound} />;
  }

  shuffleArray(characterInfo);

  const score = clicked.length;
  const maxScore = characterInfo.length;

  if (score > bestScore) setBestScore(score);

  if (score === maxScore) {
    return <DisplayMessage state={"won"} handleClick={handleNewRound} />;
  }

  return (
    <main>
      <Counter score={score} bestScore={bestScore} maxScore={maxScore} />
      <div className="cards">
        {characterInfo.map((character) => (
          <CharacterCards
            key={character.id}
            handleClick={() => handleClick(character.id)}
            img={character.image}
            name={character.name}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
