import React from "react";
import ServerError from "./ServerError";
import {
  StyledContainer,
  StyledH4,
  StyledImage,
  StyledImageContainer,
  StyledP,
} from "./styles/Result.styled";

export type AnswerResponse = {
  answer: string;
  forced: boolean;
  image: string;
}

type QuestionAnswerProps = {
  data: AnswerResponse;
  question: string;
}
const Result : React.FC<QuestionAnswerProps> = ({ question, data }) => {
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
