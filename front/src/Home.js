import React from 'react';
import './App.css';
import TrainingsList from "./trainings/trainingsTable/TrainingsTable";
import Grid from "@material-ui/core/Grid";
import TrainingPlan from "./trainingPlan/TrainingPlan";

function Home(props) {
    return (
        <div className="Home">
            <Grid container spacing={3} direction={"column"}>
            <TrainingPlan/>
            <TrainingsList {...props} />
            </Grid>
        </div>
    );
}

export default Home;
