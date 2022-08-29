import React, { useState,ChangeEvent } from "react";
import Result, {AnswerResponse} from "./Result";
import UserError from "./UserError";
import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledLabel,
} from "./styles/Form.styled";

const Form = () => {
  const [question, setQuestion] = useState<string>("");
  const [data, setData] = useState<AnswerResponse>({
    answer: "",
    forced: true,
    image: ""
  });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchApi = async () => {
    const response = await fetch("https://yesno.wtf/api/");
    const json = await response.json();
    setData(json);
  };

  const handleQuestion = (e:ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    if (question.match(/^[^?]/) && question.match(/\?$/)) {
      setIsValid(true);
      setIsError(false);
      fetchApi();
    }
    else {
      setIsValid(false);
      setIsError(true)
     }
    ;
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="question">
          <strong> Ask Your Question: </strong>
          <StyledInput
            id="question"
            type="text"
            required
            value={question}
            onChange={handleQuestion}
          />
        </StyledLabel>
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
      {isValid ? <Result question={question} data={data} /> : null}
      {isError ? <UserError /> : null}
    </>
  );
};

export default Form;
