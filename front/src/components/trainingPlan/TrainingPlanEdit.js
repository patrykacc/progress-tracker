import React, {Fragment, useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, ButtonGroup, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {saveTrainingPlan} from "../../services/trainingPlanService";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {AddCircle} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    button: {marginTop: "5px"},
    tabs: {
        flexGrow: 1, width: '100%'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function TrainingPlanEdit() {
    const classes = useStyles();
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();
    let trainingDays = trainingPlan.trainingDays;
    const tabs = trainingDays.map(trainingDay => <Tab label={trainingDay.name}/>);
    useEffect(() => {

    });

    const setTrainingPlanInStore = (trainingPlan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingPlan[inputName] = value;
        console.log(trainingPlan);
        setTrainingPlanInStore(trainingPlan);
    };

    const save = () => {
        saveTrainingPlan(trainingPlan)
            .then(response => {
                if (response) {
                    dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
    };

    const addTrainingDay = () => {
        trainingDays.push({
            name: 'Dzień ' + (trainingDays.length + 1)
        })
    };

    const [activeTab, setActiveTab] = useState(1);
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>Nowy plan treningowy:</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Nazwa" margin="normal"
                           type="text" onChange={handleInputChange} name="name" className={classes.textField}/>
                <TextField label="Opis" rowsMax={4} multiline value={trainingPlan.description}
                           onChange={handleInputChange} name="description"
                           className={classes.textField} margin="normal"/>
            </form>
            <ButtonGroup size={"small"} variant={"contained"}>
                <Button color={"primary"} onClick={save}>Zapisz</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
            <Tabs variant="scrollable" scrollButtons="auto" value={activeTab} onChange={handleTabChange}
                  className={classes.tabs}>
                {tabs}
                <Tab icon={<AddCircle color={"primary"}/>} aria-label={"Dodaj dzień treningowy"}
                     onClick={addTrainingDay}/>
            </Tabs>
        </Fragment>
    )

}