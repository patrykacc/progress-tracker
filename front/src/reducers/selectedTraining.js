const selectedTraining = (state = {}, action) => {
    switch (action.type) {
        case 'TRAINING_FETCHED':
            return Object.assign({}, action.training);
        default:
            return state;
    }
}

export default selectedTraining;
