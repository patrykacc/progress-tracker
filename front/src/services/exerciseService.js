import API from "./API";

const PATH = 'exercises';

export const ExerciseApi = new API(PATH);

export const getExercisesByTrainingId = (trainingId) => {
    return fetch('/api/exercises/getAllByTrainingId/' + trainingId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => {
            return res.status === 200 ? res.json() : null
        })
        .catch(error => console.error(error))
}