import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
export default ({handleChange, exercise}) => {
    const classes = useStyles();
    return (
        <form noValidate autoComplete="off">
            <TextField label="Cwiczenie:" margin="normal" type="text"
                       value={exercise.name} onChange={handleChange} variant={"filled"}
                       name="name" className={classes.textField}/>
            <TextField label="Serie:" margin="normal" type="number"
                       value={exercise.series} onChange={handleChange} variant={"filled"}
                       name="series" className={classes.textField}/>
            <TextField label="Powtórzenia:" margin="normal" type="number"
                       value={exercise.repetitions} onChange={handleChange} variant={"filled"}
                       name="repetitions" className={classes.textField}/>
            <TextField label="Obciążenie:" margin="normal" type="number"
                       value={exercise.weight} onChange={handleChange} variant={"filled"}
                       name="weight" className={classes.textField}/>
        </form>
    )
}