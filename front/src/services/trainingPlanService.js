export const getAll = () => {
    return fetch('/api/trainingPlans/getAll', {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .catch(error => console.error(error))
}

export const getActiveTrainingPlan = () => {
    return fetch('/api/trainingPlans/getActiveTrainingPlan', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .catch(error => console.error(error))
};

export const saveTrainingPlan = (trainingPlan) => {
    return fetch('/api/trainingPlans/save', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(trainingPlan)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .catch(error => {
            console.error(error);
        })
};
export const deleteTraining = (trainingId) => {
    return fetch('/api/trainings/' + trainingId, {
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
