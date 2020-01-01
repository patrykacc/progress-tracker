import React from 'react';

import {Modal} from "antd";
import RecordDetail from "../recordDetail/RecordDetail";


const RelatedList = ({objectApiName, parentRecord, isVisible}) => {

    const handleOk = () => {
        console.log('handleOk');
    };

    const handleCancel = () => {
        console.log('handleCancel');
    };
    return (
        <React.Fragment>
            <Modal
                title={'Nowy rekord:'}
                visible={isVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <RecordDetail objectType={objectApiName} parentRecord={parentRecord}/>
            </Modal>
        </React.Fragment>
    );
};

export default RelatedList;