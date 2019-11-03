import React from 'react';
import './App.css';
import TrainingsList from "./components/trainings/trainingsTable/TrainingsTable";
import Grid from "@material-ui/core/Grid";
import ActiveTrainingPlanView from "./components/trainingPlan/ActiveTrainingPlanView";

function Home(props) {
    return (
        <div className="Home">
            <Grid container direction={"column"} spacing={3}>
                <ActiveTrainingPlanView {...props}/>
                <TrainingsList {...props} />
            </Grid>
        </div>
    );
}

export default Home;
