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