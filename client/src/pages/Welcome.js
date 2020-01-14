import React,{useContext, useEffect, useState} from 'react'
import {useSpring, animated} from 'react-spring'
 
import Button from '@material-ui/core/Button';
import {QuizContext} from '../store/store'



function Welcome() {
    const [isToggled, toggle] = useState(true)
    const [show, changeShow] = useState(false)
    let {setPage} = useContext(QuizContext)
    const startQuiz = () => {
        setPage("QuizPage")
    }

    
    useEffect(() => {
        const interval = setInterval(() => {
          changeShow(true)
          clearInterval()
        }, 2000);
        return () => clearInterval(interval);
      }, []);
    const slide = useSpring({
        textAlign:'center',
        marginTop: '30vh',
        transform: isToggled ? 'translate3d(0,0vh,0)':'translate3d(0,50vh,0)',
        opacity: show ? 1:0
    })

    return (
        <animated.div style = {slide} >
            <h1>Code quiz</h1>
                <h2>Take a quick timed quiz to determine the level of your coding expertise.</h2>
               <Button  onClick={()=>{toggle(!isToggled); setPage("QuizPage")}}>Start quiz!</Button>

            
        </animated.div>
    )
}

export default Welcome
