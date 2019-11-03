const trainingDay = (state = {}, action) => {
    switch (action.type) {
        case 'TRAINING_DAY_UPDATED':
            return {...action.trainingDay};
        case 'CLEAR_TRAINING_DAY':
            return {...state};
        default:
            return {...state};
    }
};

export default trainingDay;