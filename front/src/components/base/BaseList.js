import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


export const BaseList = ({objects}) => {

    const rows = !objects ? [] : objects.map(object => {
        return (
            <ListItem key={object.id}>
                <ListItemText primary={object.name}/>
            </ListItem>
        )
    });
    return (
        <List>
            {rows}
        </List>
    )
}