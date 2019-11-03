import {combineReducers} from "redux";
import isAuthorized from "./isAuthorized";
import trainings from "./trainings";
import training from "./training";
import exercises from "./exercises";
import exercise from "./exercise";
import exerciseView from "./exerciseView";
import trainingPlan from "./trainingPlan";
import trainingPlanView from "./trainingPlanView";
import trainingPlans from "./trainingPlans";
import activeTrainingPlan from "./activeTrainingPlan";
import trainingDay from "./trainingDay";

export default combineReducers({
    isAuthorized,
    trainings,
    training,
    exercises,
    exercise,
    exerciseView,
    trainingPlan,
    trainingPlanViewMode: trainingPlanView,
    trainingPlans,
    activeTrainingPlan,
    trainingDay
});

