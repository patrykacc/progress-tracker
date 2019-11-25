import {Button, Col, Descriptions, Row} from 'antd';
import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingDayAPI from "../../services/trainingDayAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import TrainingDayExerciseList from "../trainingDayExercises/TrainingDayExerciseList";


export default () => {
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    function remove() {
        TrainingDayAPI.delete(trainingDay.id)
            .then(response => {
                dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'empty'});
                dispatch({type: 'CLEAR_TRAINING_DAY'});
                dispatch(getTrainingPlanAction());
            })
    }

    function edit() {
        dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'edit'});
    }

    return (
        <React.Fragment>
            <Row type="flex" justify={'start'}>
                <Col>
                    <Descriptions title={'Dzień treningowy'} bordered>
                        <Descriptions.Item label="Nazwa">{trainingDay.name}</Descriptions.Item>
                        <Descriptions.Item label="Numer dnia">{trainingDay.dayNumber}</Descriptions.Item>
                        <Descriptions.Item label="Opis">{trainingDay.description}</Descriptions.Item>
                        <Descriptions.Item
                            label="Ilość ćwiczeń">{trainingDay.trainingDayExercises.length}</Descriptions.Item>
                    </Descriptions>
                    <Fragment>
                        <Button color="primary" onClick={edit}>Edytuj</Button>
                        <Button onClick={remove} color="secondary">Usuń</Button>
                    </Fragment>
                </Col>
                <Col>
                    <TrainingDayExerciseList/>
                </Col>
            </Row>
        </React.Fragment>
    )
}