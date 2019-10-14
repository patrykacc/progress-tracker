import React, {useState} from 'react';
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";
import {getExercisesAction} from "../actions";

const useStyles = makeStyles(theme => ({
   fab: {
       marginTop: '10px',
       marginBottom: '10px',
   }
}));

export default function AddNewExerciseButton({trainingId}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    let setNewTrainingInStore = () => {
        dispatch({type: 'EXERCISE_SELECTED', exercise: {id: 'new'}});
    };
    return (
        <TableRow>
            <TableCell onClick={setNewTrainingInStore} colSpan={4} align={"center"}>
                <Fab size="small" color="primary" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </TableCell>
        </TableRow>
    )



}

