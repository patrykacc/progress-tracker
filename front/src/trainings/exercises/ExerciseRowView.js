import * as React from "react";

export default function ExerciseRowView(props) {
    return (
        <tr>
            <td>{props.exercise.name}</td>
            <td>{props.exercise.series}</td>
            <td>{props.exercise.repetitions}</td>
            <td>{props.exercise.weight}</td>
            <td><button onClick={deleteExercise}>Usuń</button></td>
        </tr>
    )



    function deleteExercise() {
        console.log('deleteExercise - implement me NOW !!!!')
    }
}