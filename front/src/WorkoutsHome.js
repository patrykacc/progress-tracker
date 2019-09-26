import * as React from "react";
import NewTraining from "./NewTraining";
import './WorkoutsHome.css';

class WorkoutsHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workouts: []
        };
        this.getAll();

    }

    render() {
        return (
            <div className="WorkoutsHome">
                <h1>Treningi:</h1>
                <div className="WorkoutsHome">
                    {Array.isArray(this.state.workouts) ?
                        (this.state.workouts.map((workout, i) => (
                            <div className="trainingTile" key={workout.id}>
                                <div>Trening {i + 1}:</div>
                                <div style={{marginLeft:10 +'px'}}>Rozpoczęcie: <input readOnly type="datetime-local" value={workout.startTime}/></div>
                                <div style={{marginLeft:10 +'px'}}>Czas trwania: {workout.duration} minut</div>
                            </div>))) :
                        null}
                </div>
                <NewTraining/>
            </div>
        );
    }


    navigate = path => {
        this.props.push(path);
    }

    getAll = () => {
        fetch('/trainings/getAll',
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({workouts: json})
            })
            .catch(error => console.log(error))
    }
}

export default WorkoutsHome;