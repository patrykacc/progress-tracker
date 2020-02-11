import React, {useEffect} from "react";
import {Col, Row, Typography} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getActiveTrainingPlanAction} from "../../redux/actions/trainingPlanActions";
import {Button} from "antd";
import {useHistory} from 'react-router-dom'


export default function ActiveTrainingPlanView() {
    let history = useHistory()
    const activeTrainingPlan = useSelector(state => state.activeTrainingPlan);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActiveTrainingPlanAction())
    }, [dispatch]);

    return (
        <div>
            <Row type="flex" justify={'space-between'}>
                <Col>
                    <Typography.Text variant={"subtitle2"}>Aktywny plan treningowy:</Typography.Text>
                    <Typography.Text variant={"subtitle1"} style={{marginLeft: '10px'}}>
                        {activeTrainingPlan ? activeTrainingPlan.name : 'Brak aktywnego planu - atywuj jeden z istniejących lub utwórz nowy'}
                    </Typography.Text>
                </Col>
            </Row>
        </div>
    )
}