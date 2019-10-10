import * as React from "react";
import {deleteTraining, get, saveTraining} from "../../services/trainingService";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useEffect} from "react";
import {Edit, Delete, Save, Cancel} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Exercises from "../exercises/Exercises";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Fragment} from "react";

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
    const defaultTraining = {volume: 0};
    const initialMode = parseInt(props.match.params.id) ? 'view' : 'create';
    const trainingId = parseInt(props.match.params.id) ? props.match.params.id : null;
    const [mode, setMode] = React.useState(initialMode);
    const [training, setTraining] = React.useState({...defaultTraining});
    /*Used to hold copy of actual training during edit*/
    const [temporaryTraining, setTemporaryTraining] = React.useState({});

    useEffect(() => {
        if (mode !== 'view') {
            return;
        }
        get(props.match.params.id)
            .then(training => {
                if (training) {
                    setTraining(training);
                }
                console.log(training)
            })
    }, [mode, props.match.params.id]);

    const edit = () => {
        setTemporaryTraining({...training});
        setMode('edit');
    };

    const cancel = () => {
        if (initialMode === 'create') {
            props.history.goBack()
        } else if (initialMode === 'view') {
            setTraining({...temporaryTraining});
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

    const handleDateChange = (date) => {
        if (date) {
            training.startDate = date.toISOString().split('T')[0];
            setTraining({...training})
        }
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        training[inputName] = value;
        setTraining({...training})
    };

    const classes = useStyles();
    let inputProps = {
        readOnly: mode === 'view',
        variant: mode === 'view' ? 'standard' : 'filled'
    };

    return (
        <div className={classes.container}>
            <Paper style={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
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
                        <Exercises trainingId={trainingId} ableToAddExercise={mode !== 'create'}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>

                    </Paper>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}
