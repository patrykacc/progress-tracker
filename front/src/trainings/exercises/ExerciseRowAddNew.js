import * as React from "react";
import {connect} from "react-redux";
import {getByIdWithExercises} from "../../services/trainingService";
import {store} from "../../store";
import selectedTraining from "../../reducers/selectedTraining";

class ExerciseRowAddNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createExerciseMode: false,
            newExercise: {
                name: '',
                series: '',
                repetitions: '',
                weight: '',
                training: {
                    id: props.trainingId
                }
            }
        }
    }

    render() {
        return (
            this.state.createExerciseMode ?
            <tr>
                <td><input onChange={this.handleExerciseInputChange} type="text" name="name" value={this.state.newExercise.name}/></td>
                <td><input onChange={this.handleExerciseInputChange} type="number" name="series" value={this.state.newExercise.series}/></td>
                <td><input onChange={this.handleExerciseInputChange} type="number" name="repetitions" value={this.state.newExercise.repetitions}/></td>
                <td><input onChange={this.handleExerciseInputChange} type="number" name="weight" value={this.state.newExercise.weight}/></td>
                <td><button onClick={this.saveExercise}>Zapisz</button></td>
            </tr> :
                <tr><td onClick={this.switchToEditMode} colSpan={4}>Dodaj ćwiczenie</td></tr>
        )
    }

    saveExercise = () => {
        let newExercise = this.state.newExercise;
        newExercise.training.id = this.props.trainingId
        fetch('/exercises/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(newExercise)
        })
            .then(response => {
                if (response.status === 200 ) {
                    this.setState(state => ({
                        createExerciseMode: false
                    }));
                    return response.json();
                }
            })
            .then(json => {
                if (json) {
                    getByIdWithExercises(this.props.trainingId)
                        .then(res => {
                            return res.json()
                        })
                        .then(training => {
                            store.dispatch({type: "TRAINING_FETCHED", training: training});
                            console.log(training)
                        })
                }

            })
            .catch(error => {
                console.error(error);
            })
    }

    switchToEditMode = () => {
        this.setState(state => ({
            createExerciseMode: true
        }))
    }

    handleExerciseInputChange = (e) => {
        let newExercise = this.state.newExercise;
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        newExercise[inputName] = value;
        this.setState(state => ({
            newExercise: newExercise
        }));
    };
}

const mapStateToProps = (state) => {
    return {training: state.selectedTraining};
};
const mapDispatchToProps = {selectedTraining};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseRowAddNew);
