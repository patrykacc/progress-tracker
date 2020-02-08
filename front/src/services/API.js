class API {
    constructor(defaultPath) {
        this.defaultURI = defaultPath;
        this.URI = defaultPath;
    }

    clearPath() {
        this.URI = this.defaultURI;
    }

    setPath(path) {
        this.URI = path
    }

    defaultURI;
    URI;

    save = (object) => {
        if (this.URI) {
            return fetch('/api/' + this.URI + '/' + (object.id || ''), {
                method: object.id ? 'PUT' : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(object)
            })
                .then(response => {
                    if (response.statusText === 'OK' ) {
                        return response.json();
                    }
                    this.clearPath();
                })
                .catch(error => {
                    console.error(error);
                    this.clearPath();
                })
        } else {
            console.error('API PATH not set');
        }
    };

    getAll = () => {
        return fetch('/api/' + this.URI + '/getAll', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.statusText === 'OK') {
                    return response.json();
                }
                this.clearPath();
            })
            .catch(error => {
                console.error(error);
                this.clearPath();
            })
    };

    get = (objectId) => {
        return fetch('/api/' + this.URI + '/' + objectId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                debugger
                if (response.statusText === 'OK') {
                    return response.json()
                }
                this.clearPath();
            })
            .catch(error => {
                console.error(error);
                this.clearPath();
            })
    };

    delete = (objectId) => {
        return fetch('/api/' + this.URI + '/' + objectId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })
            .catch(error => {
                console.error(error);
            })
    }
}

export default API;