import React, {useContext, useEffect} from 'react'
import WelcomePage from "./Welcome"
import QuizPage from "../pages/QuizPage"
import NamePage from "../pages/NamePage"
import {QuizContext} from '../store/store'
import QuestionsContainer from "../components/Questions"
import HighScore from "./HighScorePage"
import { Container } from '@material-ui/core'



function WebsiteBod() {
    let {page2show} = useContext(QuizContext)
    
    return (
        <section id = "websiteBody" style = {{position:"relative"}}>
            { page2show == "Welcome" ? <WelcomePage/> : null }
            { page2show == "QuizPage" ? <QuizPage/> : null }
            { page2show == "NamePage" ? <NamePage/> : null }
            { page2show == "HighScore" ? <HighScore/> : null }

     
      </section>
    )
}

export default WebsiteBod
