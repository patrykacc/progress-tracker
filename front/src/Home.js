import React from 'react';
import './App.css';
import TrainingsList from "./components/trainings/trainingsTable/TrainingsTable";
import Grid from "@material-ui/core/Grid";
import TrainingPlan from "./components/trainingPlan/TrainingPlan";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'auto',
    }
}));

function Home(props) {
    return (
        <div className="Home">
            <Grid container spacing={3} >
            <TrainingPlan/>
            <TrainingsList {...props} />
            </Grid>
        </div>
    );
}

export default Home;
