import React from "react";
import ExerciseAPI from "../../services/exerciseAPI";
import {useDispatch, useSelector} from "react-redux";
import {getExercisesAction} from "../../redux/actions/trainingActions";
import {Button, Col, Form, Input, Row} from "antd";
import './exercise.css';

export default ({handleChange, exercise}) => {
    const dispatch = useDispatch(state => state.exercise);
    const training = useSelector(state => state.training);

    const setExerciseInStore = (exercise) => {
        dispatch({type: 'EXERCISE_SELECTED', exercise});
    };

    const cancel = () => {
        if (exercise) {
            setExerciseInStore(exercise);
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'view'});
        } else {
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'empty'});

        }
    };

    const save = () => {
        exercise.training = {id: training.id};
        ExerciseAPI.save(exercise)
            .then(exercise => {
                if (exercise) {
                    dispatch(getExercisesAction());
                    dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'view'});
                    setExerciseInStore(exercise);
                }
            })
            .catch(error => {
                console.error(error);
            })
    };
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }
    return (
        <Form title={'Ćwiczenie'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
            <Row>
                <Col sm={24} xs={24} md={12}>
                    <Form.Item {...formItemLayout} label={'Ćwiczenie'}  labelAlign={"left"}>
                        <Input name={'name'} onChange={handleChange}
                               value={exercise.name}/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label={'Powtórzeń'}  labelAlign={"left"}>
                        <Input name={'repetitions'} onChange={handleChange}
                               value={exercise.repetitions}/>
                    </Form.Item>
                </Col>
                <Col sm={24} xs={24} md={12}>
                    <Form.Item {...formItemLayout} label={'Serii'}  labelAlign={"left"}>
                        <Input name={'series'} onChange={handleChange}
                               value={exercise.series}/>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label={'Obciążenie'}  labelAlign={"left"}>
                        <Input name={'weight'} onChange={handleChange}
                               value={exercise.weight}/>
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
    )
}