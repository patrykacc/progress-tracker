import * as React from "react";
import {getByIdWithExercises, saveTraining} from "../../services/trainingService";
import ExerciseRowView from "../exercises/ExerciseRowView";
import ExerciseRowAddNew from "../exercises/AddNewExerciseButton.js";
import {Grid, Paper, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TextField from "@material-ui/core/TextField";
import {useEffect} from "react";
import {Edit, Delete, Save} from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import ExercisesTable from "../exercises/ExercisesTable";


export default (props) => {
    const defaultTraining = {
        volume: ''
    };
    const [mode, setMode] = React.useState(props.match.params.id ? 'view' : 'edit');
    const [training, setTraining] = React.useState({...defaultTraining});
    useEffect(() => {
        if (!props.match.params.id) {
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

    const save = () => {
        saveTraining(training)
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json) {
                    setMode('view');
                    console.log(json);
                }
            })
    }


    const handleChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        training[inputName] = value;
        console.log(training);
        setTraining({...training})
    };

    let inputProps = {readOnly: mode === 'view'};
    return (
        <div className="Training">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper>
                        <Typography variant={"h5"}>Trening:</Typography>
                        <Typography variant={"body1"}>Z dnia: {training.startDate}</Typography>
                        <form noValidate autoComplete="off">
                            <TextField label="Całkowita objetość" margin="standard" inputProps={inputProps} type="number"
                                value={training.volume} onChange={handleChange} variant="standard" name="volume"/>
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
                            <IconButton color="secondary">
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
