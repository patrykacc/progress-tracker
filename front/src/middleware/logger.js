const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    return result;
}

export default logger;