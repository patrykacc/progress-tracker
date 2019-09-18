import React from 'react';
import './App.css';
import Home from "./Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import WorkoutsHome from "./WorkoutsHome";

function App() {

    return (

        <div className="App">
            <header className="App-header">Centurion Base</header>
            <BrowserRouter>
                <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/" component={Home}/>
                <Route path="/workouts" component={WorkoutsHome}/>
                </Switch>
            </BrowserRouter>
        </div>

    );
}

export default App;
