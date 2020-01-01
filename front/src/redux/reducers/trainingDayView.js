const trainingDayView = (state = 'view', action) => {

    switch (action.type) {
        case 'TRAINING_DAY_VIEW_MODE':
            return action.mode;
        default:
            return state;
    }
};

export default trainingDayView;
