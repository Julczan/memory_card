function DisplayMessage({ state, handleClick }) {
  return (
    <div className="message">
      You {state}!<button onClick={handleClick}>Play again!</button>
    </div>
  );
}

export default DisplayMessage;
