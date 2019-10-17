import React, {Component, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {authorizationFailed, authorizationSuccess} from "../../actions";
import {Redirect} from "react-router-dom";

export default (props) => {
        const initialState = {
            username: '',
            password: '',
            isAuthorized: props.isAuthorized
        };
    const [state, setState] = useState(initialState);
    const isAuthorized = useSelector(state => state.isAuthorized);
    const dispatch = useDispatch();
    const redirectToRegistration = () => {
        props.history.push('/signup')
    }

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        state[inputName] = value;
        setState({...state});
    };

    const login = () => {
        fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usernameOrEmail: state.username, password: state.password})
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    dispatch(authorizationFailed)
                }
            })
            .then(json => {
                localStorage.setItem('token', json.accessToken);
                dispatch(authorizationSuccess);
            })
            .catch(error => {
                dispatch(authorizationFailed)
            })
    };

        const from = props.location.state || { from: { pathname: '/' } };
        if (isAuthorized === true && from) {
            return <Redirect to={from} />
        }

        return (
            <div>
                <header><h2>Logowanie:</h2></header>
                <input placeholder="Login" name="username" onChange={handleInputChange}/>
                <input placeholder="Hasło" name="password" onChange={handleInputChange}/>
                <div>
                    <button onClick={login}>Zaloguj</button>
                </div>
                <div>
                    <button onClick={redirectToRegistration}>Zarejestruj się</button>
                </div>
            </div>
        );
}
