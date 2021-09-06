import React, { useState, useEffect,useCallback } from "react";
import faq from "./data.json";
import "./styles/BodyStyle.css";

const PrevNext = () => {
  let [selectedID, setSelectedID] = useState(-1)
  let [tab, setTab] = useState([]);
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
  }, []);

  return (
    <div>
      <div className="questions-frame">
        {
          tab.map((questionAnswer, index) => (
            <div key={index} className="question-answer">
              <div
                className="question"
                onClick={() => { 
                  //alert(true);
                  toggleSelectedID(index);
                }}>
                  <div>
                    {questionAnswer.question}
                  </div>
                  {
                    index === selectedID ? (
                      <div key={index} className="answer">
                        {questionAnswer.answer}
                      </div>
                    ) : ""
                  }
                  <span className="symbol-button">^</span>
              </div>
            </div>
          ))
        }
       
      </div>
    </div>
  )
}



export default PrevNext;
