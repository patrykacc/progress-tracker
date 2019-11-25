import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanEdit from "./TrainingPlanEdit";
import TrainingDay from "../trainingDays/TrainingDay";
import TrainingPlanView from "./TrainingPlanView";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";

export default function TrainingPlanPage(props) {
    const trainingPlanViewMode = useSelector(state => state.trainingPlanView);
    const dispatch = useDispatch();
    let view;

    useEffect(() => {
        if (Number.isInteger(Number.parseInt(props.match.params.planId))) {
            dispatch(getTrainingPlanAction(props.match.params.planId));
            dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
        } else {
            dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'edit'});
        }
    }, [dispatch, props.match.params]);

    const render = () => {
        switch (trainingPlanViewMode) {
            case 'view':
                view = <TrainingPlanView {...props}/>;
                break;
            case 'edit':
                view = <TrainingPlanEdit {...props}/>;
                break;
            default:
                break;
        }
        return (
            <Fragment>
                {view}
                <TrainingDay/>
            </Fragment>
        )
    };

    return render();
}