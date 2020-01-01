import React, {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingDayExerciseAPI from "../../services/trainingDayExerciseAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {Button, Col, Form, Input, Row} from "antd";

export default ({trainingDayExerciseProps}) => {
    const [trainingDayExercise, setTrainingDayExercise] = useState(trainingDayExerciseProps);
    const trainingDay = useSelector(state => state.trainingDay);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingDayExercise[inputName] = value;
        setTrainingDayExercise({...trainingDayExercise});
    };

    const save = () => {
        trainingDayExercise.trainingDay = {id: trainingDay.id}
        TrainingDayExerciseAPI.save(trainingDayExercise)
            .then(response => {
                if (response) {
                    dispatch({type: 'TRAINING_DAY_EXERCISE_VIEW_MODE', mode: 'view'});
                    dispatch(getTrainingPlanAction());
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_DAY_EXERCISE_VIEW_MODE', mode: 'view'});
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }

    return (
        <Fragment>
            <Form title={'Ćwiczenie'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
                <Row>
                    <Col>
                        <Form.Item {...formItemLayout} label={'Ćwiczenie'}  labelAlign={"left"}>
                            <Input name={'name'} onChange={handleInputChange}
                                   value={trainingDayExercise.name}/>
                        </Form.Item>
                        <Form.Item {...formItemLayout} label={'Powtórzeń'}  labelAlign={"left"}>
                            <Input name={'repetitions'} onChange={handleInputChange}
                                   value={trainingDayExercise.repetitions}/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item {...formItemLayout} label={'Serii'}  labelAlign={"left"}>
                            <Input name={'series'} onChange={handleInputChange}
                                   value={trainingDayExercise.series}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} style={{textAlign: 'right'}}>
                        <Button type="primary" htmlType="submit">Zapisz</Button>
                        <Button onClick={cancel} color="secondary">Anuluj</Button>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )

}