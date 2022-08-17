import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import Square from "./Square";

const Board = ({ squares }) => {
  const context = useContext(GameContext);
  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onClick={() => {
            context.handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onClick={() => {
            context.handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onClick={() => {
            context.handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onClick={() => {
            context.handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onClick={() => {
            context.handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onClick={() => {
            context.handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onClick={() => {
            context.handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onClick={() => {
            context.handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onClick={() => {
            context.handleClick(8);
          }}
        />
      </div>
    </>
  );
};

export default Board;
