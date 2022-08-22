import React from "react";
import Question from "./Question";

const Form = () => {
  const handleCheckInput = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleCheckInput}>
        <Question />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
