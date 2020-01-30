import React, {useContext, useEffect, useState} from 'react'
import GoodAlert from './GoodAlert'
import BadAlert from './BadAlert'
import { QuizContext } from '../store/store'
import {useTransition, animated, config} from 'react-spring'

function Feedback() {
    let {badAlert} = useContext(QuizContext) 
    let {goodAlert} = useContext(QuizContext)
   
 return (
     <div>
    
   
            {badAlert && <BadAlert/>}
            {goodAlert && <GoodAlert/>}

  
    </div>
    )
}


export default Feedback
