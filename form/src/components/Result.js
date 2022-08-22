import React, { useEffect, useState } from "react";

const Result = ({ question }) => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  let arr = [];
  useEffect(() => {
    fetch("https://yesno.wtf/api/")
      .then((res) => res.json())
      .then((data) => {
        arr.push(data);
        setQuery(arr[0].image);
        setAnswer(arr[0].answer);
      });
  }, []);

  return (
    <div>
      <p>answer: {answer}</p>
      <img src={query} alt="" />
    </div>
  );
};

export default Result;
