import { useMemo, useState } from "react";
import Board from "./Board";
import Status from "./Status";
import History from "./History";
import { calculateWinner } from "../utils/calculateWinner";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentField = useMemo(() => history[history.length - 1], [history]);
  const isGameOver = useMemo(() => !!calculateWinner(currentField), [history]);

  const switchPlayer = (newField) => {
    setHistory([...history, newField]);
    calculateWinner(newField) || setXIsNext(!xIsNext);
  };

  const jumpTo = (move) => {
    if (isGameOver && move === history.length - 1) return;
    else if (move % 2 === 0) setXIsNext(true);
    else setXIsNext(false);
    setHistory(history.slice(0, move + 1));
  };

  return (
    <div className="game__field">
      <Status isGameOver={isGameOver} xIsNext={xIsNext} />
      <Board
        field={currentField}
        switchPlayer={switchPlayer}
        xIsNext={xIsNext}
        isGameOver={isGameOver}
      />
      <History history={history} jumpTo={jumpTo} />
    </div>
  );
}
