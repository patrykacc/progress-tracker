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

export const trainingFetched = training => ({
    type: 'TRAINING_FETCHED',
    training
});