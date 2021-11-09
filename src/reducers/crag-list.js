const updateCragList = (state, action) => {

    if (state === undefined) {
        return {
            crags: [],
            loading: true,
            error: null
        };
    }

    switch(action.type) {
        case 'FETCH_CRAGS_REQUEST':
            return {
                crags: [],
                loading: true,
                error: null
            };
        case 'FETCH_CRAGS_SUCCESS':
            return {
                crags: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_CRAGS_FAILURE':
            return {
                crags: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.cragList;
    }
};

export default updateCragList;