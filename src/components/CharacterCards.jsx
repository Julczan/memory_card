function CharacterCards({ handleClick, img, name }) {
  return (
    <div className="character-card" onClick={handleClick}>
      <div className="portal"></div>
      <img src={img}></img>
      <p>{name}</p>
    </div>
  );
}

export default CharacterCards;
