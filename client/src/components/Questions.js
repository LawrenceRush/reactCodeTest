import React,{useContext, useEffect, useState,  useRef} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import GoodAlert from "./GoodAlert"
import BadAlert from "./BadAlert"
import {useTransition, animated, config} from 'react-spring'
import { withStyles } from '@material-ui/core/styles';



function McCon() {
    const [display, setDisplay] = useState(true)
    const [quizDone, finishQuiz] = useState(false)
    const[animate, setAnimate] =  useState(true)
    //let {questions} = (useContext(QuizContext))
    let {questions} = useContext(QuizContext)
    let {setPage} = useContext(QuizContext)
    let {qIndex} = useContext(QuizContext)
    let {increaseIndex} = useContext(QuizContext) 
    let {increaseScore} = useContext(QuizContext) 
    let {goToNamePage} = useContext(QuizContext) 

    let {result} = useContext(QuizContext) 
    const [wrong, setWrong] = useState(false)
    const [right, setRight  ] = useState(false)
    const liStyle = {
        
        listStyleType: "none",
        textAlign: 'center',
        display: "Grid",
        gridTemplateColumns: "20vh 20vh",
        gridTemplateRows: "20vh 20vh",
        gridColumnGap: "5px",
        gridRowGap: "5px",
        margin: 'auto',
        padding: 0,
        width: 'max-content',
        marginBottom: "10px",
        
    }

    

const slides = useTransition(animate, null, {
  config: config.slow,
    from: { 
        position: 'absolute',
        opacity: quizDone ? 0 : 1,
        transform: "translate3d(250vh,0,0)" ,
     
    },
    enter: { 
        position: 'absolute',
       
        transform: "translate3d(0vh,0,0)",
        left: 0,
        right: 0,
        margin: "auto",
        opacity: quizDone ? 0 : 1,        
        },
    leave: {
        position: 'absolute',
        transform: "translate3d(-250vh,0,0)",
        opacity: quizDone? 0 : 1,
        
        }
       
    }
    
  
  );
  
const delayChange = () => {
  if(qIndex == questions.length -1){
    finishQuiz(true)
    console.log("activated")
    goToNamePage(true)
  }
  const interval = setInterval(function(){ 
    increaseIndex();
    if(qIndex == questions.length -1){
      console.log("activated")
    }
    clearInterval(interval)
}, 250);//run this thang every 2 seconds
}

useEffect(() => {
console.log(quizDone)
},[quizDone])

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: '100%',
    width: '100%',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
      fontSize: "3vh"
    },
  })(Button);

const questionsChoices = questions[qIndex].choices.map((choice, index) => 
<div key= {index}><StyledButton onClick={(e) => {increaseScore(choice); setAnimate(!animate); delayChange(); }} 
variant="contained" color="primary">{choice}</StyledButton></div>);
    
    return (

      
        <div>
         {slides.map(({ item, key, props }) => (
        <animated.section   style={props} >
        <h1 style = {{fontSize:"3.5vh"}}>{questions[qIndex].title}</h1>  
        <div style = {liStyle}>{questionsChoices}</div>
       
        </animated.section>
        ))}    
         </div>    
  )
    
}

export default McCon
    //onClick={(e) => {increaseIndex(); increaseScore(choice)}