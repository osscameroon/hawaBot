import React, { useState, useCallback } from "react";
import faq from "./data.json";
import "./styles/BodyStyle.css";

const Faq = ({ faq, parentID, depth = 0 }) => {
  let [selectedID, setSelectedID] = useState(-1);
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

  return faq.map((questionAnswer, index) => {
    return (
      <div className="questions-frame">
        <div key={index} className="question-answer">
          <div
            className={parentID == undefined ? "question" : "question-child"}
            onClick={() => {
              toggleSelectedID(index);
            }}
          >
            <div>{questionAnswer.text}</div>

            <span>^</span>
          </div>
          <div>
            {index === selectedID && (
              <div key={index}
              className={parentID == undefined ? "answer" : "answer-child"}
              >
                {questionAnswer.answer}
              </div>
            )}
          </div>
        </div>
        <div className="children">
          {index === selectedID && questionAnswer.children && (
            <div>
            <Faq faq={questionAnswer.children} parentID={index} depth={depth++}/>
            </div>
          )}
        </div>
      </div>
    );
  });
};

const PrevNext = () => {
  return (
    <div>
      <Faq faq={faq} />
    </div>
  );
};

export default PrevNext;
