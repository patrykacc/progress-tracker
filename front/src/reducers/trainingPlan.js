const defaultTrainingPlan = {volume: 0};

const trainingPlan = (state = defaultTrainingPlan, action) => {

    switch (action.type) {
        case 'GET_TRAINING_PLAN_DONE':
            return {...action.trainingPlan};
            case 'TRAINING_PLAN_UPDATED':
            return {...action.trainingPlan};
        case 'CLEAR_TRAINING_PLAN':
            return {...defaultTrainingPlan};
        default:
            return state;
    }
};

export default trainingPlan;
