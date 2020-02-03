import React, {useContext, useEffect, useState} from 'react'
import GoodAlert from './GoodAlert'
import BadAlert from './BadAlert'
import { QuizContext } from '../store/store'
import {useTransition, animated, config} from 'react-spring'

function Feedback() {
    
   
 return (
     <div>
    
    
                <BadAlert/>
             <GoodAlert/>

  
    </div>
    )
}


export default Feedback
