import React, {useEffect} from 'react';

import {Modal} from "antd";
import RecordDetailEditForm from "../recordDetail/RecordDetailEditForm";
import API from "../../../services/API";
import {useHistory} from "react-router";
import RecordPageAPI from "../../../services/RecordPageAPI";


const NewRecordModal = ({objectApiName, parentRecord, isVisible, closeSelf}) => {
    const history = useHistory();
    const [newRecord, setNewRecord] = React.useState({...parentRecord, id: null});
    const [recordInfo, setRecordInfo] = React.useState();
    let SpecificAPI = React.useRef();

    const handleChange = (event) => {
        let value = event.currentTarget.value;
        let inputName = event.currentTarget.name;
        newRecord[inputName] = value;
        setNewRecord({...newRecord});
    };


    const handleOk = () => {
        SpecificAPI.current.save(newRecord)
            .then(response => {
                if (response) {
                    history.push('/view/' + response.id);
                }
            })
    };

    useEffect(() => {
        if(objectApiName) {
            RecordPageAPI.getNewRecordPage(objectApiName)
                .then(response => {
                    if (response) {
                        setRecordInfo(response.metaEntity);
                        SpecificAPI.current = new API(objectApiName);
                    }
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

export default NewRecordModal;