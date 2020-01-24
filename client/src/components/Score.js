import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'



function Score() {
    
    let {score} = useContext(QuizContext) 
    return (
        <span>
            Score {score}
        </span>
    )
}

export default Score
