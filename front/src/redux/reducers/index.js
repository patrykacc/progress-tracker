import {combineReducers} from "redux";
import isAuthorized from "./isAuthorized";
import activeTrainingPlan from "./activeTrainingPlan";

export default combineReducers({
    activeTrainingPlan
});

