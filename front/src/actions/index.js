import {getTraining} from "../services/trainingService";
import {getExercisesByTrainingId} from "../services/exerciseService";

export const authorizationSuccess = {
    type: 'AUTHORIZATION_SUCCESS'
};

export const authorizationFailed = {
    type: 'AUTHORIZATION_FAILED'
};

export const trainingsFetched = trainings => ({
    type: 'TRAININGS_FETCHED',
    trainings
});


export const getTrainingAction = (trainingId) => {
    return (dispatch, getState) => {
        getTraining(trainingId || getState.training.id, dispatch)
            .then(training => {
                if (training) {
                    dispatch({type: 'GET_TRAINING_DONE', training});
                }
            })
    }
}

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
}

