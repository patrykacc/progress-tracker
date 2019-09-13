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
            message: ''
        };
    }

    render() {
        return <div>
            <div>Nazwa: <input onChange={this.handleNameChange}/></div>
            <div>Login: <input onChange={this.handleLoginChange}/></div>
            <div>Hasło: <input onChange={this.handlePasswordChange}/></div>
            <div>Email: <input onChange={this.handleEmailChange}/></div>

            <div>
                <button onClick={this.signUp}>Zarejestruj</button>
            </div>

            {this.state.message ? (<span>  {this.state.message} </span>) : ''}
        </div>;
    }

    handlePasswordChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            password: value
        }));
    };

    handleEmailChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            email: value
        }));
    };

    handleNameChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            name: value
        }));
    };

    handleLoginChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            username: value
        }));
    };

    signUp = () => {
        console.log('signup');
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
                localStorage.setItem('token', json.accessToken);
                this.setState(state => ({
                    message: json.status === 200 ? 'Uzytkownik został zarejestrowany' : 'Bład podczas rejestracji',
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
}

export default SignUp;