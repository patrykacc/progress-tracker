import {combineReducers} from "redux";
import isAuthorized from "./isAuthorized";
import trainings from "./trainings";
import training from "./training";
import exercises from "./exercises";
import exercise from "./exercise";
import exerciseView from "./exerciseView";
import trainingPlan from "./trainingPlan";
import trainingPlanViewMode from "./trainingPlanViewMode";
import trainingPlans from "./trainingPlans";

export default combineReducers({
    isAuthorized, trainings, training, exercises, exercise, exerciseView, trainingPlan, trainingPlanViewMode, trainingPlans
});

