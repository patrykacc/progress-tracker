import React from "react";
import TrainingPlanView from "./TrainingPlanView";
import {useSelector} from "react-redux";
import TrainingPlanEdit from "./TrainingPlanEdit";
import TrainingPlansList from "./TrainingPlansList";
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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

export default function TrainingPlan() {
    const classes = useStyles();
    const trainingPlanViewMode = useSelector(state => state.trainingPlanViewMode);
    let view;
    const render = () => {
        switch (trainingPlanViewMode) {
            case 'view':  view =  <TrainingPlanView/>; break;
            case 'list':  view =  <TrainingPlansList/>; break;
            case 'edit':  view =  <TrainingPlanEdit/>; break;
        }
        return (
            <Grid item xs={12} md={6} lg={6} >
                <Paper className={classes.paper}>
                    {view}
                </Paper>
            </Grid>
        )
    };

    return render();

}