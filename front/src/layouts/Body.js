import {SignInContainer} from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import PrivateRoute from "../components/authentication/PrivateRoute";
import Home from "../Home";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TrainingPage from "../trainings/trainingPage/TrainingPage";
import TokenWatcher from "../components/authentication/TokenWatcher";

export default function Body() {
    return (
        <Container maxWidth="xl" style={{flexGrow: 1}} >
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <BrowserRouter>
                        <TokenWatcher/>
                        <Route path="/signin" component={SignInContainer}/>
                        <Route path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/training/:id" component={TrainingPage}/>
                        <PrivateRoute exact path="/training" component={TrainingPage}/>
                    </BrowserRouter>
                </Grid>
            </Grid>

        </Container>
    )
}