import React from 'react';
import './App.css';
import {authorizationFailed, authorizationSuccess} from "./actions";
import {connect} from "react-redux";
import Header from "./layouts/header/Header";
import Body from "./layouts/header/Body";


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Header isAuthorized={this.props.isAuthorized}/>
                <Body/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isAuthorized: state.isAuthorized};
};
const mapDispatchToProps = {authorizationSuccess, authorizationFailed};

export default connect(mapStateToProps, mapDispatchToProps)(App);

