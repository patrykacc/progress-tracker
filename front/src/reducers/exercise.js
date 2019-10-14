const defaultExercise = {
    series: 0,
    name: '',
    weight: 0,
    repetitions: 0,
};
const exercise = (state = null, action) => {
    switch (action.type) {
        case 'EXERCISE_SELECTED':
            return {...action.exercise}
        default:
            return state;
    }
}

export default exercise;