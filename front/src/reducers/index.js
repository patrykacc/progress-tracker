import { combineReducers } from "redux";
import isAuthorized  from "./isAuthorized";
import trainings from "./trainings";
import selectedTraining from "./selectedTraining";

export default combineReducers({
    isAuthorized, trainings, selectedTraining
});