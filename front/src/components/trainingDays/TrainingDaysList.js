import BaseList from "../base/BaseList";
import TrainingDayAPI from "../../services/trainingDayAPI";
import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {AddCircle} from "@material-ui/icons";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";

export default () => {

    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

    const trainingDayClick = (trainingDay) => {
        dispatch({type: 'TRAINING_DAY_UPDATED', trainingDay: trainingDay});
        dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'view'});
    };

    const addTrainingDay = () => {
        const newTrainingDay = {
            name: 'Dzień ' + (trainingPlan.trainingDays.length + 1),
            dayNumber: (trainingPlan.trainingDays.length + 1),
            trainingPlan: {id: trainingPlan.id}
        }
        TrainingDayAPI.save(newTrainingDay)
            .then(response => {
                dispatch(getTrainingPlanAction());
            })
    };
    return (
        <Fragment>
            <BaseList objects={trainingPlan.trainingDays} title={'Dni treningowe:'} rowClick={trainingDayClick}/>
            <IconButton onClick={addTrainingDay}>
                <AddCircle color={"primary"}/>
            </IconButton>
        </Fragment>
    )
}