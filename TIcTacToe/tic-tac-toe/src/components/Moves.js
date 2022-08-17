import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
const Moves = () => {
  const context = useContext(GameContext);
  const jumpTo = (step) => {
    context.setStepNumber(step);
    context.setisXNext(step % 2 === 0);
  };

  const move = context.history.map((step, index) => (
    <li>
      <button onClick={() => jumpTo(index)}>
        {index ? `Go to move # ${index}` : `Go to game start`}
      </button>
    </li>
  ));
  return <ol>{move}</ol>;
};
export default Moves;
