import React from 'react';
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
   fab: {
       marginTop: '10px',
       marginBottom: '10px',
   }
}));

export default function AddNewExerciseButton() {
    const classes = useStyles();
    const dispatch = useDispatch();

    let setExerciseViewToCreateMode = () => {
        dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'create'});
        dispatch({type: 'CLEAR_EXERCISE'});
    };
    return (
        <TableRow>
            <TableCell onClick={setExerciseViewToCreateMode} colSpan={4} align={"center"}>
                <Fab size="small" color="primary" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </TableCell>
        </TableRow>
    )



}

