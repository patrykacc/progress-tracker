import * as React from "react";
import {store} from "../../store";
import {getAll} from "../../services/trainingService";

export default (props) => {

    const deleteTraining = (trainingId) => {
        fetch('/trainings/' + trainingId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },

        })
            .then(response => {
                if (response.status === 200) {
                    getAll()
                        .then(res => res.json())
                        .then(trainings => {
                            store.dispatch({type: "TRAININGS_FETCHED", trainings: trainings});
                        })
                }
            })
            .catch(error => {
                console.error(error);
            })
    };

    const navigateToTraining = (trainingId) => {
        props.navigateToTraining(trainingId)
    };

    return (
        <tr key={props.training.id} onClick={() => navigateToTraining(props.training.id)}>
            <td>Trening {props.index + 1}:</td>
            <td style={{marginLeft: 10 + 'px'}}>Rozpoczęcie: <input readOnly type="datetime-local" value={props.training.startTime}/></td>
            <td style={{marginLeft: 10 + 'px'}}>Czas trwania: {props.training.duration} minut</td>
            <td style={{marginLeft: 10 + 'px'}}>
                <button onClick={() => deleteTraining(props.training.id)}>Usuń</button>
            </td>
        </tr>
    )
}



