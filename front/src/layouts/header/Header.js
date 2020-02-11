import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import {useHistory} from 'react-router-dom'
import ActiveTrainingPlanView from "../../components/trainingPlan/ActiveTrainingPlanView";

export default () => {
    let history = useHistory();

    const redirect = event => {
        history.push(event.key);
    };

    return (
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%', background: 'white', padding: 0}}>
            <div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item onClick={redirect} key="/">Home</Menu.Item>
                    <Menu.Item onClick={redirect} key="/Trainings">Treningi</Menu.Item>
                    <Menu.Item onClick={redirect} key="/Plans">Plany treningowe</Menu.Item>
                </Menu>
            </div>
        </Layout.Header>
    );
}

