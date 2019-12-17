import React from "react";
import BaseList from "../base/BaseList";
import TrainingDayExerciseAPI from "../../services/trainingDayExerciseAPI";
import {Button} from "antd";
import {useParams} from "react-router";


const TrainingDayExerciseList = ({refreshTrainingDay, trainingDayExercises}) => {
    const {dayId} = useParams();

    const trainingDayExerciseClick = (trainingDayExercise) => {

    };

    const addTrainingDayExercise = () => {
        const newTrainingDayExercise = {
            name: 'Nowe cwiczenie',
            trainingDay: {id: dayId}
        };
        TrainingDayExerciseAPI.save(newTrainingDayExercise)
            .then(response => {
                debugger
                refreshTrainingDay();
            })
    };

    return (
        <div>
            <BaseList objects={trainingDayExercises} title={'Ćwiczenia'} rowClick={trainingDayExerciseClick} fields={['name']}/>
            <Button onClick={addTrainingDayExercise}>Dodaj ćwiczenie</Button>
        </div>
    )
};

export default TrainingDayExerciseList;