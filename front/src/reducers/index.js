import { combineReducers } from "redux";
import isAuthorized  from "./isAuthorized";
import trainings from "./trainings";
import training from "./training";
import exercises from "./exercises";
import exercise from "./exercise";

export default combineReducers({
    isAuthorized, trainings, training, exercises, exercise
});