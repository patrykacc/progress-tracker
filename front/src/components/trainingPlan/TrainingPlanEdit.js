import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import ButtonGroup from "antd/lib/button/button-group";


export default function TrainingPlanEdit({history}) {
    const trainingPlan = useSelector(state => state.trainingPlan);
    const dispatch = useDispatch();

    const setTrainingPlanInStore = (trainingPlan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        trainingPlan[inputName] = value;
        setTrainingPlanInStore(trainingPlan);
    };

    const save = () => {
        TrainingPlanAPI.save(trainingPlan)
            .then(response => {
                if (response) {
                    setTrainingPlanInStore(response);
                    if (history.location.pathname.includes('new')) {
                        history.replace('/plans/' + response.id)
                    } else {
                        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
                    }
                }
            });
    };

    const cancel = () => {
        dispatch({type: 'TRAINING_PLAN_VIEW_MODE', mode: 'view'});
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    };

    return (
        <Fragment>
            <Form title={'Nowy plan treningowy'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
                <Row type={'flex'} justify={'space-around'}>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Nazwa'}  labelAlign={"left"}>
                            <Input name={'name'} onChange={handleInputChange}
                                   value={trainingPlan.name}/>
                        </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Opis'}  labelAlign={"left"}>
                            <Input name={'description'} onChange={handleInputChange}
                                   value={trainingPlan.description}/>
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
            <TrainingDaysList/>
        </Fragment>
    )

}