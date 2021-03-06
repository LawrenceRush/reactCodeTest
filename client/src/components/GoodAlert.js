import React, {useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Alert from '@material-ui/lab/Alert';
import {useTransition, animated, config} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



function MakeAlert() {
    let {goodAlert} = useContext(QuizContext)
    const alertStyle = {
        height: "7vh",
        fontSize: "3vh"
    }

    const transitions = useTransition(goodAlert, null, {
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
    

    return (
        <div>
        {transitions.map(({ item, key, props }) =>
    item && 
    <animated.div style = {props}> <Alert icon={false} style = {alertStyle} severity="success">
    <span>
        <FontAwesomeIcon icon={faCheck} style = {{marginRight: "10px", fontSize: "4vh"}} />  
        Correct
        </span>
       </Alert></animated.div>
        )}
    </div>

    )
}

export default MakeAlert