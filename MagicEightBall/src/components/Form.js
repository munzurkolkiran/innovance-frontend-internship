import React, { useState } from "react";
import Result from "./Result";
import UserError from "./UserError";
import { StyledForm } from "./styles/Form.styled";

const Form = () => {
  const [question, setQuestion] = useState("");
  const [data, setData] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchApi = async () => {
    const response = await fetch("https://yesno.wtf/api/");
    const json = await response.json();
    setData(json);
  };

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      question.match(/^[^?]/) && question.match(/\?$/) //fix regex double or more question mark
        ? (setIsValid(true), setIsError(false), fetchApi())
        : (setIsValid(false), setIsError(true))
    );
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
      </StyledForm>
      {isValid ? <Result question={question} data={data} /> : null}
      {isError ? <UserError /> : null}
    </>
  );
};

export default Form;
