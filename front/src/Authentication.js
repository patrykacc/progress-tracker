import React, {Component} from 'react';
import SignIn from "./SignIn";

class Authentication extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginMode: true,
            registerMode: false
        };
    }

    render() {
        return (
            <div className="Authentication">
                <header onClick={this.switchMode}>{this.state.loginMode ? 'Zaloguj się:' : 'Register'}</header>
                <SignIn/>
                <div>
                    <button onClick={this.getAll}>Znajdź wszystkich</button>
                </div>
            </div>
        );
    }

    switchMode= () => {
        this.setState(state => ({
            loginMode: !this.state.loginMode,
            registerMode: !this.state.registerMode
        }));
    }



    getAll = () => {
        fetch('/user/getAll',
            {headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }}
        )
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
    }
}

export default Authentication;
