import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
export default function TrainingPlanView() {
    const classes = useStyles();
    const activePlan = useSelector(state => state.activePlan);
    return (
        <Grid item xs={12} md={6} lg={3} >
            <Paper className={classes.paper}>
                <Typography variant={"subtitle2"}> Aktywny plan treningowy:</Typography>
                <Typography variant={"h5"}>Full Body Workout</Typography>
                <Button variant={"outlined"} size={"small"}>Zmień</Button>
            </Paper>
        </Grid>
    )

}