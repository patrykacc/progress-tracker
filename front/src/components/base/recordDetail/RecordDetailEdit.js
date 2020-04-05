import React, {Fragment} from "react";
import {Button, Col, Descriptions, Form, Input, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../BaseButtonGroup";
import {useDispatch} from "react-redux";
import RecordDetailEditForm from "./RecordDetailEditForm";

export default ({recordProp = {}, recordInfo, actions = [], setMode, SpecificAPI}) => {
    let isCreateMode = !recordProp.id;
    let history = useHistory()

    const [record, setRecord] = React.useState(recordProp);

    const formItemLayout = {
        labelCol: {span: 6},
        wrapperCol: {span: 16},
    };

    if (!recordInfo || !record) {
        return null;
    }

    const handleChange = (event) => {
        let value = event.currentTarget.value;
        let inputName = event.currentTarget.name;
        record[inputName] = value;
        setRecord({...record});
    };

    const handleDateChange = (moment, date, fieldApiName) => {
        record[fieldApiName] = date;
        setRecord({...record});
    };

    const cancel = () => {
        setMode('view');
    };

    const save = () => {
        recordInfo.fields.forEach(field => {
           if (field.type === 'LIST') {
               delete record[field.apiName]
           }
        });
        SpecificAPI.save(record)
            .then(response => {
                if (response) {
                    if (isCreateMode) {
                        history.push('/' + SpecificAPI.URI + '/' + response.id);
                    } else {
                        setMode('view');
                    }
                }
            })
    };
    let props = {recordInfo, record, handleChange, handleDateChange};
    return (
        <Fragment>
            <Form title={recordInfo.label} layout={"horizontal"} {...formItemLayout}>
                <RecordDetailEditForm {...props} />
                <Row>
                    <Col>
                        <BaseButtonGroup actions={[
                            {label: 'Anuluj', handler: cancel},
                            {label: 'Zapisz', handler: save}
                        ]}/>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )
}