import React, { useContext } from "react";
import { GameContext, useHistory } from "../contexts/GameContext";
import Square from "./Square.js";

const Board = () => {
  const history = useHistory();
  const { stepNumber } = useContext(GameContext);

  return (
    <div className="board">
      {history[stepNumber].map((square, index) => (
        <Square key={index} value={square} index={index} />
      ))}
    </div>
  );
};
export default Board;
