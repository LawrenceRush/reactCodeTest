import React from 'react'
import QuestionsContainer from "../components/Questions"
import Score from "../components/Score"
import Timer from "../components/Timer"

function QuizPage() {

    const center = {
        textAlign:'center',
        marginTop: '30vh'
    }
    const spreadOut = {
        display:'flex',
        justifyContent: 'space-between',
        padding: '0 15vh 0 15vh'
    }
    return (
        <div style={center}>
            <div style = {spreadOut}><Timer/> <Score/></div>
      
     
      <QuestionsContainer />
        </div>
    )
}

export default QuizPage
