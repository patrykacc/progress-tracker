/*
export function login(username, password, props) {
    fetch('/auth/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usernameOrEmail: username, password: password})
    })
        .then(response => {
            if (response.status === 200) {
                props.authorizationSuccess();
                return response.json();
            } else {
                props.authorizationFailed()
            }
        })
        .then(json => {
            if (json) {
                localStorage.setItem('token', json.accessToken);
            }
        })
        .catch(error => {
            console.error(error);
            props.authorizationFailed()
        })
}*/
