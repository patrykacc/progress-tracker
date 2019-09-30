import {store} from "../store";

export const getAll = () => {
    fetch('/trainings/getAll',
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    )
        .then(res => res.json())
        .then(trainings => {
            store.dispatch({type: "TRAININGS_FETCHED", trainings: trainings});
        })
        .catch(error => console.error(error))
}
