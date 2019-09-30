import { combineReducers } from "redux";
import isAuthorized  from "./isAuthorized";
import trainings from "./trainings";

export default combineReducers({
    isAuthorized, trainings
});