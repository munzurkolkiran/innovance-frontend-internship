import React from "react";
import ServerError from "./ServerError";
const Result = ({ question, data }) => {
  return (
    <div className="result">
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
    </div>
  );
};

export default Result;
