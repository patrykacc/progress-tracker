import * as React from "react";

export default (props) => {
    return (
        <tr>
            <td>{props.exercise.name}</td>
            <td>{props.exercise.series}</td>
            <td>{props.exercise.repetitions}</td>
            <td>{props.exercise.weight}</td>
        </tr>
    )
}