import {Col, Form, Input} from "antd";
import React from "react";

export default ({recordInfo, record, handleChange}) => {
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
                }
                return <Col key={field.apiName}><Form.Item colon label={field.label} labelAlign={"right"}>
                    <Input name={field.apiName} onChange={handleChange}
                           value={value} type={field.type}/>
                </Form.Item></Col>;
            })
        )
    }
}