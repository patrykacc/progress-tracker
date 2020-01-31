import * as React from "react";
import TrainingAPI from "../../../services/trainingAPI";
import {Typography, Table, Button} from "antd";
import NewRecordModal from "../../base/relatedList/NewRecordModal";
import {useHistory} from "react-router";

export default () => {
    const history = useHistory();
    const [showNewTrainingModal, setShowNewTrainingModal] = React.useState(false);
    const [trainings, setTrainings] = React.useState([]);

    const columns = [
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

    React.useEffect(() => {
        TrainingAPI.getAll()
            .then(trainings => {
                if (trainings) {
                    setTrainings(trainings)
                }
            })
    }, []);

    const navigateToTraining = (trainingId) => {
       history.push('/view/' + trainingId);
    };

    const addTraining = (trainingId) => {
        setShowNewTrainingModal(true);
    };

    const closeModal = () => {
        setShowNewTrainingModal(false);
    }

    return (
        <div style={{
            border: '2px solid lightblue',
            borderRadius: '5px',
            background: 'white',
            margin: '10px',
            padding: '15px',
        }}>
            <Typography.Text>Treningi:</Typography.Text>
            <Table
                pagination={false}
                scroll={true}
                onRow={(training, rowIndex) => {
                    return {
                        onClick: event => navigateToTraining(training.id),
                    };
                }}
                rowKey={record => record.id}
                columns={columns}
                dataSource={trainings}
            />
            <NewRecordModal isVisible={showNewTrainingModal} objectApiName={'Training'} closeSelf={closeModal}/>
            <Button onClick={addTraining} type="primary" style={{margin: 16}}>
                Dodaj trening
            </Button>
        </div>
    );


}