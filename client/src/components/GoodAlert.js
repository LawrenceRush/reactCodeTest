import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
import Alert from '@material-ui/lab/Alert';

function makeAlert() {
    return (
        <Alert severity="error">This is an error alert — check it out!</Alert>

    )
}

export default makeAlert
