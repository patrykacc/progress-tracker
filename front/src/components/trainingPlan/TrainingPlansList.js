import React, {Fragment, useEffect} from "react";
import {Button, List, ListItem, ListItemText, Typography, ListItemIcon, ButtonGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {CheckCircle, Edit} from "@material-ui/icons";
import {getAll} from "../../services/trainingPlanService";

export default function TrainingPlansList() {
    const trainingPlans = useSelector(state => state.trainingPlans);
    const trainingPlanViewMode = useSelector(state => state.trainingPlanViewMode);
    const dispatch = useDispatch();
    useEffect(() => {
        getAll().then(plans => {
            if (plans) {
                dispatch({type: 'GET_TRAINING_PLANS_DONE', trainingPlans: plans})
            }
        })
    }, [trainingPlanViewMode])
    let trainingPlansComponents = trainingPlans.map(plan => {
        return (
            <ListItem button key={plan.id}>
                <ListItemText primary={plan.name}/>
                <ListItemIcon title={'Edytuj'}>
                    <IconButton><Edit/></IconButton>
                </ListItemIcon>
                <ListItemIcon title={'Ustaw jako aktywny plan'}>
                    <IconButton color="primary"><CheckCircle/></IconButton>
                </ListItemIcon>
            </ListItem>
        )
    });

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
    };

    const createNewPlan = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'edit'});
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