

const trainingPlan = (state = null, action) => {

    switch (action.type) {
        case 'TRAINING_PLAN_UPDATED':
            return {...action.trainingPlan};
        case 'CLEAR_TRAINING_PLAN':
            return null;
        default:
            return {...state};
    }
};

export default trainingPlan;
