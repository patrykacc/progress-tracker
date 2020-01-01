const trainingView = (state = 'empty', action) => {

    switch (action.type) {
        case 'TRAINING_VIEW_MODE':
            return action.mode;
        default:
            return state;
    }
};

export default trainingView;
