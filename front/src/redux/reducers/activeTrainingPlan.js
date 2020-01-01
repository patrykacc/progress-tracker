const activeTrainingPlan = (state = null, action) => {

    switch (action.type) {
        case 'GET_ACTIVE_TRAINING_PLAN_DONE':
            return {...action.activeTrainingPlan};
        case 'TRAINING_ACTIVE_PLAN_UPDATED':
            return {...action.activeTrainingPlan};
        case 'CLEAR_ACTIVE_TRAINING_PLAN':
            return null;
        default:
            return {...state};
    }
};

export default activeTrainingPlan;
