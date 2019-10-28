import React, {Fragment, useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, ButtonGroup, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    button: {marginTop: "5px"},
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

    useEffect(() => {

    });

    const setTrainingPlanInStore = (trainingPlan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingPlan[inputName] = value;
        setTrainingPlanInStore(trainingPlan);
    };

    const save = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
    };

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>Nowy plan treningowy:</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Nazwa" margin="normal"
                           type="number" onChange={handleInputChange} name="name" className={classes.textField}
                />
            </form>
            <ButtonGroup size={"small"} variant={"outlined"}>
                <Button onClick={save}>Zapisz</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </Fragment>
    )

}