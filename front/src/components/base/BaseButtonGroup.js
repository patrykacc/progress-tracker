import {Button} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import React from "react";

export default ({actions = []}) => {
    return (
        <ButtonGroup style={{marginTop: '10px'}}>
            {actions.map(action => {
                return <Button key={action.label} type={action.type || ''} onClick={action.handler}>{action.label}</Button>
            })}
        </ButtonGroup>
    )
}