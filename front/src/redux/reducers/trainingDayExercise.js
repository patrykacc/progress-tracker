const trainingDayExercise = (state = null, action) => {
    switch (action.type) {
        case 'TRAINING_DAY_EXERCISE_UPDATED':
            return {...action.trainingDay};
        case 'CLEAR_TRAINING_EXERCISE_DAY':
            return null;
        default:
            return state;
    }
};

export default trainingDayExercise;