import React,{useContext, useEffect, useState,  useRef} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import GoodAlert from "./GoodAlert"
import BadAlert from "./BadAlert"
import {useTransition, animated} from 'react-spring'
import { withStyles } from '@material-ui/core/styles';



function McCon() {
    
    const[animate, setAnimate] =  useState(false)
    //let {questions} = (useContext(QuizContext))
    let {questions} = useContext(QuizContext)
    let {qIndex} = useContext(QuizContext)
    let {increaseIndex} = useContext(QuizContext) 
    let {increaseScore} = useContext(QuizContext) 
    let {result} = useContext(QuizContext) 
    const [wrong, setWrong] = useState(false)
    const [right, setRight  ] = useState(false)
    const liStyle = {
        
        listStyleType: "none",
        textAlign: 'center',
        display: "Grid",
        gridTemplateColumns: "7em 7em",
        gridTemplateRows: "7em 7em",
        gridColumnGap: "5px",
        gridRowGap: "5px",
        margin: 'auto',
        padding: 0,
        width: 'max-content',
        marginBottom: "10px"
        
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

const slides = useTransition(animate, null, {
    
    from: { 
        position: 'absolute',
        opacity:1,
        transform: "translate3d(250vh,0,0)" ,
     
    },
    enter: { 
        position: 'absolute',
       
        transform: "translate3d(0vh,0,0)",
        left: 0,
        right: 0,
        margin: "auto"
        
        },
    leave: {
        position: 'absolute',
        transform: "translate3d(-250vh,0,0)",
       
    }
  });
  
const delayChange = () => {
  const interval = setInterval(function(){ 
    increaseIndex();
    clearInterval(interval)
}, 250);//run this thang every 2 seconds
}

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
    },
  })(Button);

const questionsChoices = questions[qIndex].choices.map((choice, index) => 
<div key= {index}><StyledButton onClick={(e) => {setAnimate(!animate); delayChange();  increaseScore(choice) }} 
variant="contained" color="primary">{choice}</StyledButton></div>);
    
    return (
        
        <div>
         {slides.map(({ item, key, props }) => (
           
        <animated.section   style={props} >
        <h1>{questions[qIndex].title}</h1>  
        <div style = {liStyle}>{questionsChoices}</div>
        { right && <GoodAlert/> }
        { wrong && <BadAlert/> }
        </animated.section>
        
    
         ))}
         </div>
  )
    
}

export default McCon
    //onClick={(e) => {increaseIndex(); increaseScore(choice)}