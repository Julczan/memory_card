function DisplayMessage({ state, handleClick }) {
  let messageClass = "message-lost";
  if (state === "won") {
    messageClass = "message-won";
  }

  return (
    <main>
      <div className={messageClass}>
        You {state}!<button onClick={handleClick}>Play again!</button>
      </div>
    </main>
  );
}

export default DisplayMessage;
