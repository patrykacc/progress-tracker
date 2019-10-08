import * as React from "react";
import {TableCell, TableRow} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {deleteExercise} from "../../services/exerciseService";

export default function ExerciseRowView({exercise}) {
    return (
        <TableRow>
            <TableCell component="th" scope="row">{exercise.name}</TableCell>
            <TableCell>{exercise.series}</TableCell>
            <TableCell>{exercise.repetitions}</TableCell>
            <TableCell>{exercise.weight}</TableCell>
            <TableCell>
                <IconButton onClick={remove} color="secondary">
                    <Delete/>
                </IconButton>
            </TableCell>
        </TableRow>
    )

    function remove() {
        deleteExercise(exercise.id)
            .then(response => {
                if (response.status === 200) {
                    console.log('exercise Removed');
                    //TODO reload exercises list
                }
            })
    }
}