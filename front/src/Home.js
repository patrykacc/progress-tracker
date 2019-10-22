import React from 'react';
import './App.css';
import TrainingsList from "./trainings/trainingsTable/TrainingsTable";
import TrainingPlanView from "./trainingPlan/TrainingPlanView";
import Grid from "@material-ui/core/Grid";

function Home(props) {
    return (
        <div className="Home">
            <Grid container spacing={3} direction={"column"}>
            <TrainingPlanView/>
            <TrainingsList {...props} />
            </Grid>
        </div>
    );
}

export default Home;
