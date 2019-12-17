import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingDayEdit from "./TrainingDayEdit";
import TrainingDayView from "./TrainingDayView";
import {useParams} from "react-router";
import TrainingDayExercisePage from "../trainingDayExercises/TrainingDayExercisePage";
import TrainingDayAPI from "../../services/trainingDayAPI";

export default function TrainingDay(props) {
    const [viewMode, setViewMode] = React.useState('view');
    const [trainingDay, setTrainingDay] = React.useState();
    const {dayId} = useParams();
    let view;
    
    const refreshTrainingDay = useCallback(() => {
        TrainingDayAPI.get(dayId)
            .then(trainingDay => {
                setTrainingDay(trainingDay);
                setViewMode('view');
            })
    }, [dayId]);

    useEffect(() => {
        if (Number.isInteger(Number.parseInt(dayId))) {
            refreshTrainingDay();
        } else {
            setViewMode('edit');
        }
    }, [dayId, refreshTrainingDay]);

    const render = () => {
        if (trainingDay) {
            if (viewMode === 'view') {
                view = <TrainingDayView trainingDay={trainingDay} setViewMode={setViewMode} refreshTrainingDay={refreshTrainingDay}/>;
            } else if (viewMode === 'edit') {
                view = <TrainingDayEdit trainingDayProps={trainingDay} setViewMode={setViewMode} setTrainingDay={setTrainingDay}/>;
            }
        } else {
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