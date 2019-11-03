import {makeStyles} from "@material-ui/core";
import React, {Fragment} from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {Cancel, Delete, Edit, Save} from "@material-ui/icons";
import {ExerciseApi} from "../../services/exerciseService";
import ExerciseFormEdit from "./ExerciseFormEdit";
import ExerciseFormView from "./ExerciseFormView";
import {getExercisesAction, getTrainingAction} from "../../redux/actions/trainingActions";


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
    const mode = useSelector(state => state.exerciseView.mode);
    const classes = useStyles();
    /*Used to hold copy of actual exercise during edit*/
    const [temporaryExercise, setTemporaryExercise] = React.useState();

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
        exercise[inputName] = value;
        setExerciseInStore(exercise);
    };

    const edit = () => {
        setTemporaryExercise({...exercise});
        dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'edit'});
    };

    const cancel = () => {
        if (temporaryExercise) {
            setExerciseInStore(temporaryExercise);
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'view'});
        } else {
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'empty'});

        }
    };

    const save = () => {
        exercise.training = {id: training.id};
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
                    dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'view'});
                    return response.json();
                }
            })
            .then(exercise => {
                if (exercise) {
                    setExerciseInStore(exercise);
                }
            })
            .catch(error => {
                console.error(error);
            })
    };

    const remove = () => {
        ExerciseApi.delete(exercise.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch(getExercisesAction());
                    dispatch(getTrainingAction(training.id));
                    dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'empty'});
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
    };
    return (
        <div>
            {mode === 'empty' && renderEmptyTip()}
            {(mode === 'view' || mode === 'create' || mode === 'edit') && renderExerciseDetail()}
        </div>
    )
}