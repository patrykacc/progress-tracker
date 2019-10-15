import {Grid} from "@material-ui/core";
import * as React from "react";
import TrainingDetails from "../trainingDetails/TrainingDetails";
import ExerciseDetails from "../../exercises/ExerciseDetails";
import Exercises from "../../exercises/Exercises";

export default (props) => {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
                <TrainingDetails {...props} />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
                <Exercises/>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
                <ExerciseDetails/>
            </Grid>
        </Grid>
    )
}