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

  

  
  const increaseIndex = () => {
    if(qIndex < questions.length-1 ){
      console.log("questions.length: ", questions.length-1)
      setQIndex(qIndex + 1)
      console.log("q index:", qIndex)
      
    } else {
      setPage("NamePage")
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

     } else{
       setResult(false)
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
console.log(today)
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
   

 return (
    <QuizContext.Provider value={{questions, qIndex, increaseIndex,score, increaseScore, time, setTime, result,
     page2show, setPage, name, handleInputChange, addScore}}>
      {[children]}
    </QuizContext.Provider>
  )
}

export default Store
