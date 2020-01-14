import React,{useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import GoodAlert from "./GoodAlert"
import BadAlert from "./BadAlert"


function McCon() {
    //let {questions} = (useContext(QuizContext))
    let {questions} = useContext(QuizContext)
    let {qIndex} = useContext(QuizContext)
    let {increaseIndex} = useContext(QuizContext) 
    let {increaseScore} = useContext(QuizContext) 
    let {result} = useContext(QuizContext) 
    const [wrong, setWrong] = useState(false)
    const [right, setRight] = useState(false)
    const liStyle = {
        listStyleType: "none"
    }

    useEffect(()=>{
     showAlert()
    },[qIndex])

    const showAlert = () => {
    if (result === true){
        setWrong(true)
        setInterval(function(){ 
            setWrong(false)
        }, 3000);
    } else if (result === false ){
            setRight(true)
            setInterval(function(){ 
                setRight(false)
            }, 3000);
        
    }
    

}

const questionsChoices = questions[qIndex].choices.map((choice, index) => 
<li key= {index}><Button  onClick={(e) => {increaseIndex(); increaseScore(choice)} }variant="contained" color="primary">{choice}</Button></li>);
    
    return (
        <section>
    <h1>{questions[qIndex].title}</h1>  
    <ul style = {liStyle}>{questionsChoices}</ul>
    { right && <GoodAlert/> }
    { wrong && <BadAlert/> }
    
    </section>
    )
}

export default McCon
