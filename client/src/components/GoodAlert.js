import React, {useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Alert from '@material-ui/lab/Alert';
import {useTransition, animated, config} from 'react-spring'




function MakeAlert() {
    let  [animate, toggle] = useState(false)
   
    const transitions = useTransition(animate, null, {
    from: { 
        left: 0,
        right: 0,
        margin: "auto",
        position:"absolute",
        transform: 'translate3d(100vh,0,0)',
        opacity:0 
    },
    enter: { 
        left: 0,
        right: 0,
        margin: "auto",
        position:"absolute",
        transform: 'translate3d(0vh,0,0)' ,
        opacity:1
    },
    leave: { 
        left: 0,
        right: 0,
        margin: "auto",
        position:"absolute",
        transform: 'translate3d(-5vh,0,0)' ,
        opacity:0
    },
    })
    
    useEffect(() => {
        toggle(true)
        setInterval(()=>{
            toggle(false)
            }, 1000)
    }, [])


    return (
        <div>
        {transitions.map(({ item, key, props }) =>
    item && 
        <animated.div style = {props}> <Alert severity="success">
            Correct
          </Alert></animated.div>
        )}
    </div>

    )
}

export default MakeAlert