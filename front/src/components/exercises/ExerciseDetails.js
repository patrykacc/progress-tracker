import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import ExerciseFormEdit from "./ExerciseFormEdit";
import ExerciseFormView from "./ExerciseFormView";

export default () => {
    const dispatch = useDispatch(state => state.exercise);
    const exercise = useSelector(state => state.exercise);
    const mode = useSelector(state => state.exerciseView.mode);

    const renderEmptyTip = () => {
        return (
                <div>Wybierz ćwiczenie aby zobaczyć szczegóły</div>
        )
    };

    const setExerciseInStore = (exercise) => {
        dispatch({type: 'EXERCISE_SELECTED', exercise});
    };

    const handleInputChange = (e) => {
        let value = e.currentTarget.value;
        let inputName = e.currentTarget.name;
        exercise[inputName] = value;
        setExerciseInStore(exercise);
    };




    const renderExerciseDetail = () => {
        return (
            <Fragment>
                {mode === 'view' ?
                    <div>
                        <ExerciseFormView exercise={exercise}/>
                    </div>
                    : <div>
                        <ExerciseFormEdit handleChange={handleInputChange} exercise={exercise}/>
                    </div>
                }
            </Fragment>
        )
    };
    return (
        <div>
            {mode === 'empty' && renderEmptyTip()}
            {(mode === 'view' || mode === 'create' || mode === 'edit') && renderExerciseDetail()}
        </div>
    )
}