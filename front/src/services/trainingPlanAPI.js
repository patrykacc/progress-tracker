import API from "./API";

const PATH = 'trainingPlan';
export default new API(PATH);

export const setActiveTrainingPlan = (trainingPlanId) => {
    return fetch('/api/trainingPlan/setActiveTrainingPlan', {
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
    return fetch('/api/trainingPlan/getActiveTrainingPlan', {
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
