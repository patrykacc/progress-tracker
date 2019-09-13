import React, {Component} from 'react';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return <>
            <input placeholder={"Login"} onChange={this.handleLoginChange}/>
            <input placeholder={"Hasło"} onChange={this.handlePasswordChange}/>
            <div>
                <button onClick={this.login}>Zaloguj</button>
            </div>

        </>;
    }



    handlePasswordChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            password: value
        }));
    };

    handleLoginChange = (e) => {
        let value = e.currentTarget.value;
        this.setState(state => ({
            username: value
        }));
    };

    login = () => {
        console.log('login');
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
            })
            .catch(error => console.log(error))
    }
}

export default SignIn;
