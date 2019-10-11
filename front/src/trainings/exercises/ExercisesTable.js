import {TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import AddNewExerciseButton from "./AddNewExerciseButton.js";
import * as React from "react";
import {Fragment} from "react";
import ExerciseRowView from "./ExerciseRowView";


export default ({exercises, trainingId, ableToAddExercise, reloadExercises}) => {
    if (Array.isArray(exercises)) {
        exercises = exercises.map(exercise => {
            return <ExerciseRowView key={exercise.id} exercise={exercise} reloadExercises={reloadExercises}/>
        })
    }

    return (
        <Fragment>
            <Typography variant={"h6"}>Cwiczenia:</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Cwiczenie</TableCell>
                        <TableCell>Serii</TableCell>
                        <TableCell>Powtórzeń</TableCell>
                        <TableCell>Obciążenie</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exercises}
                    {ableToAddExercise ? <AddNewExerciseButton trainingId={trainingId}/> : null}
                </TableBody>
            </Table>
        </Fragment>

    )
}
