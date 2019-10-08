import * as React from "react";
import {deleteTraining, getByIdWithExercises, saveTraining} from "../../services/trainingService";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useEffect} from "react";
import {Edit, Delete, Save} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ExercisesTable from "../exercises/ExercisesTable";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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

    const defaultTraining = {
        volume: 0
    };
    const [mode, setMode] = React.useState('view');
    const [training, setTraining] = React.useState({...defaultTraining});
    useEffect(() => {
        if (!props.match.params.id || !parseInt(props.match.params.id)) {
            return;
        }
        getByIdWithExercises(props.match.params.id)
            .then(res => {
                return res.json()
            })
            .then(training => {
                setTraining(training);
                console.log(training)
            })
    }, [props.match.params.id]);

    useEffect(() => {
        setMode(parseInt(props.match.params.id) ? 'view' : 'edit')
    }, [props.match.params.id]);

    const save = () => {
        const redirectToCreatedTrainingPage = (trainingId) => {
            if (!props.match.params.id || !parseInt(props.match.params.id)) {
                props.history.push('/training/' + trainingId)
            }
        };
        saveTraining(training)
            .then(json => {
                if (json) {
                    setMode('view');
                    redirectToCreatedTrainingPage(json.id)
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

    const handleChange = (e) => {
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
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Typography variant={"h5"}>Trening:</Typography>
                        <Typography variant={"body1"}>Z dnia: {training.startDate}</Typography>
                        <form noValidate autoComplete="off">
                            <TextField label="Całkowita objetość" margin="normal" inputProps={inputProps} type="number"
                                       value={training.volume} onChange={handleChange} variant={inputProps.variant}
                                       name="volume" className={classes.textField}/>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                                            readOnly={inputProps.readOnly} inputVariant={inputProps.variant}
                                            label="Dzień treningu" value={training.startDate}
                                            onChange={handleDateChange}/>
                            </MuiPickersUtilsProvider>
                        </form>
                        {mode === 'view' ?
                            <IconButton onClick={() => setMode('edit')} color="primary">
                                <Edit/>
                            </IconButton>
                            :
                            <IconButton onClick={save} color="primary">
                                <Save/>
                            </IconButton>
                        }
                        <IconButton onClick={remove} color="secondary">
                            <Delete/>
                        </IconButton>
                        <ExercisesTable exercises={training.exercises} trainingId={training.id}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

//TODO consider splitting edit and view components