export const deleteExercise = (exerciseId) => {

    return fetch('/exercises/' + exerciseId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })
        .catch(error => {
            console.error(error);
        })
}

export const getExercisesByTrainingId = (trainingId) => {
    return fetch('/exercises/getAllByTrainingId/' + trainingId, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => res.status === 200 ? res.json() : null)
        .catch(error => console.error(error))
}