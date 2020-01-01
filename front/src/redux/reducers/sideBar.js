const sideBar = (state = false, action) => {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return action.open;

        default:
            return state;
    }
}

export default sideBar;