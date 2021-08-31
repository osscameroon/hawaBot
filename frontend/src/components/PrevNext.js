import React, { useState, useCallback } from "react";
import Data from "./data.json";
import "./styles/BodyStyle.css";

const PrevNext = () => {
  const [selectedID, setSelectedID] = useState(-1);
  const toggleSelectedID = useCallback(
    (index) => {
      if (selectedID === index) {
        setSelectedID(-1);
      } else {
        setSelectedID(index);
      }
    },
    [selectedID]
  );

  const questionsAnswers = Data?.Questions?.map((question, index) => {
    return {
      question: question.text,
      answer: Data.Answers[index].text,
      id: index + 1,
    };
  });

  let questionsAnswersHTML = questionsAnswers.map((questionAnswer, index) => (
    <div key={index} className="question-answer">
      <div
        key={index}
        className="question"
        onClick={() => toggleSelectedID(index)}
      >
        <span key={index}>{questionAnswer.question}</span>
        {index === selectedID && (
          <span className="answer" key={index}>
            {questionAnswer.answer}
          </span>
        )}
        <span className="symbol-button">^</span>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="questions-frame">{questionsAnswersHTML}</div>
    </div>
  );
};

export default PrevNext;
