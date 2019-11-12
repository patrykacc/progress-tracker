const trainingDayExerciseView = (state = 'empty', action) => {

    switch (action.type) {
        case 'TRAINING_DAY_EXERCISE_VIEW_MODE':
            return action.mode;
        default:
            return state;
    }
};

export default trainingDayExerciseView;
