import React from 'react';
import BaseList from "../BaseList";
import BaseButtonGroup from "../BaseButtonGroup";
import NewRecordModal from "./NewRecordModal";


const RelatedList = ({objects, field, history, parentRecord}) => {
    const {label, childrenApiName} = {...field};
    const [isVisible, setIsVisible] = React.useState(false);
    const addNewRecord = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
    }
    const handleRowClick = (record) => {
        history.push('/' + childrenApiName + '/' + record.id);
    };
    return (
        <>
            <NewRecordModal objectApiName={childrenApiName} parentRecord={parentRecord} isVisible={isVisible} closeSelf={closeModal}/>
            <BaseButtonGroup actions={[
                {label: 'Dodaj', handler: addNewRecord},
            ]}/>
            <BaseList title={label} objects={objects} rowClick={handleRowClick}/>
        </>
    );
};

export default RelatedList;