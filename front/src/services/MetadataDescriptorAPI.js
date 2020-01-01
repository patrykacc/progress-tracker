const getObjectMetadata = (objectType) => {
    return fetch('/api/metaDescriptor/' + objectType, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => {
            return res.status === 200 ? res.json() : null
        })
        .catch(error => console.error(error))
};

export default getObjectMetadata;