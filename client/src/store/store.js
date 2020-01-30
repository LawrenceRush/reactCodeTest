import React, { createContext, useState, useEffect } from 'react';

export const QuizContext = createContext([])
//Importing Json Data
let questionsJson = require('../questions/questions.json');



//Code for the main store
//Set up appDatatae

function Store({ children }) {
  const [qIndex, setQIndex] = useState(0)
  const [questions, setQuestions] = useState(questionsJson.questions);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(90);
  const [result, setResult] = useState(null)
  const [page2show, setPage] = useState("Welcome")
  const [name, setName] = useState("")
  const [namePage, goToNamePage] = useState(false)
  const [goodAlert, showGoodAlert] = useState(false)
  const [badAlert, showBadAlert] = useState(false)
  
  const reset = () => {
    setScore(0)
    setPage("Welcome");
    setTime(90)
    setQIndex(0)
    goToNamePage(false)
  }
  
  const increaseIndex = () => {
    if(qIndex < questions.length-1 ){
      setQIndex(qIndex + 1)
      
    } 
    }
 
  const increaseScore = (choice) => {
    if(questions[qIndex].answer == choice){
      gotItRight(true)
    }
    else{
      gotItRight(false)
    }
   }

   const gotItRight = (bool) => {
     if(bool){
       setResult(true);
       setScore(score + 1)
       showGoodAlert(true)
       setInterval(()=>{
     showGoodAlert(false)
     }, 2000)

     } else{
       setResult(false)
       showBadAlert(true)
       setInterval(()=>{
        showBadAlert(false)
       }, 2000)
     }
   }

   const handleInputChange = (e) => {
    setName(e.target.value)
   }
 
   const addScore = () => {
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

    let obj = {"name": name, "score": score, "time": time, "date":today}
    
    fetch('/api/add ', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(res => res.json())
  }

  const beAnonymous = () => {
setName("Anonymous")

  }
  
  return (
    <QuizContext.Provider value={{questions, qIndex, increaseIndex,score, increaseScore, time, setTime, result,
     page2show, reset, setPage, name, handleInputChange, addScore, namePage, goToNamePage, beAnonymous, goodAlert, badAlert}}>
      {[children]}
    </QuizContext.Provider>
  )
}

export default Store
