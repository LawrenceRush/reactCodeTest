import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
import Alert from '@material-ui/lab/Alert';
import {useSpring, animated, config} from 'react-spring'




function MakeAlert() {
    const multiAnimation = useSpring({
      duration: 1000,
        from: { 
         
           opacity:0
        },
          to: 
      
              { 
             
                opacity:1
              }
            });


    return (
        <animated.div style ={multiAnimation}>
            <Alert severity="success">
                This is an error alert — check it out!
                </Alert>
            </animated.div>

    )
}

export default MakeAlert