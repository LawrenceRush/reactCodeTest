import React, {useContext, useEffect, useState} from 'react'
import GoodAlert from './GoodAlert'
import BadAlert from './BadAlert'
import { QuizContext } from '../store/store'
import {useTransition, animated, config} from 'react-spring'

function Feedback() {
    let {badAlert} = useContext(QuizContext) 
    let {goodAlert} = useContext(QuizContext)

    useEffect(() => {

        badAlert && console.log("badAlert should display")
    },[badAlert])
    useEffect(() => {
        goodAlert && console.log("goodAlert should display")
    },[goodAlert])
   
 return (
     <div>
    
    
            {badAlert && <BadAlert/>}
            {goodAlert && <GoodAlert/>}

  
    </div>
    )
}


export default Feedback
