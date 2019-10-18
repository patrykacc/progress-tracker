
export const deleteExercise = (exerciseId) => {
    if (exerciseId) {
        return fetch('/api/exercises/' + exerciseId, {
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
}

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