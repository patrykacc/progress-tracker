import React, {useEffect} from 'react';

import {Modal} from "antd";
import RecordDetailEditForm from "../recordDetail/RecordDetailEditForm";
import getObjectMetadata from "../../../services/MetadataDescriptorAPI";
import API from "../../../services/API";
import {useHistory} from "react-router";


const RelatedList = ({objectApiName, parentRecord, isVisible, closeSelf}) => {
    const history = useHistory();
    const [newRecord, setNewRecord] = React.useState({...parentRecord});
    const [recordInfo, setRecordInfo] = React.useState();
    const SpecificAPI = new API(objectApiName);

    const handleChange = (event) => {
        let value = event.currentTarget.value;
        let inputName = event.currentTarget.name;
        newRecord[inputName] = value;
        setNewRecord({...newRecord});
    };


    const handleOk = () => {
        debugger
        SpecificAPI.save(newRecord)
            .then(response => {
                if (response) {
                    history.push('/' + SpecificAPI.URI + '/' + response.id);
                }
            })
    };

    useEffect(() => {
        if(objectApiName) {
            getObjectMetadata(objectApiName)
                .then(response => {
                    setRecordInfo(response);
                })
        }
    }, [objectApiName]);

    const handleCancel = () => {
        closeSelf();
    };

    let props = {recordInfo, record: newRecord, handleChange};

    return (
        <React.Fragment>
            <Modal
                title={'Nowy rekord:'}
                visible={isVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <RecordDetailEditForm {...props}/>
            </Modal>
        </React.Fragment>
    );
};

export default RelatedList;