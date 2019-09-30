import React, {Component} from 'react';
import {connect} from "react-redux";
import {authorizationFailed, authorizationSuccess} from "./actions";
import {Redirect} from "react-router-dom";

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isAuthorized: props.isAuthorized
        };
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.isAuthorized === true) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <header><h2>Logowanie:</h2></header>
                <input placeholder="Login" name="username" onChange={this.handleInputChange}/>
                <input placeholder="Hasło" name="password" onChange={this.handleInputChange}/>
                <div>
                    <button onClick={this.login}>Zaloguj</button>
                </div>
                <div>
                    <button onClick={this.redirectToRegistration}>Zarejestruj się</button>
                </div>
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
            .then(response => {
                if (response.status === 200) {
                    this.props.authorizationSuccess();
                    return response.json();
                } else {
                    this.props.authorizationFailed()
                }
            })
            .then(json => {
                localStorage.setItem('token', json.accessToken);
            })
            .catch(error => {
                console.error(error);
                this.props.authorizationFailed()
            })
    }
}

const mapStateToProps = (state) => {
    return {isAuthorized: state.isAuthorized};
};
const mapDispatchToProps = {authorizationSuccess, authorizationFailed};

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
