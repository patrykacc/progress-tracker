import * as React from "react";
import AddNewTrainingButton from "./AddNewTrainingButton";
import '../../WorkoutsHome.css';
import {connect} from "react-redux";
import {trainingsFetched} from "./../../actions";
import TrainingRow from "./TrainingRowView";
import {getAll} from "./../../services/trainingService";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class TrainingsTable extends React.Component {

    constructor(props) {
        super(props);
        getAll()
            .then(res => res.json())
            .then(trainings => {
                this.props.trainingsFetched(trainings)
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

        );
    }

    navigateToTraining = (trainingId) => {
        let path;
        if (trainingId) {
            path = trainingId;
        } else {
            path = 'new';
        }
        this.props.history.push('/training/' + path);
    }

}

const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = {trainingsFetched};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingsTable);