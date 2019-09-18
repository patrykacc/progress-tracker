import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Authentication extends React.Component {

    render() {
        return (
            <div className="Authentication">
                {this.state.loginMode ?
                    <SignIn navigate={this.navigate}/> :
                    <SignUp navigate={this.navigate}/>
                }
                {/*<div>
                    <button onClick={this.getAll}>Znajdź wszystkich</button>
                </div>*/}
            </div>
        );
    }


    navigate = path => {
        this.props.push(path);
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
