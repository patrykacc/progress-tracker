import React, {Fragment} from "react";
import {Button, Col, Descriptions, Form, Input, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../BaseButtonGroup";
import {useDispatch} from "react-redux";
import RecordDetailEditForm from "./RecordDetailEditForm";

export default ({recordProp = {}, recordInfo, refresh, actions = [], setMode, SpecificAPI}) => {
    let isCreateMode = !recordProp.id;
    let history = useHistory()
    const dispatch = useDispatch();

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

    const cancel = () => {
        setMode('view');
    };

    const save = () => {
        SpecificAPI.save(record)
            .then(response => {
                if (response) {
                    if (isCreateMode) {
                        history.push('/' + SpecificAPI.URI + '/' + response.id);
                    } else {
                        refresh(() => setMode('view'))
                    }
                }
            })
    };
    let props = {recordInfo, record, handleChange};
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