import React from "react";
import ServerError from "./ServerError";
import {
  StyledContainer,
  StyledH4,
  StyledImage,
  StyledImageContainer,
  StyledP,
} from "./styles/Result.styled";
const Result = ({ question, data }) => {
  return (
    <StyledContainer>
      {data ? (
        <>
          <StyledH4>Question: {question}</StyledH4>
          <StyledP>answer: {data.answer}</StyledP>
          <StyledImageContainer>
            <StyledImage src={data.image} alt="" />
          </StyledImageContainer>
        </>
      ) : (
        <ServerError />
      )}
    </StyledContainer>
  );
};

export default Result;
