import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";
import {Button, Col, Descriptions, Row} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import {useHistory} from 'react-router-dom'

export default () => {
    let history = useHistory()
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

    const remove = () => {
        TrainingPlanAPI.delete(trainingPlan.id)
            .then(response => {
                if (response) {
                    dispatch({type: 'CLEAR_TRAINING_PLAN'});
                    dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'list'});
                    history.push('/plans');
                }
            });
    };

    const edit = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'edit'});
    };

    return (
        <Fragment>
            <Row type={'flex'} justify={'space-around'}>
                <Col>
                    <Descriptions title="Plan treningowy" bordered>
                        <Descriptions.Item label="Nazwa">{trainingPlan.name}</Descriptions.Item>
                        <Descriptions.Item label="Ilosc dni treningowych">{trainingPlan.trainingDays.length}</Descriptions.Item>
                        <Descriptions.Item label="Opis">{trainingPlan.description}</Descriptions.Item>
                    </Descriptions>
                    <ButtonGroup>
                        <Button type={"primary"} onClick={edit}>Edytuj</Button>
                        <Button onClick={remove}>Usun</Button>
                    </ButtonGroup>
                </Col>
                <Col>
                    <TrainingDaysList/>
                </Col>
            </Row>
        </Fragment>
    )

}