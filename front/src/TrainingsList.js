import * as React from "react";
import NewTraining from "./NewTraining";
import './WorkoutsHome.css';
import {connect} from "react-redux";
import {trainingsFetched} from "./actions";
import TrainingRow from "./TrainingRow";
import {getAll} from "./services/trainingService";

class TrainingsList extends React.Component {

    constructor(props) {
        super(props);
        getAll();
    }

    render() {
        let rows = [];
        if (Array.isArray(this.props.trainings)) {
            rows = this.props.trainings.map((training, i) => (
                <TrainingRow key={training.id} training={training} index={i}/>
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
}

const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = {trainingsFetched};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingsList);