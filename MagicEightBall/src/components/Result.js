import React from "react";
import useGetAnswer from "../Utils";
const Result = ({ question }) => {
  const answer = useGetAnswer();
  return (
    <div className="result">
      <h4>Question: {question}</h4>
      {answer ? (
        <>
          <p>answer: {answer.answer}</p>
          <div className="imgContainer">
            <img src={answer.image} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Result;
