import React from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingDayExerciseEdit from "./TrainingDayExerciseEdit";
import TrainingDayExerciseView from "./TrainingDayExerciseView";

export default (props) => {
    const trainingDayExerciseView = useSelector(state => state.trainingDayExerciseView);
    const trainingDayExercise = useSelector(state => state.trainingDayExercise);
    let view;

    const render = () => {
        if (trainingDayExerciseView === 'empty' || trainingDayExercise == null) {
            view = null;
        } else if (trainingDayExerciseView === 'view') {
            view = <TrainingDayExerciseView trainingDayExercise={trainingDayExercise} {...props}/>;
        } else if (trainingDayExerciseView === 'edit') {
            view = <TrainingDayExerciseEdit trainingDayExerciseProps={trainingDayExercise} {...props}/>;
        }
        return (
            <React.Fragment>
                {view}
            </React.Fragment>
        )
    };

    return render();
}