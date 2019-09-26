import * as React from "react";


class NewTraining extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            newTraining: {}
        }
    }

    render() {
        return (
            <div>
                <h2>Zapisz nowy trening</h2>
                <div>Długość treningu <input name="duration" type="number" onChange={this.handleTrainingInputChange}/></div>
                <div>Początek <input name="startTime" type="datetime-local" onChange={this.handleTrainingInputChange}/></div>
                <button onClick={this.saveTraining} > Zapisz trening </button>
            </div>
        )
    }

    handleTrainingInputChange = (e) => {
        let newTraining = this.state.newTraining;
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        // if (e.currentTarget.type === 'datetime-local' && value) {
        //     value = value.replace('T', ' ');
        // }
        newTraining[inputName] = value;
        console.log(newTraining)
        this.setState(state => ({
            newTraining: newTraining
        }));
    };

    saveTraining = () => {
        console.log(JSON.stringify(this.state.newTraining))

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
                console.log(response);
                if (response.status === 200) {

                } else {

                }
            })
            .then(json => {
                console.log(json);
            })
            .catch(error => {
                console.log(error);
            })
    }



}

export default NewTraining;