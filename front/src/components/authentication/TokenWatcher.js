import React, {Fragment, useEffect} from "react";
import {useDispatch} from "react-redux";


export default () => {
    const checkTokenValidity = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        fetch('/api/token/check', {
            'method': 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                if (res.status === 'OK') {
                    dispatch({type: 'AUTHORIZATION_SUCCESS'})
                } else {
                    dispatch({type: 'AUTHORIZATION_FAILED'})
                    localStorage.removeItem('token');
                }
            })
            .catch(error => {})
    };
    const dispatch = useDispatch()
    useEffect(() => {
        checkTokenValidity();
    });

    return <Fragment/>
}

