const exercises = (state = [], action) => {
    switch (action.type) {
        case 'EXERCISES':
            return [...action.exercises];
        case 'EXERCISE_REMOVED':
            return state.filter(exercise => exercise.id !== action.exerciseId);
        case 'EXERCISE_ADDED':
            return [...state, action.exercise]
        case 'GET_EXERCISES_DONE':
            return [...action.exercises]
        default:
            return state;
    }
}

export default exercises;