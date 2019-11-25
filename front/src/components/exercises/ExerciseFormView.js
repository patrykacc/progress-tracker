import React from "react";
import {Button, Descriptions} from "antd";
import ExerciseAPI from "../../services/exerciseAPI";
import {getExercisesAction, getTrainingAction} from "../../redux/actions/trainingActions";
import {useDispatch, useSelector} from "react-redux";

export default ({exercise}) => {
    const [temporaryExercise, setTemporaryExercise] = React.useState();
    const training = useSelector(state => state.training);
    const dispatch = useDispatch(state => state.exercise);

    const edit = () => {
        setTemporaryExercise({...exercise});
        dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'edit'});
    };


    const remove = () => {
        ExerciseAPI.delete(exercise.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction());
                    dispatch(getTrainingAction(training.id));
                    dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'empty'});
                }
            })
    };

    return (
        <React.Fragment>
        <Descriptions title="Szczegóły ćwiczenia" bordered >
            <Descriptions.Item label="Nazwa">{exercise.name}</Descriptions.Item>
            <Descriptions.Item label="Obciążenie">{exercise.weight}</Descriptions.Item>
            <Descriptions.Item label="Ilość powtórzeń">{exercise.repetitions}</Descriptions.Item>
            <Descriptions.Item label="Ilość serii">{exercise.repetitions}</Descriptions.Item>
        </Descriptions>
            <Button onClick={edit}>Edytuj</Button>
            <Button onClick={remove}>Usuń</Button>
        </React.Fragment>
    )
}