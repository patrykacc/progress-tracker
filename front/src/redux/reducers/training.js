const defaultTraining = {
    volume: 0,
    exercises: []
};

const training = (state = defaultTraining, action) => {

    switch (action.type) {
        case 'GET_TRAINING_DONE':
            return {...action.training};
            case 'TRAINING_UPDATED':
            return {...action.training};
        case 'CLEAR_TRAINING':
            return {...defaultTraining};
        default:
            return state;
    }
}

export default training;
