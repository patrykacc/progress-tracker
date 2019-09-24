import * as React from "react";
import NewTraining from "./NewTraining";

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
            <div>
                <h1>Treningi:</h1>
                <div className="WorkoutsHome">
                    {Array.isArray(this.state.workouts) ?
                        (this.state.workouts.map((workout, i) => (
                            <div key={workout.id}> Trening {i + 1}: Czas
                                trwania: {workout.duration}</div>))) : null}
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