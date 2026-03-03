function DisplayMessage({ state }) {
  if (state === "lost") return <dialog open>You lost!</dialog>;
  if (state === "won") return <dialog open>You won!</dialog>;
  return;
}

export default DisplayMessage;
