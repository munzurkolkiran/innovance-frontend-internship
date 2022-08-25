import React from "react";
import ServerError from "./ServerError";
import { StyledResult } from "./styles/Result.styled";
const Result = ({ question, data }) => {
  return (
    <StyledResult>
      {data ? (
        <>
          <h4>Question: {question}</h4>
          <p>answer: {data.answer}</p>
          <div className="imgContainer">
            <img src={data.image} alt="" />
          </div>
        </>
      ) : (
        <ServerError />
      )}
    </StyledResult>
  );
};

export default Result;
