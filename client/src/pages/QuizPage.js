import React, { useState, useEffect, useContext } from 'react'
import QuestionsContainer from "../components/Questions"
import { QuizContext } from '../store/store'
import Score from "../components/Score"
import Timer from "../components/Timer"
import { useSpring, animated, config, onRest, useTransition } from 'react-spring'
import { relative } from 'path'

function QuizPage() {
    let { qIndex } = useContext(QuizContext)
    let { questions } = useContext(QuizContext)
    let { setPage } = useContext(QuizContext)
    let { page2Show } = useContext(QuizContext)
    let { namePage } = useContext(QuizContext)
    const [wrong, setWrong] = useState(false)
    const [right, setRight] = useState(false)
    let { result } = useContext(QuizContext)

    const [toggle, on] = useState(true)
    const spreadOut = {
        marginTop: '20vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 15vh 0 15vh'
    }


    const slides = useTransition(toggle, null, {

        from: {
            height: "auto",
            textAlign: 'center',
            position: 'absolute',

            transform: "translate3d(250vh,0,0)",

        },
        enter: {
            height: "auto",
            textAlign: 'center',
            position: 'absolute',

            transform: "translate3d(0vh,0,0)",
            left: 0,
            right: 0,
            margin: "auto"

        },
        leave: {
            height: "auto",
            textAlign: 'center',
            position: 'absolute',
            transform: "translate3d(-250vh,0,0)",
        },
        // onDestroyed: (qIndex >= questions.length - 1 )? setPage("NamePage") : null

    });

    const delayChange = () => {
        const interval = setInterval(function () {
            setPage("NamePage")
            clearInterval(interval)
        }, 500);//run this thang every 2 seconds
    }

    useEffect(()=>{
        if(namePage == true){
            on(!toggle)
            delayChange()
        }
    }, [namePage])

    return (
        <div id="quizPageCOn" style={{position: "relative" }}>
        
            {slides.map(({ item, key, props }) => (
                item &&
                <animated.div id="questionCon" style={props}>
                    <div style={spreadOut}><Timer /> <Score /></div>


                    <QuestionsContainer />
                    

                </animated.div>

            )
            )}
        </div>
    )
}

export default QuizPage
