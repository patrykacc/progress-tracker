import React, {Fragment} from "react";
import {Button, ButtonGroup, Divider, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";

// const useStyles = makeStyles(theme => ({
// }));

export default ({history}) => {
    // const classes = useStyles();
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

    const remove = () => {
        TrainingPlanAPI.delete(trainingPlan.id)
            .then(response => {
                if (response) {
                    dispatch({type: 'CLEAR_TRAINING_PLAN'});
                    dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
                    history.push('/plans');
                }
            });
    };

    const edit = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'edit'});
    };

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>Plan treningowy:</Typography>
            <Typography variant={"h4"}>{trainingPlan.name}</Typography>
            <form noValidate autoComplete="off">
                <Typography variant={"body1"} >{trainingPlan.name}</Typography>
                <Typography variant={"body1"} >{trainingPlan.description}</Typography>
            </form>
            <Divider/>
            <TrainingDaysList/>
            <ButtonGroup size={"small"} variant={"contained"}>
                <Button color={"primary"} onClick={edit}>Edytuj</Button>
                <Button color={"secondary"} onClick={remove}>Usun</Button>
            </ButtonGroup>
        </Fragment>
    )

}