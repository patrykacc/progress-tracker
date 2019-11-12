import TrainingAPI from "../../services/trainingAPI";
import {getExercisesByTrainingId} from "../../services/exerciseAPI";

export const trainingsFetched = trainings => ({
    type: 'TRAININGS_FETCHED',
    trainings
});
export const getTrainingAction = (trainingId) => {
    return (dispatch, getState) => {
        TrainingAPI.get(trainingId || getState.training.id, dispatch)
            .then(training => {
                if (training) {
                    dispatch({type: 'GET_TRAINING_DONE', training});
                }
            })
    }
};
export const getExercisesAction = (trainingId) => {
    return (dispatch, getState) => {
        getExercisesByTrainingId(trainingId || getState().training.id, dispatch)
            .then(exercises => {
                dispatch({type: 'GET_EXERCISES_DONE', exercises});
            })
            .catch(error => {
                console.log(error)
            })
    }
};