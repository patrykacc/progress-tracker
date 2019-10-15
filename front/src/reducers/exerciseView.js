const defaults = {
    mode: 'empty'
}

const exerciseView = (state = defaults, action) => {
    switch (action.type) {
        case 'EXERCISE_VIEW_MODE':
            return {...state, mode: action.mode}
        default:
            return state;
    }
}

export default exerciseView;