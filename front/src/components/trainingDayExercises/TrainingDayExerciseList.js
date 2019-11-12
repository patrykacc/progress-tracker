import {useDispatch, useSelector} from "react-redux";
import React, {Fragment} from "react";
import BaseList from "../base/BaseList";
import {AddCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import TrainingDayExerciseAPI from "../../services/trainingDayExerciseAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {getTrainingDayAction} from "../../redux/actions/trainingDayActions";


const TrainingDayExerciseList = () => {
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    const trainingDayExerciseClick = () => {

    }
    const addTrainingDayExercise = () => {
        const newTrainingDayExercise = {
            name: 'nowe cwiczenie',
            trainingDay: {id: trainingDay.id}
        };
        TrainingDayExerciseAPI.save(newTrainingDayExercise)
            .then(response => {
                dispatch(getTrainingPlanAction());
                dispatch(getTrainingDayAction());
            })
    };

    return (
        <Fragment>
            <BaseList objects={trainingDay.trainingDayExercises} title={'Ćwiczenia'} rowClick={trainingDayExerciseClick} fields={['name']}/>
            <IconButton onClick={addTrainingDayExercise}>
                <AddCircle color={"primary"}/>
            </IconButton>
        </Fragment>
    )
};

export default TrainingDayExerciseList;