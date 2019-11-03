const defaultTrainingPlan = {
    volume: 0,
    name: '',
    description: '',
    trainingDays: [{
        name: 'Dzień 1',
        trainingDayExercises: [],
    }]
};

const trainingPlan = (state = defaultTrainingPlan, action) => {

    switch (action.type) {
        case 'TRAINING_PLAN_UPDATED':
            return {...action.trainingPlan};
        case 'CLEAR_TRAINING_PLAN':
            return {...defaultTrainingPlan};
        default:
            return {...state};
    }
};

export default trainingPlan;
