import * as React from "react";
import {TableCell, TableRow} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {deleteExercise} from "../../services/exerciseService";
import {useDispatch} from "react-redux";
import {getExercisesAction} from "../../actions";

export default function ExerciseRowView({exercise}) {
    const dispatch = useDispatch();
    function remove(event) {
        event.stopPropagation();
        deleteExercise(exercise.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction())
                    console.log('exercise Removed');
                }
            });
    }

    return (
        <TableRow hover onClick={() => console.log(exercise.id)}>
            <TableCell component="th" scope="row">{exercise.name}</TableCell>
            <TableCell>{exercise.series}</TableCell>
            <TableCell>{exercise.repetitions}</TableCell>
            <TableCell>{exercise.weight}</TableCell>
            <TableCell>
                <IconButton id={exercise.id} onClick={remove} color="secondary">
                    <Delete/>
                </IconButton>
            </TableCell>
        </TableRow>
    )


}