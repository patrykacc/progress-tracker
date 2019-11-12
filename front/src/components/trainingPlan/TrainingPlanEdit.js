import React, {Fragment} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, ButtonGroup, Divider, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";

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

export default function TrainingPlanEdit({history}) {
    const classes = useStyles();
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

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
        TrainingPlanAPI.save(trainingPlan)
            .then(response => {
                if (response) {
                    setTrainingPlanInStore(response);
                    if (history.location.pathname.includes('new')) {
                        history.replace('/plans/' + response.id)
                    } else {
                        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
                    }
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
    };

    return (
        <Fragment>
            <Typography variant={"subtitle2"}>Nowy plan treningowy:</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Nazwa" margin="normal" value={trainingPlan.name}
                           type="text" onChange={handleInputChange} name="name" className={classes.textField}/>
                <TextField label="Opis" rowsMax={4} multiline value={trainingPlan.description || ''}
                           onChange={handleInputChange} name="description"
                           className={classes.textField} margin="normal"/>
            </form>
            <Divider/>
            <TrainingDaysList/>



            <ButtonGroup size={"small"} variant={"contained"}>
                <Button color={"primary"} onClick={save}>Zapisz</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </Fragment>
    )

}