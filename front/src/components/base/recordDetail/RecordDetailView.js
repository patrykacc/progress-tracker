import React, {Fragment, useEffect} from "react";
import {Col, Descriptions, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../BaseButtonGroup";
import {useDispatch} from "react-redux";
import RelatedList from "../relatedList/RelatedList";

export default ({record, recordInfo, actions = [], SpecificAPI, setMode, relatedLists = []}) => {
    let history = useHistory();
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
                    <Descriptions title={recordInfo.label} bordered>
                        {recordInfo.fields.map(field => {
                            if (field.type === 'ID' || field.type === 'LIST') {
                                return null;
                            }
                            if (field.type === 'REFERENCE') {
                                const fieldValue = record[field.apiName];
                                const value = fieldValue ? fieldValue.name : '';
                                return (<Descriptions.Item key={field.apiName}
                                                           label={field.label}>{value}</Descriptions.Item>)
                            } else {
                                const value = record[field.apiName];
                                return (<Descriptions.Item key={field.apiName}
                                                           label={field.label}>{value}</Descriptions.Item>)
                            }

                        })}
                    </Descriptions>
                    <BaseButtonGroup actions={[
                        {label: 'Usuń', handler: remove},
                        {label: 'Edytuj', handler: edit}
                    ]}/>
                </Col>
            </Row>
            <Row>
                {relatedLists.map(relatedList => {
                    return (<RelatedList key={relatedList.field.apiName} objects={relatedList.records}
                                         field={relatedList.field} history={history}
                                         parentRecord={{[relatedList.field.parentRelationName]: {id:record.id}}}/>
                    )
                })}
            </Row>

        </Fragment>
    )
}