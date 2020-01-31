import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import {QuizContext} from '../store/store'
import Button from '@material-ui/core/Button';



function GoHomeBtn() {
    let {reset} = useContext(QuizContext)
    
    return (
        <div style = {{textAlign:"center", marginTop: '5vh'}}>
            <Button style = {{fontSize:" 3vh"}} onClick={(e) => {reset()}} variant="contained" color="primary">
      Retake?
    </Button>
        </div>
    )
}

export default GoHomeBtn


// onClick={(e) => {setPage("Welcome")}