
const initialState = {
    crags: [],
    loading: true
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CRAGS_REQUESTED':
            return {
                crags: [],
                loading: true
            };
        case 'CRAGS_LOADED':
            return {
                crags: action.payload,
                loading: false
            };
        default:
            return state;
    }
    return state;
};

export default reducer;