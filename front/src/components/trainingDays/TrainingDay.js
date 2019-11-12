import React from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingDayEdit from "./TrainingDayEdit";
import {makeStyles, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TrainingDayView from "./TrainingDayView";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function TrainingDay(props) {
    const classes = useStyles();
    const trainingPlanViewMode = useSelector(state => state.trainingDayView);
    useSelector(state => state.trainingDay);
    useDispatch();

    let view;

    const render = () => {
        if (trainingPlanViewMode === 'view') {
            view = <TrainingDayView {...props}/>;
        } else if (trainingPlanViewMode === 'edit') {
            view = <TrainingDayEdit {...props}/>;
        } else if (trainingPlanViewMode === 'empty') {
            view = null;
        }
        return (
            <Grid container justify="center" spacing={2}>
                <Grid item xs={12} md={6} xl={6} lg={6}>
                    <Paper className={classes.paper} >
                        {view}
                    </Paper>
                </Grid>
            </Grid>
        )
    };

    return render();
}