import {Grid, makeStyles} from "@material-ui/core";
import * as React from "react";
import TrainingDetails from "../trainingDetails/TrainingDetails";
import ExerciseDetails from "../../exercises/ExerciseDetails";
import Exercises from "../../exercises/Exercises";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default (props) => {
    const classes = useStyles();
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