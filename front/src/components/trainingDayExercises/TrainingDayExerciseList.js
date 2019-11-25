import {useDispatch, useSelector} from "react-redux";
import React from "react";
import BaseList from "../base/BaseList";
import TrainingDayExerciseAPI from "../../services/trainingDayExerciseAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {getTrainingDayAction} from "../../redux/actions/trainingDayActions";
import {Button} from "antd";


const TrainingDayExerciseList = () => {
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    const trainingDayExerciseClick = (trainingDayExercise) => {
        dispatch({type: 'TRAINING_DAY_EXERCISE_VIEW_MODE', mode: 'view'});
        dispatch({type: 'TRAINING_DAY_EXERCISE_UPDATED', trainingDayExercise: trainingDayExercise});
    };
    const addTrainingDayExercise = () => {
        const newTrainingDayExercise = {
            name: 'Nowe cwiczenie',
            trainingDay: {id: trainingDay.id}
        };
        TrainingDayExerciseAPI.save(newTrainingDayExercise)
            .then(response => {
                dispatch(getTrainingPlanAction());
                dispatch(getTrainingDayAction());
            })
    };

    return (
        <div>
            <BaseList objects={trainingDay.trainingDayExercises} title={'Ćwiczenia'} rowClick={trainingDayExerciseClick} fields={['name']}/>
            <Button onClick={addTrainingDayExercise}>Dodaj ćwiczenie</Button>
        </div>
    )
};

export default TrainingDayExerciseList;