class API {
    constructor(defaultPath) {
        this.defaultPath = defaultPath;
        this.path = defaultPath;
    }

    clearPath() {
        this.path = this.defaultPath;
    }

    setPath(path) {
        this.path = path
    }

    defaultPath;
    path;

    save = (object) => {
        if (this.path) {
            return fetch('/api/' + this.path + '/save', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                body: JSON.stringify(object)
            })
                .then(response => {
                    if (response.status === 200) {
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
        return fetch('/api/' + this.path + '/getAll', {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                this.clearPath();
            })
            .catch(error => {
                console.error(error);
                this.clearPath();
            })
    }

    get = (objectId) => {
        return fetch('/api/' + this.path + '/' + objectId, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.status === 200) {
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
        return fetch('/api/' + this.path + '/' + objectId, {
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