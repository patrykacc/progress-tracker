import React from "react";
import {useSelector} from "react-redux";
import TrainingDayEdit from "./TrainingDayEdit";
import TrainingDayView from "./TrainingDayView";
import TrainingDayExercisePage from "../trainingDayExercises/TrainingDayExercisePage";

export default function TrainingDay(props) {
    const trainingPlanViewMode = useSelector(state => state.trainingDayView);
    let view;

    const render = () => {
        if (trainingPlanViewMode === 'view') {
            view = <TrainingDayView {...props}/>;
        } else if (trainingPlanViewMode === 'edit') {
            view = <TrainingDayEdit {...props}/>;
        } else if (trainingPlanViewMode === 'empty') {
            view = null;
        }
        return (
            <React.Fragment>
                {view}
                <TrainingDayExercisePage/>
            </React.Fragment>
        )
    };

    return render();
}