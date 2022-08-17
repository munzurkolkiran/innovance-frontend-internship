import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "../Utils";
import Moves from "./Moves";
import { GameContext } from "../contexts/GameContext";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setisXNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isXNext ? "X" : "O";

    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setisXNext(!isXNext);
  };

  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (history.length > 9) {
    status = "Draw";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }
  return (
    <GameContext.Provider
      value={{ handleClick, history, setStepNumber, setisXNext }}
    >
      <div className="game">
        <div className="game-board">
          <Board squares={history[stepNumber]} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Moves />
        </div>
      </div>
    </GameContext.Provider>
  );
};

export default Game;
