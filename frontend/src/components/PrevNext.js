import React from 'react';
import Data from './data.json'
import './styles/BodyStyle.css'

function openCloseAnswer(e)
{
  let element = e.target;
  console.log(element)
  if(element.tagName.toLowerCase() !== "div")
    element = element.parentElement
  element = element.nextElementSibling
  
  
  const id = element.getAttribute("id").replace("A", "")
  if(element.getAttribute("visible").toLowerCase() === "true")
  {  
        element.setAttribute("visible", "false");
        element.style.display = "none";
        document.getElementById("Qs"+id).innerHTML = "^"
  }
  else
  {  
        element.setAttribute("visible", "true");
        element.style.display = "block";
        document.getElementById("Qs"+id).innerHTML = "x"
  }
}

function PrevNext() {
  let questionsAnswers = []
  const size = Math.min(Data.Questions.length, Data.Answers.length) 
  for(var s_itr = 0; s_itr < size; s_itr++)
    questionsAnswers.push({"question":Data.Questions[s_itr].text, "answer":Data.Answers[s_itr].text, "id":s_itr+1})

  let  questionsAnswersHTML=questionsAnswers.map((questionAnswer)=> <div key = { Math.random()} className = "question-answer" >
  <div key = {"Q" + questionAnswer.id +  Math.random()} className = "question" id = {"Q" + questionAnswer.id} onClick = {openCloseAnswer}>
    <span key = {"Qt" + questionAnswer  +  Math.random()}>{questionAnswer.question}</span>
    <span key = {"Qs" + questionAnswer.id  +  Math.random()} className = "symbol-button" id={"Qs" + questionAnswer.id}>^</span>
  </div>

  <span key = {"A" + questionAnswer.id + Math.random()} className = "answer" id = {"A" + questionAnswer.id} visible = "false">{questionAnswer.answer}</span>
  </div>)
  
  
    return (
      <div>
        <div className ="questions-frame">
          { 
            questionsAnswersHTML
          }
        </div>
      </div>
    );
  }

export default PrevNext;





