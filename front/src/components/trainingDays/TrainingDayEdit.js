import React, {Fragment} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, ButtonGroup, Divider, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@material-ui/core/TextField";
import TrainingDayAPI from "../../services/trainingDayAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";

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

export default () => {
    const classes = useStyles();
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    const setTrainingDayInStore = (trainingDay) => {
        dispatch({type: 'TRAINING_DAY_UPDATED', trainingDay: trainingDay});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingDay[inputName] = value;
        setTrainingDayInStore(trainingDay);
    };

    const save = () => {
        TrainingDayAPI.save(trainingDay)
            .then(response => {
                if (response) {
                    dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'view'});
                    dispatch(getTrainingPlanAction());
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
    };



    return (
        <Fragment>
            <Typography variant={"body1"}>Nowy dzień treningowy:</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Nazwa" margin="normal" value={trainingDay.name}
                           type="text" onChange={handleInputChange} name="name" className={classes.textField}/>
                <TextField label="Opis" rowsMax={4} multiline value={trainingDay.description || ''}
                           onChange={handleInputChange} name="description"
                           className={classes.textField} margin="normal"/>
            </form>
            <Divider/>
            <ButtonGroup size={"small"} variant={"contained"}>
                <Button color={"primary"} onClick={save}>Zapisz</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </Fragment>
    )

}