import React,{ useState, useEffect} from 'react'
import QuestionsContainer from "../components/Questions"
import Score from "../components/Score"
import Timer from "../components/Timer"
import {useSpring, animated, config, onRest, useTransition} from 'react-spring'
import { relative } from 'path'


function QuizPage() {
    const [toggle, on] = useState(true)
    const spreadOut = {
        display:'flex',
        justifyContent: 'space-between',
        padding: '0 15vh 0 15vh'
    }

    
    const slide = useSpring({
        
        from:{
        position: "relative",
        transform: 'translate3d(250vh,0,0)',
        textAlign:'center',
        marginTop: '20vh',
        height: '100%'
        },
        to:{
            position: "relative",
            transform: 'translate3d(0vh,0,0)',
            textAlign:'center',
            marginTop: '20vh',
            height: '90%'
        }
      
    })

    // const slides = useTransition(toggle, null, {
    
    //     from: { 
    //         position: 'absolute',
    //         opacity:1,
    //         transform: "translate3d(250vh,0,0)" ,
         
    //     },
    //     enter: { 
    //         position: 'absolute',
           
    //         transform: "translate3d(0vh,0,0)",
    //         left: 0,
    //         right: 0,
    //         margin: "auto"
            
    //         },
    //     leave: {
    //         position: 'absolute',
    //         transform: "translate3d(-250vh,0,0)",
           
    //     }
    //   });

    return (
        <animated.div style={slide}>
     <div style = {spreadOut}><Timer/> <Score/></div>
      
     
      <QuestionsContainer />
        </animated.div>
    )
}

export default QuizPage
