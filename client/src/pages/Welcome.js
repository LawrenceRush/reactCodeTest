import React,{useContext, useEffect, useState} from 'react'
import {useSpring, animated, config, onRest} from 'react-spring'
import "../css/welcome.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {QuizContext} from '../store/store'


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
function Welcome() {
    const classes = useStyles();
    const [isToggled, toggle] = useState(false)
    const [show, changeShow] = useState(false)
    let {setPage} = useContext(QuizContext)
    const startQuiz = () => {
        setPage("QuizPage")
    }
    const conStyle = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh"
    }

    const textStyle = {
        fontWeight: "normal",
        marginTop: 0,
        fontSize: "5vh"
    }

   
   
    const slide = useSpring({
       
        textAlign:'center',
        transform: isToggled ? 'translate3d(-250,0vh,0)' :'translate3d(0vh,0vh,0)',
        config: config.gentle,
        onRest: isToggled ?  startQuiz : null,
        from: {opacity:0},
        opacity:1
         
    })

    

    
    return (
        <div style = {conStyle}>
        <animated.div style = {slide} >
            <h1 style = {textStyle}>Code quiz</h1>
                <h2 style = {textStyle}>Take a quick timed quiz to determine the level of your coding expertise.</h2>
               <Button color="primary" className={classes.button} onClick={()=>{toggle(!isToggled)}}>Start quiz here</Button>
               
            
        </animated.div>
        </div>
    )
}

export default Welcome
