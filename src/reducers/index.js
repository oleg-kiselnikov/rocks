
const initialState = {
    crags: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {

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
            return state;
    }
};

export default reducer;