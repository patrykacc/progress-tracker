import API from "./API";

const PATH = 'trainingPlans';
const api = new API(PATH);

export const getAll = () => {
    return api.getAll()
};

export const getTrainingPlan = (trainingPlanId) => {
    return api.get(trainingPlanId)
};

export const saveTrainingPlanApi = (trainingPlan) => {
    return api.save(trainingPlan);
};

export const setActiveTrainingPlan = (trainingPlanId) => {
    return fetch('/api/trainingPlans/setActiveTrainingPlan', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: trainingPlanId
    })
        .catch(error => console.error(error))
};

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
