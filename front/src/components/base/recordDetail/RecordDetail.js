import React, {useCallback, useEffect} from "react";
import API from "../../../services/API";
import getObjectMetadata from "../../../services/MetadataDescriptorAPI";
import RecordDetailView from "./RecordDetailView";
import RecordDetailEdit from "./RecordDetailEdit";
import {useHistory, useLocation} from "react-router";
import RecordPageAPI from "../../../services/RecordPageAPI";

export default ({actions = [], recordId, parentRecord = {}}) => {
    let history = useHistory();
    let location = useLocation();
    const [recordInfo, setRecordInfo] = React.useState();
    const [record, setRecord] = React.useState({...parentRecord});

    const [mode, setMode] = React.useState(recordId ? 'view' : 'create');
    const [relatedLists, setRelatedLists] = React.useState([]);
    let SpecificAPI = React.useRef();

    useEffect(() => {
        if(recordId) {
            RecordPageAPI.getRecordPage(recordId)
                .then(response => {
                    if(response) {
                        setRecordInfo(response.metaEntity);
                        setRecord(response.record);
                        SpecificAPI.current = new API(response.metaEntity.apiName);
                    }
                })
        }
    }, [recordId, mode]);

    useEffect(() => {
        let lists = [];
        if (record && record.id && recordInfo) {
            console.log('related')
            recordInfo.fields
                .filter(field => field.type === "LIST")
                .forEach(field => {
                    lists.push({field, records: record[field.apiName]})
                });
            setRelatedLists(lists);
        }
    }, [record, recordInfo]);

    const commonProps = {
        SpecificAPI: SpecificAPI.current, recordInfo, actions, setMode
    };

    const render = () => {
        if (mode === 'empty' || mode == null) {
            return null;
        } else if (mode === 'view') {
            return <RecordDetailView record={record} {...commonProps} relatedLists={relatedLists}/>;
        } else if (mode === 'edit') {
            return <RecordDetailEdit recordProp={record} {...commonProps}/>;
        } else if (mode === 'create') {
            return <RecordDetailEdit recordProp={parentRecord || {}} {...commonProps}/>;
        }
    };

    return (
        <React.Fragment>
            {render()}
        </React.Fragment>
    );
}