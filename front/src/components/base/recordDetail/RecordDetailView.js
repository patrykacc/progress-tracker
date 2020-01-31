import React, {Fragment, useEffect} from "react";
import {Col, Descriptions, Row} from "antd";
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
            <Row type={'flex'} justify={'space-between'}>
                <Col>
                    <RecordDetailViewForm {...props} />
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
                                         parentRecord={{[relatedList.field.parentRelationName]: record.links[0].href}}/>
                    )
                })}
            </Row>

        </Fragment>
    )
}