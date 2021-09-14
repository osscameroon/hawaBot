import React, { useState, useCallback } from "react";
import faq from "./data.json";
import "./styles/BodyStyle.css";

const Faq = ({faq}) => {
  let [selectedID, setSelectedID] = useState(-1)
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
    return(
      <div className="questions-frame">
        <div key={index} className="question-answer">
            <div
              className="question"
              onClick={() =>{
                toggleSelectedID(index)
              }}
            >
              <div>{questionAnswer.text}</div>
              
              <span>^</span>
            </div>
            <div>
            {
              index === selectedID && (
                <div key={index} className="answer">
                  {questionAnswer.answer}
                </div>
              )
            }
            </div>
          
        </div>
        <div className="children" >
          {
            index === selectedID && 
            questionAnswer.children &&
            <Faq faq={questionAnswer.children}  />
          }
        
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
