const RecordPageAPI = {
    getRecordPage: (objectId) => {
        return fetch('/api/recordPage/id/' + objectId, {
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

            })
            .catch(error => {
                console.error(error);
            })
    },

    getNewRecordPage: (objectType) => {
        return fetch('/api/recordPage/type/' + objectType, {
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

            })
            .catch(error => {
                console.error(error);
            })
    }
};

export default RecordPageAPI;