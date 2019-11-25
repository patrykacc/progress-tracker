import React from "react";
import {Button, Descriptions} from "antd";
import TrainingDayExerciseAPI from "../../services/trainingDayExerciseAPI";
import {getExercisesAction, getTrainingAction} from "../../redux/actions/trainingActions";
import {useDispatch, useSelector} from "react-redux";

export default ({trainingDayExercise}) => {
    const [temporaryExercise, setTemporaryExercise] = React.useState();
    const training = useSelector(state => state.training);
    const dispatch = useDispatch();

    const edit = () => {
        setTemporaryExercise({...trainingDayExercise});
        dispatch({type: 'TRAINING_DAY_EXERCISE_VIEW_MODE', mode: 'edit'});
    };


    const remove = () => {
        TrainingDayExerciseAPI.delete(trainingDayExercise.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction());
                    dispatch(getTrainingAction(training.id));
                    dispatch({type: 'TRAINING_DAY_EXERCISE_VIEW_MODE', mode: 'empty'});
                }
            })
    };

    return (
        <React.Fragment>
            <Descriptions title="Szczegóły ćwiczenia" bordered>
                <Descriptions.Item label="Nazwa">{trainingDayExercise.name}</Descriptions.Item>
                <Descriptions.Item label="Ilość powtórzeń">{trainingDayExercise.repetitions}</Descriptions.Item>
                <Descriptions.Item label="Ilość serii">{trainingDayExercise.series}</Descriptions.Item>
            </Descriptions>
            <Button onClick={edit}>Edytuj</Button>
            <Button onClick={remove}>Usuń</Button>
        </React.Fragment>
    )
}