import * as React from "react";

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
                {this.state.workouts.map(workout =>(
                    <div key={workout.id}> Workout: {workout.username}</div>
                ))}
            </div>
        );
    }


    navigate = path => {
        this.props.push(path);
    }

    getAll = () => {
        fetch('/training/getAll',
            {headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }}
        )
            .then(res => res.json())
            .then(json => this.setState({workouts: json}))
            .catch(error => console.log(error))
    }
}

export default WorkoutsHome;