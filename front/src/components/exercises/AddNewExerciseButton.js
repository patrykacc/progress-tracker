import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";

export default function AddNewExerciseButton() {
    const dispatch = useDispatch();
    const training = useSelector(state => state.training);

    let setExerciseViewToCreateMode = () => {
        if (training.id) {
            dispatch({type: 'EXERCISE_VIEW_MODE', mode: 'create'});
            dispatch({type: 'CLEAR_EXERCISE'});
        }
    };
    return (
        <React.Fragment>
            {training.id && <Button onClick={setExerciseViewToCreateMode} type="default" size={"small"}>Dodaj ćwiczenie</Button>}
        </React.Fragment>

    )


}

