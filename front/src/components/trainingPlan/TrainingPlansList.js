import React, {useEffect} from "react";
import {Button, List, ListItem, ListItemText, Typography, ListItemIcon, ButtonGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {CheckCircle} from "@material-ui/icons";
import {
    getActiveTrainingPlanAction,
    getAllTrainingPlansAction,
    setActiveTrainingPlanAction
} from "../../redux/actions/trainingPlanActions";

export default function TrainingPlansList({history}) {
    const trainingPlans = useSelector(state => state.trainingPlans);
    const trainingPlanViewMode = useSelector(state => state.trainingPlanViewMode);
    const activeTrainingPlan = useSelector(state => state.activeTrainingPlan);
    let activePlanId = activeTrainingPlan ? activeTrainingPlan.id : null;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTrainingPlansAction());
        dispatch(getActiveTrainingPlanAction());
    }, [dispatch, trainingPlanViewMode]);

    const setActivePlan = (event, trainingPlanId) => {
        event.stopPropagation();
        dispatch(setActiveTrainingPlanAction(trainingPlanId, true))
    };

    const rowClick = (plan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan: plan});
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
        history.push('/plans/' + plan.id);
    }

    let trainingPlansComponents = trainingPlans.map(plan => {
        return (
            <ListItem onClick={() => rowClick(plan)} button key={plan.id}>
                <ListItemText primary={plan.name}/>
                <ListItemIcon title={'Ustaw jako aktywny plan'}>
                    <IconButton size={"medium"} onClick={(event) => setActivePlan(event, plan.id)} color={plan.id === activePlanId ? 'primary' : 'default'}>
                        <CheckCircle/>
                    </IconButton>
                </ListItemIcon>
            </ListItem>
        )
    });

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
    };

    const createNewPlan = () => {
        dispatch({type: 'CLEAR_TRAINING_PLAN'});
        history.push('/plans/new');
    };

    return (
        <div style={{width: '100%'}}>
            <Typography variant={"subtitle2"}>Dostępne plany: </Typography>
            <List>
                {trainingPlansComponents}
            </List>
            <ButtonGroup size={"small"} variant={"contained"}>
                <Button onClick={createNewPlan} color={"primary"}>Stwórz nowy plan</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </div>
    )
}