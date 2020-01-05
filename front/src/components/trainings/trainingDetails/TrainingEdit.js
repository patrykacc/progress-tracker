import * as React from "react";
import TrainingAPI from "../../../services/trainingAPI";
import {useDispatch} from "react-redux";
import {Button, Col, Form, Row} from "antd";
import moment from 'moment';
import './training.css';
import {DatePicker} from 'antd';
import {useHistory} from 'react-router-dom'

export default ({trainingProps}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let initialMode = trainingProps ? 'edit' : 'create';
    const [training, setTraining] = React.useState(trainingProps || {});

    const cancel = () => {
        if (initialMode === 'create') {
            dispatch({type: 'TRAINING_VIEW_MODE', mode: 'empty'});
        } else if (initialMode === 'edit') {
            dispatch({type: 'TRAINING_VIEW_MODE', mode: 'view'});
        }
    };

    const save = () => {
        TrainingAPI.save(training)
            .then(training => {
                if (training) {
                    if (initialMode === 'create') {
                        history.replace('/Training/' + training.id)
                    } else {
                        setTrainingInStore(training);
                        dispatch({type: 'TRAINING_VIEW_MODE', mode: 'view'});
                    }
                }
            })
    };

    const setTrainingInStore = (training) => {
        dispatch({type: 'TRAINING_UPDATED', training});
    };

    const handleDateChange = (date, dateString) => {
        if (date) {
            training.startDate = dateString;
            setTraining({...training});
        }
    };

    return (
        <Form className='training-form' title={'Trening'} onSubmit={save}>
            <Row justify={'space-between'} type={'flex'}>
                <Col span={12} style={{display: 'block'}}>
                    <Form.Item label={'Data'}>
                        <DatePicker name={'startDate'} onChange={handleDateChange}
                                    value={moment(training.startDate)}/>
                    </Form.Item>
                </Col>
            </Row>
            <Button type="primary" htmlType="submit">Zapisz</Button>
            <Button onClick={cancel} color="secondary">Anuluj</Button>
        </Form>
    )
}
