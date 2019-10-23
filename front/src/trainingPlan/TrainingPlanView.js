import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {getActiveTrainingPlanAction} from "../actions";

const useStyles = makeStyles(theme => ({
    button: {marginTop: "5px"},
    paper: {
        padding: theme.spacing(2),
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
export default function TrainingPlanView() {
    const classes = useStyles();
    const trainingPlan = useSelector(state => state.trainingPlan);
    useEffect(() => {
        getActiveTrainingPlanAction()
    });


    return (
        <Grid item xs={12} md={6} lg={3} >
            <Paper className={classes.paper}>
                <Typography variant={"subtitle2"}>Aktywny plan treningowy:</Typography>
                <Typography variant={"subtitle1"}>{trainingPlan.name ? trainingPlan.name : 'Brak aktywnego planu - atywuj jeden z istniejących lub utwórz nowy'}</Typography>
                <Button className={classes.button} variant={"outlined"} size={"small"}>Zmień</Button>
            </Paper>
        </Grid>
    )

}