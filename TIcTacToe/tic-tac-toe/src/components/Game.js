import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "./Utils";
import Moves from "./Moves";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (history.length > 9) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves
          history={history}
          setStepNumber={setStepNumber}
          setXIsNext={setXIsNext}
        />
      </div>
    </div>
  );
};

export default Game;
