import {Col, Form, Input} from "antd";
import React from "react";
import {DatePicker} from 'antd';
import moment from "moment";

export default ({recordInfo, record, handleChange, handleDateChange}) => {
    if (!recordInfo) {
        return null;
    } else {
        return (
            recordInfo.fields.map(field => {
                if (field.type === 'ID' || field.type === 'LIST' || field.type === 'REFERENCE' || field.apiName === 'relatedListFields') {
                    return null;
                }

                let value;
                if (record) {

                    if (field.type === 'REFERENCE') {
                        const fieldValue = record[field.apiName];
                        value = fieldValue ? fieldValue.name : '';
                    } else {
                        value = record[field.apiName];
                    }
                    if (field.type === 'DATE') {
                        return <Col key={field.apiName}>
                            <Form.Item colon label={field.label} labelAlign={"right"}>
                                <DatePicker  showToday format="DD-MM-YYYY"
                                            value={value ? moment(value, 'DD-MM-YYYY') : null} locale={"pl"} placeholder="Wybierz datę"
                                            onChange={(date, dateString) => handleDateChange(date, dateString, field.apiName)}
                                />
                            </Form.Item>
                        </Col>
                    }
                    return <Col key={field.apiName}>
                        <Form.Item colon label={field.label} labelAlign={"right"}>
                            <Input name={field.apiName} onChange={handleChange} value={value} type={field.type}/>
                        </Form.Item></Col>;
                }

            })
        )
    }
}