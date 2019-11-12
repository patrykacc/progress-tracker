import TrainingDayAPI from "../../services/trainingDayAPI";

export const getTrainingDayAction = trainingDayId => {
    return (dispatch, getState) => {
        TrainingDayAPI.get(trainingDayId || getState().trainingDay.id)
            .then(trainingDay => {
                if (trainingDay) {
                    dispatch({type: 'TRAINING_DAY_UPDATED', trainingDay: trainingDay});
                }
            })
    }
};

