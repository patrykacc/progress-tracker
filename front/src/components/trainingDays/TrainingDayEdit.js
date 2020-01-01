import React, {Fragment} from "react";
import ButtonGroup from "antd/lib/button/button-group";
import TrainingDayAPI from "../../services/trainingDayAPI";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import {useParams} from "react-router";


export default ({trainingDayProps, setTrainingDay, setViewMode}) => {
    const [temporaryTrainingDay, setTemporaryTrainingDay] = React.useState(trainingDayProps);
    const {planId} = useParams();


    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        temporaryTrainingDay[inputName] = value;
        setTemporaryTrainingDay({...temporaryTrainingDay});
    };

    const save = () => {
        trainingDayProps.trainingPlan = {id: planId};
        TrainingDayAPI.save(temporaryTrainingDay)
            .then(response => {
                if (response) {
                    setViewMode('view');
                    setTrainingDay(response);
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
            <Form title={'Nowy dzień treningowy'} onSubmit={save} layout={"horizontal"} labelAlign={"left"}>
                <Row type={'flex'} justify={'space-between'}>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Nazwa'}  labelAlign={"left"}>
                            <Input name={'name'} onChange={handleInputChange}
                                   value={temporaryTrainingDay.name}/>
                        </Form.Item>
                    </Col>
                    <Col sm={24} xs={24} md={12}>
                        <Form.Item {...formItemLayout} label={'Opis'}  labelAlign={"left"}>
                            <Input name={'description'} onChange={handleInputChange}
                                   value={temporaryTrainingDay.description}/>
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