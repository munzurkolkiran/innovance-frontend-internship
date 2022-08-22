import React from "react";
import { usePlayUserTurn } from "../contexts/GameContext";
const Square = ({ value, index }) => {
  const playUserTurn = usePlayUserTurn(index);

  return (
    <button className="square" onClick={playUserTurn}>
      {value}
    </button>
  );
};

export default Square;
