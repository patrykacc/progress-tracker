import * as React from "react";
import TrainingDetails from "../trainingDetails/TrainingPage";
import ExerciseDetails from "../../../components/exercises/ExerciseDetails";
import Exercises from "../../../components/exercises/Exercises";

export default (props) => {
    return (
        <div>
            <TrainingDetails {...props} />
            <Exercises/>
            <ExerciseDetails/>
        </div>
    )
}