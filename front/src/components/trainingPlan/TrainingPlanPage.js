import React, {Fragment, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanEdit from "./TrainingPlanEdit";
import TrainingPlanView from "./TrainingPlanView";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import {useParams} from "react-router";


export default function TrainingPlanPage(props) {
    const [viewMode, setViewMode] = React.useState('view');
    const [trainingPlan, setTrainingPlan] = React.useState();
    const {planId} = useParams();
    let view;

    const refreshTrainingPlan = useCallback(() => {
        TrainingPlanAPI.get(planId)
            .then(trainingPlan => {
                setTrainingPlan(trainingPlan);
                setViewMode('view');
            });
    }, [planId])

    useEffect(() => {
        if (Number.isInteger(Number.parseInt(planId))) {
            refreshTrainingPlan();
        } else {
            setViewMode('edit');
        }
    }, [planId, refreshTrainingPlan]);
    


    const render = () => {
        if (trainingPlan) {
            if (viewMode === 'view') {
                view = <TrainingPlanView trainingPlan={trainingPlan} setViewMode={setViewMode} refreshTrainingPlan={refreshTrainingPlan}/>;
            } else if (viewMode === 'edit') {
                view = <TrainingPlanEdit trainingPlanProps={trainingPlan} setViewMode={setViewMode}
                                         setTrainingPlan={setTrainingPlan}/>;
            }
        } else {
            view = <TrainingPlanEdit trainingPlanProps={{}} setViewMode={setViewMode}
                                     setTrainingPlan={setTrainingPlan}/>;
        }
        return (
            <div style={{
                border: '2px solid lightblue',
                borderRadius: '5px',
                background: 'white',
                margin: '10px',
                padding: '15px',
            }}>
                {view}
            </div>
        )
    };

    return render();
}