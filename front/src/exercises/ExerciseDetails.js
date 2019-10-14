import {Container, makeStyles, Paper} from "@material-ui/core";
import React, {Fragment, useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {Cancel, Delete, Edit, Save} from "@material-ui/icons";
import {deleteExercise} from "../services/exerciseService";
import {getExercisesAction, getTrainingAction} from "../actions";
import ExerciseFormEdit from "./ExerciseFormEdit";
import ExerciseFormView from "./ExerciseFormView";


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
    const exercise = useSelector(state => state.exercise);
    const training = useSelector(state => state.training);
    const dispatch = useDispatch(state => state.exercise);
    const initialMode = !exercise ? 'empty' : Number.isInteger(exercise.id) ? 'view' : 'create';
    const [mode, setMode] = useState(initialMode);
    const classes = useStyles();
    /*Used to hold copy of actual exercise during edit*/
    const [temporaryExercise, setTemporaryExercise] = React.useState({});

    useEffect(() => {
        if (exercise) {
            setMode(!exercise.id ? 'empty' : exercise.id === 'new' ? 'create' : 'view')
        }
    }, [exercise]);
    const renderEmptyTip = () => {
        return (
            <Box alignItems="center" justifyContent="center" display="flex" className={classes.box}
                 color="text.secondary">
                <Typography className={classes.text} variant={'h6'}>Wybierz ćwiczenie aby zobaczyć
                    szczegóły</Typography>
            </Box>
        )
    };
    const setExerciseInStore = (exercise) => {
        dispatch({type: 'EXERCISE_SELECTED', exercise});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        console.log(value);
        console.log(inputName);
        exercise[inputName] = value;
        setExerciseInStore(exercise);
    };

    const edit = () => {
        setTemporaryExercise({...exercise});
        setMode('edit');
    };

    const cancel = () => {
        setExerciseInStore(temporaryExercise);
    };

    const save = () => {
        if (initialMode === 'create') {
            exercise.id = null;
            exercise.training = {id: training.id};
        }
        fetch('/api/exercises/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(exercise)
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction());
                    setMode('view');
                }
            })
            .catch(error => {
                console.error(error);
            })
    };

    const remove = () => {
        deleteExercise(exercise.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction())
                    dispatch(getTrainingAction(props.match.params.id));
                }
            })
    };

    const renderExerciseDetail = () => {
        return (
            <Fragment>
                {mode === 'view' ?
                    <div>
                        <ExerciseFormView exercise={exercise}/>
                        <IconButton onClick={edit} color="primary">
                            <Edit/>
                        </IconButton>
                        <IconButton onClick={remove} color="secondary">
                            <Delete/>
                        </IconButton>
                    </div>
                    : <div>
                        <ExerciseFormEdit handleChange={handleInputChange} exercise={exercise}/>
                        <IconButton onClick={save} color="primary">
                            <Save/>
                        </IconButton>
                        <IconButton onClick={cancel} color="secondary">
                            <Cancel/>
                        </IconButton>
                    </div>
                }
            </Fragment>
        )
    }
    return (
        <Paper>
            {initialMode === 'empty' && renderEmptyTip()}
            {(initialMode === 'view' || initialMode === 'create') && renderExerciseDetail()}
        </Paper>
    )
}