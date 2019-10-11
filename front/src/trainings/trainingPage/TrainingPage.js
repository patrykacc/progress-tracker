import {Grid, makeStyles, Paper} from "@material-ui/core";
import * as React from "react";
import TrainingDetails from "../trainingDetails/TrainingDetails";
import ExerciseDetails from "../exercises/ExerciseDetails";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    paper: {
        overflowX: "auto"
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper style={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TrainingDetails {...props} />
                    </Grid>
                    <Grid item xs={6}>
                        <ExerciseDetails/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}