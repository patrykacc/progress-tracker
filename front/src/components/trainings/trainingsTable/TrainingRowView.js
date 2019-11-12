import * as React from "react";
import TrainingAPI from "../../../services/trainingAPI";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "@material-ui/core";
import {useDispatch} from "react-redux";


export default ({index, training, ...props}) => {
    const dispatch = useDispatch();
    const removeTraining = (event, trainingId) => {
        event.stopPropagation();
        TrainingAPI.delete(trainingId)
            .then(response => {
                if (response.status === 200) {
                    TrainingAPI.getAll()
                        .then(trainings => {
                            if (trainings) {
                                dispatch({type: "TRAININGS_FETCHED", trainings: trainings});
                            }
                        })
                }
            })
    };

    const navigateToTraining = (event, trainingId) => {
        props.navigateToTraining(training.id)
    };
    const buttonStyle = {cursor: "pointer"};
    return (
            <TableRow key={training.id}>
                <TableCell component={"th"} scope="row"><Link onClick={navigateToTraining}>Trening {index}</Link></TableCell>
                <TableCell align="right">{training.startDate}</TableCell>
                <TableCell align="right">{training.volume}</TableCell>
                <TableCell align="right">
                    <IconButton onClick={(event) => removeTraining(event, training.id)} style={buttonStyle}>
                        <DeleteIcon fontSize="small" color={"secondary"}/>
                    </IconButton>
                </TableCell>
            </TableRow>
    )
}



