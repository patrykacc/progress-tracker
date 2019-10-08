import {Grid, Paper, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit} from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import ExerciseRowAddNew from "./AddNewExerciseButton.js";
import * as React from "react";
import {Fragment} from "react";
import ExerciseRowView from "./ExerciseRowView";


export default ({exercises, trainingId}) => {
    if (Array.isArray(exercises)) {
        exercises = exercises.map(exercise => {
            return <ExerciseRowView key={exercise.id} exercise={exercise}/>
        })
    }

    return (

        <Fragment>
            <Typography variant={"h3"}>Cwiczenia:</Typography>
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
                    <ExerciseRowAddNew trainingId={trainingId}/>
                </TableBody>
            </Table>
        </Fragment>

    )
}
