import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getActiveTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    button: {margin: "5px"},
    paper: {padding: '5px'}
}));
export default function ActiveTrainingPlanView(props) {
    const classes = useStyles();
    const activeTrainingPlan = useSelector(state => state.activeTrainingPlan);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActiveTrainingPlanAction())
    }, [dispatch]);

    const change = () => {
        props.history.push('/plans')
    }

    return (
        <Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
                <Typography variant={"subtitle2"}>Aktywny plan treningowy:</Typography>
                <Typography variant={"subtitle1"}>
                    {activeTrainingPlan ? activeTrainingPlan.name : 'Brak aktywnego planu - atywuj jeden z istniejących lub utwórz nowy'}
                </Typography>
                <Button className={classes.button} variant={"contained"} size={"small"} onClick={change}
                        color={"primary"}>Zmień</Button>
            </Paper>
        </Grid>
    )
}