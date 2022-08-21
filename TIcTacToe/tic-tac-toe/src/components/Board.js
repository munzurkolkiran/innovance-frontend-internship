import React, { useContext } from "react";
import {
  GameContext,
  usePlayUserTurn,
  useHistory,
} from "../contexts/GameContext";
import Square from "./Square.js";

const Board = () => {
  const playerTurn = usePlayUserTurn();
  const history = useHistory();
  const { stepNumber } = useContext(GameContext);
  return (
    <>
      <div className="board-row">
        <Square
          value={history[stepNumber][0]}
          onClick={() => {
            playerTurn(0);
          }}
        />
        <Square
          value={history[stepNumber][1]}
          onClick={() => {
            playerTurn(1);
          }}
        />
        <Square
          value={history[stepNumber][2]}
          onClick={() => {
            playerTurn(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={history[stepNumber][3]}
          onClick={() => {
            playerTurn(3);
          }}
        />
        <Square
          value={history[stepNumber][4]}
          onClick={() => {
            playerTurn(4);
          }}
        />
        <Square
          value={history[stepNumber][5]}
          onClick={() => {
            playerTurn(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={history[stepNumber][6]}
          onClick={() => {
            playerTurn(6);
          }}
        />
        <Square
          value={history[stepNumber][7]}
          onClick={() => {
            playerTurn(7);
          }}
        />
        <Square
          value={history[stepNumber][8]}
          onClick={() => {
            playerTurn(8);
          }}
        />
      </div>
    </>
  );
};
export default Board;
