import React,{useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useSpring, animated, useTransition} from 'react-spring'
import {
   round
} from 'mathjs'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
// 
function NamePage() {
  const[toggle, on] = useState(true)
    const classes = useStyles();
    let {score} = useContext(QuizContext)
    let {name} = useContext(QuizContext)
    let {handleInputChange} = useContext(QuizContext)
    let {time} = useContext(QuizContext)
    let {addScore} = useContext(QuizContext)

    let {setPage} = useContext(QuizContext)
    useEffect(()=>{
       console.log( Math.floor(0))
      })
const namePageCon= {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  
  
  
}

const infoStyles = {
   fontSize: '1.5em',
 textAlign:'center'

}
const buttonStyle = {
  textAlign: "Center"
}

const numberCircleStyle = {
  display:'inline-block',
  width: "1.5em",
  height:"1.5em",
  textAlign:'center',
  borderRadius: "50%",
  margin: '1rem auto',
background: "DeepSkyBlue"
}



const slides = useTransition(toggle, null, {
    
  from: {
    width: 'max-content',
      textAlign:'left',
      position: 'absolute',
      transform: "translate3d(250vh,0,0)" ,
   
  },
  enter: { 
    width: 'max-content',

      textAlign:'left',
      position: 'absolute',
     
      transform: "translate3d(0vh,0,0)",
      left: 0,
      right: 0,
      margin: "auto"
      
      },
  leave: {
    width: 'max-content',
      textAlign:'left',
      position: 'absolute',
      transform: "translate3d(-250vh,0,0)",
  },
  
});


//spring for raising number
let scoreAnim = useSpring({ 
    delay:  score * 250,
    to:{number: score}, 
    from: { number: 0 }, 
    config: {duration:(score * 500)} 
  })

  let timeAnim = useSpring({ 
    delay:  250,
    to:{number: time}, 
    from: { number: 0 }, 
    config: {duration:(time * 25)} 
  })


const delayChange = () => {
  on(!toggle)
  const interval = setInterval(function(){ 
    setPage("HighScore")
    clearInterval(interval)
}, 250);//run this thang every 2 seconds
}

    return (
<div style = {namePageCon}>
{slides.map(({ item, key, props }) => (
  item &&
<animated.form className={classes.root} style = {props} noValidate autoComplete="off">
<div style = {infoStyles}> You scored  
<animated.div style={numberCircleStyle}>{scoreAnim.number.interpolate(val => (score !== 0) ? Math.floor(val): 0)}
</animated.div> </div>

    <div style = {infoStyles} >Time leftover:  
    
    <animated.div style={numberCircleStyle}>{timeAnim.number.interpolate(val => (time !== 0) ? Math.floor(val): 0)}
</animated.div> </div>
    
    
    <TextField id="standard-basic" value = {name} onChange={(e) => {handleInputChange(e)}} label="Enter name here" />
    <div style = {buttonStyle}>   <Button onClick={(e) => {addScore(); delayChange()} }>View high scores!</Button>
</div>
</animated.form>
      ))}
      </div>
    )
}

export default NamePage
