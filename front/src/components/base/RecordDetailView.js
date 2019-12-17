import React, {Fragment} from "react";
import TrainingDaysList from "../trainingDays/TrainingDaysList";
import {Col, Descriptions, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../base/BaseButtonGroup";
import {useDispatch} from "react-redux";

export default ({record, recordInfo, refresh, actions}) => {
    let history = useHistory()
    const dispatch = useDispatch();



    return (
        <Fragment>
            <Row type={'flex'} justify={'space-between'}>
                <Col>
                    <Descriptions title="Plan treningowy" bordered>
                        {recordInfo.fields.map(field => {
                            const value = record[field.apiName];
                            return (<Descriptions.Item label={field.labelCol}>{value}</Descriptions.Item>)
                        })}
                        <Descriptions.Item label="Opis">{record.description}</Descriptions.Item>
                    </Descriptions>
                    <BaseButtonGroup actions={actions}/>
                </Col>
                <Col>
                    <TrainingDaysList trainingDays={record.trainingDays} refreshTrainingPlan={refresh}/>
                </Col>
            </Row>
        </Fragment>
    )

}