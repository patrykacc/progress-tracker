import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
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
            <AppBar position="fixed" style={{
                position: 'static',
                top: 0,
                overflow: 'hidden',
                paddingLeft:0
            }}>
                <Toolbar variant={"dense"} >
                    <Typography variant="h5" className={classes.title}>
                        Progress Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}