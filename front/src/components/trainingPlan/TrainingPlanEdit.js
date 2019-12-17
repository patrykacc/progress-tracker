import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import TrainingPlanAPI from "../../services/trainingPlanAPI";
import TrainingDaysList from "../trainingDays/TrainingDaysList";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import {useHistory, useParams} from 'react-router-dom'


export default function TrainingPlanEdit({trainingPlanProps, setViewMode, setTrainingPlan}) {
    let history = useHistory();
    const dispatch = useDispatch();
    const {planId} = useParams();
    const [temporaryTrainingPlan, setTemporaryTrainingPlan] = React.useState({...trainingPlanProps});

    const setTrainingPlanInStore = (trainingPlan) => {
        dispatch({type: 'TRAINING_PLAN_UPDATED', trainingPlan});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        temporaryTrainingPlan[inputName] = value;
        setTemporaryTrainingPlan({...temporaryTrainingPlan});
    };

    const save = () => {
        TrainingPlanAPI.save(temporaryTrainingPlan)
            .then(response => {
                if (response) {
                    setTrainingPlan({...response})
                    setTrainingPlanInStore(response);
                    if (planId === 'new') {
                        history.replace('/plans/' + response.id)
                    } else {
                        setViewMode('view');
                    }
                }
            });
    };

    const cancel = () => {
        setViewMode('view');
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    };

    return (
        <Fragment>
            <Form title={'Nowy plan treningowy'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
                <Row type={'flex'} justify={'space-between'}>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Nazwa'}  labelAlign={"left"}>
                            <Input name={'name'} onChange={handleInputChange}
                                   value={temporaryTrainingPlan.name}/>
                        </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Opis'}  labelAlign={"left"}>
                            <Input name={'description'} onChange={handleInputChange}
                                   value={temporaryTrainingPlan.description}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row type={'flex'} justify={'space-between'}>
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