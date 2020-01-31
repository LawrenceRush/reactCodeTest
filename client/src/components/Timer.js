import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms'

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
        <span style = {{fontSize: "3vh"}}>
            <AccessAlarmsIcon style = {{fontSize: "3vh"}} /> {time}
        </span>
    )
}

export default Timer
