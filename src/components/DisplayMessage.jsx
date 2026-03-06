function DisplayMessage({ state, handleClick }) {
  return (
    <dialog open>
      You {state}!<button onClick={handleClick}>Play again!</button>
    </dialog>
  );
}

export default DisplayMessage;
