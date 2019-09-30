const trainings = (state = [], action) => {
    switch (action.type) {
        case 'TRAININGS_FETCHED':
            return [...action.trainings];
        default:
            return state;
    }
}

export default trainings;
