const isAuthorized = (state = !!localStorage.getItem('token'), action) => {
    switch (action.type) {
        case 'AUTHORIZATION_SUCCESS':
            return true;
        case 'AUTHORIZATION_FAILED':
            return false;

        default:
            return state;
    }
}

export default isAuthorized;