import React from "react";
import Data from "./data.json";
import "./styles/BodyStyle.css";

const openCloseAnswer = (event) => {
  let element = event.target;
  console.log(element);
  if (element.tagName.toLowerCase() !== "div")
    //returns the question
    element = element.parentElement;
  //returns the corresponding answer to the question
  element = element.nextElementSibling;

  //gets the value of the id of the the HTML element associated with it. The IDs are returned as A1,...An. A is replaced with an empty string so that the id should be returned
  const id = element.getAttribute("id").replace("A", "");
  //the answers are made visible taking into the consideration the id gotten above
  if (element.getAttribute("visible").toLowerCase() === "true") {
    element.setAttribute("visible", "false");
    element.style.display = "none";
    document.getElementById("Qs" + id).innerHTML = "^";
  } else {
    element.setAttribute("visible", "true");
    element.style.display = "block";
    document.getElementById("Qs" + id).innerHTML = "x";
  }
};

const PrevNext = () => {
  let questionsAnswers = [];
  const size = Math.min(Data.Questions.length, Data.Answers.length);
  for (var s_itr = 0; s_itr < size; s_itr++)
    questionsAnswers.push({
      question: Data.Questions[s_itr].text,
      answer: Data.Answers[s_itr].text,
      id: s_itr + 1,
    });

  let questionsAnswersHTML = questionsAnswers.map((questionAnswer, index) => (
    <div key={index} className="question-answer">
      <div
        key={"Q" + questionAnswer.id + { index }}
        className="question"
        id={"Q" + questionAnswer.id}
        onClick={openCloseAnswer}
      >
        <span key={"Qt" + questionAnswer + { index }}>
          {questionAnswer.question}
        </span>
        <span
          key={"Qs" + questionAnswer.id + { index }}
          className="symbol-button"
          id={"Qs" + questionAnswer.id}
        >
          ^
        </span>
      </div>

      <span
        key={"A" + questionAnswer.id + { index }}
        className="answer"
        id={"A" + questionAnswer.id}
        visible="false"
      >
        {questionAnswer.answer}
      </span>
    </div>
  ));

  return (
    <div>
      <div className="questions-frame">{questionsAnswersHTML}</div>
    </div>
  );
};

export default PrevNext;
