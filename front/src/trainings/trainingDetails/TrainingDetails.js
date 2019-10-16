import * as React from "react";
import {deleteTraining, saveTraining} from "../../services/trainingService";
import {Container, makeStyles, Paper, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useEffect} from "react";
import {Edit, Delete, Save, Cancel} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Fragment} from "react";
import {getTrainingAction} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    paper: {
        overflowX: "auto"
    }
}));

export default (props) => {
    const dispatch = useDispatch();
    const training = useSelector(state => state.training);
    const initialMode = parseInt(props.match.params.id) ? 'view' : 'create';
    const [mode, setMode] = React.useState(initialMode);
    /*Used to hold copy of actual training during edit*/
    const [temporaryTraining, setTemporaryTraining] = React.useState({});

    useEffect(() => {
        if (mode !== 'view') {
            return;
        }
        dispatch(getTrainingAction(props.match.params.id));
    }, [dispatch, mode, training.id]);

    const edit = () => {
        setTemporaryTraining({...training});
        setMode('edit');
    };

    const cancel = () => {
        if (initialMode === 'create') {
            props.history.goBack()
        } else if (initialMode === 'view') {
            setTrainingInStore(temporaryTraining);
            setMode('view');
        }
    };

    const save = () => {
        saveTraining(training)
            .then(training => {
                if (!training) {
                    return;
                }
                setMode('view');
                dispatch({type: 'GET_TRAINING_DONE', training});
                if (initialMode === 'create') {
                    props.history.replace('/training/' + training.id)
                }
            })
    };

    const remove = () => {
        deleteTraining(training.id)
            .then(response => {
                if (response.status === 200) {
                    props.history.replace('/');
                }
            })
    };

    const setTrainingInStore = (training) => {
        dispatch({type: 'GET_TRAINING_DONE', training});
    };

    const handleDateChange = (date) => {
        if (date) {
            training.startDate = date.toISOString().split('T')[0];
            setTrainingInStore(training);
        }
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        training[inputName] = value;
        setTrainingInStore(training);
    };

    const classes = useStyles();
    let inputProps = {
        readOnly: mode === 'view',
        variant: mode === 'view' ? 'standard' : 'filled'
    };

    return (
        <div className={classes.paper}>
            <Typography variant={"h4"}>Trening:</Typography>
            <Typography variant={"body1"}>Z dnia: {training.startDate}</Typography>
            <form noValidate autoComplete="off">
                <TextField label="Całkowita objetość" margin="normal" inputProps={inputProps} type="number"
                           value={training.volume} onChange={handleInputChange} variant={inputProps.variant}
                           name="volume" className={classes.textField}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                                readOnly={inputProps.readOnly} inputVariant={inputProps.variant}
                                label="Dzień treningu" value={training.startDate}
                                onChange={handleDateChange}/>
                </MuiPickersUtilsProvider>
            </form>
            {mode === 'view' ?
                <Fragment>
                    <IconButton onClick={edit} color="primary">
                        <Edit/>
                    </IconButton>
                    <IconButton onClick={remove} color="secondary">
                        <Delete/>
                    </IconButton>
                </Fragment>
                :
                <Fragment>
                    <IconButton onClick={save} color="primary">
                        <Save/>
                    </IconButton>
                    <IconButton onClick={cancel} color="secondary">
                        <Cancel/>
                    </IconButton>
                </Fragment>
            }
        </div>

    )
}
