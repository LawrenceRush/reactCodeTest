import React,{useContext, useEffect, useState} from 'react'
import {useSpring, animated, config, onRest} from 'react-spring'
 
import Button from '@material-ui/core/Button';
import {QuizContext} from '../store/store'



function Welcome() {
    const [isToggled, toggle] = useState(false)
    const [show, changeShow] = useState(false)
    let {setPage} = useContext(QuizContext)
    const startQuiz = () => {
        setPage("QuizPage")
    }

    
    
   
    const slide = useSpring({
        textAlign:'center',
        marginTop: '30vh',
        transform: isToggled ? 'translate3d(-250,0vh,0)' :'translate3d(0vh,0vh,0)',
        config: config.gentle,
        onRest: isToggled ?  startQuiz : null
         
    })

    return (
        <animated.div style = {slide} >
            <h1>Code quiz</h1>
                <h2>Take a quick timed quiz to determine the level of your coding expertise.</h2>
               <Button  onClick={()=>{toggle(!isToggled)}}>Start quiz!</Button>

            
        </animated.div>
    )
}

export default Welcome
