import * as React from "react";
import {TableCell, TableRow} from "@material-ui/core";
import {useDispatch} from "react-redux";

export default function ExerciseRowView({exercise}) {
    const dispatch = useDispatch();
    const setExerciseInStore = () => {
        dispatch({type: 'EXERCISE_SELECTED', exercise});
    };
    return (
        <TableRow hover onClick={setExerciseInStore}>
            <TableCell component="th" scope="row">{exercise.name}</TableCell>
            <TableCell>{exercise.series}</TableCell>
            <TableCell>{exercise.repetitions}</TableCell>
            <TableCell>{exercise.weight}</TableCell>
        </TableRow>
    )
}