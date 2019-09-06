import * as React from "react";
import App from "./App";


class Test extends React.Component {

    componentDidMount() {
        fetch('http://localhost:8080/api/user/getAll').then(r => console.log(r))
    }

    render() {
        return <h1>Cześć, {this.props.name}</h1>;
    }
}

export default Test;
