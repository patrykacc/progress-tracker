import {
    getActiveTrainingPlan,
    getAll,
    getTrainingPlan,
    setActiveTrainingPlan
} from "../../services/trainingPlanService";


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
    return (dispatch, state) => {
        getTrainingPlan(trainingPlanId || state.trainingPlan.id)
            .then(trainingPlan => {
                if (trainingPlan) {
                    dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan: trainingPlan});
                }
            })
    }
};

export const getAllTrainingPlansAction = () => {
    return (dispatch) => {
        getAll()
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
                if (response.status === 200) {
                    if (shouldUpdateActivePlan) {
                        dispatch(getActiveTrainingPlanAction())
                    }
                }
            })
    }
};

