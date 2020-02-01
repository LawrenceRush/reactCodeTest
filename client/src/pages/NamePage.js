import React,{useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useSpring, animated, useTransition} from 'react-spring'
import {
   round
} from 'mathjs'
import NamePageInfo from "../components/NamePageInfo"



function NamePage() {
  const[toggle, on] = useState(false)
   
    let {setPage} = useContext(QuizContext)

    useEffect(()=>{
      on(false)
      },[])

const namePageCon= {
  position: "relative"
  }

const slides = useTransition(toggle, null, {
    
  from: {
    
      
      position: 'absolute',
      transform: "translate3d(250vh,0,0)" ,
   
  },
  enter: { 
    

      
      position: 'absolute',
     ransform: "translate3d(0vh,0,0)",
      
      
      
      },
  leave: {
    
      
      position: 'absolute',
      transform: "translate3d(-250vh,0,0)",
  },
  
});







    return (
<div id = "namePageContainer" style = {namePageCon}>
{slides.map(({ item, key, props }) => (
  item &&
<animated.form   noValidate autoComplete="off">
<NamePageInfo/>
</animated.form>
      ))} 
      </div>
    )
}

export default NamePage
