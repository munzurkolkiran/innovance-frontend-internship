import React, { useState, createContext, useContext } from "react";
import calculateWinner from "../Utils";
export const GameContext = createContext();

export function GameProvider({ children }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const contextValue = {
    history,
    setHistory,
    stepNumber,
    setStepNumber,
    xIsNext,
    setXisNext,
  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export const usePlayUserTurn = (index) => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("usePlayUserTurn must be used within a GameProvider");
  }
  const {
    xIsNext,
    stepNumber,
    history,
    setHistory,
    setStepNumber,
    setXisNext,
  } = context;
  const playUserTurn = () => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    const winner = calculateWinner(history[stepNumber]);
    if (winner || squares[index]) return;
    squares[index] = xIsNext ? "X" : "O";
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  return playUserTurn;
};

export const useHistory = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useHistory must be used within a GameProvider");
  }
  return context.history;
};
