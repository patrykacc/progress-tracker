import * as React from "react";
import {useDispatch} from "react-redux";
import {Table} from "antd";
import AddNewExerciseButton from "./AddNewExerciseButton";


export default ({exercises, ableToAddExercise, reloadExercises}) => {
    const dispatch = useDispatch();
    const setExerciseInStore = (exercise) => {
        dispatch({type: 'EXERCISE_SELECTED', exercise});
        dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'view'});
    };

    const columns = [
        {
            title: 'Cwiczenie',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Serii',
            dataIndex: 'series',
            key: 'series',
        },
        {
            title: 'Powtórzeń',
            dataIndex: 'repetitions',
            key: 'repetitions',
        },
        {
            title: 'Obciążenie',
            dataIndex: 'weight',
            key: 'weight',
        }
    ];
    return (
        <div>
            <Table
                locale={{emptyText: ' '}}
                stickyHeader={true}
                pagination={false}
                onRow={(exercise, rowIndex) => {
                    return {
                        onClick: event => setExerciseInStore(exercise), // click row
                    };
                }}
                rowKey={record => record.id}
                columns={columns}
                dataSource={exercises}
            />
            {ableToAddExercise && <AddNewExerciseButton/>}
        </div>

    )
}
