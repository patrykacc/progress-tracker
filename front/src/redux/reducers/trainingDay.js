const trainingDay = (state = null, action) => {
    switch (action.type) {
        case 'TRAINING_DAY_UPDATED':
            return {...action.trainingDay};
        case 'CLEAR_TRAINING_DAY':
            return null;
        default:
            return state;
    }
};

export default trainingDay;