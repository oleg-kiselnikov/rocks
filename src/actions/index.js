

const cragsRequested = () => {
    return {
        type: 'FETCH_CRAGS_REQUEST'
    }
};

const cragsLoaded = (newCrags) => {
    return {
        type: 'FETCH_CRAGS_SUCCESS',
        payload: newCrags
    }
};

const cragsError = (error) => {
    return {
        type: 'FETCH_CRAGS_FAILURE',
        payload: error
    }
};

const fetchCrags = (service, dispatch) => () => {
    dispatch(cragsRequested());
    service.getCrags()
        .then((data) => dispatch(cragsLoaded(data)))
        .catch((err) => dispatch(cragsError(err)));
}

export {
    fetchCrags
};