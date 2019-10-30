const trainingPlanViewMode = (state = 'view', action) => {

    switch (action.type) {
        case 'TRAINING_PLAN_VIEW_MODE':
            return action.mode;
        default:
            return state;
    }
};

export default trainingPlanViewMode;
