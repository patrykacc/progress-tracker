import React from "react";
import {connect} from "react-redux";
import {Route, Redirect, withRouter} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    const isAuthorized = props.isAuthorized;
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

const mapStateToProps = (state) => ({isAuthorized: state.isAuthorized});
export default withRouter(connect(mapStateToProps)(PrivateRoute));