import * as React from "react";


class NewTraining extends React.Component{

    render() {
        return (
            <div>
                Długość treningu<input/>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            newTraining: {}
        }
    }


}

export default NewTraining;