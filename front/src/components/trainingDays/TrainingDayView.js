import {makeStyles, Paper, Typography} from "@material-ui/core";
import React, {Fragment} from "react";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Edit} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import TrainingDayAPI from "../../services/trainingDayAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import TrainingDayExerciseList from "../trainingDayExercises/TrainingDayExerciseList";


export default () => {
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    function remove() {
        TrainingDayAPI.delete(trainingDay.id)
            .then(response => {
                dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'empty'});
                dispatch({type: 'CLEAR_TRAINING_DAY'});
                dispatch(getTrainingPlanAction());
            })
    }

    return (
        <React.Fragment>
            <Typography variant={"h4"}>Dzień treningowy:</Typography>
            <Typography variant={"body2"}>{trainingDay.name}</Typography>
            <Fragment>
                <IconButton color="primary">
                    <Edit/>
                </IconButton>
                <IconButton onClick={remove} color="secondary">
                    <Delete/>
                </IconButton>
            </Fragment>
            <TrainingDayExerciseList/>
        </React.Fragment>
    )
}