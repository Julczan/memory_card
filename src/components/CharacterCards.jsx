import useCharacterArray from "./FetchCharacters";

function CharacterCards() {
  const characterArr = useCharacterArray();

  if (characterArr) {
    return characterArr.map((obj) => (
      <div key={obj.id}>
        <img src={obj.image}></img>
      </div>
    ));
  }
}

export default CharacterCards;
