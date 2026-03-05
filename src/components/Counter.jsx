function Counter({ score, bestScore }) {
  return (
    <div className="character-card">
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {score}</p>
    </div>
  );
}

export default Counter;
