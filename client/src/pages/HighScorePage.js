import React,{useContext, useEffect, useState} from 'react'
import HighScores from "../components/HighScore"
import {useSpring, animated, useTransition} from 'react-spring'

function HighScorePage() {
    const [toggle, set] = useState(true)

    const slides = useTransition(toggle, null, {
    
        from: {
            height: '100%', width: '100%',
            position: 'absolute',
            transform: "translate3d(250vh,0,0)" ,
         
        },
        enter: {   
            height: '100%', width: '100%',   
            position: 'absolute',
           
            transform: "translate3d(0vh,0,0)",
         
            },
        leave: {
            height: '100%', width: '100%',
            position: 'absolute',
            transform: "translate3d(-250vh,0,0)",
        },
        
      });
    
      useEffect(() => {
          set(true)
          
      }, [])
      
    return (
        <div style = {{}}>
        {slides.map(({ item, key, props }) => (
            item &&
        <animated.div style = {props}>
            <HighScores/>
        </animated.div>
        ))}
        </div>
    )
}

export default HighScorePage
