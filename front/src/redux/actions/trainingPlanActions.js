import TrainingPlanAPI, {
    getActiveTrainingPlan,
    setActiveTrainingPlan
} from "../../services/trainingPlanAPI";


export const getActiveTrainingPlanAction = () => {
    return (dispatch) => {
        getActiveTrainingPlan()
            .then(activeTrainingPlan => {
                if (activeTrainingPlan) {
                    dispatch({type: 'GET_ACTIVE_TRAINING_PLAN_DONE', activeTrainingPlan: activeTrainingPlan});
                }
            })
    }
};

export const getTrainingPlanAction = trainingPlanId => {
    return (dispatch, getState) => {
        TrainingPlanAPI.get(trainingPlanId || getState().trainingPlan.id)
            .then(trainingPlan => {
                if (trainingPlan) {
                    dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan: trainingPlan});
                }
            })
    }
};

export const getAllTrainingPlansAction = () => {
    return (dispatch) => {
        TrainingPlanAPI.getAll()
            .then(plans => {
                if (plans) {
                    dispatch({type: 'GET_TRAINING_PLANS_DONE', trainingPlans: plans})
                }
        })
    }
};

export const setActiveTrainingPlanAction = (trainingPlanId, shouldUpdateActivePlan) => {
    return (dispatch) => {
        setActiveTrainingPlan(trainingPlanId)
            .then(response => {
                if (response.statusText === 'OK') {
                    if (shouldUpdateActivePlan) {
                        dispatch(getActiveTrainingPlanAction())
                    }
                }
            })
    }
};

