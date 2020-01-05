import React, {useEffect} from "react";
import API from "../../../services/API";
import getObjectMetadata from "../../../services/MetadataDescriptorAPI";
import RecordDetailView from "./RecordDetailView";
import RecordDetailEdit from "./RecordDetailEdit";
import {useHistory, useLocation} from "react-router";

export default ({actions = [], objectType, recordId, parentRecord = {}}) => {
    let history = useHistory();
    let location = useLocation();
    const [recordInfo, setRecordInfo] = React.useState();
    const [record, setRecord] = React.useState({...parentRecord});

    const [mode, setMode] = React.useState(recordId ? 'view' : 'create');
    const [relatedLists, setRelatedLists] = React.useState([]);
    const SpecificAPI = React.useRef(new API(objectType));

    useEffect(() => {
        console.log('meta');
        if(objectType) {
            getObjectMetadata(objectType)
                .then(response => {
                    setRecordInfo(response);
                })
        }
    }, [objectType]);

    useEffect(() => {
        let lists = [];
        if (recordInfo && record && record.id) {
            console.log('related')
            recordInfo.fields
                .filter(field => field.type === "LIST")
                .forEach(field => {
                    lists.push({field, records: record[field.apiName]})
                });
            setRelatedLists(lists);
        }
    }, [recordInfo, record]);

    const refresh = React.useCallback((callback) => {
        if (recordId) {
            console.log('API')
            SpecificAPI.current.get(recordId)
                .then(response => {
                    setRecord(response);
                    if (callback) {
                        callback();
                    }
                })
        }
    }, [SpecificAPI, recordId]);


    useEffect(() => {
        console.log('refresh')
        refresh();
    }, [recordId, refresh]);

    const commonProps = {
        SpecificAPI: SpecificAPI.current, recordInfo, actions, setMode, refresh
    }
    debugger;

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