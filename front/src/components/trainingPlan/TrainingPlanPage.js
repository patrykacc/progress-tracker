import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanEdit from "./TrainingPlanEdit";
import {makeStyles, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TrainingDay from "../trainingDays/TrainingDay";
import TrainingPlanView from "./TrainingPlanView";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export default function TrainingPlanPage(props) {
    const classes = useStyles();
    const trainingPlanViewMode = useSelector(state => state.trainingPlanView);
    const dispatch = useDispatch();
    let view;

    useEffect(() => {
        if (props.match.params) {
            dispatch(getTrainingPlanAction(props.match.params.id));
        } else {
            dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'edit'});
        }
    }, [dispatch, props.match.params]);

    const render = () => {
        switch (trainingPlanViewMode) {
            case 'view':
                view = <TrainingPlanView {...props}/>;
                break;
            case 'edit':
                view = <TrainingPlanEdit {...props}/>;
                break;
            default:
                break;
        }
        return (
            <Fragment>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={12} md={6} xl={6} lg={6}>
                        <Paper className={classes.paper}>
                            {view}
                        </Paper>
                    </Grid>
                </Grid>


                <TrainingDay/>


            </Fragment>
        )
    };

    return render();
}