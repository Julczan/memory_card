function DisplayMessage({ state, handleClick }) {
  let messageClass = "message-lost";
  if (state === "won") {
    messageClass = "message-won";
  }

  return (
    <div className={messageClass}>
      You {state}!<button onClick={handleClick}>Play again!</button>
    </div>
  );
}

export default DisplayMessage;
