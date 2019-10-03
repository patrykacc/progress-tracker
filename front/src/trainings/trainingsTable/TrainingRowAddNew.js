import * as React from "react";
import {trainingsFetched} from "../../actions";
import {connect} from "react-redux";


class TrainingRowAddNew extends React.Component{

    defaultTraining = {
        startTime: new Date().toISOString().split('T')[0] + 'T08:00',
        duration: 60
    };

    constructor(props) {
        super(props);
        this.state = {
            createTrainingMode: false,
            newTraining: Object.assign({}, this.defaultTraining)
        }
    }

    render() {
        return (
            this.state.createTrainingMode ?
            <tr>
                <td colSpan={2}>Początek <input pattern={'yyyy-MM-ddTHH:mm'} name="startTime" type="datetime-local" onChange={this.handleTrainingInputChange} value={this.state.newTraining.startTime}/></td>
                <td >Długość treningu <input name="duration" type="number" onChange={this.handleTrainingInputChange} value={this.state.newTraining.duration} /></td>
                <td><button onClick={this.saveTraining}>Zapisz</button></td>
            </tr> :
                <tr><td onClick={this.switchToEditMode} colSpan={4}>Dodaj trening</td></tr>
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

    saveTraining = () => {
        fetch('/trainings/save', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(this.state.newTraining)
        })
            .then(response => {
                if (response.status === 201) {
                    this.setState(state => ({
                        createTrainingMode: false
                    }));
                    return response.json();
                }
            })
            .then(json => {
                if (json) {
                    this.setState(state => ({
                        newTraining: Object.assign({}, this.defaultTraining)
                    }));
                    this.props.trainingsFetched([...this.props.trainings, json])
                }

            })
            .catch(error => {
                console.error(error);
            })
    }

    switchToEditMode = () => {
        this.setState(state => ({
            createTrainingMode: true
        }))
    }


}
const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = { trainingsFetched};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingRowAddNew);