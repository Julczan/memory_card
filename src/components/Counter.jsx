function Counter({ score, bestScore, maxScore }) {
  return (
    <div className="counter">
      <p>Best Score: {bestScore}</p>
      <p>
        Current Score: {score} / {maxScore}
      </p>
    </div>
  );
}

export default Counter;
