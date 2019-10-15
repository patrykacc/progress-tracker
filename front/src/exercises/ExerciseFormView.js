import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default ({exercise}) => {
    const classes = useStyles();
    return (
        <form autoComplete="off">
            <Typography variant={"h4"}>{exercise.name}</Typography>
            <TextField disabled label="Serie:" margin="normal" type="number"
                       value={exercise.series} name="series" className={classes.textField}/>
            <TextField disabled label="Powtórzenia:" margin="normal" type="number"
                       value={exercise.repetitions} name="repetitions" className={classes.textField}/>
            <TextField disabled label="Obciążenie:" margin="normal" type="number"
                       value={exercise.weight} name="weight" className={classes.textField}/>
        </form>
    )
}