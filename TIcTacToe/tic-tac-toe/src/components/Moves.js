import React from "react";
const Moves = ({ history, setXIsNext, setStepNumber }) => {
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const move = history.map((step, index) => (
    <li>
      <button onClick={() => jumpTo(index)}>
        {index ? `Go to move # ${index}` : `Go to game start`}
      </button>
    </li>
  ));
  return <ol>{move}</ol>;
};
export default Moves;
