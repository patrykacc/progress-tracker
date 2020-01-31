import React from "react";
import RecordDetail from "./RecordDetail";

export default ({match}) => {
    const recordId = match.params.id;
    return (
        <RecordDetail recordId={recordId} match={match}/>
    );
}