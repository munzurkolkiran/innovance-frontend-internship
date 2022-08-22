import React, { useEffect, useState } from "react";

const Result = ({ answer }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://yesno.wtf/api/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (answer.trim() === "yes") {
          if (data.answer === "yes") setQuery(data.image);
        } else if (answer.trim() === "no") {
          if (data.answer === "no") setQuery(data.image);
        }
      });
  }, []);

  return (
    <>
      <p>answer: {answer}</p>
      <p>
        image: <img src={query} alt="" />{" "}
      </p>
    </>
  );
};

export default Result;
