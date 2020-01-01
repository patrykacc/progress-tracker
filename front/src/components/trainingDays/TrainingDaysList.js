import BaseList from "../base/BaseList";
import TrainingDayAPI from "../../services/trainingDayAPI";
import React, {Fragment} from "react";
import {useDispatch} from "react-redux";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {Button} from "antd";
import {useHistory, useParams} from 'react-router-dom'


export default ({trainingDays, refreshTrainingPlan}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {planId} = useParams();

    const trainingDayClick = (trainingDay) => {
        dispatch({type: 'TRAINING_DAY_UPDATED', trainingDay: trainingDay});
        dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'view'});
        history.push(history.location.pathname + '/days/' + trainingDay.id);
    };

    const addTrainingDay = () => {
        const newTrainingDay = {
            name: 'Nowy dzień treningowy',
            dayNumber: (trainingDays.length + 1),
            trainingPlan: {id: planId}
        }
        TrainingDayAPI.save(newTrainingDay)
            .then(response => {
                refreshTrainingPlan();
            })
    };
    return (
        <Fragment>
            <BaseList objects={trainingDays} title={'Dni treningowe:'} rowClick={trainingDayClick}/>
            <Button onClick={addTrainingDay}>Dodaj dzien treningowy</Button>
        </Fragment>
    )
}