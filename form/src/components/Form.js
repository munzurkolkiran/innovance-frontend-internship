import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Form = () => {
  const [answer, setAnswer] = useState(" ");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleCheckInput = (e) => {
    setAnswer(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (
      answer.toLowerCase().trim() === "yes" ||
      answer.toLowerCase().trim() === "no"
    ) {
      alert(`question : ${answer.trim()} submitted`);
      setIsSubmit(true);
    } else {
      alert("you just passed wrong asnwer you should use yes or no as answer");
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="answer">
          <Question />
          <input
            id="answer"
            type="text"
            value={answer}
            required
            onChange={handleCheckInput}
            placeholder="yes or no"
          />
        </label>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
        {isSubmit && <Result answer={answer.trim().toLowerCase()} />}
      </form>
    </div>
  );
};

export default Form;
