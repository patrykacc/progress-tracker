import React, {useState} from 'react';
import {TableCell, TableRow} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Input from "@material-ui/core/Input";
import {useDispatch} from "react-redux";
import {getExercisesAction} from "../../actions";

export default function AddNewExerciseButton({trainingId}) {
    const dispatch = useDispatch();
    let defaultExercise = {
        name: '',
        series: '',
        repetitions: '',
        weight: '',
        training: {
            id: trainingId
        }
    };

    const [createMode, setCreateMode] = useState(false);
    const [newExercise, setNewExercise] = useState(defaultExercise);

    React.useEffect(() => {
            newExercise.training.id = trainingId
        }, [newExercise.training.id, trainingId]
    );

    return (
        createMode ?
            <div>
                    <Input name={"name"} defaultValue={newExercise.name} onChange={handleExerciseInputChange} type={"text"}/>

                    <Input onChange={(e) => handleExerciseInputChange(e)} type="number" name="series"
                           value={newExercise.series}/>

                    <Input onChange={(e) => handleExerciseInputChange(e)} type="number" name="repetitions"
                           value={newExercise.repetitions}/>

                    <Input onChange={(e) => handleExerciseInputChange(e)} type="number" name="weight"
                           value={newExercise.weight}/>

                    <button onClick={saveExercise}>Zapisz</button>

            </div>
            :
            <TableRow>
                <TableCell onClick={() => setCreateMode(true)} colSpan={5} align={"center"}>
                    <Fab size="small" color="primary">
                        <AddIcon/>
                    </Fab>
                </TableCell>
            </TableRow>
    )


    function saveExercise() {
        fetch('/api/exercises/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(newExercise)
        })
            .then(response => {
                if (response.status === 200) {
                    setCreateMode(false);
                    dispatch(getExercisesAction())
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    function handleExerciseInputChange(e) {
        let exercise = newExercise;
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        console.log(newExercise.training.id)
        exercise[inputName] = value;
        setNewExercise({...exercise});
    }
}

