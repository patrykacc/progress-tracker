import {combineReducers} from "redux";
import isAuthorized from "./isAuthorized";
import trainings from "./trainings";
import training from "./training";
import exercises from "./exercises";
import exercise from "./exercise";
import exerciseView from "./exerciseView";
import trainingPlan from "./trainingPlan";

export default combineReducers({
    isAuthorized, trainings, training, exercises, exercise, exerciseView, trainingPlan
});

