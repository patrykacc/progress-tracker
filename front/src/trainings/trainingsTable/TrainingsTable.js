import * as React from "react";
import NewTraining from "./TrainingRowAddNew";
import '../../WorkoutsHome.css';
import {connect} from "react-redux";
import {trainingsFetched} from "./../../actions";
import TrainingRow from "./TrainingRowView";
import {getAll} from "./../../services/trainingService";

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
                <TrainingRow key={training.id} training={training} index={i} navigateToTraining={this.navigateToTraining}/>
            ))
        }

        return (
            <div className="WorkoutsHome">
                <h1>Treningi:</h1>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Data:</th>
                        <th>Czas trwania</th>
                    </tr>
                    </thead>
                    <tbody className="trainings-table">
                    {rows}
                    <NewTraining/>
                    </tbody>
                </table>
            </div>
        );
    }

    navigateToTraining = (trainingId) => {
        this.props.history.push('/training/' + trainingId);
    }

}

const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = {trainingsFetched};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingsTable);