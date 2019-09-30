import * as React from "react";
import {getAll} from "./services/trainingService";

export default (props) => {
    return (
    <tr key={props.training.id}>
        <td>Trening {props.index + 1}:</td>
        <td style={{marginLeft: 10 + 'px'}}>Rozpoczęcie: <input readOnly type="datetime-local" value={props.training.startTime}/></td>
        <td style={{marginLeft: 10 + 'px'}}>Czas trwania: {props.training.duration} minut</td>
        <td style={{marginLeft: 10 + 'px'}}>
            <button onClick={() => deleteTraining(props.training.id)}>Usuń</button>
        </td>
    </tr>
    )
}

export const deleteTraining = (id) => {
    fetch('/trainings/delete/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },

    })
        .then(response => {
            if (response.status === 200) {
                getAll();
            }
        })
        .catch(error => {
            console.error(error);
        })
}