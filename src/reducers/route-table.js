const updateRouteTable = (state, action) => {

    if (state === undefined) {
        return {
            routes: [],
            loading: true,
            error: null
        };
    }

    switch(action.type) {
        case 'FETCH_ROUTES_REQUEST':
            return {
                routes: [],
                loading: true,
                error: null
            };
        case 'FETCH_ROUTES_SUCCESS':
            return {
                routes: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_ROUTES_FAILURE':
            return {
                routes: [],
                loading: false,
                error: action.payload
            };
        default:
            return state.routeTable;
    }
};

export default updateRouteTable;