import React, { useState } from "react";
import Result from "./Result";

const Question = () => {
  const [question, setQuestion] = useState(" ");

  const handleCheckInput = (e) => {
    setQuestion(e.target.value);
  };
  if (question.match(/\?$/) === null) {
    return (
      <>
        <label htmlFor="question">
          <strong> ask a question </strong>
          <input
            id="question"
            type="text"
            required
            onChange={handleCheckInput}
          />
        </label>
        <h5> You didn't ask a question (you have to use question mark "?") </h5>
      </>
    );
  } else {
    return (
      <>
        <label htmlFor="question">
          <strong> ask a question </strong>
          <input
            id="question"
            type="text"
            required
            onChange={handleCheckInput}
          />
        </label>
        <h5>question : {question}</h5>
        <Result />
      </>
    );
  }
};

export default Question;
