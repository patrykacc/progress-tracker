import React, {Component} from 'react';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <div>
                <header><h2>Logowanie:</h2></header>
                <input placeholder="Login" name="username" onChange={this.handleInputChange}/>
                <input placeholder="Hasło" name="password" onChange={this.handleInputChange}/>
                <div><button onClick={this.login}>Zaloguj</button></div>
                <div><button onClick={this.redirectToRegistration}>Zarejestruj się</button></div>
            </div>
        );
    }

    redirectToRegistration = () => {
        this.props.history.push('/signup')
    }

    handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        this.setState(state => ({
            [inputName]: value
        }));
    };

    login = () => {
        fetch('/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usernameOrEmail: this.state.username, password: this.state.password})
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                localStorage.setItem('token', json.accessToken);
                this.props.history.push('/workouts')
            })
            .catch(error => console.log(error))
    }
}

export default SignIn;
