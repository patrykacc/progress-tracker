import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getActiveTrainingPlanAction} from "../../redux/actions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {margin: "5px"},
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
        <div>
            <Typography variant={"subtitle2"}>Aktywny plan treningowy:</Typography>
            <Typography variant={"subtitle1"}>
                {trainingPlan.name ? trainingPlan.name : 'Brak aktywnego planu - atywuj jeden z istniejących lub utwórz nowy'}
            </Typography>
            <Button className={classes.button} variant={"contained"} size={"small"} onClick={change} color={"primary"}>Zmień</Button>
        </div>
    )
}