import React, { useContext } from "react";
import {
  GameContext,
  usePlayUserTurn,
  useHistory,
} from "../contexts/GameContext";
import Square from "./Square.js";

const Board = () => {
  const playUserTurn = usePlayUserTurn();
  const history = useHistory();
  const { stepNumber } = useContext(GameContext);
  return (
    <div className="board">
      {history[stepNumber].map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => playUserTurn(index)}
        />
      ))}
    </div>
  );
};
export default Board;
