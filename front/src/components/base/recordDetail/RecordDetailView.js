import React, {Fragment, useEffect} from "react";
import {Col, Descriptions, Divider, Row} from "antd";
import {useHistory} from 'react-router-dom'
import BaseButtonGroup from "../BaseButtonGroup";
import {useDispatch} from "react-redux";
import RelatedList from "../relatedList/RelatedList";
import RecordDetailViewForm from "./RecordDetailViewForm";

export default ({record, recordInfo, SpecificAPI, setMode, relatedLists = []}) => {
    let history = useHistory();

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
    const props = {recordInfo, record};

    return (
        <Fragment>
            <Row type={'flex'} justify={'center'} >
                <RecordDetailViewForm {...props}/>

            </Row>
            <Row type={'flex'} justify={'center'} >
                <BaseButtonGroup actions={[
                    {label: 'Usuń', handler: remove},
                    {label: 'Edytuj', handler: edit}
                ]}/>
            </Row>
            <Divider />
            <Row type={'flex'} justify={'center'}>
                {relatedLists.map(relatedList => {
                    return (<Col key={relatedList.field.apiName} >
                        <RelatedList objects={relatedList.records}
                                     field={relatedList.field}
                                     history={history}
                                     parentRecord={{[relatedList.field.parentRelationName]: record.links[0].href}}/>
                    </Col>)
                })}
            </Row>

        </Fragment>
    )
}