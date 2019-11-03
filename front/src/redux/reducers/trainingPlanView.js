const trainingPlanView = (state = 'list', action) => {

    switch (action.type) {
        case 'TRAINING_PLAN_VIEW_MODE':
            return action.mode;
        default:
            return state;
    }
};

export default trainingPlanView;
