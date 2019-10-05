const isAuthorized = (state = !!localStorage.getItem('token'), action) => {
    switch (action.type) {
        case 'AUTHORIZATION_SUCCESS':
            return true;
        case 'AUTHORIZATION_FAILED':
            return !!localStorage.getItem('token');

        default:
            return state;
    }
}

export default isAuthorized;

/* basing on token saved in storage is a bit cancer-o-giving - REWORK!*/
