import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useSpring, animated} from 'react-spring'
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
    const classes = useStyles();
    let {score} = useContext(QuizContext)
    let {name} = useContext(QuizContext)
    let {handleInputChange} = useContext(QuizContext)
    let {time} = useContext(QuizContext)
    let {addScore} = useContext(QuizContext)

    let {setPage} = useContext(QuizContext)
    useEffect(()=>{
       console.log( round(1.7,0))
      })
const formStyle = {

  textAlign: "Center",
  marginTop: '25vh'
}

const infoStyles = {
  width: 'max-content',
   fontSize: '1.5em',
 margin: "auto"
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

//spring for raising number
let props = useSpring({ to:{number: 0}, from: { number: 10 }, config: {duration:10000} })
console.log(props)
    return (
      
        <form className={classes.root} style = {formStyle} noValidate autoComplete="off">
<div style = {infoStyles}> You scored  <animated.div style={numberCircleStyle}>{props.number.interpolate(val => Math.floor(val))}</animated.div> </div>

    <div style = {infoStyles} >Time leftover:  <div style={numberCircleStyle}>{time}</div> </div>
    <TextField id="standard-basic" value = {name} onChange={(e) => {handleInputChange(e)}} label="Enter name here" />
    <div style = {infoStyles}>   <Button onClick={(e) => {addScore(); setPage("HighScore")} }>View high scores!</Button>
</div>
</form>
    )
}

export default NamePage
