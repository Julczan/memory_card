function Counter({ score, bestScore }) {
  return (
    <div className="counter">
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {score}</p>
    </div>
  );
}

export default Counter;
