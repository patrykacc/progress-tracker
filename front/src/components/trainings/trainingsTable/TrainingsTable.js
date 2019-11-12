import * as React from "react";
import AddNewTrainingButton from "./AddNewTrainingButton";
import {connect} from "react-redux";
import TrainingRow from "./TrainingRowView";
import TrainingAPI from "../../../services/trainingAPI";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {trainingsFetched} from "../../../redux/actions/trainingActions";
import {store} from './../../../store';

class TrainingsTable extends React.Component {

    constructor(props) {
        super(props);
        TrainingAPI.getAll()
            .then(trainings => {
                if (trainings) {
                    this.props.trainingsFetched(trainings)
                }
            })
    }

    render() {
        let rows = [];
        if (Array.isArray(this.props.trainings)) {
            rows = this.props.trainings.map((training, i) => (
                <TrainingRow key={training.id} training={training} index={i}
                             navigateToTraining={this.navigateToTraining}/>
            ))
        }

        return (
            <Grid item xs={12} md={6} lg={6} >
                <Paper>
                    <Typography variant="h5" component="h3">Treningi:</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="right">Data:</TableCell>
                                <TableCell align="right">Objętość:</TableCell>
                                <TableCell align="right"/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                            <AddNewTrainingButton navigateToTraining={this.navigateToTraining}/>
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        );
    }

    navigateToTraining = (trainingId) => {
        if (!trainingId) {
            store.dispatch({type: 'CLEAR_TRAINING'});
        }
        this.props.history.push('/training/' + (trainingId || ''));
    }

}

const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = {trainingsFetched};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingsTable);