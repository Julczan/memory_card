function DisplayMessage({ state, handleClick }) {
  if (state === "lost")
    return (
      <dialog open>
        You lost!
        <button onClick={handleClick}>Play again!</button>
      </dialog>
    );
  if (state === "won") return <dialog open>You won!</dialog>;
  return;
}

export default DisplayMessage;
