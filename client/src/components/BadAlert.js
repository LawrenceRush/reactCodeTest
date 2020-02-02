import React, {useContext, useEffect, useState} from 'react'
import {QuizContext} from '../store/store'
import Alert from '@material-ui/lab/Alert';
import {useTransition, animated, config} from 'react-spring'
import ClearIcon from '@material-ui/icons/Clear';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function MakeAlert() {
    let  [animate, toggle] = useState(false)
const alertStyle = {
    height: "7vh",
    fontSize: "3vh"
}

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
            console.log("bad should go away now")

            toggle(false)
            }, 1000)
    }, [])


    return (
        <div>
        {transitions.map(({ item, key, props }) =>
    item && 
        <animated.div style = {props}> <Alert icon={false} style = {alertStyle}severity="error">
       <span>
           <FontAwesomeIcon icon={faTimes} style = {{marginRight: "10px", fontSize: "4vh"}} />  
           Incorrect 
           </span>
          </Alert></animated.div>
        )}
    </div>

    )
}

export default MakeAlert
