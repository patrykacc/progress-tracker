import {Descriptions} from "antd";
import React from "react";
import {useHistory} from "react-router-dom";

export default ({recordInfo, record}) => {
    let history = useHistory();

    const redirectToReference = (event) => {
        const {id} = event.currentTarget.dataset;
        history.push('/view/' + id);
    };

    if (!(recordInfo || record)) {
        return null;
    }
    return (
        <Descriptions title={recordInfo.label} bordered>
            {recordInfo.fields.map(field => {
                if (field.type === 'ID' || field.type === 'LIST' || field.apiName === 'relatedListFields') {
                    return null;
                }
                if (field.type === 'REFERENCE') {
                    const referencedObject = record[field.apiName];
                    const name = referencedObject ? referencedObject.id : '';
                    const id = referencedObject ? referencedObject.id : '';
                    return (
                            <Descriptions.Item key={field.apiName}
                                               label={field.label}>
                                <div onClick={redirectToReference} data-id={id}>{name}</div>
                            </Descriptions.Item>
                    )
                } else {
                    const value = record[field.apiName];
                    return (<Descriptions.Item key={field.apiName}
                                               label={field.label}>{value}</Descriptions.Item>)
                }

            })}
        </Descriptions>
    )
}