import React from "react";
import {message} from "antd";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
            email: '',
            name: '',
            message: '',
        };
    }

    render() {
        return (

        <div>
            <header><h2>Rejestracja nowego użytkownika:</h2></header>
            <div>Nazwa: <input name="name" onChange={this.handleInputChange}/></div>
            <div>Login: <input name="username" onChange={this.handleInputChange}/></div>
            <div>Hasło: <input name="password" onChange={this.handleInputChange}/></div>
            <div>Email: <input name="email" onChange={this.handleInputChange}/></div>

            <div>
                <button onClick={this.signUp}>Zarejestruj</button>
            </div>
            <div>
                <button onClick={this.redirectToLogin}>Wróć do logowania</button>
            </div>

            {this.state.message ? (<h1>  {this.state.message} </h1>) : ''}
        </div>
        );
    }

    handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        this.setState(state => ({
            [inputName]: value
        }));
    };

    signUp = () => {
        fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState(state => ({
                    message: json.message ? json.message : 'Bład podczas rejestracji',
                    password: '',
                    username: '',
                    email: '',
                    name: ''
                }))
            })
            .catch(error => {
                console.log(error);
                this.setState(state => ({
                    message: 'Bład podczas rejestracji',
                }))
            })
    }

    redirectToLogin = () => {
        this.props.history.push('/signin')
    }

}

export default SignUp;