import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Progress Tracker
                        {props.isAuthorized && (
                            <div style={{float: "right"}}>
                                <IconButton color="inherit">
                                    <AccountCircle/>
                                </IconButton>
                            </div>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
            ARE YOU AUTHORIZED? {props.isAuthorized ? 'SURE!' : 'NAH, not yet'}
        </div>
    );
}