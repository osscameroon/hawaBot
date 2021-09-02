import React, { useState, useCallback, useEffect } from "react";
import faq from "./data.json";
import "./styles/BodyStyle.css";

const PrevNext = () => {
  let [selectedID, setSelectedID] = useState(-1);
  let [tab, setTab] = useState([]);

  useEffect(()=>{
    let currentTab = [];
    faq.forEach(item => {
      currentTab.push({
        question: item.text,
        answer: item.answer,
      });
      (item.children ?? []).forEach(item1 => {
        currentTab.push({
          question: item1.text,
          answer: item1.answer,
        });
      });
    });
    setTab(currentTab);
  });

  /*const toggleSelectedID = useCallback(
    (index) => {
      if (selectedID === index) {
        setSelectedID(-1);
      } else {
        setSelectedID(index);
      }
    },
    [selectedID]
  );*/

  // const questionsAnswers = faq?.map((faq, index) => {
  //   return {
  //     question: faq.text,
  //     answer: faq.answer,
  //     id: index + 1,
  //   };
  // });

  const questionsAnswersHTML = <></>;

  return (
    <div>
      <div className="questions-frame">
        {
          tab.map((questionAnswer, index) => (
            <div key={index} className="question-answer">
              <div
                className="question"
                onClick={() => setSelectedID(index)}>
                <span>
                  {questionAnswer.question}
                </span>
                {
                  index === selectedID ? (
                    <span className="answer">
                      {questionAnswer.answer}
                    </span>
                  ) : <></>
                }
                <span className="symbol-button">^</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PrevNext;
