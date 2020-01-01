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
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%', background: 'white'}}>
            <div>
                <Row type="flex" justify={'space-between'}>
                    <Col>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item onClick={redirect} key="/">Home</Menu.Item>
                            <Menu.Item onClick={redirect} key="/trainings">Treningi</Menu.Item>
                            <Menu.Item onClick={redirect} key="/plans">Plany treningowe</Menu.Item>
                        </Menu>
                    </Col>
                    <Col>
                        <ActiveTrainingPlanView/>
                    </Col>
                </Row>
            </div>

        </Layout.Header>
    );
}

