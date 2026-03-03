function Counter({ score }) {
  return (
    <div className="character-card">
      <p>Best Score: </p>
      <p>Current Score: {score}</p>
    </div>
  );
}

export default Counter;
