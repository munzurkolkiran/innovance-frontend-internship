import React, { useState } from "react";
import Result from "./Result";
import Error from "./Error";

const Form = () => {
  const [question, setQuestion] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      question.match(/^[^?]/) && question.match(/\?$/) //fix regex double or more question mark
        ? setIsValid(true)
        : setIsValid(false)
    );
    if (
      question.match(/^[^?]/) && question.match(/\?$/) //fix regex double or more question mark
        ? setIsError(false)
        : setIsError(true)
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          <strong> Ask Your Question: </strong>
          <input
            id="question"
            type="text"
            required
            value={question}
            onChange={handleQuestion}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isValid ? <Result question={question} /> : null}
      {isError ? <Error /> : null}
    </>
  );
};

export default Form;
