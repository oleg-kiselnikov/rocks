
const initialState = {
    crags: []
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'CRAGS_LOADED':
            return {
                crags: action.payload
            };
        default:
            return state;
    }
    return state;
};

export default reducer;