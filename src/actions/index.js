

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

const fetchCrags = (service) => () => (dispatch) => {
    dispatch(cragsRequested());
    service.getCrags()
        .then((data) => dispatch(cragsLoaded(data)))
        .catch((err) => dispatch(cragsError(err)));
}

const routesRequested = () => {
    return {
        type: 'FETCH_ROUTES_REQUEST'
    }
};

const routesLoaded = (newRoutes) => {
    return {
        type: 'FETCH_ROUTES_SUCCESS',
        payload: newRoutes
    }
};

const routesError = (error) => {
    return {
        type: 'FETCH_ROUTES_FAILURE',
        payload: error
    }
};

const fetchRoutes = (service) => () => (dispatch) => {    
    dispatch(routesRequested());
    service.getRoutes()
        .then((data) => dispatch(routesLoaded(data)))
        .catch((err) => dispatch(routesError(err)));
}

export {
    fetchCrags,
    fetchRoutes
};