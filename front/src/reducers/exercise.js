const defaultExercise = {
    series: 0,
    name: '',
    weight: 0,
    repetitions: 0,
};
const exercise = (state = defaultExercise, action) => {
    switch (action.type) {
        case 'EXERCISE_SELECTED':
            return {...action.exercise};
        case 'CLEAR_EXERCISE':
            return defaultExercise;
        default:
            return state;
    }
}

export default exercise;