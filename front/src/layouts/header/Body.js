import {SignInContainer} from "../../authentication/SignIn";
import SignUp from "../../authentication/SignUp";
import PrivateRoute from "../../authentication/privateRoute";
import Home from "../../Home";
import Training from "../../trainings/trainingDetails/TrainingDetails";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "@material-ui/core";

export default function Body() {
    return (
        <Container maxWidth="xl" style={{flexGrow: 1}}>
            <BrowserRouter>
                <Route path="/signin" component={SignInContainer}/>
                <Route path="/signup" component={SignUp}/>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute path="/training/:id" component={Training}/>
            </BrowserRouter>
        </Container>
    )
}