export const getAll = () => {
    return fetch('/trainings/getAll',
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    )
        .catch(error => console.error(error))
}

export const getByIdWithExercises = (trainingId) => {
    return fetch('/trainings/getByIdWithExercises/' + trainingId,
        {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }
    )
        .catch(error => console.error(error))
}
