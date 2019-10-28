import React, {Fragment} from "react";
import {Button, List, ListItem, ListItemText, Typography, ListItemIcon, ButtonGroup} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {CheckCircle, Delete, Edit} from "@material-ui/icons";

export default function TrainingPlansList() {
    const trainingPlans = useSelector(state => state.trainingPlans);
    const dispatch = useDispatch();

    let trainings = trainingPlans.map(plan => {
        return (
            <ListItem key={plan.name}>
                <ListItemText primary={plan.name}/>
                <ListItemIcon>
                    <IconButton color="secondary"><Delete/></IconButton>
                </ListItemIcon>
                <ListItemIcon>
                    <IconButton><Edit/></IconButton>
                </ListItemIcon>
                <ListItemIcon>
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
                {trainings}
            </List>
            <ButtonGroup size={"small"} variant={"outlined"}>
                <Button onClick={createNewPlan}>Stwórz nowy plan</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </div>
    )
}