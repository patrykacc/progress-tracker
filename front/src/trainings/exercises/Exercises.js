import {useEffect} from "react";
import {getAllByTrainingId} from "../../services/exerciseService";
import * as React from "react";
import ExercisesTable from "./ExercisesTable";


export default ({trainingId}) => {
    const [exercises, setExercises] = React.useState([]);
    useEffect(() => {
        if (!trainingId) {
            return;
        }
        getAllByTrainingId(trainingId)
            .then(response => {
                if (response) {
                    setExercises(response);
                }
                console.log(response);
            })
    }, [trainingId]);

    return (
        <ExercisesTable exercises={exercises} trainingId={trainingId} ableToAddExercise={true}/>
    )
}