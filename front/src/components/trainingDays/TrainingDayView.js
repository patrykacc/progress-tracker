import {Button, Col, Descriptions, Row} from 'antd';
import React, {Fragment} from "react";
import TrainingDayAPI from "../../services/trainingDayAPI";
import TrainingDayExerciseList from "../trainingDayExercises/TrainingDayExerciseList";
import {useHistory} from "react-router";
import BaseButtonGroup from "../base/BaseButtonGroup";

export default ({trainingDay, setViewMode, refreshTrainingDay}) => {
    const history = useHistory();

    function remove() {
        TrainingDayAPI.delete(trainingDay.id)
            .then(response => {
                history.goBack();
            })
    }

    function edit() {
        setViewMode('edit');
    }

    return (
        <div style={{
            border: '2px solid lightblue',
            borderRadius: '5px',
            background: 'white',
            margin: '10px',
            padding: '15px',
        }}>
            <Row type="flex" justify={'space-between'}>
                <Col>
                    <Descriptions title={'Dzień treningowy'} bordered>
                        <Descriptions.Item label="Nazwa">{trainingDay.name}</Descriptions.Item>
                        <Descriptions.Item label="Numer dnia">{trainingDay.dayNumber}</Descriptions.Item>
                        <Descriptions.Item label="Opis">{trainingDay.description}</Descriptions.Item>
                        <Descriptions.Item
                            label="Ilość ćwiczeń">{trainingDay.trainingDayExercises.length}</Descriptions.Item>
                    </Descriptions>
                    <BaseButtonGroup actions={[{type: 'primary', label: 'Edytuj', handler: edit},{label: 'Usuń', handler: remove}]} />
                </Col>
                <Col>
                    <TrainingDayExerciseList refreshTrainingDay={refreshTrainingDay} trainingDayExercises={trainingDay.trainingDayExercises}/>
                </Col>
            </Row>
        </div>
    )
}