import useFetchCharacters from "./FetchCharacters";

function CharacterCards() {
  const { imageUrl } = useFetchCharacters();

  if (imageUrl) {
    return imageUrl.map((obj) => (
      <div className="character-card" key={obj.id}>
        <img src={obj.image}></img>
        <p>{obj.name}</p>
      </div>
    ));
  }
}

export default CharacterCards;
