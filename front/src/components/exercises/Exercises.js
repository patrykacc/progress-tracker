import {useEffect} from "react";
import * as React from "react";
import ExercisesTable from "./ExercisesTable";
import {useDispatch, useSelector} from "react-redux";
import {getExercisesAction} from "../../redux/actions/trainingActions";

export default () => {
    const exercises = useSelector(state => state.exercises);
    const training = useSelector(state => state.training);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (training.id) {
            dispatch(getExercisesAction(training.id))
        }
    }, [dispatch, training.id]);

    
    return (
        <ExercisesTable exercises={exercises} trainingId={training.id} ableToAddExercise={true}/>
    )
}