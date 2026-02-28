import useFetchCharacters from "./FetchCharacters";

function CharacterCards() {
  const { imageUrl, error, loading } = useFetchCharacters();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return imageUrl.map((obj) => (
    <div key={obj.id}>
      <img src={obj.image}></img>
    </div>
  ));
}

export default CharacterCards;
