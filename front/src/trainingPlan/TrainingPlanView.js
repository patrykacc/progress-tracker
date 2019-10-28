import React, {Fragment, useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {getActiveTrainingPlanAction} from "../actions";

const useStyles = makeStyles(theme => ({
    button: {marginTop: "5px"},
}));
export default function TrainingPlanView() {
    const classes = useStyles();
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();
    useEffect(() => {
        getActiveTrainingPlanAction()
    });

    const change = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
    }

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>Aktywny plan treningowy:</Typography>
            <Typography
                variant={"subtitle1"}>{trainingPlan.name ? trainingPlan.name : 'Brak aktywnego planu - atywuj jeden z istniejących lub utwórz nowy'}</Typography>
            <Button className={classes.button} variant={"outlined"} size={"small"} onClick={change}>Zmień</Button>
        </Fragment>
    )
}