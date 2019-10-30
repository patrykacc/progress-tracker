import React from 'react';
import {makeStyles, TableCell, TableRow} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
   fab: {
       marginTop: '10px',
       marginBottom: '10px',
   }
}));

export default function AddNewExerciseButton() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const training = useSelector(state => state.training);

    let setExerciseViewToCreateMode = () => {
        if(training.id) {
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'create'});
            dispatch({type: 'CLEAR_EXERCISE'});
        }
    };
    return (
        <TableRow>
            <TableCell colSpan={4} align={"center"}>
                {training.id && <Fab onClick={setExerciseViewToCreateMode} size="small" color="primary" className={classes.fab}>
                    <AddIcon/>
                </Fab>}
            </TableCell>
        </TableRow>
    )



}

