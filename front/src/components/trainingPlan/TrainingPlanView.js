import React, {Fragment} from "react";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";
import {Col, Descriptions, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../base/BaseButtonGroup";
import {setActiveTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {useDispatch} from "react-redux";

export default ({trainingPlan, setViewMode, refreshTrainingPlan}) => {
    let history = useHistory()
    const dispatch = useDispatch();

    const remove = () => {
        TrainingPlanAPI.delete(trainingPlan.id)
            .then(response => {
                if (response) {
                    history.push('/plans');
                }
            });
    };

    const activate = () => {
        dispatch(setActiveTrainingPlanAction(trainingPlan.id, true))
    };

    const edit = () => {
        setViewMode('edit');
    };

    return (
        <Fragment>
            <Row type={'flex'} justify={'space-between'}>
                <Col>
                    <Descriptions title="Plan treningowy" bordered>
                        <Descriptions.Item label="Nazwa">{trainingPlan.name}</Descriptions.Item>
                        <Descriptions.Item
                            label="Ilosc dni treningowych">{trainingPlan.trainingDays.length}</Descriptions.Item>
                        <Descriptions.Item label="Opis">{trainingPlan.description}</Descriptions.Item>
                    </Descriptions>
                    <BaseButtonGroup actions={[
                        {label: 'Usuń', handler: remove},
                        {label: 'Aktywuj', handler: activate},
                        {label: 'Edytuj', handler: edit}
                    ]}/>
                </Col>
                <Col>
                    <TrainingDaysList trainingDays={trainingPlan.trainingDays}
                                      refreshTrainingPlan={refreshTrainingPlan}/>
                </Col>
            </Row>
        </Fragment>
    )

}