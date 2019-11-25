import * as React from "react";
import TrainingAPI from "../../../services/trainingAPI";
import {useDispatch} from "react-redux";
import {Button, Descriptions, Row} from "antd";
import { useHistory } from 'react-router-dom'


export default ({training}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const edit = () => {
        dispatch({type: 'TRAINING_VIEW_MODE', mode: 'edit'});
    };

    const remove = () => {
        TrainingAPI.delete(training.id)
            .then(response => {
                if (response.status === 200) {
                    dispatch({type: 'CLEAR_TRAINING'});
                    history.replace('/');
                }
            })
    };

    return (
        <div>
            <Descriptions title={'Trening'} bordered>
                <Descriptions.Item label="Nazwa" >{training.name}</Descriptions.Item>
                <Descriptions.Item label="Data">{training.startDate}</Descriptions.Item>
                <Descriptions.Item label="Objętość">{training.volume}</Descriptions.Item>
            </Descriptions>
            <Row type={'flex'}>
                <Button onClick={edit} type={"primary"}>Edytuj</Button>
                <Button onClick={remove} >Usuń</Button>
            </Row>
        </div>

    )
}
