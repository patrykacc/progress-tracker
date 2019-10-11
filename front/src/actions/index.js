import {getTraining} from "../services/trainingService";
import {getExercisesByTrainingId} from "../services/exerciseService";


export const authorizationSuccess = () => ({
    type: 'AUTHORIZATION_SUCCESS'
});

export const authorizationFailed = () => ({
    type: 'AUTHORIZATION_FAILED'
});

export const trainingsFetched = trainings => ({
    type: 'TRAININGS_FETCHED',
    trainings
});


export const getTrainingAction = (trainingId) => {
    return dispatch => {
        getTraining(trainingId)
            .then(training => {
                dispatch({type: 'GET_TRAINING_DONE', training});
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getExercisesAction = (trainingId) => {
    return (dispatch, getState) => {
        getExercisesByTrainingId(trainingId || getState().training.id)
            .then(exercises => {
                dispatch({type: 'GET_EXERCISES_DONE', exercises});
            })
            .catch(error => {
                console.log(error)
            })
    }
}