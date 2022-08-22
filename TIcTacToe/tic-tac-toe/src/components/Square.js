import React from "react";
import { usePlayUserTurn } from "../contexts/GameContext";
const Square = ({ value, index }) => {
  const playUserTurn = usePlayUserTurn();

  return (
    <button className="square" onClick={() => playUserTurn(index)}>
      {value}
    </button>
  );
};

export default Square;
