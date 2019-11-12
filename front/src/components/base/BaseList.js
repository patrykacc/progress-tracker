import React, {Fragment} from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Divider, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    list: {
        width: '100%',
    }
}))

const BaseList = ({objects, title, rowClick, fields = ['name']}) => {
    const classes = useStyles();

    const rows = !objects ? [] : objects.map(object => {
        return (
            <Fragment key={object.name + object.id}>
                <ListItem onClick={() => rowClick(object)} button >
                    {fields.map( field =>
                        <ListItemText  primary={object[field]}/>
                    )}
                </ListItem>
                <Divider/>
            </Fragment>
        )
    });
    return (
        <List className={classes.list}>
            <Typography variant={"h6"}>{title}</Typography>
            <Divider/>
            {rows}
        </List>
    )
};

export default BaseList;