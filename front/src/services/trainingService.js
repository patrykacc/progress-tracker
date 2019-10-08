export const getAll = () => {
    return fetch('/trainings/getAll', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .catch(error => console.error(error))
}

export const getByIdWithExercises = (trainingId) => {
    return fetch('/trainings/getByIdWithExercises/' + trainingId, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .catch(error => console.error(error))
};

export const saveTraining = (training) => {
    return fetch('/trainings/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(training)
    })
        .catch(error => {console.error(error);})
};
