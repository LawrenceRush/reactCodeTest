import React,{useContext, useEffect} from 'react'
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function NamePage() {
    const classes = useStyles();
    let {score} = useContext(QuizContext)
    let {name} = useContext(QuizContext)
    let {handleInputChange} = useContext(QuizContext)
    let {time} = useContext(QuizContext)
    let {addScore} = useContext(QuizContext)

    let {setPage} = useContext(QuizContext)



    return (
        <form className={classes.root} noValidate autoComplete="off">
<div>You scored {score} with {time} left to go!</div>
    <TextField id="standard-basic" value = {name} onChange={(e) => {handleInputChange(e)}} label="Your Name" />
    <div>    <Button onClick={(e) => {addScore(); setPage("HighScore")} }>View high scores!</Button>
</div>
</form>
    )
}

export default NamePage
