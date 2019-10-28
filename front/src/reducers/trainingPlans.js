const trainingPlans = (state = [], action) => {
    switch (action.type) {
        case 'GET_TRAINING_PLANS_DONE':
            return {...action.trainingPlans};
        case 'TRAINING_PLANS_UPDATED':
            return {...action.trainingPlans};
        default:
            return state;
    }
};

export default trainingPlans;
