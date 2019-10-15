import React from "react";
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

export default  ({ component: Component, ...props }) => {

    // const isAuthorized = props.isAuthorized || localStorage.getItem('token');
    const isAuthorized = useSelector(state => state.isAuthorized);
    return (
        <Route {...props} render={renderProps =>
            isAuthorized ?
                    <Component {...renderProps} /> :
                    <Redirect to={{
                        pathname: '/signin',
                        state: { from: renderProps.location }
                    }} />
            }
        />
    );
};

