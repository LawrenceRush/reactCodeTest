import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
function Timer() {

    let {time} = useContext(QuizContext)
    let {setTime} = useContext(QuizContext)

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
      
    return (
        <span>
            {time}
        </span>
    )
}

export default Timer
