import {SignInContainer} from "../../authentication/SignIn";
import SignUp from "../../authentication/SignUp";
import PrivateRoute from "../../authentication/privateRoute";
import Home from "../../Home";
import Training from "../../trainings/trainingDetails/TrainingDetails";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

export default function Body() {
    return (
        <Container maxWidth="xl" style={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BrowserRouter>
                        <Route path="/signin" component={SignInContainer}/>
                        <Route path="/signup" component={SignUp}/>
                        <PrivateRoute exact path="/" component={Home}/>
                        <PrivateRoute path="/training/:id" component={Training}/>
                        <PrivateRoute path="/training/new" component={Training}/>
                    </BrowserRouter>
                </Grid>
            </Grid>

        </Container>
    )
}