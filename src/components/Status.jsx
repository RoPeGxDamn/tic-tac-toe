export default function Status({ isGameOver, xIsNext }) {
  return (
    <div className="game__status">
      <div>{isGameOver ? "Winner:" : "Your step:"}</div>
      <div>{xIsNext ? "X" : "O"}</div>
    </div>
  );
}
