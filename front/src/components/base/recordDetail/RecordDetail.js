import React, {useEffect} from "react";
import API from "../../../services/API";
import getObjectMetadata from "../../../services/MetadataDescriptorAPI";
import RecordDetailView from "./RecordDetailView";
import RecordDetailEdit from "./RecordDetailEdit";

export default ({actions = [], match}) => {
    /*let history = useHistory();
    let location = useLocation();*/
    const [recordInfo, setRecordInfo] = React.useState();
    const [record, setRecord] = React.useState();
    /* to be extracted */
    const objectType = match.path.split('/')[1];
    const recordId = match.params.id;
    /* to be extracted */
    console.log(recordId)
    console.log(objectType)
    const [mode, setMode] = React.useState(recordId ? 'view' : 'create');
    const SpecificAPI = React.useRef(new API(objectType));

    useEffect(() => {
        getObjectMetadata(objectType)
            .then(response => {
                setRecordInfo(response);
            })
    }, [objectType]);

    const refresh = React.useCallback((callback) => {
        if (recordId) {
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
        refresh();
    }, [recordId, refresh]);

    const commonProps = {
        SpecificAPI: SpecificAPI.current, recordInfo, actions, setMode, refresh
    }

    const render = () => {
        if (mode === 'empty' || mode == null) {
            return null;
        } else if (mode === 'view') {
            return <RecordDetailView record={record} {...commonProps}/>;
        } else if (mode === 'edit') {
            return <RecordDetailEdit recordProp={record} {...commonProps}/>;
        } else if (mode === 'create') {
            return <RecordDetailEdit {...commonProps}/>;
        }
    };

    return (
        <React.Fragment>
            {render()}
        </React.Fragment>
    );
}