import React, {useState} from 'react';
import {getByIdWithExercises} from "../../services/trainingService";
import {store} from "../../store";


export default function ExerciseRowAddNew({trainingId}) {

    let defaultExercise = {
        name: '',
        series: '',
        repetitions: '',
        weight: '',
        training: {
            id: trainingId
        }
    }

    const [createMode, setCreateMode] = useState(false);
    const [newExercise, setNewExercise] = useState(defaultExercise);

    React.useEffect(() => {
        newExercise.training.id = trainingId
        }, [newExercise.training.id, trainingId]
    );

    return (
        createMode ?
            <tr>
                <td>
                    <input onChange={(e)=>handleExerciseInputChange(e)} type="text" name="name" value={newExercise.name}/>
                </td>
                <td>
                    <input onChange={(e)=>handleExerciseInputChange(e)} type="number" name="series" value={newExercise.series}/>
                </td>
                <td>
                    <input onChange={(e)=>handleExerciseInputChange(e)} type="number" name="repetitions" value={newExercise.repetitions}/>
                </td>
                <td>
                    <input onChange={(e)=>handleExerciseInputChange(e)} type="number" name="weight" value={newExercise.weight}/>
                </td>
                <td>
                    <button onClick={saveExercise}>Zapisz</button>
                </td>
            </tr> :
            <tr>
                <td onClick={() => setCreateMode(true)} colSpan={4}>Dodaj ćwiczenie</td>
            </tr>
    )


    function saveExercise() {
        fetch('/exercises/save', {
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
                    return response.json();
                }
            })
            .then(json => {
                if (json) {
                    getByIdWithExercises(trainingId)
                        .then(res => {
                            return res.json()
                        })
                        .then(training => {
                            store.dispatch({type: "TRAINING_FETCHED", training: training});
                            console.log(training)
                        })
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

