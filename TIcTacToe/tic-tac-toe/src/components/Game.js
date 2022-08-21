import React, { useContext } from "react";
import Board from "./Board";
import calculateWinner from "../Utils";
import Moves from "./Moves";
import { GameContext, useHistory } from "../contexts/GameContext";

const Game = () => {
  const history = useHistory();
  const { stepNumber, xIsNext } = useContext(GameContext);
  const winner = calculateWinner(history[stepNumber]);
  const nextPlayer = xIsNext ? "X" : "O";
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <h3>History</h3>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + nextPlayer}</h3>

        <Moves />
      </div>
    </div>
  );
};

export default Game;
