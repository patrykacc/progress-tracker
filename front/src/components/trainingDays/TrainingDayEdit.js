import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import ButtonGroup from "antd/lib/button/button-group";
import TrainingDayAPI from "../../services/trainingDayAPI";
import {getTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {Button, Col, Divider, Form, Input, Row} from "antd";


export default () => {
    const trainingDay = useSelector(state => state.trainingDay);
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

    const setTrainingDayInStore = (trainingDay) => {
        dispatch({type: 'TRAINING_DAY_UPDATED', trainingDay: trainingDay});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingDay[inputName] = value;
        setTrainingDayInStore(trainingDay);
    };

    const save = () => {
        trainingDay.trainingPlan = {id: trainingPlan.id}
        TrainingDayAPI.save(trainingDay)
            .then(response => {
                if (response) {
                    dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'view'});
                    dispatch(getTrainingPlanAction());
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_DAY_VIEW_MODE', mode: 'view'});
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }

    return (
        <Fragment>
            <Form title={'Nowy dzień treningowy'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
                <Row type={'flex'} justify={'space-around'}>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Nazwa'}  labelAlign={"left"}>
                            <Input name={'name'} onChange={handleInputChange}
                                   value={trainingDay.name}/>
                        </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Opis'}  labelAlign={"left"}>
                            <Input name={'description'} onChange={handleInputChange}
                                   value={trainingDay.description}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row type={'flex'} justify={'space-around'}>
                    <Col span={4} style={{textAlign: 'right'}}>
                        <ButtonGroup size={"small"} >
                            <Button type={"primary"} onClick={save}>Zapisz</Button>
                            <Button onClick={cancel}>Anuluj</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Form>
            <Divider/>
        </Fragment>
    )

}