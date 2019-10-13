import {Container, makeStyles, Paper} from "@material-ui/core";
import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
        box: {
        height: '70%',
    },
    paper: {
        overflowX: "auto",
        height: '100%'
    },
    text: {
        width: '50%'
    },
}));

export default (props) => {
    const exercise = useSelector(state => state.exercise)
    const dispatch = useDispatch(state => state.exercise)
    const initialMode = !exercise ? 'empty' : Number.isInteger(exercise.id) ? 'view' : 'create';
    const [mode, setMode] = useState(initialMode);
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Container>
                <Box alignItems="center" justifyContent="center" display="flex" className={classes.box} color="text.secondary">
                    <Typography className={classes.text} variant={'h6'} >Wybierz ćwiczenie aby zobaczyć szczegóły</Typography>
                    xxx {initialMode}
                </Box>
            </Container>
        </Paper>
    )
}