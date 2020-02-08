import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getActiveTrainingPlanAction,
    getAllTrainingPlansAction,
    setActiveTrainingPlanAction
} from "../../redux/actions/trainingPlanActions";
import {Button, Icon, List, Skeleton} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import NewRecordModal from "../base/relatedList/NewRecordModal";

export default function TrainingPlansList({history}) {
    const trainingPlans = useSelector(state => state.trainingPlans);
    const trainingPlanViewMode = useSelector(state => state.trainingPlanViewMode);
    const activeTrainingPlan = useSelector(state => state.activeTrainingPlan);
    let activePlanId = activeTrainingPlan ? activeTrainingPlan.id : null;
    const [newPlanModalVisible, setNewPlanModalVisible] = React.useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTrainingPlansAction());
        dispatch(getActiveTrainingPlanAction());
    }, [dispatch, trainingPlanViewMode]);

    const setActivePlan = (event, trainingPlanId) => {
        event.stopPropagation();
        dispatch(setActiveTrainingPlanAction(trainingPlanId, true))
    };

    const rowClick = (plan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan: plan});
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
        history.push('/view/' + plan.id);
    }

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
    };

    const showNewPlanModal = () => {
        setNewPlanModalVisible(true);
    };

    const hideNewPlanModal = () => {
        setNewPlanModalVisible(false);
    };

    return (
        <div style={{
            border: '2px solid lightblue',
            borderRadius: '5px',
            background: 'white',
            margin: '10px',
            padding: '15px',
        }}>
            <List header={<div>Dostępne plany: </div>}
                  dataSource={trainingPlans}
                  renderItem={plan => (
                      <List.Item onClick={() => rowClick(plan)}
                                 actions={[<span>
                                     <Icon onClick={(event) => setActivePlan(event, plan.id)}
                                           type="check-circle"
                                           style={{ fontSize: '26px', color: plan.id === activePlanId ? "green" : "gray" }}
                                     />
                                 </span>]}>
                          <Skeleton title={false} loading={false}>
                              <List.Item.Meta
                                  title={plan.name}
                                  description={plan.description}
                              />
                          </Skeleton>
                      </List.Item>
                  )}
            />
            <NewRecordModal isVisible={newPlanModalVisible} objectApiName={'TrainingPlan'} closeSelf={hideNewPlanModal}/>
            <ButtonGroup>
                <Button onClick={showNewPlanModal}>Stwórz nowy plan</Button>
                <Button onClick={cancel}>Anuluj</Button>
            </ButtonGroup>
        </div>
    )
}