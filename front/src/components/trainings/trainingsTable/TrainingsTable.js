import * as React from "react";
import {connect} from "react-redux";
import TrainingAPI from "../../../services/trainingAPI";
import {Typography, Table, Button} from "antd";
import {trainingsFetched} from "../../../redux/actions/trainingActions";
import {store} from './../../../store';

class TrainingsTable extends React.Component {

    columns = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Data',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Objetość',
            dataIndex: 'volume',
            key: 'volume',
        }
    ];

    constructor(props) {
        super(props);
        TrainingAPI.getAll()
            .then(trainings => {
                if (trainings) {
                    this.props.trainingsFetched(trainings)
                }
            })
    }

    render() {
        return (
            <div>
                <Typography.Text>Treningi:</Typography.Text>
                <Table
                    pagination={false}
                    scroll={true}
                    onRow={(training, rowIndex) => {
                        return {
                            onClick: event => this.navigateToTraining(training.id), // click row
                        };
                    }}
                    rowKey={record => record.id}
                    columns={this.columns}
                    dataSource={this.props.trainings}
                />
                <Button onClick={() => this.navigateToTraining(null)} type="primary" style={{ marginBottom: 16 }}>
                    Dodaj trening
                </Button>
            </div>
        );
    }

    navigateToTraining = (trainingId) => {
        if (!trainingId) {
            store.dispatch({type: 'CLEAR_TRAINING'});
        }
        this.props.history.push('/training/' + (trainingId || ''));
    }

}

const mapStateToProps = (state) => {
    return {trainings: state.trainings};
};
const mapDispatchToProps = {trainingsFetched};
export default connect(mapStateToProps, mapDispatchToProps)(TrainingsTable);