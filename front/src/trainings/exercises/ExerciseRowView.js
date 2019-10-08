import * as React from "react";
import {TableCell, TableRow} from "@material-ui/core";

export default function ExerciseRowView(props) {
    return (
        <TableRow>
            <TableCell component="th" scope="row" >{props.exercise.name}</TableCell>
            <TableCell >{props.exercise.series}</TableCell>
            <TableCell >{props.exercise.repetitions}</TableCell>
            <TableCell >{props.exercise.weight}</TableCell>
            <TableCell><button onClick={deleteExercise}>Usuń</button></TableCell>
        </TableRow>
    )



    function deleteExercise() {
        console.log('deleteExercise - implement me NOW !!!!')
    }
}