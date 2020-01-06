import React from "react";
import RecordDetail from "./RecordDetail";

export default ({match}) => {
    const objectType = match.path.split('/')[1];
    const recordId = match.params.id;
    return (
        <RecordDetail objectType={objectType} recordId={recordId} match={match}/>
    );
}