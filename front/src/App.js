import React from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SignInContainer} from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import TrainingsList from "./trainings/trainingsTable/TrainingsTable";
import PrivateRoute from "./authentication/privateRoute";
import {authorizationFailed, authorizationSuccess} from "./actions";
import {connect} from "react-redux";
import Training from "./trainings/trainingDetails/TrainingDetails";


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">Centurion Base</header>
                <BrowserRouter>
                    <Switch>
                        <Route path="/signin" component={SignInContainer}/>
                        <Route path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute path="/training/:id" component={Training}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isAuthorized: state.isAuthorized};
};
const mapDispatchToProps = {authorizationSuccess, authorizationFailed};

export default connect(mapStateToProps, mapDispatchToProps)(App);

