import {useEffect} from "react";
import * as React from "react";
import ExercisesTable from "./ExercisesTable";
import {useDispatch, useSelector} from "react-redux";
import {getExercisesAction} from "../../actions";

export default ({trainingId}) => {
    const exercises = useSelector(state => state.exercises);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (trainingId) {
            dispatch(getExercisesAction(trainingId))
        }
    }, [dispatch, trainingId]);

    
    return (
        <ExercisesTable exercises={exercises} trainingId={trainingId} ableToAddExercise={true}/>
    )
}