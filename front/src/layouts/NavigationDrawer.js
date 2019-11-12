import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    list: {
        width: '250px',
    },
});

const NavigationDrawer = (props) => {
    const classes = useStyles();
    const sideBar = useSelector(state => state.sideBar);
    const dispatch = useDispatch();
    let history = useHistory()

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        dispatch({type: "SIDEBAR_OPEN", open: open})
    };

    const redirect = event => {
        history.push(event.currentTarget.id);
    };

    return (
        <div>
            <Drawer open={sideBar} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list} role="presentation" onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}>
                    <List>
                        <ListItem id={'/'} onClick={redirect}>
                            <ListItemText primary={"Home"}/>
                        </ListItem>
                        <ListItem id={'/plans'} onClick={redirect}>
                            <ListItemText primary={"Plany treningowe"}/>
                        </ListItem>
                        <ListItem id={'/'} onClick={redirect}>
                            <ListItemText primary={"Treningi"}/>
                        </ListItem>
                    </List>
                    <Divider/>
                </div>
            </Drawer>
        </div>
    );
};

export default NavigationDrawer;