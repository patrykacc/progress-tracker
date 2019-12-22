import React, {Fragment} from "react";
import TrainingDaysList from "../../trainingDays/TrainingDaysList";
import {Col, Descriptions, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../BaseButtonGroup";
import {useDispatch} from "react-redux";

export default ({record, recordInfo, refresh, actions = [], SpecificAPI, setMode}) => {
    let history = useHistory()
    const dispatch = useDispatch();

    if (!recordInfo || !record) {
        return null;
    }

    const edit = () => {
        setMode('edit');
    };
    const remove = () => {
        SpecificAPI.delete(record.id)
            .then(history.goBack());
    };
    return (
        <Fragment>
            <Row type={'flex'} justify={'space-between'}>
                <Col>
                    <Descriptions title="Plan treningowy" bordered>
                        {recordInfo.fields.map(field => {
                            if (field.type === 'ID' || field.type === 'LIST') {
                                return null;
                            }
                            if(field.type === 'REFERENCE') {
                                const fieldValue = record[field.apiName];
                                const value = fieldValue ? fieldValue.name : '';
                                return (<Descriptions.Item key={field.apiName} label={field.label}>{value}</Descriptions.Item>)
                            } else {
                                const value = record[field.apiName];
                                return (<Descriptions.Item key={field.apiName} label={field.label}>{value}</Descriptions.Item>)
                            }

                        })}
                    </Descriptions>
                    <BaseButtonGroup actions={[
                        {label: 'Usuń', handler: remove},
                        {label: 'Edytuj', handler: edit}
                    ]}/>
                </Col>
                <Col>
                    <TrainingDaysList trainingDays={record.trainingDays} refreshTrainingPlan={refresh}/>
                </Col>
            </Row>
        </Fragment>
    )
}