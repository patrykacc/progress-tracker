import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTrainingAction} from "../../../redux/actions/trainingActions";
import TrainingView from "./TrainingView";
import TrainingEdit from "./TrainingEdit";

export default (props) => {
    const dispatch = useDispatch();
    const training = useSelector(state => state.training);
    const trainingView = useSelector(state => state.trainingView);
    let view;

    const render = () => {
        if (training) {
            if (trainingView === 'view') {
                view = <TrainingView training={training}/>;
            } else {
                view = <TrainingEdit trainingProps={training}/>;
            }
        }
        return view;
    };

    useEffect(() => {
        if (props.match.params.trainingId) {
            dispatch(getTrainingAction(props.match.params.trainingId));
            dispatch({type: 'TRAINING_VIEW_MODE', mode: 'view'});
        }
    }, [dispatch, props.match.params.trainingId]);

    return render();
}
