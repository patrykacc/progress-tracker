import * as React from "react";
import {connect} from "react-redux";
import {getByIdWithExercises} from "../../services/trainingService";
import {store} from "../../store";
import selectedTraining from "../../reducers/selectedTraining";
import ExerciseRowView from "../exercises/ExerciseRowView";
import ExerciseRowAddNew from "../exercises/ExerciseRowAddNew";


class TrainingDetails extends React.Component {

    constructor(props) {
        super(props);
        getByIdWithExercises(this.props.match.params.id)
            .then(res => {
                return res.json()
            })
            .then(training => {
                store.dispatch({type: "TRAINING_FETCHED", training: training});
                console.log(training)
            })
    }

    render() {
        let exercises = [];
        if (Array.isArray(this.props.training.exercises)) {
            exercises = this.props.training.exercises.map(exercise => {
                return <ExerciseRowView key={exercise.id} exercise={exercise}/>
            })
        }
        return (
            <div className="Training">
                <h2>Trening:</h2>
                <div>Z dnia: <input readOnly type="datetime-local"
                                    value={this.props.training.startTime ? this.props.training.startTime : ''}/></div>
                <div>Czas trwania: {this.props.training.duration} minut</div>
                <h3>Cwiczenia:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nazwa ćwiczenia</th>
                            <th>Ilość serii</th>
                            <th>Ilość powtórzeń na serię</th>
                            <th>Obciążenie</th>
                        </tr>
                    </thead>
                    <tbody>
                    {exercises}
                    <ExerciseRowAddNew trainingId={this.props.training.id}/>
                    </tbody>
                </table>
            </div>
        )
    }

    handleTrainingInputChange = (e) => {
        let newTraining = this.state.newTraining;
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        newTraining[inputName] = value;
        this.setState(state => ({
            newTraining: newTraining
        }));
    };
}

const mapStateToProps = (state) => {
    return {training: state.selectedTraining};
};
const mapDispatchToProps = {selectedTraining};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingDetails);