import Square from "./Square";

export default function Board({ field, switchPlayer, xIsNext, isGameOver }) {
  const handleSquareClick = (i) => {
    if (isGameOver || field[i]) return;
    const fieldClone = [...field];
    fieldClone[i] = xIsNext ? "X" : "O";
    switchPlayer(fieldClone);
  };

  return (
    <div className="game__board">
      {field.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
}
