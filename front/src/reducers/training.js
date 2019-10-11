const defaultTraining = {volume: 0};

const training = (state = defaultTraining, action) => {

    switch (action.type) {
        case 'TRAINING_FETCHED':
            return action.training;
        case 'GET_TRAINING_DONE':
            return {...action.training};
        default:
            return state;
    }
}

export default training;
