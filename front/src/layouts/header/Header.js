import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useDispatch} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const dispatch = useDispatch();

    const classes = useStyles();
    const openNavigation = () => {
        dispatch({type: "SIDEBAR_OPEN", open: true})
    }
    return (
        <div>
            <AppBar position="fixed" style={{
                position: 'static',
                top: 0,
                overflow: 'hidden',
                paddingLeft:0
            }}>
                <Toolbar variant={"dense"} >
                    <IconButton onClick={openNavigation} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography  variant="h5" className={classes.title}>
                        Progress Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

