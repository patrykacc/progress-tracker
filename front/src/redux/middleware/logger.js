const logger = store => next => action => {
    const {type, ...value} = action;
    console.log('Dispatching: ', type, value ? value : null);
    let result = next(action);
    return result;
}

export default logger;